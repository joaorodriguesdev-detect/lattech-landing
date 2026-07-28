"use client";

import { motion } from "framer-motion";

export default function VideoDemo() {
  return (
    <section id="app" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            App exclusivo para <span className="text-gray-400">seus clientes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma experiência de agendamento perfeita. Seus clientes reservam horários, escolhem profissionais e compram produtos de qualquer dispositivo, sem precisar baixar nada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group mt-10"
        >
          {/* Moldura de Vidro Minimalista Premium */}
          <div className="relative p-2 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md max-w-[340px] md:max-w-[380px] w-full mx-auto z-20">
            
            <div className="rounded-[2rem] overflow-hidden relative bg-[#050505] aspect-[9/16] border border-white/5">
              
              {/* O Notch foi removido para não conflitar com a edição do seu novo vídeo */}

              <video
                src="/barberpro1.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                // Classes limpas: sem scale e sem translate. Ajuste 100% perfeito.
                className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}