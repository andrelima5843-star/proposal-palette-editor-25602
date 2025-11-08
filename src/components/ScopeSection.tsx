import { useState } from "react";
import { EditableText } from "./EditableText";
import { Card } from "@/components/ui/card";
import { Search, Star, FileText, BarChart } from "lucide-react";

interface ScopeSectionProps {
  isEditing: boolean;
}

export const ScopeSection = ({ isEditing }: ScopeSectionProps) => {
  const [items, setItems] = useState([
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO no Website",
      description: "Otimização completa do site para mecanismos de busca",
      points: [
        "Pesquisa de palavras-chave para eletrodomésticos",
        "Otimização de títulos, meta descrições e conteúdo",
        "Melhoria da estrutura de URLs e links internos",
        "Otimização de velocidade e performance do site",
      ],
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Google Meu Negócio",
      description: "Gestão profissional do perfil GMB para máxima visibilidade",
      points: [
        "Otimização completa do perfil com palavras-chave estratégicas",
        "Publicação regular de posts sobre produtos e serviços",
        "Gestão e resposta de avaliações de clientes",
        "Atualização de fotos, horários e informações relevantes",
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Conteúdo e Link Building",
      description: "Criação de conteúdo relevante e autoridade no segmento",
      points: [
        "Criação de artigos otimizados sobre eletrodomésticos",
        "Estratégia de link building para aumentar autoridade",
        "Otimização de conteúdo existente para ranqueamento",
        "Análise da concorrência e oportunidades de palavras-chave",
      ],
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Monitoramento e Relatórios",
      description: "Acompanhamento constante dos resultados e ajustes",
      points: [
        "Relatórios mensais com evolução de posicionamento",
        "Análise de tráfego orgânico e comportamento do usuário",
        "Monitoramento de palavras-chave e impressões no Google",
        "Sugestões de melhorias baseadas em dados reais",
      ],
    },
  ]);

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📌</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Escopo do Trabalho
        </h2>
      </div>
      <p className="text-lg text-muted-foreground">
        SEO completo no website e Google Meu Negócio para eletrodomésticos
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="p-6 hover:shadow-gold transition-all duration-300 border-2 border-accent/20 bg-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-gradient-to-br from-accent to-primary text-secondary p-3 rounded-lg shadow-gold">{item.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-accent">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>

            <ul className="space-y-2">
              {item.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-2 text-sm">
                  <span className="text-accent mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
