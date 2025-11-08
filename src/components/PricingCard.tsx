import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

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
      className={`relative overflow-hidden transition-all duration-500 hover:shadow-gold hover:-translate-y-2 ${
        popular ? "border-2 border-primary shadow-elegant scale-105" : "border-border"
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-gold-soft text-white px-6 py-2 text-sm font-bold rounded-bl-lg shadow-md">
          POPULAR
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-12">
        <CardTitle className="font-serif text-3xl mb-3">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed px-2">{description}</CardDescription>
        <div className="mt-8 mb-4">
          <div className="inline-block">
            <span className="text-5xl font-bold text-primary">{price}</span>
            <span className="text-muted-foreground text-lg ml-1">/ {frequency}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 group">
              <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                <Check size={16} className="text-primary flex-shrink-0" />
              </div>
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-8 px-6 pb-6">
        <Button 
          asChild 
          className={`w-full h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all ${
            popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80 text-foreground"
          }`}
        >
          <Link to="/booking">
            Select Plan
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
