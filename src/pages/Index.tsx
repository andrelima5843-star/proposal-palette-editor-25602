import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown, Edit2, Eye } from "lucide-react";
import { ProposalHeader } from "@/components/ProposalHeader";
import { ScopeSection } from "@/components/ScopeSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { ProofSection } from "@/components/ProofSection";
import { GoogleMyBusinessSection } from "@/components/GoogleMyBusinessSection";
import { PackagesSection } from "@/components/PackagesSection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { TimelineSection } from "@/components/TimelineSection";
import { toast } from "sonner";

const Index = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleExportPDF = () => {
    toast.success("Exportando proposta para PDF...", {
      description: "Funcionalidade de exportação será implementada em breve",
    });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    toast.info(isEditing ? "Modo visualização ativado" : "Modo edição ativado");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header with Actions */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-accent/20 shadow-gold">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📄</span>
              <h1 className="text-xl font-bold text-accent" style={{ textShadow: "0 0 15px hsl(45 100% 51% / 0.3)" }}>
                Proposta Comercial
              </h1>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={toggleEditMode}
                className="gap-2"
              >
                {isEditing ? (
                  <>
                    <Eye className="w-4 h-4" />
                    Visualizar
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4" />
                    Editar
                  </>
                )}
              </Button>
              
              <Button onClick={handleExportPDF} className="gap-2 bg-gradient-to-r from-accent to-primary hover:opacity-90 text-secondary shadow-gold">
                <FileDown className="w-4 h-4" />
                Baixar PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-12 max-w-7xl">
        <ProposalHeader isEditing={isEditing} />
        <ScopeSection isEditing={isEditing} />
        <ObjectivesSection isEditing={isEditing} />
        <ProofSection isEditing={isEditing} />
        <GoogleMyBusinessSection isEditing={isEditing} />
        <PackagesSection isEditing={isEditing} />
        <InvestmentSection isEditing={isEditing} />
        <TimelineSection isEditing={isEditing} />

        {/* Footer */}
        <footer className="text-center py-8 border-t border-accent/20">
          <p className="text-sm text-muted-foreground">
            Proposta válida por 30 dias • Entre em contato para mais informações
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            📧 contato@novalar.com.br • 📱 (69) 99999-9999
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
