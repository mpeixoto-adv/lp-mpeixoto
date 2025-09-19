import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  const serviceDetails = [
    {
      title: "Direito Trabalhista",
      description: "Atuação completa em questões trabalhistas com foco preventivo e contencioso.",
      details: [
        "Elaboração e revisão de contratos de trabalho",
        "Consultoria preventiva em compliance trabalhista",
        "Defesa em ações trabalhistas",
        "Negociações sindicais e acordos coletivos",
        "Auditoria de folha de pagamento",
        "Treinamentos em legislação trabalhista"
      ]
    },
    {
      title: "Direito Tributário",
      description: "Assessoria especializada para otimização fiscal e planejamento tributário.",
      details: [
        "Planejamento tributário estratégico",
        "Defesa em processos administrativos fiscais",
        "Recuperação de créditos tributários",
        "Consultoria em reorganização societária",
        "Análise de benefícios fiscais",
        "Compliance tributário"
      ]
    },
    {
      title: "Direito Consumerista",
      description: "Proteção efetiva dos direitos do consumidor em todas as esferas.",
      details: [
        "Defesa contra práticas abusivas",
        "Ações de indenização por danos morais e materiais",
        "Revisão de contratos de consumo",
        "Negociação com fornecedores",
        "Ações coletivas de consumidores",
        "Consultoria preventiva para empresas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Início
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Nossos Serviços Jurídicos
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Soluções jurídicas especializadas com mais de 15 anos de experiência no mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-accent/10">
                  <Scale className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-accent/10">
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-fWoreground">Casos Resolvidos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-accent/10">
                  <Award className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Sucesso em todo territorio nacional.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {serviceDetails.map((service, index) => (
              <Card key={index} className="border-border shadow-card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Services Component */}
      <Services />

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Precisa de Consultoria Jurídica?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar com suas questões jurídicas.
          </p>
          <Button 
            onClick={handleContactClick}
            size="lg"
            className="bg-accent hover:bg-accent-dark text-accent-foreground"
          >
            Fale Conosco
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;