// "use client";

import ProductDetail from "@/components/pages/ProductDetail";
import { Metadata } from "next";
import Link from "next/link";
const product: Product = {
  id: 1,
  brand: "Patek Philippe",
  name: "Poedagar Smart Watch",
  price: 75000,
  originalPrice: 115000,
  images: [
    "/images/poedagar-black.jpg",
    "/images/poedagar-blue.jpg",
    "/images/poedagar-gold.jpg",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBdqIz0brSOfxWCwkuEa3DJ54THSeZnBoQHcHz9tWGA&s=10",
    "https://www-konga-com-res.cloudinary.com/image/upload/f_auto,q_auto,w_1080,c_limit/media/catalog/product/N/U/173643_1777291145.jpg",
  ],
  description:
    "It is 30 ATM water resistant, so you can decide to swim with it without the feed of water damaging it. It is PVD coated. (PVD coating is what they use for high quality stainless steel spoons to make them last for years. So, you can also expect this watch to last for between 8 to 12 years. It comes with a 3 years repair or replacement warranty, so if anything happens to the watch within the first 3 years of purchase, we are going to repair it or replace it for you for free. No added costs.",
  inStock: true,
  benefits: [
    "2 Free Gifts",
    "Free shipping & Delivery",
    "Pay on Delivery",
    "7-day return policy",
  ],
  gifts: [
    {
      image:
        "https://healthify.ng/wp-content/uploads/2026/07/IMG-20260402-WA0069-1024x986-1-768x740.webp",
      title: "1 Black Assad Perfume",
    },
    {
      image:
        "https://healthify.ng/wp-content/uploads/2026/07/IMG_0124-1152x1536-1-768x1024.webp",
      title: "2 Black Wrist beeds",
    },
  ],
};

export const metadata: Metadata = {
  title: `${product.name} · Timeless Luxury `,
  description: "Curated collection of the world's finest luxury watches",

  twitter: {
    card: "summary_large_image",
    images: product.images,
  },
  openGraph: {
    type: "website",
    images: product.images,
  },
};

