import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategorySection() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400/70 mb-2">
              Navega por
            </p>
            <h2 className="text-2xl font-black text-white">
              Categorías{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                destacadas
              </span>
            </h2>
          </div>
          <Link
            href="/productos"
            className="group hidden sm:flex items-center gap-1.5 text-sm font-medium text-white/35 transition-all duration-300 hover:text-indigo-400"
          >
            Ver todas
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/productos?categoria=${cat.id}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${cat.gradient} p-3 sm:p-4 flex flex-col items-center gap-2 text-center transition-all duration-300 hover:border-white/15 hover:scale-[1.06] hover:shadow-xl ${cat.glow} backdrop-blur-sm`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <span className="relative text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110">
                {cat.icon}
              </span>
              <div className="relative">
                <span className="block text-[11px] font-semibold text-white/75 group-hover:text-white transition-colors duration-300">
                  {cat.name}
                </span>
                <span className="block text-[9px] text-white/30 mt-0.5">
                  {cat.count} items
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
