# Documentação Técnica

## Visão Geral

A aplicação M.Peixoto combina um frontend React em Vite com funções serverless (Vercel) para autenticação e gestão de artigos. O backend encapsula as integrações sensíveis (hash da senha, token do GitHub) e expõe endpoints REST que o frontend consome via `fetch`.

```
Browser (React + TanStack Query)
  └─ chama → API interna (/api/*)
       └─ funções Vercel (Node 18 + TypeScript)
            └─ integrações: GitHub (artigos) e autenticação JWT
```

## Stack Tecnológica

- **Frontend**: React 18, TypeScript, Vite, Tailwind, shadcn/ui, React Router, TanStack Query.
- **Backend**: Funções Vercel em TypeScript (`api/`), bcrypt para validação de senha, JWT (assinado com `JWT_SECRET`), integração com GitHub via API REST.
- **Infraestrutura**: Vercel (deploy e gateway), GitHub (storage dos artigos), Git para versionamento.

## Estrutura de Pastas

```
.
├── api/                     # Funções serverless
│   ├── login.ts             # POST /api/login
│   ├── logout.ts            # POST /api/logout
│   ├── session.ts           # GET /api/session
│   └── articles/            # CRUD de artigos
│       ├── index.ts         # GET/POST /api/articles
│       └── [id].ts          # GET/PUT/DELETE /api/articles/:id
├── src/
│   ├── components/          # UI e componentes de página
│   ├── contexts/            # AuthContext (consome API)
│   ├── data/                # Artigos estáticos de fallback
│   ├── lib/                 # Tipos usados na redação
│   ├── pages/               # Páginas React
│   └── utils/               # Clientes que chamam a API (`src/utils/auth.ts`)
└── docs/                    # Documentação (este arquivo, API, arquitetura etc.)
```

## Autenticação

1. O usuário envia `POST /api/login` com `{ usuario, senha }`.
2. A função `api/login.ts` valida o usuário (`AUTH_ALLOWED_USER`) e compara a senha com o hash bcrypt (`AUTH_PASSWORD_HASH`).
3. Em caso de sucesso, um JWT assinado com `JWT_SECRET` é devolvido como cookie HTTP-only (`auth-token`).
4. O frontend usa `AuthContext` para orquestrar `login`, `logout` e `recuperarSessao` chamando `/api/login`, `/api/logout` e `/api/session`.
5. As rotas da área protegida dependem do cookie; o frontend nunca expõe o hash nem o token do GitHub.

Variáveis de ambiente relevantes (definidas no runtime das funções):

```
AUTH_ALLOWED_USER=adv
AUTH_PASSWORD_HASH=<hash bcrypt>
JWT_SECRET=<chave aleatória>
JWT_EXPIRES_IN=24h
GITHUB_OWNER=...
GITHUB_REPO=...
GITHUB_BRANCH=main
GITHUB_TOKEN=<token com acesso repo>
GITHUB_FILE_PATH=src/data/articles/metadata.json
CORS_ORIGIN=<origem permitida>
```

> Os `.env` locais espelham esses valores apenas para desenvolvimento; em produção configure-os no painel da Vercel.

### Rotação de senha da redação

1. Escolha uma nova senha forte (ex.: usando um gerador confiável).
2. Gere o hash bcrypt localmente:
   ```bash
   node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('NovaSenhaForte!', 12));"
   ```
3. Atualize as variáveis `AUTH_PASSWORD_HASH` nos arquivos `.env` usados em desenvolvimento e, principalmente, no painel da Vercel (ou plataforma de deploy) para refletir o novo hash.
4. Opcional: ajuste `docs/README.md` ou comunicações internas se houver instruções que mencionam a senha anterior.
5. Informe os editores que a senha foi trocada; a alteração passa a valer assim que as funções serverless forem reiniciadas (novo deploy) ou após a atualização das variáveis na infraestrutura.

## Sistema de Artigos

- Os metadados vivem em `src/data/articles/metadata.json` e o conteúdo em `src/data/articles/content/*.ts`.
- As funções `api/articles/*.ts` operam via `githubStorageV2` para listar, salvar, buscar e excluir artigos usando a API do GitHub. Todas as operações exigem autenticação.
- Em modo autenticado, o frontend consulta a API; usuários anônimos usam o fallback estático (`getArticleBySlug`).

### Fluxo típico

1. Editor (`/redacao`) chama `GET /api/articles` para listar.
2. Ao editar/criar, envia `POST` ou `PUT` com o artigo completo (`ArticleDraft`).
3. Remoções usam `DELETE /api/articles/:id`.
4. O backend atualiza `metadata.json` e o arquivo de conteúdo correspondente em um único commit via API do GitHub.

## Endpoints Disponíveis

Para detalhes completos, consulte [`docs/API-SERVICES.md`](./API-SERVICES.md).

| Endpoint                | Método | Proteção | Descrição                             |
| ----------------------- | ------ | -------- | ------------------------------------- |
| `/api/login`           | POST   | Pública  | Autentica e emite cookie HTTP-only    |
| `/api/logout`          | POST   | Autenticado | Revoga cookie `auth-token`        |
| `/api/session`         | GET    | Pública  | Retorna usuário autenticado se válido |
| `/api/articles`        | GET    | Autenticado | Lista metadados de artigos       |
| `/api/articles`        | POST   | Autenticado | Cria novo artigo completo       |
| `/api/articles/:id`    | GET    | Autenticado | Busca artigo com conteúdo        |
| `/api/articles/:id`    | PUT    | Autenticado | Atualiza artigo existente       |
| `/api/articles/:id`    | DELETE | Autenticado | Remove artigo e metadados       |

## Deploy e Fluxo de Trabalho

- **Desenvolvimento**: `npm run dev` (frontend) + `npx vercel dev` (funções) com variáveis em `.env`.
- **CI/CD**: merge na branch principal dispara build no Vercel; as funções são compiladas em Node 18.
- **Logs**: utilizar dashboard da Vercel (`vercel logs`) para API; frontend depende do console do browser.

## Testing e Qualidade

- `npm run lint` para garantir padrões de código.
- Testes automáticos ainda não foram configurados; recomenda-se validar manualmente login, CRUD de artigos e carregamento público após alterações na API.

## Documentação Relacionada

- [docs/API-SERVICES.md](./API-SERVICES.md) — contratos dos endpoints e serviços frontend.
- [docs/ARCHITECTURE.md](./ARCHITECTURE.md) — visão arquitetural e fluxos.
- [docs/ASSETS-IMAGES.md](./ASSETS-IMAGES.md) — guia para tratar imagens.
