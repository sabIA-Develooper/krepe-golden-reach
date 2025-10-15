import { Award } from "lucide-react";
import lawyerProfile from "@/assets/lawyer-profile.png";

const LawyerProfile = () => {
  return (
    <section className="pt-12 md:pt-16 pb-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-accent">
              Quem é Monaliza Krepe?
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="font-body leading-relaxed">
                Monaliza Krepe é advogada, pós-graduada em direito bancário, civil e processo civil.
                Expert em direito bancário, com mais de 13 anos de experiência com bancos, trabalhou
                em duas instituições bancárias antes de ser advogada e conhece os dois lados da moeda.
              </p>
              
              <p className="font-body leading-relaxed">
                Criadora do Expert direito bancário reconhecido pelo MEC. Professora da Pós graduação
                e MBA em advocacia estratégia em Direito Bancário, a primeira do Brasil.
              </p>
            </div>

            <p className="text-xl md:text-2xl text-accent font-accent font-semibold mb-8">
              Seu propósito é livrar as famílias endividadas dos abusos dos bancos.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-3xl font-heading font-bold text-accent mb-2">
                  +13 Anos de Experiência
                </p>
                <p className="font-body">
                  Criadora do curso expert direito bancário que ensina o cálculo pericial revisional
                  de juros.
                </p>
              </div>

              <div>
                <p className="text-3xl font-heading font-bold text-accent mb-2">
                  + de 10 Mil Alunos + de 9 Países
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-accent/10 p-6 rounded-xl border border-accent/30">
              <Award className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <p className="text-accent font-accent font-semibold text-lg">
                  Criadora do primeiro evento presencial de direito bancário do Brasil
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <img
              src={lawyerProfile}
              alt="Monaliza Krepe - Advogada especialista em direito bancário"
              className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerProfile;
