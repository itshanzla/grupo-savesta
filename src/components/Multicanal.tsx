import { Monitor, ShoppingBag, Store, MapPin } from "lucide-react";

export default function Multicanal() {
  return (
    <section className="md:py-24 pt-0 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Presencia Multicanal
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6 leading-tight">
              Operamos de forma
              <span className="text-accent"> activa</span>
            </h2>
            <div className="text-lg text-charcoal leading-relaxed mb-8 space-y-4">
              <p>Operamos de forma activa en canales digitales y físicos.</p>
              <p>
                Esta combinación nos permite maximizar el alcance de los
                productos, adaptarnos al comportamiento del consumidor y reducir
                la dependencia de un solo canal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-navy-primary mb-2">
                Canales Digitales
              </h3>
              <p className="text-sm text-slate">
                Tienda online propia y E-commerce
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-navy-primary mb-2">
                Marketplaces
              </h3>
              <p className="text-sm text-slate">
                Estratégicos y de alto alcance
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Store className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-navy-primary mb-2">
                Canales Físicos
              </h3>
              <p className="text-sm text-slate">
                Puntos de venta y presencia física
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-navy-primary mb-2">Retail</h3>
              <p className="text-sm text-slate">
                Distribución en cadenas comerciales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
