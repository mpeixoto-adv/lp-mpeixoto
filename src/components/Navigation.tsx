import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  onContactClick: () => void;
}

export const Navigation = ({ onContactClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/", isExternal: false },
    { name: "Serviços", href: "/services", isExternal: false },
    { name: "Sobre Nós", href: "/about", isExternal: false },
    { name: "Contato", href: "#contact", isExternal: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
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
      <div className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-primary">
              M. Peixoto
              <span className="block text-sm font-sans font-normal text-muted-foreground">
                Advogados Associados
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-accent transition-colors duration-300 font-medium ${
                    location.pathname === item.href ? 'text-accent' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
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
              {menuItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-accent transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-foreground hover:text-accent transition-colors px-4 py-2 ${
                      location.pathname === item.href ? 'text-accent' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
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