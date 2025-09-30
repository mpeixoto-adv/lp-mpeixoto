import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Gavel,
  Shield,
  Scale,
  FileText,
  Clock,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const penalImage = "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?q=80&w=2070";

const DireitoPenal = () => {
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-accent/20 backdrop-blur-sm">
                  <Gavel className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Direito Penal
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Protegemos a liberdade e os interesses de pessoas físicas e jurídicas com uma atuação
                estratégica, técnica e sigilosa. Atuamos desde a fase investigativa até o julgamento, com 
                análise minuciosa de provas, elaboração de teses consistentes e defesa firme em processos
                criminais. Também oferecemos assessoria preventiva em <strong>compliance penal e investigação
                interna</strong>, reduzindo riscos e fortalecendo a segurança jurídica dos nossos clientes.
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

        {/* Overview */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                    Defesa Penal Completa e Estratégica
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Oferecemos suporte jurídico completo em todas as fases do processo penal: acompanhamos
                    investigações, realizamos defesas em primeira instância, atuamos em recursos e garantimos
                    presença em situações emergenciais 24h por dia. Com uma abordagem técnica, preventiva e
                    estratégica, construímos soluções eficazes para casos complexos e de alta sensibilidade.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Defesa Técnica e Especializada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Atuação em Situações de Urgência</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Scale className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Estratégia Processual Personalizada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Prevenção e Compliance Penal</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-card-hover">
                    <img
                      src={penalImage}
                      alt="Atuação em Direito Penal"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-lg font-semibold mb-1">Defesa Penal</p>
                        <p className="text-sm opacity-90">Sigilo, técnica e atuação emergencial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Áreas de Atuação em Direito Penal
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Defesa criminal completa, integrada a programas de prevenção e compliance para empresas e executivos.
                </p>
                <div className="w-24 h-1 bg-accent mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Shield className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Defesa Criminal Estratégica</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Elaboração de teses defensivas, acompanhamento de depoimentos, diligências investigativas e
                      sustentações orais em todas as instâncias.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Clock className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Medidas Urgentes</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Habeas corpus, medidas cautelares, relaxamento de prisões e liberdade provisória com atuação
                      imediata e coordenada.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Users className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Compliance Penal Corporativo</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Programas de integridade, investigações internas, treinamentos e políticas para prevenir
                      responsabilização de empresas e dirigentes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Scale className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Recursos e Revisões</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Interposição de recursos, revisões criminais, acordos de não persecução e delações premiadas
                      com suporte estratégico.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Common cases */}
              <Card className="hover:shadow-card-hover transition-all duration-300 mb-12">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
                      Casos Mais Comuns em Direito Penal
                    </h2>
                    <p className="text-muted-foreground">Situações em que nossa atuação faz a diferença</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Shield className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Defesas e Investigações</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Atuação em crimes contra a administração pública, tributários, financeiros e licitatórios.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Defesa em crimes corporativos, ambientais, concorrenciais e societários.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Representação em inquéritos policiais, CPIs, investigações internas e procedimentos administrativos sancionadores.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Patrocínio da assistência à acusação em nome de vítimas em processos criminais complexos.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Clock className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Medidas Urgentes e Garantias</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Elaboração de pedidos de liberdade provisória, relaxamento de prisão e revogação de medidas cautelares.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Impetração de habeas corpus preventivos e liberatórios em instâncias superiores.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Negociação e estruturação de acordos de não persecução penal (ANPP) e colaborações premiadas.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Defesa em medidas de busca e apreensão, bloqueio de ativos, quebras de sigilo bancário e fiscal.</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Users className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Compliance e Prevenção Criminal</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Desenvolvimento de programas de integridade penal e protocolos internos para empresas e gestores.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Mapeamento e mitigação de riscos criminais no ambiente corporativo e terceiro setor.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Consultoria em conformidade com leis anticorrupção, lavagem de dinheiro e responsabilidade penal da pessoa jurídica.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Estruturação de planos de resposta a crises reputacionais e incidentes com potencial criminal.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/20 to-accent/5">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                      Nossa Abordagem em Direito Penal
                    </h2>
                    <p className="text-muted-foreground text-lg">Atuação dedicada, técnica e confidencial, disponível a qualquer hora.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <FileText className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Investigação e Provas Estratégicas</h3>
                      <p className="text-sm text-muted-foreground">
                        Análise minuciosa de inquéritos, relatórios e provas técnicas para construir teses sólidas,
                        identificar nulidades e definir a melhor linha de defesa desde as primeiras fases do processo.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Shield className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Atuação Imediata e Contenção de Danos</h3>
                      <p className="text-sm text-muted-foreground">
                        Resposta ágil em situações críticas, como prisões em flagrante, medidas cautelares e 
                        audiências urgentes, com foco na preservação de direitos e redução de riscos reputacionais e
                        patrimoniais.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Scale className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Planejamento Jurídico e Condução Tática</h3>
                      <p className="text-sm text-muted-foreground">
                        Estratégia jurídica personalizada, comunicação transparente e acompanhamento constante do
                        processo penal, da investigação à execução, garantindo previsibilidade e controle em cada
                        etapa. 
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center pt-8">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                      Precisa de Apoio em Direito Penal?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Conte com nossa equipe para atuar com discrição, rapidez e eficiência em qualquer fase do processo penal.
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
                          aria-label="WhatsApp Direito Penal"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default DireitoPenal;
