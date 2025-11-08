import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import exteriorImage from "@/assets/exterior-detail.jpg";
import interiorImage from "@/assets/interior-detail.jpg";
import engineImage from "@/assets/engine-detail.jpg";
import heroImage from "@/assets/hero-car.jpg";

const Services = () => {
  const services = [
    {
      title: "Full Detail (Exterior + Interior)",
      description: "Complete professional detailing service for a pristine finish inside and out.",
      image: heroImage,
      prices: [
        { label: "Standard Cars / Coupes", price: "€99" },
        { label: "SUVs / 4x4", price: "€119" },
        { label: "Supercars / Luxury Vehicles", price: "€129" },
        { label: "Special Offer (Monaco)", price: "€89" },
      ],
    },
    {
      title: "Exterior Detail Only",
      description: "ONR rinseless wash, wheels, tires, drying, and premium paint protection.",
      image: exteriorImage,
      prices: [
        { label: "Standard Cars", price: "€60" },
        { label: "SUVs / Supercars", price: "€75" },
      ],
    },
    {
      title: "Interior Detail Only",
      description: "Deep cleaning of all interior surfaces. Includes vacuum, plastic/leather care, glass cleaning, and final touches.",
      image: interiorImage,
      prices: [
        { label: "Standard Cars", price: "€60" },
        { label: "SUVs / Supercars", price: "€75" },
      ],
    },
    {
      title: "Engine Bay Cleaning",
      description: "Safe and careful cleaning of the engine compartment. Ideal for shows or maintenance.",
      image: engineImage,
      prices: [
        { label: "All Vehicles", price: "From €40" },
      ],
    },
  ];

  const travelZones = [
    {
      zone: "Monaco / Beausoleil / Menton / Roquebrune",
      fee: "Standard pricing",
    },
    {
      zone: "Eze / Cap-d'Ail / Villefranche / Nice",
      fee: "+€20 travel fee",
    },
  ];

  return (
    <>
      <SEO
        title="Car Detailing Services Monaco | Interior & Exterior Cleaning - CleanStrike Unit"
        description="Professional mobile car detailing services in Monaco. Full detail, interior cleaning, exterior detailing, ceramic coating, and more. Premium service from €89."
        keywords="car detailing Monaco, interior cleaning Monaco, exterior detailing Monaco, ceramic coating Monaco, mobile car wash Monaco, car cleaning services Monaco, luxury car detailing"
        url="https://cleanstrikeunit.com/services"
      />
      <div className="min-h-screen">
        <Navbar />
        <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={exteriorImage}
            alt="Car detailing services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Premium mobile car detailing tailored to your vehicle's needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Zones */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Travel Zones</h2>
            <p className="text-lg text-muted-foreground">
              We serve Monaco and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelZones.map((zone, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-gold transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-2">{zone.zone}</h3>
                <p className="text-primary font-medium">{zone.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            What's Included?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-xl mb-4 text-primary">Exterior Detail</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ONR rinseless wash</li>
                <li>• Wheel and tire cleaning</li>
                <li>• Paint decontamination</li>
                <li>• Premium wax protection</li>
                <li>• Glass cleaning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4 text-primary">Interior Detail</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Complete vacuum</li>
                <li>• Leather/fabric care</li>
                <li>• Dashboard and console cleaning</li>
                <li>• Interior glass cleaning</li>
                <li>• Air freshening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Services;
