# 📚 M. PEIXOTO ADVOGADOS - DOCUMENTAÇÃO TÉCNICA

## 🏢 Visão Geral do Projeto

Este é o sistema web completo do escritório M. Peixoto Advogados, incluindo:
- **Site institucional** com informações do escritório
- **Sistema de artigos** com gestão de conteúdo jurídico
- **Painel administrativo** para criação e edição de artigos
- **Sistema de autenticação** para controle de acesso

---

## 🚀 Stack Tecnológica

### Frontend
- **Framework**: React 18 com TypeScript
- **Build Tool**: Vite com SWC
- **Estilização**: Tailwind CSS
- **Componentes UI**: shadcn/ui (Radix UI)
- **Roteamento**: React Router DOM v6
- **Editor**: TipTap (editor rich text)
- **Estado**: TanStack Query

### Autenticação
- **Biblioteca**: bcryptjs para hash de senhas
- **Armazenamento**: localStorage para sessões
- **Proteção**: Context API + Protected Routes

### Integração
- **Versionamento**: Git/GitHub
- **Storage**: GitHub API para persistência de artigos
- **Deploy**: Lovable/Vercel

---

## 🗂️ Estrutura do Projeto

```
src/
├── components/              # Componentes UI reutilizáveis
│   ├── ui/                 # Componentes shadcn/ui
│   ├── Navigation.tsx      # Navegação principal
│   ├── ProtectedRoute.tsx  # Proteção de rotas
│   ├── LoginForm.tsx       # Formulário de login
│   ├── RedacaoEditor.tsx   # Editor de artigos
│   └── ...
├── pages/                  # Páginas/rotas
│   ├── Index.tsx          # Homepage
│   ├── Redacao.tsx        # Painel de redação
│   ├── Services.tsx       # Página de serviços
│   └── ...
├── contexts/               # Contextos React
│   └── AuthContext.tsx    # Contexto de autenticação
├── utils/                  # Utilitários
│   └── auth.ts           # Funções de autenticação
├── services/               # Serviços externos
│   ├── github-storage.ts  # Integração GitHub (legacy)
│   └── github-storage-v2.ts # Nova integração GitHub
├── data/                   # Dados e tipos
│   ├── articles.ts        # Artigos (legacy)
│   └── articles/          # Nova estrutura de artigos
│       ├── index.ts       # Metadados dos artigos
│       ├── types.ts       # Tipos TypeScript
│       ├── loader.ts      # Sistema híbrido de carregamento
│       └── content/       # Arquivos de conteúdo
└── lib/                    # Tipos e configurações
    └── redacao-types.ts   # Tipos do sistema de redação
```

---

## 🔐 Sistema de Autenticação

### Credenciais de Acesso
- **Usuário**: `adv`
- **Senha**: Armazenada com hash bcrypt
- **Acesso**: `/redacao` (área administrativa)

### Arquitetura
```typescript
// Fluxo de autenticação
1. Login → AuthContext.login()
2. Verificação → utils/auth.verificarSenha()
3. Token → geração JWT simplificado
4. Proteção → ProtectedRoute wrapper
5. Persistência → localStorage
```

### Componentes Principais
- `AuthContext.tsx`: Contexto global de autenticação
- `LoginForm.tsx`: Interface de login
- `ProtectedRoute.tsx`: Proteção de rotas administrativas
- `auth.ts`: Utilitários de autenticação e JWT

---

## 📝 Sistema de Artigos

### Arquitetura Híbrida

O sistema utiliza uma arquitetura híbrida com duas estruturas:

**1. Metadados Centralizados** (`src/data/articles/index.ts`)
```typescript
export const articlesMetadata: ArticleMetadata[] = [
  {
    id: "1",
    title: "Título do Artigo",
    excerpt: "Resumo...",
    author: "Dr. Nome",
    date: "2024-01-15",
    category: "Direito Civil",
    readTime: "5 min",
    slug: "titulo-do-artigo",
    contentFile: "nome-do-arquivo"
  }
]
```

**2. Conteúdo Separado** (`src/data/articles/content/`)
```typescript
export const articleContent = {
  content: `<h2>Conteúdo HTML...</h2>`,
  metadata: {
    lastModified: "2024-01-15T10:00:00.000Z",
    views: 0
  }
}
```

### Fluxo de Operações

**Criar Artigo:**
1. Editor → RedacaoEditor.tsx
2. Validação → FormData + TipTap HTML
3. Storage → GitHubStorageV2.salvar()
4. Arquivo 1: Atualizar metadados no index.ts
5. Arquivo 2: Criar content/[slug].ts

**Editar Artigo:**
1. Carregar → buscarPorId() → metadata + conteúdo
2. Editor → campos pré-preenchidos
3. Salvar → atualizar ambos os arquivos

**Exibir Artigo:**
1. Lista → metadados do index.ts
2. Visualização → carregar conteúdo sob demanda
3. Hybrid loader → loadArticleContentHybrid()

