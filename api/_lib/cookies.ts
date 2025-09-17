export interface CookieOptions {
  httpOnly?: boolean
  secure?: boolean
  sameSite?: 'Strict' | 'Lax' | 'None'
  path?: string
  maxAge?: number
}

export function serializeCookie(name: string, value: string, options: CookieOptions = {}): string {
  const segments = [`${name}=${value}`]

  if (options.maxAge !== undefined) {
    segments.push(`Max-Age=${Math.trunc(options.maxAge)}`)
  }

  if (options.path) {
    segments.push(`Path=${options.path}`)
  }

  if (options.httpOnly) {
    segments.push('HttpOnly')
  }

  if (options.secure) {
    segments.push('Secure')
  }

  if (options.sameSite) {
    segments.push(`SameSite=${options.sameSite}`)
  }

  return segments.join('; ')
}

export function parseCookies(cookieHeader: string | undefined): Record<string, string> {
  if (!cookieHeader) return {}

  return cookieHeader.split(';').reduce<Record<string, string>>((acc, cookie) => {
    const [key, ...rest] = cookie.trim().split('=')
    if (!key) return acc
    acc[key] = rest.join('=')
    return acc
  }, {})
}
