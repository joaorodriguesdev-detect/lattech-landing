import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import TargetAudience from "@/components/TargetAudience";
import IonSystem from "@/components/IonSystem";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      
      {/* Efeitos de Luz de Fundo - OTIMIZADOS PARA MOBILE (blur-3xl ou blur-[80px]) e DESKTOP (blur-[150px]) */}
      <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[50%] h-[50%] bg-violet-600/30 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[80%] md:w-[50%] h-[50%] bg-emerald-600/10 md:bg-emerald-600/20 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      {/* Componentes da Agência */}
      <Hero />
      <HowWeWork />
      <TargetAudience />

    </main>
  );
}