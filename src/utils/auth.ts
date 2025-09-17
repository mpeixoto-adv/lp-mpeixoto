interface ApiOptions extends RequestInit {
  skipJson?: boolean
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

async function apiFetch<T = unknown>(path: string, options: ApiOptions = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> | undefined)
    }
  })

  if (options.skipJson || response.status === 204) {
    return undefined as T
  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = data?.error || 'Erro ao comunicar com o servidor'
    throw new Error(message)
  }

  return data as T
}

export async function login(usuario: string, senha: string): Promise<string> {
  const result = await apiFetch<{ usuario: string }>('/api/login', {
    method: 'POST',
    body: JSON.stringify({ usuario, senha })
  })
  return result.usuario
}

export async function logout(): Promise<void> {
  await apiFetch('/api/logout', {
    method: 'POST',
    skipJson: true
  })
}

export async function recuperarSessao(): Promise<string | null> {
  try {
    const result = await apiFetch<{ usuario: string }>('/api/session', {
      method: 'GET'
    })
    return result.usuario
  } catch (error) {
    return null
  }
}
