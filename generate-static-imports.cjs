#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Lê todos os arquivos de conteúdo
const contentDir = path.join(__dirname, 'src/data/articles/content');
const contentFiles = fs.readdirSync(contentDir)
  .filter(file => file.endsWith('.ts'))
  .map(file => file.replace('.ts', ''));

// Gera imports estáticos
const imports = contentFiles.map(file => 
  `import * as ${file.replace(/[^a-zA-Z0-9]/g, '_')} from './content/${file}';`
).join('\n');

// Gera mapa estático
const mapEntries = contentFiles.map(file => {
  const varName = file.replace(/[^a-zA-Z0-9]/g, '_');
  return `    '${file}': ${varName}.articleContent.content`;
}).join(',\n');

// Template final SEMPRE híbrido
const template = `import { ArticleMetadata, Article } from './types';

${imports}

// Mapa estático de conteúdos (gerado automaticamente)
const STATIC_CONTENT_MAP: Record<string, string> = {
${mapEntries}
};

// SISTEMA HÍBRIDO DEFINITIVO - NÃO MODIFICAR
export async function loadArticleContentHybrid(slug: string, metadata: ArticleMetadata): Promise<Article | undefined> {
  try {
    // 1. Primeiro tenta import dinâmico (desenvolvimento)
    try {
      const contentModule = await import(\`./content/\${metadata.contentFile}.ts\`);
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
}`;

// Sobrescreve o loader
fs.writeFileSync(path.join(__dirname, 'src/data/articles/loader.ts'), template);

console.log('✅ Loader híbrido gerado com', contentFiles.length, 'artigos');
console.log('📝 Artigos incluídos:', contentFiles.join(', '));