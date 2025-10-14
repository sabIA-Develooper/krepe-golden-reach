import { Smartphone, Headphones, Zap, MapPin } from "lucide-react";
import columnsBg from "@/assets/columns-bg.jpg";

const Highlights = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: "100% DIGITAL",
      description:
        "Você pode falar com a gente a qualquer hora de qualquer lugar do Brasil. Recebemos sua documentação on-line de forma sigilosa.",
    },
    {
      icon: Headphones,
      title: "APOIO ESPECIALIZADO",
      description:
        "Apresentar soluções jurídicas eficientes e modernas, com o foco na prevenção de riscos.",
    },
    {
      icon: Zap,
      title: "AGILIDADE",
      description:
        "Atendimento ágil e eficiente, com soluções jurídicas rápidas para minimizar riscos e resolver suas demandas com rapidez.",
    },
    {
      icon: MapPin,
      title: "ESTAMOS PRESENTE EM TODOS OS ESTADOS DA FEDERAÇÃO",
      description:
        "Atendemos todo Brasil de forma online ou presencial em uma de nossas unidades.",
    },
  ];

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${columnsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-accent">
          Nosso escritório vem se destacando por:
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent">
                <highlight.icon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-accent font-semibold text-accent mb-2">
                  {highlight.title}
                </h3>
                <p className="text-primary-foreground font-body leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
