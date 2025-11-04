import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Maintenance Plans", path: "/maintenance" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg border-b border-border" : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="CleanStrike Unit" className="h-12 w-12 rounded-full" />
            <span className="font-serif text-xl font-semibold">CleanStrike Unit</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://beacons.ai/cleanstrike" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
              <a href="https://beacons.ai/cleanstrike" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
