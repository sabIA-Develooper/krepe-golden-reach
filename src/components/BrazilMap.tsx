import { Check } from "lucide-react";

const BrazilMap = () => {
  return (
    <section className="py-20 bg-[hsl(37,30%,85%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Experiência e Profissionalismo
          </h2>
          <p className="text-foreground font-body max-w-3xl mx-auto">
            Nossa luta é por você que já teve algum direito ferido ou se sentiu lesado na relação
            entre você e seu banco. Atuamos em prol daqueles que foram enganados ou colocados em uma
            situação da qual não imaginavam.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 animate-fade-in">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Atendimento Online para Todos os Estados da Federação
            </h3>
            <div className="space-y-3">
              {["100% Online", "Rápido", "Sem Burocracia"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg font-accent font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 bg-[#E5E5E5] p-8 rounded-2xl animate-fade-in relative">
            <div className="relative w-full max-w-2xl mx-auto">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Brazil_states_blank.svg"
                alt="Mapa do Brasil com todos os estados"
                className="w-full h-auto opacity-90"
                style={{
                  filter: 'hue-rotate(25deg) saturate(0.7) brightness(0.82) contrast(1.1)'
                }}
              />
              
              {/* Overlay para dar tom dourado */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(201, 165, 102, 0.25), rgba(184, 151, 106, 0.25))',
                  mixBlendMode: 'multiply'
                }}
              />
              
              {/* Marcador do Ceará com animação */}
              <div className="absolute top-[28%] right-[12%] flex items-center gap-2 z-10">
                <div className="relative">
                  <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-accent rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-accent font-bold text-foreground bg-white px-3 py-1.5 rounded shadow-md whitespace-nowrap">
                  Ceará
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
