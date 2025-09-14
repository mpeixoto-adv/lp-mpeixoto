# 🔌 DOCUMENTAÇÃO DE SERVIÇOS E APIs

## 📋 VISÃO GERAL

O sistema M. Peixoto Advogados utiliza diferentes serviços para integração, autenticação e gestão de conteúdo. Esta documentação detalha todos os serviços, APIs e integrações utilizados.

---

## 🔐 SISTEMA DE AUTENTICAÇÃO

### **AuthContext Service**

**Localização**: `/src/contexts/AuthContext.tsx`

#### Interface
```typescript
interface AuthContextType {
  isAuthenticated: boolean
  usuario: string | null
  login: (usuario: string, senha: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}
```

#### Métodos Principais

**`login(usuario: string, senha: string): Promise<boolean>`**
```typescript
// Exemplo de uso
const { login } = useAuth()
const sucesso = await login('adv', 'senha123')
if (sucesso) {
  navigate('/redacao')
} else {
  setError('Credenciais inválidas')
}
```

**`logout(): void`**
```typescript
// Exemplo de uso
const { logout } = useAuth()
logout() // Remove token e redireciona
```

### **Auth Utilities**

**Localização**: `/src/utils/auth.ts`

#### Funções Disponíveis

**`verificarSenha(senha: string): Promise<boolean>`**
```typescript
// Verifica senha usando bcrypt
const isValid = await verificarSenha('minhasenha')
```

**`gerarToken(usuario: string): string`**
```typescript
// Gera JWT customizado
const token = gerarToken('adv')
// Retorna: "header.payload.signature"
```

**`verificarToken(token: string): { usuario: string; valid: boolean }`**
```typescript
// Valida e decodifica token
const { usuario, valid } = verificarToken(token)
if (valid) {
  console.log('Usuário autenticado:', usuario)
}
```

**Storage Helper - `authStorage`**
```typescript
// Gerenciamento de token no localStorage
authStorage.setToken(token)          // Salvar
authStorage.getToken()               // Recuperar
authStorage.removeToken()            // Remover
authStorage.isAuthenticated()        // Verificar validade
```

---

## 📝 SERVIÇO DE ARTIGOS - GITHUB STORAGE V2

### **GitHubStorageServiceV2**

**Localização**: `/src/services/github-storage-v2.ts`

#### Configuração

```typescript
interface GitHubConfig {
  owner: string        // Usuário/organização GitHub
  repo: string         // Nome do repositório
  token: string        // Token de acesso pessoal
  branch: string       // Branch (normalmente 'main')
  filePath: string     // Caminho para index.ts
}

// Instância configurada
export const githubStorageV2 = criarGitHubStorageV2({
  owner: import.meta.env.VITE_GITHUB_OWNER,
  repo: import.meta.env.VITE_GITHUB_REPO,
  token: import.meta.env.VITE_GITHUB_TOKEN,
  branch: import.meta.env.VITE_GITHUB_BRANCH,
  filePath: import.meta.env.VITE_GITHUB_FILE_PATH
})
```

#### Interface ArtigoService

```typescript
interface ArtigoService {
  salvar: (artigo: ArtigoRascunho) => Promise<Article>
  listar: () => Promise<Article[]>
  buscarPorId: (id: string) => Promise<Article | undefined>
  excluir: (id: string) => Promise<void>
  publicar: (id: string) => Promise<Article>
}
```

#### Métodos Detalhados

**`listar(): Promise<Article[]>`**
```typescript
// Busca todos os metadados de artigos
const artigos = await githubStorageV2.listar()
// Retorna: Array de artigos com content: ''
```

**`buscarPorId(id: string): Promise<Article | undefined>`**
```typescript
// Busca artigo específico com conteúdo completo
const artigo = await githubStorageV2.buscarPorId('1')
if (artigo) {
  console.log(artigo.title, artigo.content)
}
```

**`salvar(artigo: ArtigoRascunho): Promise<Article>`**
```typescript
// Cria ou atualiza artigo
const novoArtigo = {
  title: 'Título do Artigo',
  excerpt: 'Resumo...',
  content: '<h2>Conteúdo...</h2>',
  author: 'Dr. João',
  category: 'Direito Civil',
  // ... outros campos
}

const artigoSalvo = await githubStorageV2.salvar(novoArtigo)
```

**`excluir(id: string): Promise<void>`**
```typescript
// Remove artigo completamente
await githubStorageV2.excluir('1')
// Remove de index.ts E arquivo content/
```

#### Métodos Internos

**`buscarArquivo(filePath: string)`**
```typescript
// Busca arquivo específico do GitHub
const { content, sha } = await this.buscarArquivo('src/data/articles/index.ts')
```

**`salvarArquivo(filePath, conteudo, mensagem, sha?)`**
```typescript
// Salva/atualiza arquivo no GitHub
await this.salvarArquivo(
  'src/data/articles/index.ts',
  novoConteudo,
  'Adiciona novo artigo',
  sha // Para updates
)
```

---

## 🎨 SERVIÇO DO EDITOR - TIPTAP

