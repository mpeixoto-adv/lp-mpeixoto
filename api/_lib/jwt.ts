import jwt, { type SignOptions } from 'jsonwebtoken'
import { getEnv } from './env.js'

const DEFAULT_EXPIRATION = '24h'

export interface TokenPayload {
  usuario: string
}

type ExpiresInValue = SignOptions['expiresIn']

function resolveExpiresIn(explicit?: ExpiresInValue): ExpiresInValue {
  if (explicit !== undefined) {
    return explicit
  }
  const configured = getEnv('JWT_EXPIRES_IN', DEFAULT_EXPIRATION)
  return configured as ExpiresInValue
}

export function signToken(payload: TokenPayload, expiresIn?: ExpiresInValue) {
  const secret = getEnv('JWT_SECRET')
  const resolved = resolveExpiresIn(expiresIn)
  return jwt.sign(payload, secret, { expiresIn: resolved })
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const secret = getEnv('JWT_SECRET')
    return jwt.verify(token, secret) as TokenPayload
  } catch (error) {
    return null
  }
}
