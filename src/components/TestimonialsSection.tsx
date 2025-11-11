import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  isEditing: boolean;
}

export const TestimonialsSection = ({ isEditing }: TestimonialsSectionProps) => {
  const videos = [
    "/videos/feedback-1.mp4",
    "/videos/feedback-2.mp4",
    "/videos/feedback-3.mp4",
    "/videos/feedback-4.mp4",
    "/videos/feedback-5.mp4",
    "/videos/feedback-6.mp4",
    "/videos/feedback-7.mp4",
    "/videos/feedback-8.mp4",
    "/videos/feedback-9.mp4",
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">⭐</span>
        <h2 className="text-3xl font-bold text-accent" style={{ textShadow: "0 0 20px hsl(45 100% 51% / 0.5)" }}>
          Depoimentos de Clientes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((videoSrc, index) => (
          <Card key={index} className="p-4 border-2 border-accent/20 bg-card hover:shadow-gold transition-all overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-secondary/20">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
