export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  readTime: string;
  slug: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Nova Lei de Proteção de Dados: O que sua empresa precisa saber",
    excerpt: "A LGPD trouxe mudanças significativas para o tratamento de dados pessoais. Entenda as principais obrigações e como se adequar.",
    content: `




      <h2>Introdução à LGPD</h2>
      <p>A Lei Geral de Proteção de Dados (LGPD) representa um marco regulatório importante no Brasil, estabelecendo regras claras sobre o tratamento de dados pessoais por empresas e organizações.</p>
      
      <h3>Principais Pontos</h3>
      <p>Entre as principais mudanças trazidas pela lei, destacam-se:</p>
      <ul>
        <li>Necessidade de consentimento explícito para coleta de dados</li>
        <li>Direito ao esquecimento e portabilidade dos dados</li>
        <li>Obrigatoriedade de notificação em caso de vazamento</li>
        <li>Multas que podem chegar a R$ 50 milhões</li>
      </ul>
      
      <h3>Como se Adequar</h3>
      <p>Para garantir conformidade com a LGPD, sua empresa deve:</p>
      <ol>
        <li>Mapear todos os dados pessoais coletados</li>
        <li>Revisar políticas de privacidade</li>
        <li>Implementar medidas de segurança adequadas</li>
        <li>Treinar colaboradores sobre as novas práticas</li>
      </ol>
      
      <h3>Conclusão</h3>
      <p>A adequação à LGPD não é apenas uma obrigação legal, mas uma oportunidade de construir relações mais transparentes e confiáveis com clientes e parceiros.</p>
    
    
    
    
    `,
    author: "Dr. Marcelo Peixoto",
    date: "2024-01-15",
    category: "Direito Empresarial",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    readTime: "5 min",
    slug: "lgpd-o-que-sua-empresa-precisa-saber"
  },
  {
    id: "2",
    title: "Direitos do Consumidor em Compras Online",
    excerpt: "Conheça seus direitos ao realizar compras pela internet e saiba como se proteger de fraudes e problemas.",
    content: `




      <h2>O Crescimento do E-commerce</h2>
      <p>Com o aumento expressivo das compras online, é fundamental conhecer os direitos garantidos pelo Código de Defesa do Consumidor.</p>
      
      <h3>Direito de Arrependimento</h3>
      <p>Um dos principais direitos do consumidor em compras online é o direito de arrependimento, previsto no artigo 49 do CDC:</p>
      <ul>
        <li>Prazo de 7 dias para desistir da compra</li>
        <li>Devolução integral do valor pago</li>
        <li>Sem necessidade de justificativa</li>
      </ul>
      
      <h3>Proteção Contra Fraudes</h3>
      <p>Medidas importantes para se proteger:</p>
      <ul>
        <li>Verificar a reputação da loja</li>
        <li>Guardar todos os comprovantes</li>
        <li>Preferir pagamentos rastreáveis</li>
        <li>Desconfiar de preços muito abaixo do mercado</li>
      </ul>
      
      <h3>Como Reclamar</h3>
      <p>Em caso de problemas, o consumidor pode:</p>
      <ol>
        <li>Contatar o SAC da empresa</li>
        <li>Registrar reclamação no Procon</li>
        <li>Utilizar plataformas como consumidor.gov.br</li>
        <li>Buscar orientação jurídica especializada</li>
      </ol>
    
    
    
    
    `,
    author: "Dra. Ana Paula Santos",
    date: "2024-01-10",
    category: "Direito do Consumidor",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    readTime: "4 min",
    slug: "direitos-consumidor-compras-online"
  },
  {
    id: "3",
    title: "Reforma Tributária: Impactos para Pequenas Empresas",
    excerpt: "Entenda as principais mudanças da reforma tributária e como elas afetarão o dia a dia das pequenas e médias empresas.",
    content: `




      <h2>A Nova Reforma Tributária</h2>
      <p>A reforma tributária aprovada promete simplificar o sistema de impostos brasileiro, mas traz desafios importantes para as empresas se adaptarem.</p>
      
      <h3>Principais Mudanças</h3>
      <ul>
        <li>Unificação de impostos em um IVA dual</li>
        <li>Período de transição de 10 anos</li>
        <li>Cashback para população de baixa renda</li>
        <li>Regime diferenciado para pequenas empresas</li>
      </ul>
      
      <h3>Impactos para PMEs</h3>
      <p>As pequenas e médias empresas devem se preparar para:</p>
      <ol>
        <li>Adaptação dos sistemas contábeis</li>
        <li>Revisão da precificação de produtos</li>
        <li>Treinamento das equipes fiscais</li>
        <li>Possível aumento inicial da carga tributária</li>
      </ol>
      
      <h3>Recomendações</h3>
      <p>Nossa equipe recomenda que as empresas comecem desde já a se preparar, buscando assessoria especializada para entender os impactos específicos em seu setor.</p>
    
    
    
    
    `,
    author: "Dr. Roberto Silva",
    date: "2024-01-05",
    category: "Direito Tributário",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072",
    readTime: "6 min",
    slug: "reforma-tributaria-impactos-pequenas-empresas"
  }
]; 