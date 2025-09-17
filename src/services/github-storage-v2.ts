import { ArticleMetadata, Article } from '@/data/articles/types'
import { ArtigoRascunho, ArtigoService } from '@/lib/redacao-types'

interface StorageConfig {
  apiBaseUrl?: string
}

class GitHubStorageServiceV2 implements ArtigoService {
  private apiBaseUrl: string

  constructor(config?: StorageConfig) {
    this.apiBaseUrl = config?.apiBaseUrl ?? (import.meta.env.VITE_API_BASE_URL || '')
  }

  private get baseUrl() {
    return this.apiBaseUrl.replace(/\/$/, '')
  }

  private async request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      credentials: 'include',
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers as Record<string, string> | undefined)
      }
    })

    if (response.status === 204) {
      return undefined as unknown as T
    }

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      const errorMessage = data?.error || 'Erro na requisição'
      throw new Error(errorMessage)
    }

    return data as T
  }

  async listar(): Promise<Article[]> {
    const result = await this.request<{ data: ArticleMetadata[] }>('/api/articles', {
      method: 'GET'
    })

    return result.data.map(metadata => ({
      ...metadata,
      content: ''
    })) as Article[]
  }

  async buscarPorId(id: string): Promise<Article | undefined> {
    const result = await this.request<{ data: Article }>(`/api/articles/${id}`, {
      method: 'GET'
    })
    return result.data
  }

  async salvar(rascunho: ArtigoRascunho): Promise<Article> {
    const payload = {
      ...rascunho,
      image: rascunho.image || undefined
    }

    const isEditing = Boolean(rascunho.id)

    if (isEditing && rascunho.id) {
      const result = await this.request<{ data: Article; usuario: string }>(`/api/articles/${rascunho.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
      })
      return result.data
    }

    const result = await this.request<{ data: Article; usuario: string }>(`/api/articles`, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    return result.data
  }

  async excluir(id: string): Promise<void> {
    await this.request<void>(`/api/articles/${id}`, {
      method: 'DELETE'
    })
  }

  async publicar(id: string): Promise<Article> {
    const artigo = await this.buscarPorId(id)
    if (!artigo) {
      throw new Error('Artigo não encontrado')
    }
    return artigo
  }
}

export const criarGitHubStorageV2 = (config?: StorageConfig) => {
  return new GitHubStorageServiceV2(config)
}

export const githubStorageV2 = criarGitHubStorageV2()
