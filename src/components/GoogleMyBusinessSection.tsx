import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import googleMyBusinessImage from "@/assets/google-my-business.png";

interface GoogleMyBusinessSectionProps {
  isEditing: boolean;
}

export const GoogleMyBusinessSection = ({ isEditing }: GoogleMyBusinessSectionProps) => {
  const seoPoints = [
    "Informações completas e atualizadas (horário, endereço, telefone)",
    "Fotos de alta qualidade da empresa, produtos e serviços",
    "Avaliações e respostas ativas aos clientes",
    "Posts regulares com ofertas, novidades e eventos",
    "Palavras-chave estratégicas na descrição do negócio"
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🗺️</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Google Meu Negócio
        </h2>
      </div>
      <p className="text-lg text-muted-foreground">
        Otimização completa do perfil para aumentar visibilidade local
      </p>

      <Card className="p-6 border-2 border-accent/20 bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={googleMyBusinessImage} 
              alt="Perfil Google Meu Negócio - Novalar Matriz" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-4">
            <h3 className="text-2xl font-bold text-accent mb-4">
              5 Principais Pontos de SEO para Google Meu Negócio
            </h3>
            <ul className="space-y-4">
              {seoPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-secondary font-bold shadow-gold">
                    {index + 1}
                  </div>
                  <span className="text-base pt-1">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};
