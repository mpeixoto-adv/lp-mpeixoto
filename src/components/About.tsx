import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Zap } from "lucide-react";
import { TeamCarouselCompact } from "@/components/TeamCarouselCompact";
import { OfficeCarousel } from "@/components/OfficeCarousel";

const stats = [
  {
    title: "Experiência Consolidada",
    description: "25+ Anos de Atuação",
    icon: Award,
  },
  {
    title: "Resultados Concretos",
    description: "R$ 270 mi+ em prejuízos evitados para nossos clientes",
    icon: Target,
  },
  {
    title: "Equipe Nacional",
    description: "30+ Advogados em todo o Brasil",
    icon: Users,
  },
  {
    title: "Tecnologia e Inovação",
    description: "IA + Jurimetria na gestão dos processos",
    icon: Zap,
  },
];

const values = [
  {
    title: "Experiência Consolidada",
    description: "Mais de 25 anos de atuação com uma equipe altamente qualificada e presença nacional."
  },
  {
    title: "Estrutura Estratégica",
    description: "Organização interna robusta, equipe multidisciplinar e processos bem estruturados que garantem qualidade e consistência em cada caso."
  },
  {
    title: "Atendimento Personalizado",
    description: "Cada cliente é atendido com atenção individual e estratégias jurídicas alinhadas às suas reais necessidades."
  },
  {
    title: "Inovação e Eficiência",
    description: "Dispomos das melhores ferramentas tecnológicas e suporte especializado, oferecendo soluções rápidas, seguras e integradas para cada demanda jurídica."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 uppercase tracking-wide">
            Sobre Nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Com mais de 25 anos de atuação e uma equipe composta por mais de 30 advogados, o M. Peixoto Advogados oferece soluções jurídicas seguras, ágeis e eficazes em todo o território nacional. Nosso compromisso é a excelência técnica e o atendimento dedicado a cada cliente.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-border hover:shadow-card-hover transition-all duration-300 bg-card/80">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-accent/10">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-xl font-serif font-semibold text-primary mb-2">
                    {stat.title}
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge className="bg-accent text-accent-foreground px-3 py-1">
                  {(index + 1).toString().padStart(2, '0')}
                </Badge>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Nossa Equipe
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Contamos com uma equipe de advogados experientes e especializados, comprometidos em oferecer 
              soluções jurídicas eficazes e personalizadas para cada cliente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso diferencial está na combinação de conhecimento técnico sólido, experiência prática 
              consolidada e dedicação total aos resultados.
            </p>
          </div>
          <div className="relative">
            <TeamCarouselCompact />
          </div>
        </div>

        {/* Office Environment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="lg:order-2">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Ambiente Profissional
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nosso escritório está localizado no coração do Centro do Rio de Janeiro, em uma região estratégica e de fácil acesso, a poucos minutos do metrô, do VLT e do Aeroporto Santos Dumont.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Contamos com uma estrutura moderna, diversas salas de reunião privativas e um ambiente pensado para proporcionar conforto, discrição e eficiência no atendimento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com vista privilegiada e espaços equipados com tecnologia de ponta, garantimos uma experiência profissional à altura das necessidades dos nossos clientes.
            </p>
          </div>
          <div className="lg:order-1 relative">
            <OfficeCarousel />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Nossa Missão
          </h3>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Oferecer serviços jurídicos de excelência, combinando conhecimento técnico, experiência prática e 
            comprometimento total com os resultados, sempre priorizando os interesses e objetivos de nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};
