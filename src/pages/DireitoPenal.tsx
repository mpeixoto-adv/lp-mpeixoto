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
                Atuação rápida, discreta e estratégica em investigações, processos criminais e medidas de
                urgência. Defendemos pessoas físicas e jurídicas com análise minuciosa de provas, construção de
                teses robustas e assistência em compliance penal para prevenir riscos.
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
                    Defesa Penal Técnica e Personalizada
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Cuidamos de cada etapa do processo penal – do acompanhamento na delegacia à fase recursal –
                    trabalhando em estreita colaboração com o cliente para assegurar uma defesa eficiente. Com
                    atuação preventiva, investigativa e contenciosa, buscamos resultados concretos com sigilo e
                    dedicação absoluta.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Defesa especializada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Resposta imediata</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Scale className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Estratégia processual</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Atendimento 24/7 em urgências</span>
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
                          <span>Crimes contra a administração pública, ordem tributária e sistema financeiro</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Investigações em delegacias, CPIs e procedimentos internos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Defesas em crimes ambientais e empresariais</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Representação da vítima em processos criminais</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Clock className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Medidas Urgentes</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Pedidos de liberdade provisória, relaxamento de prisões e revogações de cautelares</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Habeas corpus preventivos e liberatórios</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Negociações de acordos de colaboração e ANPP</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Defesa em medidas de busca e apreensão, bloqueio de bens e quebras de sigilo</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Users className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Compliance e Prevenção</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Treinamentos e protocolos para executivos e colaboradores</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Gestão de riscos criminais em empresas e entidades sem fins lucrativos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Conformidade com legislação anticorrupção e lavagem de dinheiro</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Planos de resposta a incidentes e crises reputacionais</span>
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
                      <h3 className="font-semibold text-primary mb-2">Análise Minuciosa de Provas</h3>
                      <p className="text-sm text-muted-foreground">
                        Revisão técnica do inquérito e do processo para construir teses consistentes e baseadas em dados.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Shield className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Resposta Imediata</h3>
                      <p className="text-sm text-muted-foreground">
                        Atendimento emergencial para atuar em prisões em flagrante, audiências e diligências urgentes.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Scale className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Estratégia e Transparência</h3>
                      <p className="text-sm text-muted-foreground">
                        Comunicação clara, planejamento conjunto e acompanhamento constante do processo penal.
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
