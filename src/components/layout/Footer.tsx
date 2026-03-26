import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = {
  "Atención al cliente": [
    { label: "Preguntas frecuentes", href: "#" },
    { label: "Seguimiento de pedidos", href: "#" },
    { label: "Devoluciones y cambios", href: "#" },
    { label: "Garantías", href: "#" },
    { label: "Términos y condiciones", href: "#" },
  ],
  "Sobre nosotros": [
    { label: "¿Quiénes somos?", href: "#" },
    { label: "Trabaja con nosotros", href: "#" },
    { label: "Prensa", href: "#" },
    { label: "Sustentabilidad", href: "#" },
  ],
  "Nuestros servicios": [
    { label: "Tarjeta EstiloStore", href: "#" },
    { label: "Despacho a domicilio", href: "#" },
    { label: "Retiro en tienda", href: "#" },
    { label: "EstiloStore Business", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.06]">
      {/* Glass layer */}
      <div className="bg-black/40 backdrop-blur-xl">
        <Container className="py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {/* Brand column */}
            <div className="col-span-2 sm:col-span-1">
              <Link href="/" className="inline-block group">
                <span className="text-2xl font-black tracking-tight text-white transition-all duration-300">
                  ESTILO
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    STORE
                  </span>
                </span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-white/35">
                Tu tienda online de moda, tecnología y hogar. Calidad y estilo en un solo lugar.
              </p>

              {/* Social links */}
              <div className="mt-5 flex items-center gap-3">
                {[
                  {
                    label: "Instagram",
                    icon: (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    icon: (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    label: "TikTok",
                    icon: (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/15 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                  {title}
                </h3>
                <ul className="space-y-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-white/30 transition-all duration-300 hover:text-white/80"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06]">
          <Container className="flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} EstiloStore. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/20">
              <Link href="#" className="transition-all duration-300 hover:text-white/50">Privacidad</Link>
              <Link href="#" className="transition-all duration-300 hover:text-white/50">Cookies</Link>
              <Link href="#" className="transition-all duration-300 hover:text-white/50">Mapa del sitio</Link>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
