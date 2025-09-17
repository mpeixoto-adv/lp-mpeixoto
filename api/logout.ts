import type { VercelRequest, VercelResponse } from '@vercel/node'
import { setCors, handleOptions, sendError, sendJson } from './_lib/http.js'
import { serializeCookie } from './_lib/cookies.js'

const COOKIE_NAME = 'auth-token'

export default function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res)
  if (handleOptions(req, res)) {
    return
  }

  if (req.method !== 'POST') {
    sendError(res, 405, 'Método não permitido')
    return
  }

  const secure = process.env.NODE_ENV === 'production'
  const cookie = serializeCookie(COOKIE_NAME, '', {
    httpOnly: true,
    secure,
    sameSite: secure ? 'Strict' : 'Lax',
    path: '/',
    maxAge: 0
  })

  res.setHeader('Set-Cookie', cookie)
  sendJson(res, 200, { sucesso: true })
}
