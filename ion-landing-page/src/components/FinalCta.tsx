"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, CheckCircle2 } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#050505] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Pílula Monocromática */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <Zap className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-gray-300 tracking-wide uppercase">Risco Zero</span>
        </motion.div>

        {/* Título matador sem gradiente */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
        >
          Pronto para elevar o nível da sua <span className="text-gray-400">gestão?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Não acredite apenas nas nossas palavras. Implemente o LAT System na sua operação hoje e veja os resultados aparecerem.
        </motion.p>

        {/* Checklists de segurança (Ícones e textos padronizados em tons neutros) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">Configuração em 5 minutos</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">Cancele quando quiser</span>
          </div>
        </motion.div>

        {/* Botão de Ação Massivo (Premium White) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20ativar%20meus%2015%20dias%20grátis%20no%20LAT%20System."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black transition-all rounded-2xl bg-white hover:bg-gray-200 hover:scale-105"
          >
            Experimente 15 dias grátis
          </Link>
          <p className="mt-4 text-xs text-gray-500 font-medium">
            Liberação imediata do sistema completo.
          </p>
        </motion.div>

      </div>
    </section>
  );
}