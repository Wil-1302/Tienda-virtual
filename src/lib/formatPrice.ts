export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getDiscount(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}
