import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Heading3,
  Save,
  Eye,
  Upload
} from 'lucide-react'
import { useState, useCallback, useEffect } from 'react'
import { ArtigoRascunho, CATEGORIAS_ARTIGOS, gerarSlug, calcularTempoLeitura } from '@/lib/redacao-types'

interface RedacaoEditorProps {
  artigo?: ArtigoRascunho
  onSave: (artigo: ArtigoRascunho) => Promise<void>
  onPreview: (artigo: ArtigoRascunho) => void
  loading?: boolean
}

export const RedacaoEditor = ({ artigo, onSave, onPreview, loading = false }: RedacaoEditorProps) => {
  const [titulo, setTitulo] = useState(artigo?.title || '')
  const [excerpt, setExcerpt] = useState(artigo?.excerpt || '')
  const [author, setAuthor] = useState(artigo?.author || '')
  const [category, setCategory] = useState(artigo?.category || '')
  const [image, setImage] = useState(artigo?.image || '')
  const [observacoes, setObservacoes] = useState(artigo?.observacoes || '')
  
  const editor = useEditor({
    extensions: [StarterKit],
    content: artigo?.content || '<p>Comece a escrever seu artigo aqui...</p>',
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      // Atualiza automaticamente o tempo de leitura conforme o usuário digita
    },
    onFocus: ({ editor }) => {
      // Remove placeholder quando o usuário clica no editor
      const content = editor.getText().trim()
      if (content === 'Comece a escrever seu artigo aqui...') {
        editor.commands.clearContent()
      }
    }
  })

  // Atualiza os estados quando a prop artigo muda
  useEffect(() => {
    if (artigo) {
      setTitulo(artigo.title || '')
      setExcerpt(artigo.excerpt || '')
      setAuthor(artigo.author || '')
      setCategory(artigo.category || '')
      setImage(artigo.image || '')
      setObservacoes(artigo.observacoes || '')

      if (editor && artigo.content) {
        editor.commands.setContent(artigo.content)
      }
    }
  }, [artigo, editor])

  const handleSave = useCallback(async () => {
    if (!editor || !titulo.trim() || !excerpt.trim() || !category || !author.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    const conteudo = editor.getHTML()
    const novoArtigo: ArtigoRascunho = {
      id: artigo?.id,
      title: titulo.trim(),
      excerpt: excerpt.trim(),
      content: conteudo,
      author: author.trim(),
      date: new Date().toISOString().split('T')[0],
      category: category as any,
      image: image.trim() || undefined,
      readTime: calcularTempoLeitura(conteudo),
      slug: gerarSlug(titulo),
      status: 'rascunho',
      dataCreation: artigo?.dataCreation || new Date().toISOString(),
      dataUltimaEdicao: new Date().toISOString(),
      observacoes: observacoes.trim() || undefined
    }

    await onSave(novoArtigo)
  }, [editor, titulo, excerpt, author, category, image, observacoes, artigo, onSave])

  const handlePreview = useCallback(() => {
    if (!editor) return

    const conteudo = editor.getHTML()
    const artigoPreview: ArtigoRascunho = {
      id: artigo?.id || 'preview',
      title: titulo || 'Título do Artigo',
      excerpt: excerpt || 'Resumo do artigo...',
      content: conteudo,
      author: author.trim() || 'Autor do Artigo',
      date: new Date().toISOString().split('T')[0],
      category: (category || 'Direito Civil') as any,
      image: image || undefined,
      readTime: calcularTempoLeitura(conteudo),
      slug: gerarSlug(titulo || 'artigo-preview'),
      status: 'rascunho',
      dataCreation: new Date().toISOString(),
      dataUltimaEdicao: new Date().toISOString(),
      observacoes
    }

    onPreview(artigoPreview)
  }, [editor, titulo, excerpt, author, category, image, observacoes, artigo, onPreview])

  const ToolbarButton = ({ 
    onClick, 
    isActive, 
    children, 
    disabled = false 
  }: { 
    onClick: () => void
    isActive?: boolean
    children: React.ReactNode
    disabled?: boolean
  }) => (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )

  if (!editor) {
    return <div>Carregando editor...</div>
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header com informações do artigo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Editor de Artigos
            <div className="flex gap-2">
              <Badge variant="outline">
                {artigo?.status || 'Novo'}
              </Badge>
              {artigo?.dataUltimaEdicao && (
                <Badge variant="secondary">
                  Editado em {new Date(artigo.dataUltimaEdicao).toLocaleDateString('pt-BR')}
                </Badge>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Informações básicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="titulo">Título do Artigo *</Label>
              <Input
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Digite o título do artigo..."
                maxLength={80}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {titulo.length}/80 caracteres
              </p>
            </div>
            
            <div>
              <Label htmlFor="author">Autor *</Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Nome do autor"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="excerpt">Resumo do Artigo *</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Escreva um resumo atrativo do artigo (2-3 linhas)..."
              maxLength={200}
              rows={3}
            />
            <p className="text-sm text-muted-foreground mt-1">
              {excerpt.length}/200 caracteres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Categoria *</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIAS_ARTIGOS.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="image">URL da Imagem</Label>
              <Input
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          </div>

          <div>
            <Label htmlFor="observacoes">Observações (opcional)</Label>
            <Textarea
              id="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Observações internas sobre o artigo..."
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Editor */}
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo do Artigo</CardTitle>
          {/* Toolbar */}
          <div className="flex flex-wrap gap-2 p-4 border rounded-lg">
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              isActive={editor.isActive('bold')}
            >
              <Bold className="h-4 w-4" />
            </ToolbarButton>

            <ToolbarButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              isActive={editor.isActive('italic')}
            >
              <Italic className="h-4 w-4" />
            </ToolbarButton>

            <Separator orientation="vertical" className="h-8" />

            <ToolbarButton
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              isActive={editor.isActive('heading', { level: 2 })}
            >
              <Heading1 className="h-4 w-4" />
            </ToolbarButton>

            <ToolbarButton
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              isActive={editor.isActive('heading', { level: 3 })}
            >
              <Heading2 className="h-4 w-4" />
            </ToolbarButton>

            <Separator orientation="vertical" className="h-8" />

            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              isActive={editor.isActive('bulletList')}
            >
              <List className="h-4 w-4" />
            </ToolbarButton>

            <ToolbarButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              isActive={editor.isActive('orderedList')}
            >
              <ListOrdered className="h-4 w-4" />
            </ToolbarButton>
          </div>
        </CardHeader>
        <CardContent>
          <div className="min-h-[400px] border rounded-lg p-4 prose prose-lg max-w-none">
            <EditorContent editor={editor} />
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            Tempo de leitura estimado: {calcularTempoLeitura(editor.getHTML())}
          </div>
        </CardContent>
      </Card>

      {/* Ações */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              * Campos obrigatórios
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={handlePreview}
                disabled={loading}
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button 
                onClick={handleSave}
                disabled={loading}
              >
                <Save className="h-4 w-4 mr-2" />
                {loading ? 'Salvando...' : 'Salvar Rascunho'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