export default function ProductDetailPage() {
  // const params = useParams();
  // const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-light">Product not found</h2>
        <Link
          href="/"
          className="text-[#b78c5f] hover:underline mt-4 inline-block"
        >
          ← Back to collection
        </Link>
      </div>
    );
  }

  return (
    <ProductDetail product={product} />
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 0.5 }}
    //       className="relative"
    //     >
    //       <Link
    //         href="/"
    //         className="inline-flex items-center gap-2 text-[#b78c5f] hover:underline underline-offset-2 mb-8"
    //       >
    //         <ArrowLeftIcon className="w-4 h-4" />
    //         Back to collection
    //       </Link>

    //       {/* Product price and name */}
    //       <div className="mb-4 sm:flex justify-between">
    //         <div className="">
    //           <p className="text-[#b78c5f] font-semibold tracking-wider uppercase text-sm">
    //             {product.brand}
    //           </p>
    //           <h1 className="text-4xl md:text-5xl font-light mt-1">
    //             {product.name}
    //           </h1>
    //         </div>

    //         <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-4 mt-4">
    //           <span className="text-3xl font-semibold">
    //             {formatPrice(product.price)}
    //           </span>
    //           {product.originalPrice && (
    //             <>
    //               <span className="text-xl text-gray-400 line-through">
    //                 {formatPrice(product.originalPrice)}
    //               </span>
    //               <span className="bg-gold-moon text-dark px-3 py-1 rounded-full text-xs font-semibold">
    //                 SAVE {formatPrice(savings)}
    //               </span>
    //             </>
    //           )}
    //         </div>
    //       </div>

    //       <div className="grid sm:grid-cols-2 gap-6 relative">
    //         {/* Product Image */}
    //         <div className="space-y-2 sm:space-y-4">
    //           <Slider showNav={true} slides={slides} className="h-fit!" />
    //           <div className="rounded-2xl space-y-2">
    //             <div className="bg-gold-moon p-4 rounded-2xl">
    //               <div className="flex gap-1 items-center">
    //                 <Gift className="w-12 h-12 " />
    //                 <div className="">
    //                   <div className="font-black">
    //                     {product.gifts.length} Free Gifts
    //                   </div>

    //                   <div className="text-sm">
    //                     order now and get these free gifts.
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
    //               {product.gifts.map((gift, i) => (
    //                 <div className="space-y-1" key={i}>
    //                   <div className="border border-gold rounded-xl overflow-hidden h-30 sm:h-40 w-full text-center">
    //                     <Image
    //                       src={gift.image}
    //                       height={100}
    //                       width={100}
    //                       className="w-full h-full object-cover"
    //                       alt={gift.title}
    //                     />
    //                   </div>
    //                   <div className="text-center text-xs sm:text-sm">
    //                     {gift.title}
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>

    //         {/* Product Details */}
    //         <div className="">
    //           {/* <div className="">
    //             <p className="text-[#b78c5f] font-semibold tracking-wider uppercase text-sm">
    //               {product.brand}
    //             </p>
    //             <h1 className="text-4xl md:text-5xl font-light mt-1">
    //               {product.name}
    //             </h1>
    //           </div>

    //           <div className="flex flex-wrap items-baseline gap-4 mt-4">
    //             <span className="text-3xl font-semibold">
    //               {formatPrice(product.price)}
    //             </span>
    //             {product.originalPrice && (
    //               <>
    //                 <span className="text-xl text-gray-400 line-through">
    //                   {formatPrice(product.originalPrice)}
    //                 </span>
    //                 <span className="bg-gold-moon text-dark px-3 py-1 rounded-full text-sm font-semibold">
    //                   SAVE {formatPrice(savings)}
    //                 </span>
    //               </>
    //             )}
    //           </div>
    //  */}
    //           <div className="">
    //             <div className="text-lg sm:text-xl font-bold">Description:</div>
    //             <p className="mt-2 text-[#4a4540] leading-relaxed">
    //               {product.description}
    //             </p>
    //           </div>

    //           <div className=" mt-4">
    //             <div className="text-lg sm:text-xl font-bold">Benefits:</div>

    //             <ul className="text-dark-faint space-y-1 text-sm mt-2">
    //               {product.benefits.map((i) => (
    //                 <li className="flex gap-2" key={i}>
    //                   <CheckCircle2 className="w-5 h-5" />
    //                   <div className="">{i}</div>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>

    //           <div className="mt-8 hidden sm:grid grid-cols-3 gap-2 sm:text-xl">
    //             <div className="col-span-2">
    //               <Button
    //                 label="Order Now!"
    //                 icon={<ShoppingBagIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />}
    //                 onClick={openOrderModal}
    //                 // onClick={() => addItem(product)}
    //               />
    //             </div>
    //             <Button
    //               label="Call us"
    //               className="bg-blue-600!"
    //               icon={<PhoneCall className="w-5 h-5 sm:w-5.5 sm:h-5.5" />}
    //               // onClick={() => addItem(product)}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mt-8 grid sm:hidden grid-cols-3 gap-2 sm:text-xl p-4 sticky bottom-2 backdrop-blur-sm bg-cream/20 border border-gray-200 rounded-2xl left-0">
    //         <div className="col-span-2">
    //           <Button
    //             label="Order Now!"
    //             icon={
    //               <ShoppingBagIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 animate-bounce" />
    //             }
    //             onClick={openOrderModal}
    //             className="bg-gold-dark "
    //           />
    //         </div>
    //         <Button
    //           label="Call us"
    //           className="bg-blue-800!"
    //           icon={<PhoneCall className="w-5 h-5 sm:w-5.5 sm:h-5.5" />}
    //           // onClick={() => addItem(product)}
    //         />
    //       </div>
    //     </motion.div>
  );
}
