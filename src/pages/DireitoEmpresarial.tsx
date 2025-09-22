import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Building2,
  FileText,
  Briefcase,
  Shield,
  BarChart3,
  Scale,
  Handshake
} from "lucide-react";

const empresarialImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070";

const DireitoEmpresarial = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
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
                  <Building2 className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Direito Empresarial
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Oferecemos suporte jurídico completo para empresas em todas as fases do negócio. Estruturamos
                operações societárias, elaboramos contratos estratégicos, conduzimos negociações complexas e
                atuamos em litígios empresariais, sempre com visão de negócio, agilidade e governança.
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
                    Estratégia Jurídica para Impulsionar Negócios
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Atuamos lado a lado com a liderança para viabilizar projetos, mitigar riscos e assegurar
                    conformidade regulatória. Nossa equipe combina experiência em operações empresariais com
                    visão prática, apoiando desde a concepção da empresa, passando por fusões e aquisições, até
                    a resolução de conflitos societários.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Estruturação societária</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Contratos estratégicos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Governança e compliance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Expansão e captação</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-card-hover">
                    <img
                      src={empresarialImage}
                      alt="Consultoria em Direito Empresarial"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-lg font-semibold mb-1">Assessoria Empresarial</p>
                        <p className="text-sm opacity-90">Equipe multidisciplinar para decisões estratégicas</p>
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
                  Áreas de Atuação em Direito Empresarial
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Suporte jurídico completo para operações societárias, contratos estratégicos e proteção
                  patrimonial do negócio.
                </p>
                <div className="w-24 h-1 bg-accent mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Briefcase className="p-0.5 h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Estruturação Societária</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Constituição de empresas, acordos de sócios, reorganizações societárias, sucessão familiar
                      e planejamento patrimonial corporativo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <FileText className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Contratos Empresariais</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Elaboração e revisão de contratos comerciais, joint ventures, acordos de distribuição,
                      tecnologia e prestação de serviços com segurança jurídica.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Shield className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Governança e Compliance</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Implementação de políticas internas, gestão de riscos, LGPD e treinamentos para assegurar
                      integridade corporativa e conformidade regulatória.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Fusões, Aquisições e Investimentos</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Due diligence, negociação de contratos de investimento, estruturação financeira e suporte
                      pós-transação para integração de negócios.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Common cases */}
              <Card className="hover:shadow-card-hover transition-all duration-300 mb-12">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
                      Casos Mais Comuns em Direito Empresarial
                    </h2>
                    <p className="text-muted-foreground">Demandas recorrentes que solucionamos com frequência</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <FileText className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Rotinas Societárias e Contratos</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Alterações societárias, entrada e saída de sócios</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Contratos de distribuição, franquia e representação comercial</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Proteção de propriedade intelectual e segredos industriais</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Estruturação de consórcios e parcerias estratégicas</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Shield className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Contencioso e Compliance</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Disputas societárias e responsabilidade de administradores</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Litígios contratuais e recuperação de créditos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Investigações internas e programas de integridade</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Conformidade regulatória e relações com órgãos de controle</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Handshake className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold text-primary text-lg">Fusões, Aquisições e Investimentos</h3>
                        </div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Due diligence jurídica e financeira</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Estruturação de investimentos e contratos de M&A</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Negociação de earn-outs, garantias e cláusulas de saída</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>Integração pós-transação e reorganização societária</span>
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
                      Nossa Abordagem em Direito Empresarial
                    </h2>
                    <p className="text-muted-foreground text-lg">Visão estratégica, velocidade de execução e foco no resultado</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <FileText className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Diagnóstico Estratégico</h3>
                      <p className="text-sm text-muted-foreground">
                        Mapeamento jurídico-financeiro para compreender o contexto do negócio e definir
                        prioridades de atuação.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Handshake className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Equipe Multidisciplinar</h3>
                      <p className="text-sm text-muted-foreground">
                        Integração entre especialistas em societário, tributário, trabalhista e contencioso para
                        soluções completas.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Scale className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Execução com Governança</h3>
                      <p className="text-sm text-muted-foreground">
                        Processos controlados, relatórios periódicos e acompanhamento contínuo para manter o
                        negócio seguro e competitivo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center pt-8">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                      Assessoria Empresarial para Decisões Estratégicas
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Conte com nossa equipe para orientar projetos complexos, proteger o patrimônio e gerar
                      valor ao seu negócio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={handleContactClick}
                        className="bg-primary hover:bg-primary-light text-primary-foreground"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Fale com nossos especialistas
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
                          aria-label="Contato empresarial via WhatsApp"
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

export default DireitoEmpresarial;
