import lawyerImage from "@/assets/lawyer-office.png";

const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-[var(--shadow-card)] animate-fade-in">
            <h2 className="text-accent font-accent text-sm tracking-widest mb-4">
              O ESCRITÓRIO
            </h2>
            <p className="text-foreground font-body mb-4 leading-relaxed">
              O escritório <strong className="text-accent">Krepe Advocacia</strong> é referência nacional na
              luta contra práticas abusivas e redução de juros abusivos que levam o consumidor ao
              superendividamento.
            </p>
            <p className="text-foreground font-body leading-relaxed">
              Negociar dívidas é uma tarefa árdua e complexa, o banco possui uma equipe especializada,
              que certamente não pretende defender os seus interesses. A nossa tarefa é equilibrar a
              balança e trazer a melhor solução para você.
            </p>
          </div>

          <div className="animate-fade-in">
            <img
              src={lawyerImage}
              alt="Advogada Monaliza Krepe"
              className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
