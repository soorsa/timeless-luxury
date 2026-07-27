"use client";

import { useCartStore } from "@/store/cart.store";
import { ShoppingBagIcon, Watch } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <nav
      className={`sticky top-0 z-50 mx-auto w-full px-6 py-4 bg-cream/50 ${
        scrolled ? "shadow backdrop-blur-xl" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-stretch gap-2">
          <div className="bg-gold/30 w-10">
            <Watch className="h-full w-full text-dark/50" />
          </div>
          <div className="flex-1">
            <div className="tracking-[10px] font-black text-lg sm:text-2xl">
              TIMELESS
            </div>
            <div className="text-[9px] sm:text-[11px] uppercase font-extralight text-gray-500">
              Luxury.Accessories.Lifestyle
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-8 text-[#3f3a36]">
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/" className="hover:text-[#b78c5f] transition-colors">
              Our Collection
            </Link>
            <Link href="/" className="hover:text-[#b78c5f] transition-colors">
              About Us
            </Link>
            <Link href="/" className="hover:text-[#b78c5f] transition-colors">
              Contact us
            </Link>
          </div>
          <div className="flex items-center gap-2 bg-[#ede8e2] px-4 py-2 rounded-full">
            <ShoppingBagIcon className="w-5 h-5" />
            <span className="bg-dark text-cream text-xs font-semibold px-2 py-0.5 rounded-full min-w-5 text-center">
              {totalItems}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
