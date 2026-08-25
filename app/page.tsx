import Hero from "@/components/landing/Hero";
import ProductGrid from "@/components/product/ProductGrid";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="space-y-10 mt-7 sm:mt-10">
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-3xl font-medium uppercase">
              Our Watch Collection
            </h2>
            <Link
              href={"/watches"}
              className="text-[#b78c5f] flex items-center gap-1.5 font-medium cursor-pointer"
            >
              view all
              <ArrowRightCircle size={18} />
            </Link>
          </div>
          <ProductGrid
            filterParams={{ category: "watches" }}
            fullView={false}
          />
        </section>
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-3xl font-medium uppercase">
              Our Health Products
            </h2>
            <Link
              href={"/watches"}
              className="text-[#b78c5f] flex items-center gap-1.5 font-medium cursor-pointer"
            >
              view all
              <ArrowRightCircle size={18} />
            </Link>
          </div>
          <ProductGrid filterParams={{ category: "health" }} />
        </section>
      </div>
    </div>
  );
}
