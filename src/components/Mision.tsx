import { Target, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Mision() {
  return (
    <section className="md:py-24 pt-0 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Nuestra Misión
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6">
              Posicionar, Escalar y Consolidar
            </h2>
            <div className="text-lg text-charcoal max-w-4xl mx-auto space-y-4">
              <p>
                Ayudar a las empresas a posicionar, escalar y consolidar sus
                marcas en los mercados donde tenemos presencia —Estados Unidos y
                México— a través de canales de distribución tradicionales y
                medios tecnológicos, como nuestra tienda online y los
                principales marketplaces.
              </p>
              <p>
                Trabajamos para que cada marca con la que colaboramos tenga
                acceso a una infraestructura comercial robusta, visibilidad
                estratégica y una operación logística confiable que impulse su
                crecimiento sostenido.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-7 h-7 text-accent" />,
              title: "Infraestructura comercial robusta",
              desc: "Acceso a una red de distribución establecida para soportar el crecimiento de tu marca.",
            },
            {
              icon: <TrendingUp className="w-7 h-7 text-accent" />,
              title: "Visibilidad estratégica",
              desc: "Posicionamiento en canales clave para maximizar el alcance y reconocimiento.",
            },
            {
              icon: <Globe className="w-7 h-7 text-accent" />,
              title: "Operación logística confiable",
              desc: "Gestión eficiente y controlada desde el origen hasta el cliente final.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                {item.title}
              </h3>
              <p className="text-charcoal opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
