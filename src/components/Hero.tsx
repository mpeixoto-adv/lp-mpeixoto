import { Button } from "@/components/ui/button";
import { Scale, Users, Award, Clock } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source 
            src="https://mpeixotoadvogados.com.br/wp-content/uploads/2023/11/video_hero.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight break-words">
              Abordagem{" "}
              <span className="text-accent">Especializada</span>,<br className="hidden sm:block" />
              <span className="text-accent">Advogados</span>{" "}
              <span className="text-primary-foreground">Dedicados</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              O escritório M. Peixoto Advogados Associados conta com profissionais de experiência consolidada há mais de 15 anos. 
              Atuamos com agilidade e eficiência para solucionar rapidamente os problemas dos nossos clientes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={onContactClick}
              size="lg"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 text-lg shadow-accent-glow"
            >
              Consulta Gratuita
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              Veja Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Scale className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">15+</div>
              <div className="text-primary-foreground/80 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">500+</div>
              <div className="text-primary-foreground/80 text-sm">Casos Resolvidos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">98%</div>
              <div className="text-primary-foreground/80 text-sm">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">24h</div>
              <div className="text-primary-foreground/80 text-sm">Resposta Rápida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};