"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function TargetAudience() {
  return (
    <section id="quem-atendemos" className="relative py-24 bg-[#050505] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Coluna da Esquerda - Título */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Quem atendemos</h2>
              <Sparkles className="w-5 h-5 text-violet-500" />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Empresas que exigem alto nível técnico, agilidade na entrega e soluções sem desperdício de tempo. Se você sabe o valor de uma engenharia de software bem feita, nós somos o seu time.
            </p>
          </motion.div>

          {/* Coluna da Direita - Lista Numerada */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 lg:pl-12"
          >
            <div className="flex flex-col">
              
              {/* Item 01 */}
              <div className="flex flex-col md:flex-row gap-6 pb-10 border-b border-white/10 mb-10 group">
                <span className="text-6xl md:text-7xl font-bold text-transparent transition-colors duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(139,92,246,0.8)]">
                  01
                </span>
                <div className="mt-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Buscam escalar ou modernizar rápido</h3>
                  <p className="text-gray-400">
                    Atuamos com engenharia de ponta e inteligência artificial para entregar resultados reais antes do prazo do mercado, destravando o gargalo tecnológico da sua operação.
                  </p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="flex flex-col md:flex-row gap-6 pb-10 border-b border-white/10 mb-10 group">
                <span className="text-6xl md:text-7xl font-bold text-transparent transition-colors duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(139,92,246,0.8)]">
                  02
                </span>
                <div className="mt-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Exigem código limpo e arquitetura robusta</h3>
                  <p className="text-gray-400">
                    Criamos sistemas sob medida para a sua dor atual, garantindo que a base de código suporte o crescimento de amanhã. Sem exageros, calibrado exatamente para o que você precisa.
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="flex flex-col md:flex-row gap-6 group">
                <span className="text-6xl md:text-7xl font-bold text-transparent transition-colors duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(139,92,246,0.8)]">
                  03
                </span>
                <div className="mt-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Querem parceiros estratégicos, não apenas codificadores</h3>
                  <p className="text-gray-400">
                    Unimos expertise técnica com visão de mercado corporativo. Nossos especialistas tomam decisões de arquitetura que impactam diretamente a economia e o lucro da sua empresa.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}