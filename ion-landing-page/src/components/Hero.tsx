"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
      
      {/* O Clarão Roxo na Esquerda (Estilo Print 1) */}
      <div className="absolute top-[-10%] left-[-20%] w-[800px] h-[800px] bg-violet-600/40 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <Terminal className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-semibold text-gray-200 tracking-wide">LATTech • Decolando sua empresa</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 max-w-5xl leading-tight"
          >
            Transformamos desafios em software sob medida com até <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">50% mais agilidade</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
          >
            Desenvolvemos soluções no tamanho do seu desafio. Com inteligência artificial estratégica e código limpo, entregamos com mais precisão, mais velocidade e zero desperdício.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full sm:w-auto"
          >
            <Link
              href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20LATTech."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-10 py-5 text-base font-bold text-white transition-all rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:scale-105"
            >
              Falar com especialista
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}