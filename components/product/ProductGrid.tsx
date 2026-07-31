import { products } from "@/data/constants";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
