import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IonSystem from "@/components/IonSystem"; 
import VideoDemo from "@/components/VideoDemo"; 
import Features from "@/components/Features"; 
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Fundo preto puro ou ultra escuro (#050505), sem luzes coloridas espalhadas
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      
      <Navbar />
      <Hero />
      <IonSystem /> 
      <VideoDemo />
      <Features />
      <FinalCta />
      <Footer />

    </main>
  );
}