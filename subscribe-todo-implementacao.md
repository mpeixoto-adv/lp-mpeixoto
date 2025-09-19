# Newsletter Subscription Implementation

## Objetivo
Permitir que visitantes assinem gratuitamente a newsletter e recebam notificações por e-mail sempre que um novo conteúdo for publicado, sem manter banco próprio, delegando armazenamento e disparo para um provedor SaaS.

---

## 1. Seleção e Configuração do Provedor
- [ ] Escolher provedor (Brevo/Sendinblue, Mailchimp, Postmark Broadcast, etc.).
- [ ] Criar lista/segmento "Newsletter M. Peixoto" e configurar opt-in (preferencialmente double opt-in).
- [ ] Criar template de e-mail para confirmação/campanhas e ajustar domínio/remetente (SPF, DKIM, DMARC se necessário).
- [ ] Gerar API key com permissões mínimas para criar contatos/enviar campanhas.

## 2. Variáveis de Ambiente
- [ ] Adicionar segredo `PROVIDER_API_KEY` (ex.: `BREVO_API_KEY`) no painel da Vercel.
- [ ] Refletir variável no `.env` local e no loader de env do backend, se necessário (`api/_lib/env.ts`).

## 3. Endpoint Serverless `/api/newsletter`
- [ ] Criar arquivo `api/newsletter/index.ts` seguindo o padrão de `api/articles/index.ts`.
- [ ] Configurar CORS reutilizando `setCors`/`handleOptions`.
- [ ] Definir schema de entrada com `zod` (e-mail obrigatório, nome opcional) e mensagens de erro claras.
- [ ] Implementar ponte com o provedor via `fetch`/`axios` (envio de `POST` ao endpoint de contatos).
- [ ] Tratar respostas (201 sucesso, 409 já inscrito, erros 4xx/5xx) e retornar JSON amigável.
- [ ] Registrar log de erro com contexto mínimo, sem expor dados sensíveis.

## 4. Formulário no Front-End
- [ ] Atualizar `src/components/Newsletter.tsx` para incluir formulário de inscrição (Input e Button).
- [ ] Controlar estado (`email`, `name`, `isSubmitting`, mensagens de sucesso/erro).
- [ ] No `onSubmit`, chamar `/api/newsletter` via `fetch` e tratar respostas.
- [ ] Exibir confirmação: "Inscrição confirmada! Enviaremos um aviso a cada nova edição.".
- [ ] Incluir nota de consentimento/privacidade e link para descadastro (página ou provedor).

## 5. Automação de Envio de Novidades
- [ ] Definir processo de disparo: automação do provedor ou endpoint dedicado (`/api/newsletter/broadcast`).
- [ ] Caso automate via backend:
  - [ ] Criar função protegida que receba dados do novo artigo e dispare e-mail usando template.
  - [ ] Considere chamar essa função após `saveArticle` em `api/articles/index.ts` (opcional, com try/catch para não quebrar publicação).
- [ ] Documentar processo manual caso optem por enviar campanhas direto pelo painel do provedor.

## 6. Segurança e Conformidade
- [ ] Garantir HTTPS e que a API key fique apenas no backend (nunca no front).
- [ ] Atualizar política de privacidade mencionando o provedor e finalidade do uso do e-mail.
- [ ] Oferecer canal de descadastro (link do provedor ou endpoint futuro).
- [ ] Considerar rate limiting ou CAPTCHA se houver spam.

## 7. Testes e Verificação
- [ ] Testar fluxo local com `npm run dev` + `npm run dev:api` (se houver) enviando inscrição dummy.
- [ ] Verificar inscrição no painel do provedor e recebimento de e-mail de confirmação.
- [ ] Publicar em preview da Vercel e testar novamente.
- [ ] Escrever lista rápida de verificação manual para futuras alterações.

## 8. Próximos Passos Futuramente (Opcional)
- [ ] Implementar área autenticada para listar/remover inscritos (via API do provedor).
- [ ] Integrar analytics do provedor (aberturas/cliques) em dashboard interno.
- [ ] Automatizar criação de campanhas quando novo artigo for publicado (GitHub Action ou webhook).

---

## Referências Rápidas
- Brevo API: https://developers.brevo.com/docs
- Mailchimp Marketing API: https://mailchimp.com/developer/marketing/docs/
- Postmark Broadcast: https://postmarkapp.com/developer/api/broadcast

