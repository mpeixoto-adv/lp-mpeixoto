import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface OfficeSlide {
  image: string;
  title: string;
  description: string;
}

const officeSlides: OfficeSlide[] = [
  {
    image: "/office/recepcao.jpeg",
    title: "Recepção",
    description: "Ambiente acolhedor para receber nossos clientes com conforto e discrição.",
  },
  {
    image: "/office/sala-reuniao.jpeg",
    title: "Sala de Reuniões",
    description: "Estrutura moderna equipada para encontros presenciais e virtuais.",
  },
  {
    image: "/office/area-trabalho.jpeg",
    title: "Área de Trabalho",
    description: "Equipe multidisciplinar atuando com tecnologia de ponta.",
  },
  {
    image: "/office/vista-centro.jpeg",
    title: "Vista do Centro",
    description: "Localização estratégica no coração do Rio de Janeiro.",
  },
  {
    image: "/office/mercado-11.jpeg",
    title: "Edifício Mercado 11",
    description: "Entrada principal em frente à praça com acesso fácil para clientes.",
  },  
  {
    image: "/office/corredor.jpeg",
    title: "Corredor das Salas Privativas",
    description: "Ambiente reservado que conecta nossas salas de reunião e atendimentos individuais, garantindo privacidade e conforto aos clientes.",
  },    
];

export const OfficeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = useMemo(() => officeSlides, []);
  const totalSlides = slides.length;

  useEffect(() => {
    if (!isAutoPlaying || totalSlides === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goTo = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
        <div className="relative h-80">
          <img
            src={currentSlide.image}
            alt={`${currentSlide.title} - ${currentSlide.description}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {String(currentIndex + 1).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}
            </p>
            <h4 className="mt-2 text-2xl font-serif font-bold">{currentSlide.title}</h4>
            <p className="mt-1 text-sm text-white/80">{currentSlide.description}</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={previous}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-primary shadow-md hover:bg-white"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-primary shadow-md hover:bg-white"
            aria-label="Próxima foto"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Ir para a foto ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className={`absolute top-4 right-4 h-2 w-2 rounded-full transition-colors duration-300 ${
              isAutoPlaying ? "bg-accent animate-pulse" : "bg-white/60"
            }`}
            title={isAutoPlaying ? "Pausar rotação automática" : "Ativar rotação automática"}
            aria-label={isAutoPlaying ? "Pausar carrossel" : "Retomar carrossel"}
          />
        </div>
      </div>
    </div>
  );
};

