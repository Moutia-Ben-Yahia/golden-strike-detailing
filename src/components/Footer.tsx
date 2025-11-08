import { Link } from "react-router-dom";
import { Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="CleanStrike Unit" className="h-10 w-10 rounded-full" />
              <span className="font-serif text-lg font-semibold">CleanStrike Unit</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional mobile car detailing in Monaco. Your car, detailed with precision — wherever you are.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <Link to="/maintenance" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Maintenance Plans
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Monaco</p>
              <a
                href="tel:+33688911561"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+33 6 88 91 15 61</span>
              </a>
              <a
                href="https://instagram.com/cleanstrike_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={16} />
                <span>@cleanstrike_</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CleanStrike Unit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
