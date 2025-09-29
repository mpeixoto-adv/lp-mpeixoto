import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Home,
  MapPin,
  FileText,
  Shield,
  Layers,
  Building2,
  Scale,
  Handshake,
  Landmark
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const imobiliarioImage = "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2070";

const DireitoImobiliario = () => {
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
                  <Home className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Direito Imobiliário
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Soluções jurídicas estratégicas para proteger e valorizar seu patrimônio.
                Atuamos em todas as etapas das operações imobiliárias, desde a aquisição, due diligence e
                regularização de imóveis até incorporações, locações, contratos complexos e resolução de
                disputas. Nossa missão é garantir segurança jurídica em cada transação e preservar o valor dos
                ativos dos nossos clientes.
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
                    Segurança Jurídica em Cada Etapa do Mercado Imobiliário
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Atuamos em todas as fases das operações imobiliárias, desde a estruturação contratual à
                    regularização documental, com foco na proteção patrimonial e na concretização segura de
                    negócios. Nosso trabalho une análise técnica minuciosa e experiência prática para mitigar
                    riscos, evitar litígios e impulsionar projetos residenciais, comerciais e industriais.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Contratos sob medida e blindagem jurídica</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Due diligence e regularização de imóveis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Gestão de riscos e prevenção de litígios</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-6 w-6 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Suporte estratégico em incorporações e empreendimentos</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-card-hover">
                    <img
                      src={imobiliarioImage}
                      alt="Assessoria em Direito Imobiliário"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-lg font-semibold mb-1">Consultoria Imobiliária</p>
                        <p className="text-sm opacity-90">Transações seguras e gestão patrimonial</p>
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
                  Áreas de Atuação em Direito Imobiliário
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Acompanhamos o ciclo completo de negócios imobiliários, do projeto ao pós-entrega, com foco na
                  proteção jurídica e otimização do patrimônio.
                </p>
                <div className="w-24 h-1 bg-accent mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Home className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Transações e Contratos Imobiliários</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Elaboração e revisão de contratos de compra e venda, locação comercial e residencial, built to
                      suit, sale & leaseback, permutas e garantias reais, assegurando equilíbrio jurídico e segurança
                      patrimonial em cada operação.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Due Diligence e Regularização de Imóveis</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Auditoria jurídica completa, levantamento e saneamento de matrícula, identificação de
                      passivos ambientais, fiscais e urbanísticos, regularização fundiária e registral, além de análise
                      de riscos em aquisições e investimentos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Layers className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Incorporações, Condomínios e Estruturação de Projetos</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Assessoria integral em incorporações imobiliárias, loteamentos e condomínios edilícios,
                      elaboração de convenções e regimentos, representação em assembleias, estruturação de SPEs
                      e relacionamento com adquirentes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Shield className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-serif font-bold text-primary">Contencioso e Solução de Conflitos Imobiliários</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Atuação em ações possessórias, renovatórias e revisionais, disputas por vícios construtivos,
                      cobrança de aluguéis e encargos, retomada de imóveis, despejos e contenciosos complexos
                      envolvendo direitos reais e registrais.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Common cases */}
              <Card className="hover:shadow-card-hover transition-all duration-300 mb-12">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
                      Casos Mais Comuns em Direito Imobiliário
                    </h2>
                    <p className="text-muted-foreground">Cenários recorrentes que gerenciamos com excelência</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Transações e Contratos</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Compra e venda de imóveis residenciais, comerciais, industriais e rurais.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Estruturação e negociação de contratos built to suit, sale & leaseback e locações complexas.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Constituição de garantias reais, alienação fiduciária e cessão de recebíveis imobiliários.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Estruturação de contratos de promessa de compra e venda e operações com permuta.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Contencioso, Regularização e Disputas</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Ações possessórias, reintegração de posse, usucapião e reivindicatórias.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Litígios envolvendo vícios construtivos, inadimplemento contratual e responsabilidade de incorporadoras.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Cobrança de aluguéis, revisional, renovatória e despejo.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Regularização fundiária, saneamento de matrículas e solução de conflitos registrais complexos.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Landmark className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Estruturação Patrimonial e Investimentos</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Due diligence imobiliária e análise de riscos para aquisição de ativos.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Estruturação de fundos imobiliários e planejamento tributário de operações.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Negociação e formalização de contratos com investidores e adquirentes.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Operações complexas de securitização, alienação de ativos e reestruturação patrimonial.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Layers className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-primary text-lg">Incorporações, Condomínios e Desenvolvimento</h3>
                      </div>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Constituição de SPEs e estruturação de empreendimentos imobiliários.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Elaboração e registro de convenções de condomínio e regulamentos internos.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Assessoria em aprovação de projetos e obtenção de licenças e alvarás.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>Negociações com órgãos públicos, aprovação urbanística e licenciamentos ambientais.</span>
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
                      Nossa Abordagem em Direito Imobiliário
                    </h2>
                    <p className="text-muted-foreground text-lg">Experiência, agilidade e controle em todas as fases do negócio</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <FileText className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Análise Documental Precisa</h3>
                      <p className="text-sm text-muted-foreground">
                        Due diligence completa para garantir segurança em contratos, registros e certidões.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Handshake className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Negociação Estratégica</h3>
                      <p className="text-sm text-muted-foreground">
                        Condução de negociações de forma técnica e pragmática, equilibrando interesses e minimizando
                        riscos.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                        <Scale className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">Atuação Contenciosa Eficiente</h3>
                      <p className="text-sm text-muted-foreground">
                        Propostas de acordo e estratégias processuais alinhadas aos objetivos econômicos do cliente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center pt-8">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                      Precisa de apoio em Direito Imobiliário?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Estamos prontos para acompanhar sua operação do início ao fim com segurança jurídica e agilidade.
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

export default DireitoImobiliario;
