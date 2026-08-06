"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Code2,
  Cpu,
  Database,
  X,
  Layers,
  Zap,
  Rocket,
  Activity,
  Users,
  Bot,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Rastro de bolhas — efeito ambiente na paleta azul da marca (mesma dupla de
// cores do glow do site: --color-ion-blue e --color-ion-sky). Um punhado de
// bolhas sobe sozinho o tempo todo, bem discreto, e mexer o mouse intensifica
// o rastro. Desliga sozinho se o usuário prefere menos movimento.
function CursorBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    type Bubble = { x: number; y: number; r: number; vx: number; vy: number; life: number; maxLife: number; hue: "blue" | "sky" };
    let bubbles: Bubble[] = [];

    const spawnBubble = (x: number, y: number, spread: number) => {
      bubbles.push({
        x: x + (Math.random() - 0.5) * spread,
        y: y + (Math.random() - 0.5) * spread,
        r: 2 + Math.random() * 3.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.35 - Math.random() * 0.6,
        life: 0,
        maxLife: 110 + Math.random() * 70,
        hue: Math.random() > 0.5 ? "blue" : "sky",
      });
      if (bubbles.length > 220) bubbles.shift();
    };

    // Lote inicial — a pessoa já vê bolhas subindo assim que a página abre,
    // sem esperar o primeiro intervalo do gerador ambiente.
    for (let i = 0; i < 18; i++) {
      spawnBubble(Math.random() * width, Math.random() * height, 0);
    }

    // Rastro do mouse — nasce exatamente onde o cursor está, e a posição
    // também alimenta a repulsão das bolhas ambiente (ver tick()).
    let lastSpawn = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const now = performance.now();
      if (now - lastSpawn < 45) return;
      lastSpawn = now;
      spawnBubble(e.clientX, e.clientY, 12);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Bolhas ambiente — nascem sozinhas, espalhadas pela tela, o tempo todo.
    const ambientInterval = setInterval(() => {
      spawnBubble(Math.random() * width, height + 20, width * 0.9);
      spawnBubble(Math.random() * width, height + 20, width * 0.9);
    }, 260);

    let frame = 0;
    let running = true;
    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      bubbles = bubbles.filter((b) => b.life < b.maxLife);
      for (const b of bubbles) {
        b.life += 1;

        // Repulsão: bolhas perto do cursor são empurradas pra longe dele.
        const dx = b.x - mouseX;
        const dy = b.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 130;
        if (dist < repelRadius && dist > 0.01) {
          const force = (1 - dist / repelRadius) * 1.4;
          b.x += (dx / dist) * force;
          b.y += (dy / dist) * force;
        }

        b.x += b.vx + Math.sin(b.life * 0.06 + b.x) * 0.12;
        b.y += b.vy;
        const t = b.life / b.maxLife;
        const alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        const radius = b.r * (1 - t * 0.25);
        const color = b.hue === "blue" ? "37,99,235" : "56,189,248";
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, radius * 3.5);
        gradient.addColorStop(0, `rgba(${color},${alpha * 0.85})`);
        gradient.addColorStop(0.5, `rgba(${color},${alpha * 0.35})`);
        gradient.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(b.x, b.y, radius * 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      clearInterval(ambientInterval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

// Rótulo de seção no estilo de tag JSX — referência direta à stack do dono do portfólio
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-sm text-amber-400/90 tracking-tight">
      {"<"}
      {children}
      {" />"}
    </span>
  );
}

const stacks = [
  { name: "Python", category: "Backend & IA" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Next.js", category: "Frontend Arch" },
  { name: "TypeScript", category: "Frontend Arch" },
  { name: "CrewAI", category: "Engenharia de IA" },
  { name: "LangChain", category: "Engenharia de IA" },
  { name: "Google Generative AI", category: "Engenharia de IA" },
  { name: "LLM Local (Ollama)", category: "Engenharia de IA" },
  { name: "WebSocket", category: "Tempo Real" },
  { name: "PostgreSQL", category: "Dados" },
  { name: "SQLite", category: "Dados" },
  { name: "Docker", category: "Infra" },
  { name: "Supabase", category: "Infra" },
  { name: "Prompt Engineering", category: "Engenharia de IA" },
  { name: "Git & GitHub", category: "Ferramentas" },
];

const quickFacts = [
  {
    icon: GraduationCap,
    label: "Formação",
    value: "Engenharia de Software — Universidade Positivo (3° período)",
  },
  {
    icon: Briefcase,
    label: "Experiência",
    value: "3 anos como Supervisor de Tecnologia + 2 anos em projetos solo",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Curitiba - PR",
  },
];

type StackGroup = { label: string; items: string[] };

type Project = {
  title: string;
  status: string;
  description: string;
  techs: string[];
  icon: typeof Code2;
  link: string;
  github: string;
  details: {
    stack: StackGroup[];
    architecture: string[];
    highlights: string[];
    highlightsLabel: string;
    deploy?: string[];
  };
};

const projects: Project[] = [
  {
    title: "SaaS Barbearia (Lattech)",
    status: "Em produção",
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
    status: "Concluído",
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
    status: "Concluído",
    description:
      "Script de automação para sincronização de relatórios de armazém com planilhas de gestão, eliminando trabalho manual diário.",
    techs: ["Python", "Pandas", "Automação"],
    icon: Database,
    link: "#",
    github: "",
    details: {
      stack: [{ label: "Automação", items: ["Python", "Pandas"] }],
      architecture: [
        "Script executado em rotina programada, lendo os relatórios de armazém gerados pelo sistema interno e consolidando os dados em planilhas de gestão.",
      ],
      highlightsLabel: "Diferencial",
      highlights: [
        "Elimina a atualização manual diária das planilhas, reduzindo erro humano e liberando tempo da equipe de gestão.",
      ],
    },
  },
  {
    title: "SauTech — Gestão de Saúde",
    status: "Concluído",
    description:
      "Plataforma full-stack para gestão de agendas médicas, com dashboard duplo (calendário visual e tabela profissional), CRUD de convênios e métricas em tempo real.",
    techs: ["Next.js", "Flask", "SQLAlchemy", "Docker", "Tailwind CSS"],
    icon: Activity,
    link: "#",
    github: "",
    details: {
      stack: [
        { label: "Front-end", items: ["Next.js (App Router)", "TypeScript", "React", "Tailwind CSS"] },
        { label: "Back-end", items: ["Python", "Flask", "Flask-SQLAlchemy", "Flask-Login", "Flask-Cors"] },
        { label: "Persistência", items: ["SQLite (ORM)", "migração planejada para PostgreSQL"] },
        { label: "Infraestrutura", items: ["Docker", "Docker Compose"] },
      ],
      architecture: [
        "Arquitetura Client-Server orquestrada via Docker Compose, com backend Flask (porta 5000) e frontend Next.js (porta 3000) se comunicando por API REST.",
        "Frontend componentizado: refatoração de um page.tsx monolítico (~600 linhas) para uma arquitetura de ~80 linhas de orquestração + 5 componentes especializados (Sidebar, CalendarView, TabulatorView, PlanosView, DashboardView).",
        "Application Factory Pattern no backend (create_app), com 3 models ORM (User, Agendamento, Convenio) e criação automática das tabelas na inicialização.",
        "Camada de serviços com tolerância a falhas em 3 níveis (conexão, formato de resposta e validação de campos obrigatórios) para chamadas a APIs externas.",
      ],
      highlightsLabel: "Diferencial Técnico",
      highlights: [
        "4 telas integradas: Calendário Visual, Tabela Tabulator com filtro OR (paciente, CPF ou médico), CRUD de Convênios via modal e Dashboard com KPIs e funil de atendimento.",
        "Mini calendário dinâmico calculado a partir da data real do sistema, sem valores de mês/ano fixos no código.",
        "Testes automatizados com Pytest cobrindo autenticação e resiliência da API (fallback quando a API externa está indisponível).",
        "Design system próprio com paleta de cores e tipografia dedicada (Space Grotesk para títulos, Inter para texto, IBM Plex Mono para dados tabulares).",
      ],
    },
  },
  {
    title: "Spotted Social",
    status: "Em desenvolvimento",
    description:
      "Rede social universitária com feed, mensagens diretas em tempo real, mural de anúncios, eventos e um chatbot de suporte com IA — API privada por trás de um proxy Next.js.",
    techs: ["FastAPI", "Next.js", "WebSocket", "JWT", "CrewAI"],
    icon: Users,
    link: "#",
    github: "",
    details: {
      stack: [
        { label: "Back-end", items: ["Python", "FastAPI (assíncrono)", "SQLAlchemy 2.0", "Alembic", "Pydantic"] },
        { label: "Autenticação", items: ["JWT em cookies httpOnly", "Proteção CSRF"] },
        { label: "Tempo Real", items: ["WebSocket (chat 1:1 com heartbeat e múltiplas abas)"] },
        { label: "IA Embarcada", items: ["CrewAI", "Google Gemini (chatbot Spottinho)"] },
        { label: "Front-end", items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Axios"] },
      ],
      architecture: [
        "Monorepo dividido em backend_fastapi/ e frontend/, comunicando-se via proxy de rewrites do Next.js (evita CORS) ou chamadas diretas configuráveis por variável de ambiente.",
        "Modelos ORM cobrindo usuário, posts/comentários, notificações, conversas/mensagens diretas, mural, eventos e auditoria, com tabelas associativas para seguidores e curtidas.",
        "Middleware Edge no Next.js protegendo rotas autenticadas e redirecionando usuários já logados para longe das telas de login/registro.",
        "API privada por design: o backend FastAPI não é exposto diretamente à internet — todo tráfego passa pelo proxy do frontend.",
      ],
      highlightsLabel: "Funcionalidades",
      highlights: [
        "Feed com posts anônimos ou identificados, curtidas, comentários e sistema de seguidores.",
        "Direct Messages em tempo real via WebSocket, com reconexão automática e reações em mensagens.",
        "Mural de classificados e eventos universitários com CRUD completo.",
        "Painel administrativo com estatísticas, moderação de conteúdo, banimento de usuários e log de auditoria.",
      ],
    },
  },
  {
    title: "Agente Spottinho (Chatbot IA)",
    status: "Concluído",
    description:
      "Agente de suporte virtual do Spotted Social, com arquitetura multi-agente para interpretar dúvidas de novos usuários e buscar respostas em tempo real na base de conhecimento da plataforma.",
    techs: ["CrewAI", "Gemini 2.5 Flash", "Ollama", "Python"],
    icon: Bot,
    link: "#",
    github: "",
    details: {
      stack: [
        { label: "Ambiente", items: ["Python 3.12+ (gerenciado via uv)"] },
        { label: "Orquestração", items: ["CrewAI"] },
        { label: "LLM em Nuvem", items: ["Google Gemini API (gemini-2.5-flash)"] },
        { label: "LLM Local", items: ["Qwen 2.5 Coder via Ollama (execução 100% offline)"] },
      ],
      architecture: [
        "Padrão ReAct (Reasoning and Acting): o agente avalia a dúvida do usuário, raciocina se possui a informação e decide se deve executar uma ação.",
        "Function Calling (Tools): o LLM invoca de forma autônoma uma função Python decorada com @tool para consultar o manual interno da plataforma.",
        "Separação de papéis (estilo CLT): Agent (persona, cargo e objetivos), Task (ordem de serviço e formato de saída esperado) e Crew (orquestração sequencial).",
        "Desenhado como esqueleto isolado e modular — roda de forma independente antes de ser integrado como endpoint em um backend corporativo (ex: FastAPI).",
      ],
      highlightsLabel: "Diferencial",
      highlights: [
        "Suporte nativo a execução 100% local/offline com Qwen 2.5 Coder via Ollama, sem depender de API externa quando necessário.",
        "Base do assistente Spottinho usado em produção dentro do Spotted Social, testável isoladamente antes da integração.",
      ],
    },
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
        <Icon className="w-4 h-4 text-amber-400" />
        {title}
      </h4>
      {children}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = project.icon;
  const d = project.details;

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

          <div className="flex items-center gap-4 mb-2 pr-12">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
              <span className="text-xs font-semibold text-amber-400/90">{project.status}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mt-6 mb-8">{project.description}</p>

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

          {(project.github || project.link !== "#") && (
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" /> Repositório
                </a>
              )}
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" /> Deploy
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-amber-400/20 selection:text-white relative">
      <CursorBubbles />
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para a Plataforma
          </Link>
          <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-gray-500">
            <a href="#sobre" className="hover:text-amber-400 transition-colors">sobre</a>
            <a href="#projetos" className="hover:text-amber-400 transition-colors">projetos</a>
            <a href="#stack" className="hover:text-amber-400 transition-colors">stack</a>
            <a href="#contato" className="hover:text-amber-400 transition-colors">contato</a>
          </div>
          <div className="text-white font-bold uppercase tracking-widest text-sm">
            João Rodrigues
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 pt-32 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-gray-300">Focado em Engenharia de Agentes de IA</span>
          </div>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-4xl">
            Construindo software <span className="text-gray-500">robusto, inteligente e escalável.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
            Foco no desenvolvimento Full Stack moderno e na integração de Inteligência Artificial para resolver desafios complexos de negócios.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-amber-400 transition-colors"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold hover:border-white/30 transition-colors"
            >
              Entrar em contato
            </a>
          </div>
        </motion.div>

        {/* Sobre */}
        <motion.section
          id="sobre"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-28 scroll-mt-24"
        >
          <div className="mb-8">
            <SectionTag>Sobre</SectionTag>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Estudante de Engenharia de Software, construindo produtos reais desde antes de formar.
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Curso Engenharia de Software na Universidade Positivo e Análise e Desenvolvimento de Sistemas na
                  Unicesumar, e uso cada projeto pessoal como campo de teste para o que aprendo em sala de aula — e
                  vice-versa. Já desenvolvi um SaaS para gestão de barbearias, sistemas de automação para empresas e
                  uma rede social acadêmica, unindo experiência prática em Python e Next.js à engenharia de agentes de
                  IA, minha frente de estudo mais recente.
                </p>
                <p>
                  Antes de migrar para desenvolvimento em tempo integral, passei 3 anos como Supervisor de Tecnologia
                  na Prefeitura Municipal de Rio Branco do Sul, liderando equipe técnica, controlando prazos e SLA de
                  atendimento e gerenciando acessos e segurança da informação — uma bagagem que hoje se traduz em
                  atenção a prazos, organização e cuidado com dados também no código que escrevo.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              {quickFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="p-5 rounded-xl bg-[#0a0a0a] border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {fact.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 leading-snug">{fact.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Projetos em Destaque */}
        <motion.section
          id="projetos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-28 scroll-mt-24"
        >
          <div className="mb-8">
            <SectionTag>Projetos</SectionTag>
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">Projetos em Destaque</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setOpenProject(index)}
                  className="group text-left relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 flex flex-col h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500">{project.status}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold text-gray-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400/90 group-hover:text-amber-300 transition-colors mt-auto">
                    + Informações
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </button>
              );
            })}
          </div>
        </motion.section>

        {/* Stacks & Techs */}
        <motion.section
          id="stack"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-28 scroll-mt-24"
        >
          <div className="mb-8">
            <SectionTag>Stack</SectionTag>
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">Arsenal Técnico</h2>
          <div className="flex flex-wrap gap-3">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-lg bg-[#0a0a0a] border border-white/10 text-gray-300 text-sm font-medium hover:border-amber-400/40 hover:bg-white/5 transition-colors cursor-default"
              >
                {stack.name}
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Contato / Rodapé */}
      <footer id="contato" className="relative z-10 border-t border-white/10 scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-16">
          <div className="mb-8">
            <SectionTag>Contato</SectionTag>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Vamos conversar?</h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Aberto a oportunidades de estágio e desenvolvimento — e sempre disposto a trocar ideia sobre
                engenharia de agentes de IA.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:joaorodriguesdev@hotmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                joaorodriguesdev@hotmail.com
              </a>
              <a
                href="tel:+5541995707907"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (41) 99570-7907
              </a>
              <a
                href="https://github.com/joaorodriguesdev-detect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                github.com/joaorodriguesdev-detect
              </a>
              <a
                href="https://linkedin.com/in/joaorodrigues-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
                linkedin.com/in/joaorodrigues-dev
              </a>
            </div>
          </div>
          <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-600">
            <span>© {new Date().getFullYear()} João Rodrigues. Todos os direitos reservados.</span>
            <span className="font-mono">Curitiba, PR — Brasil</span>
          </div>
        </div>
      </footer>

      {openProject !== null && (
        <ProjectModal project={projects[openProject]} onClose={() => setOpenProject(null)} />
      )}
    </main>
  );
}