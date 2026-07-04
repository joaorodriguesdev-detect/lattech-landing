"use client";

import { motion } from "framer-motion";
import { Search, Zap, Star } from "lucide-react";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section id="como-fazemos" className="relative py-24 bg-[#050505] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-violet-500"></div>
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded uppercase tracking-widest text-xs font-bold text-gray-400">
              LAT <span className="text-violet-500">TECH</span>
            </div>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-violet-500"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight"
          >
            Como solucionamos seu problema em até 50% mais rápido
          </motion.h2>
        </div>

        {/* Grid de Cards (Estilo Print 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden group hover:border-violet-500/30 transition-colors"
          >
            {/* Ícone com Efeito Metade-Luz */}
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-violet-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-b from-violet-500 to-violet-800 rounded-full flex items-center justify-center clip-bottom">
                <Search className="text-white w-6 h-6" />
              </div>
              {/* Linha de corte visual */}
              <div className="absolute bottom-2 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent blur-[1px]"></div>
            </div>
            <p className="text-lg font-medium text-white">Diagnóstico técnico<br/>em até 24h</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden group hover:border-violet-500/30 transition-colors"
          >
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-violet-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-b from-violet-500 to-violet-800 rounded-full flex items-center justify-center clip-bottom">
                <Star className="text-white w-6 h-6" />
              </div>
              <div className="absolute bottom-2 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent blur-[1px]"></div>
            </div>
            <p className="text-lg font-medium text-white">Desenvolvimento enxuto,<br/>calibrado com IA</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden group hover:border-violet-500/30 transition-colors"
          >
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-violet-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-b from-violet-500 to-violet-800 rounded-full flex items-center justify-center clip-bottom">
                <Zap className="text-white w-6 h-6" />
              </div>
              <div className="absolute bottom-2 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent blur-[1px]"></div>
            </div>
            <p className="text-lg font-medium text-white">Execução com time sênior e<br/>foco absoluto no que importa</p>
          </motion.div>

        </div>

        {/* CTA Central */}
        <div className="flex justify-center">
          <div className="flex justify-center">
          <Link
            href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20LATTech."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-sm font-bold text-white transition-all rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105"
          >
            Falar com especialista
          </Link>
        </div>
        </div>

      </div>
    </section>
  );
}