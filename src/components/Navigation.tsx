import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// Removido imports do DropdownMenu - agora usando hover customizado
import logoMP from "@/assets/logo-mp.jpg";

interface NavigationProps {
  onContactClick: () => void;
}

export const Navigation = ({ onContactClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Agora usando hover simples, não precisamos mais do useEffect para scroll

  const servicesItems = [
    { name: "Direito Civil", href: "/direito-civil" },
    { name: "Direito Consumerista", href: "/direito-consumerista" },
    { name: "Direito Empresarial", href: "/direito-empresarial" },
    { name: "Direito Imobiliário", href: "/direito-imobiliario" },
    { name: "Direito Trabalhista", href: "/direito-trabalhista" },
    { name: "Direito Tributário", href: "/direito-tributario" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background">
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@mpeixotoadvogados.com.br</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Rua do Mercado, 11 - 16° andar - Centro/RJ</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden md:inline">Siga-nos:</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-accent transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="block">
                <img 
                  src={logoMP}
                  alt="M. Peixoto Advogados Associados" 
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <Link
              to="/"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === '/' ? 'text-accent' : ''
              }`}
            >
              Home
            </Link>
            
            {/* Sobre */}
            <Link
              to="/about"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === '/about' ? 'text-accent' : ''
              }`}
            >
              Sobre
            </Link>
            
            {/* Services Hover Menu */}
            <div 
              className="relative z-50"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-foreground hover:text-accent transition-colors duration-300 font-medium focus:outline-none">
                Serviços
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Custom Hover Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 bg-background border border-border shadow-xl rounded-md py-2 min-w-[160px] z-[9999]"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {servicesItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-foreground hover:text-accent hover:bg-accent/10 transition-colors cursor-pointer px-4 py-2"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Contato */}
            <a
              href="#contact"
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Contato
            </a>
            
            {/* Newsletter */}
            <Link
              to="/artigos"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === '/artigos' || location.pathname.startsWith('/artigo/') ? 'text-accent' : ''
              }`}
            >
              Newsletter
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Phone className="h-4 w-4 mr-2" />
              (21) 2533-1459
            </Button>
            <Button 
              onClick={onContactClick}
              className="bg-primary hover:bg-primary-light text-primary-foreground"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {/* Home */}
              <Link
                to="/"
                className={`text-foreground hover:text-accent transition-colors px-4 py-2 ${
                  location.pathname === '/' ? 'text-accent' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Sobre */}
              <Link
                to="/about"
                className={`text-foreground hover:text-accent transition-colors px-4 py-2 ${
                  location.pathname === '/about' ? 'text-accent' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              
              {/* Mobile Services Menu */}
              <div className="px-4 py-2">
                <span className="text-foreground font-medium">Serviços</span>
                <div className="ml-4 mt-2 space-y-2">
                  {servicesItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-muted-foreground hover:text-accent transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Contato */}
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              
              {/* Newsletter */}
              <Link
                to="/artigos"
                className={`text-foreground hover:text-accent transition-colors px-4 py-2 ${
                  location.pathname === '/artigos' || location.pathname.startsWith('/artigo/') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Newsletter
              </Link>
              
              <div className="px-4 pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (21) 2533-1459
                </Button>
                <Button 
                  onClick={() => {
                    onContactClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground"
                >
                  Contato
                </Button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};