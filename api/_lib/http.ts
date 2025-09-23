import type { VercelRequest, VercelResponse } from '@vercel/node'

export function setCors(req: VercelRequest, res: VercelResponse) {
  const configuredOrigins = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean)

  const requestOrigin = req.headers.origin
  let originToSend = requestOrigin

  if (configuredOrigins.length > 0) {
    if (requestOrigin && configuredOrigins.includes(requestOrigin)) {
      originToSend = requestOrigin
    } else {
      // fall back to the first configured origin so preflight succeeds
      originToSend = configuredOrigins[0]
    }
  }

  if (!originToSend) {
    originToSend = configuredOrigins[0] || ''
  }

  if (originToSend) {
    res.setHeader('Access-Control-Allow-Origin', originToSend)
    res.setHeader('Access-Control-Allow-Credentials', 'true')
  }
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
}

export function handleOptions(req: VercelRequest, res: VercelResponse): boolean {
  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return true
  }
  return false
}

export function sendJson<T>(res: VercelResponse, status: number, data: T) {
  res.status(status).setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(data))
}

export function sendError(res: VercelResponse, status: number, message: string) {
  sendJson(res, status, { error: message })
}

export async function readJsonBody<T = unknown>(req: VercelRequest): Promise<T | null> {
  return new Promise((resolve, reject) => {
    let body = ''

    req.on('data', chunk => {
      body += chunk
      // rudimentary guard to avoid huge payloads
      if (body.length > 1_000_000) {
        reject(new Error('Payload too large'))
      }
    })

    req.on('end', () => {
      if (!body) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(body))
      } catch (error) {
        reject(new Error('Invalid JSON payload'))
      }
    })

    req.on('error', reject)
  })
}
