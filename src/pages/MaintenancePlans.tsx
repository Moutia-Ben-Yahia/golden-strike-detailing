import PricingCard from "@/components/PricingCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import interiorImage from "@/assets/interior-detail.jpg";

const MaintenancePlans = () => {
  const plans = [
    {
      title: "Weekly Wash",
      description: "Keep your vehicle spotless with weekly professional washing",
      price: "From €79",
      frequency: "visit",
      features: [
        "Exterior rinseless wash",
        "Wheel and tire cleaning",
        "Quick interior wipe-down",
        "Glass cleaning",
        "Priority scheduling",
        "10% discount on additional services",
      ],
    },
    {
      title: "Bi-Weekly Detail",
      description: "Regular maintenance to preserve your car's pristine condition",
      price: "From €89",
      frequency: "visit",
      features: [
        "Complete exterior wash",
        "Wheel and tire detailing",
        "Interior vacuum and cleaning",
        "Dashboard and console care",
        "Glass inside and out",
        "15% discount on additional services",
      ],
      popular: true,
    },
    {
      title: "Monthly Full Detail",
      description: "Comprehensive detailing to maintain showroom quality year-round",
      price: "From €99",
      frequency: "visit",
      features: [
        "Full exterior detailing",
        "Paint protection application",
        "Deep interior cleaning",
        "Leather/fabric conditioning",
        "Engine bay cleaning (quarterly)",
        "20% discount on additional services",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorImage}
            alt="Maintenance plans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Maintenance Plans
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Long-term detailing plans to keep your car perfect year-round
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Why Choose a Maintenance Plan?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Save Money</h3>
              <p className="text-muted-foreground">
                Enjoy discounts on all services and lock in your rate
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Priority Service</h3>
              <p className="text-muted-foreground">
                Get priority scheduling and never wait for an appointment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Perfect Condition</h3>
              <p className="text-muted-foreground">
                Keep your vehicle in showroom condition all year long
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">Important Note</h3>
            <p className="text-muted-foreground text-lg">
              Maintenance plans are available only after your first appointment. This ensures we understand your vehicle's specific needs and can provide the best ongoing care.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenancePlans;
