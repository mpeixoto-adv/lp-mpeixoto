import { ArticleMetadata, Article } from '@/data/articles/types'
import { ArtigoRascunho, ArtigoService, GitHubConfig } from '@/lib/redacao-types'
import { generateUniqueSlug, getNextArticleId, calculateReadTime } from '@/data/articles/utils'

class GitHubStorageServiceV2 implements ArtigoService {
  private config: GitHubConfig

  constructor(config: GitHubConfig) {
    this.config = config
  }

  private get headers() {
    return {
      'Authorization': `token ${this.config.token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    }
  }

  private get apiUrl() {
    return `https://api.github.com/repos/${this.config.owner}/${this.config.repo}`
  }

  // Buscar arquivo específico
  async buscarArquivo(filePath: string): Promise<{ content: string; sha: string }> {
    const response = await fetch(
      `${this.apiUrl}/contents/${filePath}?ref=${this.config.branch}`,
      { headers: this.headers }
    )

    if (!response.ok) {
      if (response.status === 404) {
        // Arquivo não existe, retorna conteúdo vazio
        return { content: '', sha: '' }
      }
      throw new Error(`Erro ao buscar arquivo ${filePath}: ${response.status}`)
    }

    const data = await response.json()
    return {
      content: atob(data.content),
      sha: data.sha
    }
  }

  // Criar ou atualizar arquivo
  async salvarArquivo(filePath: string, conteudo: string, mensagem: string, sha?: string): Promise<void> {
    const body: any = {
      message: mensagem,
      content: btoa(conteudo),
      branch: this.config.branch
    }

    if (sha) {
      body.sha = sha
    }

    const response = await fetch(
      `${this.apiUrl}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(body)
      }
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error('GitHub API Error:', response.status, errorData)
      throw new Error(`Erro ao salvar arquivo ${filePath}: ${response.status}`)
    }
  }

  // Parse do arquivo de metadados
  private parseMetadataFromFile(content: string): ArticleMetadata[] {
    try {
      const metadataMatch = content.match(/export const articlesMetadata: ArticleMetadata\[\] = (\[[\s\S]*?\])/s)
      if (!metadataMatch) {
        return []
      }
      return eval(metadataMatch[1])
    } catch (error) {
      console.error('Erro ao fazer parse dos metadados:', error)
      return []
    }
  }

  // Gerar conteúdo do arquivo de metadados
  private gerarArquivoMetadados(articlesMetadata: ArticleMetadata[]): string {
    const metadataFormatted = articlesMetadata.map(article => `  {
    id: "${article.id}",
    title: "${article.title.replace(/"/g, '\\"')}",
    excerpt: "${article.excerpt.replace(/"/g, '\\"')}",
    author: "${article.author}",
    date: "${article.date}",
    category: "${article.category}",${article.image ? `\n    image: "${article.image}",` : ''}
    readTime: "${article.readTime}",
    slug: "${article.slug}",
    contentFile: "${article.contentFile}"
  }`).join(',\n')

    return `import { ArticleMetadata, Article } from './types'

// Metadados dos artigos (para listagens e navegação)
export const articlesMetadata: ArticleMetadata[] = [
${metadataFormatted}
]

