import { ArticleMetadata, Article } from './types'

// Sistema híbrido de carregamento de artigos (não modificar - essencial para produção)
export async function loadArticleContentHybrid(slug: string, metadata: ArticleMetadata): Promise<Article | undefined> {
  try {
    // Primeiro tenta import dinâmico (funciona em desenvolvimento e com artigos novos/editados)
    const contentModule = await import(`./content/${metadata.contentFile}.ts`)
    const content = contentModule.articleContent.content

    return {
      ...metadata,
      content
    }
  } catch (error) {
    console.error(`Erro ao carregar conteúdo do artigo ${slug}:`, error)
    
    // Fallback: tenta carregar do mapa estático (para produção Vercel)
    try {
      const staticContent = await loadStaticContent(metadata.contentFile)
      if (staticContent) {
        return {
          ...metadata,
          content: staticContent
        }
      }
    } catch (staticError) {
      console.error(`Erro no fallback estático para ${slug}:`, staticError)
    }
    
    return undefined
  }
}

// Mapa estático para produção Vercel (atualizar conforme necessário)
async function loadStaticContent(contentFile: string): Promise<string | undefined> {
  switch (contentFile) {
    // Artigos de teste
    case 'teste-de-artigo-editado-de-novo':
      return (await import('./content/teste-de-artigo-editado-de-novo')).articleContent.content
    case 'teste-de-artigo-editado':
      return (await import('./content/teste-de-artigo-editado')).articleContent.content
    case 'teste-de-artigo':
      return (await import('./content/teste-de-artigo')).articleContent.content
    
    // Artigos principais
    case 'lei-aurea':
      return (await import('./content/lei-aurea')).articleContent.content
    case 'lgpd-o-que-sua-empresa-precisa-saber':
      return (await import('./content/lgpd-o-que-sua-empresa-precisa-saber')).articleContent.content
    case 'direitos-consumidor-compras-online':
      return (await import('./content/direitos-consumidor-compras-online')).articleContent.content
    case 'reforma-tributaria-impactos-pequenas-empresas':
      return (await import('./content/reforma-tributaria-impactos-pequenas-empresas')).articleContent.content
    
    default:
      // Para novos artigos não mapeados, tenta import direto
      try {
        const module = await import(/* @vite-ignore */ `./content/${contentFile}.ts`)
        return module.articleContent.content
      } catch {
        return undefined
      }
  }
}