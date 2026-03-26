import type { Product } from "@/types/product";
import { getDiscount } from "@/lib/formatPrice";

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "discount";
export type AvailabilityFilter = "all" | "available" | "soldout";

export interface FilterState {
  search: string;
  category: string;
  brand: string;
  availability: AvailabilityFilter;
  priceRangeIndex: number;
  sortBy: SortOption;
}

export const defaultFilters: FilterState = {
  search: "",
  category: "",
  brand: "",
  availability: "all",
  priceRangeIndex: 0,
  sortBy: "featured",
};

export const priceRanges = [
  { label: "Todos los precios", min: 0, max: Number.MAX_SAFE_INTEGER },
  { label: "Hasta $400.000", min: 0, max: 400000 },
  { label: "$400.000 – $800.000", min: 400000, max: 800000 },
  { label: "$800.000 – $1.500.000", min: 800000, max: 1500000 },
  { label: "Más de $1.500.000", min: 1500001, max: Number.MAX_SAFE_INTEGER },
];

export const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Destacados primero" },
  { value: "price-asc", label: "Menor precio" },
  { value: "price-desc", label: "Mayor precio" },
  { value: "rating", label: "Mejor valorados" },
  { value: "discount", label: "Mayor descuento" },
];

export const categoryLabels: Record<string, string> = {
  smartphones: "Smartphones",
  laptops: "Laptops",
  audio: "Audio",
  gaming: "Gaming",
  smartwatch: "Smartwatch",
  tablets: "Tablets",
  camaras: "Cámaras",
  accesorios: "Accesorios",
};

const featuredOrder = ["1", "3", "5", "6", "8", "11"];

export function filterProducts(products: Product[], filters: FilterState): Product[] {
  let result = [...products];

  const q = filters.search.toLowerCase().trim();
  if (q) {
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  if (filters.category) {
    result = result.filter((p) => p.category === filters.category);
  }

  if (filters.brand) {
    result = result.filter((p) => p.brand === filters.brand);
  }

  if (filters.availability === "available") {
    result = result.filter((p) => p.badge !== "agotado");
  } else if (filters.availability === "soldout") {
    result = result.filter((p) => p.badge === "agotado");
  }

  const range = priceRanges[filters.priceRangeIndex] ?? priceRanges[0];
  result = result.filter((p) => p.price >= range.min && p.price <= range.max);

  switch (filters.sortBy) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
      break;
    case "discount":
      result.sort((a, b) => {
        const da = a.originalPrice ? getDiscount(a.originalPrice, a.price) : 0;
        const db = b.originalPrice ? getDiscount(b.originalPrice, b.price) : 0;
        return db - da;
      });
      break;
    case "featured":
    default:
      result.sort((a, b) => {
        const ai = featuredOrder.indexOf(a.id);
        const bi = featuredOrder.indexOf(b.id);
        const aRank = ai !== -1 ? ai : 999;
        const bRank = bi !== -1 ? bi : 999;
        return aRank - bRank || b.reviewCount - a.reviewCount;
      });
  }

  return result;
}

export function getUniqueBrands(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.brand))].sort();
}

export function getUniqueCategories(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.category))].sort();
}
