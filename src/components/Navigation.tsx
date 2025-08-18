import React, { useState, useEffect, useRef } from "react";
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
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the first menu item for accessibility
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

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

        {/* Mobile Menu - Full Screen Drawer */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Full Screen Drawer */}
            <div 
              className="fixed inset-0 z-50 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              <div className="h-screen bg-background flex flex-col" style={{ 
                height: '100vh',
                paddingTop: 'env(safe-area-inset-top)', 
                paddingBottom: 'env(safe-area-inset-bottom)' 
              }}>
                {/* Header with logo and close button */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <img 
                    src={logoMP}
                    alt="M. Peixoto Advogados Associados" 
                    className="h-10 w-auto object-contain"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground hover:bg-accent/10 h-12 w-12"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <nav className="space-y-8">
                    <h2 id="mobile-menu-title" className="sr-only">Navigation menu</h2>
                    
                    {/* Home */}
                    <Link
                      ref={firstMenuItemRef}
                      to="/"
                      className={`block text-2xl font-medium text-foreground hover:text-accent transition-colors py-2 ${
                        location.pathname === '/' ? 'text-accent' : ''
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      Home
                    </Link>
                    
                    {/* Sobre */}
                    <Link
                      to="/about"
                      className={`block text-2xl font-medium text-foreground hover:text-accent transition-colors py-2 ${
                        location.pathname === '/about' ? 'text-accent' : ''
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      Sobre
                    </Link>
                    
                    {/* Services */}
                    <div className="py-2">
                      <span className="block text-2xl font-medium text-foreground mb-4">Serviços</span>
                      <div className="space-y-4 pl-4">
                        {servicesItems.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-lg text-foreground/80 hover:text-accent transition-colors py-2"
                            onClick={handleMenuItemClick}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contato */}
                    <a
                      href="#contact"
                      className="block text-2xl font-medium text-foreground hover:text-accent transition-colors py-2"
                      onClick={handleMenuItemClick}
                    >
                      Contato
                    </a>
                    
                    {/* Newsletter */}
                    <Link
                      to="/artigos"
                      className={`block text-2xl font-medium text-foreground hover:text-accent transition-colors py-2 ${
                        location.pathname === '/artigos' || location.pathname.startsWith('/artigo/') ? 'text-accent' : ''
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      Newsletter
                    </Link>
                  </nav>
                  
                  {/* Contact Information Section */}
                  <div className="mt-12 space-y-6">
                    <a
                      href="tel:+552125331459"
                      className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full"
                      onClick={handleMenuItemClick}
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      (21) 2533-1459
                    </a>
                    
                    <div className="space-y-3 text-foreground/70">
                      <p className="text-sm">contato@mpeixotoadvogados.com.br</p>
                      <p className="text-sm">Rua do Mercado, 11 - 16º andar - Centro/RJ</p>
                    </div>
                    
                    <div>
                      <p className="text-foreground/70 text-sm mb-4">Siga-nos:</p>
                      <div className="flex space-x-6">
                        <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                          <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                          <Instagram className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        </div>
      </div>
    </nav>
  );
};