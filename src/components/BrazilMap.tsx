import { useState } from "react";
import { Check } from "lucide-react";

const BrazilMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const states = [
    { id: "AC", name: "Acre" },
    { id: "AL", name: "Alagoas" },
    { id: "AP", name: "Amapá" },
    { id: "AM", name: "Amazonas" },
    { id: "BA", name: "Bahia" },
    { id: "CE", name: "Ceará" },
    { id: "DF", name: "Distrito Federal" },
    { id: "ES", name: "Espírito Santo" },
    { id: "GO", name: "Goiás" },
    { id: "MA", name: "Maranhão" },
    { id: "MT", name: "Mato Grosso" },
    { id: "MS", name: "Mato Grosso do Sul" },
    { id: "MG", name: "Minas Gerais" },
    { id: "PA", name: "Pará" },
    { id: "PB", name: "Paraíba" },
    { id: "PR", name: "Paraná" },
    { id: "PE", name: "Pernambuco" },
    { id: "PI", name: "Piauí" },
    { id: "RJ", name: "Rio de Janeiro" },
    { id: "RN", name: "Rio Grande do Norte" },
    { id: "RS", name: "Rio Grande do Sul" },
    { id: "RO", name: "Rondônia" },
    { id: "RR", name: "Roraima" },
    { id: "SC", name: "Santa Catarina" },
    { id: "SP", name: "São Paulo" },
    { id: "SE", name: "Sergipe" },
    { id: "TO", name: "Tocantins" },
  ];

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
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

          <div className="relative animate-fade-in">
            <svg
              viewBox="0 0 400 500"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.1))" }}
            >
              <g className="brazil-map">
                {/* Simplified Brazil map - main shape */}
                <path
                  d="M200 50 L350 150 L370 300 L320 450 L200 480 L80 450 L30 300 L50 150 Z"
                  fill="hsl(37, 42%, 59%)"
                  stroke="white"
                  strokeWidth="2"
                  className="transition-all duration-300 cursor-pointer hover:fill-[hsl(37,42%,70%)]"
                  onMouseEnter={() => setHoveredState("Brasil")}
                  onMouseLeave={() => setHoveredState(null)}
                />
                
                {/* State labels (simplified positioning) */}
                {states.slice(0, 10).map((state, index) => {
                  const angle = (index / 10) * Math.PI * 2;
                  const radius = 120;
                  const x = 200 + Math.cos(angle) * radius;
                  const y = 250 + Math.sin(angle) * radius;
                  
                  return (
                    <g key={state.id}>
                      <circle
                        cx={x}
                        cy={y}
                        r="20"
                        fill="hsl(37, 42%, 65%)"
                        stroke="white"
                        strokeWidth="2"
                        className="transition-all duration-300 cursor-pointer hover:fill-[hsl(37,42%,75%)]"
                        onMouseEnter={() => setHoveredState(state.name)}
                        onMouseLeave={() => setHoveredState(null)}
                      />
                      <text
                        x={x}
                        y={y + 5}
                        textAnchor="middle"
                        className="text-xs font-bold fill-white pointer-events-none"
                      >
                        {state.id}
                      </text>
                    </g>
                  );
                })}

                {/* Ceará highlight marker */}
                <g>
                  <circle
                    cx="280"
                    cy="180"
                    r="25"
                    fill="hsl(37, 42%, 50%)"
                    stroke="white"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                  <text
                    x="280"
                    y="185"
                    textAnchor="middle"
                    className="text-sm font-bold fill-white"
                  >
                    CE
                  </text>
                  <text
                    x="280"
                    y="215"
                    textAnchor="middle"
                    className="text-xs font-accent fill-foreground"
                  >
                    Ceará
                  </text>
                </g>
              </g>
            </svg>

            {hoveredState && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg font-accent text-sm">
                {hoveredState}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
