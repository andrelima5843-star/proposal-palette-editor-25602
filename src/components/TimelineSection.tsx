import { CheckCircle2 } from "lucide-react";

interface TimelineSectionProps {
  isEditing: boolean;
}

export const TimelineSection = ({ isEditing }: TimelineSectionProps) => {
  const phases = [
    {
      month: "Mês 1",
      title: "Diagnóstico e Planejamento",
      items: [
        "Auditoria técnica completa das 42 unidades",
        "Análise de concorrência regional",
        "Definição de palavras-chave estratégicas",
        "Estratégia documentada personalizada",
        "Configuração de ferramentas de monitoramento",
      ],
    },
    {
      month: "Mês 2",
      title: "Implementação e Otimização",
      items: [
        "Otimização técnica dos sites",
        "Criação de conteúdo otimizado inicial",
        "Configuração Google Meu Negócio",
        "Início do link building estratégico",
        "Primeiras melhorias de posicionamento",
      ],
    },
    {
      month: "Mês 3",
      title: "Consolidação e Resultados",
      items: [
        "Expansão de conteúdo otimizado",
        "Otimização contínua baseada em dados",
        "Aumento mensurável de tráfego orgânico",
        "Melhoria significativa nas posições no Google",
        "Relatório completo de resultados alcançados",
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="text-4xl">⏱️</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Linha do Tempo do Projeto
        </h2>
      </div>
      <p className="text-lg text-muted-foreground">
        Veja como será o desenvolvimento do seu projeto ao longo dos meses
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent/50" />

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-card border-2 border-accent/20 rounded-lg p-6 shadow-lg hover:shadow-gold transition-all duration-300">
                  <div className="inline-block bg-gradient-to-r from-accent to-primary text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {phase.month}
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-4">{phase.title}</h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:items-end" : "md:items-start"} flex flex-col`}>
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        {index % 2 === 0 ? (
                          <>
                            <span className="text-sm text-muted-foreground">{item}</span>
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 rounded-full bg-accent border-4 border-background shadow-gold" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile simplified version */}
      <div className="md:hidden space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-accent/30">
            <div className="absolute left-0 top-0 transform -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-accent border-2 border-background" />
            </div>
            <div className="bg-card border border-accent/20 rounded-lg p-4">
              <div className="inline-block bg-gradient-to-r from-accent to-primary text-secondary text-xs font-bold px-2 py-1 rounded-full mb-2">
                {phase.month}
              </div>
              <h3 className="text-lg font-bold text-accent mb-3">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};