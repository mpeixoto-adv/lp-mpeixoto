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
        {/* Centered content wrapper */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="max-w-4xl w-full text-center">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
                Abordagem{" "}
                <span className="text-accent">Especializada</span>,{" "}
                <span className="text-accent">Advogados</span>{" "}
                <span className="text-primary-foreground">Dedicados</span>
              </h1>
              <div className="flex justify-center">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
                  <span className="block sm:inline">
                    Com mais de 25 anos de trajetória, o M. Peixoto Advogados Associados se orgulha de oferecer um serviço jurídico sólido, atento às necessidades reais de cada cliente, com respostas rápidas e estratégias eficientes.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mb-8 sm:mb-12">
              <Button 
                onClick={onContactClick}
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-accent-glow w-full sm:w-auto max-w-xs"
              >
                Consulta Gratuita
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-xs transition-all duration-300"
              >
                Veja Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">25+</div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Casos Resolvidos</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">98%</div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Taxa de Sucesso em todo territorio nacional</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">24h</div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Resposta Rápida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
