# Personalização de Imagens dos Serviços

## Imagens Atuais

Os cards de serviços atualmente usam imagens do Unsplash que são carregadas via URL. Cada serviço tem uma imagem temática:

- **Trabalhista**: Imagem de escritório/workspace
- **Tributário**: Imagem de calculadora/finanças
- **Consumerista**: Imagem de compras/consumidor
- **Empresarial**: Imagem de prédio corporativo
- **Imobiliário**: Imagem de imóveis
- **Familiar**: Imagem representando família

## Como Personalizar com Suas Próprias Imagens

### Opção 1: Usando Imagens Locais

1. **Adicione suas imagens na pasta `src/assets/`**
   ```
   src/assets/
   ├── trabalhista.jpg
   ├── tributario.jpg
   ├── consumerista.jpg
   ├── empresarial.jpg
   ├── imobiliario.jpg
   └── familiar.jpg
   ```

2. **No arquivo `src/components/Services.tsx`, importe as imagens:**
   ```typescript
   import trabalhistaImage from "@/assets/trabalhista.jpg";
   import tributarioImage from "@/assets/tributario.jpg";
   import consumeristaImage from "@/assets/consumerista.jpg";
   import empresarialImage from "@/assets/empresarial.jpg";
   import imobiliarioImage from "@/assets/imobiliario.jpg";
   import familiarImage from "@/assets/familiar.jpg";
   ```

3. **Atualize o array de serviços para usar as imagens importadas:**
   ```typescript
   const services = [
     {
       icon: Briefcase,
       title: "Trabalhista",
       // ... outras propriedades
       backgroundImage: trabalhistaImage, // Use a imagem importada
       backgroundPosition: "center"
     },
     // ... outros serviços
   ];
   ```

### Opção 2: Usando URLs Externas

Simplesmente substitua as URLs no array `services`:

```typescript
const services = [
  {
    icon: Briefcase,
    title: "Trabalhista",
    // ... outras propriedades
    backgroundImage: "https://sua-url-de-imagem.com/trabalhista.jpg",
    backgroundPosition: "center"
  },
  // ... outros serviços
];
```

## Ajustando o Posicionamento das Imagens

Você pode ajustar como a imagem é posicionada usando a propriedade `backgroundPosition`:

- `"center"` - Centraliza a imagem (padrão)
- `"top"` - Alinha ao topo
- `"bottom"` - Alinha à base
- `"left"` - Alinha à esquerda
- `"right"` - Alinha à direita
- `"center top"` - Centro horizontal, topo vertical
- `"center bottom"` - Centro horizontal, base vertical

## Ajustando a Opacidade do Overlay

Para tornar as imagens mais ou menos visíveis, você pode ajustar o overlay no componente. 

No arquivo `src/components/Services.tsx`, procure por esta linha:

```tsx
<div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 group-hover:from-background/90 group-hover:via-background/85 group-hover:to-background/90 transition-all duration-300" />
```

Ajuste os valores de opacidade:
- `/95` = 95% opaco (5% transparente) - menos visível a imagem
- `/90` = 90% opaco (10% transparente)
- `/85` = 85% opaco (15% transparente)
- `/80` = 80% opaco (20% transparente) - mais visível a imagem

## Recomendações para as Imagens

### Tamanho e Resolução
- **Resolução mínima**: 1920x1080 pixels
- **Formato**: JPG ou WebP para melhor performance
- **Tamanho do arquivo**: Idealmente menos de 500KB por imagem

### Estilo Visual
- Use imagens com cores neutras ou que combinem com a paleta do site
- Evite imagens muito detalhadas que possam distrair do texto
- Prefira imagens com áreas lisas onde o texto ficará sobreposto
- Considere usar imagens em preto e branco ou com baixa saturação

### Otimização
Para otimizar as imagens antes de usar:

1. **Comprima as imagens** usando ferramentas como:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Converta para WebP** para melhor performance:
   ```bash
   # Se tiver o cwebp instalado
   cwebp input.jpg -q 80 -o output.webp
   ```

## Exemplo Completo

```typescript
// src/components/Services.tsx
import trabalhistaImage from "@/assets/trabalhista.jpg";
// ... outras importações

const services = [
  {
    icon: Briefcase,
    title: "Trabalhista",
    description: "Atuamos na esfera preventiva...",
    features: ["Ações trabalhistas", "Consultoria preventiva", ...],
    backgroundImage: trabalhistaImage,
    backgroundPosition: "center top" // Ajustado para mostrar o topo da imagem
  },
  // ... outros serviços
];
```

## Suporte

Se precisar de ajuda para personalizar as imagens ou tiver dúvidas sobre o processo, entre em contato com a equipe de desenvolvimento. 