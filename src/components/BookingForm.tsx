import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Clock, AlertCircle, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  selectedService?: string;
}

const BookingForm = ({ selectedService }: BookingFormProps) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [submissionMethod, setSubmissionMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carType: "",
    time: "",
    cleaningType: "",
    selectedService: selectedService || "",
    serviceArea: "",
    serviceAreas: {
      interior: false,
      exterior: false,
    },
    additionalServices: {
      engineBay: false,
      headlightRestoration: false,
      ceramicCoating: false,
    },
    message: "",
  });

  const [validation, setValidation] = useState({
    email: { isValid: false, message: "" },
    phone: { isValid: false, message: "" },
  });

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return { isValid: false, message: "" };
    }
    if (!emailRegex.test(email)) {
      return { isValid: false, message: "Please enter a valid email address" };
    }
    return { isValid: true, message: "Valid email" };
  };

  // Phone validation (French format +33)
  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
    if (!phone) {
      return { isValid: false, message: "" };
    }
    // Remove spaces and dashes for validation
    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return { isValid: false, message: "French format: +33 6 12 34 56 78" };
    }
    return { isValid: true, message: "Valid phone number" };
  };

  // Validate on change
  useEffect(() => {
    setValidation({
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
    });
  }, [formData.email, formData.phone]);

  // Auto-populate service areas based on selected service
  useEffect(() => {
    if (selectedService) {
      const serviceLower = selectedService.toLowerCase();
      
      // Determine service areas and cleaning type based on service name
      if (serviceLower.includes('full detail') || serviceLower.includes('exterior + interior')) {
        setFormData(prev => ({
          ...prev,
          cleaningType: 'deep', // Full detail implies deep cleaning
          serviceAreas: {
            interior: true,
            exterior: true,
          }
        }));
      } else if (serviceLower.includes('exterior')) {
        setFormData(prev => ({
          ...prev,
          cleaningType: serviceLower.includes('express') ? 'express' : 'light',
          serviceAreas: {
            interior: false,
            exterior: true,
          }
        }));
      } else if (serviceLower.includes('interior')) {
        setFormData(prev => ({
          ...prev,
          cleaningType: 'deep', // Interior detail typically deep
          serviceAreas: {
            interior: true,
            exterior: false,
          }
        }));
      }
      
      // Auto-select Engine Bay if that's the service
      if (serviceLower.includes('engine bay')) {
        setFormData(prev => ({
          ...prev,
          additionalServices: {
            ...prev.additionalServices,
            engineBay: true,
          }
        }));
      }
    }
  }, [selectedService]);

  // Generate time slots from 8:00 AM to 12:00 AM (midnight)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour < 24; hour++) {
      const time24 = `${hour.toString().padStart(2, '0')}:00`;
      const isPeriod = hour < 12 ? 'AM' : 'PM';
      const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      const time12 = `${hour12}:00 ${isPeriod}`;
      const isNightFee = hour >= 19; // After 7 PM
      
      slots.push({
        value: time24,
        label: isNightFee ? `${time12} (+€20 Night Fee)` : time12,
        isNightFee
      });
      
      // Add half-hour slot
      const time24Half = `${hour.toString().padStart(2, '0')}:30`;
      const time12Half = `${hour12}:30 ${isPeriod}`;
      slots.push({
        value: time24Half,
        label: isNightFee ? `${time12Half} (+€20 Night Fee)` : time12Half,
        isNightFee
      });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Calculate travel fee based on service area
  const getTravelFee = (area: string): number => {
    const niceFeeAreas = ['nice', 'eze', 'cap-dail', 'villefranche'];
    return niceFeeAreas.includes(area.toLowerCase()) ? 20 : 0;
  };

  // Calculate night fee
  const getNightFee = (time: string): number => {
    const slot = timeSlots.find(s => s.value === time);
    return slot?.isNightFee ? 20 : 0;
  };

  // Calculate total additional fees
  const totalFees = getTravelFee(formData.serviceArea) + getNightFee(formData.time);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        variant: "destructive",
        title: "Date Required",
        description: "Please select a booking date.",
      });
      return;
    }

    const serviceAreas = Object.entries(formData.serviceAreas)
      .filter(([_, selected]) => selected)
      .map(([area]) => area.charAt(0).toUpperCase() + area.slice(1))
      .join(', ') || 'Not specified';

    const additionalServices = Object.entries(formData.additionalServices)
      .filter(([_, selected]) => selected)
      .map(([service]) => service.replace(/([A-Z])/g, ' $1').trim())
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(', ') || 'None';

    const selectedTime = timeSlots.find(slot => slot.value === formData.time);
    const nightFeeNote = selectedTime?.isNightFee ? '\n⚠️ NIGHT FEE APPLIES: +€20 (After 7 PM)' : '';

    const travelFee = getTravelFee(formData.serviceArea);
    const nightFee = getNightFee(formData.time);
    const travelFeeNote = travelFee > 0 ? `\n📍 TRAVEL FEE: +€${travelFee} (${formData.serviceArea})` : '';
    const totalFeesNote = totalFees > 0 ? `\n\n💰 TOTAL ADDITIONAL FEES: +€${totalFees}` : '';

    // Enhanced WhatsApp message with all details
    const whatsappMessage = `🚗 NEW BOOKING REQUEST

📅 Date & Time:
${format(date, 'EEEE, MMMM d, yyyy')} at ${selectedTime?.label || formData.time}${nightFeeNote}

👤 Customer Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.serviceArea}${travelFeeNote}

🚘 Vehicle & Service Details:
${formData.selectedService ? `Selected Service: ${formData.selectedService}\n` : ''}Car Type: ${formData.carType}
Cleaning Type: ${formData.cleaningType.charAt(0).toUpperCase() + formData.cleaningType.slice(1)}
Service Areas: ${serviceAreas}
Additional Services: ${additionalServices}${totalFeesNote}

💬 Special Requests:
${formData.message || 'None'}

---
Please confirm availability and final pricing.`;

    // Enhanced Email message (plain text for mailto)
    const emailBody = `NEW BOOKING REQUEST

Date & Time:
${format(date, 'EEEE, MMMM d, yyyy')} at ${selectedTime?.label || formData.time}
${nightFee > 0 ? 'NIGHT FEE APPLIES: +€20 (After 7 PM)\n' : ''}
Customer Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Area: ${formData.serviceArea}
${travelFee > 0 ? `Travel Fee: +€${travelFee}\n` : ''}
Vehicle & Service Details:
${formData.selectedService ? `Selected Service: ${formData.selectedService}\n` : ''}Car Type: ${formData.carType}
Cleaning Type: ${formData.cleaningType.charAt(0).toUpperCase() + formData.cleaningType.slice(1)}
Service Areas: ${serviceAreas}
Additional Services: ${additionalServices}

${totalFees > 0 ? `TOTAL ADDITIONAL FEES: +€${totalFees}\n` : ''}
Special Requests:
${formData.message || 'None'}

---
Please confirm availability and provide final pricing.`;

    const emailSubject = `Car Detailing Booking - ${format(date, 'MMM d, yyyy')} - ${formData.name}`;
    const mailtoLink = `mailto:contact@cleanstrikeunit.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const whatsappUrl = `https://wa.me/33688911561?text=${encodeURIComponent(whatsappMessage)}`;

    if (submissionMethod === "whatsapp") {
      window.open(whatsappUrl, "_blank");
      toast({
        title: "✅ Opening WhatsApp...",
        description: `Your booking request for ${format(date, 'MMM d')} is ready to send. We'll respond within 24 hours!`,
        duration: 6000,
      });
    } else {
      window.location.href = mailtoLink;
      toast({
        title: "� Opening Email Client...",
        description: `Your booking request for ${format(date, 'MMM d')} is ready to send. We'll respond within 24 hours!`,
        duration: 6000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Selected Service Indicator */}
      {formData.selectedService && (
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-sm">Selected Service</p>
            <p className="text-primary font-medium">{formData.selectedService}</p>
            <p className="text-xs text-muted-foreground mt-1">
              You can modify your service selection below or add additional services.
            </p>
          </div>
        </div>
      )}

      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-border focus:border-primary"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={cn(
                  "border-border focus:border-primary pr-10",
                  formData.email && (validation.email.isValid ? "border-green-500" : "border-red-500")
                )}
                placeholder="john@example.com"
              />
              {formData.email && validation.email.isValid && (
                <CheckCircle2 className="absolute right-3 top-3 text-green-500" size={20} />
              )}
            </div>
            {formData.email && validation.email.message && (
              <p className={cn(
                "text-xs",
                validation.email.isValid ? "text-green-600" : "text-red-600"
              )}>
                {validation.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={cn(
                "border-border focus:border-primary pr-10",
                formData.phone && (validation.phone.isValid ? "border-green-500" : "border-red-500")
              )}
              placeholder="+33 6 88 91 15 61"
            />
            {formData.phone && validation.phone.isValid && (
              <CheckCircle2 className="absolute right-3 top-3 text-green-500" size={20} />
            )}
          </div>
          {formData.phone && validation.phone.message && (
            <p className={cn(
              "text-xs",
              validation.phone.isValid ? "text-green-600" : "text-red-600"
            )}>
              {validation.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceArea">Service Area *</Label>
          <Select 
            required 
            value={formData.serviceArea} 
            onValueChange={(value) => setFormData({ ...formData, serviceArea: value })}
          >
            <SelectTrigger className="border-border focus:border-primary">
              <SelectValue placeholder="Select your location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monaco">Monaco (No travel fee)</SelectItem>
              <SelectItem value="beausoleil">Beausoleil (No travel fee)</SelectItem>
              <SelectItem value="menton">Menton (No travel fee)</SelectItem>
              <SelectItem value="roquebrune">Roquebrune (No travel fee)</SelectItem>
              <SelectItem value="nice">Nice (+€20 travel fee)</SelectItem>
              <SelectItem value="eze">Eze (+€20 travel fee)</SelectItem>
              <SelectItem value="cap-dail">Cap-d'Ail (+€20 travel fee)</SelectItem>
              <SelectItem value="villefranche">Villefranche (+€20 travel fee)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Date & Time Selection */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Select Date & Time</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Preferred Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time *</Label>
            <Select 
              required 
              value={formData.time} 
              onValueChange={(value) => setFormData({ ...formData, time: value })}
            >
              <SelectTrigger className="border-border focus:border-primary">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select time" />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {timeSlots.map((slot) => (
                  <SelectItem 
                    key={slot.value} 
                    value={slot.value}
                    className={slot.isNightFee ? "text-primary font-medium" : ""}
                  >
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.time && timeSlots.find(s => s.value === formData.time)?.isNightFee && (
              <div className="flex items-start space-x-2 text-sm text-primary bg-primary/10 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p><strong>Night Fee: +€20</strong> - Service after 7:00 PM includes additional fee</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Vehicle & Service Details */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Vehicle & Service Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="carType">Type of Car *</Label>
            <Select 
              required 
              value={formData.carType} 
              onValueChange={(value) => setFormData({ ...formData, carType: value })}
            >
              <SelectTrigger className="border-border focus:border-primary">
                <SelectValue placeholder="Select car type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Car / Coupe</SelectItem>
                <SelectItem value="suv">SUV / 4x4</SelectItem>
                <SelectItem value="supercar">Supercar / Luxury</SelectItem>
                <SelectItem value="van">Van / Large Vehicle</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cleaningType">Cleaning Type *</Label>
            <Select 
              required 
              value={formData.cleaningType} 
              onValueChange={(value) => setFormData({ ...formData, cleaningType: value })}
            >
              <SelectTrigger className="border-border focus:border-primary">
                <SelectValue placeholder="Select cleaning type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deep">Deep Cleaning</SelectItem>
                <SelectItem value="light">Light Cleaning / Maintenance</SelectItem>
                <SelectItem value="express">Express Cleaning</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Service Areas */}
        <div className="space-y-3">
          <Label>Service Areas *</Label>
          <div className="space-y-3 bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="interior"
                checked={formData.serviceAreas.interior}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    serviceAreas: { ...formData.serviceAreas, interior: checked as boolean },
                  })
                }
              />
              <label
                htmlFor="interior"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Interior Detailing
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="exterior"
                checked={formData.serviceAreas.exterior}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    serviceAreas: { ...formData.serviceAreas, exterior: checked as boolean },
                  })
                }
              />
              <label
                htmlFor="exterior"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Exterior Detailing
              </label>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="space-y-3">
          <Label>Additional Services (Optional)</Label>
          <div className="space-y-3 bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="engineBay"
                checked={formData.additionalServices.engineBay}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    additionalServices: { ...formData.additionalServices, engineBay: checked as boolean },
                  })
                }
              />
              <label
                htmlFor="engineBay"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Engine Bay Cleaning
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="headlightRestoration"
                checked={formData.additionalServices.headlightRestoration}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    additionalServices: { ...formData.additionalServices, headlightRestoration: checked as boolean },
                  })
                }
              />
              <label
                htmlFor="headlightRestoration"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Headlight Restoration
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="ceramicCoating"
                checked={formData.additionalServices.ceramicCoating}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    additionalServices: { ...formData.additionalServices, ceramicCoating: checked as boolean },
                  })
                }
              />
              <label
                htmlFor="ceramicCoating"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Ceramic Coating
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <Label htmlFor="message">Additional Notes / Special Requests</Label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="border-border focus:border-primary resize-none"
          placeholder="Any specific requirements, location details, or questions..."
        />
      </div>

      {/* Fee Summary */}
      {totalFees > 0 && (
        <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-2">
          <h4 className="font-semibold text-sm">Additional Fees</h4>
          <div className="space-y-1 text-sm">
            {getTravelFee(formData.serviceArea) > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Travel Fee:</span>
                <span className="font-medium">+€{getTravelFee(formData.serviceArea)}</span>
              </div>
            )}
            {getNightFee(formData.time) > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Night Fee (after 7 PM):</span>
                <span className="font-medium">+€{getNightFee(formData.time)}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="font-semibold">Total Additional Fees:</span>
              <span className="font-bold text-primary">+€{totalFees}</span>
            </div>
          </div>
        </div>
      )}

      {/* Submission Method Selection */}
      <div className="space-y-4 bg-muted/30 p-6 rounded-lg border border-border">
        <div>
          <h4 className="text-lg font-semibold mb-2">How would you like to send your booking?</h4>
          <p className="text-sm text-muted-foreground">Choose your preferred contact method</p>
        </div>
        
        <RadioGroup 
          value={submissionMethod} 
          onValueChange={(value) => setSubmissionMethod(value as "whatsapp" | "email")}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <RadioGroupItem value="whatsapp" id="whatsapp" />
            <Label htmlFor="whatsapp" className="flex items-center gap-3 cursor-pointer flex-1">
              <MessageCircle className="text-green-600" size={24} />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Instant response, quick confirmation</p>
              </div>
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email" className="flex items-center gap-3 cursor-pointer flex-1">
              <Mail className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-xs text-muted-foreground">Formal request, written confirmation</p>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Button 
        type="submit" 
        disabled={!validation.email.isValid || !validation.phone.isValid}
        className="w-full bg-primary hover:bg-primary/90 text-lg py-7 shadow-lg hover:shadow-xl transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submissionMethod === "whatsapp" ? (
          <span className="flex items-center justify-center gap-2">
            <MessageCircle size={20} />
            Send via WhatsApp
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Mail size={20} />
            Send via Email
          </span>
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        Your booking request will be sent via {submissionMethod === "whatsapp" ? "WhatsApp" : "Email"} for confirmation. 
        We'll respond within 24 hours to confirm availability.
      </p>
    </form>
  );
};

export default BookingForm;
