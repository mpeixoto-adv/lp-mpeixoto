# Serviços e APIs

## Visão Geral

O frontend consome exclusivamente as funções serverless expostas em `/api/*`. Toda lógica de autenticação, acesso ao GitHub e persistência de artigos acontece no backend. Este documento descreve os contratos disponíveis e como os serviços do frontend interagem com eles.

```
AuthContext / hooks React → apiFetch (src/utils/auth.ts)
                                   ↳ /api/login | /api/logout | /api/session
Artigos (githubStorageV2)    → api client (src/services/github-storage-v2.ts)
                                   ↳ /api/articles | /api/articles/:id
```

## Autenticação

### POST `/api/login`

- **Descrição**: valida credenciais e emite cookie HTTP-only (`auth-token`).
- **Body**:
  ```json
  {
    "usuario": "adv",
    "senha": "••••"
  }
  ```
- **Resposta (200)**:
  ```json
  {
    "usuario": "adv"
  }
  ```
  > O cookie é definido no cabeçalho `Set-Cookie` (30 minutos por padrão). Em caso de erro são enviados status `400/401` com `{ "error": "mensagem" }`.

### POST `/api/logout`

- **Descrição**: limpa o cookie `auth-token` do usuário autenticado.
- **Body**: vazio.
- **Resposta**: `204 No Content`.

### GET `/api/session`

- **Descrição**: verifica a sessão ativa (com base no cookie).
- **Resposta (200)**:
  ```json
  {
    "usuario": "adv"
  }
  ```
- **Erros**: `401` quando não há token válido (cookie expirado ou ausente).

### Consumidores

- `src/utils/auth.ts` implementa `login`, `logout` e `recuperarSessao` chamando os endpoints e propagando erros.
- `AuthContext` (`src/contexts/AuthContext.tsx`) orquestra o estado de autenticação a partir desses helpers.

### Rotação de senha

Para trocar a senha de acesso à redação:

1. Defina a nova senha e gere um hash bcrypt com `node -e "const bcrypt=require('bcryptjs'); console.log(bcrypt.hashSync('NovaSenha!', 12));"`.
2. Atualize `AUTH_PASSWORD_HASH` nas variáveis de ambiente da Vercel (e nos `.env` locais, se necessário).
3. Não é preciso redeploy manual; as funções lerão o novo hash na próxima invocação após a mudança.

## Artigos

Todas as operações exigem autenticação. As funções validam payloads via `zod` e usam a API do GitHub para leitura/escrita.

### GET `/api/articles`

- **Descrição**: lista metadados de todos os artigos.
- **Resposta (200)**:
  ```json
  {
    "data": [
      {
        "id": "uuid",
        "title": "Título",
        "excerpt": "Resumo…",
        "author": "Nome",
        "date": "2024-01-01",
        "category": "Direito Tributário",
        "image": "https://...",
        "readTime": "5 min",
        "slug": "titulo",
        "tags": []
      }
    ]
  }
  ```

### POST `/api/articles`

- **Descrição**: cria um novo artigo. Recebe um `ArticleDraft` completo (conteúdo + metadados).
- **Body** (exemplo):
  ```json
  {
    "title": "Título",
    "excerpt": "Resumo",
    "author": "Nome",
    "date": "2024-01-01",
    "category": "Direito Tributário",
    "image": "",
    "content": "<p>HTML…</p>",
    "readTime": "5 min"
  }
  ```
- **Resposta (201)**:
  ```json
  {
    "data": {
      "id": "uuid",
      "...": "..."
    },
    "usuario": "adv"
  }
  ```

### GET `/api/articles/:id`

- **Descrição**: devolve artigo com conteúdo completo.
- **Resposta (200)**:
  ```json
  {
    "data": {
      "id": "uuid",
      "title": "Título",
      "content": "<p>HTML…</p>",
      "...": "..."
    }
  }
  ```

### PUT `/api/articles/:id`

- **Descrição**: atualiza um artigo existente. Payload idêntico ao `POST`, acrescido de `id`.
- **Resposta (200)**:
  ```json
  {
    "data": { "id": "uuid", "title": "Título" },
    "usuario": "adv"
  }
  ```

### DELETE `/api/articles/:id`

- **Descrição**: exclui o artigo (metadados + arquivo de conteúdo).
- **Resposta**: `204 No Content`.

### Consumidores

- `src/services/github-storage-v2.ts` implementa o client `githubStorageV2`, usando `fetch` com `credentials: 'include'` para propagar o cookie de sessão.
- `src/pages/Redacao.tsx` e componentes relacionados utilizam esse serviço para listar, criar, atualizar e excluir artigos.

## Erros e Convenções

- Respostas de erro sempre seguem `{ "error": "mensagem" }` com o status HTTP apropriado.
- Todas as requisições exigem `Content-Type: application/json`.
- O backend aplica CORS baseado na variável `CORS_ORIGIN`.

## Boas Práticas

- Sempre chamar `login` antes de qualquer operação protegida; o cookie será anexado automaticamente nos próximos requests.
- Após criar/atualizar/excluir um artigo, invalidar caches locais (ex.: TanStack Query) para refletir o estado mais recente.
- Tratar status `401` no frontend redirecionando o usuário para o fluxo de login.
