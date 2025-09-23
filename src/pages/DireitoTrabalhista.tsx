import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Briefcase,
  FileText,
  Shield,
  Users,
  Handshake,
  Scale
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const trabalhistaImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070";

const DireitoTrabalhista = () => {
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
                  <Briefcase className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Direito Trabalhista
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Um ambiente trabalhista saudável exige prevenção, estratégia e respostas rápidas a litígios.
                Atuamos assessorando empresas e profissionais em todas as frentes – desde a construção de
                políticas internas e negociações coletivas até a defesa em reclamações trabalhistas – sempre
                com foco na segurança jurídica, redução de riscos e preservação das relações de trabalho.
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

        {/* Overview Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                    Soluções Integradas em Direito do Trabalho
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Atuamos preventivamente para evitar passivos e judicialmente para resolver demandas com
                    eficiência. Ajudamos empresas a estruturarem políticas internas, realizamos auditorias para
                    identificar fragilidades e conduzimos defesas estratégicas em reclamações individuais ou
                    coletivas, sempre alinhados à legislação vigente e às melhores práticas de compliance.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Redução de passivos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Gestão de equipes e sindicatos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Contratos e políticas internas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Handshake className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Negociações coletivas</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-card-hover">
                    <img
                      src={trabalhistaImage}
                      alt="Assessoria em Direito Trabalhista"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-lg font-semibold mb-1">Consultoria Trabalhista</p>
                        <p className="text-sm opacity-90">Equipe dedicada a rotinas e litígios trabalhistas</p>
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
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Áreas de Atuação em Direito Trabalhista
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Atendimento completo para prevenir conflitos, responder a demandas urgentes e estruturar
                  rotinas trabalhistas sólidas.
                </p>
                <div className="w-24 h-1 bg-accent mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Consultoria Preventiva e Compliance
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Estruturamos políticas internas, contratos e manuais de conduta, alinhando o negócio às
                      normas trabalhistas e evitando contingências futuras.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Shield className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Defesa em Reclamações Trabalhistas
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Atuação estratégica na esfera judicial ou administrativa, com produção de provas,
                      acordos e recursos focados na redução de impactos financeiros.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Handshake className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Negociações Coletivas e Sindicais
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Conduzimos negociações com sindicatos, acompanhamos assembleias e elaboramos acordos
                      coletivos equilibrados para ambas as partes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <FileText className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">
                        Auditorias e Due Diligence Trabalhista
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Realizamos diagnósticos completos para avaliar riscos em rotinas de RH, operações de M&A e
                      contratos de terceiros, apontando correções e boas práticas.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Common Cases */}
              <Card className="hover:shadow-card-hover transition-all duration-300 mb-12">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
                      Casos Mais Comuns em Direito Trabalhista
                    </h2>
                    <p className="text-muted-foreground">Situações que tratamos com frequência na defesa de empresas e profissionais</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <FileText className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Gestão Contratual e Rotinas de RH</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Elaboração de contratos de trabalho, PJ e terceirização</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Programas de remuneração variável e benefícios</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Revisão de políticas internas e códigos de conduta</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Procedimentos de desligamento e acordos negociados</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Shield className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Contencioso e Defesa</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Reclamações individuais e coletivas</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Responsabilidade subsidiária e solidária em terceirizações</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Assédio moral, dano existencial e reparação por doenças ocupacionais</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Fiscalizações do Ministério do Trabalho e auditorias do MPT</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Users className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Relacionamento com Sindicatos</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Negociação e renovação de acordos coletivos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Mediação de conflitos coletivos e greves</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Representação em assembleias e comissões de fábrica</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Planos de incentivo e PPR/PLR</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Approach */}
              <Card className="bg-gradient-to-br from-secondary/20 to-accent/5">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                      Nossa Abordagem em Direito Trabalhista
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Combinação de análise técnica, negociação e execução ágil para proteger o seu negócio
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <FileText className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Diagnóstico Completo</h3>
                      <p className="text-sm text-muted-foreground">
                        Levantamento detalhado de contratos, políticas e histórico de litígios para mapear
                        riscos e oportunidades.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Handshake className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Estratégias Colaborativas</h3>
                      <p className="text-sm text-muted-foreground">
                        Trabalhamos lado a lado com RH e liderança para construir soluções viáveis e sustentáveis
                        no longo prazo.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Scale className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Resultados Mensuráveis</h3>
                      <p className="text-sm text-muted-foreground">
                        Indicadores de performance e relatórios periódicos para acompanhar impactos e
                        aperfeiçoar as práticas trabalhistas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center pt-8">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                      Precisa de Assessoria Trabalhista Especializada?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Fale com nossa equipe e descubra como podemos apoiar a sua empresa com soluções
                      trabalhistas estratégicas e personalizadas.
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

export default DireitoTrabalhista;
