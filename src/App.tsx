import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import DireitoCivil from "./pages/DireitoCivil";
import DireitoTributario from "./pages/DireitoTributario";
import DireitoTrabalhista from "./pages/DireitoTrabalhista";
import DireitoEmpresarial from "./pages/DireitoEmpresarial";
import DireitoImobiliario from "./pages/DireitoImobiliario";
import DireitoPenal from "./pages/DireitoPenal";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Redacao from "./pages/Redacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/direito-civil" element={<DireitoCivil />} />
            <Route path="/direito-tributario" element={<DireitoTributario />} />
            <Route path="/direito-trabalhista" element={<DireitoTrabalhista />} />
            <Route path="/direito-empresarial" element={<DireitoEmpresarial />} />
            <Route path="/direito-imobiliario" element={<DireitoImobiliario />} />
            <Route path="/direito-penal" element={<DireitoPenal />} />
            <Route path="/artigos" element={<Articles />} />
            <Route path="/artigo/:slug" element={<Article />} />
            <Route path="/artigos/:slug" element={<Article />} />
            <Route path="/redacao" element={<Redacao />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
