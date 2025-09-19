import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: [
      "Rua do Mercado, 11 - 16º andar",
      "CEP: 20010-120",
      "Centro, Rio de Janeiro - RJ"
    ]
  },
  {
    icon: Phone,
    title: "Telefones",
    details: [
      "(21) 2018-6198 (WhatsApp)"
    ]
  },
  {
    icon: Mail,
    title: "E-mail",
    details: [
      "contato@mpeixotoadvogados.com.br"
    ]
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    details: [
      "Seg-Sex: 09:00 às 19:00"
    ]
  }
];

const practiceAreas = [
  "Área Familiar & Orfanológico",
  "Cível",
  "Consumerista",
  "Empresarial",
  "Imobiliário",
  "Trabalhista",
  "Tributário"
];

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/552120186198", "_blank");
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco e agende sua consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border shadow-card-hover bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-serif text-primary flex items-center">
                <MessageCircle className="h-6 w-6 text-accent mr-3" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nome *</label>
                  <Input placeholder="Seu nome completo" className="border-border focus:border-accent" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Telefone *</label>
                  <Input placeholder="(11) 99999-9999" className="border-border focus:border-accent" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">E-mail *</label>
                <Input type="email" placeholder="seu@email.com" className="border-border focus:border-accent" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Área de Interesse</label>
                <Select>
                  <SelectTrigger className="border-border focus:border-accent">
                    <SelectValue placeholder="Selecione uma área" />
                  </SelectTrigger>
                  <SelectContent>
                    {practiceAreas.map((area) => (
                      <SelectItem key={area} value={area.toLowerCase()}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Mensagem *</label>
                <Textarea 
                  placeholder="Descreva sua situação ou dúvida jurídica..."
                  className="min-h-[120px] border-border focus:border-accent resize-none"
                />
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold py-3"
                size="lg"
              >
                Enviar Mensagem
              </Button>

              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-3">Ou entre em contato diretamente via WhatsApp</p>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp: (21) 2018-6198
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-border hover:shadow-card-hover transition-all duration-300 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-full bg-accent/10">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-serif font-semibold text-primary mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => {
                            // Handle email specially to make it clickable and responsive
                            if (info.title === "E-mail" && detail.includes("@")) {
                              return (
                                <a
                                  key={idx}
                                  href={`mailto:${detail}`}
                                  className="text-muted-foreground hover:text-accent transition-colors break-all sm:break-words block"
                                >
                                  {detail}
                                </a>
                              );
                            }
                            
                            // Handle phone numbers to make them clickable
                            if (info.title === "Telefones" && (detail.includes("(21)") || detail.includes("21"))) {
                              const phoneNumber = detail.replace(/[^\d]/g, "");
                              const isWhatsApp = detail.includes("WhatsApp");
                              return (
                                <a
                                  key={idx}
                                  href={isWhatsApp ? `https://api.whatsapp.com/send?phone=55${phoneNumber}` : `tel:+55${phoneNumber}`}
                                  target={isWhatsApp ? "_blank" : undefined}
                                  rel={isWhatsApp ? "noopener noreferrer" : undefined}
                                  className="text-muted-foreground hover:text-accent transition-colors block"
                                >
                                  {detail}
                                </a>
                              );
                            }
                            
                            return (
                              <p key={idx} className="text-muted-foreground break-words">
                                {detail}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Map Placeholder */}
            <Card className="border-border shadow-card-hover bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="bg-gradient-primary p-6 text-center">
                <MapPin className="h-12 w-12 text-primary-foreground mx-auto mb-3" />
                <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-2">
                  Nossa Localização
                </h3>
                <p className="text-primary-foreground/90">
                  Centro do Rio de Janeiro, fácil acesso por transporte público
                </p>
                <Button 
                  variant="outline"
                  className="mt-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => window.open("https://maps.google.com/?q=Rua+do+Mercado,+11,+Centro,+Rio+de+Janeiro", "_blank")}
                >
                  Ver no Mapa
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
