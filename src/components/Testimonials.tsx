import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresária",
    content: "Excelente atendimento e resultados eficazes. A equipe M. Peixoto resolveu meu caso trabalhista com total profissionalismo e agilidade.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Contador",
    content: "Assessoria tributária impecável. Conseguiram reduzir significativamente nossos custos fiscais através de um planejamento tributário bem estruturado.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Consumidora",
    content: "Fui muito bem atendida em uma questão de direito do consumidor. Advogados competentes que realmente se preocupam com o cliente.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A confiança e satisfação de nossos clientes são o reflexo da qualidade e dedicação 
            que colocamos em cada caso.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card-hover transition-all duration-300 border-border bg-card/80 backdrop-blur-sm relative"
            >
              <CardContent className="p-8 text-center">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Quote className="h-6 w-6 text-accent" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="flex justify-center mb-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};