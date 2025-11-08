import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";
import exteriorImage from "@/assets/exterior-detail.jpg";
import interiorImage from "@/assets/interior-detail.jpg";
import engineImage from "@/assets/engine-detail.jpg";
import TestimonialCard from "@/components/TestimonialCard";
import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

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
    <>
      <SEO />
      <StructuredData />
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
              className="bg-primary hover:bg-primary/90 text-lg px-10 py-7 shadow-2xl hover:shadow-gold transition-all font-semibold"
            >
              <Link to="/booking">
                Book Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-10 py-7 shadow-xl transition-all font-semibold"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Premium Mobile Car Detailing in Monaco
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            CleanStrike Unit brings professional car detailing directly to you. Whether you're at your residence, parking spot, or hotel in Monaco, our expert team delivers showroom-quality results with precision and care. We specialize in luxury and supercars, ensuring every detail meets the highest standards.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional detailing solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-gold transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all font-semibold">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Trusted by Discerning Clients
            </h2>
            <p className="text-xl text-muted-foreground">
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

      {/* Booking Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Book Your Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose your preferred date, time, and services. We'll confirm within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-5">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Phone className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-3">Call or WhatsApp</h3>
                    <a
                      href="tel:+33688911561"
                      className="text-xl text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      +33 6 88 91 15 61
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Available for calls and WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-5">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <MapPin className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-3">Service Area</h3>
                    <p className="text-lg text-muted-foreground">Monaco & Surrounding Areas</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Beausoleil • Menton • Roquebrune • Eze • Cap-d'Ail • Villefranche • Nice
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-5">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Instagram className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-3">Follow Us</h3>
                    <a
                      href="https://instagram.com/cleanstrike_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      @cleanstrike_
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">See our latest work and results</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary to-secondary/50 p-8 rounded-2xl border border-border shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-4">Quick Contact</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Prefer to contact us directly? Reach out via WhatsApp or phone.
                </p>
                
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white h-12 shadow-lg hover:shadow-xl transition-all font-semibold"
                  >
                    <a href="https://wa.me/33688911561?text=Hello! I'm interested in your car detailing services." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" size={20} />
                      WhatsApp Us Now
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-12 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all font-semibold"
                  >
                    <a href="tel:+33688911561">
                      <Phone className="mr-2" size={18} />
                      Call +33 6 88 91 15 61
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <div className="bg-card p-8 rounded-lg border border-border shadow-elegant">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-gold-soft to-gold-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed">
            Fast, mobile, and discreet — we come directly to your parking, residence, or hotel.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/95 text-lg px-12 py-7 shadow-2xl hover:shadow-3xl transition-all font-bold hover:scale-105"
          >
            <Link to="/booking">
              Book Your Appointment Today <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Home;
