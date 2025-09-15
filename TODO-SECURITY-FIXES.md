# 🔐 TODO: Correções de Vulnerabilidades Críticas

## 🚨 PRIORIDADE CRÍTICA - Implementar IMEDIATAMENTE

### **1. Mover Credenciais Hardcoded para Variáveis de Ambiente**
- [ ] **Remover hash de senha do código fonte**
  - Arquivo: `src/utils/auth.ts` (linha 4)
  - Mover `SENHA_HASH` para variável de ambiente `AUTH_PASSWORD_HASH`
  - Usar `process.env.AUTH_PASSWORD_HASH` no servidor

- [ ] **Remover chave JWT hardcoded**
  - Arquivo: `src/utils/auth.ts` (função gerarToken)
  - Remover `"advocacia-secret-key"` do código
  - Criar variável `JWT_SECRET_KEY` segura

- [ ] **Configurar .env seguro**
  - Criar `.env.local` para desenvolvimento
  - Adicionar `.env` ao `.gitignore`
  - Documentar variáveis necessárias

### **2. Implementar JWT Seguro**
- [ ] **Instalar biblioteca jsonwebtoken**
  ```bash
  npm install jsonwebtoken @types/jsonwebtoken
  ```

- [ ] **Substituir implementação artesanal**
  - Arquivo: `src/utils/auth.ts`
  - Remover funções `gerarToken()` e `verificarToken()` atuais
  - Implementar usando `jwt.sign()` e `jwt.verify()`

- [ ] **Gerar chave secreta robusta**
  - Usar crypto para gerar chave aleatória de 256 bits
  - Armazenar em variável de ambiente
  - Implementar rotação de chaves

### **3. Criar API Proxy para GitHub (CRÍTICO)**
- [ ] **Criar servidor backend Node.js/Express**
  - Setup básico do servidor na porta 3001
  - Middlewares de CORS e parsing JSON
  - Estrutura de rotas `/api/articles`

- [ ] **Implementar endpoints proxy**
  - `GET /api/articles` - listar artigos
  - `GET /api/articles/:id` - buscar por ID
  - `POST /api/articles` - criar artigo
  - `PUT /api/articles/:id` - atualizar artigo
  - `DELETE /api/articles/:id` - excluir artigo

- [ ] **Mover token GitHub para backend**
  - Token fica apenas em `process.env.GITHUB_TOKEN` no servidor
  - Cliente nunca vê o token
  - Todas as chamadas GitHub passam pelo proxy

- [ ] **Atualizar frontend para usar proxy**
  - Arquivo: `src/services/github-storage-v2.ts`
  - Mudar URLs de `api.github.com` para `localhost:3001/api`
  - Remover headers de autorização do frontend
  - Implementar autenticação via session/JWT

### **4. Remover Uso de eval()**
- [ ] **Identificar todas as ocorrências de eval()**
  - Buscar no código por `eval(`
  - Analisar contexto de uso
  - Documentar pontos que precisam ser alterados

- [ ] **Substituir por JSON.parse() seguro**
  - Arquivo: `src/services/github-storage-v2.ts` (linha 110)
  - Implementar parsing seguro de metadados
  - Validar estrutura antes do parse

- [ ] **Implementar sanitização de dados**
  - Validar entrada antes do parsing
  - Usar schemas de validação (Zod)
  - Tratamento de erros robusto

## 📋 TAREFAS COMPLEMENTARES

### **5. Melhorias de Segurança Geral**
- [ ] **Implementar rate limiting**
  - Limitar tentativas de login
  - Proteção contra força bruta
  - Throttling de requisições

- [ ] **Adicionar validação de inputs**
  - Sanitizar conteúdo HTML dos artigos
  - Validar uploads de imagens
  - Escape de caracteres especiais

- [ ] **Configurar HTTPS em produção**
  - Certificados SSL/TLS
  - Redirect HTTP → HTTPS
  - Security headers (HSTS, CSP)

### **6. Logging e Monitoramento**
- [ ] **Implementar logs de auditoria**
  - Log de tentativas de login
  - Log de operações CRUD em artigos
  - Detecção de atividades suspeitas

- [ ] **Configurar alertas de segurança**
  - Notificações de falhas de autenticação
  - Alertas de modificações em produção
  - Monitoramento de performance

## ⏰ CRONOGRAMA RECOMENDADO

### **Semana 1 (CRÍTICO)**
- ✅ Itens 1, 2, 3, 4 - Vulnerabilidades críticas
- ✅ Testes básicos de funcionamento

### **Semana 2 (IMPORTANTE)**
- ✅ Itens 5, 6 - Melhorias complementares
- ✅ Testes completos de segurança

### **Semana 3 (MONITORAMENTO)**
- ✅ Deploy em produção
- ✅ Monitoramento ativo
- ✅ Documentação final

## 🎯 CRITÉRIOS DE SUCESSO

- [ ] ❌ Token GitHub não aparece mais no navegador
- [ ] ❌ Hash de senha não está no código fonte
- [ ] ❌ eval() removido completamente
- [ ] ✅ JWT seguro e validado
- [ ] ✅ Autenticação robusta funcionando
- [ ] ✅ Sistema de artigos operacional
- [ ] ✅ Performance mantida
- [ ] ✅ UX não prejudicada

---

**⚠️ NOTA CRÍTICA:** Estas vulnerabilidades foram **DEMONSTRADAS** e representam riscos reais. A implementação deve ser tratada como **EMERGÊNCIA DE SEGURANÇA**.