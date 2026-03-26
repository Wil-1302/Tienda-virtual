import HeroBanner from "@/components/home/HeroBanner";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BenefitsSection from "@/components/home/BenefitsSection";
import { featuredProducts, newArrivals, onSale } from "@/data/products";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <CategorySection />

      <FeaturedProducts
        title="Lo más vendido"
        subtitle="Trending ahora"
        accent="from-white to-white/80"
        products={featuredProducts}
      />

      {/* Promo strip */}
      <div className="py-3">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/60 via-violet-950/60 to-indigo-950/60 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-8 overflow-x-auto scrollbar-hide px-8 py-4">
              {[
                "🚀 Envío gratis sobre $50.000",
                "⚡ Hasta 50% en tecnología",
                "🎮 Gaming Week activa",
                "💳 12 cuotas sin interés",
                "🔒 Compra 100% segura",
              ].map((item) => (
                <span key={item} className="whitespace-nowrap text-xs font-medium text-white/45">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FeaturedProducts
        title="Nuevos lanzamientos"
        subtitle="Recién llegados"
        accent="from-emerald-400 to-cyan-400"
        products={newArrivals}
      />

      <FeaturedProducts
        title="Ofertas de la semana"
        subtitle="Solo por hoy"
        accent="from-rose-400 to-pink-400"
        products={onSale}
      />

      <BenefitsSection />
    </div>
  );
}