// Função para carregar artigo completo (lazy loading)
export async function loadArticleContent(slug: string): Promise<Article | undefined> {
  const metadata = articlesMetadata.find(article => article.slug === slug)
  if (!metadata) return undefined

  try {
    const contentModule = await import(\`./content/\${metadata.contentFile}\`)
    const content = contentModule.articleContent.content

    return {
      ...metadata,
      content
    }
  } catch (error) {
    console.error(\`Erro ao carregar conteúdo do artigo \${slug}:\`, error)
    return undefined
  }
}

// Função para obter artigo por ID
export async function loadArticleById(id: string): Promise<Article | undefined> {
  const metadata = articlesMetadata.find(article => article.id === id)
  if (!metadata) return undefined

  return loadArticleContent(metadata.slug)
}

// Para compatibilidade com código existente
export async function loadAllArticles(): Promise<Article[]> {
  const articles: Article[] = []
  
  for (const metadata of articlesMetadata) {
    const article = await loadArticleContent(metadata.slug)
    if (article) {
      articles.push(article)
    }
  }
  
  return articles
}

// Export para compatibilidade com a estrutura antiga
export const articles = articlesMetadata.map(metadata => ({
  ...metadata,
  content: '' // Será carregado dinamicamente quando necessário
})) as Article[]`
  }

  // Gerar conteúdo do arquivo individual
  private gerarArquivoConteudo(conteudo: string, metadata?: any): string {
    return `export const articleContent = {
  content: \`${conteudo.replace(/`/g, '\\`')}\`,
  metadata: {
    lastModified: "${new Date().toISOString()}",
    views: 0${metadata?.tags ? `,\n    tags: ${JSON.stringify(metadata.tags)}` : ''}
  }
}`
  }

  async listar(): Promise<Article[]> {
    try {
      const { content } = await this.buscarArquivo('src/data/articles/index.ts')
      const articlesMetadata = this.parseMetadataFromFile(content)
      
      // Retorna metadados com conteúdo vazio (será carregado sob demanda)
      return articlesMetadata.map(metadata => ({
        ...metadata,
        content: ''
      })) as Article[]
    } catch (error) {
      console.error('Erro ao listar artigos:', error)
      return []
    }
  }

  async buscarPorId(id: string): Promise<Article | undefined> {
    const artigos = await this.listar()
    const metadata = artigos.find(a => a.id === id)
    if (!metadata) return undefined

    try {
      // Carrega o conteúdo do arquivo específico
      const { content } = await this.buscarArquivo(`src/data/articles/content/${metadata.slug}.ts`)
      const contentMatch = content.match(/content: `([\s\S]*?)`,/)
      const articleContent = contentMatch ? contentMatch[1] : ''

      return {
        ...metadata,
        content: articleContent
      }
    } catch (error) {
      console.error(`Erro ao carregar conteúdo do artigo ${id}:`, error)
      return metadata
    }
  }

  async salvar(rascunho: ArtigoRascunho): Promise<Article> {
    try {
      console.log('Salvando artigo na nova estrutura:', rascunho.title)

      // 1. Buscar metadados atuais
      const { content: indexContent, sha: indexSha } = await this.buscarArquivo('src/data/articles/index.ts')
      const currentMetadata = this.parseMetadataFromFile(indexContent)

      // 2. Criar metadados do novo/atualizado artigo
      const articleMetadata: ArticleMetadata = {
        id: rascunho.id || getNextArticleId(),
        title: rascunho.title,
        excerpt: rascunho.excerpt,
        author: rascunho.author,
        date: rascunho.date,
        category: rascunho.category,
        image: rascunho.image,
        readTime: rascunho.readTime,
        slug: rascunho.slug || generateUniqueSlug(rascunho.title),
        contentFile: rascunho.slug || generateUniqueSlug(rascunho.title)
      }

      // 3. Atualizar lista de metadados
      const updatedMetadata = [...currentMetadata]
      const existingIndex = updatedMetadata.findIndex(a => a.id === articleMetadata.id)
      
      if (existingIndex >= 0) {
        updatedMetadata[existingIndex] = articleMetadata
      } else {
        updatedMetadata.unshift(articleMetadata) // Adiciona no início
      }

      // Ordena por data (mais recentes primeiro)
      updatedMetadata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

      // 4. Salvar arquivo de metadados
      const newIndexContent = this.gerarArquivoMetadados(updatedMetadata)
      await this.salvarArquivo(
        'src/data/articles/index.ts',
        newIndexContent,
        existingIndex >= 0 ? `Atualiza metadados: ${articleMetadata.title}` : `Adiciona metadados: ${articleMetadata.title}`,
        indexSha
      )

      // 5. Salvar arquivo de conteúdo individual
      const contentFilePath = `src/data/articles/content/${articleMetadata.contentFile}.ts`
      const { sha: contentSha } = await this.buscarArquivo(contentFilePath)
      const contentFileContent = this.gerarArquivoConteudo(rascunho.content)
      
      await this.salvarArquivo(
        contentFilePath,
        contentFileContent,
        existingIndex >= 0 ? `Atualiza conteúdo: ${articleMetadata.title}` : `Adiciona conteúdo: ${articleMetadata.title}`,
        contentSha || undefined
      )

      console.log('Artigo salvo com sucesso na nova estrutura!')
      
      return {
        ...articleMetadata,
        content: rascunho.content
      }

    } catch (error) {
      console.error('Erro detalhado ao salvar artigo:', error)
      throw new Error(`Erro ao salvar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }

  async excluir(id: string): Promise<void> {
    try {
      // 1. Buscar metadados atuais
      const { content: indexContent, sha: indexSha } = await this.buscarArquivo('src/data/articles/index.ts')
      const currentMetadata = this.parseMetadataFromFile(indexContent)

      // 2. Encontrar artigo a ser excluído
      const articleToDelete = currentMetadata.find(a => a.id === id)
      if (!articleToDelete) {
        throw new Error('Artigo não encontrado')
      }

      // 3. Remover dos metadados
      const updatedMetadata = currentMetadata.filter(a => a.id !== id)

      // 4. Atualizar arquivo de metadados
      const newIndexContent = this.gerarArquivoMetadados(updatedMetadata)
      await this.salvarArquivo(
        'src/data/articles/index.ts',
        newIndexContent,
        `Remove metadados: ${articleToDelete.title}`,
        indexSha
      )

      // 5. Remover arquivo de conteúdo (através da API do GitHub)
      const contentFilePath = `src/data/articles/content/${articleToDelete.contentFile}.ts`
      const { sha: contentSha } = await this.buscarArquivo(contentFilePath)
      
      if (contentSha) {
        await fetch(
          `${this.apiUrl}/contents/${contentFilePath}`,
          {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify({
              message: `Remove conteúdo: ${articleToDelete.title}`,
              sha: contentSha,
              branch: this.config.branch
            })
          }
        )
      }

    } catch (error) {
      console.error('Erro ao excluir artigo:', error)
      throw new Error('Não foi possível excluir o artigo.')
    }
  }

  async publicar(id: string): Promise<Article> {
    const artigo = await this.buscarPorId(id)
    if (!artigo) {
      throw new Error('Artigo não encontrado')
    }
    return artigo
  }
}

// Configuração padrão
const DEFAULT_CONFIG: GitHubConfig = {
  owner: 'seu-usuario',
  repo: 'seu-repositorio', 
  token: 'seu-token-github',
  branch: 'main',
  filePath: 'src/data/articles/index.ts'
}

// Factory function
export const criarGitHubStorageV2 = (config?: Partial<GitHubConfig>): GitHubStorageServiceV2 => {
  const configCompleta = { ...DEFAULT_CONFIG, ...config }
  return new GitHubStorageServiceV2(configCompleta)
}

// Instância padrão
export const githubStorageV2 = criarGitHubStorageV2({
  owner: import.meta.env.VITE_GITHUB_OWNER || DEFAULT_CONFIG.owner,
  repo: import.meta.env.VITE_GITHUB_REPO || DEFAULT_CONFIG.repo,
  token: import.meta.env.VITE_GITHUB_TOKEN || DEFAULT_CONFIG.token,
  branch: import.meta.env.VITE_GITHUB_BRANCH || DEFAULT_CONFIG.branch,
  filePath: import.meta.env.VITE_GITHUB_FILE_PATH || DEFAULT_CONFIG.filePath
})