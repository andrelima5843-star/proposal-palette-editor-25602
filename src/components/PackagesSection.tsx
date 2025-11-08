import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PackagesSectionProps {
  isEditing: boolean;
}

export const PackagesSection = ({ isEditing }: PackagesSectionProps) => {
  const packages = [
    {
      name: "Website + Google Meu Negócio",
      price: "R$ 997",
      period: "/mês",
      features: [
        "Criação/otimização de website profissional",
        "Design responsivo e moderno",
        "Configuração completa Google Meu Negócio",
        "Otimização para buscas locais",
        "Integração com redes sociais",
        "Formulários de contato",
        "Suporte técnico mensal",
      ],
      highlight: false,
    },
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
      highlight: true,
    },
    {
      name: "Pacote Completo",
      price: "R$ 2.997",
      period: "/mês",
      features: [
        "Website + GMB + SEO Orgânico",
        "5 artigos otimizados/mês",
        "Campanhas Google Ads gerenciadas",
        "Otimização de conversão (CRO)",
        "Estratégia de conteúdo 360°",
        "Consultoria estratégica semanal",
        "Relatórios executivos personalizados",
        "Suporte prioritário 24/7",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={`p-6 hover:shadow-gold transition-all duration-300 ${
              pkg.highlight
                ? "border-accent border-2 shadow-gold scale-105 bg-gradient-to-br from-card to-accent/5"
                : "border-2 border-accent/20 bg-card"
            }`}
          >
            {pkg.highlight && (
              <div className="bg-gradient-to-r from-accent to-primary text-secondary text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 shadow-gold">
                MAIS POPULAR
              </div>
            )}
            
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
      </div>
    </section>
  );
};
