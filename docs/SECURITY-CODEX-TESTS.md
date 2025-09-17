# 🧪 SECURITY ACTION TEST PLAN - CODex

## 🎯 Objetivo
Validar que as correções propostas em `SECURITY-CODEX.md` realmente removem os riscos críticos: segredos expostos, autenticação insegura, proxy ausente e uso de `eval`.

---

## ✅ Pré-Requisitos
- Deploy do backend serverless na Vercel (ou ambiente local equivalente).
- Variáveis de ambiente configuradas (`AUTH_PASSWORD_HASH`, `JWT_SECRET`, `GITHUB_TOKEN`, etc.).
- Frontend apontando para os novos endpoints (`/api/*`) e build atualizado sem segredos.
- Scripts de lint/test configurados para falhar se `eval` reaparecer.

---

## 🔍 Testes Fase 1 (Backend + Fluxo Básico)
1. **Login válido**
   - `curl -i -X POST https://<app>/api/login -d '{"usuario":"adv","senha":"<senha-certa>"}'`
   - Verificar `Set-Cookie: auth-token=...; HttpOnly; SameSite=Strict` e payload JWT com expiração < 24h.

2. **Login inválido**
   - Enviar senha errada; esperar HTTP 401, sem cookie.
   - Log de auditoria deve registrar tentativa.

3. **Sessão ativa**
   - `curl -b 'auth-token=...' https://<app>/api/session`
   - Resposta `200` com usuário; expiração respeitada.

4. **Logout**
   - `curl -b 'auth-token=...' https://<app>/api/logout`
   - Cookie removido (`auth-token=; Max-Age=0`).

5. **Proxy GitHub CRUD**
   - `GET /api/articles` retorna lista sem expor `GITHUB_TOKEN`.
   - `POST`, `PUT`, `DELETE` com payload válido funcionam; payload inválido recebe `400` com erros Zod.
   - Logs registram usuário + ação.

6. **Rate limiting**
   - Enviar >N requisições rápidas; API deve retornar `429` e logar excesso.

---

## 🔍 Testes Fase 2 (Frontend + UX)
1. **Bundle limpo**
   - `npm run build` e inspecionar `dist/assets/*.js` por `SENHA_HASH`, `JWT_SECRET`, `GITHUB_TOKEN` (`rg 'HASH\|JWT\|TOKEN' dist`).
   - `rg "eval\(" src/` deve retornar vazio.

2. **Fluxo completo de publicação**
   - Login via UI, criar artigo, editar, deletar, garantir que atualiza repositório.
   - Sessão expirada → UI pede login novamente sem crash.

3. **Sanitização**
   - Criar artigo com HTML suspeito (`<script>alert(1)</script>`); renderização deve escapar ou higienizar.

4. **Erro GitHub**
   - Simular token inválido (alterar env de desenvolvimento) → UI deve mostrar erro amigável; backend retorna 401 sem vazar stack trace.

---

## 🔍 Testes Fase 3 (Hardenização)
1. **CSRF**
   - Se front/back em domínios distintos: verificar presença de token anti-CSRF ou uso de SameSite estrito.

2. **Security headers**
   - `curl -I https://<app>/` deve mostrar `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options` (quando aplicável).

3. **Rotação de segredos**
   - Atualizar `JWT_SECRET` e `GITHUB_TOKEN` em ambiente de teste; confirmar que app continua funcional após redeploy.

4. **Alertas/logs**
   - Injetar tentativas repetidas de login inválido → confirmar alertas (via logs/monitoring) e bloqueio temporário se configurado.

---

## ✅ Critérios de Aprovação
- Todos os testes Fase 1 passam sem false negatives.
- Build final sem segredos, sem `eval` e sem leaks de stack trace.
- UI opera com backend, lida com sessões/erros adequadamente.
- Hardenização aplicada em produção (ou plano com evidências de rollout).

---

## 🛠 Ferramentas Úteis
- `curl`, `httpie`, Postman para APIs.
- `rg`, `jq`, `jwt-cli` para inspeção.
- Logs/monitoring da Vercel ou provider equivalente.

---
