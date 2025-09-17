import type { VercelRequest, VercelResponse } from '@vercel/node'
import { setCors, handleOptions, sendError, sendJson } from './_lib/http'
import { parseCookies, serializeCookie } from './_lib/cookies'
import { verifyToken } from './_lib/jwt'

const COOKIE_NAME = 'auth-token'

export default function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res)
  if (handleOptions(req, res)) {
    return
  }

  if (req.method !== 'GET') {
    sendError(res, 405, 'Método não permitido')
    return
  }

  const cookies = parseCookies(req.headers.cookie)
  const token = cookies[COOKIE_NAME]

  if (!token) {
    sendError(res, 401, 'Não autenticado')
    return
  }

  const payload = verifyToken(token)
  if (!payload) {
    const expired = serializeCookie(COOKIE_NAME, '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax',
      path: '/',
      maxAge: 0
    })
    res.setHeader('Set-Cookie', expired)
    sendError(res, 401, 'Sessão inválida')
    return
  }

  sendJson(res, 200, { usuario: payload.usuario })
}
