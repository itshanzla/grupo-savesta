import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Logistica", href: "#logistica" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-navy-primary" : "text-white/90"
              }`}
            >
              <img
                src="/Logo.png"
                alt="logo"
                className="bg-white/90 w-32 md:w-40 h-12 rounded-md p-1.5 shadow-sm"
              />
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-charcoal hover:text-accent"
                    : "text-white/90 hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all group ${
                isScrolled
                  ? "bg-navy-primary text-white/90 hover:bg-navy-secondary"
                  : "bg-white/90 text-navy-primary hover:bg-accent hover:text-white"
              }`}
            >
              Contacto
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <button
            className={`md:hidden p-2.5 rounded-lg transition-colors ${
              isScrolled
                ? "text-navy-primary hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`rounded-xl p-4 ${
              isScrolled ? "bg-slate-50" : "bg-white/10 backdrop-blur-md"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg font-medium ${
                  isScrolled
                    ? "text-charcoal hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="block mt-2 py-3 px-4 bg-navy-primary text-white text-center rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
