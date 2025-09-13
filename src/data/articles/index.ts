import { ArticleMetadata, Article } from './types'

// Metadados dos artigos (para listagens e navegação)
export const articlesMetadata: ArticleMetadata[] = [
  {
    id: "5",
    title: "TesteDeArtigo22",
    excerpt: "ResumoDoArtigo",
    author: "Dr. Marcelo Peixoto",
    date: "2025-09-13",
    category: "Direito Imobiliário",
    readTime: "1 min",
    slug: "testedeartigo22",
    contentFile: "testedeartigo22"
  }
]

// Função para carregar artigo completo (lazy loading)
export async function loadArticleContent(slug: string): Promise<Article | undefined> {
  const metadata = articlesMetadata.find(article => article.slug === slug)
  if (!metadata) return undefined

  try {
    const contentModule = await import(`./content/${metadata.contentFile}`)
    const content = contentModule.articleContent.content

    return {
      ...metadata,
      content
    }
  } catch (error) {
    console.error(`Erro ao carregar conteúdo do artigo ${slug}:`, error)
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
})) as Article[]