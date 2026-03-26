export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: "nuevo" | "oferta" | "top" | "agotado";
  specs?: string[];
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  gradient: string;
  glow: string;
}
