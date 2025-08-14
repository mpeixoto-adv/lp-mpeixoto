import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Scale, FileText, Handshake, Shield } from "lucide-react";
import justiceScalesImage from "@/assets/justice-scales.jpg";

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
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80">
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-accent/20 backdrop-blur-sm">
                  <Scale className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Direito Civil
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Com mais de 15 anos de experiência consolidada, nossa atuação em Direito Civil abrange uma ampla 
                variedade de relações jurídicas e negócios, oferecendo soluções eficazes e personalizadas. Atuamos 
                em responsabilidade civil, obrigações contratuais, elaboração de contratos, danos materiais e morais, 
                sempre com foco na agilidade e eficiência que caracteriza nosso escritório.
              </p>
              <Button 
                onClick={handleContactClick}
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 text-lg shadow-accent-glow"
              >
                Entre em contato
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section with Image */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                    Direito Civil: Protegendo Seus Interesses
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Nossa atuação abrange uma ampla variedade de relações e negócios jurídicos relacionados ao Direito Civil. 
                    Isso inclui responsabilidade civil, adimplemento e 
                    inadimplemento de obrigações contratuais, validade e invalidade de negócios jurídicos, elaboração e revisão de contratos, direitos e danos materiais e imateriais.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Proteção de Direitos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Contratos Sólidos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Handshake className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Negociações Eficazes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Scale className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Justiça Garantida</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-card-hover">
                    <img 
                      src={justiceScalesImage} 
                      alt="Balança da Justiça - Direito Civil" 
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-lg font-semibold mb-1">Consultoria Jurídica</p>
                        <p className="text-sm opacity-90">Especialistas em Direito Civil</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Uma Visão Detalhada */}
              <Card className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                      <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      Uma Visão Detalhada
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Em nossa atuação abrangente em Direito Civil, um dos pilares essenciais é a responsabilidade civil.
                    Estamos comprometidos em ajudar nossos clientes a entender e lidar com questões que envolvem responsabilidade por atos e danos.
                    Isso abrange desde acidentes de trânsito até responsabilidade contratual e extracontratual.
                    Estamos preparados para representar seus interesses de maneira eficaz, seja na negociação de acordos ou no contencioso, com o objetivo de garantir que seus direitos estejam protegidos.
                  </p>
                </CardContent>
              </Card>

              {/* Obrigações Contratuais */}
              <Card className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                      <Handshake className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      Obrigações Contratuais
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Atuamos em todas as fases das relações contratuais, desde a elaboração até a execução e 
                    eventual resolução de conflitos. Nossa equipe especializada oferece assessoria preventiva 
                    para evitar inadimplementos e disputas, além de representação eficaz quando necessário. 
                    Com processos otimizados e resposta ágil, garantimos que seus contratos sejam justos, 
                    seguros e adequados às suas necessidades específicas.
                  </p>
                </CardContent>
              </Card>

              {/* Validade de Negócios Jurídicos */}
              <Card className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                      <Scale className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      Validade e Invalidade de Negócios Jurídicos
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Avaliamos criteriosamente a validade de negócios jurídicos, identificando vícios de 
                    consentimento, defeitos na forma e outros aspectos que possam comprometer a eficácia dos 
                    atos. Nossa análise técnica rigorosa permite identificar problemas potenciais e propor 
                    soluções preventivas ou corretivas. Quando necessário, atuamos na anulação ou declaração 
                    de nulidade de negócios jurídicos, sempre priorizando os interesses de nossos clientes.
                  </p>
                </CardContent>
              </Card>

              {/* Elaboração e Revisão de Contratos */}
              <Card className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      Elaboração e Revisão de Contratos
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Elaboramos e revisamos contratos com precisão técnica e atenção aos detalhes que fazem a 
                    diferença. Nosso processo colaborativo garante que cada contrato seja customizado para suas 
                    necessidades específicas, com cláusulas claras e equilibradas. Seja para contratos de prestação 
                    de serviços, compra e venda, locação ou outros negócios jurídicos, nossa expertise assegura 
                    documentos sólidos que protegem seus interesses e minimizam riscos futuros.
                  </p>
                </CardContent>
              </Card>

              {/* Direitos e Danos */}
              <Card className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                      <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      Direitos e Danos Materiais e Imateriais
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa atuação em danos materiais e morais é abrangente e estratégica, considerando todos os 
                    aspectos do prejuízo sofrido. Realizamos análise detalhada para quantificar adequadamente os 
                    danos, incluindo lucros cessantes, danos emergentes e compensação por danos morais. Com 
                    experiência sólida em negociação e litígio, buscamos sempre a reparação mais adequada e 
                    justa, priorizando soluções rápidas quando possível, mas sem abrir mão da defesa integral 
                    dos direitos de nossos clientes.
                  </p>
                </CardContent>
              </Card>

              {/* Common Cases */}
              <Card className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                      Casos Mais Comuns em Direito Civil
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Exemplos práticos de nossa atuação especializada
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-primary text-lg mb-3">Contratos e Negociações</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          Contratos de prestação de serviços e fornecimento
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          Rescisão contratual por inadimplemento
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          Revisão de cláusulas abusivas
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          Contratos de compra e venda de bens móveis
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-primary text-lg mb-3">Responsabilidade e Indenizações</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          Acidentes de trânsito e responsabilidade civil
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          Danos morais por ofensas à honra e imagem
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          Responsabilidade por vícios em produtos ou serviços
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          Indenizações por danos materiais e lucros cessantes
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Approach */}
              <Card className="bg-gradient-to-br from-secondary/20 to-accent/5">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                      Nossa Abordagem no Direito Civil
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Metodologia eficaz baseada em mais de 15 anos de experiência
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <FileText className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Análise Técnica</h3>
                      <p className="text-sm text-muted-foreground">
                        Avaliação detalhada e rigorosa de cada caso, identificando os pontos-chave 
                        e possíveis estratégias jurídicas.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Handshake className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Estratégia Personalizada</h3>
                      <p className="text-sm text-muted-foreground">
                        Desenvolvimento de soluções customizadas para cada cliente, 
                        considerando suas necessidades específicas.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Scale className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Execução Eficaz</h3>
                      <p className="text-sm text-muted-foreground">
                        Implementação ágil e eficiente das estratégias definidas, 
                        com acompanhamento constante dos resultados.
                      </p>
                    </div>
                  </div>
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
                      Entre em contato conosco para uma consulta personalizada e descubra como podemos ajudá-lo 
                      com nossa experiência consolidada e atendimento diferenciado.
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