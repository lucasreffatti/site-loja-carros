"use client";

import { motion, Variants } from "framer-motion";
import { Star, GoogleLogo } from "@phosphor-icons/react";

const testimonials = [
  {
    id: 1,
    name: "Gabriela",
    time: "há 2 semanas",
    text: "Loja nota 1000, em atendimento e agilidade. Os veículos são de confiança. Tivemos a experiência com o vendedor Bruno, cara fora de série, não mediu esforços pra ajudar. Nos entregou o carro conforme combinado. Voltaremos a comprar carro na KD e vou indicar.",
    avatar: "https://i.pravatar.cc/150?u=gabriela"
  },
  {
    id: 2,
    name: "Leiziel",
    time: "há 1 mês",
    text: "Saí de Blumenau pra fechar negócio em Palhoça na KD Automóveis. Loja muito bonita e com um estoque bem diversificado. Valeu amigo Marcos, seu atendimento nos fez escolher a loja.",
    avatar: "https://i.pravatar.cc/150?u=leiziel"
  },
  {
    id: 3,
    name: "Valdemir",
    time: "há 3 meses",
    text: "O atendimento foi excelente. Tudo feito muito rápido, eficiente e facilitador. Mesmo morando fora do Brasil (Inglaterra) tive a segurança de efetuar o negócio, pois a empresa é idônea e confiável.",
    avatar: "https://i.pravatar.cc/150?u=valdemir"
  },
  {
    id: 4,
    name: "Mateus",
    time: "há 2 meses",
    text: "Vendedora Geovana nos atendeu super bem, foi atenciosa, respondeu todas as nossas dúvidas de forma clara e sincera. Fechamos negócio com a Chevrolet Tracker Premier, foi amor à primeira vista.",
    avatar: "https://i.pravatar.cc/150?u=mateus"
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  },
};

export default function TestimonialSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header with Google branding */}
        <motion.div variants={revealItem} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <GoogleLogo weight="bold" size={22} className="text-zinc-900" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Google Reviews</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-sm">4.8</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={14} className="text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-zinc-500 text-xs">(127 avaliações)</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-xl">
              O que nossos clientes <span className="text-zinc-500">dizem sobre nós.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              variants={revealItem}
              className="bg-zinc-900 border border-zinc-800/60 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group"
            >
              <div>
                {/* Google review header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-800 ring-2 ring-zinc-700">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-[10px] text-zinc-500">{testimonial.time}</p>
                  </div>
                  <div className="w-5 h-5 bg-white/5 rounded flex items-center justify-center">
                    <GoogleLogo weight="bold" size={12} className="text-zinc-500" />
                  </div>
                </div>
                
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} weight="fill" size={14} className="text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
