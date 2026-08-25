"use client";

import { useCartStore } from "@/store/cart.store";
import { Menu, ShoppingBagIcon, Watch, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = useCartStore((state) => state.getTotalItems());
  const links = [
    { name: "Products", href: "/products" },
    { name: "Watches", href: "/watches" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 mx-auto w-full px-6 py-4 sm:py-2 bg-cream/50 ${
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
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`${
                  pathName === link.href &&
                  "text-[#b78c5f] underline underline-offset-4"
                } hover:text-[#b78c5f] transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#ede8e2] px-4 py-2 rounded-full">
            <ShoppingBagIcon className="w-5 h-5" />
            <span className="bg-dark text-cream text-xs font-semibold px-2 py-0.5 rounded-full min-w-5 text-center">
              {totalItems}
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden cursor-pointer ${
            scrolled ? "text-gray-700" : "text-gray-700"
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 h-screen top-0 left-0 right-0 bg-white shadow-lg py-4 px-4 flex justify-center items-center"
          >
            <div className="border absolute top-4 right-4 rounded-lg border-gray-200 flex items-center justify-center p-1 hover:bg-gray-200 cursor-pointer">
              <X />
            </div>
            <div className="-mt-20 space-y-3 text-center">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg hover:text-primary transition-colors py-2 ${
                    pathName === link.href
                      ? "text-[#b78c5f] bg-gold/5 rounded-lg"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
