"use client";
import SearchBar from "@/app/watches/_components/SearchBar";
import ProductGrid from "@/components/product/ProductGrid";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Wrapper = () => {
  const pathname = usePathname();
  const category = pathname.split("/");
  const [filterParams, setfilterParams] = useState<FilterParams>({
    category: category[1] === "products" ? "" : category[1],
    name: "",
  });
  return (
    <div>
      <div className="pt-15 sm:pt-20 text-center space-y-5">
        <div className="">
          <div className="font-black text-3xl sm:text-5xl capitalize">
            Our {category[1]} Collections
          </div>
          <div className="text-sm sm:text-base">
            Find a fitting piece from our wide watch collection
          </div>
        </div>
        <div className="w-full sm:w-2/3 mx-auto">
          <SearchBar
            filterParams={filterParams}
            onSetFilterParams={setfilterParams}
          />
        </div>
      </div>
      <ProductGrid filterParams={filterParams} />
    </div>
  );
};

export default Wrapper;
