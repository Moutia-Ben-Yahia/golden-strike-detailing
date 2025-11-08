import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  prices: {
    label: string;
    price: string;
  }[];
}

const ServiceCard = ({ title, description, image, prices }: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-gold transition-all duration-500 h-full flex flex-col bg-card">
      <div className="overflow-hidden h-64 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="font-serif text-2xl mb-3">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <div className="space-y-3 bg-secondary/30 rounded-lg p-4">
          {prices.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2.5 border-b border-border/50 last:border-0">
              <span className="text-sm font-medium text-foreground/80">{item.label}</span>
              <span className="font-bold text-lg text-primary">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-6">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all">
          <Link 
            to="/booking" 
            state={{ 
              selectedService: title,
              scrollToForm: true 
            }}
          >
            Book This Service
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
