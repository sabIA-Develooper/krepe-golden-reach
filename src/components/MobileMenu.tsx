import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  onNavigate: (id: string) => void;
}

const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-primary-foreground hover:text-accent transition-colors"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 top-[108px] bg-primary z-40 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col p-6 space-y-6">
            <button
              onClick={() => handleNavigate("inicio")}
              className="text-primary-foreground hover:text-accent transition-colors font-accent text-lg text-left py-3 min-h-[44px]"
            >
              Início
            </button>
            <button
              onClick={() => handleNavigate("areas")}
              className="text-primary-foreground hover:text-accent transition-colors font-accent text-lg text-left py-3 min-h-[44px]"
            >
              Áreas de atuação
            </button>
            <button
              onClick={() => handleNavigate("solucoes")}
              className="text-primary-foreground hover:text-accent transition-colors font-accent text-lg text-left py-3 min-h-[44px]"
            >
              Soluções
            </button>
            <button
              onClick={() => handleNavigate("contato")}
              className="text-primary-foreground hover:text-accent transition-colors font-accent text-lg text-left py-3 min-h-[44px]"
            >
              Fale conosco
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
