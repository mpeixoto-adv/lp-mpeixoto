import metadata from './metadata.json'
import { ArticleMetadata, Article } from './types'
import { loadArticleContentHybrid } from './loader'

const articlesMetadata = (metadata as ArticleMetadata[]).map((item) => ({ ...item }))

export { articlesMetadata }

export async function loadArticleContent(slug: string): Promise<Article | undefined> {
  const found = articlesMetadata.find(article => article.slug === slug)
  if (!found) {
    return undefined
  }
  return loadArticleContentHybrid(slug, found)
}

export async function loadArticleById(id: string): Promise<Article | undefined> {
  const found = articlesMetadata.find(article => article.id === id)
  if (!found) {
    return undefined
  }
  return loadArticleContent(found.slug)
}

export async function loadAllArticles(): Promise<Article[]> {
  const results: Article[] = []
  for (const metadataItem of articlesMetadata) {
    const article = await loadArticleContent(metadataItem.slug)
    if (article) {
      results.push(article)
    }
  }
  return results
}

export const articles = articlesMetadata.map(metadataItem => ({
  ...metadataItem,
  content: ''
})) as Article[]
