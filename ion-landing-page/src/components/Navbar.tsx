"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      // Fundo super transparente com blur mantido
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 border-b bg-[#050505]/30 backdrop-blur-md border-white/5"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Branding / Logo - Levemente reduzida no mobile para abrir espaço pro botão */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 transition-all rounded-xl group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <Image 
              src="/logo.png" 
              alt="Logo IonTech"
              width={48} 
              height={48}
              className="object-contain w-full h-full scale-125" 
            />
          </div>
          <span className="text-lg md:text-2xl font-bold tracking-tight text-white">
            Lat<span className="text-violet-500">Tech</span>
          </span>
        </Link>

        {/* Links Centrais (Exclusivos do Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#sobre" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sobre</Link>
          <Link href="#como-fazemos" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Como fazemos</Link>
          <Link href="#solucoes" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Soluções</Link>
          <Link href="#produto" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Nosso App</Link>
        </div>

        {/* Botão Direto (Visível no Mobile e no PC) */}
        <div className="flex items-center">
          <Link
            href="#contato"
            className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-white transition-all rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-105"
          >
            Fale com especialista
          </Link>
        </div>
        
      </div>
    </motion.nav>
  );
}