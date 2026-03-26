const benefits = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Envío Express",
    desc: "Recibe en 24–48 hrs en todo el país con seguimiento en tiempo real",
    color: "text-indigo-400",
    bg: "from-indigo-600/15 to-indigo-600/5",
    border: "border-indigo-500/20",
    glow: "hover:shadow-indigo-500/15",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Compra 100% Segura",
    desc: "Encriptación SSL y protección de datos en cada transacción",
    color: "text-emerald-400",
    bg: "from-emerald-600/15 to-emerald-600/5",
    border: "border-emerald-500/20",
    glow: "hover:shadow-emerald-500/15",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "30 Días para Devolver",
    desc: "Cambia o devuelve sin costo con nuestro programa de garantía",
    color: "text-violet-400",
    bg: "from-violet-600/15 to-violet-600/5",
    border: "border-violet-500/20",
    glow: "hover:shadow-violet-500/15",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "12 Cuotas Sin Interés",
    desc: "Paga en cuotas con las principales tarjetas de crédito",
    color: "text-cyan-400",
    bg: "from-cyan-600/15 to-cyan-600/5",
    border: "border-cyan-500/20",
    glow: "hover:shadow-cyan-500/15",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Divider line */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-white/20">
            Por qué elegirnos
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {benefits.map(({ icon, title, desc, color, bg, border, glow }) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${bg} ${border} p-5 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${glow} hover:border-white/20`}
            >
              {/* Subtle background shimmer on hover */}
              <div className="absolute inset-0 rounded-2xl bg-white/0 transition-all duration-500 group-hover:bg-white/[0.02]" />

              <div className={`relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br ${bg} ${border} ${color} transition-transform duration-300 group-hover:scale-110`}>
                {icon}
              </div>
              <h3 className="relative text-sm font-bold text-white/85 group-hover:text-white transition-colors duration-300">
                {title}
              </h3>
              <p className="relative mt-1.5 text-xs text-white/35 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
