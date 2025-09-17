# 🔐 SECURITY ACTION PLAN - CODex REVIEW

## 📌 Visão Geral
- **Status atual**: frontend expõe segredos (hash de senha, chave JWT, token GitHub) e executa lógica sensível no navegador.
- **Principais riscos**: se o bundle for distribuído, qualquer visitante consegue publicar/alterar artigos e obter acesso ao repositório GitHub.
- **Objetivo**: mover segredos e autenticação para backend serverless na Vercel, eliminar `eval`, validar entradas e endurecer o pipeline de publicação.

---

## 🚨 Prioridades Imediatas (Semana 1)
1. **Backend serverless**
   - Criar estrutura `api/` na Vercel com `vercel.json` configurado para Node 20.
   - Instalar `jsonwebtoken`, `bcryptjs`, `zod`, `undici` (ou `node-fetch`), utilitários de CORS/rate limiting leves.
   - Garantir variáveis de ambiente (`AUTH_PASSWORD_HASH`, `JWT_SECRET`, `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_BRANCH`).

2. **Autenticação segura**
   - Implementar `/api/login`, `/api/session`, `/api/logout`.
   - Validar usuário/senha com `bcrypt.compare`; emitir JWT via `jsonwebtoken.sign`.
   - Devolver token em cookie `httpOnly` + `SameSite`, com expiração curta e logs de auditoria.

3. **Proxy GitHub**
   - Expor `/api/articles` (listar/criar/atualizar/excluir) usando `Bearer ${process.env.GITHUB_TOKEN}`.
   - Validar payloads com `zod` antes de chamar a API e registrar sucessos/falhas.

4. **Frontend mínimo**
   - Remover `src/utils/auth.ts` e chamadas diretas à GitHub API.
   - Adaptar hooks/contexto para consumir `/api/login` + `/api/session`.
   - Confirmar que nenhuma variável `VITE_*` crítica fica no bundle.

---

## 🟡 Fase 2 (Semanas 2–4)
- **Eliminar `eval`**: redefinir o formato de metadados/conteúdo (ex.: `articles-metadata.json`). Atualizar `github-storage-v2.ts`, `github-storage.ts` e scripts de build; falhar build se `eval` reaparecer.
- **Fluxo UX**: tratar sessões expiradas, mensagens de erro, feedback após CRUD.
- **Segurança adicional**: aplicar rate limiting simples nas functions, validar inputs com `zod`, sanitizar HTML exibido com DOMPurify (frontend apenas para renderização).

---

## 🔒 Fase 3 (1–2 Meses)
- **Endurecimento**: adicionar CSRF token se frontend e backend estiverem em domínios distintos; configurar headers (CSP básica, HSTS); consolidar audit trail.
- **Operação**: documentar novo fluxo em README/SECURITY docs, atualizar `TODO-SECURITY-FIXES.md`, implementar CI com testes de segurança.
- **Monitoramento**: definir rotação periódica de segredos, configurar alertas para falhas repetidas de login/proxy e acompanhar métricas de uso.

---

## ✅ Critérios de Conclusão
- Hash de senha, chave JWT e token GitHub acessíveis apenas no backend.
- Autenticação e tokens gerenciados via endpoints serverless com cookies httpOnly.
- CRUD de artigos passando exclusivamente pelo proxy seguro.
- Código sem `eval` ou construções equivalentes em produção.
- Documentação atualizada e testes cobrindo autenticação, proxy e casos de erro.

---

## 📚 Referências Recomendadas
- Vercel Serverless Functions: https://vercel.com/docs/functions/serverless-functions
- JSON Web Tokens (RFC 7519) & melhores práticas OWASP
- OWASP API Security Top 10 (validação e rate limiting)
