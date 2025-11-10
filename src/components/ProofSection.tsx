import { Award, TrendingUp, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import credibilidadeImage from "@/assets/credibilidade.png";
import posicionamentoImage from "@/assets/posicionamento.png";
import demandaImage from "@/assets/demanda-google-ads.png";

interface ProofSectionProps {
  isEditing: boolean;
}

export const ProofSection = ({ isEditing }: ProofSectionProps) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📊</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Análise do Negócio
        </h2>
      </div>
      <p className="text-lg text-muted-foreground">
        Diagnóstico completo da presença digital e oportunidades de crescimento
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-2 border-accent/20 hover:shadow-gold transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-accent">Credibilidade Online</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Avaliações, reputação e autoridade da marca
          </p>
          <img 
            src={credibilidadeImage} 
            alt="Credibilidade Online - Avaliações Google" 
            className="rounded-lg w-full border border-accent/20"
          />
        </Card>
        
        <Card className="p-6 border-2 border-accent/20 hover:shadow-gold transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-accent">Posicionamento Orgânico</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Ranqueamento atual nas buscas do Google
          </p>
          <img 
            src={posicionamentoImage} 
            alt="Posicionamento Orgânico - Ranking Google" 
            className="rounded-lg w-full border border-accent/20"
          />
        </Card>
        
        <Card className="p-6 border-2 border-accent/20 hover:shadow-gold transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-accent">Demanda Google Ads</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Volume de buscas e oportunidades pagas
          </p>
          <img 
            src={demandaImage} 
            alt="Demanda Google Ads - Planejador de Palavras-chave" 
            className="rounded-lg w-full border border-accent/20"
          />
        </Card>
      </div>
    </section>
  );
};
