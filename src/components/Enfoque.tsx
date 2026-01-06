import { Eye, Settings, BarChart3, RefreshCw } from "lucide-react";

const principios = [
  {
    icon: <Eye size={24} />,
    titulo: "Transparencia",
    descripcion: "Claridad en cada paso",
  },
  {
    icon: <Settings size={24} />,
    titulo: "Ejecución Disciplinada",
    descripcion: "Procesos estructurados",
  },
  {
    icon: <BarChart3 size={24} />,
    titulo: "Datos y Análisis",
    descripcion: "Toma de decisiones basada en mercado",
  },
  {
    icon: <RefreshCw size={24} />,
    titulo: "Optimización Continua",
    descripcion: "De canales y logística",
  },
];

export default function Enfoque() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Nuestro Enfoque
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6">
              Relaciones de largo plazo
            </h2>
            <div className="text-lg text-charcoal space-y-4 mb-8">
              <p>
                Creemos en relaciones de largo plazo basadas en transparencia y
                ejecución. Cada proyecto se aborda con una visión clara de
                crecimiento y posicionamiento.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="/images/strategy.png"
                alt="Estrategia y Analisis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {principios.map((principio) => (
              <div
                key={principio.titulo}
                className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-100"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                  {principio.icon}
                </div>
                <h3 className="font-semibold text-navy-primary mb-2">
                  {principio.titulo}
                </h3>
                <p className="text-sm text-slate">{principio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
