const Solutions = () => {
  const solutions = [
    "Fraudes em cartão de crédito",
    "Fraudes em empréstimos bancários",
    "Juros abusivos",
    "Taxas e tarifas indevidas",
    "Venda casada de produtos e/ou serviços",
    "Lei do superendividamento",
    "Revisão de contrato bancário",
    "Empréstimos fraudulentos",
    "Endividamento excessivo de empresas",
    "Engenharia jurídica",
    "Fraudes em seguros",
    "Gestão de crise",
    "Golpe do pix",
    "Golpe do boleto falso",
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-accent">
            Nossas principais soluções
          </h2>
          <p className="text-foreground font-body leading-relaxed">
            Somos especialistas em direito bancário, atuando na luta contra a injustiça nas relações
            entre bancos e clientes. Nosso atendimento é rápido e prático, facilitando o contato e
            garantindo segurança e credibilidade para quem se sente inseguro ao iniciar uma disputa
            judicial lutando contra uma entidade maior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-foreground font-body">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
