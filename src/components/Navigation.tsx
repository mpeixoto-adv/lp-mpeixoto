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

        {/* Mobile Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-primary z-50 md:hidden">
            <div className="flex flex-col h-full text-primary-foreground">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between p-4 border-b border-primary-foreground/20">
                <img 
                  src={logoMP}
                  alt="M. Peixoto Advogados Associados" 
                  className="h-10 w-auto object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 px-4 py-8">
                <nav className="space-y-6 text-center">
                  {/* Home */}
                  <Link
                    to="/"
                    className={`block text-xl font-medium text-primary-foreground hover:text-accent transition-colors py-3 ${
                      location.pathname === '/' ? 'text-accent' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </Link>
                  
                  {/* Sobre */}
                  <Link
                    to="/about"
                    className={`block text-xl font-medium text-primary-foreground hover:text-accent transition-colors py-3 ${
                      location.pathname === '/about' ? 'text-accent' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SOBRE NÓS
                  </Link>
                  
                  {/* Services */}
                  <div className="py-3">
                    <span className="block text-xl font-medium text-primary-foreground mb-4">SERVIÇOS</span>
                    <div className="space-y-3">
                      {servicesItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-lg text-primary-foreground/80 hover:text-accent transition-colors py-2"
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
                    className="block text-xl font-medium text-primary-foreground hover:text-accent transition-colors py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONTATO
                  </a>
                  
                  {/* Newsletter */}
                  <Link
                    to="/artigos"
                    className={`block text-xl font-medium text-primary-foreground hover:text-accent transition-colors py-3 ${
                      location.pathname === '/artigos' || location.pathname.startsWith('/artigo/') ? 'text-accent' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    NEWSLETTER
                  </Link>
                </nav>
                
                {/* Contact Information Section */}
                <div className="mt-12 space-y-6 text-center">
                  <a
                    href="tel:+552125331459"
                    className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    (21) 2533-1459
                  </a>
                  
                  <div className="space-y-3 text-primary-foreground/80">
                    <p className="text-sm">contato@mpeixotoadvogados.com.br</p>
                    <p className="text-sm">Rua do Mercado, 11 - 16º andar - Centro/RJ</p>
                  </div>
                  
                  <div>
                    <p className="text-primary-foreground/80 text-sm mb-4">Siga-nos:</p>
                    <div className="flex justify-center space-x-6">
                      <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};