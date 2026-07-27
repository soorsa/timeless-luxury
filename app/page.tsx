import Hero from "@/components/landing/Hero";
import ProductGrid from "@/components/product/ProductGrid";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-3xl font-light">Our Collection</h2>
          <span className="text-[#b78c5f] font-medium hover:underline cursor-pointer">
            View all →
          </span>
        </div>
        <ProductGrid />
      </section>
    </div>
  );
}
