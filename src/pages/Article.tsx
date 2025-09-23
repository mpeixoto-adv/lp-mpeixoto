import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { getArticleBySlug, LegacyArticle } from "@/data/articles-adapter";
import { useAuth } from "@/contexts/AuthContext";
import { githubStorageV2 } from "@/services/github-storage-v2";
import type { Article as ArticleApi } from "@/data/articles/types";
import { getCachedArticles, setCachedArticles } from "@/utils/articles-cache";
import { getCachedArticle, setCachedArticle } from "@/utils/article-content-cache";
import { toast } from "@/components/ui/use-toast";

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [article, setArticle] = useState<LegacyArticle | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadArticle() {
      if (!slug) {
        navigate('/404');
        return;
      }
      
      try {
        let loadedArticle: LegacyArticle | null = null;

        if (isAuthenticated) {
          try {
            const cachedContent = getCachedArticle(slug);
            if (cachedContent) {
              loadedArticle = cachedContent;
            }

            let lista = getCachedArticles();
            if (!lista || !lista.length) {
              const remoto = await githubStorageV2.listar();
              lista = remoto.map((item: ArticleApi) => ({
                id: item.id,
                title: item.title,
                excerpt: item.excerpt,
                content: "",
                author: item.author,
                date: item.date,
                category: item.category,
                image: item.image,
                readTime: item.readTime,
                slug: item.slug
              })) as LegacyArticle[];
              setCachedArticles(lista);
            }

            const artigoMeta = lista.find((item) => item.slug === slug);

            if (artigoMeta?.id) {
              const artigoCompleto = await githubStorageV2.buscarPorId(artigoMeta.id);
              if (artigoCompleto) {
                loadedArticle = {
                  id: artigoCompleto.id,
                  title: artigoCompleto.title,
                  excerpt: artigoCompleto.excerpt,
                  content: artigoCompleto.content,
                  author: artigoCompleto.author,
                  date: artigoCompleto.date,
                  category: artigoCompleto.category,
                  image: artigoCompleto.image,
                  readTime: artigoCompleto.readTime,
                  slug: artigoCompleto.slug
                };
                setCachedArticle(loadedArticle);
              }
            }
          } catch (apiError) {
            console.error('Erro ao carregar conteúdo dinâmico do artigo:', apiError);
          }
        }

        if (!loadedArticle) {
          const fallbackArticle = await getArticleBySlug(slug);
          if (!fallbackArticle) {
            navigate('/404');
            return;
          }
          loadedArticle = fallbackArticle;
          if (isAuthenticated) {
            setCachedArticle(fallbackArticle);
          }
        }

        setArticle(loadedArticle);
      } catch (error) {
        console.error('Erro ao carregar artigo:', error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    }
    
    if (slug) {
      const cached = getCachedArticle(slug);
      if (cached) {
        setArticle(cached);
        setLoading(false);
      } else {
        setLoading(true);
      }
    } else {
      setLoading(true);
    }

    loadArticle();
  }, [slug, navigate, isAuthenticated]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div>Carregando artigo...</div>
      </div>
    );
  }
  
  if (!article) {
    return null;
  }

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  const handleShareClick = async () => {
    if (!article) {
      return;
    }

    const shareUrl = window.location.href;
    const shareData = {
      title: article.title,
      text: article.excerpt ?? "Confira este artigo do escritório M.Peixoto.",
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast({ description: "Compartilhamento aberto no dispositivo." });
        return;
      } catch (error) {
        if ((error as DOMException)?.name === "AbortError") {
          return;
        }
        console.error("Erro ao compartilhar artigo com Web Share API:", error);
      }
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        toast({ description: "Link do artigo copiado para a área de transferência." });
        return;
      }
    } catch (error) {
      console.error("Erro ao copiar link do artigo:", error);
    }

    window.prompt("Copie o link do artigo: (Ctrl+C / Cmd+C)", shareUrl);
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
                Voltar ao Newsletter
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
                  <Button variant="outline" size="sm" onClick={handleShareClick}>
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
