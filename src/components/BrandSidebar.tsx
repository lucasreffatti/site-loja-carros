"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const brands = [
  { name: "BMW", slug: "bmw" },
  { name: "Mercedes-Benz", slug: "mercedesbenz" },
  { name: "Audi", slug: "audi" },
  { name: "Nissan", slug: "nissan" },
  { name: "Ford", slug: "ford" },
  { name: "Hyundai", slug: "hyundai" },
  { name: "Chevrolet", slug: "chevrolet" },
  { name: "Fiat", slug: "fiat" },
  { name: "Jeep", slug: "jeep" },
  { name: "Toyota", slug: "toyota" },
  { name: "Volkswagen", slug: "volkswagen" },
  { name: "Porsche", slug: "porsche" },
];

export default function BrandSidebar() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.15, 0.2, 0.45, 0.5], [0, 1, 1, 0]);

  return (
    <motion.div 
      style={{ opacity }}
      className="fixed right-2 top-1/2 -translate-y-1/2 z-[55] hidden xl:flex flex-col"
    >
      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800/40 py-4 px-2 rounded-xl shadow-2xl">
        <div className="flex flex-col gap-1 items-center">
          {brands.map((brand) => (
            <button 
              key={brand.name}
              className="group relative w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
              title={brand.name}
            >
              <img
                src={`https://www.autocerto.com/fabricantes/${brand.slug}.webp?v=2`}
                alt={brand.name}
                className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity invert"
                loading="lazy"
              />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-2 px-2.5 py-1 bg-zinc-900 border border-zinc-700 rounded-lg text-[10px] text-white font-medium opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl">
                {brand.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
