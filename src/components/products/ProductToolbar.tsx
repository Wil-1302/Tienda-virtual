"use client";

import {
  type FilterState,
  sortOptions,
  type SortOption,
} from "@/lib/filterProducts";

interface ProductToolbarProps {
  filters: FilterState;
  onFiltersChange: (f: FilterState) => void;
  resultCount: number;
  onToggleFilters: () => void;
  filtersOpen: boolean;
}

export default function ProductToolbar({
  filters,
  onFiltersChange,
  resultCount,
  onToggleFilters,
  filtersOpen,
}: ProductToolbarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={filters.search}
          onChange={(e) =>
            onFiltersChange({ ...filters, search: e.target.value })
          }
          placeholder="Buscar productos, marcas o categorías..."
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white/80 placeholder:text-white/25 outline-none backdrop-blur-sm transition-all duration-200 focus:border-indigo-500/40 focus:bg-white/[0.07]"
        />
        {filters.search && (
          <button
            onClick={() => onFiltersChange({ ...filters, search: "" })}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/30 transition-colors hover:text-white/60"
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

      <div className="flex items-center gap-3">
        {/* Result count */}
        <span className="hidden sm:block shrink-0 text-xs text-white/30">
          <span className="font-semibold text-white/60">{resultCount}</span>{" "}
          {resultCount === 1 ? "producto" : "productos"}
        </span>

        {/* Sort */}
        <div className="relative">
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFiltersChange({
                ...filters,
                sortBy: e.target.value as SortOption,
              })
            }
            className="cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-4 pr-9 text-sm text-white/70 outline-none backdrop-blur-sm transition-all duration-200 focus:border-indigo-500/40 focus:bg-white/[0.07]"
          >
            {sortOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-gray-900 text-white"
              >
                {opt.label}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={onToggleFilters}
          className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 lg:hidden ${
            filtersOpen
              ? "border-indigo-400/40 bg-indigo-500/20 text-indigo-300"
              : "border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/[0.07] hover:text-white/80"
          }`}
        >
          <svg
            className="h-4 w-4"
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
          Filtros
        </button>
      </div>

      {/* Mobile result count */}
      <p className="text-xs text-white/30 sm:hidden">
        <span className="font-semibold text-white/60">{resultCount}</span>{" "}
        {resultCount === 1 ? "producto encontrado" : "productos encontrados"}
      </p>
    </div>
  );
}
