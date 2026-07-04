import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import IonSystem from "@/components/IonSystem";
import VideoDemo from "@/components/VideoDemo";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      
      {/* Efeitos de Luz de Fundo (Glows) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] glow-violet rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] glow-emerald rounded-full blur-[150px] opacity-20 pointer-events-none" />

      {/* Componentes da Landing Page empilhados na ordem estratégica */}
      
      {/* 1. Topo da Agência Tech */}
      <Hero />
      
      {/* 2. Como solucionamos problemas (A nova seção!) */}
      <HowWeWork />
      
      {/* 3. Nosso SaaS Proprietário (com os 9 carrosseis de gerenciamento) */}
      <IonSystem /> 
      
      {/* 4. A demonstração responsiva (Mockup do Celular com vídeo) */}
      <VideoDemo />
      
      {/* 5. Funcionalidades */}
      <Features />

    </main>
  );
}