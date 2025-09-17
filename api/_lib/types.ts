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
  contentFile: string
}

export interface Article extends ArticleMetadata {
  content: string
}

export interface ArticleDraft {
  id?: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image?: string
  readTime?: string
  slug?: string
  content: string
  status?: string
  dataCreation?: string
  dataUltimaEdicao?: string
  tags?: string[]
  observacoes?: string
}

export interface GitHubConfig {
  owner: string
  repo: string
  token: string
  branch: string
  filePath: string
}
