import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// Register the web component that renders an accurate Brazil SVG map
// O web component é carregado via CDN em index.html

const BrazilMap = () => {
  // Interatividade: capturar seleção de estado via evento do web component
  const mapRef = useRef<HTMLElement | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const stateNames: Record<string, string> = {
    AC: "Acre",
    AL: "Alagoas",
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goiás",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul",
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná",
    PE: "Pernambuco",
    PI: "Piauí",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraima",
    SC: "Santa Catarina",
    SP: "São Paulo",
    SE: "Sergipe",
    TO: "Tocantins",
  };

  useEffect(() => {
    const el = mapRef.current as HTMLElement | null;
    if (!el) return;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setSelectedState(detail);
    };
    el.addEventListener("onStateSelected", handler as EventListener);
    return () => {
      el.removeEventListener("onStateSelected", handler as EventListener);
    };
  }, []);

  return (
    <section className="py-0 bg-[#eff1f3]">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <div className="grid md:grid-cols-[1fr_1.8fr] lg:grid-cols-[1fr_2.2fr] xl:grid-cols-[1fr_2.6fr] gap-2 md:gap-3 lg:gap-4 items-center min-h-[500px] md:min-h-[420px] lg:min-h-[550px]">
          <div className="animate-fade-in self-center justify-self-start max-w-[800px]">
            <h3 className="text-[40px] md:text-[44px] leading-tight font-accent font-semibold mb-8 text-[#6c4a2f]">
              Atendimento Online para Todos os Estados da Federação
            </h3>
            <div className="space-y-4">
              {["100% Online", "Rápido", "Sem Burocracia"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#6c4a2f] flex-shrink-0" />
                  <span className="text-[20px] font-accent text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa do Brasil fiel, com estados e siglas, cor dourada e interativo */}
          <div className="animate-fade-in relative justify-self-end flex justify-end overflow-visible">
            <brazil-component
              id="brazil-accurate-map"
              ref={mapRef as any}
              className="transition-transform duration-300 ease-out sm:scale-[2.4] md:scale-[3.6] lg:scale-[5.0] xl:scale-[6.0] 2xl:scale-[7.2] origin-right"
              style={{
                width: "400%",
                maxWidth: "800px",
                display: "block",
                marginLeft: "auto",
                transition: "filter 300ms ease, transform 300ms ease",
                willChange: "transform",
                // Color variables to match the reference visual
                // @ts-ignore - CSS custom properties
                "--brazil-bg-color": "#E6C57E", // dourado claro
                // Dark scheme variables to ensure consistent golden colors
                // @ts-ignore
                "--brazil-bg-color-dark": "#E6C57E",
                // @ts-ignore
                "--brazil-bg-hover-color": "#B0842C", // dourado escuro na interação
                // @ts-ignore
                "--brazil-bg-hover-color-dark": "#B0842C",
                // @ts-ignore
                "--brazil-stroke-color": "#ffffff",
                // @ts-ignore
                "--brazil-stroke-color-dark": "#ffffff",
                // @ts-ignore
                "--brazil-stroke-hover-color": "#ffffff",
                // @ts-ignore
                "--brazil-stroke-hover-color-dark": "#ffffff",
                // @ts-ignore
                "--brazil-acronym-color": "#ffffff",
                // @ts-ignore
                "--brazil-acronym-color-dark": "#ffffff",
                // @ts-ignore
                "--brazil-acronym-hover-color": "#ffffff",
                // @ts-ignore
                "--brazil-acronym-hover-color-dark": "#ffffff",
                // @ts-ignore
                "--brazil-acronym-font-family": "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
              } as React.CSSProperties}
            ></brazil-component>

            {selectedState && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#6c4a2f] text-white px-6 py-2.5 rounded-full shadow-lg font-accent text-base md:text-lg z-10">
                {stateNames[selectedState] ?? selectedState}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
