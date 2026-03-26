import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice, getDiscount } from "@/lib/formatPrice";

const badgeConfig = {
  nuevo: { label: "Nuevo", style: "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-500/40" },
  oferta: { label: "Oferta", style: "bg-gradient-to-r from-rose-500 to-pink-500 shadow-rose-500/40" },
  top: { label: "Top", style: "bg-gradient-to-r from-amber-500 to-orange-500 shadow-amber-500/40" },
  agotado: { label: "Agotado", style: "bg-gradient-to-r from-slate-600 to-slate-500 shadow-slate-500/20" },
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? getDiscount(product.originalPrice, product.price)
    : null;

  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <Link href={`/productos/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-white/15 hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40">

        {/* Image area */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Badge */}
          {badge && (
            <div className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg ${badge.style}`}>
              {badge.label}
            </div>
          )}

          {/* Discount pill */}
          {discount && (
            <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm border border-white/10">
              -{discount}%
            </div>
          )}

          {/* Quick action — visible on hover */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
              Ver producto →
            </span>
          </div>
        </div>

        {/* Info area */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
            {product.brand}
          </p>

          {/* Name */}
          <h3 className="text-sm font-semibold text-white/85 leading-snug line-clamp-2 group-hover:text-white transition-colors duration-300">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? "text-amber-400"
                      : "text-white/15"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[10px] text-white/30">({product.reviewCount.toLocaleString()})</span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-end gap-2">
            <span className="text-lg font-black bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-white/25 line-through pb-0.5">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Installments hint */}
          <p className="mt-1 text-[10px] text-white/30">
            12 cuotas de{" "}
            <span className="text-white/50 font-medium">
              {formatPrice(Math.round(product.price / 12))}
            </span>
          </p>
        </div>

        {/* Glow border effect on hover */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/10 pointer-events-none" />
      </div>
    </Link>
  );
}
