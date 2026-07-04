import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import TargetAudience from "@/components/TargetAudience";
import IonSystem from "@/components/IonSystem";
import VideoDemo from "@/components/VideoDemo";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      
      {/* Efeitos de Luz de Fundo Otimizados */}
      <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[50%] h-[50%] bg-violet-600/30 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[80%] md:w-[50%] h-[50%] bg-emerald-600/10 md:bg-emerald-600/20 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      {/* Componentes da Agência Tech */}
      <Hero />
      <HowWeWork />
      <TargetAudience />
      
      {/* O Nosso Produto Proprietário */}
      <IonSystem /> 
      
      {/* A Demonstração Mobile de volta na Home! */}
      <VideoDemo />

      {/* Fechamento com a Chamada de Ação */}
      <FinalCta />

    </main>
  );
}