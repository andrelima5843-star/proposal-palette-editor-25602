import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ImageUploadFieldProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isEditing: boolean;
}

export const ImageUploadField = ({ title, description, icon, isEditing }: ImageUploadFieldProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl("");
  };

  return (
    <Card className="p-6 border-2 border-accent/20 bg-card hover:shadow-gold transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-gradient-to-br from-accent to-primary text-secondary p-3 rounded-lg shadow-gold">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-accent mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {imageUrl ? (
        <div className="relative group">
          <img
            src={imageUrl}
            alt={title}
            className="w-full rounded-lg border-2 border-accent/30 shadow-medium"
          />
          {isEditing && (
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleRemoveImage}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      ) : isEditing ? (
        <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-accent/50 rounded-lg cursor-pointer hover:border-accent hover:bg-accent/5 transition-all">
          <Upload className="w-12 h-12 text-accent mb-2" />
          <span className="text-sm text-muted-foreground">Clique para fazer upload</span>
          <span className="text-xs text-muted-foreground mt-1">PNG, JPG até 5MB</span>
          <input
            type="file"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/png,image/jpeg,image/jpg"
          />
        </label>
      ) : (
        <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-accent/30 rounded-lg bg-muted/30">
          <Upload className="w-12 h-12 text-muted-foreground/50 mb-2" />
          <span className="text-sm text-muted-foreground">Nenhuma imagem adicionada</span>
        </div>
      )}
    </Card>
  );
};
