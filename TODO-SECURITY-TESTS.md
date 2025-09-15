# 🧪 TODO: Testes e Validações de Segurança

## 🔍 TESTES DE VALIDAÇÃO DAS CORREÇÕES

### **1. Testes de Exposição de Token GitHub**

#### **Teste 1.1: DevTools Network Tab**
- [ ] **Acessar área de redação logado**
  - Fazer login em `/redacao`
  - Abrir DevTools (F12) → Network
  - Clicar em "Atualizar" para forçar requisições
  - **✅ SUCESSO**: Nenhuma requisição para `api.github.com` visível
  - **❌ FALHA**: Token aparece nos headers Authorization

#### **Teste 1.2: Interceptação JavaScript**
- [ ] **Executar script de interceptação**
  ```javascript
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    if (url.includes('github.com') && options?.headers?.Authorization) {
      console.error('🚨 TOKEN AINDA EXPOSTO:', options.headers.Authorization);
      return originalFetch.apply(this, arguments);
    }
    return originalFetch.apply(this, arguments);
  };
  ```
  - **✅ SUCESSO**: Nenhum token capturado
  - **❌ FALHA**: Token ainda sendo interceptado

#### **Teste 1.3: Análise do Bundle JavaScript**
- [ ] **Verificar código compilado**
  - Executar `npm run build`
  - Analisar `dist/assets/index-*.js`
  - Buscar por padrões: `ghp_`, `github_pat_`, `VITE_GITHUB_TOKEN`
  - **✅ SUCESSO**: Nenhum token encontrado no bundle
  - **❌ FALHA**: Token ainda visível no código compilado

### **2. Testes de Credenciais Hardcoded**

#### **Teste 2.1: Hash de Senha no Código**
- [ ] **Verificar código fonte**
  - Revisar `src/utils/auth.ts`
  - Buscar por padrões bcrypt: `$2b$10$`, `$2a$10$`
  - **✅ SUCESSO**: Apenas referência à variável de ambiente
  - **❌ FALHA**: Hash ainda hardcoded no código

#### **Teste 2.2: Chave JWT Hardcoded**
- [ ] **Verificar implementação JWT**
  - Revisar funções de geração/validação de token
  - Buscar por strings hardcoded como `"advocacia-secret-key"`
  - **✅ SUCESSO**: Usa variáveis de ambiente ou biblioteca segura
  - **❌ FALHA**: Chave ainda hardcoded

#### **Teste 2.3: Busca Global por Credenciais**
- [ ] **Buscar em todo o projeto**
  ```bash
  # Buscar por padrões suspeitos
  grep -r "password" src/ --exclude-dir=node_modules
  grep -r "\$2[ab]\$10\$" src/ --exclude-dir=node_modules
  grep -r "secret" src/ --exclude-dir=node_modules
  ```
  - **✅ SUCESSO**: Apenas referências seguras
  - **❌ FALHA**: Credenciais encontradas

### **3. Testes de JWT Seguro**

#### **Teste 3.1: Tentativa de Forjar Token**
- [ ] **Modificar token manualmente**
  - Fazer login e copiar token válido
  - Modificar payload (ex: mudar usuário para "admin")
  - Tentar usar token modificado
  - **✅ SUCESSO**: Token rejeitado, erro de validação
  - **❌ FALHA**: Token aceito, sistema comprometido

#### **Teste 3.2: Token Expirado**
- [ ] **Testar expiração**
  - Aguardar token expirar (ou modificar timestamp)
  - Tentar usar token expirado
  - **✅ SUCESSO**: Token rejeitado, redirecionado para login
  - **❌ FALHA**: Token aceito após expiração

#### **Teste 3.3: Validação de Assinatura**
- [ ] **Testar assinatura inválida**
  - Modificar apenas a parte da assinatura do JWT
  - Tentar usar token com assinatura inválida
  - **✅ SUCESSO**: Token rejeitado
  - **❌ FALHA**: Token aceito com assinatura inválida

### **4. Testes de Remoção do eval()**

