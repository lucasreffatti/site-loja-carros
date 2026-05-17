"use client";

import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { List } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/utils/cn";

export default function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // CTA button slides left when sidebar is visible
  const ctaMarginRight = useTransform(scrollYProgress, [0.15, 0.2, 0.45, 0.5], [0, 60, 60, 0]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-8 left-0 right-0 z-50 px-6 py-4 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Container */}
        <div className={cn(
          "px-4 py-2 rounded-full flex items-center gap-3 transition-all duration-500 border",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-white/20 shadow-sm" 
            : "bg-black/20 backdrop-blur-md border-white/10"
        )}>
          <img
            src="/logo.png"
            alt="KD Automóveis"
            className={cn(
              "h-8 w-auto object-contain transition-all duration-500",
              isScrolled ? "brightness-100" : "brightness-200"
            )}
          />
        </div>

        {/* Desktop Nav */}
        <nav className={cn(
          "hidden md:flex px-8 py-4 rounded-full gap-8 text-sm font-medium transition-all duration-500 border",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-white/20 shadow-sm text-zinc-600" 
            : "bg-black/20 backdrop-blur-md border-white/10 text-zinc-300"
        )}>
          <Link href="#estoque" className={cn("transition-colors", isScrolled ? "hover:text-brand-600" : "hover:text-white")}>Estoque</Link>
          <Link href="#vender" className={cn("transition-colors", isScrolled ? "hover:text-brand-600" : "hover:text-white")}>Vender</Link>
          <Link href="#avaliacoes" className={cn("transition-colors", isScrolled ? "hover:text-brand-600" : "hover:text-white")}>Avaliações</Link>
          <Link href="#sobre" className={cn("transition-colors", isScrolled ? "hover:text-brand-600" : "hover:text-white")}>Quem Somos</Link>
          <Link href="#contato" className={cn("transition-colors", isScrolled ? "hover:text-brand-600" : "hover:text-white")}>Contato</Link>
        </nav>

        {/* CTA Button - slides left when sidebar appears */}
        <motion.div 
          style={{ marginRight: ctaMarginRight }}
          className={cn(
            "hidden sm:flex px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 cursor-pointer",
            isScrolled 
              ? "bg-brand-600 text-white shadow-[0_8px_16px_-6px_rgba(224,40,20,0.4)] hover:bg-brand-700" 
              : "bg-white text-black hover:bg-zinc-200"
          )}
        >
          Fale Conosco
        </motion.div>

        {/* Mobile Menu Icon */}
        <div className={cn(
          "md:hidden p-3 rounded-full border transition-all duration-500",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-white/20 shadow-sm text-zinc-900" 
            : "bg-black/20 backdrop-blur-md border-white/10 text-white"
        )}>
          <List size={24} weight="bold" />
        </div>

      </div>
    </motion.header>
  );
}
