import { ArticleMetadata, Article } from './types';

import * as direitos_consumidor_compras_online from './content/direitos-consumidor-compras-online';
import * as lgpd_o_que_sua_empresa_precisa_saber from './content/lgpd-o-que-sua-empresa-precisa-saber';
import * as reforma_tributaria_impactos_pequenas_empresas from './content/reforma-tributaria-impactos-pequenas-empresas';
import * as teste_de_artigo_editado_de_novo_e_de_novo from './content/teste-de-artigo-editado-de-novo-e-de-novo';
import * as teste_de_artigo_editado_de_novo from './content/teste-de-artigo-editado-de-novo';
import * as teste_de_artigo_editado from './content/teste-de-artigo-editado';
import * as teste_de_artigo from './content/teste-de-artigo';

// Mapa estático de conteúdos (gerado automaticamente)
const STATIC_CONTENT_MAP: Record<string, string> = {
    'direitos-consumidor-compras-online': direitos_consumidor_compras_online.articleContent.content,
    'lgpd-o-que-sua-empresa-precisa-saber': lgpd_o_que_sua_empresa_precisa_saber.articleContent.content,
    'reforma-tributaria-impactos-pequenas-empresas': reforma_tributaria_impactos_pequenas_empresas.articleContent.content,
    'teste-de-artigo-editado-de-novo-e-de-novo': teste_de_artigo_editado_de_novo_e_de_novo.articleContent.content,
    'teste-de-artigo-editado-de-novo': teste_de_artigo_editado_de_novo.articleContent.content,
    'teste-de-artigo-editado': teste_de_artigo_editado.articleContent.content,
    'teste-de-artigo': teste_de_artigo.articleContent.content
};

// SISTEMA HÍBRIDO DEFINITIVO - NÃO MODIFICAR
export async function loadArticleContentHybrid(slug: string, metadata: ArticleMetadata): Promise<Article | undefined> {
  try {
    // 1. Primeiro tenta import dinâmico (desenvolvimento)
    try {
      const contentModule = await import(`./content/${metadata.contentFile}.ts`);
      return {
        ...metadata,
        content: contentModule.articleContent.content
      };
    } catch (dynamicError) {
      console.log('Import dinâmico falhou, usando estático:', dynamicError.message);
    }

    // 2. Fallback estático (produção)
    const staticContent = STATIC_CONTENT_MAP[metadata.contentFile];
    if (staticContent) {
      return {
        ...metadata,
        content: staticContent
      };
    }

    console.error('Conteúdo não encontrado:', metadata.contentFile);
    return undefined;
  } catch (error) {
    console.error('Erro ao carregar artigo:', error);
    return undefined;
  }
}