### **RedacaoEditor Component**

**Localização**: `/src/components/RedacaoEditor.tsx`

#### Configuração do Editor

```typescript
const editor = useEditor({
  extensions: [StarterKit],
  content: artigo?.content || '<p>Comece a escrever...</p>',
  immediatelyRender: false,
  onUpdate: ({ editor }) => {
    // Callback para mudanças de conteúdo
  }
})
```

#### Funcionalidades Disponíveis

**Formatação de Texto**:
```typescript
// Negrito
editor.chain().focus().toggleBold().run()

// Itálico
editor.chain().focus().toggleItalic().run()

// Títulos
editor.chain().focus().toggleHeading({ level: 2 }).run()

// Listas
editor.chain().focus().toggleBulletList().run()
editor.chain().focus().toggleOrderedList().run()
```

**Obter Conteúdo**:
```typescript
// HTML
const htmlContent = editor.getHTML()

// Texto puro
const textContent = editor.getText()

// JSON
const jsonContent = editor.getJSON()
```

**Estados do Editor**:
```typescript
// Verificar formatação ativa
const isBold = editor.isActive('bold')
const isHeading = editor.isActive('heading', { level: 2 })

// Definir conteúdo
editor.commands.setContent('<h2>Novo conteúdo</h2>')
```

---

## 📊 TIPOS E INTERFACES

### **Tipos de Artigos**

```typescript
// Metadata básica (index.ts)
interface ArticleMetadata {
  id: string
  title: string
  excerpt: string
  author: string
  date: string           // YYYY-MM-DD
  category: string
  image?: string
  readTime: string       // "X min"
  slug: string
  contentFile: string    // Nome do arquivo de conteúdo
}

// Artigo completo
interface Article extends ArticleMetadata {
  content: string        // Conteúdo HTML
}

// Rascunho para edição
interface ArtigoRascunho extends Omit<Article, 'id' | 'slug'> {
  id?: string           // Opcional para novos artigos
  slug?: string         // Gerado automaticamente
  status: StatusArtigo
  dataCreation: string
  dataUltimaEdicao: string
  observacoes?: string
}

type StatusArtigo = 'rascunho' | 'revisao' | 'publicado' | 'arquivado'
```

### **Categorias de Artigos**

```typescript
export const CATEGORIAS_ARTIGOS = [
  'Direito Civil',
  'Direito Tributário',
  'Direito Trabalhista',
  'Direito Empresarial',
  'Direito do Consumidor',
  'Direito Imobiliário',
  'Direito de Família',
  'Notícias Jurídicas'
] as const

type CategoriaArtigo = typeof CATEGORIAS_ARTIGOS[number]
```

---

## 🔧 UTILITÁRIOS E HELPERS

### **Funções Auxiliares**

**Localização**: `/src/lib/redacao-types.ts`

**`gerarSlug(titulo: string): string`**
```typescript
// Converte título para URL amigável
const slug = gerarSlug('Novo Código Civil 2024')
// Resultado: 'novo-codigo-civil-2024'
```

**`calcularTempoLeitura(conteudo: string): string`**
```typescript
// Calcula tempo estimado de leitura
const tempo = calcularTempoLeitura('<p>Texto do artigo...</p>')
// Resultado: '3 min'
```

### **Article Utils**

**Localização**: `/src/data/articles/utils.ts`

**`generateUniqueSlug(title: string): string`**
```typescript
// Gera slug único verificando existentes
const slug = generateUniqueSlug('Título Repetido')
// Se existir, adiciona número: 'titulo-repetido-2'
```

**`getNextArticleId(): string`**
```typescript
// Gera próximo ID sequencial
const nextId = getNextArticleId()
// Resultado: 'próximo_número_disponível'
```

---

## 🌐 INTEGRAÇÃO COM GITHUB API

### **Endpoints Utilizados**

#### **GET** `/repos/{owner}/{repo}/contents/{path}`
```http
GET https://api.github.com/repos/usuario/repo/contents/src/data/articles/index.ts
Authorization: token ghp_xxxxxxxxxxxxxxxxxxxx
Accept: application/vnd.github.v3+json
```

**Resposta**:
```json
{
  "name": "index.ts",
  "path": "src/data/articles/index.ts",
  "sha": "abc123...",
  "content": "base64_encoded_content",
  "encoding": "base64"
}
```

#### **PUT** `/repos/{owner}/{repo}/contents/{path}`
```http
PUT https://api.github.com/repos/usuario/repo/contents/src/data/articles/index.ts
Authorization: token ghp_xxxxxxxxxxxxxxxxxxxx
Content-Type: application/json

{
  "message": "Adiciona novo artigo",
  "content": "base64_encoded_content",
  "sha": "abc123...",  // Para updates
  "branch": "main"
}
```

#### **DELETE** `/repos/{owner}/{repo}/contents/{path}`
```http
DELETE https://api.github.com/repos/usuario/repo/contents/src/data/articles/content/artigo.ts
Authorization: token ghp_xxxxxxxxxxxxxxxxxxxx
Content-Type: application/json

{
  "message": "Remove artigo",
  "sha": "abc123...",
  "branch": "main"
}
```

