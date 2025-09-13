import { ArticleMetadata, Article } from './types'

// Metadados dos artigos (para listagens e navegaÁ„o)
export const articlesMetadata: ArticleMetadata[] = [
  {
    id: "1",
    title: "Nova Lei de Prote√ß√£o de Dados: O que sua empresa precisa saber",
    excerpt: "A LGPD trouxe mudan√ßas significativas para o tratamento de dados pessoais. Entenda as principais obriga√ß√µes e como se adequar.",
    author: "Dr. Marcelo Peixoto",
    date: "2024-01-15",
    category: "Direito Empresarial",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    readTime: "5 min",
    slug: "lgpd-o-que-sua-empresa-precisa-saber",
    contentFile: "lgpd-o-que-sua-empresa-precisa-saber"
  },
  {
    id: "2",
    title: "Direitos do Consumidor em Compras Online",
    excerpt: "Conhe√ßa seus direitos ao realizar compras pela internet e saiba como se proteger de fraudes e problemas.",
    author: "Dra. Ana Paula Santos",
    date: "2024-01-10",
    category: "Direito do Consumidor",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    readTime: "4 min",
    slug: "direitos-consumidor-compras-online",
    contentFile: "direitos-consumidor-compras-online"
  },
  {
    id: "3",
    title: "Reforma Tribut√°ria: Impactos para Pequenas Empresas",
    excerpt: "Entenda as principais mudan√ßas da reforma tribut√°ria e como elas afetar√£o o dia a dia das pequenas e m√©dias empresas.",
    author: "Dr. Roberto Silva",
    date: "2024-01-05",
    category: "Direito Tribut√°rio",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072",
    readTime: "6 min",
    slug: "reforma-tributaria-impactos-pequenas-empresas",
    contentFile: "reforma-tributaria-impactos-pequenas-empresas"
  }
]

// FunÁ„o para carregar artigo completo (lazy loading)
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
    console.error(`Erro ao carregar conte˙do do artigo ${slug}:`, error)
    return undefined
  }
}

// FunÁ„o para obter artigo por ID
export async function loadArticleById(id: string): Promise<Article | undefined> {
  const metadata = articlesMetadata.find(article => article.id === id)
  if (!metadata) return undefined

  return loadArticleContent(metadata.slug)
}

// Para compatibilidade com cÛdigo existente
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
  content: '' // Ser· carregado dinamicamente quando necess·rio
})) as Article[]