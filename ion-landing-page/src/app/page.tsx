import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IonSystem from "@/components/IonSystem"; // O seu Carrossel Desktop do Barbeiro
import VideoDemo from "@/components/VideoDemo"; // O seu Mockup com Vídeo Mobile
import Features from "@/components/Features"; // Onde vamos colocar os benefícios (fim dos furos, comissões)
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      
      {/* Luzes de Fundo (Azul e Ciano) */}
      <div className="absolute top-[-5%] left-[-10%] w-[60%] md:w-[50%] h-[40%] bg-blue-600/10 md:bg-blue-600/20 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] md:w-[50%] h-[40%] bg-sky-500/5 md:bg-sky-500/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      <Navbar />
      
      {/* 1. A Promessa Forte (Ex: A agenda que lota sua barbearia) */}
      <Hero />
      
      {/* 2. O Dashboard no Desktop girando no automático */}
      <IonSystem /> 
      
      {/* 3. A Experiência fluida na mão do Barbeiro */}
      <VideoDemo />

      {/* 4. Como resolvemos as dores dele */}
      <Features />

      {/* 5. Fechamento de Vendas */}
      <FinalCta />
      <Footer />

    </main>
  );
}