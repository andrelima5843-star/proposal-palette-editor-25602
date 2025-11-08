import { ImageUploadField } from "./ImageUploadField";
import { Award, TrendingUp, Target, BarChart3, Search, MousePointerClick } from "lucide-react";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ImageUploadField
          title="Credibilidade Online"
          description="Avaliações, reputação e autoridade da marca"
          icon={<Award className="w-6 h-6" />}
          isEditing={isEditing}
        />
        
        <ImageUploadField
          title="Posicionamento Orgânico"
          description="Ranqueamento atual nas buscas do Google"
          icon={<TrendingUp className="w-6 h-6" />}
          isEditing={isEditing}
        />
        
        <ImageUploadField
          title="Demanda Google Ads"
          description="Volume de buscas e oportunidades pagas"
          icon={<Target className="w-6 h-6" />}
          isEditing={isEditing}
        />

        <ImageUploadField
          title="Análise de Concorrência"
          description="Benchmarking e gaps de mercado"
          icon={<BarChart3 className="w-6 h-6" />}
          isEditing={isEditing}
        />

        <ImageUploadField
          title="Palavras-Chave Estratégicas"
          description="Termos de busca com alto potencial"
          icon={<Search className="w-6 h-6" />}
          isEditing={isEditing}
        />

        <ImageUploadField
          title="Taxa de Conversão"
          description="Oportunidades de otimização e CRO"
          icon={<MousePointerClick className="w-6 h-6" />}
          isEditing={isEditing}
        />
      </div>
    </section>
  );
};
