import { Check } from "lucide-react";

const razones = [
  "Presencia operativa en Estados Unidos y México",
  "Modelo multicanal probado",
  "Infraestructura logística propia",
  "Enfoque estratégico, no solo comercial",
  "Capacidad de escalar marcas en mercados competitivos",
];

export default function PorQueSavesta() {
  return (
    <section className="py-24 bg-navy-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Por Que Grupo Savesta
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Resultados, no promesas
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {razones.map((razon) => (
              <li
                key={razon}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Check size={16} className="text-accent" />
                </span>
                <span className="text-white font-medium">{razon}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto">
            "No solo vendemos productos: construimos crecimiento sostenible para
            las marcas."
          </p>
        </div>
      </div>
    </section>
  );
}
