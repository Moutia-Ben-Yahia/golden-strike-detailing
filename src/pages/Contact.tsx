import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import engineImage from "@/assets/engine-detail.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={engineImage}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Fast, mobile, and discreet — we come directly to your parking, residence, or hotel
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Monaco</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+33688911561"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +33 6 88 91 15 61
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">WhatsApp & Calls</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Instagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com/cleanstrike_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @cleanstrike_
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Booking</h3>
                    <a
                      href="https://beacons.ai/cleanstrike"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      beacons.ai/cleanstrike
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3">Operating Hours</h3>
                <p className="text-muted-foreground mb-4">
                  We operate flexible hours to accommodate your schedule
                </p>
                <p className="text-sm text-muted-foreground">
                  Available by appointment • Same-day service often available
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card p-8 rounded-lg border border-border shadow-elegant">
                <h2 className="font-serif text-3xl font-bold mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Service Area */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Service Area</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We proudly serve Monaco and surrounding areas including Beausoleil, Menton, Roquebrune, Eze, Cap-d'Ail, Villefranche, and Nice
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Monaco", "Beausoleil", "Menton", "Roquebrune", "Eze", "Cap-d'Ail", "Villefranche", "Nice"].map((city) => (
              <div
                key={city}
                className="bg-background p-4 rounded-lg border border-border"
              >
                <p className="font-medium">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
