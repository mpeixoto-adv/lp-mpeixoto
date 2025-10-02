import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Instagram, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// Removido imports do DropdownMenu - agora usando hover customizado
import logoMP from "@/assets/logo-mp.jpg";

interface NavigationProps {
  onContactClick: () => void;
}

export const Navigation = ({ onContactClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
      setIsMobileServicesOpen(false); // Reset accordion when menu closes
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

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const servicesItems = [
    { name: "Direito Civil", href: "/direito-civil" },
    { name: "Direito Trabalhista", href: "/direito-trabalhista" },
    { name: "Direito Empresarial", href: "/direito-empresarial" },
    { name: "Direito Imobiliário", href: "/direito-imobiliario" },
    { name: "Direito Penal", href: "/direito-penal" },
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
                <span>advs.mp@mpeixotoadvogados.com.br</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Rua do Mercado, 11 - 16° andar - Centro/RJ</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="hidden md:inline">Siga-nos:</span>
              <a
                href="https://www.instagram.com/mpeixotoadvogados"
                className="hover:text-accent transition-colors"
                aria-label="Instagram do escritório"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo - Hidden on mobile when menu is open */}
            <div className="flex-shrink-0">
              <div className={`${isMenuOpen ? 'hidden md:block' : 'block'}`}>
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
            <Link
              to="/contato"
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                location.pathname === '/contato' ? 'text-accent' : ''
              }`}
            >
              Contato
            </Link>
            
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
              asChild
              variant="outline" 
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <a
                href="https://wa.me/552120186198"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Converse conosco pelo WhatsApp"
              >
                <Phone className="h-4 w-4 mr-2" />
                (21) 2018-6198
              </a>
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center h-11 w-11 rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px] min-w-[44px]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center h-12 w-12 rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <nav className="space-y-8">
                    <h2 id="mobile-menu-title" className="sr-only">Navigation menu</h2>
                    
                    {/* Home */}
                    <Link
                      ref={firstMenuItemRef}
                      to="/"
                      className={`block text-2xl text-foreground hover:text-accent transition-colors py-2 ${
                        location.pathname === '/' ? 'font-semibold' : 'font-medium'
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      Home
                    </Link>
                    
                    {/* Sobre */}
                    <Link
                      to="/about"
                      className={`block text-2xl text-foreground hover:text-accent transition-colors py-2 ${
                        location.pathname === '/about' ? 'font-semibold' : 'font-medium'
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      Sobre
                    </Link>
                    
                    {/* Services */}
                    <div>
                      <button
                        onClick={toggleMobileServices}
                        className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md py-2 min-h-[44px]"
                        aria-expanded={isMobileServicesOpen}
                        aria-label={`${isMobileServicesOpen ? 'Fechar' : 'Abrir'} menu de serviços`}
                      >
                        <span className="text-2xl font-medium text-foreground">Serviços</span>
                        <ChevronDown 
                          className={`h-5 w-5 text-foreground transition-transform duration-300 ml-2 ${
                            isMobileServicesOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Accordion Content */}
                      {isMobileServicesOpen && (
                        <div className="overflow-hidden animate-in slide-in-from-top-2 duration-300">
                          <div className="space-y-4 pl-4 pt-4">
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
                      )}
                    </div>
                    
                    {/* Contato */}
                    <Link
                      to="/contato"
                      className={`block text-2xl font-medium text-foreground hover:text-accent transition-colors py-2 ${
                        location.pathname === '/contato' ? 'font-semibold' : 'font-medium'
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      Contato
                    </Link>
                    
                    {/* Newsletter */}
                    <Link
                      to="/artigos"
                      className={`block text-2xl text-foreground hover:text-accent transition-colors py-2 ${
                        location.pathname === '/artigos' || location.pathname.startsWith('/artigo/') ? 'font-semibold' : 'font-medium'
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      Newsletter
                    </Link>
                  </nav>
                  
                  {/* Contact Information Section */}
                  <div className="mt-12 space-y-6">
                    <a
                      href="https://wa.me/552120186198"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full"
                      onClick={handleMenuItemClick}
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      (21) 2018-6198
                    </a>
                    
                    <div className="space-y-3 text-foreground/70">
                      <a 
                        href="mailto:advs.mp@mpeixotoadvogados.com.br"
                        className="text-sm hover:text-accent transition-colors break-all sm:break-words block leading-tight"
                      >
                        advs.mp@mpeixotoadvogados.com.br
                      </a>
                      <p className="text-sm">Rua do Mercado, 11 - 16º andar - Centro/RJ</p>
                    </div>
                    
                    <div>
                      <p className="text-foreground/70 text-sm mb-4">Siga-nos:</p>
                      <a
                        href="https://www.instagram.com/mpeixotoadvogados"
                        className="inline-flex items-center text-foreground/70 hover:text-accent transition-colors"
                        aria-label="Instagram do escritório"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
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
