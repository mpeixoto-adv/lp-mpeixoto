import { getEnv } from './env.js'
import { base64ToString, stringToBase64 } from './encoding.js'
import type { Article, ArticleDraft, ArticleMetadata } from './types.js'
import { generateMetadataContent, generateArticleContent, parseMetadata, sortMetadata } from './metadata.js'

interface GitHubFile {
  content: string
  sha: string
}

const API_BASE = 'https://api.github.com'

function getConfig() {
  return {
    owner: getEnv('GITHUB_OWNER'),
    repo: getEnv('GITHUB_REPO'),
    token: getEnv('GITHUB_TOKEN'),
    branch: getEnv('GITHUB_BRANCH', 'main'),
    filePath: getEnv('GITHUB_FILE_PATH', 'src/data/articles/index.ts')
  }
}

async function githubRequest(path: string, init: RequestInit = {}) {
  const { token } = getConfig()
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      ...headers,
      ...(init.headers as Record<string, string> | undefined)
    }
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText)
    throw new Error(`GitHub API error ${response.status}: ${errorText}`)
  }

  return response
}

export async function getFileContent(filePath: string): Promise<GitHubFile> {
  const { owner, repo, branch } = getConfig()
  const response = await githubRequest(`/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`, {
    method: 'GET'
  })

  const json = await response.json() as { content: string; sha: string }
  return {
    content: base64ToString(json.content),
    sha: json.sha
  }
}

export async function putFileContent(
  filePath: string,
  content: string,
  message: string,
  sha?: string
): Promise<void> {
  const { owner, repo, branch } = getConfig()

  await githubRequest(`/repos/${owner}/${repo}/contents/${filePath}`, {
    method: 'PUT',
    body: JSON.stringify({
      message,
      content: stringToBase64(content),
      sha,
      branch
    })
  })
}

export async function deleteFile(filePath: string, message: string, sha: string): Promise<void> {
  const { owner, repo, branch } = getConfig()

  await githubRequest(`/repos/${owner}/${repo}/contents/${filePath}`, {
    method: 'DELETE',
    body: JSON.stringify({
      message,
      sha,
      branch
    })
  })
}

export async function listArticles(): Promise<ArticleMetadata[]> {
  const { filePath } = getConfig()
  const { content } = await getFileContent(filePath)
  const metadata = parseMetadata(content)
  return metadata
}

export async function getArticleById(id: string): Promise<Article | null> {
  const metadata = await listArticles()
  const articleMeta = metadata.find(article => article.id === id)
  if (!articleMeta) return null

  const { content } = await getFileContent(`src/data/articles/content/${articleMeta.contentFile}.ts`)
  const match = content.match(/content: `([\s\S]*?)`,/)
  const articleContent = match ? match[1] : ''

  return {
    ...articleMeta,
    content: articleContent
  }
}

function ensureReadTime(draft: ArticleDraft, content: string): string {
  if (draft.readTime) return draft.readTime
  const words = content.replace(/<[^>]*>/g, '').trim().split(/\s+/).filter(Boolean)
  const minutes = Math.max(1, Math.round(words.length / 200))
  return `${minutes} min`
}

function generateSlug(title: string, desiredSlug: string | undefined, existing: ArticleMetadata[], currentId?: string): string {
  const baseSlug = (desiredSlug || title)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()

  let slug = baseSlug || 'artigo'
  let counter = 1
  while (existing.some(article => article.slug === slug && article.id !== currentId)) {
    slug = `${baseSlug}-${counter}`
    counter += 1
  }

  return slug
}

function nextArticleId(existing: ArticleMetadata[]): string {
  const ids = existing
    .map(article => Number.parseInt(article.id, 10))
    .filter(id => !Number.isNaN(id))
  const maxId = ids.length ? Math.max(...ids) : 0
  return (maxId + 1).toString()
}

export async function saveArticle(draft: ArticleDraft): Promise<Article> {
  const { filePath } = getConfig()
  const { content: indexContent, sha: indexSha } = await getFileContent(filePath)
  const metadataList = parseMetadata(indexContent)

  const isEditing = Boolean(draft.id)
  const existingArticle = draft.id ? metadataList.find(article => article.id === draft.id) : undefined

  const slug = generateSlug(draft.title, draft.slug, metadataList, draft.id)
  const contentFile = existingArticle?.contentFile ?? slug
  const id = draft.id ?? nextArticleId(metadataList)
  const readTime = ensureReadTime(draft, draft.content)

  const updatedArticle: ArticleMetadata = {
    id,
    title: draft.title,
    excerpt: draft.excerpt,
    author: draft.author,
    date: draft.date,
    category: draft.category,
    image: draft.image,
    readTime,
    slug,
    contentFile
  }

  const updatedMetadata = metadataList.filter(article => article.id !== id)
  updatedMetadata.push(updatedArticle)
  sortMetadata(updatedMetadata)

  const metadataFile = generateMetadataContent(updatedMetadata)
  await putFileContent(
    filePath,
    metadataFile,
    isEditing ? `Atualiza metadados: ${updatedArticle.title}` : `Adiciona metadados: ${updatedArticle.title}`,
    indexSha
  )

  const contentFilePath = `src/data/articles/content/${contentFile}.ts`
  let sha: string | undefined
  try {
    const current = await getFileContent(contentFilePath)
    sha = current.sha
  } catch (error) {
    sha = undefined
  }

  const articleFileContent = generateArticleContent(draft.content, draft.tags)
  await putFileContent(
    contentFilePath,
    articleFileContent,
    isEditing ? `Atualiza conteúdo: ${updatedArticle.title}` : `Adiciona conteúdo: ${updatedArticle.title}`,
    sha
  )

  return {
    ...updatedArticle,
    content: draft.content
  }
}

export async function deleteArticle(id: string): Promise<void> {
  const { filePath } = getConfig()
  const { content: indexContent, sha: indexSha } = await getFileContent(filePath)
  const metadataList = parseMetadata(indexContent)

  const articleToDelete = metadataList.find(article => article.id === id)
  if (!articleToDelete) {
    throw new Error('Artigo não encontrado')
  }

  const updatedMetadata = metadataList.filter(article => article.id !== id)
  const metadataFile = generateMetadataContent(updatedMetadata)
  await putFileContent(
    filePath,
    metadataFile,
    `Remove metadados: ${articleToDelete.title}`,
    indexSha
  )

  const contentFilePath = `src/data/articles/content/${articleToDelete.contentFile}.ts`
  try {
    const { sha } = await getFileContent(contentFilePath)
    await deleteFile(contentFilePath, `Remove conteúdo: ${articleToDelete.title}`, sha)
  } catch (error) {
    // Already removed or missing – ignore
  }
}
