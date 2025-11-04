import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="group overflow-hidden border-border hover:shadow-gold transition-all duration-500 h-full flex flex-col">
      <div className="overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-serif text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2">
          {prices.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="font-semibold text-primary">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <a href="https://beacons.ai/cleanstrike" target="_blank" rel="noopener noreferrer">
            Book This Service
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
