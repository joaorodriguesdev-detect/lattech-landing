"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5">
      
      {/* O Clarão Azul Corporativo - Fundo do Produto */}
      <div className="absolute top-[5%] left-[-10%] w-[250px] h-[250px] md:w-[800px] md:h-[800px] bg-blue-600/10 md:bg-blue-600/30 blur-[90px] md:blur-[180px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Pílula de Produto */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.1)]"
          >
            <Cpu className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-semibold text-sky-100 tracking-wide">LAT System • Plataforma Inteligente</span>
          </motion.div>

          {/* Título Focado no Benefício do Produto */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 max-w-5xl leading-tight"
          >
            Gestão absoluta e automação para empresas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">exigem alta performance</span>
          </motion.h1>

          {/* Subtítulo vendendo a engenharia por trás do app */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
          >
            Um ecossistema completo construído com engenharia avançada de IA. Controle sua agenda, gerencie sua equipe e escale seu faturamento com uma interface desenhada para resultados rápidos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20LAT%20System."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-10 py-4 text-sm md:text-base font-bold text-white transition-all rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105"
            >
              Agendar Demonstração
            </Link>
            
            <a
              href="#produto"
              className="flex items-center justify-center w-full sm:w-auto px-10 py-4 text-sm md:text-base font-bold text-gray-300 transition-all rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white"
            >
              Conhecer a Plataforma
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}