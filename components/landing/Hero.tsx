/* eslint-disable react/no-unescaped-entities */
"use client";

import Slider from "@/components/ui/Slider";
import { motion } from "framer-motion";

export default function Hero() {
  const bannerData = [
    {
      primaryText: ["Timeless", "Elegance"],
      secondaryText:
        "Curated masterpieces from the world's most prestigious watchmakers.",
    },
    {
      primaryText: ["Poedega", "Classics"],
      secondaryText:
        "Curated masterpieces from the world's most prestigious watchmakers.",
    },
    {
      primaryText: ["Patek", "Gloden"],
      secondaryText:
        "Curated masterpieces from the world's most prestigious watchmakers.",
    },
  ];
  const banners = bannerData.map((item, i) => (
    <motion.section
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-[#3d352e] p-12 mb-12"
    >
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#f5efe9] max-w-2xl leading-tight">
            {item.primaryText[0]}{" "}
            <span className="font-semibold text-[#dbb88c]">
              {item.primaryText[1]}
            </span>
          </h1>
          <p className="mt-3 text-lg text-[#ccc5be] max-w-lg">
            Curated masterpieces from the world's most prestigious watchmakers.
          </p>
          <button className="btn-primary mt-6">Explore Collection →</button>
        </div>

        <div className="mt-6 md:mt-0">
          <div className="border border-[#b78c5f] bg-[rgba(219,184,140,0.1)] backdrop-blur-sm px-6 py-3 rounded-full text-[#dbb88c]">
            ✦ Complimentary shipping
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#dbb88c]/30  rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#dbb88c]/30  rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </motion.section>
  ));
  return <Slider showNav={false} slides={banners} />;
}
