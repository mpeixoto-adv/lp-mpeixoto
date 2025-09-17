import type { VercelRequest, VercelResponse } from '@vercel/node'
import { parseCookies } from './cookies.js'
import { verifyToken } from './jwt.js'
import { sendError } from './http.js'

const COOKIE_NAME = 'auth-token'

export function getAuthenticatedUser(req: VercelRequest): string | null {
  const cookies = parseCookies(req.headers.cookie)
  const token = cookies[COOKIE_NAME]
  if (!token) return null
  const payload = verifyToken(token)
  return payload?.usuario ?? null
}

export function ensureAuthenticated(req: VercelRequest, res: VercelResponse): string | null {
  const usuario = getAuthenticatedUser(req)
  if (!usuario) {
    sendError(res, 401, 'Não autenticado')
    return null
  }
  return usuario
}
