import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PackagesSectionProps {
  isEditing: boolean;
}

export const PackagesSection = ({ isEditing }: PackagesSectionProps) => {
  const originalPrice = 1997;
  const discountedPrice = 797;
  const units = 42;
  const totalValue = discountedPrice * units;
  const discount = originalPrice - discountedPrice;

  const packages = [
    {
      name: "Gestão de SEO Orgânico",
      price: "R$ 1.997",
      period: "/mês",
      features: [
        "Auditoria técnica completa do site",
        "Otimização on-page e off-page",
        "Criação de conteúdo otimizado (3 artigos/mês)",
        "Link building estratégico",
        "Monitoramento de palavras-chave",
        "Relatórios mensais de performance",
        "Análise de concorrência",
        "Suporte prioritário",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📦</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Pacotes e Investimento
        </h2>
      </div>
      <p className="text-lg text-muted-foreground">
        Escolha o pacote ideal para o seu negócio
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-gold transition-all duration-300 border-2 border-accent/20 bg-card"
          >
            <h3 className="text-2xl font-bold mb-2 text-accent">{pkg.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-accent" style={{ textShadow: "0 0 15px hsl(45 100% 51% / 0.4)" }}>{pkg.price}</span>
              <span className="text-muted-foreground">{pkg.period}</span>
            </div>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}

        <Card className="p-8 bg-gradient-to-br from-card to-accent/10 border-2 border-accent shadow-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(45_100%_51%/0.15),transparent_70%)]" />
          <div className="relative space-y-6">
            <div className="bg-gradient-to-r from-accent to-primary text-secondary text-sm font-bold px-4 py-2 rounded-full inline-block shadow-gold">
              PLANO CORPORATIVO - 42 UNIDADES
            </div>
            
            <h3 className="text-2xl font-bold text-accent">Gestão de SEO para Múltiplas Unidades</h3>
            
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
                  R$ {discountedPrice.toLocaleString('pt-BR')}
                </span>
                <span className="text-muted-foreground">/mês por unidade</span>
              </div>
              
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 space-y-2 border border-accent/20">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Valor unitário original:</span>
                  <span className="line-through text-muted-foreground">R$ {originalPrice.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Desconto por unidade:</span>
                  <span className="text-green-500 font-bold">- R$ {discount.toLocaleString('pt-BR')}</span>
                </div>
                <div className="h-px bg-accent/20 my-2" />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-accent">Valor total (42 unidades):</span>
                  <span className="text-2xl font-bold text-accent" style={{ textShadow: "0 0 15px hsl(45 100% 51% / 0.4)" }}>
                    R$ {totalValue.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-muted-foreground">Economia total mensal:</span>
                  <span className="text-green-500 font-bold">R$ {(discount * units).toLocaleString('pt-BR')}</span>
                </div>
              </div>

              <ul className="space-y-2 pt-4">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">Todos os recursos do plano Gestão de SEO Orgânico</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">Gestão individualizada para cada unidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">Dashboard centralizado com métricas consolidadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">Suporte prioritário dedicado</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
