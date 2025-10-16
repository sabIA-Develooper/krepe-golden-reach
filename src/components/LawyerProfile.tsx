import { Award } from "lucide-react";
import lawyerProfile from "@/assets/lawyer-profile.png";

const LawyerProfile = () => {
  return (
    <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-heading font-bold mb-4 sm:mb-6 text-accent">
              Quem é Monaliza Krepe?
            </h2>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base font-body leading-relaxed">
                Monaliza Krepe é advogada, pós-graduada em direito bancário, civil e processo civil.
                Expert em direito bancário, com mais de 13 anos de experiência com bancos, trabalhou
                em duas instituições bancárias antes de ser advogada e conhece os dois lados da moeda.
              </p>
              
              <p className="text-sm sm:text-base font-body leading-relaxed">
                Criadora do Expert direito bancário reconhecido pelo MEC. Professora da Pós graduação
                e MBA em advocacia estratégia em Direito Bancário, a primeira do Brasil.
              </p>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-accent font-accent font-semibold mb-6 sm:mb-8 leading-tight">
              Seu propósito é livrar as famílias endividadas dos abusos dos bancos.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-1 sm:mb-2">
                  +13 Anos de Experiência
                </p>
                <p className="text-sm sm:text-base font-body">
                  Criadora do curso expert direito bancário que ensina o cálculo pericial revisional
                  de juros.
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-1 sm:mb-2">
                  + de 10 Mil Alunos + de 9 Países
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 bg-accent/10 p-4 sm:p-6 rounded-xl border border-accent/30">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-accent flex-shrink-0" />
              <div>
                <p className="text-accent font-accent font-semibold text-base sm:text-lg leading-tight">
                  Criadora do primeiro evento presencial de direito bancário do Brasil
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <img
              src={lawyerProfile}
              alt="Monaliza Krepe - Advogada especialista em direito bancário"
              className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerProfile;
