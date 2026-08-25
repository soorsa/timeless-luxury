"use client";

import Button from "@/components/global/Button";
import OrderNow from "@/components/order/OrderNow";
import { useModal } from "@/store/modal.store";
import { formatPrice } from "@/utils/format.util";
import { motion } from "framer-motion";
import { Eye, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const modal = useModal();

  const openOrderModal = () => {
    modal.open({
      title: `Buy ${product.name}`,
      content: <OrderNow product={product} />,
      size: "w-[95%] sm:w-md",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/${product.category}/${product.slug}`} className="w-full">
        <div className="h-72 min-w-full w-full relative overflow-hidden bg-[#f5f0eb] flex items-center justify-center  group-hover:bg-[#ede6df] transition-colors">
          <Image
            src={product.images[0]}
            // height={80}
            // width={100}
            fill
            alt={product.name}
            quality={100}
            className="transition-transform duration-500 group-hover:scale-110 object-cover"
          />
        </div>
      </Link>

      <div className="pt-2 pb-4 px-2">
        <Link href={`/${product.category}/${product.slug}`} className="block">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-[#b78c5f] font-black tracking-wider uppercase">
                {product.brand}
              </p>
              <h3 className="text-lg font-semibold mt-1 line-clamp-1">
                {product.name}
              </h3>
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
        <div className="grid grid-cols-3 gap-1 mt-4">
          <Button
            type="link"
            label="View"
            link={`/${product.category}/${product.slug}`}
            className="bg-dark text-cream"
            icon={<Eye className="w-5 h-5" />}
          />
          <div className="col-span-2">
            <Button
              icon={<ShoppingBagIcon className="w-5 h-5" />}
              label="Order Now"
              onClick={openOrderModal}
              className="bg-gold-dark"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
