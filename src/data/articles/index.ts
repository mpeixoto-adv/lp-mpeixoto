import { ArticleMetadata, Article } from './types'

// Metadados dos artigos (para listagens e navegação)
export const articlesMetadata: ArticleMetadata[] = [
  {
    id: "5",
    title: "Teste de artigo editado de novo e de novo",
    excerpt: "Testando novo artigo editado de novo e de novo",
    author: "Dr. Marcelo Peixoto Editado",
    date: "2025-09-13",
    category: "Direito Empresarial",
    readTime: "1 min",
    slug: "teste-de-artigo-editado-de-novo-e-de-novo",
    contentFile: "teste-de-artigo-editado-de-novo-e-de-novo"
  },
  {
    id: "4",
    title: "Lei Aurea",
    excerpt: "Resumo Lei aurea",
    author: "Dr. Marcelo Peixoto",
    date: "2025-09-13",
    category: "Direito Civil",
    image: "https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "1 min",
    slug: "lei-aurea",
    contentFile: "lei-aurea"
  },
  {
    id: "1",
    title: "Nova Lei de Proteção de Dados: O que sua empresa precisa saber",
    excerpt: "A LGPD trouxe mudanças significativas para o tratamento de dados pessoais. Entenda as principais obrigações e como se adequar.",
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
    excerpt: "Conheça seus direitos ao realizar compras pela internet e saiba como se proteger de fraudes e problemas.",
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
    title: "Reforma Tributária: Impactos para Pequenas Empresas",
    excerpt: "Entenda as principais mudanças da reforma tributária e como elas afetarão o dia a dia das pequenas e médias empresas.",
    author: "Dr. Roberto Silva",
    date: "2024-01-05",
    category: "Direito Tributário",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072",
    readTime: "6 min",
    slug: "reforma-tributaria-impactos-pequenas-empresas",
    contentFile: "reforma-tributaria-impactos-pequenas-empresas"
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