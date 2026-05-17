"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

const cars = [
  {
    id: 1,
    brand: "NISSAN",
    model: "KICKS",
    desc: "1.0 TURBO FLEX ADVANCE DCT",
    year: "2025/2026",
    km: "7.608 km",
    price: "R$ 159.990",
    image: "https://www.autocerto.com/fotos/4572/4552576/6_054120.jpg"
  },
  {
    id: 2,
    brand: "MERCEDES-BENZ",
    model: "A 35 AMG",
    desc: "2.0 CGI GASOLINA 4MATIC",
    year: "2022/2023",
    km: "31.629 km",
    price: "R$ 349.990",
    image: "https://www.autocerto.com/fotos/4572/4267904/7_055215.jpg"
  },
  {
    id: 3,
    brand: "FORD",
    model: "RANGER",
    desc: "3.0 V6 TURBO RAPTOR 4X4",
    year: "2024/2024",
    km: "37.200 km",
    price: "R$ 424.990",
    image: "https://www.autocerto.com/fotos/4572/4370889/1_111051.jpg"
  },
  {
    id: 4,
    brand: "BMW",
    model: "330e",
    desc: "2.0 16V TURBO HÍBRIDO M SPORT",
    year: "2022/2022",
    km: "56.816 km",
    price: "R$ 239.990",
    image: "https://www.autocerto.com/fotos/4572/4151063/7_060244.jpg"
  },
  {
    id: 5,
    brand: "BMW",
    model: "320i",
    desc: "2.0 16V TURBO GASOLINA M SPORT",
    year: "2022/2022",
    km: "32.500 km",
    price: "R$ 219.990",
    image: "/bmw.jpg"
  },
  {
    id: 6,
    brand: "JEEP",
    model: "COMPASS",
    desc: "1.3 T270 TURBO LONGITUDE",
    year: "2022/2022",
    km: "28.500 km",
    price: "R$ 159.990",
    image: "/JeepCompass.jpg"
  },
  {
    id: 7,
    brand: "CHEVROLET",
    model: "EQUINOX",
    desc: "1.5 TURBO GASOLINA PREMIER AWD",
    year: "2023/2023",
    km: "15.000 km",
    price: "R$ 189.990",
    image: "/Equinox.jpg"
  },
  {
    id: 8,
    brand: "FIAT",
    model: "TORO",
    desc: "1.3 T270 TURBO VOLCANO",
    year: "2024/2024",
    km: "5.000 km",
    price: "R$ 164.990",
    image: "/Toro.jpg"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  },
};

export default function InventorySection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Estoque Premium
          </h2>
          <p className="text-zinc-500 text-lg">
            Veículos com laudo cautelar aprovado e garantia de procedência.
          </p>
        </div>
        <button className="text-brand-500 font-medium text-sm flex items-center gap-2 hover:text-brand-400 transition-colors">
          Ver Todo Estoque <ArrowUpRight weight="bold" size={16} />
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10"
      >
        {cars.map((car) => (
          <motion.div key={car.id} variants={itemVariants} className="group cursor-pointer">
            <div className="relative aspect-[4/3] w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800/60 mb-4 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-zinc-700">
              <Image
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <div className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">
                  {car.year}
                </div>
                <div className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">
                  {car.km}
                </div>
              </div>
            </div>

            <div className="px-1">
              <h3 className="text-sm font-bold tracking-tight text-white mb-1 group-hover:text-brand-500 transition-colors">
                {car.brand} <span className="font-medium text-zinc-500">{car.model}</span>
              </h3>
              <p className="text-brand-500 font-bold text-base mb-1">
                {car.price}
              </p>
              <p className="text-zinc-600 text-[10px] uppercase tracking-wider font-medium">
                {car.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
