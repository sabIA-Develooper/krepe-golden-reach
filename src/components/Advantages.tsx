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
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%), url(${justiceImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary-foreground">
            Quais as vantagens na contratação de um advogado especialista em direito bancário?
          </h2>
          <p className="text-primary-foreground font-body leading-relaxed mb-12">
            Um advogado especialista na área do direito bancário poderá assessorar instituições
            financeiras, fintechs e empresas de meios de pagamento tanto na sua estruturação quanto
            nas relações negociais com clientes e na análise de regulamentações do BACEN, CVM e CMN.
          </p>
        </div>
      </div>

      <div className="bg-primary/90 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <advantage.icon className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-accent font-semibold text-accent mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-primary-foreground text-sm font-body">
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
