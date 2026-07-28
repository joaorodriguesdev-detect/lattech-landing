"use client";

import { motion } from "framer-motion";
import { CalendarDays, Users, TrendingUp, WalletCards } from "lucide-react";

// Array limpo: Sem cores específicas, tudo padronizado no tema minimalista
const features = [
  {
    title: "Dashboard Financeiro",
    description: "Métricas precisas em tempo real. Controle faturamento, despesas e lucro líquido com gráficos imersivos e claros.",
    icon: TrendingUp,
  },
  {
    title: "Equipe e Comissões",
    description: "Cálculo automático de comissionamento. Divida pagamentos e gerencie a performance da equipe sem dor de cabeça.",
    icon: Users,
  },
  {
    title: "Agendamentos VIP",
    description: "Calendário interativo para você e seus clientes. Reduza faltas com lembretes automatizados e gestão de horários fluida.",
    icon: CalendarDays,
  },
  {
    title: "Gestão de Caixa",
    description: "Fechamento de caixa em poucos cliques. Múltiplos métodos de pagamento, controle de gorjetas e extratos detalhados.",
    icon: WalletCards,
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="relative py-24 md:py-32 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Hover sutil apenas na borda e fundo, sem sombras coloridas
                className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Icon className="w-6 h-6 text-white" />
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