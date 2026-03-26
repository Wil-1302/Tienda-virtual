import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/types/product";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  accent?: string;
  products: Product[];
  viewAllHref?: string;
}

export default function FeaturedProducts({
  title,
  subtitle,
  accent = "from-indigo-400 to-violet-400",
  products,
  viewAllHref = "/productos",
}: FeaturedProductsProps) {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-7 flex items-end justify-between">
          <div>
            {subtitle && (
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400/70 mb-2">
                {subtitle}
              </p>
            )}
            <h2 className="text-2xl font-black text-white">
              <span className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
                {title}
              </span>
            </h2>
          </div>
          <Link
            href={viewAllHref}
            className="group hidden sm:flex items-center gap-1.5 text-sm font-medium text-white/35 transition-all duration-300 hover:text-indigo-400"
          >
            Ver todos
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:text-white"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  );
}
