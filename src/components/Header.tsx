import { useState, useEffect } from "react";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-primary/90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-xs border-b border-accent/20">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="mailto:contato@krepeadvocacia.com.br"
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
          >
            <Mail className="w-3 h-3" />
            contato@krepeadvocacia.com.br
          </a>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-accent text-2xl font-heading font-bold">
              K<span className="text-primary-foreground">|</span>
              <span className="font-normal">KREPE ADVOCACIA</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary-foreground hover:text-accent transition-colors font-accent text-sm"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="text-primary-foreground hover:text-accent transition-colors font-accent text-sm"
            >
              Áreas de atuação
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-primary-foreground hover:text-accent transition-colors font-accent text-sm"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-primary-foreground hover:text-accent transition-colors font-accent text-sm"
            >
              Fale conosco
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 font-accent"
          >
            Contato
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
