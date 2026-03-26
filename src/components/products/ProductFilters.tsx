"use client";

import type { Product } from "@/types/product";
import {
  type FilterState,
  defaultFilters,
  priceRanges,
  categoryLabels,
  getUniqueBrands,
  getUniqueCategories,
} from "@/lib/filterProducts";

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  products: Product[];
  onClose?: () => void;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
        active
          ? "border-indigo-400/40 bg-indigo-500/20 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
          : "border-white/10 bg-white/[0.04] text-white/55 hover:border-white/20 hover:bg-white/[0.07] hover:text-white/75"
      }`}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/30">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-5 border-t border-white/[0.06]" />;
}

export default function ProductFilters({
  filters,
  onChange,
  products,
  onClose,
}: ProductFiltersProps) {
  const categories = getUniqueCategories(products);
  const brands = getUniqueBrands(products);

  const isDefault =
    !filters.search &&
    !filters.category &&
    !filters.brand &&
    filters.availability === "all" &&
    filters.priceRangeIndex === 0 &&
    filters.sortBy === "featured";

  function reset() {
    onChange(defaultFilters);
  }

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="h-4 w-4 text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          <span className="text-sm font-semibold text-white/80">Filtros</span>
          {!isDefault && (
            <span className="rounded-full bg-indigo-500/30 px-1.5 py-0.5 text-[9px] font-bold text-indigo-300">
              activo
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!isDefault && (
            <button
              onClick={reset}
              className="text-[11px] text-white/35 transition-colors hover:text-white/60"
            >
              Limpiar
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-1.5 text-white/40 transition-colors hover:text-white/70"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div>
        <SectionLabel>Categoría</SectionLabel>
        <div className="flex flex-wrap gap-2">
          <Chip
            active={filters.category === ""}
            onClick={() => onChange({ ...filters, category: "" })}
          >
            Todas
          </Chip>
          {categories.map((cat) => (
            <Chip
              key={cat}
              active={filters.category === cat}
              onClick={() =>
                onChange({
                  ...filters,
                  category: filters.category === cat ? "" : cat,
                })
              }
            >
              {categoryLabels[cat] ?? cat}
            </Chip>
          ))}
        </div>
      </div>

      <Divider />

      {/* Brands */}
      <div>
        <SectionLabel>Marca</SectionLabel>
        <div className="flex flex-wrap gap-2">
          <Chip
            active={filters.brand === ""}
            onClick={() => onChange({ ...filters, brand: "" })}
          >
            Todas
          </Chip>
          {brands.map((brand) => (
            <Chip
              key={brand}
              active={filters.brand === brand}
              onClick={() =>
                onChange({
                  ...filters,
                  brand: filters.brand === brand ? "" : brand,
                })
              }
            >
              {brand}
            </Chip>
          ))}
        </div>
      </div>

      <Divider />

      {/* Availability */}
      <div>
        <SectionLabel>Disponibilidad</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {(
            [
              { value: "all", label: "Todos" },
              { value: "available", label: "En stock" },
              { value: "soldout", label: "Agotado" },
            ] as const
          ).map((opt) => (
            <Chip
              key={opt.value}
              active={filters.availability === opt.value}
              onClick={() => onChange({ ...filters, availability: opt.value })}
            >
              {opt.label}
            </Chip>
          ))}
        </div>
      </div>

      <Divider />

      {/* Price range */}
      <div>
        <SectionLabel>Rango de precio</SectionLabel>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range, i) => (
            <button
              key={i}
              onClick={() => onChange({ ...filters, priceRangeIndex: i })}
              className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 text-left text-xs font-medium transition-all duration-200 ${
                filters.priceRangeIndex === i
                  ? "border-indigo-400/40 bg-indigo-500/15 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.12)]"
                  : "border-white/8 bg-transparent text-white/50 hover:border-white/15 hover:bg-white/[0.04] hover:text-white/70"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  filters.priceRangeIndex === i
                    ? "bg-indigo-400"
                    : "bg-white/20"
                }`}
              />
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
