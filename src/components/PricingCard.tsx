import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  frequency: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, description, price, frequency, features, popular }: PricingCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-500 hover:shadow-gold ${
        popular ? "border-2 border-primary shadow-elegant" : "border-border"
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
          Popular
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-10">
        <CardTitle className="font-serif text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-6">
          <span className="text-4xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground"> / {frequency}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button asChild className={`w-full ${popular ? "bg-primary hover:bg-primary/90" : ""}`}>
          <a href="https://beacons.ai/cleanstrike" target="_blank" rel="noopener noreferrer">
            Select Plan
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
