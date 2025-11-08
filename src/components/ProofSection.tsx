import { ImageUploadField } from "./ImageUploadField";
import { Award, TrendingUp, Target } from "lucide-react";

interface ProofSectionProps {
  isEditing: boolean;
}

export const ProofSection = ({ isEditing }: ProofSectionProps) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📊</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Resultados Comprovados
        </h2>
      </div>
      <p className="text-lg text-muted-foreground">
        Evidências concretas do nosso trabalho e resultados alcançados
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ImageUploadField
          title="Credibilidade"
          description="Avaliações, depoimentos e certificações da empresa"
          icon={<Award className="w-6 h-6" />}
          isEditing={isEditing}
        />
        
        <ImageUploadField
          title="Posicionamento Google"
          description="Ranqueamento atual nas buscas do Google"
          icon={<TrendingUp className="w-6 h-6" />}
          isEditing={isEditing}
        />
        
        <ImageUploadField
          title="Demanda Google Ads"
          description="Volume de buscas e demanda de anúncios"
          icon={<Target className="w-6 h-6" />}
          isEditing={isEditing}
        />
      </div>
    </section>
  );
};
