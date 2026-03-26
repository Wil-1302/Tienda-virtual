import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden py-6">
      {/* Main hero card */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/90 via-[#0a0a1a] to-violet-950/90 min-h-[340px] sm:min-h-[420px] flex items-center">

          {/* Background glow orbs */}
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-600/8 blur-3xl" />

          {/* Grid lines overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-12 sm:px-14 sm:py-16 max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 backdrop-blur-sm mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
                Temporada 2026
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Tecnología del{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                futuro
              </span>
              <br />
              hoy en tus manos
            </h1>

            <p className="mt-4 max-w-md text-base text-white/50 leading-relaxed">
              Los últimos lanzamientos en smartphones, laptops y gadgets. Precios increíbles, envío en 24 horas.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/productos"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-105 hover:from-indigo-400 hover:to-violet-400"
              >
                Explorar ahora
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:text-white"
              >
                Ver ofertas
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-6">
              {[
                { value: "50K+", label: "Productos" },
                { value: "4.9★", label: "Valoración" },
                { value: "24h", label: "Envío" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-xl font-black text-white">{value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right decorative element */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-violet-500/15 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-cyan-500/10 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/20 blur-xl" />
                <span className="absolute text-5xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-banners */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            {
              icon: "🎮",
              title: "Gaming Week",
              sub: "Hasta 30% off",
              grad: "from-emerald-950/80 to-teal-950/80",
              glow: "hover:shadow-emerald-500/15",
              border: "hover:border-emerald-500/25",
              dot: "bg-emerald-400",
            },
            {
              icon: "🎧",
              title: "Audio Premium",
              sub: "Envío gratis",
              grad: "from-indigo-950/80 to-blue-950/80",
              glow: "hover:shadow-indigo-500/15",
              border: "hover:border-indigo-500/25",
              dot: "bg-indigo-400",
            },
            {
              icon: "📱",
              title: "Smartphones",
              sub: "12 cuotas 0%",
              grad: "from-violet-950/80 to-purple-950/80",
              glow: "hover:shadow-violet-500/15",
              border: "hover:border-violet-500/25",
              dot: "bg-violet-400",
              className: "hidden sm:flex",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href="/productos"
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${item.grad} p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/12 hover:shadow-lg ${item.glow} ${item.border} ${item.className ?? ""}`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <span className="relative text-3xl">{item.icon}</span>
              <div className="relative">
                <p className="font-bold text-white text-sm">{item.title}</p>
                <p className="flex items-center gap-1.5 text-xs text-white/45 mt-0.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                  {item.sub}
                </p>
              </div>
              <svg className="relative ml-auto h-4 w-4 text-white/30 transition-all duration-300 group-hover:text-white/60 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
