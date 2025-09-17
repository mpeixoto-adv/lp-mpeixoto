import vm from 'vm'
import type { ArticleMetadata } from './types.js'

export function parseMetadata(fileContent: string): ArticleMetadata[] {
  try {
    const match = fileContent.match(/export const articlesMetadata: ArticleMetadata\[\] = (\[[\s\S]*?\])/)
    if (!match) {
      return []
    }

    const sandbox = { ArticleMetadata: undefined }
    const script = new vm.Script(`result = ${match[1]}`)
    const context = vm.createContext({ ...sandbox, result: [] as ArticleMetadata[] })
    script.runInContext(context, { timeout: 50 })
    return Array.isArray(context.result) ? context.result as ArticleMetadata[] : []
  } catch (error) {
    console.error('Erro ao interpretar metadados:', error)
    return []
  }
}

export function sortMetadata(metadata: ArticleMetadata[]): void {
  metadata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function generateMetadataContent(metadata: ArticleMetadata[]): string {
  const formatted = metadata.map(article => `  {
    id: "${article.id}",
    title: "${escapeQuotes(article.title)}",
    excerpt: "${escapeQuotes(article.excerpt)}",
    author: "${escapeQuotes(article.author)}",
    date: "${article.date}",
    category: "${escapeQuotes(article.category)}",${article.image ? `\n    image: "${escapeQuotes(article.image)}",` : ''}
    readTime: "${article.readTime}",
    slug: "${article.slug}",
    contentFile: "${article.contentFile}"
  }`).join(',\n')

  return `import { ArticleMetadata, Article } from './types.js'
import { loadArticleContentHybrid } from './loader.js'

// Metadados dos artigos (para listagens e navegação)
export const articlesMetadata: ArticleMetadata[] = [
${formatted}
]

// Função para carregar artigo completo (usa sistema híbrido separado)
export async function loadArticleContent(slug: string): Promise<Article | undefined> {
  const metadata = articlesMetadata.find(article => article.slug === slug)
  if (!metadata) return undefined

  return loadArticleContentHybrid(slug, metadata)
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

export function generateArticleContent(content: string, tags?: string[]): string {
  const metadataLines = [`    lastModified: "${new Date().toISOString()}",`, '    views: 0']
  if (tags?.length) {
    metadataLines.push(`    tags: ${JSON.stringify(tags)}`)
  }

  return `export const articleContent = {
  content: \`${escapeBackticks(content)}\`,
  metadata: {
${metadataLines.join('\n')}
  }
}`
}

function escapeQuotes(value: string): string {
  return value.replace(/"/g, '\\"')
}

function escapeBackticks(value: string): string {
  return value.replace(/`/g, '\\`')
}
