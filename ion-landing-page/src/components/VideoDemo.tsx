"use client";

import { motion } from "framer-motion";

export default function VideoDemo() {
  return (
    // Adicionado o id="app" para o scroll da Navbar funcionar[cite: 2]
    <section id="app" className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            App exclusivo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">seus clientes</span>
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
          <div className="relative p-2 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md max-w-[340px] md:max-w-[380px] w-full mx-auto z-20">
            
            <div className="rounded-[2rem] overflow-hidden relative bg-[#050505] aspect-[9/16] border border-white/5">
              
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
                <div className="w-24 h-5 bg-[#050505] rounded-b-xl border-b border-x border-white/5"></div>
              </div>

              <video
                src="/app-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover object-center scale-110 -translate-x-2 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-600/20 blur-[100px] rounded-full z-10 pointer-events-none opacity-50 transition-opacity group-hover:opacity-80"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-sky-500/10 blur-[80px] rounded-full z-10 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}