"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Pílula Monocromática */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Cpu className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-gray-300 tracking-wide">LAT System • Plataforma Inteligente</span>
          </motion.div>

          {/* Título sem gradiente, 100% Branco e Cinza claro */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 max-w-5xl leading-tight"
          >
            Gestão absoluta e automação para empresas que <span className="text-gray-400">exigem alta performance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed"
          >
            Um ecossistema completo construído com engenharia avançada. Controle sua agenda, gerencie sua equipe e escale seu faturamento com uma interface focada em resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Botão Principal: Estilo App (Branco Sólido) */}
            <Link
              href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20LAT%20System."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-10 py-4 text-sm md:text-base font-bold text-black transition-all rounded-xl bg-white hover:bg-gray-200"
            >
              Agendar Demonstração
            </Link>
            
            {/* Botão Secundário: Estilo App (Fundo escuro, borda sutil) */}
            <a
              href="#produto"
              className="flex items-center justify-center w-full sm:w-auto px-10 py-4 text-sm md:text-base font-semibold text-gray-300 transition-all rounded-xl bg-[#0a0a0a] border border-white/10 hover:bg-white/5"
            >
              Conhecer a Plataforma
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}