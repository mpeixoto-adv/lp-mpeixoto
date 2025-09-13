// Tipos para a nova estrutura de artigos

export interface ArticleMetadata {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image?: string
  readTime: string
  slug: string
  contentFile: string // Nome do arquivo de conteúdo
}

export interface ArticleContent {
  content: string
  metadata?: {
    tags?: string[]
    lastModified?: string
    views?: number
  }
}

export interface Article extends ArticleMetadata {
  content: string
}

// Para compatibilidade com código existente
export type { Article as LegacyArticle } from '../articles'