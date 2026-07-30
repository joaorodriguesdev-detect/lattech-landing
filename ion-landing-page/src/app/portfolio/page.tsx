"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Code2,
  Cpu,
  Database,
  X,
  Layers,
  Zap,
  Rocket,
} from "lucide-react";

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

type StackGroup = { label: string; items: string[] };

type Project = {
  title: string;
  description: string;
  techs: string[];
  icon: typeof Code2;
  link: string;
  github: string;
  details?: {
    stack: StackGroup[];
    architecture: string[];
    highlights: string[];
    highlightsLabel: string;
    deploy?: string[];
  };
};

// Projetos em destaque — os mais completos e com deploy/repositório real
const projects: Project[] = [
  {
    title: "SaaS Barbearia (Lattech)",
    description:
      "WebApp completo para agendamento de clientes e gestão administrativa de barbearias, com arquitetura multi-tenant, autenticação JWT/RBAC e upload de mídia integrado ao Supabase.",
    techs: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Supabase"],
    icon: Code2,
    link: "https://www.lattech.com.br",
    github: "https://github.com/joaorodriguesdev-detect/system-lattech",
    details: {
      stack: [
        { label: "Front-end", items: ["Next.js", "React", "SPA renderização otimizada"] },
        { label: "Back-end", items: ["Python", "FastAPI", "Pydantic", "Injeção de dependências"] },
        { label: "Persistência", items: ["PostgreSQL", "SQLModel / SQLAlchemy (ORM)"] },
        { label: "Infraestrutura", items: ["Docker", "Docker Compose", "GitHub Actions (CI/CD)"] },
      ],
      architecture: [
        "Modelo Multi-Tenant: isolamento lógico por company_id no banco de dados e resolução dinâmica de subdomínios no front-end, permitindo múltiplas barbearias no mesmo software com dados e interfaces totalmente isolados.",
        "Front-end (Client): Single Page Application robusta em Next.js e React, com componentes assíncronos e renderização otimizada.",
        "Back-end (Server): API RESTful de alta performance em Python/FastAPI, com tipagem estática via Pydantic.",
        "Persistência de Dados: PostgreSQL orquestrado via SQLModel/SQLAlchemy para mapeamento objeto-relacional seguro e eficiente.",
      ],
      highlightsLabel: "Diferencial Técnico",
      highlights: [
        "Roteamento Dinâmico Multi-Tenant: o front-end captura o subdomínio da URL (ex: mariobarber.lattech...) e faz lookup automático via API para carregar identidade visual e dados da empresa em tempo real.",
        "Prevenção de Overbooking e Timezones: tratamento estrito de timezones (evitando conflitos UTC vs Local) e validações transacionais contra dupla reserva de horários.",
        "Integração de Nuvem (Storage): Supabase para upload e gerenciamento de mídia estática (logos, banners, fotos de produtos), aliviando o servidor principal.",
        "Segurança e Controle de Acesso: JWT com RBAC, separando permissões de administradores e barbeiros.",
      ],
      deploy: [
        "Ambiente de Produção: VPS Linux.",
        "Pipeline de CI/CD: GitHub Actions — commits na branch principal disparam deploy via SSH (appleboy/ssh-action), com pull do código e rebuild automático dos contêineres.",
        "Containerização: Docker e Docker Compose, garantindo paridade entre desenvolvimento e produção.",
        "Hospedagem / Domínio: publicado sob *.lattech.com.br, com wildcards para subdomínios ilimitados por cliente.",
      ],
    },
  },
  {
    title: "Agente AutoFill",
    description:
      "Agente de IA que extrai dados de currículos (PDF, imagem ou texto) e preenche automaticamente formulários em portais ATS, com visão computacional multimodal e orquestração multi-agente.",
    techs: ["LangChain", "Gemini / DeepSeek", "FastAPI", "Next.js", "Docker"],
    icon: Cpu,
    link: "#",
    github: "https://github.com/joaorodriguesdev-detect/agent-autofill-detect",
    details: {
      stack: [
        { label: "Front-end", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
        { label: "Back-end", items: ["Python", "FastAPI", "Pydantic"] },
        {
          label: "IA & Orquestração",
          items: [
            "LangChain",
            "Google Generative AI SDK (Gemini 1.5/2.0 Flash — Visão)",
            "OpenAI SDK Wrapper (DeepSeek-Chat — Lógica/Texto)",
            "Ollama (LLMs locais)",
          ],
        },
        { label: "Processamento de Dados", items: ["Pillow (Visão Computacional)", "PyPDF (Extração de Texto)"] },
        { label: "Infraestrutura", items: ["Docker"] },
      ],
      architecture: [
        "Roteamento Multi-Agente (Orchestrator): avalia o tipo de arquivo recebido e direciona o processamento ao especialista adequado — modelos VLM (Gemini) para imagens e portfólios visuais, modelos de código/texto (DeepSeek) para PDFs puros e mapeamento lógico do formulário.",
        "Design Pattern Factory (LLMFactory): centraliza e padroniza a instanciação dos motores de IA, permitindo troca assíncrona e dinâmica entre provedores em nuvem ou LLMs locais.",
        "Graceful Degradation: tipagem estrita com Pydantic (campos Optional e defaults seguros) para que falhas de OCR ou dados ausentes não gerem quebras de servidor ou alucinações da IA.",
        "Desacoplamento de Responsabilidades: API RESTful assíncrona (FastAPI) isolada para o processamento de IA, comunicando-se de forma assíncrona com a interface da extensão (Next.js).",
      ],
      highlightsLabel: "Documentação / Testes / Diferenciais",
      highlights: [
        "Processamento Multimodal Avançado: ao contrário de extratores de currículo tradicionais baseados em regex, interpreta currículos altamente visuais e não lineares (como designs criados no Canva).",
        "Injeção de DOM: o script do front-end mapeia e injeta dados de forma estruturada nos formulários das plataformas de recrutamento.",
        "Engenharia de Prompt e JSON Estrito: os LLMs são encapsulados com instruções arquiteturais (with_structured_output), forçando retorno exclusivo de JSONs válidos.",
        "Ambiente Isolado e Escalável: back-end 100% conteinerizado com Docker, garantindo paridade entre desenvolvimento e produção.",
      ],
    },
  },
  {
    title: "Automação de Relatórios de Armazém",
    description:
      "Script de automação para sincronização de relatórios de armazém com planilhas de gestão, eliminando trabalho manual diário.",
    techs: ["Python", "Pandas", "Automação"],
    icon: Database,
    link: "#",
    github: "",
  },
];

function DetailSection({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Layers;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white mb-4">
        <Icon className="w-4 h-4 text-gray-400" />
        {title}
      </h4>
      {children}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = project.icon;
  const d = project.details;
  if (!d) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-start md:items-center justify-center p-4 md:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl my-8 rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 md:p-10"
        >
          <button
            onClick={onClose}
            aria-label="Fechar detalhes"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4 mb-8 pr-12">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">{project.description}</p>

          <DetailSection icon={Layers} title="Stack Usada">
            <div className="space-y-3">
              {d.stack.map((group) => (
                <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-xs font-semibold text-gray-300 shrink-0 sm:w-40">{group.label}</span>
                  <span className="text-sm text-gray-500">{group.items.join(" · ")}</span>
                </div>
              ))}
            </div>
          </DetailSection>

          <DetailSection icon={Cpu} title="Arquitetura / Padrões">
            <ul className="space-y-3">
              {d.architecture.map((item, i) => (
                <li key={i} className="text-sm text-gray-400 leading-relaxed pl-4 border-l border-white/10">
                  {item}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection icon={Zap} title={d.highlightsLabel}>
            <ul className="space-y-3">
              {d.highlights.map((item, i) => (
                <li key={i} className="text-sm text-gray-400 leading-relaxed pl-4 border-l border-white/10">
                  {item}
                </li>
              ))}
            </ul>
          </DetailSection>

          {d.deploy && (
            <DetailSection icon={Rocket} title="Deploy">
              <ul className="space-y-3">
                {d.deploy.map((item, i) => (
                  <li key={i} className="text-sm text-gray-400 leading-relaxed pl-4 border-l border-white/10">
                    {item}
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4" /> Repositório
              </a>
            )}
            {project.link !== "#" && (
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Deploy
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [openProject, setOpenProject] = useState<number | null>(null);

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
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-gray-300">Focado em Engenharia de Agentes de IA</span>
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
              const hasDetails = Boolean(project.details);
              return (
                <div
                  key={index}
                  role={hasDetails ? "button" : undefined}
                  tabIndex={hasDetails ? 0 : undefined}
                  onClick={() => hasDetails && setOpenProject(index)}
                  onKeyDown={(e) => {
                    if (hasDetails && (e.key === "Enter" || e.key === " ")) setOpenProject(index);
                  }}
                  className={`group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 flex flex-col h-full ${
                    hasDetails ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 hover:text-white transition-colors"
                        >
                          <GitHubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto mb-2">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold text-gray-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {hasDetails && (
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-300 transition-colors mt-4">
                      Ver detalhes técnicos →
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>

      {openProject !== null && projects[openProject].details && (
        <ProjectModal project={projects[openProject]} onClose={() => setOpenProject(null)} />
      )}
    </main>
  );
}