#### **Teste 4.1: Busca por eval() no Código**
- [ ] **Verificar código fonte**
  ```bash
  grep -r "eval(" src/ --exclude-dir=node_modules
  ```
  - **✅ SUCESSO**: Nenhuma ocorrência encontrada
  - **❌ FALHA**: eval() ainda presente

#### **Teste 4.2: Análise do Bundle Final**
- [ ] **Verificar código compilado**
  - Executar `npm run build`
  - Analisar bundle para warnings sobre eval()
  - Buscar por `eval(` no código compilado
  - **✅ SUCESSO**: Nenhum eval() no bundle final
  - **❌ FALHA**: eval() ainda presente no build

#### **Teste 4.3: Teste de Parsing Seguro**
- [ ] **Testar com dados maliciosos**
  - Tentar parsear JSON com código JavaScript malicioso
  - Verificar se código não é executado
  - **✅ SUCESSO**: Apenas parsing JSON, sem execução
  - **❌ FALHA**: Código malicioso executado

### **5. Testes de Funcionalidade (Regressão)**

#### **Teste 5.1: Sistema de Login**
- [ ] **Fluxo completo de autenticação**
  - Acessar `/redacao`
  - Inserir credenciais corretas
  - Verificar redirecionamento e estado logado
  - **✅ SUCESSO**: Login funciona normalmente
  - **❌ FALHA**: Login quebrado

#### **Teste 5.2: CRUD de Artigos**
- [ ] **Operações básicas**
  - Criar novo artigo
  - Editar artigo existente
  - Excluir artigo
  - Listar artigos
  - **✅ SUCESSO**: Todas as operações funcionam
  - **❌ FALHA**: Alguma operação quebrada

#### **Teste 5.3: Performance e UX**
- [ ] **Experiência do usuário**
  - Medir tempos de carregamento
  - Verificar se interface não regrediu
  - Testar responsividade
  - **✅ SUCESSO**: Performance mantida ou melhorada
  - **❌ FALHA**: Performance degradada

### **6. Testes de Penetração**

#### **Teste 6.1: Tentativa de XSS**
- [ ] **Injeção de script em artigos**
  - Tentar inserir `<script>alert('XSS')</script>` em artigo
  - Verificar se script é sanitizado
  - **✅ SUCESSO**: Script escapado ou removido
  - **❌ FALHA**: Script executado

#### **Teste 6.2: Força Bruta no Login**
- [ ] **Múltiplas tentativas de login**
  - Tentar várias senhas incorretas rapidamente
  - Verificar se há rate limiting
  - **✅ SUCESSO**: Requests limitados após X tentativas
  - **❌ FALHA**: Permite tentativas ilimitadas

#### **Teste 6.3: Manipulação de Sessão**
- [ ] **Tentativa de roubo de sessão**
  - Tentar usar token de outra sessão
  - Verificar validação de origem
  - **✅ SUCESSO**: Sessão rejeitada
  - **❌ FALHA**: Sessão aceita indevidamente

## 📊 RELATÓRIO DE TESTES

### **Checklist de Validação Final**

- [ ] ✅ **Token GitHub não é mais visível no navegador**
- [ ] ✅ **Credenciais removidas do código fonte**
- [ ] ✅ **JWT implementado de forma segura**
- [ ] ✅ **eval() completamente removido**
- [ ] ✅ **Funcionalidade mantida**
- [ ] ✅ **Performance não degradada**
- [ ] ✅ **Testes de penetração passaram**

### **Critérios de Aprovação**

**✅ APROVADO**: Todos os testes passaram
**⚠️ ATENÇÃO**: 1-2 testes falharam (priorizar correção)
**❌ REPROVADO**: 3+ testes falharam (não deployar)

### **Documentação de Testes**

Para cada teste que falhar:
- [ ] Documentar exatamente o que falhou
- [ ] Explicar o risco de segurança
- [ ] Propor correção específica
- [ ] Re-testar após correção

---

**🎯 OBJETIVO**: Garantir que **TODAS** as vulnerabilidades críticas demonstradas foram **100% CORRIGIDAS** antes do deploy em produção.