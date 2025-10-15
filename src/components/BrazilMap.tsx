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
              <svg 
                viewBox="0 0 1000 1200" 
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* RORAIMA (RR) */}
                <path d="M 420,50 L 480,45 L 510,80 L 500,120 L 460,115 L 410,95 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="460" y="90" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">RR</text>
                
                {/* AMAPÁ (AP) */}
                <path d="M 520,60 L 580,70 L 600,120 L 570,150 L 520,130 L 510,80 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="550" y="110" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">AP</text>
                
                {/* AMAZONAS (AM) - Maior estado */}
                <path d="M 180,130 L 420,120 L 460,180 L 480,260 L 430,320 L 360,310 L 280,290 L 200,240 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="350" y="230" fill="white" fontSize="22" fontWeight="bold" textAnchor="middle">AM</text>
                
                {/* PARÁ (PA) */}
                <path d="M 480,140 L 600,150 L 650,230 L 630,310 L 570,340 L 500,320 L 480,260 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="560" y="250" fill="white" fontSize="22" fontWeight="bold" textAnchor="middle">PA</text>
                
                {/* ACRE (AC) */}
                <path d="M 140,310 L 200,295 L 240,330 L 220,380 L 170,365 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="190" y="345" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">AC</text>
                
                {/* RONDÔNIA (RO) */}
                <path d="M 240,330 L 360,315 L 390,380 L 360,430 L 290,410 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="320" y="380" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">RO</text>
                
                {/* MATO GROSSO (MT) */}
                <path d="M 390,390 L 540,410 L 570,520 L 540,630 L 450,600 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="490" y="520" fill="white" fontSize="22" fontWeight="bold" textAnchor="middle">MT</text>
                
                {/* TOCANTINS (TO) */}
                <path d="M 570,350 L 630,370 L 650,490 L 620,580 L 570,560 L 540,450 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="600" y="480" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">TO</text>
                
                {/* MARANHÃO (MA) */}
                <path d="M 650,240 L 740,260 L 760,340 L 730,390 L 660,370 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="705" y="325" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">MA</text>
                
                {/* PIAUÍ (PI) */}
                <path d="M 730,400 L 770,420 L 770,500 L 740,540 L 690,520 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="740" y="475" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">PI</text>
                
                {/* CEARÁ (CE) - DESTACADO */}
                <path d="M 760,350 L 850,370 L 870,440 L 830,480 L 770,460 Z" 
                      fill="#D4AF37" stroke="white" strokeWidth="4" className="hover:fill-[#E5C158] transition-colors cursor-pointer drop-shadow-lg"/>
                <text x="820" y="425" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">CE</text>
                
                {/* RIO GRANDE DO NORTE (RN) */}
                <path d="M 870,375 L 930,390 L 930,430 L 880,440 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="900" y="415" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">RN</text>
                
                {/* PARAÍBA (PB) */}
                <path d="M 880,445 L 930,455 L 930,490 L 890,495 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="905" y="475" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">PB</text>
                
                {/* PERNAMBUCO (PE) */}
                <path d="M 830,490 L 890,500 L 880,550 L 820,535 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="855" y="525" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">PE</text>
                
                {/* ALAGOAS (AL) */}
                <path d="M 880,555 L 930,565 L 920,605 L 880,595 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="900" y="585" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">AL</text>
                
                {/* SERGIPE (SE) */}
                <path d="M 865,610 L 905,620 L 895,655 L 865,645 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="885" y="640" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">SE</text>
                
                {/* BAHIA (BA) */}
                <path d="M 740,550 L 865,565 L 880,660 L 840,760 L 750,740 L 680,670 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="790" y="650" fill="white" fontSize="22" fontWeight="bold" textAnchor="middle">BA</text>
                
                {/* GOIÁS (GO) */}
                <path d="M 570,590 L 680,610 L 700,720 L 640,760 L 570,730 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="630" y="680" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">GO</text>
                
                {/* DISTRITO FEDERAL (DF) */}
                <circle cx="655" cy="665" r="20" fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="655" y="673" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">DF</text>
                
                {/* MATO GROSSO DO SUL (MS) */}
                <path d="M 450,640 L 570,660 L 570,790 L 500,850 L 420,820 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="510" y="760" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">MS</text>
                
                {/* MINAS GERAIS (MG) */}
                <path d="M 700,730 L 840,750 L 850,840 L 780,890 L 680,870 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="770" y="820" fill="white" fontSize="22" fontWeight="bold" textAnchor="middle">MG</text>
                
                {/* ESPÍRITO SANTO (ES) */}
                <path d="M 850,850 L 900,860 L 890,920 L 850,910 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="873" y="895" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">ES</text>
                
                {/* RIO DE JANEIRO (RJ) */}
                <path d="M 780,900 L 850,915 L 830,970 L 780,955 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="810" y="940" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">RJ</text>
                
                {/* SÃO PAULO (SP) */}
                <path d="M 640,880 L 780,900 L 760,970 L 660,950 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="710" y="930" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">SP</text>
                
                {/* PARANÁ (PR) */}
                <path d="M 540,880 L 660,900 L 640,990 L 550,970 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="600" y="940" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">PR</text>
                
                {/* SANTA CATARINA (SC) */}
                <path d="M 550,1000 L 680,1020 L 670,1080 L 560,1060 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="615" y="1050" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">SC</text>
                
                {/* RIO GRANDE DO SUL (RS) */}
                <path d="M 490,1070 L 650,1090 L 630,1180 L 540,1200 L 450,1150 Z" 
                      fill="#C9A566" stroke="white" strokeWidth="3" className="hover:fill-[#D4AF37] transition-colors cursor-pointer"/>
                <text x="560" y="1140" fill="white" fontSize="22" fontWeight="bold" textAnchor="middle">RS</text>
              </svg>
              
              {/* Marcador Ceará */}
              <div className="absolute top-[35%] right-[8%] flex items-center gap-2 z-10">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-[#D4AF37] rounded-full animate-ping opacity-75"></div>
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
