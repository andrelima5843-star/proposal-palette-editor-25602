import { useState } from "react";
import { Upload, Edit2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import novalarLogo from "@/assets/novalar-logo.png";

interface ProposalHeaderProps {
  isEditing: boolean;
}

export const ProposalHeader = ({ isEditing }: ProposalHeaderProps) => {
  const [companyName, setCompanyName] = useState("Novalar");
  const [tagline, setTagline] = useState("Marketing Digital & SEO");
  const [location, setLocation] = useState("Porto Velho");
  const [logoUrl, setLogoUrl] = useState("");

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  return (
    <div className="bg-gradient-to-br from-secondary via-card to-background border-2 border-accent/30 p-8 md:p-12 rounded-2xl shadow-gold relative overflow-hidden">
      {/* 3D Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45_100%_51%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(45_100%_51%/0.1),transparent_50%)]" />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-accent" style={{ 
            textShadow: "0 0 30px hsl(45 100% 51% / 0.5), 0 2px 4px rgba(0,0,0,0.8)",
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d"
          }}>
            Gestão de SEO Orgânico
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent" style={{
              backgroundSize: "200% auto",
              animation: "shimmer 3s linear infinite"
            }}>
              Website + Google Meu Negócio
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Proposta especializada para{" "}
            {isEditing ? (
              <Input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="inline-flex w-auto"
              />
            ) : (
              <span className="font-semibold text-accent" style={{ textShadow: "0 0 10px hsl(45 100% 51% / 0.3)" }}>
                {companyName}
              </span>
            )}{" "}
            - SEO e ranqueamento no Google para eletrodomésticos
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-card border border-accent/20 px-4 py-2 rounded-lg backdrop-blur-sm shadow-gold">
              <span className="text-accent">🏠</span>
              <span className="text-foreground">Eletrodomésticos</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-accent/20 px-4 py-2 rounded-lg backdrop-blur-sm shadow-gold">
              <span className="text-accent">⚡</span>
              <span className="text-foreground">Tecnologia Residencial</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-accent/20 px-4 py-2 rounded-lg backdrop-blur-sm shadow-gold">
              <span className="text-accent">🔧</span>
              <span className="text-foreground">Assistência Técnica</span>
            </div>
          </div>
        </div>

        {/* Right Side - Company Card */}
        <div className="bg-card border-2 border-accent/30 rounded-xl p-6 shadow-gold" style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d"
        }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent rounded-full flex items-center justify-center relative p-2 shadow-gold">
              {logoUrl ? (
                <img src={logoUrl} alt="Logo" className="w-full h-full rounded-full object-cover" />
              ) : (
                <img src={novalarLogo} alt="Novalar Logo" className="w-full h-full object-contain" />
              )}
              {isEditing && (
                <label className="absolute -bottom-1 -right-1 bg-accent text-secondary p-1.5 rounded-full cursor-pointer hover:bg-accent/90 transition-colors shadow-gold">
                  <Upload className="w-3 h-3" />
                  <input type="file" className="hidden" onChange={handleLogoUpload} accept="image/*" />
                </label>
              )}
            </div>
            <div className="flex-1">
              {isEditing ? (
                <>
                  <Input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="font-bold text-xl mb-2"
                  />
                  <Input
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h2 className="font-bold text-2xl text-accent" style={{ textShadow: "0 0 15px hsl(45 100% 51% / 0.4)" }}>
                    {companyName}
                  </h2>
                  <p className="text-muted-foreground">{tagline}</p>
                </>
              )}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-accent to-primary text-secondary p-4 rounded-lg shadow-gold border border-accent/50">
            <div className="flex items-center gap-2">
              <span>📍</span>
              {isEditing ? (
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-secondary/20 border-accent/30 text-foreground"
                />
              ) : (
                <span className="font-medium">{location}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
