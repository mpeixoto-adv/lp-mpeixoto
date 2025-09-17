# M.Peixoto - Advogados Associados

Website institucional moderno e responsivo para o escritório de advocacia Maurício Peixoto, especializado em Direito Tributário e Direito Civil.

## 🚀 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação


# Clone o repositório
git clone https://github.com/your-username/mpeixoto-adv-lp.git

# Navegue até o diretório do projeto
cd mpeixoto-adv-lp

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev


O projeto estará disponível em `http://localhost:5173`

### Scripts Disponíveis



### Backend / Redação

Para que os endpoints `/api/*` e a área `/redacao` funcionem localmente, é necessário definir variáveis de ambiente que serão lidas pelo `vercel dev`:

```bash
# .env (carregado pelo vercel dev)
AUTH_ALLOWED_USER=adv
AUTH_PASSWORD_HASH=...       # hash bcrypt da senha
JWT_SECRET=...               # chave secreta forte
JWT_EXPIRES_IN=24h           # opcional
CORS_ORIGIN=http://localhost:8085

# Integração GitHub (necessário para CRUD de artigos)
GITHUB_TOKEN=ghp_xxx          # token com scopes repo
GITHUB_OWNER=seu-usuario-ou-org
GITHUB_REPO=seu-repo-artigos
GITHUB_BRANCH=main            # ou a branch usada
GITHUB_FILE_PATH=src/data/articles/index.ts
```

Sem esses valores, as funções retornarão erro (por exemplo, `Erro ao carregar artigos`).

1. Inicie o backend: `npx vercel dev` (porta 3000).
2. Inicie o frontend apontando para o backend: `VITE_API_BASE_URL=http://localhost:3000 npm run dev` (porta 8085).
3. Acesse `http://localhost:8085/redacao` e faça login com `adv` + a senha cujo hash está em `AUTH_PASSWORD_HASH`.
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria a build de produção
npm run preview      # Visualiza a build de produção
npm run lint         # Executa o linter


## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/UI** - Componentes reutilizáveis e acessíveis
- **React Router DOM** - Roteamento do lado cliente
- **Lucide React** - Ícones SVG para React

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Hero.tsx        # Seção hero da página
│   ├── About.tsx       # Seção sobre
│   ├── Services.tsx    # Seção de serviços
│   └── ...
├── pages/              # Páginas da aplicação
├── data/               # Dados estáticos (artigos, etc.)
├── assets/             # Imagens e recursos estáticos
├── hooks/              # React hooks customizados
└── lib/                # Utilitários e configurações
```

## 🎨 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Navegação suave entre seções
- ✅ Carrossel de equipe
- ✅ Sistema de artigos/blog
- ✅ Formulário de contato
- ✅ Newsletter signup
- ✅ SEO otimizado
- ✅ Performance otimizada

