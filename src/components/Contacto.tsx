import { ArrowRight } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
          Trabajemos Juntos
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6">
          Tu socio indicado
        </h2>
        <p className="text-lg text-charcoal mb-10 max-w-2xl mx-auto">
          Si buscas un socio que entienda el mercado, domine los canales y
          cuente con la infraestructura necesaria para escalar tu marca, Grupo
          Savesta es el aliado indicado.
        </p>
        <a
          href="mailto:contacto@gruposavesta.com"
          className="inline-flex items-center gap-2 bg-navy-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-navy-secondary transition-all group"
        >
          Contactanos
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </section>
  );
}
