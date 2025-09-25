import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Calculator, 
  Building2, 
  Home, 
  Gavel,
  ArrowRight,
  Scale 
} from "lucide-react";
import justiceImage from "@/assets/justice-scales.jpg";
import { useNavigate } from "react-router-dom";

// Para adicionar suas próprias imagens locais:
// 1. Adicione as imagens na pasta src/assets/
// 2. Importe as imagens: import trabalhistaImage from "@/assets/trabalhista.jpg";
// 3. Use a imagem importada: backgroundImage: trabalhistaImage

const services = [
  {
    icon: Scale,
    title: "Civil",
    description: "Atuação abrangente em responsabilidade civil, contratos, obrigações e negócios jurídicos, com soluções eficazes e personalizadas.",
    features: ["Responsabilidade civil e indenizações por danos materiais e morais", "Elaboração, revisão e rescisão de contratos", "Reparação por falhas em produtos, serviços e relações jurídicas", "Inventários, partilhas e planejamento sucessório",],
    backgroundImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070", // Legal/civil law image
    backgroundPosition: "center",
    link: "/direito-civil"
  },
  {
    icon: Briefcase,
    title: "Trabalhista",
    description: "Atuamos na esfera preventiva, com foco na eliminação ou mitigação dos riscos trabalhistas, garantindo tranquilidade e segurança para nossos clientes.",
    features: ["Ações trabalhistas", "Consultoria preventiva", "Negociações sindicais", "Compliance trabalhista"],
    backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070", // Workspace/office image
    backgroundPosition: "center",
    link: "/direito-trabalhista"
  },
  {
    icon: Calculator,
    title: "Tributário",
    description: "Uma assessoria tributária eficiente pode beneficiar empresas, mas também pessoas físicas, otimizando suas obrigações fiscais e financeiras.",
    features: ["Planejamento tributário", "Contestação de multas", "Recuperação de créditos", "Consultoria fiscal"],
    backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072", // Calculator/finance image
    backgroundPosition: "center",
    link: "/direito-tributario"
  },
  {
    icon: Gavel,
    title: "Penal",
    description: "Defesa técnica em investigações e processos criminais, atuando com sigilo, agilidade e estratégia.",
    features: [
      "Advocacia criminal preventiva",
      "Medidas cautelares e habeas corpus",
      "Acompanhamento em inquéritos",
      "Compliance e responsabilização penal"
    ],
    backgroundImage: "https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=2070", // Justice hammer image
    backgroundPosition: "center",
    link: "/direito-penal"
  },
  {
    icon: Building2,
    title: "Empresarial",
    description: "Assessoria jurídica completa para empresas, desde a constituição até operações complexas e reestruturações societárias.",
    features: ["Constituição de empresas", "Contratos empresariais", "Fusões e aquisições", "Compliance corporativo"],
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070", // Corporate building image
    backgroundPosition: "center",
    link: "/direito-empresarial"
  },
  {
    icon: Home,
    title: "Imobiliário",
    description: "Atuação em todas as questões relacionadas ao direito imobiliário, desde compra e venda até regularização fundiária.",
    features: ["Compra e venda", "Financiamentos", "Regularização", "Locações"],
    backgroundImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073", // Real estate image
    backgroundPosition: "center",
    link: "/direito-imobiliario"
  }
];

export const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (link: string) => {
    // Se a página existe, navega para ela, senão vai para /services
    if ([
      "/direito-civil",
      "/direito-tributario",
      "/direito-trabalhista",
      "/direito-empresarial",
      "/direito-imobiliario",
      "/direito-penal"
    ].includes(link)) {
      navigate(link);
    } else {
      navigate("/services");
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Nossas Especialidades
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Atuamos com excelência em diversas áreas do Direito, oferecendo soluções jurídicas eficazes e personalizadas para nossos clientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 border-border hover:border-accent/50 overflow-hidden relative"
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: service.backgroundPosition || 'center',
                  }}
                >
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 group-hover:from-background/90 group-hover:via-background/85 group-hover:to-background/90 transition-all duration-300" />
                </div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-accent/20 backdrop-blur-sm w-fit group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl font-serif text-primary drop-shadow-sm">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-md backdrop-blur-sm"
                      onClick={() => handleServiceClick(service.link)}
                    >
                      Saiba Mais
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="relative rounded-2xl overflow-hidden">
          <div 
            className="bg-cover bg-center p-12 md:p-16"
            style={{ backgroundImage: `url(${justiceImage})` }}
          >
            <div className="absolute inset-0 bg-primary/85"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
                Precisa de Assessoria Jurídica Especializada?
              </h3>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para oferecer soluções jurídicas eficazes e personalizadas para seu caso.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 text-lg shadow-accent-glow"
              >
                <a
                  href="https://wa.me/552120186198"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar com a M. Peixoto Advogados pelo WhatsApp"
                >
                  Fale Conosco Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
