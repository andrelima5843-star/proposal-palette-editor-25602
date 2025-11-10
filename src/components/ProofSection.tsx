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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-8 border-2 border-accent/20 hover:shadow-gold transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold text-accent">Credibilidade Online</h3>
          </div>
          <p className="text-base text-muted-foreground mb-6">
            O Google analisa 32 fatores para criar a credibilidade da empresa que é medida como SCORE (que funciona como o do cartão de crédito: quanto maior o score, mais você aparece na 1ª página e vende). Hoje a loja de Porto Velho está com 52, isso mostra que tem muitos pontos de melhorias a serem trabalhados.
          </p>
          <div className="overflow-hidden rounded-lg border-2 border-accent/20">
            <img 
              src={credibilidadeImage} 
              alt="Credibilidade Online - Avaliações Google" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Card>
        
        <Card className="p-8 border-2 border-accent/20 hover:shadow-gold transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold text-accent">Posicionamento Orgânico</h3>
          </div>
          <p className="text-base text-muted-foreground mb-6">
            De acordo com o score da empresa, o Google monta um ranqueamento na rede de pesquisa. Assim a empresa está em 16° posição, sendo a 2ª página indo para a 3ª.
          </p>
          <div className="overflow-hidden rounded-lg border-2 border-accent/20">
            <img 
              src={posicionamentoImage} 
              alt="Posicionamento Orgânico - Ranking Google" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Card>
        
        <Card className="p-8 border-2 border-accent/20 hover:shadow-gold transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold text-accent">Demanda Google Ads</h3>
          </div>
          <p className="text-base text-muted-foreground mb-6">
            Volume de buscas e oportunidades pagas
          </p>
          <div className="overflow-hidden rounded-lg border-2 border-accent/20">
            <img 
              src={demandaImage} 
              alt="Demanda Google Ads - Planejador de Palavras-chave" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};
