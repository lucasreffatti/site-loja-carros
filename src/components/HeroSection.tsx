"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && !Number.isNaN(videoRef.current.duration)) {
      videoRef.current.currentTime = latest * videoRef.current.duration;
    }
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-zinc-950">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center">
        
        {/* Background Video */}
        <video 
          ref={videoRef}
          src="/video.mp4"
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Content - Left Aligned */}
        <motion.div 
          style={{ opacity: textOpacity, x: textX }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left mt-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-medium mb-6 border border-white/20 tracking-widest uppercase">
              Excelência em Movimento
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-white mb-6 max-w-3xl"
          >
            A nova definição de <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">prestígio.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-zinc-300 font-light leading-relaxed max-w-xl mb-10"
          >
            Encontre o veículo perfeito para você na KD Automóveis. Uma curadoria impecável com as melhores condições do mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              Ver Estoque
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md text-white border border-white/15 px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-white/10"
            >
              Falar com Consultor
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Centered */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[10px] uppercase tracking-widest">Role para explorar</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
