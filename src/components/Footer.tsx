import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4">
              M. Peixoto Advogados Associados
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-md">
              Com mais de 25 anos de trajetória, o M. Peixoto Advogados Associados se orgulha de oferecer um serviço jurídico sólido, atento às necessidades reais de cada cliente, com respostas rápidas e estratégias eficientes.
            </p>
            <div className="flex items-center text-accent font-medium">
              <Phone className="h-4 w-4 mr-2" />
              <a
                href="https://wa.me/552120186198"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                (21) 2018-6198 - WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-accent">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                <div>
                  <p>Rua do Mercado, 11 - 16º andar</p>
                  <p>Centro, Rio de Janeiro - RJ</p>
                  <p>CEP: 20010-120</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <div>
                  <a 
                    href="https://wa.me/552120186198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    (21) 2018-6198 (WhatsApp)
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                <a 
                  href="mailto:advs.mp@mpeixotoadvogados.com.br"
                  className="hover:text-accent transition-colors break-all sm:break-words leading-tight"
                >
                  advs.mp@mpeixotoadvogados.com.br
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-accent" />
                <p>Seg-Sex: 09:00 às 19:00</p>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-accent">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <Link to="/artigos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <a href="https://wa.me/552120186198" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-primary-foreground/60 mb-4 md:mb-0">
              © 2025 MP Advogados Associados. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60">
              As chamadas podem ser gravadas para fins de qualidade e treinamento.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
