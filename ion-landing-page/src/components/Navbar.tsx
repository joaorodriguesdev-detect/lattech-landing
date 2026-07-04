"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Se o usuário estiver na página do App, a Navbar principal desaparece
  if (pathname === "/demonstracao") {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      // Estilo "Ilha Flutuante": Centralizada, com margem no topo, bordas arredondadas e blur intenso
      className="fixed top-4 md:top-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-5xl z-50 px-4 md:px-6 py-3 rounded-2xl md:rounded-[2rem] bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between"
    >
      {/* Branding / Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all rounded-full group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
          <Image 
            src="/logo.png" 
            alt="Logo LATTECH"
            width={40} 
            height={40}
            className="object-contain w-full h-full scale-125" 
          />
        </div>
        <span className="text-base md:text-xl font-extrabold tracking-tight text-white uppercase">
          LAT<span className="text-violet-500">TECH</span>
        </span>
      </Link>

      {/* Links Centrais (Exclusivos do Desktop) */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="#sobre" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sobre</Link>
        <Link href="#como-fazemos" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Como fazemos</Link>
        <Link href="#quem-atendemos" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Quem atendemos</Link>
        <Link href="/demonstracao" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Nosso App</Link>
      </div>

      {/* Botão Direto com pílula arredondada */}
      <div className="flex items-center">
        <Link
          href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20LATTech."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-white transition-all rounded-lg md:rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-105"
        >
          Falar com especialista
        </Link>
      </div>
    </motion.nav>
  );
}