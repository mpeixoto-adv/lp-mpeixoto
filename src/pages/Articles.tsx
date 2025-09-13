import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock, User, Search } from "lucide-react";
import { articles } from "@/data/articles-adapter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  // Filtrar artigos baseado no termo de busca
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      <div className="pt-[108px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary to-primary-light text-primary-foreground py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                Newsletter
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8">
                Mantenha-se atualizado com as últimas novidades jurídicas e orientações especializadas
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  className="pl-10 bg-background text-foreground"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 sm:py-14 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Card 
                    key={article.id}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col"
                    onClick={() => navigate(`/artigo/${article.slug}`)}
                  >
                    {/* Article Image */}
                    {article.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.date).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-serif group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {article.author}
                        </span>
                        <span className="text-sm font-medium text-accent">
                          {article.category}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Nenhum artigo encontrado para "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ArticlesPage; 