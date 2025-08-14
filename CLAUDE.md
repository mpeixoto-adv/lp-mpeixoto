# CLAUDE.md

Este arquivo fornece orientações ao Claude Code (claude.ai/code) ao trabalhar com código neste repositório.

## Comandos de Desenvolvimento

### Tarefas Comuns de Desenvolvimento
- `npm run dev` - Inicia o servidor de desenvolvimento na porta 8080
- `npm run build` - Build para produção
- `npm run build:dev` - Build para modo de desenvolvimento
- `npm run lint` - Executa o linter ESLint
- `npm run preview` - Visualiza o build de produção localmente

### Instalação de Dependências
- `npm i` - Instala todas as dependências

## Visão Geral da Arquitetura

Este é um site de escritório de advocacia baseado em React, construído com tecnologias web modernas e implantado através do Lovable.

### Stack Tecnológica
- **Framework**: React 18 com TypeScript
- **Ferramenta de Build**: Vite (SWC para compilação rápida)
- **Estilização**: Tailwind CSS com sistema de design personalizado
- **Componentes UI**: shadcn/ui (primitivos Radix UI)
- **Roteamento**: React Router DOM v6
- **Gerenciamento de Estado**: TanStack Query para estado do servidor
- **Formulários**: React Hook Form com validação Zod

### Estrutura do Projeto
```
src/
├── components/           # Componentes UI reutilizáveis
│   ├── ui/              # Componentes shadcn/ui
│   ├── Navigation.tsx   # Navegação principal
│   ├── Hero.tsx         # Hero da página inicial
│   ├── Services.tsx     # Seção de serviços
│   ├── About.tsx        # Seção sobre
│   ├── Contact.tsx      # Formulário de contato
│   └── Footer.tsx       # Rodapé do site
├── pages/               # Componentes de rota
│   ├── Index.tsx        # Página inicial (landing page)
│   ├── Services.tsx     # Página de serviços
│   ├── About.tsx        # Página sobre
│   ├── DireitoCivil.tsx # Página especializada em Direito Civil
│   └── NotFound.tsx     # Página 404
├── hooks/               # Custom React hooks
├── lib/                 # Funções utilitárias
└── assets/              # Assets estáticos (imagens)
```

### Roteamento
- Usa React Router com estrutura de URL limpa
- Todas as rotas personalizadas devem ser adicionadas acima da rota catch-all "*" no App.tsx
- Navegação suporta scroll suave para seções na homepage

### Sistema de Estilização
- Usa propriedades CSS customizadas para temas
- Configuração Tailwind estendida com cores, sombras e animações personalizadas
- Design responsivo com abordagem mobile-first
- Suporte a dark mode configurado via estratégia baseada em classe

### Arquitetura de Componentes
- Homepage (Index.tsx) é um layout de página única com múltiplas seções
- Páginas individuais para conteúdo especializado (Services, About, etc.)
- Componentes reutilizáveis no diretório `/components`
- Primitivos UI do shadcn/ui em `/components/ui`

### Alias de Caminhos
- `@/` mapeia para `./src/` para imports limpos
- Configurado tanto no tsconfig.json quanto no vite.config.ts

### Notas de Desenvolvimento
- TypeScript configurado com settings relaxados (sem strict null checks, permite implicit any)
- Servidor dev Vite roda na porta 8080 com suporte IPv6
- Integração Lovable para deployments automatizados
- Component tagging habilitado no modo desenvolvimento para editor Lovable