import type { VercelRequest, VercelResponse } from '@vercel/node'
import bcrypt from 'bcryptjs'
import { setCors, handleOptions, readJsonBody, sendError, sendJson } from './_lib/http'
import { getEnv, optionalEnv } from './_lib/env'
import { serializeCookie } from './_lib/cookies'
import { signToken } from './_lib/jwt'
import type { TokenPayload } from './_lib/jwt'

interface LoginBody {
  usuario: string
  senha: string
}

const COOKIE_NAME = 'auth-token'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res)
  if (handleOptions(req, res)) {
    return
  }

  if (req.method !== 'POST') {
    sendError(res, 405, 'Método não permitido')
    return
  }

  let body: LoginBody | null = null
  try {
    body = await readJsonBody<LoginBody>(req)
  } catch (error) {
    sendError(res, 400, error instanceof Error ? error.message : 'JSON inválido')
    return
  }

  if (!body?.usuario || !body?.senha) {
    sendError(res, 400, 'Credenciais incompletas')
    return
  }

  const allowedUser = optionalEnv('AUTH_ALLOWED_USER') || 'adv'
  if (body.usuario !== allowedUser) {
    sendError(res, 401, 'Credenciais inválidas')
    return
  }

  const passwordHash = getEnv('AUTH_PASSWORD_HASH')
  const passwordMatch = await bcrypt.compare(body.senha, passwordHash)
  if (!passwordMatch) {
    sendError(res, 401, 'Credenciais inválidas')
    return
  }

  const payload: TokenPayload = { usuario: body.usuario }
  const token = signToken(payload)

  const secure = process.env.NODE_ENV === 'production'
  const cookie = serializeCookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure,
    sameSite: secure ? 'Strict' : 'Lax',
    path: '/',
    maxAge: 60 * 60 * 24 // 24 horas
  })

  res.setHeader('Set-Cookie', cookie)
  sendJson(res, 200, { usuario: body.usuario })
}
