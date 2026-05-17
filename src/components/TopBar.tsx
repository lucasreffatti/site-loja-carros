"use client";

import { Clock, Phone, WhatsappLogo } from "@phosphor-icons/react";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] text-zinc-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock weight="fill" size={12} className="text-zinc-500" />
            <span>Seg-Sex: 8h às 19h</span>
            <span className="text-zinc-600">|</span>
            <span>Sáb: 8h às 13h</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:+554833410300" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone weight="fill" size={12} />
            (48) 3341-0300
          </a>
          <a href="https://api.whatsapp.com/send?phone=554833410300" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors">
            <WhatsappLogo weight="fill" size={12} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
