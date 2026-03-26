"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import {
  filterProducts,
  defaultFilters,
  type FilterState,
} from "@/lib/filterProducts";
import ProductFilters from "@/components/products/ProductFilters";
import ProductToolbar from "@/components/products/ProductToolbar";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = filterProducts(products, filters);

  function reset() {
    setFilters(defaultFilters);
  }

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent py-10">
        {/* Subtle glow orb */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-0 h-48 w-48 translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/30">
            <Link
              href="/"
              className="transition-colors hover:text-white/60"
            >
              Inicio
            </Link>
            <svg
              className="h-3 w-3 text-white/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white/50">Catálogo</span>
          </nav>

          <h1 className="text-2xl font-black tracking-tight text-white/90 sm:text-3xl">
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Catálogo
            </span>{" "}
            de productos
          </h1>
          <p className="mt-1.5 text-sm text-white/35">
            {products.length} productos disponibles · Tecnología de primera
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Toolbar */}
        <ProductToolbar
          filters={filters}
          onFiltersChange={setFilters}
          resultCount={filtered.length}
          onToggleFilters={() => setFiltersOpen((v) => !v)}
          filtersOpen={filtersOpen}
        />

        <div className="mt-6 flex gap-6">
          {/* Filters — desktop sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24">
              <ProductFilters
                filters={filters}
                onChange={setFilters}
                products={products}
              />
            </div>
          </aside>

          {/* Product grid */}
          <main className="min-w-0 flex-1">
            <ProductGrid products={filtered} onReset={reset} />
          </main>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />

          {/* Drawer — slides in from right */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] overflow-y-auto border-l border-white/10 bg-gray-950/95 p-4 shadow-2xl backdrop-blur-xl">
            <ProductFilters
              filters={filters}
              onChange={(f) => {
                setFilters(f);
              }}
              products={products}
              onClose={() => setFiltersOpen(false)}
            />

            {/* Apply button */}
            <button
              onClick={() => setFiltersOpen(false)}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-opacity hover:opacity-90"
            >
              Ver {filtered.length}{" "}
              {filtered.length === 1 ? "resultado" : "resultados"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
