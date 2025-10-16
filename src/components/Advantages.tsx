import { Smartphone, Clock, FileCheck } from "lucide-react";
import justiceImage from "@/assets/justice-advantages.jpg";

const Advantages = () => {
  const advantages = [
    {
      icon: Smartphone,
      title: "100% ONLINE",
      description:
        "Você pode falar com a gente a qualquer hora, de qualquer lugar do Brasil. Recebemos sua documentação por WhatsApp, de forma sigilosa.",
    },
    {
      icon: Clock,
      title: "RAPIDEZ",
      description:
        "Entramos com seu pedido na justiça em até 72 horas após a entrega da documentação necessária.",
    },
    {
      icon: FileCheck,
      title: "SEM BUROCRACIA",
      description:
        "Fácil e sem sair de casa. Você fica despreocupado enquanto o seu caso é resolvido por especialistas.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.7) 100%), url(${justiceImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] leading-tight font-heading font-bold mb-4 sm:mb-6 text-primary-foreground px-2">
            Quais as vantagens na contratação de um advogado especialista em direito bancário?
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground font-body leading-relaxed mb-8 sm:mb-12 px-2">
            Um advogado especialista na área do direito bancário poderá assessorar instituições
            financeiras, fintechs e empresas de meios de pagamento tanto na sua estruturação quanto
            nas relações negociais com clientes e na análise de regulamentações do BACEN, CVM e CMN.
          </p>
        </div>
      </div>

      <div className="bg-primary/90 py-6 sm:py-8 mt-8 sm:mt-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <advantage.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-accent font-semibold text-accent mb-1 sm:mb-2 text-sm sm:text-base">
                    {advantage.title}
                  </h3>
                  <p className="text-primary-foreground text-xs sm:text-sm font-body leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
