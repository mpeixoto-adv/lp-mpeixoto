import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { RedacaoEditor } from '@/components/RedacaoEditor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText, Plus, RefreshCw } from 'lucide-react'
import { ArtigoRascunho } from '@/lib/redacao-types'
import { githubStorageV2 } from '@/services/github-storage-v2'
import { Article } from '@/data/articles/types'
import { clearArticlesCache } from '@/utils/articles-cache'
import { clearArticleContentCache } from '@/utils/article-content-cache'
import { useAuth } from '@/contexts/AuthContext'

const RedacaoPage = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const artigoId = searchParams.get('id')
  const [modo, setModo] = useState<'lista' | 'editor' | 'preview'>('lista')
  const [artigos, setArtigos] = useState<Article[]>([])
  const [artigoAtual, setArtigoAtual] = useState<ArtigoRascunho | undefined>()
  const [artigoPreview, setArtigoPreview] = useState<ArtigoRascunho | undefined>()
  const [artigoEditor, setArtigoEditor] = useState<ArtigoRascunho | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      carregarArtigos()
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (artigoId) {
      carregarArtigo(artigoId)
      setModo('editor')
    } else {
      setModo('lista')
    }
  }, [artigoId])

  const carregarArtigos = async (forceRefresh = false) => {
    try {
      setLoading(true)

      // Se forceRefresh, adiciona timestamp para evitar cache
      if (forceRefresh) {
        await new Promise(resolve => setTimeout(resolve, 500))
      }

      const artigos = await githubStorageV2.listar()
      setArtigos(artigos)
    } catch (error) {
      console.error('Erro ao carregar artigos:', error)
      alert('Erro ao carregar artigos.')
    } finally {
      setLoading(false)
    }
  }

  const carregarArtigo = async (id: string) => {
    try {
      setLoading(true)
      setArtigoAtual(undefined)
      setArtigoEditor(undefined)
      const artigo = await githubStorageV2.buscarPorId(id)
      if (artigo) {
        const rascunho: ArtigoRascunho = {
          ...artigo,
          status: 'rascunho',
          dataCreation: new Date().toISOString(),
          dataUltimaEdicao: new Date().toISOString()
        }
        setArtigoAtual(rascunho)
        setArtigoEditor(undefined) // Limpa estado do editor para forçar reload
      } else {
        setArtigoAtual(undefined)
      }
    } catch (error) {
      console.error('Erro ao carregar artigo:', error)
      alert('Erro ao carregar artigo.')
      setArtigoAtual(undefined)
    } finally {
      setLoading(false)
    }
  }

  const handleSalvarArtigo = async (artigo: ArtigoRascunho) => {
    try {
      setLoading(true)
      await githubStorageV2.salvar(artigo)
      alert('Artigo salvo com sucesso!')
      clearArticlesCache()
      clearArticleContentCache()

      // Limpa estado para forçar refresh
      setArtigos([])
      setArtigoAtual(undefined)
      setArtigoEditor(undefined)

      // Aguarda um pequeno delay e recarrega com força
      setTimeout(async () => {
        await carregarArtigos(true)
        navigate('/redacao')
        setModo('lista')
        setSearchParams({})
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Erro ao salvar artigo:', error)
      alert(error instanceof Error ? error.message : 'Erro ao salvar artigo.')
      setLoading(false)
    }
  }

  const handlePreview = (artigo: ArtigoRascunho) => {
    setArtigoPreview(artigo)
    setArtigoEditor(artigo) // Salva estado do editor
    setModo('preview')
  }

  const handleNovoArtigo = () => {
    setArtigoAtual(undefined)
    setArtigoEditor(undefined)
    setSearchParams({})
    setModo('editor')
  }

  const handleEditarArtigo = (id: string) => {
    setSearchParams({ id })
  }

  const handleExcluirArtigo = async (id: string, titulo: string) => {
    if (confirm(`Tem certeza que deseja excluir o artigo "${titulo}"?`)) {
      try {
        setLoading(true)
        await githubStorageV2.excluir(id)
        alert('Artigo excluído com sucesso!')
        clearArticlesCache()
        clearArticleContentCache()

        // Limpa estado para forçar refresh
        setArtigos([])
        setArtigoAtual(undefined)
        setArtigoEditor(undefined)

        // Aguarda um pequeno delay e recarrega com força
        setTimeout(async () => {
          await carregarArtigos(true)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Erro ao excluir artigo:', error)
        alert(error instanceof Error ? error.message : 'Erro ao excluir artigo.')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleContactClick = () => {
    navigate('/contato')
  }

  const renderLista = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Sistema de Redação</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie os artigos do site M. Peixoto Advogados
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => carregarArtigos(true)} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
          <Button onClick={handleNovoArtigo}>
            <Plus className="h-4 w-4 mr-2" />
            Novo Artigo
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Carregando artigos...</div>
      ) : (
        <div className="grid gap-4">
          {artigos.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Nenhum artigo encontrado. Comece criando o primeiro!
                </p>
              </CardContent>
            </Card>
          ) : (
            artigos.map((artigo) => (
              <Card key={artigo.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{artigo.title}</h3>
                        <Badge variant="outline">{artigo.category}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3 line-clamp-2">
                        {artigo.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{artigo.author}</span>
                        <span>{new Date(artigo.date).toLocaleDateString('pt-BR')}</span>
                        <span>{artigo.readTime}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditarArtigo(artigo.id)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleExcluirArtigo(artigo.id, artigo.title)}
                        className="text-destructive hover:text-destructive"
                      >
                        Excluir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  )

  const renderEditor = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => {
            navigate('/redacao')
            setModo('lista')
            setSearchParams({})
          }}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar à Lista
        </Button>
        <div>
          <h1 className="text-2xl font-serif font-bold">
            {artigoAtual?.id ? 'Editar Artigo' : 'Novo Artigo'}
          </h1>
        </div>
      </div>

      {loading && !artigoAtual ? (
        <Card>
          <CardContent className="py-16 flex flex-col items-center gap-4">
            <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="text-muted-foreground">Carregando conteúdo do artigo...</p>
          </CardContent>
        </Card>
      ) : (
        <RedacaoEditor
          artigo={artigoAtual}
          onSave={handleSalvarArtigo}
          onPreview={handlePreview}
          loading={loading}
        />
      )}
    </div>
  )

  const renderPreview = () => {
    if (!artigoPreview) return null

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => {
                if (artigoEditor) {
                  setArtigoAtual(artigoEditor)
                }
                setModo('editor')
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Editor
            </Button>
            <h1 className="text-2xl font-serif font-bold">Preview do Artigo</h1>
          </div>
          <Badge variant="secondary">Preview</Badge>
        </div>

        {/* Preview similar à página de artigo */}
        <Card>
          <CardHeader className="bg-gradient-to-b from-primary to-primary-light text-primary-foreground">
            <CardTitle className="text-2xl font-serif">
              {artigoPreview.title}
            </CardTitle>
            <div className="flex items-center gap-4 text-primary-foreground/90 text-sm">
              <span>{artigoPreview.author}</span>
              <span>{new Date(artigoPreview.date).toLocaleDateString('pt-BR')}</span>
              <span>{artigoPreview.readTime}</span>
              <Badge variant="secondary">{artigoPreview.category}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {artigoPreview.image && (
              <img
                src={artigoPreview.image}
                alt={artigoPreview.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
            )}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: artigoPreview.content }}
            />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation onContactClick={handleContactClick} />

        <div className="pt-[156px]">
          <div className="container mx-auto px-4 py-8">
            {modo === 'lista' && renderLista()}
            {modo === 'editor' && renderEditor()}
            {modo === 'preview' && renderPreview()}
          </div>

          <Footer />
        </div>

      </div>
    </ProtectedRoute>
  )
}

export default RedacaoPage
