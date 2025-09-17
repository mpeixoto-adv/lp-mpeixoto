import type { VercelRequest, VercelResponse } from '@vercel/node'
import { z } from 'zod'
import { setCors, handleOptions, readJsonBody, sendError, sendJson } from '../_lib/http.js'
import { ensureAuthenticated } from '../_lib/auth.js'
import { listArticles, saveArticle } from '../_lib/github.js'
import type { ArticleDraft } from '../_lib/types.js'

const articleSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3),
  excerpt: z.string().min(10),
  author: z.string().min(3),
  date: z.string(),
  category: z.string().min(3),
  image: z.string().url().optional().or(z.literal('')),
  readTime: z.string().optional(),
  slug: z.string().optional(),
  content: z.string().min(10),
  tags: z.array(z.string()).optional()
}).transform(data => ({
  ...data,
  image: data.image || undefined
}))

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res)
  if (handleOptions(req, res)) {
    return
  }

  const usuario = ensureAuthenticated(req, res)
  if (!usuario) {
    return
  }

  try {
    if (req.method === 'GET') {
      const articles = await listArticles()
      sendJson(res, 200, { data: articles })
      return
    }

    if (req.method === 'POST') {
      const body = await readJsonBody(req)
      const draft = articleSchema.parse(body) as ArticleDraft
      const article = await saveArticle(draft)
      sendJson(res, 201, { data: article, usuario })
      return
    }

    sendError(res, 405, 'Método não permitido')
  } catch (error) {
    console.error('Erro em /api/articles:', error)
    sendError(res, 500, error instanceof Error ? error.message : 'Erro interno')
  }
}
