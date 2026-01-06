import {
  ArrowRight,
  ArrowDown,
  MapPin,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-navy-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/30824313/pexels-photo-30824313.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Centro de distribucion"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-primary via-navy-primary/95 lg:via-navy-primary/80 to-navy-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & Buttons */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-gray-200 text-sm font-medium tracking-wide">
                  Logística & Distribución Internacional
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Impulsamos marcas a crecer
                <span className="block mt-2 pb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  mercados estratégicos
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 border-l-4 border-accent pl-6 bg-gradient-to-r from-white/5 to-transparent py-4 pr-4 rounded-r-lg "
            >
              Infraestructura propia y tecnología avanzada para escalar tu
              negocio en{" "}
              <span className="text-white font-medium">
                Estados Unidos y México
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-row flex-wrap gap-4"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/25 group"
              >
                Comenzar Ahora
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Servicios
                <ArrowDown size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col gap-6 mt-8 lg:mt-0"
          >
            {[
              {
                icon: <MapPin size={32} />,
                title: "USA & MX",
                subtitle: "Presencia Binacional",
                desc: "Operación directa en ambos países.",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "+200%",
                subtitle: "Crecimiento Promedio",
                desc: "Marcas escaladas con éxito.",
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "End-to-End",
                subtitle: "Control Total",
                desc: "Desde almacén hasta cliente final.",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors transform hover:-translate-x-2 duration-300"
              >
                <div className="p-4 bg-accent/20 rounded-xl text-accent">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {stat.title}
                  </h3>
                  <p className="text-accent font-medium text-sm uppercase tracking-wider mb-1">
                    {stat.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm hidden sm:block">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
