
import React from 'react';
import { Gift, PlayCircle, Map, Target, CheckCircle } from 'lucide-react';

const bonuses = [
  {
    title: "Mini Curso Performance 360",
    desc: "Vídeo-aulas práticas sobre ciclos e estratégias avançadas.",
    icon: <PlayCircle className="w-8 h-8 text-primary" />,
    value: "R$ 197,00"
  },
  {
    title: "Mapas Mentais de Protocolos",
    desc: "Visualize cada ciclo e estratégia de forma rápida e intuitiva.",
    icon: <Map className="w-8 h-8 text-secondary" />,
    value: "R$ 47,00"
  },
  {
    title: "Lista de Autoridades e Canais",
    desc: "Saiba exatamente quem seguir para se manter atualizado cientificamente.",
    icon: <Target className="w-8 h-8 text-accent" />,
    value: "Grátis"
  }
];

const Bonuses: React.FC = () => {
  return (
    <section className="py-24 bg-black px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-4 border border-primary/20">
            <Gift className="w-10 h-10 text-primary animate-bounce" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase italic leading-none">
            BÔNUS EXCLUSIVOS <br />
            <span className="text-gradient">(PARA O COMBO PRO)</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-medium italic">
            Tudo o que você precisa para sair do básico e começar a dominar sua própria biologia hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, i) => (
            <div key={i} className="relative p-10 rounded-[3rem] bg-zinc-900 border border-white/5 hover:border-primary/40 transition-all group overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                <Gift className="w-24 h-24 text-white" />
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {bonus.icon}
              </div>
              
              <h4 className="text-2xl font-black text-foreground mb-4 uppercase italic tracking-tighter">
                {bonus.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed mb-10 flex-grow italic">
                {bonus.desc}
              </p>
              
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">VALOR REAL: {bonus.value}</span>
                <span className="text-accent font-black text-xs uppercase italic tracking-widest">GRÁTIS NO PRO</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
