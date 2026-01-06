import { Check } from "lucide-react";

export default function Logistica() {
  const beneficios = [
    "Cumplir estándares de servicio altos",
    "Escalar operaciones sin perder eficiencia",
    "Proteger la reputación de las marcas que representamos",
  ];

  return (
    <section id="logistica" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800"
              alt="Logistica de ultima milla"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/30 to-transparent" />
          </div>

          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Infraestructura Propia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6 leading-tight">
              Logística Propia de
              <span className="text-accent"> Última Milla</span>
            </h2>
            <div className="text-lg text-charcoal leading-relaxed mb-8 space-y-4">
              <p>
                Contamos con logística propia de última milla, lo que nos
                permite mantener control total sobre la entrega, optimizar
                tiempos, reducir incidencias y ofrecer una mejor experiencia al
                cliente final.
              </p>
              <p>Nuestra infraestructura logística es un pilar clave para:</p>
            </div>

            <ul className="space-y-3">
              {beneficios.map((beneficio) => (
                <li key={beneficio} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-accent" />
                  </span>
                  <span className="text-charcoal">{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
