
import React from 'react';
import { Microscope, Brain, ShieldCheck, Zap } from 'lucide-react';

const pillars = [
  {
    title: "Otimização de ATP",
    desc: "Não é sobre agitação, é sobre energia mitocondrial real para cada contração.",
    icon: <Zap className="w-8 h-8 text-primary" />
  },
  {
    title: "Foco Dopaminérgico",
    desc: "Protocolos para sua mente não desistir antes do seu corpo sob estresse.",
    icon: <Brain className="w-8 h-8 text-secondary" />
  },
  {
    title: "Recuperação 2x",
    desc: "Acelere a ressíntese proteica e controle o cortisol de forma estratégica.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />
  }
];

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-16 space-y-4">
           <Microscope className="w-12 h-12 text-primary mx-auto mb-4" />
           <h2 className="text-3xl md:text-5xl font-black text-foreground font-display uppercase italic">
              O NOSSO <span className="text-primary">MÉTODO.</span>
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic leading-relaxed">
             Esqueça o que influencers dizem. Nós focamos na tríade da performance biológica.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-primary/40 transition-all">
              <div className="mb-6 flex justify-center">{p.icon}</div>
              <h4 className="text-xl font-black text-foreground uppercase italic mb-3">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
