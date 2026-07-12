"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  
  // Hooks do Framer Motion para monitorar o scroll
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Se rolou para baixo e já passou de 150px do topo, a navbar sobe (esconde)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      // Se rolou para cima, a navbar desce (aparece)
      setHidden(false);
    }
  });

  if (pathname === "/demonstracao") {
    return null;
  }

  // Função Sênior para scroll suave sem sujar a URL
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    const element = document.getElementById(targetId);
    
    if (element) {
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
      // A mágica acontece aqui: animamos o eixo Y baseado no estado "hidden"
      animate={{ y: hidden ? -150 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
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
          LAT<span className="text-blue-500">System</span>
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        {/* Links atualizados para a estrutura de SaaS */}
        <a href="#plataforma" onClick={(e) => handleScroll(e, 'plataforma')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">A Plataforma</a>
        <a href="#app" onClick={(e) => handleScroll(e, 'app')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">App do Cliente</a>
        <a href="#funcionalidades" onClick={(e) => handleScroll(e, 'funcionalidades')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">Funcionalidades</a>
      </div>

      <div className="flex items-center">
        <Link
          // Atualizado para combinar com o CTA final de PLG
          href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20ativar%20meus%2015%20dias%20grátis%20no%20LAT%20System."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-white transition-all rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-105"
        >
          Teste Grátis
        </Link>
      </div>
    </motion.nav>
  );
}