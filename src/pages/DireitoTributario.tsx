import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calculator, FileText, TrendingUp, Shield, Briefcase, PiggyBank } from "lucide-react";
import justiceScalesImage from "@/assets/direito-tributario.jpg";

const DireitoTributario = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
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
                  <Calculator className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Direito Tributário
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                O ambiente tributário brasileiro é complexo e desafiador, exigindo acompanhamento técnico 
                especializado para garantir conformidade, reduzir riscos e identificar oportunidades.
                experiência consolidada e recursos tecnológicos para entregar soluções precisas e eficazes. 
                Nossa atuação vai desde o planejamento tributário preventivo até a defesa em autuações fiscais,
                passando pela recuperação de créditos, contestação de cobranças indevidas e consultoria
                estratégica para empresas e pessoas físicas. O objetivo é proporcionar segurança jurídica,
                otimização fiscal e maior previsibilidade nos negócios.
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
                    Direito Tributário: Otimizando Suas Obrigações Fiscais
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Nossa atuação em Direito Tributário vai além do cumprimento das obrigações fiscais. 
                    Oferecemos suporte completo para empresas e pessoas físicas, desde o planejamento 
                    estratégico até a defesa em processos administrativos e judiciais.
                    Identificamos oportunidades de economia dentro da legalidade, reduzimos riscos e garantimos
                    maior previsibilidade na gestão tributária, sempre com soluções claras, objetivas e alinhadas às
                    necessidades de cada cliente.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Planejamento tributário estratégico</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PiggyBank className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Economia Fiscal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Defesa em autuações</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Consultoria completa e contínua</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-card-hover">
                    <img 
                      src={justiceScalesImage} 
                      alt="Consultoria Tributária - Direito Tributário" 
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-lg font-semibold mb-1">Assessoria Tributária</p>
                        <p className="text-sm opacity-90">Especialistas em Direito Tributário</p>
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
                  Nossas Áreas de Atuação em Direito Tributário
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Oferecemos assessoria completa para otimização fiscal e cumprimento das obrigações tributárias
                </p>
                <div className="w-24 h-1 bg-accent mx-auto mt-4" />
              </div>

              {/* Grid Layout for Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                
                {/* Planejamento Tributário Estratégico */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Planejamento Tributário Estratégico
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Desenvolvemos estratégias sob medida para reduzir a carga tributária de forma lícita e eficiente, 
                      avaliando o regime mais adequado, benefícios fiscais aplicáveis e reorganizações societárias 
                      quando necessárias.
                    </p>
                  </CardContent>
                </Card>

                {/* Defesa em Autuações e Multas */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Shield className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Defesa em Autuações e Multas
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Atuamos em processos administrativos e judiciais, elaborando defesas técnicas contra 
                      autuações fiscais, recursos administrativos e ações judiciais, sempre com foco na redução ou 
                      anulação de penalidades.
                    </p>
                  </CardContent>
                </Card>

                {/* Recuperação de Créditos Tributários */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <PiggyBank className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Recuperação de Créditos Tributários
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Identificamos e recuperamos tributos pagos indevidamente ou a maior, como PIS, COFINS, ICMS 
                      e contribuições previdenciárias, garantindo o retorno financeiro por meio de compensações 
                      administrativas ou ações judiciais.
                    </p>
                  </CardContent>
                </Card>

                {/* Consultoria Fiscal Contínua */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Consultoria Fiscal Contínua
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Prestamos suporte permanente para análise de operações, revisão de procedimentos fiscais e 
                      acompanhamento de mudanças legislativas, garantindo previsibilidade e segurança na gestão 
                      tributária.
                    </p>
                  </CardContent>
                </Card>

                {/* Compliance e Obrigações Acessórias */}
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full lg:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <FileText className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Compliance Tributário e Obrigações Acessórias
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Asseguramos que empresas estejam sempre em conformidade com exigências fiscais, incluindo
                      SPED, EFD-Reinf, DCTFWeb e demais declarações, evitando multas e riscos por descumprimento.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Common Cases */}
              <Card className="hover:shadow-card-hover transition-all duration-300 mb-12">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
                      Casos Mais Comuns em Direito Tributário
                    </h2>
                    <p className="text-muted-foreground">
                      Exemplos práticos de nossa atuação especializada
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Calculator className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Impostos e Conformidade Fiscal</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Planejamento e redução lícita de IRPJ e CSLL</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Recuperação de créditos de PIS, COFINS e contribuições previdenciárias</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Revisão de ICMS, substituição tributária e benefícios fiscais</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Gestão de ISS para prestadores de serviços</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Shield className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Defesa e Regularização Tributária</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Defesa em autuações fiscais administrativas e judiciais</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Negociação de parcelamentos especiais (REFIS e similares)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Regularização de pendências fiscais e obrigações acessórias</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Obtenção de certidões negativas de débitos (CNDs)</span>
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
                      Nossa Abordagem no Direito Tributário
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Metodologia eficaz para otimização fiscal e segurança jurídica
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <FileText className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Diagnóstico Tributário Avançado</h3>
                      <p className="text-sm text-muted-foreground">
                        Análise detalhada da situação fiscal, identificando riscos, oportunidades de economia e pontos 
                        de atenção que podem impactar diretamente o negócio.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Estratégia Personalizada</h3>
                      <p className="text-sm text-muted-foreground">
                        Desenvolvimento de soluções tributárias sob medida, alinhadas ao setor de atuação e aos 
                        objetivos estratégicos de cada cliente.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Calculator className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Execução com Tecnologia e Segurança</h3>
                      <p className="text-sm text-muted-foreground">
                        Implementação das estratégias com total respaldo jurídico, apoio de ferramentas tecnológicas
                        e dashboards de acompanhamento, garantindo previsibilidade e resultados consistentes.
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
                      Precisa de Assessoria Tributária Especializada?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Entre em contato conosco para uma análise personalizada da sua situação tributária 
                      e descubra como podemos otimizar suas obrigações fiscais com segurança jurídica.
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

export default DireitoTributario; 
