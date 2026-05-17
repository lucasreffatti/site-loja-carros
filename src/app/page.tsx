import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import InventorySection from "@/components/InventorySection";
import TestimonialSection from "@/components/TestimonialSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import BrandSidebar from "@/components/BrandSidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 relative">
      <TopBar />
      <Header />
      <BrandSidebar />
      
      <div id="inicio">
        <HeroSection />
      </div>

      <div id="estoque" className="bg-zinc-950">
        <InventorySection />
      </div>

      <div id="avaliacoes">
        <TestimonialSection />
      </div>

      <div id="sobre">
        <AboutSection />
      </div>

      <div id="contato">
        <LocationSection />
      </div>

      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-800/50 bg-zinc-950">
        <p className="text-zinc-400">© 2026 KD Automóveis. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs text-zinc-600">Desenvolvido com excelência.</p>
      </footer>
    </main>
  );
}
