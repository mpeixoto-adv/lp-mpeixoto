# 📚 Documentação - Sistema de Artigos

## 📝 Como Adicionar Novos Artigos ao Site

Este guia explica passo a passo como adicionar novos artigos/notícias ao site M. Peixoto Advogados.

---

## 🚀 Processo Rápido (Para Desenvolvedores)

### 1️⃣ Localizar o Arquivo
Abra o arquivo: `src/data/articles.ts`

### 2️⃣ Adicionar Novo Artigo
Adicione um novo objeto no array `articles`, seguindo este modelo:

```typescript
{
  id: "4", // Próximo número sequencial
  title: "Título do Seu Artigo",
  excerpt: "Resumo breve do artigo (máximo 2-3 linhas)",
  content: `
    <h2>Subtítulo Principal</h2>
    <p>Parágrafo de introdução...</p>
    
    <h3>Subtítulo Secundário</h3>
    <p>Conteúdo do artigo...</p>
    
    <ul>
      <li>Item de lista 1</li>
      <li>Item de lista 2</li>
    </ul>
  `,
  author: "Dr. Nome do Autor",
  date: "2024-01-25", // Formato: AAAA-MM-DD
  category: "Direito Civil", // Categoria do artigo
  image: "URL_DA_IMAGEM", // Opcional
  readTime: "5 min", // Tempo estimado de leitura
  slug: "titulo-do-artigo-em-url" // URL amigável (sem acentos, espaços = hífen)
}
```

### 3️⃣ Salvar e Testar
- Salve o arquivo
- O artigo aparecerá automaticamente no site
- Teste acessando `/artigos` no navegador

---

## 📋 Processo Detalhado (Para Advogados)

### Passo 1: Preparar o Conteúdo
Envie para o desenvolvedor:
- **Título do artigo**
- **Resumo** (2-3 linhas)
- **Texto completo** (pode ser em Word/Google Docs)
- **Nome do autor**
- **Categoria** (ex: Direito Civil, Tributário, etc.)
- **Imagem** (opcional - pode ser um link ou arquivo)

### Passo 2: Formatação do Texto
O desenvolvedor irá formatar usando HTML básico:
- `<h2>` para títulos principais
- `<h3>` para subtítulos
- `<p>` para parágrafos
- `<ul>` e `<li>` para listas
- `<ol>` para listas numeradas
- `<strong>` para texto em negrito

### Passo 3: Publicação
Após adicionar o artigo no código, ele aparecerá:
- Na página inicial (seção "Artigos e Notícias")
- Na página `/artigos` (listagem completa)
- Com URL própria: `/artigo/[slug-do-artigo]`

---

## 🎨 Categorias Disponíveis

Use uma destas categorias ao criar artigos:
- Direito Civil
- Direito Tributário
- Direito Trabalhista
- Direito Empresarial
- Direito do Consumidor
- Direito Imobiliário
- Direito de Família
- Notícias Jurídicas

---

## 🖼️ Sobre as Imagens

### Opções para Imagens:
1. **URLs Externas** (Recomendado)
   - Use imagens do Unsplash: `https://images.unsplash.com/...`
   - Use imagens do Pexels: `https://images.pexels.com/...`

2. **Imagens Locais**
   - Coloque a imagem em: `public/articles/`
   - Use o caminho: `/articles/nome-da-imagem.jpg`

### Tamanho Recomendado:
- Largura: 1200px mínimo
- Proporção: 16:9 ou 4:3
- Formato: JPG ou PNG
- Tamanho máximo: 500KB

---

## 💡 Dicas Importantes

### ✅ Boas Práticas:
- **Títulos claros e objetivos** (máximo 80 caracteres)
- **Resumos concisos** que despertem interesse
- **Parágrafos curtos** para melhor leitura
- **Use subtítulos** para organizar o conteúdo
- **Tempo de leitura realista** (150-200 palavras = 1 min)

### ❌ Evitar:
- Textos muito longos sem divisões
- Títulos genéricos como "Novidades"
- Esquecer de preencher a data
- URLs com acentos ou caracteres especiais
- Imagens muito pesadas (>1MB)

---

## 📅 Exemplo Prático

### Artigo Original (Word):
```
TÍTULO: Novo Marco Legal das Startups

RESUMO: Entenda as principais mudanças trazidas pela Lei Complementar 182/2021

TEXTO:
O Marco Legal das Startups trouxe importantes inovações...

AUTOR: Dr. João Silva
DATA: 25 de janeiro de 2024
CATEGORIA: Direito Empresarial
```

### Artigo Formatado (articles.ts):
```typescript
{
  id: "4",
  title: "Novo Marco Legal das Startups",
  excerpt: "Entenda as principais mudanças trazidas pela Lei Complementar 182/2021 e como elas impactam o ecossistema de inovação.",
  content: `
    <h2>O Marco Legal das Startups</h2>
    <p>O Marco Legal das Startups trouxe importantes inovações para o ecossistema de empreendedorismo e inovação no Brasil.</p>
    
    <h3>Principais Mudanças</h3>
    <ul>
      <li>Sandbox regulatório para testar inovações</li>
      <li>Facilitação de investimentos</li>
      <li>Simplificação de processos</li>
    </ul>
    
    <h3>Impactos no Mercado</h3>
    <p>As startups agora contam com maior segurança jurídica...</p>
  `,
  author: "Dr. João Silva",
  date: "2024-01-25",
  category: "Direito Empresarial",
  image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
  readTime: "4 min",
  slug: "novo-marco-legal-das-startups"
}
```

---

## 🔧 Manutenção

### Editar Artigo Existente:
1. Encontre o artigo pelo `id` no arquivo
2. Modifique os campos necessários
3. Salve o arquivo

### Remover Artigo:
1. Delete o objeto completo do array
2. Ajuste os IDs dos artigos seguintes se necessário

### Ordenação:
- Os artigos aparecem por ordem de data (mais recentes primeiro)
- Para mudar a ordem, ajuste as datas

---

## 📞 Suporte

Em caso de dúvidas ou problemas:
1. Verifique se o formato está correto
2. Confira se não há erros de sintaxe (vírgulas, aspas)
3. Teste localmente antes de publicar
4. Entre em contato com o desenvolvedor responsável

---

## 🚀 Futuras Melhorias

### Em Desenvolvimento:
- [ ] Painel administrativo para adicionar artigos
- [ ] Editor visual (tipo Word)
- [ ] Upload direto de imagens
- [ ] Sistema de comentários
- [ ] Newsletter por email
- [ ] Categorias dinâmicas
- [ ] Busca avançada
- [ ] Tags e palavras-chave

---

*Última atualização: Janeiro 2024* 