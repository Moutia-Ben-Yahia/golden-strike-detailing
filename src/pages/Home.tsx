import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";
import exteriorImage from "@/assets/exterior-detail.jpg";
import interiorImage from "@/assets/interior-detail.jpg";
import engineImage from "@/assets/engine-detail.jpg";
import TestimonialCard from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Home = () => {
  const testimonials = [
    {
      name: "Alexandre D.",
      role: "Ferrari Owner",
      content: "Outstanding service! My Ferrari has never looked better. The attention to detail is remarkable and they came directly to my residence.",
      rating: 5,
    },
    {
      name: "Sophie M.",
      role: "Porsche Owner",
      content: "Professional, discreet, and efficient. CleanStrike Unit is now my go-to for all my car detailing needs in Monaco.",
      rating: 5,
    },
    {
      name: "Laurent B.",
      role: "Lamborghini Owner",
      content: "Impeccable work on my Lamborghini. The mobile service is incredibly convenient and the results are showroom quality.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: Sparkles,
      title: "Full Detail",
      description: "Complete exterior and interior professional detailing",
      image: exteriorImage,
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Quick exterior-only detailing for busy schedules",
      image: interiorImage,
    },
    {
      icon: MapPin,
      title: "Mobile Detailing",
      description: "We come to your parking, residence, or hotel",
      image: engineImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury car in Monaco"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            Your car, detailed with
            <span className="block text-gradient-gold mt-2">precision</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Wherever you are
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              <a href="https://beacons.ai/cleanstrike" target="_blank" rel="noopener noreferrer">
                Book Now <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Premium Mobile Car Detailing in Monaco
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CleanStrike Unit brings professional car detailing directly to you. Whether you're at your residence, parking spot, or hotel in Monaco, our expert team delivers showroom-quality results with precision and care. We specialize in luxury and supercars, ensuring every detail meets the highest standards.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional detailing solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-gold transition-all duration-500"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <service.icon className="text-primary mb-4" size={32} />
                  <h3 className="font-serif text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Trusted by Discerning Clients
            </h2>
            <p className="text-lg text-muted-foreground">
              Excellence reflected in every review
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-gold-soft to-gold-light">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Fast, mobile, and discreet — we come directly to your parking, residence, or hotel.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            <a href="https://beacons.ai/cleanstrike" target="_blank" rel="noopener noreferrer">
              Book Your Appointment Today <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
