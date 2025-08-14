import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const DireitoCivil = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Direito Civil
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Nossa atuação abrange uma ampla variedade de relações e negócios jurídicos relacionados ao Direito Civil. 
                Isso inclui responsabilidade civil, adimplemento e inadimplemento de obrigações contratuais, validade e 
                invalidade de negócios jurídicos, elaboração e revisão de contratos, direitos e danos materiais e imateriais.
              </p>
              <Button 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary-light text-primary-foreground"
              >
                Entre em contato
              </Button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Responsabilidade Civil */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                    Responsabilidade Civil
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Em nossa atuação abrangente em Direito Civil, um dos pilares essenciais é a responsabilidade civil. 
                    Estamos comprometidos em ajudar nossos clientes a entender e lidar com questões que envolvem 
                    responsabilidade por atos e danos. Isso abrange desde acidentes de trânsito até responsabilidade 
                    contratual e extracontratual. Estamos preparados para representar seus interesses de maneira eficaz, 
                    seja na negociação de acordos ou no contencioso, com o objetivo de garantir que seus direitos estejam protegidos.
                  </p>
                </CardContent>
              </Card>

              {/* Obrigações Contratuais */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                    Obrigações Contratuais
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    No contexto do Direito Civil, lidamos com adimplemento (cumprimento) e inadimplemento (descumprimento) 
                    de obrigações contratuais. Nossa equipe especializada está pronta para orientá-lo em todas as etapas 
                    de transações contratuais. Seja na elaboração, revisão ou execução de contratos, trabalhamos para 
                    garantir que seus acordos sejam justos e eficazes. Quando surgem disputas contratuais, oferecemos 
                    representação sólida para proteger seus interesses e buscar resoluções justas.
                  </p>
                </CardContent>
              </Card>

              {/* Validade de Negócios Jurídicos */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                    Validade e Invalidade de Negócios Jurídicos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A questão da validade e invalidade de negócios jurídicos é fundamental no Direito Civil. 
                    Nossa experiência nos permite avaliar meticulosamente a validade de transações e contratos, 
                    identificando potenciais problemas e oferecendo soluções eficazes. Se você está enfrentando 
                    questões relacionadas à validade de um negócio jurídico, nossa equipe está preparada para 
                    fornecer orientação especializada e representação legal quando necessário.
                  </p>
                </CardContent>
              </Card>

              {/* Elaboração e Revisão de Contratos */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                    Elaboração e Revisão de Contratos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A elaboração e revisão de contratos são serviços essenciais que oferecemos no âmbito do Direito Civil. 
                    Reconhecemos que contratos bem redigidos são a base de relacionamentos comerciais e pessoais sólidos. 
                    Nossa equipe trabalha em estreita colaboração com nossos clientes para criar acordos que atendam às 
                    suas necessidades específicas, garantindo que os termos sejam claros, justos e legalmente sólidos.
                  </p>
                </CardContent>
              </Card>

              {/* Direitos e Danos */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                    Direitos e Danos Materiais e Imateriais
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nosso comprometimento com a proteção dos direitos de nossos clientes estende-se a questões relacionadas 
                    a danos materiais e imateriais. Entendemos que danos podem afetar não apenas aspectos financeiros, 
                    mas também a reputação e o bem-estar emocional. Nossa abordagem abrangente nos permite avaliar todos 
                    os aspectos dos danos sofridos e buscar a compensação adequada. Trabalhamos incansavelmente para 
                    garantir que nossos clientes recebam a reparação justa que merecem.
                  </p>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center pt-8">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                      Precisa de Assessoria Jurídica em Direito Civil?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Entre em contato conosco para uma consulta personalizada e descubra como podemos ajudá-lo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        onClick={handleContactClick}
                        className="bg-primary hover:bg-primary-light text-primary-foreground"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Entre em Contato
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        (21) 2533-1459
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DireitoCivil;