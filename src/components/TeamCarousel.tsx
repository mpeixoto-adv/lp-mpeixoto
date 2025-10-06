import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    name: "Dr. André Ricardo",
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
    name: "Dr. Ângelo Braz",
    position: "Advogado",
    image: angeloImg
  },
  {
    id: 6,
    name: "Dr. José Gonzalez",
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

export const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [membersToShow, setMembersToShow] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + membersToShow >= teamMembers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, teamMembers.length - membersToShow) : prevIndex - 1
    );
  };

  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + membersToShow);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(teamMembers.length / membersToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * membersToShow)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / membersToShow) === index
                  ? 'bg-accent'
                  : 'bg-accent/30 hover:bg-accent/50'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentIndex + membersToShow >= teamMembers.length}
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Team Members Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleMembers.map((member) => (
          <Card key={member.id} className="border-border hover:shadow-card-hover transition-all duration-300 group">
            <CardContent className="p-0">
              {/* Photo */}
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback para quando a imagem não existir
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTEwMCAyODBDMTAwIDI0Ny45MDkgMTI0LjkxIDIyMCAxNTUgMjIwSDE0NUMxNzUuMDkgMjIwIDIwMCAyNDcuOTA5IDIwMCAyODBWMzIwSDE0MFYzMjBIMTAwVjI4MFoiIGZpbGw9IiNEMUQ1REIiLz4KPHR4dCB4PSIxNTAiIHk9IjM1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjc3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Gb3RvIGRvIFByb2Zpc3Npb25hbDwvdHh0Pgo8L3N2Zz4K";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium">
                  {member.position}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-accent'
                  : 'bg-accent/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
