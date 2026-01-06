import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Quiénes Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6 leading-tight">
              Grupo <span className="text-accent">Savesta</span>
            </h2>
            <div className="text-lg text-charcoal leading-relaxed mb-8 space-y-6">
              <p>
                Grupo Savesta es una empresa dedicada a la comercialización de
                productos al por menor a través de canales digitales y puntos de
                venta físicos, con presencia activa en Estados Unidos y México.
              </p>
              <p>
                Operamos como un socio estratégico para las marcas, integrando
                distribución tradicional, comercio electrónico y logística
                propia para llevar los productos desde el origen hasta el
                consumidor final de manera eficiente, controlada y escalable.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary mb-1">
                    Presencia Internacional
                  </h4>
                  <p className="text-sm text-slate">
                    Operaciones en Estados Unidos y México
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary mb-1">
                    Modelo Integral
                  </h4>
                  <p className="text-sm text-slate">
                    Distribución, E-commerce y Logística
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg group">
              <img
                src="https://unsplash.com/photos/VCeHrtkSNL0/download"
                alt="Almacen logistico"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg group">
              <img
                src="https://unsplash.com/photos/Zl8unfiNF6M/download"
                alt="Retail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800"
                alt="Digital"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
