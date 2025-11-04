import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-1 bg-card">
      <CardContent className="pt-8 pb-6 px-6">
        <div className="flex space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < rating ? "fill-primary text-primary" : "text-muted/30"}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-8 italic text-base leading-relaxed">"{content}"</p>
        <div className="pt-4 border-t border-border/50">
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-sm text-muted-foreground mt-1">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
