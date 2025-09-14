# 📄 SISTEMA DE ARTIGOS - GUIA COMPLETO

## 🚀 SISTEMA ATUAL (V2.0)

O sistema evoluiu para uma arquitetura moderna com **editor visual** e **gestão via interface web**. Não é mais necessário editar arquivos manualmente!

---

## 🎯 COMO ADICIONAR ARTIGOS (MÉTODO ATUAL)

### 📍 **Acessar o Painel de Redação**

1. **Acesse**: `https://seu-site.com/redacao`
2. **Login**:
   - Usuário: `adv`
   - Senha: [senha configurada]
3. **Interface**: Sistema completo de gestão de artigos

### ✨ **Criar Novo Artigo**

1. **Clique** em "Novo Artigo"
2. **Preencha** o formulário:
   - **Título**: Máximo 80 caracteres
   - **Resumo**: Máximo 200 caracteres
   - **Autor**: Pre-preenchido com "Dr. Marcelo Peixoto"
   - **Categoria**: Selecionar da lista
   - **Imagem**: URL opcional
   - **Conteúdo**: Editor visual (TipTap)

3. **Formate** o texto usando a toolbar:
   - **Negrito/Itálico**: Botões na toolbar
   - **Títulos**: H2 e H3 disponíveis
   - **Listas**: Ordenadas e não-ordenadas
   - **Preview**: Visualizar antes de salvar

4. **Salvar**: Clique em "Salvar Rascunho"

### 🔍 **Preview e Publicação**

- **Preview**: Veja como ficará o artigo no site
- **Editar**: Volte ao editor para ajustes
- **Automático**: Artigo aparece imediatamente no site

---

## 🎨 CATEGORIAS DISPONÍVEIS

- Direito Civil
- Direito Tributário
- Direito Trabalhista
- Direito Empresarial
- Direito do Consumidor
- Direito Imobiliário
- Direito de Família
- Notícias Jurídicas

---

## 🖼️ IMAGENS RECOMENDADAS

### **Sites Gratuitos**
- **Unsplash**: https://unsplash.com/s/photos/law
- **Pexels**: https://www.pexels.com/search/law/
- **Pixabay**: https://pixabay.com/images/search/law/

### **URLs Prontas** (copie e cole):

**Direito Geral:**
```
https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070
```

**Direito Empresarial:**
```
https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070
```

**Direito Tributário:**
```
https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072
```

**Direito do Consumidor:**
```
https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070
```

### **Especificações Técnicas**
- **Largura mínima**: 1200px
- **Proporção**: 16:9 ou 4:3
- **Formato**: JPG, PNG ou WebP
- **Tamanho máximo**: 1MB

---

## ⚡ FUNCIONALIDADES DO EDITOR

### **Formatação de Texto**
- **Negrito**: Ctrl+B ou botão
- **Itálico**: Ctrl+I ou botão
- **Títulos**: Botões H2 e H3
- **Listas**: Ordenadas (1,2,3) e não-ordenadas (•)

### **Estrutura Recomendada**

```
Título Principal (automático)
├── Introdução (parágrafo)
├── Título H2: Primeiro Tópico
│   ├── Parágrafo explicativo
│   └── Lista de pontos
├── Título H2: Segundo Tópico
│   ├── Parágrafo explicativo
│   └── Subtítulo H3 (se necessário)
└── Conclusão (parágrafo)
```

### **Tempo de Leitura**
Calculado automaticamente:
- **150-200 palavras** = 1 min
- **300-400 palavras** = 2 min
- **450-600 palavras** = 3 min

---

## 📱 GERENCIAMENTO DE ARTIGOS

### **Lista de Artigos**
- **Visualizar**: Todos os artigos criados
- **Editar**: Clique em "Editar" no artigo
- **Excluir**: Clique em "Excluir" (confirmação necessária)
- **Filtros**: Por categoria, autor ou data

### **Estados do Artigo**
- **Rascunho**: Em edição
- **Publicado**: Visível no site
- **Arquivado**: Não aparece nas listagens

### **Informações Automáticas**
- **Slug**: Gerado automaticamente do título
- **Data**: Data atual de criação
- **ID**: Identificador único automático
- **Última edição**: Timestamp da última modificação

---

## 💡 DICAS E BOAS PRÁTICAS

### ✅ **Recomendações**

