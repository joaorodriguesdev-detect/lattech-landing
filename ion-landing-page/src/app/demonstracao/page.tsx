"use client";

import { motion, AnimatePresence } from "framer-motion";
import VideoDemo from "@/components/VideoDemo";
import Features from "@/components/Features";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Monitor } from "lucide-react";
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

export default function DemonstracaoPage() {
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
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      
      {/* Glows exclusivos da página do App */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-violet-600/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Botão Flutuante de Voltar (Clean e Minimalista) */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl backdrop-blur-md transition-all text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </Link>

      {/* Botão Comercial Flutuante no canto direito (Opcional, mas bom pra conversão) */}
      <Link 
        href="https://wa.me/5541995707907?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Ion%20System." 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-6 right-6 z-50 px-5 py-2 text-xs font-bold text-white transition-all rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
      >
        Falar com Comercial
      </Link>

      {/* SEÇÃO 1: VISÃO DESKTOP (CARROSSEL) */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
        >
          <Monitor className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-semibold text-violet-200">Visão Desktop Completa</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
        >
          Controle total no seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-emerald-400">Computador</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16"
        >
          Um dashboard poderoso e intuitivo para você gerenciar faturamento, agenda e equipe com uma visão macro do seu negócio.
        </motion.p>

        {/* Mockup do Computador */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2 md:p-4 shadow-2xl relative">
            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a] relative group flex flex-col">
              
              {/* Barra superior estilo macOS */}
              <div className="w-full h-8 md:h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02] shrink-0 z-20">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500/30 border border-emerald-500/50"></div>
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
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-500/20 blur-[80px] rounded-full pointer-events-none z-10"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none z-10"></div>
            </div>

            {/* Pontos de Navegação do Carrossel */}
            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {dashboardImages.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? "w-6 bg-emerald-400" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>
        </motion.div>
      </div>

      {/* SEÇÃO 2: VISÃO MOBILE (VÍDEO) E FEATURES */}
      <div className="relative z-10 mt-10 md:mt-20">
        <VideoDemo />
        <Features />
      </div>
      
    </main>
  );
}