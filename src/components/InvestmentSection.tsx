import { Card } from "@/components/ui/card";
import { DollarSign, Calendar, TrendingUp, Award } from "lucide-react";

interface InvestmentSectionProps {
  isEditing: boolean;
}

export const InvestmentSection = ({ isEditing }: InvestmentSectionProps) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">💰</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Investimento e Condições
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 border-2 border-accent/20 bg-card hover:shadow-gold transition-all">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-accent to-primary text-secondary p-3 rounded-lg shadow-gold">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-accent">Valor do Investimento</h3>
              <p className="text-3xl font-bold text-accent mb-2" style={{ textShadow: "0 0 15px hsl(45 100% 51% / 0.4)" }}>R$ 1.997</p>
              <p className="text-sm text-muted-foreground">Pacote Profissional Mensal</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-accent/20 bg-card hover:shadow-gold transition-all">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-accent to-primary text-secondary p-3 rounded-lg shadow-gold">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-accent">Contrato</h3>
              <p className="text-lg font-semibold mb-2">Mínimo 6 meses</p>
              <p className="text-sm text-muted-foreground">Resultados consistentes de SEO</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-accent/20 bg-card hover:shadow-gold transition-all">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-accent to-primary text-secondary p-3 rounded-lg shadow-gold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-accent">Prazo para Resultados</h3>
              <p className="text-lg font-semibold mb-2">3 a 6 meses</p>
              <p className="text-sm text-muted-foreground">Primeiros resultados visíveis</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-accent/20 bg-card hover:shadow-gold transition-all">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-accent to-primary text-secondary p-3 rounded-lg shadow-gold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-accent">Garantia</h3>
              <p className="text-lg font-semibold mb-2">Resultados mensuráveis</p>
              <p className="text-sm text-muted-foreground">Relatórios mensais detalhados</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-br from-secondary via-card to-background border-2 border-accent shadow-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(45_100%_51%/0.1),transparent_70%)]" />
        <div className="relative text-center space-y-4">
          <h3 className="text-2xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
            🎉 Condições Especiais
          </h3>
          <p className="text-lg text-foreground">
            <span className="text-accent font-bold" style={{ textShadow: "0 0 10px hsl(45 100% 51% / 0.3)" }}>
              10% de desconto
            </span>{" "}
            para pagamento anual à vista
          </p>
          <p className="text-sm text-muted-foreground">
            De R$ 23.964 por ano para R$ 21.568 - Economia de R$ 2.396
          </p>
        </div>
      </Card>
    </section>
  );
};
