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
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center pt-32 pb-24">
        <p className="text-accent font-accent text-sm tracking-widest mb-4 animate-fade-in">
          KREPE ADVOCACIA
        </p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-slide-up">
          Escritório Especializado em
          <br />
          Revisão de Juros Abusivos
        </h1>
        <p className="text-accent text-xl md:text-2xl mb-8 font-accent animate-fade-in">
          Atendimento online para todo o Brasil
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg font-accent hover-scale animate-fade-in"
        >
          Falar com um advogado
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
