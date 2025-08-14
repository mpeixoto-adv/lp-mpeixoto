import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Users, Award, Building, Target, Shield, Briefcase, GraduationCap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  const values = [
    {
      icon: Shield,
      title: "Ética e Transparência",
      description: "Atuamos com absoluta transparência e ética profissional, mantendo nossos clientes sempre informados sobre o andamento de seus processos."
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Nossa abordagem é orientada para resultados, buscando sempre as melhores soluções jurídicas para cada caso específico."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único e recebe atenção individualizada, com estratégias jurídicas desenvolvidas especificamente para suas necessidades."
    },
    {
      icon: Clock,
      title: "Agilidade e Eficiência",
      description: "Comprometemo-nos com prazos e atuamos com agilidade, sem comprometer a qualidade técnica de nossos serviços."
    }
  ];

  const expertise = [
    {
      area: "Direito Trabalhista",
      description: "Atuação preventiva e contenciosa em questões trabalhistas, com foco na proteção dos direitos de empregados e empregadores.",
      experience: "500+ casos resolvidos"
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
      area: "Direito de Família",
      description: "Mediação e representação em divórcios, guarda, pensão alimentícia e sucessões.",
      experience: "300+ famílias atendidas"
    },
    {
      area: "Direito Consumerista",
      description: "Defesa dos direitos do consumidor e assessoria para empresas em compliance consumerista.",
      experience: "150+ ações vitoriosas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Início
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
              M. Peixoto Advogados Associados
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Há mais de 15 anos transformando desafios jurídicos em soluções estratégicas 
              para empresas e pessoas físicas no Rio de Janeiro.
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
                O escritório <strong className="text-primary">M. Peixoto Advogados Associados</strong> foi fundado com a missão de 
                oferecer serviços jurídicos de excelência, combinando experiência consolidada com uma 
                abordagem moderna e eficiente do Direito.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Com mais de <strong className="text-primary">15 anos de atuação</strong> no mercado jurídico, construímos nossa 
                reputação através de um trabalho sério, ético e comprometido com os resultados de nossos 
                clientes. Nossa equipe é formada por profissionais altamente qualificados, com especialização 
                nas principais áreas do Direito.
              </p>

              <p className="mb-6 leading-relaxed">
                Estrategicamente localizado no <strong className="text-primary">centro do Rio de Janeiro</strong>, nosso escritório 
                está próximo aos principais tribunais e órgãos públicos, facilitando o acompanhamento 
                processual e a resolução ágil das demandas de nossos clientes.
              </p>

              <p className="leading-relaxed">
                Acreditamos que o Direito deve ser um instrumento de transformação positiva na vida das 
                pessoas e das empresas. Por isso, atuamos de forma <strong className="text-primary">preventiva e contenciosa</strong>, 
                sempre buscando as melhores soluções jurídicas para cada situação específica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que norteiam nossa atuação e definem nossa identidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-border hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
                    No <strong className="text-primary">M. Peixoto Advogados Associados</strong>, entendemos que cada 
                    cliente possui necessidades únicas e merece atenção individualizada. Nossa abordagem 
                    combina conhecimento técnico aprofundado com uma compreensão genuína dos desafios 
                    enfrentados por nossos clientes.
                  </p>
                  
                  <p className="leading-relaxed">
                    Comprometemo-nos a oferecer não apenas serviços jurídicos, mas verdadeiras 
                    <strong className="text-primary"> parcerias estratégicas</strong>, onde o sucesso de nossos clientes é 
                    nossa principal motivação. Atuamos com transparência total, mantendo nossos clientes 
                    sempre informados sobre o andamento de seus casos.
                  </p>

                  <p className="leading-relaxed">
                    Nossa equipe trabalha de forma integrada, combinando diferentes especialidades para 
                    oferecer soluções completas e eficazes. Investimos continuamente em atualização 
                    profissional e tecnologia para garantir que nossos clientes recebam o que há de 
                    mais moderno em assessoria jurídica.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    onClick={handleContactClick}
                    size="lg"
                    className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold"
                  >
                    Entre em Contato
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border">
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

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-lg font-serif font-semibold text-primary">
                      Vantagens da Localização
                    </h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Próximo aos principais tribunais
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Fácil acesso por transporte público
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Região com ampla infraestrutura
                    </li>
                  </ul>
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
                onClick={handleContactClick}
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold"
              >
                Agende uma Consulta
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = "/services"}
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;