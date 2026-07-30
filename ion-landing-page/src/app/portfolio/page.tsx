"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Terminal, Code2, Cpu, Database } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// Array de Stacks focado em Engenharia de Software e IA
const stacks = [
  { name: "Python", category: "Backend & IA" },
  { name: "FastAPI", category: "Backend" },
  { name: "Next.js", category: "Frontend Arch" },
  { name: "TypeScript", category: "Frontend Arch" },
  { name: "LLM Local (GGUF)", category: "Engenharia de IA" },
  { name: "Prompt Engineering", category: "Engenharia de IA" },
  { name: "Pentest Labs", category: "Cybersecurity" },
];

// Array de Projetos demonstrando senioridade técnica
const projects = [
  {
    title: "Spotted Social v2",
    description: "Refatoração e migração de arquitetura para um ecossistema escalável separando Frontend e Backend com alto desempenho.",
    techs: ["Next.js", "FastAPI", "Python", "TypeScript"],
    icon: Code2,
    link: "#",
    github: "#"
  },
  {
    title: "Servidor AI Offline",
    description: "Implementação de servidor LLM local utilizando modelos avançados para automação e assistência em fluxo de desenvolvimento seguro.",
    techs: ["DeepSeek", "Ollama", "llama-server", "Python"],
    icon: Cpu,
    link: "#",
    github: "#"
  },
  {
    title: "Automação SAAP",
    description: "Script de automação para sincronização de relatórios de armazém com planilhas de gestão, eliminando trabalho manual diário.",
    techs: ["Python", "Pandas", "Automação"],
    icon: Database,
    link: "#",
    github: "#"
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white selection:text-black">
      
      {/* Navbar Minimalista do Portfólio */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para a Plataforma
          </Link>
          <div className="text-white font-bold uppercase tracking-widest text-sm">
            João Rodrigues
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Terminal className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-gray-300">Especialista em Engenharia de IA</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Construindo software <span className="text-gray-500">robusto, inteligente e escalável.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Foco no desenvolvimento Full Stack moderno e na integração de Inteligência Artificial para resolver desafios complexos de negócios.
          </p>
        </motion.div>

        {/* Stacks & Techs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            Arsenal Técnico
            <div className="h-px bg-white/10 flex-1 ml-4"></div>
          </h2>
          <div className="flex flex-wrap gap-3">
            {stacks.map((stack, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-lg bg-[#0a0a0a] border border-white/10 text-gray-300 text-sm font-medium hover:border-white/30 hover:bg-white/5 transition-colors cursor-default"
              >
                {stack.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projetos em Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            Projetos em Destaque
            <div className="h-px bg-white/10 flex-1 ml-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                        <GitHubIcon className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold text-gray-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </main>
  );
}