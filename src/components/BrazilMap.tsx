import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Check } from "lucide-react";

// URL do arquivo TopoJSON com as formas REAIS dos estados brasileiros
const BRAZIL_TOPO_JSON = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/brazil/brazil-states.json";

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
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 900,
                center: [-52, -15]
              }}
              className="w-full h-auto"
              style={{ maxHeight: "600px" }}
            >
              <Geographies geography={BRAZIL_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isCeara = geo.properties.sigla === "CE";
                    
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isCeara ? "hsl(37, 50%, 50%)" : "hsl(37, 42%, 59%)"}
                        stroke="#FFFFFF"
                        strokeWidth={isCeara ? 2.5 : 1.5}
                        style={{
                          default: {
                            outline: "none",
                            transition: "all 0.3s"
                          },
                          hover: {
                            fill: "hsl(37, 50%, 65%)",
                            outline: "none",
                            cursor: "pointer"
                          },
                          pressed: {
                            outline: "none"
                          }
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              
              {/* Labels dos estados */}
              <Geographies geography={BRAZIL_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const centroid = geoCentroid(geo);
                    const isCeara = geo.properties.sigla === "CE";
                    
                    return (
                      <text
                        key={`${geo.rsmKey}-label`}
                        x={centroid[0]}
                        y={centroid[1]}
                        fill="#FFFFFF"
                        fontSize={isCeara ? "13" : "11"}
                        fontWeight={isCeara ? "900" : "700"}
                        textAnchor="middle"
                        style={{ pointerEvents: "none" }}
                      >
                        {geo.properties.sigla}
                      </text>
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
            
            {/* Marcador para o Ceará */}
            <div className="absolute top-[20%] right-[15%] flex items-center gap-2 pointer-events-none">
              <div className="w-3 h-3 bg-accent rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              <span className="text-sm font-accent font-semibold text-foreground bg-white/90 px-2 py-1 rounded shadow-md">
                Ceará
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Função auxiliar para calcular centroide
function geoCentroid(geography: any) {
  const coordinates = geography.geometry.coordinates;
  
  // Para polígonos simples ou multipolígonos, calculamos o centroide
  if (geography.geometry.type === "Polygon") {
    return calculatePolygonCentroid(coordinates[0]);
  } else if (geography.geometry.type === "MultiPolygon") {
    return calculatePolygonCentroid(coordinates[0][0]);
  }
  
  return [0, 0];
}

function calculatePolygonCentroid(polygon: number[][]) {
  let x = 0;
  let y = 0;
  const numPoints = polygon.length;
  
  polygon.forEach((point) => {
    x += point[0];
    y += point[1];
  });
  
  return [x / numPoints, y / numPoints];
}

export default BrazilMap;
