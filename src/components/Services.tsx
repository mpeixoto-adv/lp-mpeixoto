import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Calculator, 
  ShoppingCart, 
  Building2, 
  Home, 
  Heart,
  ArrowRight 
} from "lucide-react";
import justiceImage from "@/assets/justice-scales.jpg";

const services = [
  {
    icon: Briefcase,
    title: "Trabalhista",
    description: "Atuamos na esfera preventiva, com foco na eliminação ou mitigação dos riscos trabalhistas, garantindo tranquilidade e segurança para nossos clientes.",
    features: ["Ações trabalhistas", "Consultoria preventiva", "Negociações sindicais", "Compliance trabalhista"]
  },
  {
    icon: Calculator,
    title: "Tributário",
    description: "Uma assessoria tributária eficiente pode beneficiar empresas, mas também pessoas físicas, otimizando suas obrigações fiscais e financeiras.",
    features: ["Planejamento tributário", "Contestação de multas", "Recuperação de créditos", "Consultoria fiscal"]
  },
  {
    icon: ShoppingCart,
    title: "Consumerista",
    description: "Proteção dos direitos do consumidor com atuação especializada em relações de consumo e defesa contra práticas abusivas.",
    features: ["Defesa do consumidor", "Ações indenizatórias", "Revisão de contratos", "Práticas abusivas"]
  },
  {
    icon: Building2,
    title: "Empresarial",
    description: "Assessoria jurídica completa para empresas, desde a constituição até operações complexas e reestruturações societárias.",
    features: ["Constituição de empresas", "Contratos empresariais", "Fusões e aquisições", "Compliance corporativo"]
  },
  {
    icon: Home,
    title: "Imobiliário",
    description: "Atuação em todas as questões relacionadas ao direito imobiliário, desde compra e venda até regularização fundiária.",
    features: ["Compra e venda", "Financiamentos", "Regularização", "Locações"]
  },
  {
    icon: Heart,
    title: "Familiar",
    description: "O Direito de Família aborda questões legais relacionadas a casamento, divórcio, guarda de filhos, pensão alimentícia e outros aspectos das relações familiares.",
    features: ["Divórcio e separação", "Guarda de filhos", "Pensão alimentícia", "Acordos matrimoniais"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados com foco na excelência e resultados efetivos para nossos clientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 border-border hover:border-accent/50 bg-card/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 w-fit group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <IconComponent className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-serif text-primary">{service.title}</CardTitle>
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
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-md"
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
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
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 text-lg shadow-accent-glow"
              >
                Fale Conosco Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};