---

## 🔌 Integração GitHub

### GitHub Storage V2

O sistema usa a API do GitHub para persistir artigos:

```typescript
interface GitHubConfig {
  owner: string        # Usuário/organização
  repo: string         # Nome do repositório
  token: string        # Token de acesso
  branch: string       # Branch (main)
  filePath: string     # Caminho base
}
```

### Operações Disponíveis
- **Listar**: Busca metadados de todos os artigos
- **Buscar**: Carrega artigo específico por ID
- **Salvar**: Cria/atualiza artigo (2 arquivos)
- **Excluir**: Remove metadados e arquivo de conteúdo

### Configuração
```env
VITE_GITHUB_OWNER=seu-usuario
VITE_GITHUB_REPO=nome-do-repositorio
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxx
VITE_GITHUB_BRANCH=main
VITE_GITHUB_FILE_PATH=src/data/articles/index.ts
```

---

## 🎨 Editor de Artigos

### TipTap Editor

Baseado no TipTap, oferece:
- Formatação rich text (negrito, itálico, títulos)
- Listas ordenadas e não-ordenadas
- Preview em tempo real
- Cálculo automático de tempo de leitura
- Validação de campos obrigatórios

### Interface
```typescript
interface ArtigoRascunho {
  id?: string
  title: string           # Título (máx 80 chars)
  excerpt: string         # Resumo (máx 200 chars)
  content: string         # Conteúdo HTML
  author: string          # Autor padrão
  category: CategoriaArtigo
  image?: string          # URL opcional
  slug: string            # Gerado automaticamente
  readTime: string        # Calculado automaticamente
}
```

### Categorias Disponíveis
- Direito Civil
- Direito Tributário
- Direito Trabalhista
- Direito Empresarial
- Direito do Consumidor
- Direito Imobiliário
- Direito de Família
- Notícias Jurídicas

---

## 🚀 Deploy e Configuração

### Comandos de Desenvolvimento
```bash
npm install          # Instalar dependências
npm run dev          # Servidor desenvolvimento (porta 8085)
npm run build        # Build produção
npm run preview      # Preview build local
npm run lint         # Linter ESLint
```

### Variáveis de Ambiente
```env
# GitHub Integration
VITE_GITHUB_OWNER=mpeixoto-adv
VITE_GITHUB_REPO=mpeixoto-adv-lp
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
VITE_GITHUB_BRANCH=main
VITE_GITHUB_FILE_PATH=src/data/articles/index.ts
```

### Configuração de Produção
1. Configurar variáveis de ambiente no Vercel/Lovable
2. Gerar token GitHub com permissões de escrita no repo
3. Build automático via Git pushes
4. HTTPS certificado automaticamente

---

## 🧪 Testing e Qualidade

### Configurações
- **Linting**: ESLint + TypeScript ESLint
- **Formatação**: Prettier (configurado no Lovable)
- **Build**: Verificação automática de tipos
- **Pre-build**: Script para gerar imports estáticos

### Scripts de Build
```javascript
// package.json
"scripts": {
  "prebuild": "node generate-static-imports.cjs",
  "build": "vite build",
  "build:dev": "vite build --mode development"
}
```

---

## 🔧 Manutenção e Monitoramento

### Logs e Debug
- Console logs nas operações críticas
- Error boundaries para recuperação
- Loading states em operações assíncronas

### Backup e Recuperação
- Artigos versionados no Git
- Histórico completo de mudanças
- Rollback via Git reset se necessário

### Performance
- Lazy loading de conteúdo de artigos
- Componentes otimizados com React.memo
- Bundle splitting automático (Vite)

---

## 🚨 Problemas Conhecidos e TODOs

### Segurança (Prioridade Alta)
- [ ] Mover autenticação para server-side
- [ ] Implementar JWT seguro com bibliotecas apropriadas
- [ ] Remover tokens do client-side
- [ ] Adicionar rate limiting

### Funcionalidades
- [ ] Sistema de backup automático
- [ ] Cache de artigos para performance
- [ ] Busca avançada por categoria/autor
- [ ] Sistema de comentários
- [ ] Analytics de visualizações

### UX/UI
- [ ] Loading skeletons
- [ ] Toast notifications
- [ ] Modo offline
- [ ] PWA features

---

## 📞 Suporte e Contato

### Para Desenvolvedores
- Estrutura bem documentada com TypeScript
- Componentes reutilizáveis
- Patterns consistentes

### Para Editores de Conteúdo
- Interface intuitiva no `/redacao`
- Editor WYSIWYG
- Preview antes da publicação
- Categorização automática

### Para Administração
- Controle de acesso seguro
- Backup automático via Git
- Deploy contínuo configurado

---

*Última atualização: Setembro 2024*
*Versão: 2.0 - Sistema completo de CMS*