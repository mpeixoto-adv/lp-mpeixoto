import { useParams, useNavigate, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { articles } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    navigate('/404');
    return null;
  }

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      
      <div className="pt-[108px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary to-primary-light text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/artigos" 
                className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos Artigos
              </Link>
              
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/90">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime} de leitura
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Article Image */}
              {article.image && (
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-96 object-cover rounded-lg mb-12 shadow-lg"
                />
              )}
              
              {/* Content */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-primary prose-headings:font-serif
                  prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-muted-foreground prose-ul:ml-6
                  prose-ol:text-muted-foreground prose-ol:ml-6
                  prose-li:mb-2
                  prose-strong:text-primary prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Categoria</p>
                    <span className="text-accent font-medium">{article.category}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ArticlePage; 