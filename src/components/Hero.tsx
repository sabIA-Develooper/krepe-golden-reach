import { Button } from "@/components/ui/button";
import { MapPin, Award, Scale, FileText } from "lucide-react";
import heroImage from "@/assets/hero-justice.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: window.innerWidth >= 1024 ? "fixed" : "scroll",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-32 pb-32 sm:pb-24">
        <p className="text-accent font-accent text-xs sm:text-sm tracking-widest mb-3 sm:mb-4 animate-fade-in">
          KREPE ADVOCACIA
        </p>
        <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] leading-tight font-heading font-bold text-primary-foreground mb-4 sm:mb-6 animate-slide-up px-2">
          Escritório Especializado em
          <br className="hidden sm:block" />{" "}
          <span className="sm:inline block">Revisão de Juros Abusivos</span>
        </h1>
        <p className="text-accent text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 font-accent animate-fade-in">
          Atendimento online para todo o Brasil
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-accent hover-scale animate-fade-in min-h-[48px] sm:min-h-[52px]"
        >
          Falar com um advogado
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-primary py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-start gap-4 text-left">
              <MapPin className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-accent font-semibold text-accent text-sm mb-1">
                  ATENDIMENTO PARA TODO O BRASIL
                </h3>
                <p className="text-primary-foreground text-xs">
                  Presença em todos os estados
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left">
              <Award className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-accent font-semibold text-accent text-sm mb-1">
                  EFICIÊNCIA
                </h3>
                <p className="text-primary-foreground text-xs">
                  Garantimos seu direito
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left">
              <Scale className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-accent font-semibold text-accent text-sm mb-1">
                  TRANSPARÊNCIA
                </h3>
                <p className="text-primary-foreground text-xs">
                  Desde nosso primeiro contato
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left">
              <FileText className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-accent font-semibold text-accent text-sm mb-1">
                  EXPERIÊNCIA
                </h3>
                <p className="text-primary-foreground text-xs">
                  Nosso escritório é referência
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
