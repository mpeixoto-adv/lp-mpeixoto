import { Article } from '@/data/articles'
import { ArtigoRascunho, ArtigoService, GitHubConfig } from '@/lib/redacao-types'

class GitHubStorageService implements ArtigoService {
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

  async buscarArquivoAtual(): Promise<{ content: string; sha: string }> {
    const response = await fetch(
      `${this.apiUrl}/contents/${this.config.filePath}?ref=${this.config.branch}`,
      { headers: this.headers }
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error('GitHub API Error:', response.status, response.statusText, errorData)
      throw new Error(`Erro ao buscar arquivo: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const content = atob(data.content) // Decodifica base64

    return {
      content,
      sha: data.sha
    }
  }

  async atualizarArquivo(novoConteudo: string, sha: string, mensagem: string): Promise<void> {
    const response = await fetch(
      `${this.apiUrl}/contents/${this.config.filePath}`,
      {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify({
          message: mensagem,
          content: btoa(novoConteudo), // Codifica em base64
          sha: sha,
          branch: this.config.branch
        })
      }
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error('GitHub API Update Error:', response.status, response.statusText, errorData)
      throw new Error(`Erro ao atualizar arquivo: ${response.status} ${response.statusText}`)
    }
  }

  private parseArtigosFromFile(content: string): Article[] {
    try {
      // Extrai apenas o array de artigos do arquivo TypeScript
      const articlesMatch = content.match(/export const articles: Article\[\] = (\[[\s\S]*?\]);/)
      if (!articlesMatch) {
        throw new Error('Formato do arquivo articles.ts inválido')
      }

      // Avalia o JavaScript para obter o array
      // Nota: Em produção, seria melhor usar um parser mais robusto
      return eval(articlesMatch[1])
    } catch (error) {
      console.error('Erro ao fazer parse dos artigos:', error)
      return []
    }
  }

  private gerarNovoId(artigos: Article[]): string {
    const ids = artigos.map(a => parseInt(a.id)).filter(id => !isNaN(id))
    const maiorId = Math.max(0, ...ids)
    return (maiorId + 1).toString()
  }

  private gerarSlugUnico(titulo: string, artigos: Article[]): string {
    const slugBase = titulo
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    let slug = slugBase
    let contador = 1

    while (artigos.some(a => a.slug === slug)) {
      slug = `${slugBase}-${contador}`
      contador++
    }

    return slug
  }

  private formatarArtigoParaExport(artigo: Article): string {
    return `  {
    id: "${artigo.id}",
    title: "${artigo.title.replace(/"/g, '\\"')}",
    excerpt: "${artigo.excerpt.replace(/"/g, '\\"')}",
    content: \`
${artigo.content}
    \`,
    author: "${artigo.author}",
    date: "${artigo.date}",
    category: "${artigo.category}",${artigo.image ? `\n    image: "${artigo.image}",` : ''}
    readTime: "${artigo.readTime}",
    slug: "${artigo.slug}"
  }`
  }

  private gerarNovoArquivo(artigos: Article[]): string {
    const artigosFormatados = artigos.map(artigo => this.formatarArtigoParaExport(artigo))

    return `export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  readTime: string;
  slug: string;
}

export const articles: Article[] = [
${artigosFormatados.join(',\n')}
]; `
  }

  async listar(): Promise<Article[]> {
    try {
      const { content } = await this.buscarArquivoAtual()
      return this.parseArtigosFromFile(content)
    } catch (error) {
      console.error('Erro ao listar artigos:', error)
      return []
    }
  }

  async buscarPorId(id: string): Promise<Article | undefined> {
    const artigos = await this.listar()
    return artigos.find(a => a.id === id)
  }

  async salvar(rascunho: ArtigoRascunho): Promise<Article> {
    try {
      console.log('Iniciando salvamento do artigo:', rascunho.title)
      console.log('Configuração GitHub:', {
        owner: this.config.owner,
        repo: this.config.repo,
        branch: this.config.branch,
        filePath: this.config.filePath,
        hasToken: !!this.config.token
      })

      const { content, sha } = await this.buscarArquivoAtual()
      const artigos = this.parseArtigosFromFile(content)

      // Converte rascunho para artigo
      const artigo: Article = {
        id: rascunho.id || this.gerarNovoId(artigos),
        title: rascunho.title,
        excerpt: rascunho.excerpt,
        content: rascunho.content,
        author: rascunho.author,
        date: rascunho.date,
        category: rascunho.category,
        image: rascunho.image,
        readTime: rascunho.readTime,
        slug: rascunho.slug || this.gerarSlugUnico(rascunho.title, artigos)
      }

      console.log('Artigo processado:', artigo)

      // Atualiza ou adiciona o artigo
      const indiceExistente = artigos.findIndex(a => a.id === artigo.id)
      if (indiceExistente >= 0) {
        artigos[indiceExistente] = artigo
        console.log('Atualizando artigo existente no índice:', indiceExistente)
      } else {
        artigos.push(artigo)
        console.log('Adicionando novo artigo')
      }

      // Ordena por data (mais recentes primeiro)
      artigos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

      // Gera novo arquivo
      const novoConteudo = this.gerarNovoArquivo(artigos)

      // Salva no GitHub
      const mensagem = indiceExistente >= 0 
        ? `Atualiza artigo: ${artigo.title}` 
        : `Adiciona novo artigo: ${artigo.title}`

      console.log('Salvando no GitHub com mensagem:', mensagem)
      await this.atualizarArquivo(novoConteudo, sha, mensagem)

      console.log('Artigo salvo com sucesso!')
      return artigo
    } catch (error) {
      console.error('Erro detalhado ao salvar artigo:', error)
      if (error instanceof Error) {
        throw new Error(`Erro ao salvar: ${error.message}`)
      } else {
        throw new Error('Não foi possível salvar o artigo. Tente novamente.')
      }
    }
  }

  async excluir(id: string): Promise<void> {
    try {
      const { content, sha } = await this.buscarArquivoAtual()
      const artigos = this.parseArtigosFromFile(content)

      const artigoParaExcluir = artigos.find(a => a.id === id)
      if (!artigoParaExcluir) {
        throw new Error('Artigo não encontrado')
      }

      // Remove o artigo
      const novosArtigos = artigos.filter(a => a.id !== id)

      // Gera novo arquivo
      const novoConteudo = this.gerarNovoArquivo(novosArtigos)

      // Salva no GitHub
      await this.atualizarArquivo(
        novoConteudo,
        sha,
        `Remove artigo: ${artigoParaExcluir.title}`
      )
    } catch (error) {
      console.error('Erro ao excluir artigo:', error)
      throw new Error('Não foi possível excluir o artigo. Tente novamente.')
    }
  }

  async publicar(id: string): Promise<Article> {
    // Para este sistema simples, "publicar" é apenas salvar o artigo
    // Em um sistema mais complexo, poderia envolver mudanças de status
    const artigo = await this.buscarPorId(id)
    if (!artigo) {
      throw new Error('Artigo não encontrado')
    }
    return artigo
  }
}

// Configuração padrão (deve ser sobrescrita com valores reais)
const DEFAULT_CONFIG: GitHubConfig = {
  owner: 'seu-usuario',
  repo: 'seu-repositorio',
  token: 'seu-token-github',
  branch: 'main',
  filePath: 'src/data/articles.ts'
}

// Factory function para criar o serviço
export const criarGitHubStorage = (config?: Partial<GitHubConfig>): GitHubStorageService => {
  const configCompleta = { ...DEFAULT_CONFIG, ...config }
  return new GitHubStorageService(configCompleta)
}

// Instância padrão (pode ser configurada via variáveis de ambiente)
export const githubStorage = criarGitHubStorage({
  owner: import.meta.env.VITE_GITHUB_OWNER || DEFAULT_CONFIG.owner,
  repo: import.meta.env.VITE_GITHUB_REPO || DEFAULT_CONFIG.repo,
  token: import.meta.env.VITE_GITHUB_TOKEN || DEFAULT_CONFIG.token,
  branch: import.meta.env.VITE_GITHUB_BRANCH || DEFAULT_CONFIG.branch,
  filePath: import.meta.env.VITE_GITHUB_FILE_PATH || DEFAULT_CONFIG.filePath
})