# 📄 Template para Novo Artigo

## Copie e cole este modelo no arquivo `src/data/articles.ts`

```typescript
{
  id: "X", // SUBSTITUA X pelo próximo número
  title: "TÍTULO DO ARTIGO AQUI",
  excerpt: "RESUMO DO ARTIGO EM 2-3 LINHAS. Este texto aparece no card de preview do artigo.",
  content: `
    <h2>Introdução</h2>
    <p>Primeiro parágrafo da introdução...</p>
    <p>Segundo parágrafo da introdução...</p>
    
    <h3>Primeiro Subtópico</h3>
    <p>Conteúdo do primeiro subtópico...</p>
    
    <h3>Segundo Subtópico</h3>
    <p>Conteúdo do segundo subtópico...</p>
    
    <h3>Lista de Pontos Importantes</h3>
    <ul>
      <li>Primeiro ponto importante</li>
      <li>Segundo ponto importante</li>
      <li>Terceiro ponto importante</li>
    </ul>
    
    <h3>Passos ou Procedimentos</h3>
    <ol>
      <li>Primeiro passo</li>
      <li>Segundo passo</li>
      <li>Terceiro passo</li>
    </ol>
    
    <h3>Conclusão</h3>
    <p>Parágrafo de conclusão do artigo...</p>
    <p><strong>Texto em destaque ou chamada para ação.</strong></p>
  `,
  author: "Dr. NOME DO AUTOR",
  date: "2024-MM-DD", // Formato: ANO-MÊS-DIA
  category: "CATEGORIA", // Ex: "Direito Civil", "Direito Tributário", etc.
  image: "URL_DA_IMAGEM", // Opcional - pode deixar vazio ou usar uma URL
  readTime: "X min", // Tempo estimado de leitura
  slug: "url-do-artigo" // URL amigável (sem espaços, acentos ou caracteres especiais)
},
```

---

## 📝 Checklist Antes de Publicar

- [ ] ID único e sequencial
- [ ] Título claro e atrativo
- [ ] Resumo conciso e informativo
- [ ] Conteúdo bem formatado com tags HTML
- [ ] Nome do autor correto
- [ ] Data no formato correto (AAAA-MM-DD)
- [ ] Categoria apropriada
- [ ] Imagem de boa qualidade (se aplicável)
- [ ] Tempo de leitura estimado
- [ ] Slug único e amigável
- [ ] Vírgula no final do objeto (exceto se for o último)

---

## 🎨 Sugestões de Imagens Gratuitas

### Sites Recomendados:
- **Unsplash**: https://unsplash.com/s/photos/law
- **Pexels**: https://www.pexels.com/search/law/
- **Pixabay**: https://pixabay.com/images/search/law/

### Exemplos de URLs prontas para usar:

**Direito Geral:**
```
https://images.unsplash.com/photo-1589829545856-d10d557cf95f
```

**Direito Empresarial:**
```
https://images.unsplash.com/photo-1454165804606-c3d57bc86b40
```

**Direito Tributário:**
```
https://images.unsplash.com/photo-1554224155-6726b3ff858f
```

**Direito do Consumidor:**
```
https://images.unsplash.com/photo-1556742049-0cfed4f6a45d
```

**Direito Trabalhista:**
```
https://images.unsplash.com/photo-1521791136064-7986c2920216
```

**Direito de Família:**
```
https://images.unsplash.com/photo-1511895426328-dc8714191300
```

---

## 💡 Dicas de Formatação HTML

### Texto em Negrito:
```html
<strong>Texto importante</strong>
```

### Texto em Itálico:
```html
<em>Texto em ênfase</em>
```

### Link:
```html
<a href="https://exemplo.com">Texto do link</a>
```

### Citação:
```html
<blockquote>
  <p>Texto da citação aqui...</p>
</blockquote>
```

### Quebra de Linha:
```html
<br/>
```

### Linha Horizontal:
```html
<hr/>
```

---

## 📊 Cálculo do Tempo de Leitura

- **150-200 palavras** = 1 minuto
- **300-400 palavras** = 2 minutos
- **450-600 palavras** = 3 minutos
- **600-800 palavras** = 4 minutos
- **800-1000 palavras** = 5 minutos

---

## 🔍 Gerador de Slug

Para criar um slug amigável:
1. Remova acentos e caracteres especiais
2. Substitua espaços por hífens
3. Use apenas letras minúsculas

**Exemplos:**
- "Novo Código Civil" → `novo-codigo-civil`
- "LGPD: O que mudou?" → `lgpd-o-que-mudou`
- "Direitos do Consumidor" → `direitos-do-consumidor` 