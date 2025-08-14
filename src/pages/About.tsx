import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, GraduationCap, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  const team = [
    {
      name: "Dr. Marcelo Peixoto",
      role: "Sócio Fundador",
      specializations: ["Direito Trabalhista", "Direito Empresarial"],
      experience: "15+ anos de experiência",
      description: "Especialista em direito trabalhista e empresarial, com vasta experiência em consultoria preventiva e contenciosa."
    },
    {
      name: "Dra. Ana Rodrigues",
      role: "Sócia",
      specializations: ["Direito Tributário", "Direito Consumerista"],
      experience: "12+ anos de experiência",
      description: "Especialista em planejamento tributário e defesa do consumidor, com foco em soluções estratégicas para empresas."
    },
    {
      name: "Dr. Carlos Silva",
      role: "Advogado Senior",
      specializations: ["Direito Imobiliário", "Direito de Família"],
      experience: "10+ anos de experiência",
      description: "Atuação especializada em questões imobiliárias e familiares, com histórico de excelência em mediações e acordos."
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Fundação do Escritório",
      description: "Início das atividades com foco em direito trabalhista e empresarial."
    },
    {
      year: "2012",
      title: "Expansão de Serviços",
      description: "Incorporação de novas áreas de atuação: tributário e consumerista."
    },
    {
      year: "2015",
      title: "Certificação de Qualidade",
      description: "Reconhecimento como um dos top 10 escritórios de advocacia do Rio de Janeiro."
    },
    {
      year: "2018",
      title: "500 Casos Resolvidos",
      description: "Marco de 500 casos resolvidos com sucesso em diversas áreas do direito."
    },
    {
      year: "2024",
      title: "15 Anos de Excelência",
      description: "Consolidação como referência em serviços jurídicos especializados."
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
              Sobre Nós
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Conheça nossa história, equipe e compromisso com a excelência jurídica.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
            Nossa Trajetória
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <Card className="flex-1 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-accent mr-3">{milestone.year}</span>
                        <h3 className="text-xl font-serif font-semibold text-primary">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-card-hover transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <User className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <div className="space-y-2 mb-4">
                    {member.specializations.map((spec, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    {member.experience}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Location */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              Nossa Localização
            </h2>
            <Card className="border-border shadow-card-hover">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  Centro do Rio de Janeiro
                </h3>
                <div className="text-muted-foreground space-y-2 mb-6">
                  <p>Rua do Mercado, 11 - 16º andar</p>
                  <p>CEP: 20010-120</p>
                  <p>Centro, Rio de Janeiro - RJ</p>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Estrategicamente localizado no centro histórico do Rio de Janeiro, 
                  nosso escritório oferece fácil acesso por transporte público e proximidade 
                  aos principais tribunais e órgãos governamentais.
                </p>
                <Button 
                  onClick={() => window.open("https://maps.google.com/?q=Rua+do+Mercado,+11,+Centro,+Rio+de+Janeiro", "_blank")}
                  className="bg-primary hover:bg-primary-light text-primary-foreground"
                >
                  Ver no Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;