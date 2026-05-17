"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, WhatsappLogo, InstagramLogo, Phone, NavigationArrow } from "@phosphor-icons/react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function LocationSection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-zinc-950">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={revealItem} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Venha conhecer nosso <span className="text-zinc-500">espaço premium.</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Estamos te esperando com o melhor atendimento e o carro dos seus sonhos.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Contact & Info Cards */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <motion.div variants={revealItem} className="bg-zinc-900 border border-zinc-800/60 p-6 rounded-2xl">
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-brand-500 mb-4">
                <MapPin weight="fill" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Endereço</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                BR-101, Palhoça - SC<br />
                CEP: 88132-500
              </p>
            </motion.div>

            <motion.div variants={revealItem} className="bg-zinc-900 border border-zinc-800/60 p-6 rounded-2xl">
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-brand-500 mb-4">
                <Clock weight="fill" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Horário</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-1">
                <span className="font-medium text-zinc-300">Seg a Sex:</span> 8h às 19h
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                <span className="font-medium text-zinc-300">Sáb:</span> 8h às 13h
              </p>
            </motion.div>

            {/* WhatsApp CTAs */}
            <motion.div variants={revealItem} className="flex flex-col gap-3">
              <a href="https://api.whatsapp.com/send?phone=554833410300&text=Olá!%20Gostaria%20de%20ver%20o%20estoque%20disponível." target="_blank" rel="noopener noreferrer" 
                 className="bg-green-600 text-white p-4 rounded-2xl flex items-center gap-3 font-medium hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20 text-sm">
                <WhatsappLogo weight="fill" size={22} />
                Ver estoque disponível
              </a>
              <a href="https://api.whatsapp.com/send?phone=554833410300&text=Olá!%20Gostaria%20de%20simular%20um%20financiamento." target="_blank" rel="noopener noreferrer" 
                 className="bg-zinc-800 text-white p-4 rounded-2xl flex items-center gap-3 font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                <WhatsappLogo weight="fill" size={22} className="text-green-400" />
                Simular financiamento
              </a>
              <a href="https://api.whatsapp.com/send?phone=554833410300&text=Olá!%20Quero%20vender%20meu%20carro." target="_blank" rel="noopener noreferrer" 
                 className="bg-zinc-800 text-white p-4 rounded-2xl flex items-center gap-3 font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                <WhatsappLogo weight="fill" size={22} className="text-green-400" />
                Vender meu carro
              </a>
            </motion.div>

            <motion.div variants={revealItem} className="flex gap-3">
              <a href="https://www.instagram.com/kdautomoveis" target="_blank" rel="noopener noreferrer" className="flex-1 bg-zinc-900 border border-zinc-800/60 text-zinc-400 p-4 rounded-2xl flex items-center justify-center gap-2 hover:text-white hover:border-zinc-600 transition-all text-sm">
                <InstagramLogo weight="fill" size={20} />
                Instagram
              </a>
              <a href="tel:+554833410300" className="flex-1 bg-zinc-900 border border-zinc-800/60 text-zinc-400 p-4 rounded-2xl flex items-center justify-center gap-2 hover:text-white hover:border-zinc-600 transition-all text-sm">
                <Phone weight="fill" size={20} />
                Ligar
              </a>
            </motion.div>
          </div>

          {/* Google Maps Embed - Dark Mode */}
          <motion.div 
            variants={revealItem}
            className="lg:col-span-2 relative w-full h-[400px] lg:h-full min-h-[450px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/60"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8!2d-48.6678!3d-27.6445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273523f663f733%3A0xeab50d990bc1b913!2sKD%20Autom%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1715651528498!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            
            {/* Floating direction card */}
            <div className="absolute bottom-6 right-6 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 px-5 py-3 rounded-xl flex items-center gap-3 shadow-xl">
              <NavigationArrow weight="fill" size={18} className="text-brand-500" />
              <span className="text-white text-sm font-medium">Como chegar</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
