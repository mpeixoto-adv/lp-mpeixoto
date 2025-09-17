import { LegacyArticle } from '@/data/articles-adapter'

const CACHE_KEY = 'redacao-articles-cache'
const CACHE_TTL = 1000 * 60 * 2 // 2 minutos

interface CachePayload {
  timestamp: number
  data: LegacyArticle[]
}

function isStorageAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined'
}

export function getCachedArticles(): LegacyArticle[] | null {
  if (!isStorageAvailable()) return null

  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null

    const payload = JSON.parse(raw) as CachePayload
    if (!payload?.data || !Array.isArray(payload.data)) {
      return null
    }

    if (Date.now() - payload.timestamp > CACHE_TTL) {
      window.sessionStorage.removeItem(CACHE_KEY)
      return null
    }

    return payload.data
  } catch (error) {
    console.error('Falha ao recuperar cache de artigos:', error)
    return null
  }
}

export function setCachedArticles(articles: LegacyArticle[]): void {
  if (!isStorageAvailable()) return

  try {
    const payload: CachePayload = {
      timestamp: Date.now(),
      data: articles
    }
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(payload))
  } catch (error) {
    console.error('Falha ao salvar cache de artigos:', error)
  }
}

export function clearArticlesCache(): void {
  if (!isStorageAvailable()) return
  try {
    window.sessionStorage.removeItem(CACHE_KEY)
  } catch (error) {
    console.error('Falha ao limpar cache de artigos:', error)
  }
}
