import { ArticleMetadata, Article } from './types'
import { articlesMetadata, loadArticleContent } from './index'

// Utilitários para trabalhar com artigos

export function getArticlesByCategory(category: string): ArticleMetadata[] {
  return articlesMetadata.filter(article => article.category === category)
}

export function getArticlesByAuthor(author: string): ArticleMetadata[] {
  return articlesMetadata.filter(article => article.author === author)
}

export function getArticlesByDateRange(startDate: string, endDate: string): ArticleMetadata[] {
  return articlesMetadata.filter(article => {
    const articleDate = new Date(article.date)
    const start = new Date(startDate)
    const end = new Date(endDate)
    return articleDate >= start && articleDate <= end
  })
}

export function searchArticles(query: string): ArticleMetadata[] {
  const searchTerm = query.toLowerCase()
  
  return articlesMetadata.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.category.toLowerCase().includes(searchTerm) ||
    article.author.toLowerCase().includes(searchTerm)
  )
}

export function getRecentArticles(limit: number = 5): ArticleMetadata[] {
  return articlesMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export function getRelatedArticles(articleSlug: string, limit: number = 3): ArticleMetadata[] {
  const currentArticle = articlesMetadata.find(article => article.slug === articleSlug)
  if (!currentArticle) return []

  return articlesMetadata
    .filter(article => 
      article.slug !== articleSlug && 
      article.category === currentArticle.category
    )
    .slice(0, limit)
}

// Para gerar slug único
export function generateUniqueSlug(title: string): string {
  const baseSlug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()

  // Verifica se o slug já existe
  let slug = baseSlug
  let counter = 1
  
  while (articlesMetadata.some(article => article.slug === slug)) {
    slug = `${baseSlug}-${counter}`
    counter++
  }
  
  return slug
}

// Calcular tempo de leitura
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, '') // Remove HTML tags
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / wordsPerMinute))
  return `${minutes} min`
}

// Para obter próximo ID disponível
export function getNextArticleId(): string {
  const ids = articlesMetadata.map(article => parseInt(article.id)).filter(id => !isNaN(id))
  const maxId = Math.max(0, ...ids)
  return (maxId + 1).toString()
}