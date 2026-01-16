
import React from 'react';
import { Gift, Flame, Utensils, Moon, Dumbbell, Users, CheckCircle2 } from 'lucide-react';

const Bonuses: React.FC = () => {
  const bonusItems = [
    {
      id: 1,
      title: "Guia de Recursos Ergogênicos Naturais",
      desc: "O que a elite usa para treinar no 220v.",
      value: "R$ 39,90",
      icon: <Flame className="w-6 h-6 text-primary" />
    },
    {
      id: 2,
      title: "Plano Alimentar 100% Natural",
      desc: "Combustível real para densidade muscular.",
      value: "R$ 29,90",
      icon: <Utensils className="w-6 h-6 text-secondary" />
    },
    {
      id: 3,
      title: "Manual Sono & Performance",
      desc: "Recupere-se enquanto os outros dormem.",
      value: "R$ 27,00",
      icon: <Moon className="w-6 h-6 text-accent" />
    },
    {
      id: 4,
      title: "Treino 7 Dias Turbo",
      desc: "Ficha agressiva para quebra de platô.",
      value: "R$ 47,00",
      icon: <Dumbbell className="w-6 h-6 text-orange-400" />
    },
    {
      id: 5,
      title: "Acesso ao Grupo VIP",
      desc: "Networking com quem está no topo.",
      value: "R$ 49,90",
      icon: <Users className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section className="py-24 bg-[#09090b] px-4 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-black text-xs uppercase tracking-widest italic">
            <Gift className="w-4 h-4" /> BÔNUS EXCLUSIVOS (VALOR REAL)
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-white font-display uppercase italic tracking-tighter leading-none">
            VOCÊ LEVA <span className="text-gradient">TUDO ISSO</span> <br /> SEM PAGAR NADA A MAIS.
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-tight text-sm md:text-xl italic max-w-2xl mx-auto">
            Ao garantir seu acesso hoje, você destrava o arsenal completo:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusItems.map((bonus) => (
            <div key={bonus.id} className="bg-zinc-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 group hover:border-primary/40 transition-all duration-500 hover:bg-zinc-900 shadow-2xl">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {bonus.icon}
              </div>
              <div className="space-y-2">
                <p className="text-primary font-black uppercase italic tracking-widest text-xs">BÔNUS {bonus.id}</p>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">{bonus.title}</h3>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-tight italic leading-relaxed">{bonus.desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 w-full">
                <p className="text-zinc-400 font-bold text-xs uppercase">Valor: <span className="text-accent">{bonus.value}</span></p>
              </div>
            </div>
          ))}
          
          {/* Total Value Card */}
          <div className="bg-gradient-to-br from-primary/20 to-orange-950/40 border-2 border-primary/30 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4 shadow-[0_0_60px_rgba(249,115,22,0.2)]">
             <CheckCircle2 className="w-12 h-12 text-primary" />
             <div className="space-y-1">
                <p className="text-zinc-400 font-black uppercase text-xs">VALOR TOTAL DOS BÔNUS</p>
                <p className="text-5xl font-black text-accent tracking-tighter italic">R$ 193,70</p>
             </div>
             <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">INCLUSO NO SEU ACESSO HOJE</p>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 space-y-8">
           <div className="space-y-2">
              <p className="text-2xl md:text-4xl font-black text-zinc-400 italic uppercase tracking-tighter">
                💸 Valor Total dos Bônus: <span className="text-accent underline decoration-accent/20 underline-offset-8">R$ 193,70</span>
              </p>
              <p className="text-5xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none pt-4">
                💥 PAGUE SÓ <br /> <span className="text-primary text-6xl md:text-[11rem] drop-shadow-[0_10px_40px_rgba(249,115,22,0.4)]">R$ 19,90</span>
              </p>
           </div>
           <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs italic">
             OFERTA VÁLIDA ENQUANTO ESSA PÁGINA ESTIVER NO AR.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
