import { Article } from '@/data/articles'

// Estende a interface Article existente para incluir metadados de redação
export interface ArtigoRascunho extends Omit<Article, 'id' | 'slug'> {
  id?: string // Opcional para novos artigos
  slug?: string // Será gerado automaticamente
  status: StatusArtigo
  dataCreation: string
  dataUltimaEdicao: string
  tags?: string[]
  observacoes?: string
}

export type StatusArtigo = 
  | 'rascunho'
  | 'revisao' 
  | 'publicado'
  | 'arquivado'

// Categorias disponíveis conforme README.md
export const CATEGORIAS_ARTIGOS = [
  'Direito Civil',
  'Direito Tributário',
  'Direito Trabalhista',
  'Direito Empresarial',
  'Direito do Consumidor',
  'Direito Imobiliário',
  'Direito de Família',
  'Notícias Jurídicas'
] as const

export type CategoriaArtigo = typeof CATEGORIAS_ARTIGOS[number]

// Template para criação de artigos
export interface TemplateArtigo {
  id: string
  nome: string
  descricao: string
  categoria: CategoriaArtigo
  conteudoTemplate: string // HTML template with placeholders
  variaveis: VariavelTemplate[]
}

export interface VariavelTemplate {
  nome: string
  placeholder: string
  obrigatorio: boolean
  tipo: 'texto' | 'paragrafo' | 'lista'
}

// Configuração GitHub
export interface GitHubConfig {
  owner: string
  repo: string
  token: string
  branch: string
  filePath: string // Caminho para o arquivo articles.ts
}

// Serviços para manipular artigos
export interface ArtigoService {
  salvar: (artigo: ArtigoRascunho) => Promise<Article>
  listar: () => Promise<Article[]>
  buscarPorId: (id: string) => Promise<Article | undefined>
  excluir: (id: string) => Promise<void>
  publicar: (id: string) => Promise<Article>
}

// Utilitário para gerar slug
export const gerarSlug = (titulo: string): string => {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim()
}

// Utilitário para calcular tempo de leitura
export const calcularTempoLeitura = (conteudo: string): string => {
  const palavrasPorMinuto = 200
  const texto = conteudo.replace(/<[^>]*>/g, '') // Remove HTML tags
  const palavras = texto.trim().split(/\s+/).length
  const minutos = Math.max(1, Math.round(palavras / palavrasPorMinuto))
  return `${minutos} min`
}