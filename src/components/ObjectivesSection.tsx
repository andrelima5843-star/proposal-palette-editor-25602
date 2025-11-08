import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

interface ObjectivesSectionProps {
  isEditing: boolean;
}

export const ObjectivesSection = ({ isEditing }: ObjectivesSectionProps) => {
  const objectives = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Posicionamento Google",
      subtitle: "Melhor ranqueamento",
      description: "Top resultados orgânicos",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tráfego Orgânico",
      subtitle: "Aumento de visitas",
      description: "Mais leads qualificados",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversão de Clientes",
      subtitle: "Taxa de conversão",
      description: "Mais vendas online",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "ROI Comprovado",
      subtitle: "Resultados mensuráveis",
      description: "Investimento assertivo",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🎯</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Objetivos e Melhorias
        </h2>
      </div>
      <p className="text-lg text-muted-foreground">
        Trabalho focado em alavancar resultados e melhorar posicionamento
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {objectives.map((obj, index) => (
          <Card
            key={index}
            className="p-6 text-center hover:shadow-gold transition-all duration-300 border-2 border-accent/20 hover:border-accent group bg-card"
          >
            <div className="bg-gradient-to-br from-accent to-primary text-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
              {obj.icon}
            </div>
            <h3 className="font-bold text-lg mb-1 text-accent">{obj.title}</h3>
            <p className="text-sm text-primary font-medium mb-2">{obj.subtitle}</p>
            <p className="text-sm text-muted-foreground">{obj.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
