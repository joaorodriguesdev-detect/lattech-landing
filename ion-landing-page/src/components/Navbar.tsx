"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  if (pathname === "/demonstracao") {
    return null;
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -150 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 md:top-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-5xl z-50 px-4 md:px-6 py-3 rounded-2xl md:rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] flex items-center justify-between"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all rounded-full group-hover:scale-105">
          <Image src="/logo.png" alt="Logo LATTECH" width={40} height={40} className="object-contain w-full h-full scale-125" />
        </div>
        <span className="text-base md:text-xl font-extrabold tracking-tight text-white uppercase">
          LAT<span className="text-gray-400 font-medium">System</span>
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        <a href="#plataforma" onClick={(e) => handleScroll(e, 'plataforma')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">A Plataforma</a>
        <a href="#app" onClick={(e) => handleScroll(e, 'app')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">App do Cliente</a>
        <a href="#funcionalidades" onClick={(e) => handleScroll(e, 'funcionalidades')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">Funcionalidades</a>
      </div>

      <div className="flex items-center">
        <Link
          href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20ativar%20meus%2015%20dias%20grátis%20no%20LAT%20System."
          target="_blank"
          rel="noopener noreferrer"
          // Botão Branco Sólido
          className="px-5 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-black transition-all rounded-lg md:rounded-xl bg-white hover:bg-gray-200 hover:scale-105"
        >
          Teste Grátis
        </Link>
      </div>
    </motion.nav>
  );
}