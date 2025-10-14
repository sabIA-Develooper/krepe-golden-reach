import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-8">
            KREPE ADVOCACIA
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors hover-scale"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/5535991658802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors hover-scale"
            >
              <Phone className="w-8 h-8" />
            </a>
            <a
              href="mailto:contato@krepeadvocacia.com.br"
              className="text-accent hover:text-accent/80 transition-colors hover-scale"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <a
            href="#"
            className="text-primary-foreground hover:text-accent transition-colors font-body text-sm"
          >
            Políticas de Privacidade
          </a>

          <div className="mt-8 pt-8 border-t border-accent/20">
            <p className="text-primary-foreground/60 text-sm font-body">
              © 2025 Krepe Advocacia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
