import type { Product } from "@/types/product";
import ProductCard from "@/components/ui/ProductCard";

interface ProductGridProps {
  products: Product[];
  onReset?: () => void;
}

export default function ProductGrid({ products, onReset }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 text-center">
        {/* Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
          <svg
            className="h-9 w-9 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <h3 className="mb-2 text-base font-semibold text-white/60">
          Sin resultados
        </h3>
        <p className="mb-6 max-w-xs text-sm text-white/30">
          Ningún producto coincide con los filtros aplicados. Intenta ajustar tu
          búsqueda o limpiar los filtros.
        </p>

        {onReset && (
          <button
            onClick={onReset}
            className="rounded-xl border border-indigo-400/30 bg-indigo-500/15 px-5 py-2.5 text-sm font-medium text-indigo-300 transition-all duration-200 hover:border-indigo-400/50 hover:bg-indigo-500/25 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
          >
            Limpiar filtros
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
