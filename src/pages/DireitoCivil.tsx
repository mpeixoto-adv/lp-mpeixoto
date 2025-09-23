import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Scale, FileText, Handshake, Shield, Users } from "lucide-react";
import justiceScalesImage from "@/assets/justice-scales.jpg";
import { useNavigate } from "react-router-dom";

const DireitoCivil = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contato");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      <div className="pt-[108px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary to-primary-light text-primary-foreground py-24">
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
                No Direito Civil, cada detalhe faz a diferença. Mais do que resolver conflitos, nossa missão é  
                oferecer segurança e previsibilidade aos clientes. Atuamos na prevenção e solução de questões 
                contratuais, indenizatórias, de responsabilidade civil e patrimoniais, sempre com precisão 
                técnica, estratégia e eficiência, transformando desafios em soluções jurídicas sólidas e seguras.
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
                    Nossa atuação em Direito Civil abrange as mais diversas relações jurídicas, desde contratos e
                    negócios até questões de responsabilidade civil e patrimonial. Trabalhamos na elaboração e
                    revisão de contratos, resolução de conflitos, indenizações e proteção de direitos, sempre com
                    precisão técnica, visão estratégica e foco em resultados consistentes.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Defesa Estratégica</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Contratos Inteligentes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Handshake className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Conflitos Resolvidos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Scale className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Segurança Jurídica</span>
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
            <div className="max-w-6xl mx-auto">
              
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Nossas Áreas de Atuação em Direito Civil
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Oferecemos assessoria jurídica completa e especializada em todas as vertentes do Direito Civil
                </p>
                <div className="w-24 h-1 bg-accent mx-auto mt-4" />
              </div>

              {/* Grid Layout for Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                
                {/* Responsabilidade Civil e Reparação de Danos */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Shield className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Responsabilidade Civil e Reparação de Danos
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Atuamos em casos de danos materiais e morais, buscando a justa compensação por prejuízos
                      sofridos. Isso inclui situações de acidentes de trânsito, falhas em serviços, descumprimento de
                      obrigações ou qualquer conduta que cause lesão a direitos. Nossa atuação é estratégica:
                      avaliamos o impacto do dano, quantificamos perdas (como lucros cessantes e danos
                      emergentes) e buscamos tanto soluções rápidas por meio de negociação quanto resultados
                      sólidos em juízo.
                    </p>
                  </CardContent>
                </Card>

                {/* Contratos e Relações Negociais */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Handshake className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Contratos e Relações Negociais
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Elaboramos e revisamos contratos de maneira precisa e clara, prevenindo riscos futuros e 
                      garantindo segurança jurídica. Também representamos nossos clientes em disputas decorrentes 
                      de contratos descumpridos, renegociações e revisões de cláusulas, assegurando que os 
                      interesses estejam protegidos em todas as etapas da relação contratual.
                    </p>
                  </CardContent>
                </Card>

                {/* Validade de Atos e Negócios Jurídicos */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Scale className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Validade de Atos e Negócios Jurídicos
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Realizamos uma análise criteriosa de negócios jurídicos e documentos para identificar vícios de 
                      consentimento, defeitos formais ou qualquer falha que comprometa sua validade. Quando 
                      necessário, atuamos na defesa da anulação ou retificação de atos que possam prejudicar nossos 
                      clientes, garantindo a legitimidade e a eficácia das relações jurídicas.
                    </p>
                  </CardContent>
                </Card>

                {/* Família e Sucessões */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <FileText className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Família e Sucessões
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Prestamos assessoria em processos de inventário, partilha de bens, testamentos e planejamento. 
                      sucessório. Nosso objetivo é proteger o patrimônio familiar e evitar litígios, conduzindo essas 
                      questões com técnica, sensibilidade e foco em soluções seguras.
                    </p>
                  </CardContent>
                </Card>

              </div>

              {/* Common Cases - Now with better layout */}
              <Card className="hover:shadow-card-hover transition-all duration-300 mb-12">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
                      Casos Mais Comuns em Direito Civil
                    </h2>
                    <p className="text-muted-foreground">
                      Exemplos práticos de nossa atuação especializada
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <FileText className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Contratos e Negociações</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Elaboração e revisão de contratos de prestação de serviços e fornecimento</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Rescisão contratual por inadimplemento</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Revisão de cláusulas abusivas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Contratos de compra e venda de bens móveis e imóveis</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Shield className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Responsabilidade e Indenizações</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Acidentes de trânsito e responsabilidade civil</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Danos morais por ofensas à honra, imagem ou reputação</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Vícios em produtos e serviços</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Indenizações por danos materiais, lucros cessantes e perdas patrimoniais</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Users className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Família e Sucessões</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Inventários e partilhas judiciais ou extrajudiciais</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Testamentos e planejamento sucessório</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Reconhecimento e dissolução de união estável</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Regulamentação de guarda, visitas e alimentos</span>
                          </li>
                        </ul>
                      </div>
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
                      Metodologia eficaz baseada em mais de 25 anos de experiência
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
                      <h3 className="font-semibold text-primary mb-2">Execução Eficaz com Tecnologia</h3>
                      <p className="text-sm text-muted-foreground">
                        Implementação ágil das estratégias definidas, com acompanhamento em tempo real por meio 
                        de dashboards inteligentes e ferramentas de gestão jurídica de ponta, garantindo maior
                        previsibilidade e controle dos resultados.
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
                        asChild
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        <a
                          href="https://wa.me/552120186198"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Converse conosco pelo WhatsApp"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          (21) 2018-6198
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DireitoCivil;
