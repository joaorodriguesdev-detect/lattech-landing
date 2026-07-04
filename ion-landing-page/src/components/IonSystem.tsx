"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const dashboardImages = [
  "/dash-1.png",
  "/dash-2.png",
  "/dash-3.png",
  "/dash-4.png",
  "/dash-5.png",
  "/dash-6.png",
  "/dash-7.png",
  "/dash-8.png",
  "/dash-9.png",
];

export default function IonSystem() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === dashboardImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Container de Texto Centralizado */}
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-semibold text-sky-200">Nosso Produto Proprietário</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl"
          >
            Conheça nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-300">WebApp Premium</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl"
          >
            O <strong className="text-white">LATSystem</strong> é a prova da nossa excelência. Um ecossistema completo desenvolvido pela LATTECH para controle financeiro, gestão de equipes e agendamentos inteligentes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* BOTÃO ATUALIZADO ABRINDO NOVA ABA */}
            <Link
              href="/demonstracao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-sm font-bold text-white transition-all rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Acessar WebApp Premium Lattech
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Mockup Visual com Carrossel Automático */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2 md:p-4 shadow-2xl relative">
            
            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a] relative group flex flex-col">
              
              {/* Barra superior estilo macOS */}
              <div className="w-full h-8 md:h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02] shrink-0 z-20">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-sky-400/30 border border-sky-400/50"></div>
              </div>
              
              {/* Contêiner de Imagens - Técnica do Ghost Element */}
              <div className="relative w-full bg-[#050505] overflow-hidden">
                <Image
                  src={dashboardImages[0]}
                  alt="Ghost"
                  width={1920}
                  height={1080}
                  className="w-full h-auto opacity-0 pointer-events-none"
                />

                <AnimatePresence>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={dashboardImages[currentIndex]}
                      alt={`Interface Ion System - Tela ${currentIndex + 1}`}
                      width={1920}
                      height={1080}
                      priority={currentIndex === 0}
                      quality={100}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Luzes de Glow por cima do Mockup */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none z-10"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-sky-400/20 blur-[80px] rounded-full pointer-events-none z-10"></div>
            </div>

            {/* Pontos de Navegação do Carrossel */}
            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {dashboardImages.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? "w-6 bg-sky-300" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}