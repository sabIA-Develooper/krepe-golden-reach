import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-accent mb-6 sm:mb-8">
            KREPE ADVOCACIA
          </h2>
          
          <div className="flex items-center justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors hover-scale min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://wa.me/5535991658802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors hover-scale min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="mailto:contato@krepeadvocacia.com.br"
              className="text-accent hover:text-accent/80 transition-colors hover-scale min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="E-mail"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>

          <a
            href="#"
            className="text-primary-foreground hover:text-accent transition-colors font-body text-xs sm:text-sm min-h-[44px] inline-flex items-center"
          >
            Políticas de Privacidade
          </a>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-accent/20">
            <p className="text-primary-foreground/60 text-xs sm:text-sm font-body">
              © 2025 Krepe Advocacia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
