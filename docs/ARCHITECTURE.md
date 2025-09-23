# Arquitetura

## Visão Geral

A solução é composta por um SPA React hospedado no Vercel (estático) e um conjunto de funções serverless que expõem uma API REST autenticada. O backend é o responsável por validar credenciais, emitir cookies JWT e persistir artigos na API do GitHub.

```
[ Navegador ]
  React (SPA) ── fetch ──▶ /api/* (funções Vercel)
                                     │
                                     ├─ autenticação (bcrypt + JWT + cookies)
                                     └─ integração GitHub (metadata + conteúdo)
```

## Camadas

### 1. Interface (Frontend)
- Localização: `src/`
- Tecnologias: React 18, TypeScript, shadcn/ui, Tailwind, TanStack Query, React Router.
- Responsabilidades:
  - Renderizar páginas públicas e `/redacao`.
  - Acionar os endpoints REST via `src/utils/auth.ts` e `src/services/github-storage-v2.ts`.
  - Gerenciar estado de sessão com `AuthContext`. Nenhum segredo fica no client.

### 2. APIs Serverless
- Localização: `api/`
- Runtime: Node 18 @ Vercel.
- Principais funções:
  - `api/login.ts` — valida usuário/senha (bcrypt) e emite cookie `auth-token`.
  - `api/logout.ts` — revoga cookie.
  - `api/session.ts` — checa sessão ativa.
  - `api/articles/index.ts` — lista/cria artigos.
  - `api/articles/[id].ts` — busca/edita/exclui artigos.
- Helpers em `api/_lib/*` implementam CORS, cookies, JWT e acesso ao GitHub.

### 3. Integrações Externas
- **GitHub API**: usada para ler/gravar `metadata.json` e os arquivos em `src/data/articles/content/`.
- **Vercel**: build/hosting do SPA e das funções.

## Fluxos Principais

### Login e Sessão
1. Formulário chama `login(usuario, senha)` (`src/utils/auth.ts`).
2. Função serverless compara a senha com `AUTH_PASSWORD_HASH` (bcrypt) e assina um JWT (`JWT_SECRET`).
3. O token é devolvido como cookie HTTP-only (`secure` em produção, `SameSite Strict`).
4. `AuthContext` mantém o estado com base em `/api/session` e remove a sessão com `/api/logout`.
5. Rotacionar a senha exige apenas atualizar `AUTH_PASSWORD_HASH` com um hash bcrypt gerado localmente (ver passos em `docs/README.md`) e salvar as variáveis de ambiente na infraestrutura de deploy.

### CRUD de Artigos
1. Usuário autenticado abre `/redacao` → `githubStorageV2.listar()` envia `GET /api/articles`.
2. Ao editar/criar, `POST` ou `PUT` envia o draft completo. O backend valida com `zod`.
3. O backend persiste alterações via API do GitHub (`PUT /repos/.../contents/...`).
4. `DELETE /api/articles/:id` remove metadados e conteúdo.
5. Em modo público, `getArticleBySlug` usa fallback estático (`src/data/articles`).

## Estado e Cache
- **TanStack Query** gerencia cache de metadados de artigos e invalidação após mutações.
- **Caches locais** (`src/utils/articles-cache.ts`) armazenam conteúdo carregado para reduzir hits à API durante a mesma sessão autenticada.

## Segurança
- Credenciais de acesso e token GitHub ficam apenas nas variáveis de ambiente do backend.
- Cookies são `httpOnly`; o frontend nunca acessa o JWT diretamente.
- `ensureAuthenticated` bloqueia endpoints protegidos quando o cookie é inválido ou ausente.
- CORS controlado por `CORS_ORIGIN` impede chamadas não autorizadas.

## Deploy
- Branch principal → build automatizada no Vercel.
- Scripts relevantes:
  - `npm run build` (frontend estático).
  - Funções TypeScript transpõem automaticamente (`@vercel/node`).
- Configure todas as variáveis de ambiente no painel Vercel antes do deploy.

## Roadmap Técnico (sugestões)
- Implementar testes automatizados para as funções (`api/`).
- Adicionar rate limiting nas rotas de login.
- Considerar persistência própria (ex.: banco) para independência do GitHub.

> Consulte também [`docs/API-SERVICES.md`](./API-SERVICES.md) para os contratos dos endpoints e [`docs/ASSETS-IMAGES.md`](./ASSETS-IMAGES.md) para guidelines de imagens.
