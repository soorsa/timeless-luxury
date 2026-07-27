"use client";

import Button from "@/components/global/Button";
import { useCartStore } from "@/store/cart.store";
import { formatPrice } from "@/utils/format.util";
import { motion } from "framer-motion";
import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/products/${product.name}`}>
        <div className="h-72 bg-[#f5f0eb] flex items-center justify-center p-6 group-hover:bg-[#ede6df] transition-colors">
          <Image
            src={product.images[0]}
            height={100}
            width={100}
            alt={product.name}
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/products/${product.id}`} className="block">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-[#b78c5f] font-semibold tracking-wider uppercase">
                {product.brand}
              </p>
              <h3 className="text-lg font-medium mt-1">{product.name}</h3>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold">
                {formatPrice(product.price)}
              </p>
              {product.originalPrice && (
                <p className="text-sm text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              )}
            </div>
          </div>
        </Link>
        <Button
          icon={<ShoppingBagIcon className="w-5 h-5" />}
          label="Add to Cart"
          onClick={() => addItem(product)}
          className="mt-4"
        />
      </div>
    </motion.div>
  );
}
