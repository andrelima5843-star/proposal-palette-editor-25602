import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import googleMyBusinessImage from "@/assets/google-my-business-novo.jpg";

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
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent" style={{ textShadow: "0 0 25px hsl(48 100% 70% / 0.6)" }}>
          Google Meu Negócio
        </h2>
      </div>
      <p className="text-lg text-muted-foreground">
        Otimização completa do perfil para aumentar visibilidade local
      </p>

      <Card className="p-6 border-2 border-amber-300/30 bg-gradient-to-br from-card to-amber-50/5 shadow-lg hover:shadow-2xl transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={googleMyBusinessImage} 
              alt="Perfil Google Meu Negócio - Novalar Matriz" 
              className="rounded-lg shadow-xl w-full border-2 border-amber-200/20"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent mb-4">
              5 Principais Pontos de SEO para Google Meu Negócio
            </h3>
            <ul className="space-y-4">
              {seoPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 flex items-center justify-center text-gray-900 font-bold shadow-lg">
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
