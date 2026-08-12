"use client";
import Button from "@/components/global/Button";
import OrderNow from "@/components/order/OrderNow";
import Slider from "@/components/ui/Slider";
import { useModal } from "@/store/modal.store";
import { formatPrice } from "@/utils/format.util";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  CheckCircle2,
  Gift,
  PhoneCall,
  ShoppingBagIcon,
  Truck,
} from "lucide-react";
interface Prop {
  product: Product;
}
const ProductDetail: React.FC<Prop> = ({ product }) => {
  const modal = useModal();

  const openOrderModal = () => {
    modal.open({
      title: `Buy ${product.name}`,
      content: <OrderNow product={product} />,
      size: "w-[95%] sm:w-md",
    });
  };

  const savings = product.originalPrice
    ? product.originalPrice - product.price
    : 0;
  const slides = product.images.map((i) => (
    <div className="w-full h-100 relative bg-gold/20" key={i}>
      <Image
        fill
        src={i}
        quality={100}
        className="object-contain"
        alt={product.name}
      />
    </div>
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="grid gap-1 sm:gap-2 pb-4">
        <div className="bg-linear-to-r from-[#3d352e] to-black border border-gold/30 flex items-center rounded-2xl gap-2 text-gold p-2 sm:p-4">
          <div className="flex items-center justify-center h-15 w-15 rounded-full bg-gold/20">
            <Truck className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="text-xl sm:text-2xl font-bold">Pay on Delivery</div>
            <div className="text-xs sm:text-sm text-gold/60">
              Note: you are required to only pay on delivery within Lagos, while
              outside Lagos may require a small commitment fee.
            </div>
          </div>
        </div>
      </div>
      {/* Product price and name */}
      <div className="mb-4 sm:flex justify-between">
        <div className="">
          <p className="text-[#b78c5f] font-black tracking-wider uppercase text-sm">
            {product.brand}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-1">
            {product.name}
          </h1>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-4 mt-4">
          <span className="text-3xl font-semibold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="bg-gold-moon text-dark px-3 py-1 rounded-full text-xs font-semibold">
                SAVE {formatPrice(savings)}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 relative">
        {/* Product Image */}
        <div className="space-y-2 sm:space-y-4">
          <Slider showNav={true} slides={slides} className="h-fit!" />
          <div className="rounded-2xl space-y-2">
            <div className="bg-gold-moon p-4 rounded-2xl">
              <div className="flex gap-1 items-center">
                <Gift className="w-12 h-12 " />
                <div className="">
                  <div className="font-black">
                    {product.gifts.length} Free Gifts
                  </div>

                  <div className="text-sm">
                    order now and get these free gifts.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
              {product.gifts.map((gift, i) => (
                <div className="space-y-1" key={i}>
                  <div className="border border-gold rounded-xl overflow-hidden h-30 sm:h-40 w-full text-center">
                    <Image
                      src={gift.image}
                      height={100}
                      width={100}
                      className="w-full h-full object-cover"
                      alt={gift.title}
                    />
                  </div>
                  <div className="text-center text-xs sm:text-sm">
                    {gift.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="">
          <div className="">
            <div className="text-lg sm:text-xl font-bold">Description:</div>
            <p className="mt-2 text-[#4a4540] leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className=" mt-4">
            <div className="text-lg sm:text-xl font-bold">Benefits:</div>

            <ul className="text-dark-faint space-y-1 text-sm mt-2">
              {product.benefits.map((i) => (
                <li className="flex gap-2" key={i}>
                  <CheckCircle2 className="w-5 h-5" />
                  <div className="">{i}</div>
                </li>
              ))}
            </ul>
          </div>

          {product.colors && (
            <div className="mt-4 space-y-2">
              <div className="text-lg sm:text-xl font-bold">
                Available colors:
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                {product.colors.map((color, i) => (
                  <div
                    className="text-center w-full h-90 sm:h-30 sm:w-30 cursor-pointer relative overflow-hidden"
                    key={i}
                  >
                    <Image
                      src={color.image}
                      alt={color.color}
                      fill
                      quality={100}
                    />
                    <div className="bg-black/50 font-semibold absolute bottom-0 w-full text-white p-2 tracking-tighter">
                      {color.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-8 hidden sm:grid grid-cols-3 gap-2 sm:text-xl">
            <div className="col-span-2">
              <Button
                label="Order Now!"
                icon={<ShoppingBagIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />}
                onClick={openOrderModal}
                // onClick={() => addItem(product)}
              />
            </div>
            <Button
              link="tel:+2349138265891"
              type="link"
              label="Call us"
              className="bg-blue-800! text-white no-underline!"
              icon={<PhoneCall className="w-5 h-5 sm:w-5.5 sm:h-5.5" />}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid sm:hidden grid-cols-3 gap-2 sm:text-xl p-4 sticky bottom-2 backdrop-blur-sm bg-cream/20 border border-gray-200 rounded-2xl left-0">
        <div className="col-span-2">
          <Button
            label="Order Now!"
            icon={
              <ShoppingBagIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 animate-bounce" />
            }
            onClick={openOrderModal}
            className="bg-gold-dark "
          />
        </div>
        <Button
          link="tel:+2349138265891"
          type="link"
          label="Call us"
          className="bg-blue-800! text-white no-underline!"
          icon={<PhoneCall className="w-5 h-5 sm:w-5.5 sm:h-5.5" />}
        />
      </div>
    </motion.div>
  );
};

export default ProductDetail;
