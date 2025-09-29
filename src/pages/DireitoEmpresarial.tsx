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
  Handshake,
  Landmark
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const empresarialImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070";

const DireitoEmpresarial = () => {
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
                  <Building2 className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Direito Empresarial
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Oferecemos suporte jurídico completo para empresas em todas as etapas do negócio, desde a
                constituição societária à elaboração de contratos, negociações estratégicas, resolução de
                conflitos e processos de M&A. Atuamos de forma próxima e personalizada, transformando
                desafios em soluções seguras que impulsionam crescimento, protegem decisões e fortalecem
                a atuação empresarial no mercado.
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
                    Atuamos lado a lado com a liderança para impulsionar negócios, reduzir riscos e garantir
                    segurança jurídica em todas as decisões estratégicas. Nossa atuação abrange desde a
                    constituição e estruturação de empresas até complexas operações societárias, fusões e
                    aquisições, sempre com foco em eficiência, governança e geração de valor sustentável.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Estruturação societária</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Negociações e Estruturação de Operações</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Governança e compliance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Processos de M&A</span>
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
                  Assessoria completa em operações societárias, governança corporativa e estruturação jurídica
                  de negócios, desde o planejamento até a execução.
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
                      Acompanhamos todo o ciclo de vida da empresa: desde a constituição e estruturação
                      societária até reorganizações complexas. Atuamos na elaboração de acordos de sócios,
                      planejamento sucessório e patrimonial, cisões, incorporações e reorganizações corporativas,
                      sempre alinhados à estratégia do negócio e à segurança jurídica.
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
                      Desenvolvemos, negociamos e revisamos contratos estratégicos que sustentam as operações
                      empresariais, incluindo contratos comerciais, joint ventures, parcerias estratégicas, prestação
                      de serviços, distribuição e tecnologia, garantindo clareza, mitigação de riscos e máxima
                      proteção aos interesses da empresa.
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
                      Implementamos políticas corporativas, programas de integridade e estruturas de governança
                      alinhadas às melhores práticas do mercado. Atuamos na gestão de riscos, conformidade
                      regulatória, proteção de dados (LGPD) e criação de mecanismos internos para fortalecer a
                      transparência e a tomada de decisão estratégica.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">M&A — Fusões e Aquisições</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Assessoria completa em operações de M&A, desde a due diligence e estruturação jurídica e
                      financeira até a negociação de contratos e suporte pós-transação. Conduzimos processos de
                      aquisição, venda e reorganização societária com foco em maximizar valor, mitigar riscos e
                      viabilizar a integração dos negócios.
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
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Estrutura Societária e Contratos</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Constituição e reorganização societária (cisões, incorporações e entrada/saída de sócios).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Elaboração e revisão de alterações contratuais, contratos empresariais, comerciais e estratégicos.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Acordos de sócios, joint ventures e parcerias corporativas.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Realização de Assembleias Gerais Ordinárias e Extraordinárias.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Contencioso Societário e Compliance</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Disputas societárias e conflitos entre sócios e administradores</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Litígios contratuais e responsabilidade civil empresarial</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Investigações internas, programas de integridade e compliance regulatório</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Relação com órgãos de fiscalização e defesa em processos administrativos</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Landmark className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Estratégias de Governança e Expansão</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Planejamento sucessório e proteção patrimonial empresarial</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Estruturação de conselhos, políticas de governança e compliance interno</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Estruturação de investimentos e captação de recursos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Suporte jurídico em operações de expansão nacional e internacional</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Handshake className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">M&A — Fusões, Aquisições e Investimentos</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Due diligence jurídica e financeira em operações de M&A</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Estruturação e negociação de contratos de compra e venda de participação societária</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Elaboração de earn-outs, garantias e acordos de transição</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Assessoria em integração pós-transação e reorganizações corporativas</span>
                        </li>
                      </ul>
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
                        Analisamos profundamente a estrutura societária, contratos, riscos regulatórios e
                        oportunidades de crescimento do seu negócio, traçando um plano jurídico alinhado aos
                        objetivos empresariais e ao mercado em que você atua.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Handshake className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Estruturação Integrada de Operações</h3>
                      <p className="text-sm text-muted-foreground">
                        Nossa atuação vai além do jurídico tradicional: integramos especialistas em societário, M&A,
                        tributário e compliance para desenhar estruturas robustas, seguras e eficientes, desde a
                        constituição da empresa até a expansão e reorganizações complexas.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Scale className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Governança e Performance Jurídica</h3>
                      <p className="text-sm text-muted-foreground">
                        Implementamos processos de governança societária, controles internos e relatórios
                        estratégicos que fortalecem a tomada de decisão, garantem conformidade e impulsionam a
                        competitividade do negócio no longo prazo.
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
