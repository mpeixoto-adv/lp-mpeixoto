import type { ArticleMetadata } from './types.js'

export function parseMetadata(fileContent: string): ArticleMetadata[] {
  try {
    const parsed = JSON.parse(fileContent)
    if (!Array.isArray(parsed)) {
      return []
    }
    return parsed.filter((item): item is ArticleMetadata => {
      return !!item && typeof item === 'object' && 'id' in item && 'title' in item && 'slug' in item && 'contentFile' in item
    }).map(item => ({
      id: String(item.id),
      title: String(item.title),
      excerpt: String(item.excerpt ?? ''),
      author: String(item.author ?? ''),
      date: String(item.date ?? ''),
      category: String(item.category ?? ''),
      image: item.image ? String(item.image) : undefined,
      readTime: String(item.readTime ?? ''),
      slug: String(item.slug ?? ''),
      contentFile: String(item.contentFile ?? '')
    }))
  } catch (error) {
    console.error('Erro ao interpretar metadados (JSON):', error)
    return []
  }
}

export function sortMetadata(metadata: ArticleMetadata[]): void {
  metadata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function generateMetadataContent(metadata: ArticleMetadata[]): string {
  return `${JSON.stringify(metadata, null, 2)}\n`
}

export function generateArticleContent(content: string, tags?: string[]): string {
  const metadataLines = [`    lastModified: "${new Date().toISOString()}",`, '    views: 0']
  if (tags?.length) {
    metadataLines.push(`    tags: ${JSON.stringify(tags)}`)
  }

  return `export const articleContent = {
  content: \`${escapeBackticks(content)}\`,
  metadata: {
${metadataLines.join('\n')}
  }
}`
}

function escapeBackticks(value: string): string {
  return value.replace(/`/g, '\\`')
}
