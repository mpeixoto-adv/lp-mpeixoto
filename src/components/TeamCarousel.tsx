import { useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Award, MapPin } from "lucide-react";
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
    name: "Dr. Marcelo Peixoto",
    position: "Sócio Fundador",
    education: "PUC-Rio",
    oab: "OAB/RJ 123.456",
    specialties: ["Direito Empresarial", "Direito Tributário"],
    image: marceloImg,
    description: "Mais de 20 anos liderando operações estratégicas, com foco em M&A, planejamento patrimonial e governança corporativa."
  },
  {
    id: 2,
    name: "Dra. Ana Paula Freire",
    position: "Sócia",
    education: "FGV Direito Rio",
    oab: "OAB/RJ 234.567",
    specialties: ["Direito Trabalhista", "Compliance"],
    image: anaPaulaImg,
    description: "Conduz negociações coletivas, programas de compliance e projetos de cultura organizacional voltados à prevenção de riscos trabalhistas."
  },
  {
    id: 3,
    name: "Dr. André Ricardo",
    position: "Head de Contencioso",
    education: "USP",
    oab: "OAB/SP 112.345",
    specialties: ["Contencioso Estratégico", "Arbitragem"],
    image: andreImg,
    description: "Responsável por litígios de alta complexidade, arbitragens nacionais e internacionais e sustentações orais em tribunais superiores."
  },
  {
    id: 4,
    name: "Dra. Bianca Casini",
    position: "Coordenadora Cível",
    education: "UFF",
    oab: "OAB/RJ 312.908",
    specialties: ["Direito Civil", "Contratos"],
    image: biancaImg,
    description: "Atua em contratos empresariais, responsabilidade civil e gestão de carteiras contenciosas com foco em acordos eficientes."
  },
  {
    id: 5,
    name: "Dr. Ângelo Braz",
    position: "Especialista em Imobiliário",
    education: "UERJ",
    oab: "OAB/RJ 278.654",
    specialties: ["Direito Imobiliário", "Infraestrutura"],
    image: angeloImg,
    description: "Consultoria em incorporações, regularização fundiária e estruturação de garantias para projetos de infraestrutura e real estate."
  },
  {
    id: 6,
    name: "Dr. José Gonzalez",
    position: "Consultor Tributário",
    education: "PUC-RS",
    oab: "OAB/RS 198.765",
    specialties: ["Tributário", "Aduaneiro"],
    image: joseImg,
    description: "Elabora planejamentos tributários, defesas em autos de infração e estratégias em operações de comércio exterior."
  },
  {
    id: 7,
    name: "Dra. Juliana Cerqueira",
    position: "Advogada Trabalhista",
    education: "IBMEC",
    oab: "OAB/RJ 403.221",
    specialties: ["Direito Trabalhista", "ESG"],
    image: julianaImg,
    description: "Foca em políticas de diversidade, ESG e prevenção de passivos, com experiência em auditorias e mediação de conflitos."
  },
  {
    id: 8,
    name: "Dra. Rafaela Barucke",
    position: "Advogada Empresarial",
    education: "UFF",
    oab: "OAB/RJ 287.990",
    specialties: ["Societário", "Contratos Comerciais"],
    image: rafaelaImg,
    description: "Auxilia empresas em reestruturações societárias, acordos de quotistas e implantação de políticas de governança."
  },
  {
    id: 9,
    name: "Dr. Roberto Souza",
    position: "Compliance e Investigação",
    education: "FGV",
    oab: "OAB/RJ 256.431",
    specialties: ["Compliance", "Investigações Internas"],
    image: robertoImg,
    description: "Conduz investigações internas, due diligence anticorrupção e programas de integridade com foco em resultados práticos."
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
