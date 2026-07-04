"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/demonstracao") {
    return null;
  }

  // Função Sênior para scroll suave sem sujar a URL
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Impede o Next.js de colocar a # na URL
    const element = document.getElementById(targetId);
    
    if (element) {
      // Pega a posição do elemento e desconta o tamanho da navbar para não cobrir o título
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-5xl z-50 px-4 md:px-6 py-3 rounded-2xl md:rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all rounded-full group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          <Image 
            src="/logo.png" 
            alt="Logo LATTECH"
            width={40} 
            height={40}
            className="object-contain w-full h-full scale-125" 
          />
        </div>
        <span className="text-base md:text-xl font-extrabold tracking-tight text-white uppercase">
          LAT<span className="text-blue-500">TECH</span>
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        {/* Trocamos <Link> por <a> para controlarmos o clique manualmente */}
        <a href="#sobre" onClick={(e) => handleScroll(e, 'sobre')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">Sobre</a>
        <a href="#como-fazemos" onClick={(e) => handleScroll(e, 'como-fazemos')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">Como fazemos</a>
        <a href="#quem-atendemos" onClick={(e) => handleScroll(e, 'quem-atendemos')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">Quem atendemos</a>
        <Link href="/demonstracao" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Nosso App</Link>
      </div>

      <div className="flex items-center">
        <Link
          href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20LATTech."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-white transition-all rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-105"
        >
          Falar com especialista
        </Link>
      </div>
    </motion.nav>
  );
}