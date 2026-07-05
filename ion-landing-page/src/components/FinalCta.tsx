"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, CheckCircle2 } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#050505] border-t border-white/5">
      
      {/* Luzes de fundo azuis para imersão total */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Pílula de destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md"
        >
          <Zap className="w-4 h-4 text-sky-400" />
          <span className="text-sm font-semibold text-sky-100 tracking-wide uppercase">Risco Zero</span>
        </motion.div>

        {/* Título matador */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
        >
          Pronto para elevar o nível da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">gestão?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Não acredite apenas nas nossas palavras. Implemente o LAT System na sua operação hoje e veja os resultados aparecerem.
        </motion.p>

        {/* Checklists de segurança (Remove as objeções do cliente) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle2 className="w-5 h-5 text-sky-500" />
            <span className="text-sm font-medium">Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle2 className="w-5 h-5 text-sky-500" />
            <span className="text-sm font-medium">Configuração em 5 minutos</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle2 className="w-5 h-5 text-sky-500" />
            <span className="text-sm font-medium">Cancele quando quiser</span>
          </div>
        </motion.div>

        {/* Botão de Ação Massivo */}
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
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:scale-105"
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