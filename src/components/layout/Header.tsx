import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Promo bar */}
      <div className="bg-gradient-to-r from-indigo-600/90 via-violet-600/90 to-indigo-600/90 backdrop-blur-sm py-2 text-center text-xs text-white/90">
        Envío gratis en compras sobre{" "}
        <span className="font-bold text-white">$50.000</span>
        <span className="mx-4 hidden sm:inline text-white/40">|</span>
        <span className="hidden sm:inline">Hasta 12 cuotas sin interés con tarjetas seleccionadas</span>
      </div>

      {/* Main header — glass */}
      <div className="glass-strong border-b border-white/[0.07]">
        <Container>
          <div className="flex h-16 items-center gap-4 sm:gap-6">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="text-xl font-black tracking-tight text-white transition-all duration-300 group-hover:glow-text-primary">
                ESTILO
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  STORE
                </span>
              </span>
            </Link>

            {/* Search bar */}
            <div className="flex flex-1 items-center">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar productos, marcas y más..."
                  className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-5 pr-12 text-sm text-white/90 outline-none transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/8 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-white/30 backdrop-blur-sm"
                  readOnly
                />
                <button
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 p-2 text-white transition-all duration-300 hover:from-indigo-400 hover:to-violet-400 hover:shadow-lg hover:shadow-indigo-500/30"
                  aria-label="Buscar"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex flex-shrink-0 items-center gap-1">
              {/* Account */}
              <Link
                href="#"
                className="flex flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-white/50 transition-all duration-300 hover:bg-white/8 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="hidden text-[10px] font-medium sm:block">Mi cuenta</span>
              </Link>

              {/* Cart */}
              <Link
                href="/carrito"
                className="relative flex flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-white/50 transition-all duration-300 hover:bg-white/8 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span className="hidden text-[10px] font-medium sm:block">Carrito</span>
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-[9px] font-bold text-white shadow-lg shadow-indigo-500/40">
                  0
                </span>
              </Link>
            </div>

          </div>
        </Container>
      </div>

      {/* Category nav — glass */}
      <nav className="glass border-b border-white/[0.06]">
        <Container>
          <ul className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {[
              "Mujer",
              "Hombre",
              "Niños",
              "Electrónica",
              "Hogar",
              "Deportes",
              "Belleza",
              "Ofertas",
            ].map((cat) => (
              <li key={cat}>
                <Link
                  href="/productos"
                  className={`block whitespace-nowrap px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-indigo-400 ${
                    cat === "Ofertas"
                      ? "font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"
                      : "text-white/50"
                  }`}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
