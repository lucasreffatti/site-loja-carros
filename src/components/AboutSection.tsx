"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Car } from "@phosphor-icons/react";

const stats = [
  { icon: Car, value: "1000+", label: "Veículos Entregues" },
  { icon: ShieldCheck, value: "100%", label: "Laudo Cautelar" },
  { icon: Handshake, value: "15+", label: "Anos de Tradição" },
];

// Stagger container for children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual item reveal - elegant upward drift
const revealItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom smooth easing
    }
  },
};

// Stats counter reveal - slight scale + fade
const statReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    }
  },
};

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      
      {/* Full-section background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/showroom.jpg')" }}
      />
      
      {/* Dark overlay - elegant gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <motion.span 
              variants={revealItem}
              className="inline-block py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-md text-zinc-300 text-xs font-medium mb-8 border border-white/10 tracking-widest uppercase"
            >
              Quem Somos
            </motion.span>
            
            <motion.h2 
              variants={revealItem}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
            >
              Não vendemos carros, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">entregamos conquistas.</span>
            </motion.h2>

            <motion.p 
              variants={revealItem}
              className="text-lg text-zinc-400 leading-relaxed mb-6 max-w-[50ch]"
            >
              Localizada em Palhoça, a KD Automóveis nasceu com um propósito claro: elevar o padrão do mercado automotivo.
            </motion.p>

            <motion.p 
              variants={revealItem}
              className="text-lg text-zinc-400 leading-relaxed mb-12 max-w-[50ch]"
            >
              Combinamos um estoque premium diversificado com um atendimento consultivo que coloca você em primeiro lugar. Da aprovação de crédito à entrega das chaves, cada etapa é desenhada para ser memorável.
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              variants={revealItem}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={i}
                    variants={statReveal}
                  >
                    <Icon className="text-brand-500 mb-4" size={28} />
                    <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-zinc-500">{stat.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Right: Floating card over the background */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div 
              variants={revealItem}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] shadow-2xl max-w-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-600/20 text-brand-500 rounded-full flex items-center justify-center">
                  <ShieldCheck weight="fill" size={28} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-sm text-zinc-400">Transparência Garantida</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Laudo Cautelar em todos os veículos",
                  "Financiamento facilitado",
                  "Atendimento premium personalizado",
                  "Garantia de procedência total"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={statReveal}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0" />
                    <p className="text-sm text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
