import { Award, TrendingUp, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import credibilidadeImage from "@/assets/credibilidade.png";
import posicionamentoImage from "@/assets/posicionamento.png";
import demandaImage from "@/assets/demanda-google-ads.png";
interface ProofSectionProps {
  isEditing: boolean;
}
export const ProofSection = ({
  isEditing
}: ProofSectionProps) => {
  return <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📊</span>
        <h2 className="text-3xl font-bold text-accent" style={{
        textShadow: "0 0 20px hsl(45 100% 51% / 0.5)"
      }}>
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
          <p className="text-base text-muted-foreground mb-6 text-center">
            O Google avalia 32 fatores para definir o SCORE de credibilidade da empresa quanto maior o score, maior a visibilidade nas buscas e, consequentemente, as vendas. Atualmente, a loja de Porto Velho tem 52 pontos, indicando várias oportunidades de melhoria.
          </p>
          <div className="overflow-hidden rounded-lg border-2 border-accent/20">
            <img src={credibilidadeImage} alt="Credibilidade Online - Avaliações Google" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </Card>
        
        <Card className="p-8 border-2 border-accent/20 hover:shadow-gold transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold text-accent">Posicionamento Orgânico</h3>
          </div>
          <p className="text-base text-muted-foreground mb-6 text-center">
            Com base no score, o Google define o ranqueamento da empresa nas buscas. Hoje, ela está na 16ª posição, entre a 2ª e 3ª página dos resultados.
          </p>
          <div className="overflow-hidden rounded-lg border-2 border-accent/20">
            <img src={posicionamentoImage} alt="Posicionamento Orgânico - Ranking Google" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </Card>
        
        <Card className="p-8 border-2 border-accent/20 hover:shadow-gold transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold text-accent">Demanda Google </h3>
          </div>
          <p className="text-base text-muted-foreground mb-6 text-center">​As palavras-chave “loja de móveis e eletrodomésticos” têm entre 100 e 1.000 buscas mensais no Google. As empresas que estão na 1ª página captam cerca de 80% dessa demanda.</p>
          <div className="overflow-hidden rounded-lg border-2 border-accent/20">
            <img src={demandaImage} alt="Demanda Google Ads - Planejador de Palavras-chave" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </Card>
      </div>
    </section>;
};