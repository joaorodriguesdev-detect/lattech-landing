"use client";

import { motion } from "framer-motion";

export default function VideoDemo() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            A experiência na <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500">palma da mão</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            100% responsivo. Seus clientes agendam e sua equipe gerencia tudo de qualquer dispositivo, com uma interface fluida e moderna.
          </p>
        </motion.div>

        {/* Mockup do Smartphone (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group mt-10"
        >
          {/* Borda de Vidro e Fundo do Celular */}
          <div className="relative p-2 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md max-w-[340px] md:max-w-[380px] w-full mx-auto z-20">
            
            {/* Tela Interna do Celular - Ajustado para o formato exato de gravação (9:16) */}
            <div className="rounded-[2rem] overflow-hidden relative bg-[#050505] aspect-[9/16] border border-white/5">
              
              {/* O detalhe do "Notch" (Ilha Dinâmica) no topo */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
                <div className="w-24 h-5 bg-[#050505] rounded-b-xl border-b border-x border-white/5"></div>
              </div>

              <video
                src="/app-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                // scale-110 (10% de zoom) + -translate-x-2 (empurra o vídeo para a esquerda para engolir a borda)
                className="w-full h-full object-cover object-center scale-110 -translate-x-2 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Glows de Luz por trás do celular para dar destaque */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-500/20 blur-[100px] rounded-full z-10 pointer-events-none opacity-50 transition-opacity group-hover:opacity-80"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-sky-400/10 blur-[80px] rounded-full z-10 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}