import Link from "next/link";
import Container from "@/components/ui/Container";

const categories = [
  { name: "Mujer", icon: "👗", glow: "hover:shadow-pink-500/20 hover:border-pink-500/30" },
  { name: "Hombre", icon: "👔", glow: "hover:shadow-blue-500/20 hover:border-blue-500/30" },
  { name: "Niños", icon: "🧸", glow: "hover:shadow-yellow-500/20 hover:border-yellow-500/30" },
  { name: "Electrónica", icon: "💻", glow: "hover:shadow-cyan-500/20 hover:border-cyan-500/30" },
  { name: "Hogar", icon: "🛋️", glow: "hover:shadow-green-500/20 hover:border-green-500/30" },
  { name: "Deportes", icon: "⚽", glow: "hover:shadow-orange-500/20 hover:border-orange-500/30" },
  { name: "Belleza", icon: "💄", glow: "hover:shadow-rose-500/20 hover:border-rose-500/30" },
  { name: "Ofertas", icon: "🔥", glow: "hover:shadow-red-500/20 hover:border-red-500/30" },
];

const banners = [
  {
    label: "Nueva temporada",
    title: "Colección Otoño 2026",
    subtitle: "Descubre las últimas tendencias en moda femenina y masculina",
    cta: "Ver colección",
    gradient: "from-indigo-950/80 via-indigo-900/60 to-violet-900/80",
    orb1: "bg-indigo-500/20",
    orb2: "bg-violet-500/15",
    badge: "from-indigo-500 to-violet-500",
    glow: "hover:shadow-indigo-500/20",
  },
  {
    label: "Hasta 50% off",
    title: "Semana de la Tecnología",
    subtitle: "Los mejores precios en laptops, smartphones y accesorios",
    cta: "Ver ofertas",
    gradient: "from-cyan-950/80 via-slate-900/60 to-blue-900/80",
    orb1: "bg-cyan-500/20",
    orb2: "bg-blue-500/15",
    badge: "from-cyan-500 to-blue-500",
    glow: "hover:shadow-cyan-500/20",
  },
];

const valueProps = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Envío rápido",
    desc: "En 24–48 hrs a todo el país",
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20 border-indigo-500/20",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Compra segura",
    desc: "Tus datos siempre protegidos",
    color: "text-emerald-400",
    glow: "shadow-emerald-500/20 border-emerald-500/20",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Devoluciones",
    desc: "30 días para cambios sin costo",
    color: "text-violet-400",
    glow: "shadow-violet-500/20 border-violet-500/20",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "12 cuotas sin interés",
    desc: "Con tarjetas seleccionadas",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20 border-cyan-500/20",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Banners */}
      <section className="py-6">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {banners.map((banner) => (
              <div
                key={banner.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${banner.gradient} p-8 sm:p-10 shadow-xl ${banner.glow} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20`}
                style={{ backdropFilter: "blur(12px)" }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

                <div className="relative z-10">
                  <span className={`inline-block rounded-full bg-gradient-to-r ${banner.badge} px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg`}>
                    {banner.label}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {banner.title}
                  </h2>
                  <p className="mt-2 max-w-xs text-sm text-white/60">
                    {banner.subtitle}
                  </p>
                  <Link
                    href="/productos"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg"
                  >
                    {banner.cta}
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>

                {/* Decorative orbs */}
                <div className={`absolute -right-8 -top-8 h-48 w-48 rounded-full ${banner.orb1} blur-2xl transition-all duration-500 group-hover:scale-110`} />
                <div className={`absolute -bottom-10 -right-4 h-32 w-32 rounded-full ${banner.orb2} blur-xl`} />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-10">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              Explorar{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                categorías
              </span>
            </h2>
            <Link
              href="/productos"
              className="text-sm font-medium text-white/40 transition-all duration-300 hover:text-indigo-400"
            >
              Ver todo →
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="/productos"
                className={`flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-white/4 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/15 hover:scale-[1.05] hover:shadow-lg ${cat.glow}`}
              >
                <span className="text-2xl sm:text-3xl">{cat.icon}</span>
                <span className="text-xs font-semibold text-white/70">{cat.name}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured products placeholder */}
      <section className="py-10">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              Lo más{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                vendido
              </span>
            </h2>
            <Link
              href="/productos"
              className="text-sm font-medium text-white/40 transition-all duration-300 hover:text-indigo-400"
            >
              Ver todo →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm"
              >
                <div className="aspect-square animate-pulse bg-white/8" />
                <div className="p-3">
                  <div className="h-3 w-3/4 animate-pulse rounded-full bg-white/10" />
                  <div className="mt-2 h-4 w-1/2 animate-pulse rounded-full bg-white/8" />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-white/25">
            Los productos estarán disponibles en el próximo bloque
          </p>
        </Container>
      </section>

      {/* Value props */}
      <section className="border-t border-white/[0.06] py-10">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {valueProps.map(({ icon, title, desc, color, glow }) => (
              <div
                key={title}
                className={`flex flex-col items-center gap-3 rounded-2xl border bg-white/4 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:scale-[1.03] hover:shadow-lg ${glow}`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-white/5 ${glow} ${color}`}>
                  {icon}
                </div>
                <h3 className="text-sm font-semibold text-white/90">{title}</h3>
                <p className="text-xs text-white/40">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
