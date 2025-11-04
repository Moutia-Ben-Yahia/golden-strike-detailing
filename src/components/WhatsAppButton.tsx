import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "33688911561";
  const message = "Hello! I'm interested in your car detailing services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-elegant transition-all duration-300 hover:scale-110 animate-shine"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
