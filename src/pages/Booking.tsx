import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, Sparkles } from "lucide-react";
import interiorImage from "@/assets/interior-detail.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Booking = () => {
  const location = useLocation();
  const formRef = useRef<HTMLDivElement>(null);
  const state = location.state as { selectedService?: string; scrollToForm?: boolean } | null;

  useEffect(() => {
    if (state?.scrollToForm && formRef.current) {
      // Small delay to ensure page is fully rendered
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [state?.scrollToForm]);
  return (
    <>
      <SEO
        title="Book Car Detailing Monaco | Online Booking - CleanStrike Unit"
        description="Book your mobile car detailing service in Monaco. Flexible scheduling from 8 AM to midnight, 7 days a week. We come to your location. Quick 24-hour confirmation."
        keywords="book car detailing Monaco, car wash booking Monaco, mobile detailing appointment, schedule car cleaning Monaco, online booking car detailing"
        url="https://cleanstrikeunit.com/booking"
      />
      <div className="min-h-screen">
        <Navbar />
        <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorImage}
            alt="Book your detailing service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your Service
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose your preferred date, time, and services. We'll confirm your booking within 24 hours.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Calendar className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground text-sm">
                Book from 8:00 AM to midnight, 7 days a week
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                We confirm your booking within 24 hours
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Sparkles className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mobile Service</h3>
              <p className="text-muted-foreground text-sm">
                We come to your location in Monaco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section ref={formRef} className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold mb-4">Complete Your Booking</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fill in the details below and we'll get back to you with confirmation and pricing.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <BookingForm selectedService={state?.selectedService} />
          </div>

          {/* Important Information */}
          <div className="mt-12 bg-muted/50 border border-border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Important Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Night service fee applies for bookings after 7:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Please ensure vehicle is accessible at the scheduled time</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>We'll contact you to confirm exact pricing based on your selections</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Cancellations must be made at least 24 hours in advance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>We service all areas in Monaco - parking, residence, or hotel</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Booking;
