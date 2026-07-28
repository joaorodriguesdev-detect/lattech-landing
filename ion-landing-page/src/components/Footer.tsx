"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Fundo preto puro, sem luzes vazando
    <footer className="relative bg-[#050505] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Coluna 1: Branding e Descrição */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="relative flex items-center justify-center w-10 h-10 transition-all rounded-full group-hover:scale-105">
                <Image 
                  src="/logo2.png" 
                  alt="Logo LATTECH"
                  width={40} 
                  height={40}
                  className="object-contain w-full h-full scale-125" 
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white uppercase">
                LAT<span className="text-gray-400 font-medium">TECH</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Especialistas em engenharia de IA e plataformas de alto desempenho. Transformamos desafios corporativos em código limpo, ágil e escalável.
            </p>
            
            {/* Redes Sociais - Hover Monocromático Premium */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:lattechapp@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (Atualizada para Produto) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Produto</h4>
            <ul className="space-y-4">
              <li><Link href="#plataforma" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">A Plataforma <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#app" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">App do Cliente <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#funcionalidades" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">Funcionalidades <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Coluna 3: Soluções */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Soluções</h4>
            <ul className="space-y-4">
              <li><Link href="/demonstracao" target="_blank" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">LAT System (App) <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#solucoes" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">Engenharia de Software <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#solucoes" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">Integrações de IA <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato Direto (Removido o azul do número de telefone) */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="text-sm text-gray-400">Curitiba, PR - Brasil</li>
              <li>
                <a href="https://wa.me/5541995707907" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-gray-300 transition-colors font-semibold">
                  +55 (41) 99570-7907
                </a>
              </li>
              <li>
                <a href="mailto:lattechapp@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  lattechapp@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória - Agora apenas branca com transparência */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Footer (Copyright e Legal) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-medium">
            &copy; {currentYear} LATTech Soluções Digitais. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Termos de Uso</Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}