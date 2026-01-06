import { ShoppingCart, Store, BarChart3, Truck, Package } from "lucide-react";

const servicios = [
  {
    icon: <ShoppingCart size={24} />,
    titulo: "Venta Directa",
    descripcion: "Al consumidor final",
  },
  {
    icon: <Store size={24} />,
    titulo: "Distribución",
    descripcion: "En canales físicos y digitales",
  },
  {
    icon: <Package size={24} />,
    titulo: "Gestión de Ventas",
    descripcion: "En ecommerce y marketplaces",
  },
  {
    icon: <BarChart3 size={24} />,
    titulo: "Estrategias Comerciales",
    descripcion: "Desarrollo y ejecución específica",
  },
  {
    icon: <Truck size={24} />,
    titulo: "Logística Propia",
    descripcion: "De última milla",
  },
];

export default function QueHacemos() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Qué Hacemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6">
            Modelo Integral
          </h2>
          <div className="text-lg text-charcoal max-w-3xl mx-auto space-y-4">
            <p>
              En Grupo Savesta conectamos marcas con consumidores mediante un
              modelo integral.
            </p>
            <p className="font-medium text-navy-primary">
              Nuestro enfoque está orientado a resultados, eficiencia operativa
              y crecimiento a largo plazo.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                {servicio.icon}
              </div>
              <div>
                <h3 className="font-semibold text-navy-primary mb-1">
                  {servicio.titulo}
                </h3>
                <p className="text-sm text-slate">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
