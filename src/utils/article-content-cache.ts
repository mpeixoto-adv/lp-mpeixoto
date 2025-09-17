import { LegacyArticle } from '@/data/articles-adapter'

const CACHE_KEY = 'redacao-article-content-cache'
const CACHE_TTL = 1000 * 60 * 5 // 5 minutos

interface CachePayload {
  timestamp: number
  data: Record<string, LegacyArticle>
}

function isStorageAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined'
}

function readCache(): CachePayload | null {
  if (!isStorageAvailable()) return null
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const payload = JSON.parse(raw) as CachePayload
    if (!payload?.data) return null
    if (Date.now() - payload.timestamp > CACHE_TTL) {
      window.sessionStorage.removeItem(CACHE_KEY)
      return null
    }
    return payload
  } catch (error) {
    console.error('Falha ao ler cache de conteúdo do artigo:', error)
    return null
  }
}

function writeCache(payload: CachePayload): void {
  if (!isStorageAvailable()) return
  try {
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(payload))
  } catch (error) {
    console.error('Falha ao salvar cache de conteúdo do artigo:', error)
  }
}

export function getCachedArticle(slug: string): LegacyArticle | null {
  const payload = readCache()
  if (!payload) return null
  return payload.data[slug] ?? null
}

export function setCachedArticle(article: LegacyArticle): void {
  if (!isStorageAvailable()) return
  try {
    const payload = readCache() ?? { timestamp: Date.now(), data: {} }
    payload.data[article.slug] = article
    payload.timestamp = Date.now()
    writeCache(payload)
  } catch (error) {
    console.error('Falha ao atualizar cache de conteúdo do artigo:', error)
  }
}

export function clearArticleContentCache(): void {
  if (!isStorageAvailable()) return
  try {
    window.sessionStorage.removeItem(CACHE_KEY)
  } catch (error) {
    console.error('Falha ao limpar cache de conteúdo do artigo:', error)
  }
}
