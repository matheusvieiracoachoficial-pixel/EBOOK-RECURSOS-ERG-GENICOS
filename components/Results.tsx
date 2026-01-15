
import React from 'react';
import { Microscope, Brain, ShieldCheck, Zap, Flame } from 'lucide-react';

const pillars = [
  {
    title: "E-book Direto e Reto",
    desc: "Sem enrolação nem blá-blá-blá. Um manual de guerra para aplicação imediata.",
    icon: <Zap className="w-8 h-8 text-primary" />
  },
  {
    title: "Estratégia Ergogênica",
    desc: "A lista de suplementos que funcionam de verdade. Doses, marcas e combinações.",
    icon: <Microscope className="w-8 h-8 text-secondary" />
  },
  {
    title: "Cronograma de 7 Dias",
    desc: "Um plano passo a passo do que fazer e o que esperar em cada dia da semana.",
    icon: <Flame className="w-8 h-8 text-accent" />
  }
];

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-16 space-y-4">
           <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
           <h2 className="text-3xl md:text-5xl font-black text-foreground font-display uppercase italic">
              O QUE É O <span className="text-primary">FORÇA PROIBIDA?</span>
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic leading-relaxed">
             É o protocolo direto ao ponto que junta treino, nutrição e recursos ergogênicos naturais para quem cansou de rodar em círculos.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-primary/40 transition-all flex flex-col items-center">
              <div className="mb-6 flex justify-center">{p.icon}</div>
              <h4 className="text-xl font-black text-foreground uppercase italic mb-3 text-center">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed text-center font-medium italic">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
