import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { articles, type LegacyArticle } from "@/data/articles-adapter";
import { useAuth } from "@/contexts/AuthContext";
import { githubStorageV2 } from "@/services/github-storage-v2";
import type { Article as ArticleApi } from "@/data/articles/types";
import { getCachedArticles, setCachedArticles } from "@/utils/articles-cache";

export const Newsletter = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [recentArticles, setRecentArticles] = useState<LegacyArticle[]>(() => articles.slice(0, 3));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ativo = true;

    async function carregarArtigos() {
      if (!isAuthenticated) {
        setRecentArticles(articles.slice(0, 3));
        return;
      }

      const cached = getCachedArticles();
      if (cached && cached.length) {
        const ordenadosCache = [...cached].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setRecentArticles(ordenadosCache.slice(0, 3));
      }

      try {
        if (!cached) {
          setLoading(true);
        }
        const lista = await githubStorageV2.listar();
        if (!ativo) return;

        const adaptados = lista.map((item: ArticleApi) => ({
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

        const ordenados = adaptados.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setRecentArticles(ordenados.slice(0, 3));
        setCachedArticles(adaptados);
      } catch (error) {
        console.error("Erro ao carregar artigos recentes (dinâmico):", error);
        if (ativo) {
          setRecentArticles(articles.slice(0, 3));
        }
      } finally {
        if (ativo) {
          setLoading(false);
        }
      }
    }

    carregarArtigos();

    return () => {
      ativo = false;
    };
  }, [isAuthenticated]);

  const tituloSessao = useMemo(() => (loading ? "Carregando artigos..." : "Newsletter"), [loading]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            {tituloSessao}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantenha-se informado sobre as últimas mudanças na legislação e dicas jurídicas importantes
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentArticles.map((article) => (
            <Card 
              key={article.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
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
              
              <CardHeader>
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
                <CardTitle className="text-xl font-serif group-hover:text-accent transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
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

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/artigos')}
            className="bg-primary hover:bg-primary-light"
          >
            Ver Todas as Notícias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}; 
