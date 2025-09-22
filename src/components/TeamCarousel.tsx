import { useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mauricioImg from "@/assets/team/mauricio-peixoto.jpg";
import anaImg from "@/assets/team/ana-silva.jpg";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  education: string;
  oab: string;
  specialties: string[];
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Mauricio Peixoto",
    position: "Sócio Fundador",
    education: "PUC-Rio",
    oab: "OAB/RJ 123.456",
    specialties: ["Direito Empresarial", "Direito Tributário"],
    image: mauricioImg,
    description: "Mais de 15 anos de experiência em direito empresarial e tributário, com especialização em operações de M&A e planejamento fiscal."
  },
  {
    id: 2,
    name: "Dra. Ana Silva Santos",
    position: "Sócia",
    education: "UERJ",
    oab: "OAB/RJ 234.567",
    specialties: ["Direito Trabalhista", "Direito Civil"],
    image: anaImg,
    description: "Especialista em direito trabalhista com vasta experiência em mediação e resolução de conflitos empresariais."
  },
  {
    id: 3,
    name: "Dr. Carlos Eduardo Lima",
    position: "Advogado Senior",
    education: "UFRJ",
    oab: "OAB/RJ 345.678",
    specialties: ["Direito Imobiliário", "Direito de Família"],
    image: mauricioImg, // Placeholder até ter imagem real
    description: "Especialização em transações imobiliárias e direito de família, com foco em mediação e conciliação."
  },
  {
    id: 4,
    name: "Dra. Beatriz Costa",
    position: "Advogada",
    education: "UFF",
    oab: "OAB/RJ 456.789",
    specialties: ["Direito Penal", "Direito Digital"],
    image: anaImg, // Placeholder até ter imagem real
    description: "Jovem talento especializada em direito penal empresarial e inovação jurídica, com foco em compliance e tecnologia."
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
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-serif font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium">
                    {member.position}
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 mr-2 text-accent" />
                    {member.education}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="h-4 w-4 mr-2 text-accent" />
                    {member.oab}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Especialidades:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
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
