// Adaptador para manter compatibilidade com código existente
// enquanto migra gradualmente para a nova estrutura

import { articlesMetadata, loadArticleContent, loadAllArticles } from './articles/index'
import { Article } from './articles/types'

// Interface original mantida para compatibilidade
export interface LegacyArticle {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image?: string
  readTime: string
  slug: string
}

// Export da lista de artigos para compatibilidade
// Carrega apenas metadados inicialmente (performance otimizada)
export const articles: LegacyArticle[] = articlesMetadata.map(metadata => ({
  ...metadata,
  content: '' // Será carregado sob demanda
}))

// Função para carregar artigo específico com conteúdo
export async function getArticleBySlug(slug: string): Promise<LegacyArticle | undefined> {
  const article = await loadArticleContent(slug)
  return article as LegacyArticle | undefined
}

// Função para carregar artigo por ID
export async function getArticleById(id: string): Promise<LegacyArticle | undefined> {
  const metadata = articlesMetadata.find(article => article.id === id)
  if (!metadata) return undefined
  
  const article = await loadArticleContent(metadata.slug)
  return article as LegacyArticle | undefined
}

// Carregar todos os artigos (use com moderação para performance)
export async function getAllArticlesWithContent(): Promise<LegacyArticle[]> {
  const articles = await loadAllArticles()
  return articles as LegacyArticle[]
}

// Carregar apenas metadados (rápido para listagens)
export function getArticlesMetadata(): LegacyArticle[] {
  return articles
}

// Por categoria
export function getArticlesByCategory(category: string): LegacyArticle[] {
  return articles.filter(article => article.category === category)
}

// Artigos recentes
export function getRecentArticles(limit: number = 5): LegacyArticle[] {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

// Para busca
export function searchArticles(query: string): LegacyArticle[] {
  const searchTerm = query.toLowerCase()
  
  return articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.category.toLowerCase().includes(searchTerm)
  )
}