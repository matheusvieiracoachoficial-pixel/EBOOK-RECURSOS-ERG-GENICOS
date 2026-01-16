
import React from 'react';
import { Gift, FileText, BarChart3, Headphones, Smartphone } from 'lucide-react';

const bonuses = [
  {
    title: "📥 PDF Guia Alimentar",
    desc: "Guia Alimentar Inteligente com substituições práticas.",
    icon: <FileText className="w-8 h-8 text-primary" />
  },
  {
    title: "📊 Planilha de Macros",
    desc: "Planilha de Cálculo de Macros para controle total.",
    icon: <BarChart3 className="w-8 h-8 text-secondary" />
  },
  {
    title: "🎧 Podcast Fechado",
    desc: "Acesso a podcast fechado com Matheus Vieira.",
    icon: <Headphones className="w-8 h-8 text-accent" />
  },
  {
    title: "📲 Comunidade VIP",
    desc: "Comunidade VIP com suporte exclusivo.",
    icon: <Smartphone className="w-8 h-8 text-orange-400" />
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
            🎁 BÔNUS <span className="text-gradient">EXCLUSIVOS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-zinc-900 border border-white/5 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                {bonus.icon}
              </div>
              <h4 className="text-lg font-black text-white uppercase italic tracking-tighter leading-tight">{bonus.title}</h4>
              <p className="text-zinc-500 font-bold italic text-sm">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
