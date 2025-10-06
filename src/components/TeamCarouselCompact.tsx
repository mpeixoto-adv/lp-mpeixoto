import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import marceloImg from "@/assets/team/marcelo-peixoto.jpg";
import anaPaulaImg from "@/assets/team/ana-paula-freire.jpg";
import andreImg from "@/assets/team/andre-ricardo.jpg";
import biancaImg from "@/assets/team/bianca-casini.jpg";
import angeloImg from "@/assets/team/angelo-maxwchelly-bezerra-braz-advogado.jpg";
import joseImg from "@/assets/team/jose-de-brasil-pereira-gonzalez-advogado.jpg";
import julianaImg from "@/assets/team/juliana-cerqueira-advogada.jpg";
import rafaelaImg from "@/assets/team/rafaela-barucke-siqueira-de-aguiar-advogada.jpg";
import robertoImg from "@/assets/team/roberto-souza-rodrigues-advogado.jpg";
import benitaImg from "@/assets/team/benita-guedes-associada.jpg";
import julioImg from "@/assets/team/julio-cesar-oliveira-godinho-associado.jpg";
import lucasImg from "@/assets/team/lucas-dunlop-fernandes-coachman-associado.jpg";
import raphaelImg from "@/assets/team/raphael-queiroz-socio-de-capital.jpg";
import victorImg from "@/assets/team/victor-bastos-associado.jpg";
import yanImg from "@/assets/team/yan-de-hollanda-cavalcanti-fonseca-associado.jpg";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Marcelo Peixoto",
    position: "Sócio Fundador",
    image: marceloImg
  },
  {
    id: 2,
    name: "Dra. Ana Paula Freire",
    position: "Advogada",
    image: anaPaulaImg
  },
  {
    id: 3,
    name: "Dr. Andre Ricardo",
    position: "Advogado",
    image: andreImg
  },
  {
    id: 4,
    name: "Dra. Bianca Casini",
    position: "Advogada",
    image: biancaImg
  },
  {
    id: 5,
    name: "Dr. Angelo Braz",
    position: "Advogado",
    image: angeloImg
  },
  {
    id: 6,
    name: "Dr. Jose Gonzalez",
    position: "Advogado",
    image: joseImg
  },
  {
    id: 7,
    name: "Dra. Juliana Cerqueira",
    position: "Advogada",
    image: julianaImg
  },
  {
    id: 8,
    name: "Dra. Rafaela Barucke",
    position: "Advogada",
    image: rafaelaImg
  },
  {
    id: 9,
    name: "Dr. Roberto Souza",
    position: "Advogado",
    image: robertoImg
  },
  {
    id: 10,
    name: "Dra. Benita Guedes",
    position: "Associada",
    image: benitaImg
  },
  {
    id: 11,
    name: "Dr. Julio Cesar Oliveira Godinho",
    position: "Associado",
    image: julioImg
  },
  {
    id: 12,
    name: "Dr. Lucas Dunlop Fernandes Coachman",
    position: "Associado",
    image: lucasImg
  },
  {
    id: 13,
    name: "Dr. Raphael Queiroz",
    position: "Sócio de Capital",
    image: raphaelImg
  },
  {
    id: 14,
    name: "Dr. Victor Bastos",
    position: "Associado",
    image: victorImg
  },
  {
    id: 15,
    name: "Dr. Yan de Hollanda Cavalcanti Fonseca",
    position: "Associado",
    image: yanImg
  }
];

export const TeamCarouselCompact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-card-hover">
        {/* Main Image Area */}
        <div className="relative h-80 bg-gradient-to-br from-primary/10 to-accent/10">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary shadow-md"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary shadow-md"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Member Photo */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  onError={(e) => {
                    // Fallback para quando a imagem não existir
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDgiIHI9IjIwIiBmaWxsPSIjRDFENURCIi8+CjxwYXRoIGQ9Ik0zMiA5NkMzMiA3OS45MDUgNDQuOTU0IDY2IDYxIDY2SDY3QzgzLjA0NiA2NiA5NiA3OS45MDUgOTYgOTZWMTA0SDMyVjk2WiIgZmlsbD0iI0QxRDVEQiIvPgo8L3N2Zz4K";
                  }}
                />
              </div>
              <h4 className="text-lg font-serif font-bold text-primary mb-1">
                {currentMember.name}
              </h4>
              <p className="text-sm text-accent font-medium">
                {currentMember.position}
              </p>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-primary w-6'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Auto-play indicator */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isAutoPlaying ? 'bg-accent animate-pulse' : 'bg-muted-foreground/50'
              }`}
              title={isAutoPlaying ? 'Auto-play ativo' : 'Auto-play pausado'}
            />
          </div>
        </div>
      </div>

      {/* Member Counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          {currentIndex + 1} de {teamMembers.length} profissionais
        </p>
      </div>
    </div>
  );
};
