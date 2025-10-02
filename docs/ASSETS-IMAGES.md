# 🖼️ Guia de Imagens e Assets - M. Peixoto Advogados

## 📋 Como Adicionar Novas Imagens da Equipe

### 🎯 **Problema Resolvido**
As imagens da equipe precisam ser **importadas como módulos** para funcionar corretamente em produção (Vercel).

### ❌ **Método Incorreto (não funciona em produção):**

// ❌ String literal - funciona apenas em desenvolvimento
image: "/src/assets/team/nova-imagem.jpg"


### ✅ **Método Correto (funciona em desenvolvimento e produção):**

// ✅ Import como módulo - funciona em produção
import novaImg from "@/assets/team/nova-imagem.jpg";
image: novaImg


---

## 📁 **Estrutura de Assets**


src/
├── assets/
│   ├── team/                    # Fotos da equipe
│   │   ├── marcelo-peixoto.jpg
│   │   ├── ana-paula-freire.jpg
│   │   ├── andre-ricardo.jpg
│   │   ├── bianca-casini.jpg
│   │   ├── angelo-maxwchelly-bezerra-braz-advogado.jpg
│   │   ├── jose-de-brasil-pereira-gonzalez-advogado.jpg
│   │   ├── juliana-cerqueira-advogada.jpg
│   │   ├── rafaela-barucke-siqueira-de-aguiar-advogada.jpg
│   │   ├── roberto-souza-rodrigues-advogado.jpg
│   │   └── [nova-imagem.jpg]
│   └── direito-tributario.jpg   # Outras imagens


---

## 🛠️ **Passo a Passo para Adicionar Nova Imagem da Equipe**

### **1. Preparar a Imagem**
- **Formato**: JPG ou WebP otimizado
- **Dimensões**: 300x400px (proporção 3:4) ou 400x400px (quadrado)
- **Peso**: Máximo 200KB
- **Nome**: sem espaços, usar hífens (ex: `carlos-lima.jpg`)

### **2. Colocar no Diretório**

# Salvar em:
/src/assets/team/nova-imagem.jpg


### **3. Importar nos Componentes**

#### **TeamCarouselCompact.tsx (Homepage)**

// 1. Adicionar import no topo do arquivo
import novaImg from "@/assets/team/nova-imagem.jpg";

// 2. Usar no array teamMembers
{
  id: 5,
  name: "Dr. João Silva",
  position: "Advogado",
  image: novaImg
}


#### **TeamCarousel.tsx (Página About)**

// 1. Adicionar import no topo do arquivo
import novaImg from "@/assets/team/nova-imagem.jpg";

// 2. Usar no array teamMembers
{
  id: 5,
  name: "Dr. João Silva",
  position: "Advogado",
  education: "UFRJ",
  oab: "OAB/RJ 567.890",
  specialties: ["Área de Atuação"],
  image: novaImg,
  description: "Descrição do profissional..."
}


---

## 🔍 **Exemplos Práticos**

### **Substituir Placeholder Existente:**

// Antes (placeholder)
{
  id: 3,
  name: "Dr. Carlos Eduardo Lima",
  position: "Advogado Senior",
  image: mauricioImg // Placeholder
}

// Depois (imagem própria)
import carlosImg from "@/assets/team/carlos-lima.jpg";

{
  id: 3,
  name: "Dr. Carlos Eduardo Lima", 
  position: "Advogado Senior",
  image: carlosImg // Imagem própria
}
```

### **Adicionar Novo Membro:**

// 1. Import
import beatrizImg from "@/assets/team/beatriz-costa.jpg";

// 2. Adicionar ao array
{
  id: 6,
  name: "Dra. Beatriz Costa",
  position: "Advogada Júnior",
  education: "UFF",
  oab: "OAB/RJ 789.123",
  specialties: ["Direito Digital", "Direito do Consumidor"],
  image: beatrizImg,
  description: "Especialista em direito digital com foco em inovação jurídica."
}


---

## ⚠️ **Problemas Comuns e Soluções**

### **Problema: Imagem não aparece em produção**
- **Causa**: Usando string literal em vez de import
- **Solução**: Sempre usar import de módulo

### **Problema: Erro de TypeScript**
- **Causa**: Tipo incorreto da imagem
- **Solução**: Verificar se o import está correto

### **Problema: Imagem com qualidade ruim**
- **Causa**: Imagem muito pesada ou dimensões incorretas
- **Solução**: Otimizar imagem conforme especificações

---

## 🚀 **Por que Funciona Assim?**

### **Desenvolvimento (npm run dev):**
- Vite serve arquivos diretamente de `/src/assets/`
- Strings funcionam temporariamente

### **Produção (Vercel/Build):**
- Vite processa apenas imports como módulos
- Gera URLs otimizadas: `/assets/imagem.a1b2c3d4.jpg`
- Strings `/src/assets/` retornam 404

### **Resultado:**
✅ Import funciona em **desenvolvimento** E **produção**  
❌ String funciona apenas em **desenvolvimento**

---

## 📝 **Checklist Final**

- [ ] Imagem salva em `/src/assets/team/`
- [ ] Import adicionado no componente
- [ ] Variável usada no array `teamMembers`
- [ ] Teste local funcionando
- [ ] Deploy funcionando em produção

---

## 🆘 **Precisa de Ajuda?**

Se tiver problemas:
1. Verificar se o import está correto
2. Conferir se o arquivo existe no caminho
3. Testar localmente antes do deploy
4. Verificar console do browser por erros

**Lembre-se**: Sempre usar **import de módulo**, nunca **string literal** para imagens da equipe!
