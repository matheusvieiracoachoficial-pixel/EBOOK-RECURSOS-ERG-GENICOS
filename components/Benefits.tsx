
import React from 'react';
import { CheckCircle2, Zap, Target, Brain, ShieldCheck, Flame, Sword, Utensils, Dumbbell, Pill } from 'lucide-react';
import { cn } from '../lib/utils';

const benefits = [
  {
    title: "Guia Alimentar Sem Neurose",
    description: "Aprenda a comer para crescer sem viver com uma balança no bolso. Simples e funcional.",
    icon: <Utensils className="w-8 h-8 text-primary" />
  },
  {
    title: "Treino de Ataque",
    description: "Protocolos para Academia ou Casa. Intensidade real para sair do 'fofinho' para o denso.",
    icon: <Dumbbell className="w-8 h-8 text-secondary" />
  },
  {
    title: "Lista de Suplementos Reais",
    description: "Pare de rasgar dinheiro. Saiba exatamente o que comprar para ter performance.",
    icon: <Pill className="w-8 h-8 text-accent" />
  },
  {
    title: "Resultados em 7 Dias",
    description: "Mais força, mais pump, mais recuperação. Sinta a diferença na primeira semana.",
    icon: <Flame className="w-8 h-8 text-orange-400" />
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-background px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-8xl font-black text-foreground font-display uppercase italic tracking-tighter leading-[0.85]">
            CHEGA DE <br /><span className="text-primary underline decoration-primary/20">DESCULPAS.</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 italic max-w-3xl mx-auto font-black uppercase tracking-tighter">
            VOCÊ VAI RECEBER O MAPA COMPLETO PARA SAIR DO PLATÔ:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-900/60 border border-white/5 flex gap-6 group hover:border-primary/50 transition-all duration-500 shadow-2xl">
              <div className="shrink-0 w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all border border-white/5">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                 <div className="flex items-center gap-2">
                    <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter group-hover:text-primary transition-colors">{benefit.title}</h4>
                 </div>
                 <p className="text-zinc-500 leading-tight italic font-bold uppercase text-[12px] tracking-tight">
                   {benefit.description}
                 </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 bg-primary/5 border border-primary/20 rounded-[3rem] text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
           <div className="absolute -bottom-4 -right-4 opacity-5">
              <Sword className="w-40 h-40 text-primary" />
           </div>
           <h3 className="text-3xl font-black text-foreground uppercase italic font-display tracking-tight leading-none">ISSO AQUI NÃO É UM PDF.</h3>
           <p className="text-lg md:text-xl text-zinc-400 leading-relaxed italic font-medium">
             É um ataque. Um plano de guerra pro seu corpo sair do “quase” e entrar no modo mutante. <span className="text-white font-black underline decoration-primary underline-offset-4">Não serve pra quem coleciona guia. Serve pra quem quer entrar no jogo.</span>
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary italic">
              <div>• Força Bruta</div>
              <div>• Zero Neurose</div>
              <div>• Fim do Amadorismo</div>
              <div>• Resultado Visível</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
