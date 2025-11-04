import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `New booking request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Vehicle Type: ${formData.vehicleType}
Service: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/33688911561?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to WhatsApp to complete your booking.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-border focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicleType">Vehicle Type *</Label>
          <Select required value={formData.vehicleType} onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}>
            <SelectTrigger className="border-border focus:border-primary">
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Car / Coupe</SelectItem>
              <SelectItem value="suv">SUV / 4x4</SelectItem>
              <SelectItem value="supercar">Supercar / Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Interest *</Label>
        <Select required value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
          <SelectTrigger className="border-border focus:border-primary">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full">Full Detail (Exterior + Interior)</SelectItem>
            <SelectItem value="exterior">Exterior Detail Only</SelectItem>
            <SelectItem value="interior">Interior Detail Only</SelectItem>
            <SelectItem value="engine">Engine Bay Cleaning</SelectItem>
            <SelectItem value="maintenance">Maintenance Plan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="border-border focus:border-primary resize-none"
          placeholder="Tell us more about your needs..."
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-7 shadow-lg hover:shadow-xl transition-all font-semibold">
        Send Inquiry via WhatsApp
      </Button>
    </form>
  );
};

export default ContactForm;
