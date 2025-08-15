import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Zap } from "lucide-react";
import { TeamCarouselCompact } from "@/components/TeamCarouselCompact";

const stats = [
  { number: "15+", label: "Anos de Experiência", icon: Award },
  { number: "500+", label: "Casos Resolvidos", icon: Target },
  { number: "50+", label: "Parceiros", icon: Users },
  { number: "TOP 10", label: "Escritório de Advocacia", icon: Zap }
];

const values = [
  {
    title: "Experiência Consolidada",
    description: "Mais de 15 anos de atuação no mercado jurídico com profissionais altamente qualificados."
  },
  {
    title: "Agilidade e Eficiência",
    description: "Processos otimizados para garantir respostas rápidas e soluções efetivas."
  },
  {
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção dedicada e estratégias jurídicas customizadas."
  },
  {
    title: "Ética e Transparência",
    description: "Atuação pautada nos mais altos padrões éticos e transparência total com nossos clientes."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Sobre o M. Peixoto Advogados
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            O escritório M. Peixoto Advogados Associados conta com profissionais de experiência consolidada há mais de 15 anos. 
            Com atividades jurídicas preventivas e contenciosas voltadas para empresas e pessoas físicas, atuamos com agilidade e eficiência. 
            Nosso propósito é solucionar rapidamente os problemas e questionamentos trazidos pelos nossos clientes.
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
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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
              Nosso escritório oferece um ambiente moderno e acolhedor, projetado para proporcionar 
              conforto e confidencialidade durante as consultas e reuniões.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Equipado com tecnologia de ponta e espaços adequados para diferentes tipos de atendimento, 
              garantindo sempre a melhor experiência para nossos clientes.
            </p>
          </div>
          <div className="lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <div className="bg-gradient-to-br from-secondary/20 to-accent/10 h-80 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-primary">Nosso Escritório</p>
                  <p className="text-sm text-muted-foreground">Ambiente profissional</p>
                </div>
              </div>
            </div>
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