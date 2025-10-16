import { useState, useEffect } from "react";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";

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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-2 text-xs border-b border-accent/20">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="mailto:contato@krepeadvocacia.com.br"
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 text-[10px] sm:text-xs truncate"
          >
            <Mail className="w-3 h-3 flex-shrink-0" />
            <span className="hidden sm:inline">contato@krepeadvocacia.com.br</span>
          </a>
        </div>

        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <div className="text-accent text-base sm:text-xl md:text-2xl font-heading font-bold">
              K<span className="text-primary-foreground">|</span>
              <span className="font-normal hidden xs:inline">KREPE ADVOCACIA</span>
              <span className="font-normal xs:hidden">KREPE</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
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

          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollToSection("contato")}
              className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-4 sm:px-6 font-accent text-sm min-h-[44px]"
            >
              Contato
            </Button>
            <MobileMenu onNavigate={scrollToSection} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
