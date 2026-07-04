"use client";

import { motion } from "framer-motion";
import { CalendarDays, Users, TrendingUp, WalletCards } from "lucide-react";

// Array de dados para facilitar a manutenção futura
const features = [
  {
    title: "Dashboard Financeiro",
    description: "Métricas precisas em tempo real. Controle faturamento, despesas e lucro líquido com gráficos imersivos e claros.",
    icon: TrendingUp,
    glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    iconColor: "text-emerald-400",
  },
  {
    title: "Equipe e Comissões",
    description: "Cálculo automático de comissionamento. Divida pagamentos e gerencie a performance de cada barbeiro sem dor de cabeça.",
    icon: Users,
    glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
    iconColor: "text-violet-400",
  },
  {
    title: "Agendamentos VIP",
    description: "Calendário interativo para você e seus clientes. Reduza faltas com lembretes automatizados e gestão de horários fluida.",
    icon: CalendarDays,
    glow: "group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]",
    iconColor: "text-sky-400",
  },
  {
    title: "Gestão de Caixa",
    description: "Fechamento de caixa em poucos cliques. Múltiplos métodos de pagamento, controle de gorjetas e extratos detalhados.",
    icon: WalletCards,
    glow: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]",
    iconColor: "text-rose-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Glow de fundo sutil para a seção de features */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] glow-violet rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Tudo o que sua empresa precisa. <br className="hidden md:block" />
            <span className="text-gray-400">E nada do que não precisa.</span>
          </motion.h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                // Animação em cascata (stagger) baseada no index
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 ${feature.glow}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}