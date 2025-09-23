import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scale, 
  Award, 
  Building, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { TeamCarousel } from "@/components/TeamCarousel";
import { Link, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contato");
  };

  const expertise = [
    {
      area: "Direito Trabalhista",
      description: "Atuação preventiva e contenciosa em questões trabalhistas, com foco na proteção dos direitos de empregados e empregadores.",
      experience: "R$ 270 mi+ em prejuízos evitados"
    },
    {
      area: "Direito Tributário",
      description: "Planejamento tributário estratégico e defesa em processos administrativos e judiciais fiscais.",
      experience: "R$ 10M+ recuperados"
    },
    {
      area: "Direito Empresarial",
      description: "Assessoria completa para empresas, desde a constituição até operações complexas de M&A.",
      experience: "100+ empresas assessoradas"
    },
    {
      area: "Direito Imobiliário",
      description: "Expertise em transações imobiliárias, regularização fundiária e questões condominiais.",
      experience: "200+ contratos elaborados"
    },
    {
      area: "Direito Civil",
      description: "Gestão de contratos, responsabilidade civil e disputas patrimoniais com atuação estratégica em todas as fases processuais.",
      experience: "400+ demandas solucionadas"
    },
    {
      area: "Direito Penal",
      description: "Defesa técnica em investigações e processos criminais, com atuação ágil em medidas cautelares e compliance penal.",
      experience: "80+ casos acompanhados"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      <div className="pt-[108px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary to-primary-light text-primary-foreground py-24">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowRight className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Link>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
                M. Peixoto Advogados Associados
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Há mais de 25 anos oferecendo soluções jurídicas seguras, estratégicas e inovadoras em todo o Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  Nossa História
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto" />
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  O <strong className="text-primary">M. Peixoto Advogados Associados</strong> nasceu com a missão de entregar soluções jurídicas de excelência, unindo tradição, inovação e compromisso com resultados. Com mais de 25 anos de atuação no mercado, consolidamos uma reputação de confiança, seriedade e eficiência, sempre pautada na ética e na proximidade com nossos clientes.
                </p>

                <p className="mb-6 leading-relaxed">
                  Nossa equipe é formada por <strong className="text-primary">mais de 30 advogados altamente qualificados</strong>, preparados para atuar nas principais áreas do Direito, com visão estratégica e foco em soluções eficazes. Trabalhamos de forma preventiva e contenciosa, assegurando tanto a redução de riscos quanto a defesa firme dos interesses de nossos clientes.
                </p>

                <p className="mb-6 leading-relaxed">
                  Localizado estrategicamente no <strong className="text-primary">centro do Rio de Janeiro</strong>, próximo aos principais tribunais e órgãos públicos, nosso escritório garante agilidade no acompanhamento processual e nas interações institucionais. Essa posição privilegiada, somada ao uso de tecnologia de ponta, jurimetria e inteligência artificial, nos permite oferecer um serviço moderno, preciso e em sintonia com as necessidades de um mercado em constante transformação.
                </p>

                <p className="leading-relaxed">
                  Mais do que representar juridicamente, buscamos ser <strong className="text-primary">parceiros estratégicos</strong> de nossos clientes, sejam empresas ou pessoas físicas, oferecendo segurança, previsibilidade e soluções que fazem a diferença.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Expertise */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Nossa Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Áreas de atuação com experiência comprovada e resultados consistentes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {expertise.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-serif font-semibold text-primary">
                        {item.area}
                      </h3>
                      <Scale className="h-5 w-5 text-accent flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm text-accent font-medium">
                      <Award className="h-4 w-4 mr-2" />
                      {item.experience}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Nossa Equipe
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Profissionais experientes, comprometidos com a excelência e o sucesso de nossos clientes
              </p>
              <div className="w-24 h-1 bg-accent mx-auto mt-6" />
            </div>

            <TeamCarousel />
          </div>
        </section>

        {/* Nosso Compromisso */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border shadow-card-hover">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                      Nosso Compromisso
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto" />
                  </div>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="leading-relaxed">
                      Na <strong className="text-primary">M. Peixoto Advogados Associados</strong>, cada cliente é único. Nosso compromisso é oferecer não apenas soluções jurídicas, mas confiança, clareza e dedicação em cada etapa do caminho.
                    </p>

                    <p className="leading-relaxed">
                      Atuamos com ética, transparência e responsabilidade, construindo relações sólidas e entregando resultados que fazem a diferença na vida de pessoas e empresas.
                    </p>
                  </div>

                  <div className="mt-8 text-center">
                    <Button 
                      asChild
                      size="lg"
                      className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold"
                    >
                      <a
                        href="https://wa.me/552120186198"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Conversar com a M. Peixoto Advogados pelo WhatsApp"
                      >
                        Entre em Contato
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Localização */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  Nossa Localização
                </h2>
                <p className="text-xl text-muted-foreground">
                  Estrategicamente posicionado no coração jurídico do Rio de Janeiro
                </p>
              </div>

              <div className="flex justify-center">
                <Card className="border-border w-full max-w-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Building className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-lg font-serif font-semibold text-primary">
                        Escritório Principal
                      </h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Rua do Mercado, 11 - 16º andar</p>
                      <p>Centro, Rio de Janeiro - RJ</p>
                      <p>CEP: 20010-120</p>
                    </div>
                  </CardContent>
                </Card>

              </div>

              <div className="mt-8 text-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://maps.google.com/?q=Rua+do+Mercado,+11,+Centro,+Rio+de+Janeiro", "_blank")}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Ver no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
                Precisa de Assessoria Jurídica?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Nossa equipe está pronta para analisar seu caso e oferecer as melhores 
                soluções jurídicas para suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold"
                >
                  <a
                    href="https://wa.me/552120186198"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar consulta pelo WhatsApp"
                  >
                    Agende uma Consulta
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => (window.location.href = "/services")}
                  className="border-2 border-primary-foreground/70 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary"
                >
                  Conheça Nossos Serviços
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
