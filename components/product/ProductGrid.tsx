import { products } from "@/data/constants";
import React from "react";
import ProductCard from "./ProductCard";
interface Prop {
  filterParams: FilterParams;
  fullView?: boolean;
}
const ProductGrid: React.FC<Prop> = ({ filterParams, fullView = true }) => {
  const filteredProducts = products.filter((product) => {
    if (filterParams.name) {
      return (
        product.category === filterParams.category &&
        product.name.toLowerCase().includes(filterParams.name.toLowerCase())
      );
    }
    if (!filterParams.category) {
      return product.id;
    }
    return product.category === filterParams.category;
  });
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {filteredProducts
        .slice(0, fullView ? undefined : 4)
        .map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
    </div>
  );
};
export default ProductGrid;
