import { TrendingUp, Coins, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PracticeAreas = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const areas = [
    {
      icon: TrendingUp,
      title: "Juros Abusivos",
      description:
        "Juros abusivos ainda são comumente vistos em contratos bancários. Financiamentos, empréstimos, cartão de crédito, cheque especial e capital de giro. O consumidor deve pagar juros de acordo a média do mercado. Em diversas hipóteses é possível reduzir o valor da sua parcela.",
    },
    {
      icon: Coins,
      title: "Defesas do Endividado",
      description:
        "Após as cobranças administrativas, os bancos ingressam com ação judicial para cobrar a dívida do devedor. Nessa situação, uma equipe capaz de definir uma boa estratégia processual pode te trazer resultados incríveis e reduzir a dívida substancialmente.",
    },
    {
      icon: Building2,
      title: "Fraudes e golpes bancários",
      description:
        "Nosso escritório possui equipe especializada em fraudes e golpes bancários. Em inúmeras ocasiões a responsabilidade pela fraude ou pelo golpe é da instituição financeira, que deve promover meios de evitar a atuação dos criminosos. Traçamos estratégias para recuperar o seu dinheiro.",
    },
  ];

  return (
    <section id="areas" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 20C100 20 120 40 140 60C160 80 180 100 180 120C180 140 160 160 140 180C120 200 100 180 100 180C100 180 80 200 60 180C40 160 20 140 20 120C20 100 40 80 60 60C80 40 100 20 100 20Z"
            fill="hsl(37, 42%, 59%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
          Áreas de Atuação
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <area.icon className="w-16 h-16 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                {area.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 font-accent hover-scale"
          >
            Falar com um advogado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
