"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="contato" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Card Principal com Glow (Estilo Print 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] bg-[#0a0a0a] border border-white/5 p-10 md:p-20 overflow-hidden text-center shadow-2xl"
        >
          {/* Brilho Inferior (Glow) */}

          <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] h-[60%] bg-blue-600/40 blur-[100px] pointer-events-none rounded-t-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Vamos direto ao ponto?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Agende um diagnóstico técnico do seu projeto. Sem burocracia, sem enrolação. Focado exclusivamente no que importa para acelerar sua ideia.
            </p>
            <Link
              href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20técnico%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-black transition-all rounded-xl bg-white hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105"
            >
              Falar com especialista
            </Link>
          </div>
        </motion.div>

        {/* Chamada Final Isolada (Estilo Print 3) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="text-gray-400 text-lg md:text-xl mb-6">
            Receba um diagnóstico do seu negócio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            Clique no botão e agende <br className="hidden md:block" />
            com um dos nossos engenheiros
          </h2>
          <Link
            href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20IonTech."
            target="_blank"
            rel="noopener noreferrer"

            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-105"
          >
            Falar com especialista
          </Link>
        </motion.div>

      </div>
    </section>
  );
}