### **Tratamento de Erros**

```typescript
try {
  const response = await fetch(url, options)
  if (!response.ok) {
    if (response.status === 404) {
      // Arquivo não existe
      return { content: '', sha: '' }
    }
    throw new Error(`Erro ${response.status}`)
  }
} catch (error) {
  console.error('GitHub API Error:', error)
  throw new Error('Falha na comunicação com GitHub')
}
```

---

## ⚡ CACHE E PERFORMANCE

### **TanStack Query Configuration**

```typescript
// Configuração do cliente de cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,     // 5 minutos
      cacheTime: 10 * 60 * 1000,    // 10 minutos
      retry: 3,
      refetchOnWindowFocus: false
    }
  }
})
```

### **Queries Principais**

```typescript
// Lista de artigos
const { data: articles, isLoading } = useQuery({
  queryKey: ['articles'],
  queryFn: () => githubStorageV2.listar(),
  staleTime: 5 * 60 * 1000
})

// Artigo específico
const { data: article } = useQuery({
  queryKey: ['article', id],
  queryFn: () => githubStorageV2.buscarPorId(id),
  enabled: !!id
})

// Invalidação após mutação
const mutation = useMutation({
  mutationFn: githubStorageV2.salvar,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['articles'] })
  }
})
```

---

## 🔒 SEGURANÇA E VALIDAÇÃO

### **Validação de Input**

```typescript
// Validação básica no editor
const handleSave = useCallback(async () => {
  if (!editor || !titulo.trim() || !excerpt.trim() || !category) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  const conteudo = editor.getHTML()
  // TODO: Adicionar sanitização HTML

  const novoArtigo: ArtigoRascunho = {
    title: titulo.trim(),
    excerpt: excerpt.trim(),
    content: conteudo,
    // ...
  }
}, [editor, titulo, excerpt, category])
```

### **Headers de Segurança**

```typescript
// GitHub API headers
private get headers() {
  return {
    'Authorization': `token ${this.config.token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  }
}
```

---

## 📚 EXEMPLOS DE USO COMPLETOS

### **Criar Novo Artigo**

```typescript
import { githubStorageV2 } from '@/services/github-storage-v2'
import { ArtigoRascunho } from '@/lib/redacao-types'

const criarArtigo = async () => {
  const novoArtigo: ArtigoRascunho = {
    title: 'LGPD: Impactos na Advocacia',
    excerpt: 'Como a Lei Geral de Proteção de Dados afeta o dia a dia dos escritórios de advocacia.',
    content: `
      <h2>Introdução</h2>
      <p>A Lei Geral de Proteção de Dados (LGPD) trouxe mudanças significativas...</p>
      <h3>Principais Obrigações</h3>
      <ul>
        <li>Consentimento explícito</li>
        <li>Política de privacidade clara</li>
        <li>DPO quando aplicável</li>
      </ul>
    `,
    author: 'Dr. Marcelo Peixoto',
    category: 'Direito Digital',
    image: 'https://images.unsplash.com/photo-lgpd',
    status: 'rascunho',
    dataCreation: new Date().toISOString(),
    dataUltimaEdicao: new Date().toISOString()
  }

  try {
    const artigo = await githubStorageV2.salvar(novoArtigo)
    console.log('Artigo criado:', artigo.id)
    return artigo
  } catch (error) {
    console.error('Erro ao criar artigo:', error)
    throw error
  }
}
```

### **Buscar e Exibir Artigos**

```typescript
import { useQuery } from '@tanstack/react-query'
import { githubStorageV2 } from '@/services/github-storage-v2'

const ArticlesList = () => {
  const {
    data: articles = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['articles'],
    queryFn: githubStorageV2.listar
  })

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar artigos</div>

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <small>{article.author} • {article.readTime}</small>
        </div>
      ))}
    </div>
  )
}
```

---

## 🚨 TROUBLESHOOTING

### **Problemas Comuns**

**1. Token GitHub Inválido**
```typescript
// Erro 401: Bad credentials
// Verificar se o token tem permissões corretas
// Regenerar token se necessário
```

**2. Arquivo Não Encontrado (404)**
```typescript
// O serviço retorna conteúdo vazio para 404s
const { content, sha } = await buscarArquivo(path)
if (!content && !sha) {
  console.log('Arquivo não existe, será criado')
}
```

**3. Conflitos de SHA**
```typescript
// Erro 409: SHA mismatch
// Buscar SHA atual antes de salvar
const { sha: currentSha } = await buscarArquivo(path)
await salvarArquivo(path, content, message, currentSha)
```

### **Debug Mode**

```typescript
// Adicionar logs detalhados
const DEBUG = import.meta.env.DEV

if (DEBUG) {
  console.log('GitHub API Request:', { path, method, body })
  console.log('Response:', { status, data })
}
```

---

*Documentação atualizada em: Setembro 2024*
*Versão da API: 2.0*