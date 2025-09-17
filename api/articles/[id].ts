import type { VercelRequest, VercelResponse } from '@vercel/node'
import { z } from 'zod'
import { setCors, handleOptions, readJsonBody, sendError, sendJson } from '../_lib/http'
import { ensureAuthenticated } from '../_lib/auth'
import { deleteArticle, getArticleById, saveArticle } from '../_lib/github'

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

  const { id } = req.query
  const articleId = Array.isArray(id) ? id[0] : id
  if (!articleId) {
    sendError(res, 400, 'ID não informado')
    return
  }

  try {
    if (req.method === 'GET') {
      const article = await getArticleById(articleId)
      if (!article) {
        sendError(res, 404, 'Artigo não encontrado')
        return
      }
      sendJson(res, 200, { data: article })
      return
    }

    if (req.method === 'PUT') {
      const body = await readJsonBody(req)
      const draft = articleSchema.parse({ ...body, id: articleId })
      const article = await saveArticle({ ...draft, id: articleId })
      sendJson(res, 200, { data: article, usuario })
      return
    }

    if (req.method === 'DELETE') {
      await deleteArticle(articleId)
      res.status(204).end()
      return
    }

    sendError(res, 405, 'Método não permitido')
  } catch (error) {
    console.error(`Erro em /api/articles/${articleId}:`, error)
    sendError(res, 500, error instanceof Error ? error.message : 'Erro interno')
  }
}
