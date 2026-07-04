"use client";

import { motion } from "framer-motion";
import { Rocket, TerminalSquare, Network, Target } from "lucide-react";

export default function TargetAudience() {
  return (
    <section id="quem-atendemos" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-b border-white/5">
      
      {/* Background Glow sutil no topo da seção */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Cabeçalho Centralizado (Totalmente diferente da concorrência) */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Target className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-semibold text-sky-200 uppercase tracking-widest">Perfil Ideal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-6"
          >
            Engenharia para empresas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-300">não têm tempo a perder</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            Nós não somos uma agência tradicional. Somos uma equipe de especialistas que entra para resolver gargalos complexos e acelerar seu faturamento através da tecnologia.
          </motion.p>
        </div>

        {/* Grid de 3 Colunas (Cards Premium ao invés de lista numérica) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 group overflow-hidden"
          >
            {/* Efeito de luz interna no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                <Rocket className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Escala Rápida e Segura</h3>
              <p className="text-gray-400 leading-relaxed">
                Você tem urgência em modernizar sua operação. Aplicamos inteligência artificial e arquitetura de ponta para entregar resultados tangíveis muito antes do prazo comum do mercado.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-sky-400/40 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:bg-sky-400/20 group-hover:border-sky-400/50 transition-all duration-300 shadow-lg">
                <TerminalSquare className="w-6 h-6 text-sky-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Código Limpo, Zero Excesso</h3>
              <p className="text-gray-400 leading-relaxed">
                Desenvolvemos sistemas sob medida, calibrados exatamente para a sua necessidade real. Uma base de código robusta e preparada para o futuro. Apenas performance.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                <Network className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Parceiros Estratégicos</h3>
              <p className="text-gray-400 leading-relaxed">
                Você precisa de inteligência técnica, não só de braço operacional. Unimos nossa expertise em engenharia com visão de negócios para arquitetar soluções que maximizam sua margem de lucro.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}