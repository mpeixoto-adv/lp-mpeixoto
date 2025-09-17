import jwt from 'jsonwebtoken'
import { getEnv } from './env'

const DEFAULT_EXPIRATION = '24h'

export interface TokenPayload {
  usuario: string
}

export function signToken(payload: TokenPayload, expiresIn = getEnv('JWT_EXPIRES_IN', DEFAULT_EXPIRATION)) {
  const secret = getEnv('JWT_SECRET')
  return jwt.sign(payload, secret, { expiresIn })
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const secret = getEnv('JWT_SECRET')
    return jwt.verify(token, secret) as TokenPayload
  } catch (error) {
    return null
  }
}
