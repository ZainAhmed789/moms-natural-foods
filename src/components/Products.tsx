// src/components/Products.tsx
import ProductCarousel from "./ProductCarousel";

export default function Products() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why customers love it</h2>
        <ProductCarousel />
      </div>
    </section>
  );
}
