import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import TargetAudience from "@/components/TargetAudience";
import IonSystem from "@/components/IonSystem";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      
      {/* Efeitos de Luz de Fundo (Glows) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] glow-violet rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] glow-emerald rounded-full blur-[150px] opacity-20 pointer-events-none" />

      {/* Componentes da Agência */}
      <Hero />
      <HowWeWork />
      <TargetAudience />
      
      {/* O Gancho para o App (Mantido na Home com o Carrossel) */}
      <IonSystem /> 

      {/* Fechamento para captar o Lead */}
      <FinalCta />

    </main>
  );
}