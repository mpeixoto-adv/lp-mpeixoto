import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              M. Peixoto Advogados Associados
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-md">
              Escritório de advocacia com mais de 15 anos de experiência, oferecendo serviços jurídicos 
              especializados e personalizados para empresas e pessoas físicas.
            </p>
            <div className="flex items-center text-accent font-medium">
              <Phone className="h-4 w-4 mr-2" />
              (21) 2533-1459 - WhatsApp
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
                  <p>(21) 2210-5300</p>
                  <p>(21) 2533-1459</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <p>contato@mpeixotoadvogados.com.br</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-accent" />
                <p>Seg-Sex: 09:00 às 18:00</p>
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
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=552125331459" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
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
              © 2024 MP Advogados Associados. Todos os direitos reservados.
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