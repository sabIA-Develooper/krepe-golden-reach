import { useState } from "react";
import { Check, MapPin } from "lucide-react";

const BrazilMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const states = [
    { id: "AC", name: "Acre", x: 110, y: 320 },
    { id: "AL", name: "Alagoas", x: 470, y: 300 },
    { id: "AP", name: "Amapá", x: 280, y: 80 },
    { id: "AM", name: "Amazonas", x: 180, y: 180 },
    { id: "BA", name: "Bahia", x: 450, y: 350 },
    { id: "CE", name: "Ceará", x: 460, y: 200, highlighted: true },
    { id: "DF", name: "Distrito Federal", x: 400, y: 410 },
    { id: "ES", name: "Espírito Santo", x: 465, y: 475 },
    { id: "GO", name: "Goiás", x: 380, y: 420 },
    { id: "MA", name: "Maranhão", x: 400, y: 180 },
    { id: "MT", name: "Mato Grosso", x: 290, y: 380 },
    { id: "MS", name: "Mato Grosso do Sul", x: 310, y: 500 },
    { id: "MG", name: "Minas Gerais", x: 420, y: 470 },
    { id: "PA", name: "Pará", x: 300, y: 180 },
    { id: "PB", name: "Paraíba", x: 475, y: 260 },
    { id: "PR", name: "Paraná", x: 350, y: 550 },
    { id: "PE", name: "Pernambuco", x: 470, y: 270 },
    { id: "PI", name: "Piauí", x: 425, y: 240 },
    { id: "RJ", name: "Rio de Janeiro", x: 445, y: 510 },
    { id: "RN", name: "Rio Grande do Norte", x: 475, y: 230 },
    { id: "RS", name: "Rio Grande do Sul", x: 330, y: 640 },
    { id: "RO", name: "Rondônia", x: 180, y: 320 },
    { id: "RR", name: "Roraima", x: 200, y: 70 },
    { id: "SC", name: "Santa Catarina", x: 360, y: 590 },
    { id: "SP", name: "São Paulo", x: 390, y: 520 },
    { id: "SE", name: "Sergipe", x: 470, y: 320 },
    { id: "TO", name: "Tocantins", x: 380, y: 310 },
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
            <svg
              viewBox="0 0 550 700"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.1))" }}
            >
              {/* REGIÃO NORTE */}
              
              {/* Roraima - RR */}
              <path
                d="M 200,40 L 250,50 L 260,90 L 240,110 L 200,105 L 180,80 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Roraima")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Amapá - AP */}
              <path
                d="M 280,50 L 320,60 L 330,100 L 310,120 L 280,115 L 270,90 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Amapá")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Amazonas - AM */}
              <path
                d="M 90,140 L 200,120 L 250,150 L 280,200 L 250,260 L 180,280 L 120,250 L 90,200 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Amazonas")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Pará - PA */}
              <path
                d="M 250,120 L 350,130 L 380,180 L 380,240 L 350,260 L 280,250 L 250,200 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Pará")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Acre - AC */}
              <path
                d="M 60,290 L 130,280 L 150,320 L 140,360 L 90,365 L 60,340 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Acre")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Rondônia - RO */}
              <path
                d="M 140,280 L 220,270 L 240,320 L 230,360 L 180,365 L 150,340 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Rondônia")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Tocantins - TO */}
              <path
                d="M 350,260 L 410,270 L 420,350 L 400,400 L 360,390 L 340,330 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Tocantins")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* REGIÃO NORDESTE */}

              {/* Maranhão - MA */}
              <path
                d="M 380,160 L 450,150 L 470,200 L 450,240 L 400,235 L 380,190 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Maranhão")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Piauí - PI */}
              <path
                d="M 410,230 L 470,220 L 480,270 L 460,300 L 420,295 L 410,260 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Piauí")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Ceará - CE (DESTACADO) */}
              <path
                d="M 450,170 L 510,165 L 520,210 L 500,240 L 460,235 L 455,195 Z"
                fill="hsl(37, 50%, 50%)"
                stroke="white"
                strokeWidth="3"
                className="transition-all duration-300 cursor-pointer hover:brightness-110 drop-shadow-lg"
                onMouseEnter={() => setHoveredState("Ceará")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Rio Grande do Norte - RN */}
              <path
                d="M 500,205 L 530,200 L 540,230 L 525,245 L 500,240 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Rio Grande do Norte")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Paraíba - PB */}
              <path
                d="M 500,245 L 530,240 L 540,270 L 520,280 L 500,270 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Paraíba")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Pernambuco - PE */}
              <path
                d="M 480,260 L 520,255 L 530,300 L 510,320 L 475,310 L 470,280 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Pernambuco")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Alagoas - AL */}
              <path
                d="M 490,310 L 520,305 L 525,335 L 510,345 L 490,335 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Alagoas")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Sergipe - SE */}
              <path
                d="M 485,330 L 510,325 L 515,350 L 500,360 L 485,350 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Sergipe")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Bahia - BA */}
              <path
                d="M 410,295 L 485,280 L 500,350 L 480,420 L 430,430 L 400,380 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Bahia")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* REGIÃO CENTRO-OESTE */}

              {/* Mato Grosso - MT */}
              <path
                d="M 230,320 L 340,310 L 360,380 L 340,440 L 270,450 L 240,390 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Mato Grosso")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Goiás - GO */}
              <path
                d="M 350,380 L 420,370 L 440,450 L 410,490 L 360,480 L 340,420 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Goiás")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Distrito Federal - DF */}
              <circle
                cx="400"
                cy="430"
                r="8"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Distrito Federal")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Mato Grosso do Sul - MS */}
              <path
                d="M 270,460 L 360,450 L 370,520 L 350,560 L 290,560 L 260,510 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Mato Grosso do Sul")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* REGIÃO SUDESTE */}

              {/* Minas Gerais - MG */}
              <path
                d="M 400,430 L 480,420 L 500,480 L 480,530 L 420,540 L 390,500 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Minas Gerais")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Espírito Santo - ES */}
              <path
                d="M 480,470 L 510,465 L 515,500 L 500,510 L 480,500 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Espírito Santo")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Rio de Janeiro - RJ */}
              <path
                d="M 450,520 L 490,515 L 495,545 L 475,555 L 450,545 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Rio de Janeiro")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* São Paulo - SP */}
              <path
                d="M 360,500 L 450,490 L 460,540 L 430,570 L 370,565 L 350,530 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("São Paulo")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* REGIÃO SUL */}

              {/* Paraná - PR */}
              <path
                d="M 300,540 L 380,530 L 400,580 L 380,610 L 320,610 L 290,575 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Paraná")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Santa Catarina - SC */}
              <path
                d="M 310,610 L 395,600 L 410,630 L 390,650 L 330,650 L 305,635 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Santa Catarina")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Rio Grande do Sul - RS */}
              <path
                d="M 280,640 L 360,630 L 380,670 L 360,690 L 300,690 L 270,670 Z"
                fill="hsl(37, 42%, 59%)"
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer hover:brightness-110"
                onMouseEnter={() => setHoveredState("Rio Grande do Sul")}
                onMouseLeave={() => setHoveredState(null)}
              />

              {/* Estado labels */}
              {states.map((state) => (
                <text
                  key={state.id}
                  x={state.x}
                  y={state.y}
                  className="text-white text-[11px] font-bold pointer-events-none"
                  textAnchor="middle"
                  style={{ 
                    fontSize: state.highlighted ? "13px" : "11px",
                    fontWeight: state.highlighted ? "900" : "700"
                  }}
                >
                  {state.id}
                </text>
              ))}

              {/* Ceará marker */}
              <g>
                <MapPin
                  x="455"
                  y="150"
                  className="w-6 h-6 text-accent animate-pulse"
                  fill="hsl(37, 50%, 50%)"
                />
                <text
                  x="490"
                  y="155"
                  className="text-foreground text-xs font-accent font-semibold"
                >
                  Ceará
                </text>
              </g>
            </svg>

            {hoveredState && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-accent text-sm z-10">
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