1. **Títulos Atrativos**
   - Use palavras-chave relevantes
   - Máximo 80 caracteres
   - Seja claro e específico

2. **Resumos Eficazes**
   - 2-3 linhas que despertem curiosidade
   - Inclua o benefício principal
   - Use linguagem acessível

3. **Estrutura Clara**
   - Use títulos H2 para seções principais
   - Parágrafos curtos (3-4 linhas)
   - Listas para informações importantes

4. **Conteúdo Útil**
   - Responda dúvidas comuns dos clientes
   - Use exemplos práticos
   - Linguagem acessível (evite muito juridiquês)

### ❌ **Evitar**

- Textos muito longos sem divisões
- Títulos genéricos ("Novidades", "Informações")
- Parágrafos gigantes
- Linguagem excessivamente técnica
- Esquecer de preencher o resumo

---

## 🔧 SISTEMA TÉCNICO (PARA DESENVOLVEDORES)

### **Arquitetura Atual**

```
Sistema Híbrido:
├── Metadados: src/data/articles/index.ts
├── Conteúdo: src/data/articles/content/[slug].ts
├── Editor: TipTap (React)
├── Storage: GitHub API
└── Cache: TanStack Query
```

### **Fluxo de Dados**

1. **Editor** → Validação de campos
2. **GitHub Storage** → Salva 2 arquivos:
   - Metadados no `index.ts`
   - Conteúdo em `content/[slug].ts`
3. **Site** → Atualização automática

### **Backup e Segurança**
- **Versionamento**: Git automático
- **Backup**: Toda alteração vira commit
- **Recuperação**: Histórico completo no GitHub
- **Acesso**: Autenticação obrigatória

---

## 🆘 TROUBLESHOOTING

### **Problemas Comuns**

**"Erro ao salvar artigo"**
- Verificar conexão internet
- Tentar novamente após alguns segundos
- Contactar desenvolvedor se persistir

**"Artigo não aparece no site"**
- Aguardar alguns minutos (cache)
- Verificar se foi salvo com sucesso
- Recarregar página do site

**"Perdeu o texto no editor"**
- O editor mantém estado durante navegação
- Salvar frequentemente como precaução
- Use Ctrl+S para salvar rápido

**"Imagem não carrega"**
- Verificar se URL está correta
- Usar URLs do Unsplash/Pexels
- Imagem deve ser pública (não requer login)

### **Recuperação de Emergência**

Se algo der errado:
1. **Não entre em pânico** - tudo fica salvo no Git
2. **Anote** o que estava fazendo quando deu erro
3. **Contate** o desenvolvedor responsável
4. **Histórico** completo permite reverter mudanças

---

## 📊 MÉTRICAS E ANALYTICS

### **Informações Disponíveis**
- **Tempo de leitura**: Calculado automaticamente
- **Data de criação**: Registro completo
- **Última edição**: Timestamp de modificações
- **Autor**: Identificação do responsável

### **Futuras Implementações**
- [ ] Visualizações por artigo
- [ ] Artigos mais populares
- [ ] Tempo de permanência na página
- [ ] Compartilhamentos em redes sociais

---

## 🚀 PRÓXIMAS FUNCIONALIDADES

### **Em Desenvolvimento**
- [ ] Upload direto de imagens
- [ ] Templates pré-definidos
- [ ] Sistema de comentários
- [ ] Newsletter automática
- [ ] SEO otimizado automático

### **Solicitações de Funcionalidades**
Para sugerir melhorias:
1. Use o sistema normalmente
2. Anote dificuldades ou ideias
3. Comunique ao desenvolvedor
4. Avalie prioridade vs. complexidade

---

## 📞 SUPORTE

### **Para Editores de Conteúdo**
- **Interface intuitiva** - similar ao Word
- **Preview em tempo real** - veja como fica
- **Salvamento automático** - não perde trabalho
- **Guias visuais** - interface auto-explicativa

### **Para Administradores**
- **Controle total** via interface web
- **Backup automático** - zero perda de dados
- **Deploy automático** - artigo no ar imediatamente
- **Histórico completo** - reverter qualquer mudança

### **Contato Técnico**
Em caso de problemas técnicos:
- Descreva o que estava fazendo
- Inclua mensagem de erro (se houver)
- Anote horário do problema
- Entre em contato com equipe técnica

---

*Guia atualizado em: Setembro 2024*
*Versão do sistema: 2.0 - Editor Visual*