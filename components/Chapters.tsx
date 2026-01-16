
import React from 'react';
import { Microscope, Utensils, Zap, Dumbbell, Activity, Pill, Flame, CheckCircle2, Skull, Moon } from 'lucide-react';

const modules = [
  {
    num: "01",
    title: "🔥 CAPÍTULO 1 — O ERRO QUE TRAVA 90%",
    desc: "Quebra de crenças e consciência. Por que o esforço sem estratégia bioquímica trava sua evolução.",
    icon: <Skull className="w-5 h-5 text-red-500" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800"
  },
  {
    num: "02",
    title: "⚙️ CAPÍTULO 2 — ATIVAÇÃO BIOLÓGICA",
    desc: "Como o corpo entra em modo de resposta. Energia celular, foco e o papel vital da água e minerais.",
    icon: <Activity className="w-5 h-5 text-secondary" />,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=800"
  },
  {
    num: "03",
    title: "💊 CAPÍTULO 3 — ERGOGÊNICOS NATURAIS",
    desc: "O que funciona e o que é perda de dinheiro. Combinações seguras para energia extrema.",
    icon: <Pill className="w-5 h-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1550572017-ed200f545dec?q=80&w=800"
  },
  {
    num: "04",
    title: "🥗 CAPÍTULO 4 — DIETA FUNCIONAL",
    desc: "Nutrição prática sem terrorismo. Coma para ativar seu corpo e acelerar a hipertrofia.",
    icon: <Utensils className="w-5 h-5 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800"
  },
  {
    num: "05",
    title: "🏋️ CAPÍTULO 5 — TREINOS DE ATAQUE",
    desc: "Protocolos para academia ou casa. Musculação estratégica e HIIT para densidade muscular.",
    icon: <Dumbbell className="w-5 h-5 text-primary" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
  },
  {
    num: "06",
    title: "😴 CAPÍTULO 6 — DESCANSO ELITE",
    desc: "O segredo do sono profundo e descanso ativo. Como acordar com disposição máxima.",
    icon: <Moon className="w-5 h-5 text-secondary" />,
    image: "https://images.unsplash.com/photo-1511295742364-917e703358ce?q=80&w=800"
  },
  {
    num: "07",
    title: "🔥 CAPÍTULO 7 — O PROTOCOLO 7 DIAS",
    desc: "Execução prática total com checklist diário. Passo a passo da manhã até a noite.",
    icon: <Flame className="w-5 h-5 text-primary" />,
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800"
  }
];

const Chapters: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-xs font-black text-white/30 tracking-[0.5em] uppercase italic">O QUE VOCÊ VAI DOMINAR</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <div className="flex items-center gap-4">
               <span className="text-6xl md:text-8xl">📚</span>
               <h3 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
                 MÓDULOS DO
               </h3>
             </div>
             <div className="h-20 md:h-28 px-10 bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500 rounded-3xl shadow-[0_0_60px_rgba(249,115,22,0.4)] flex items-center justify-center animate-pulse-slow">
                <span className="text-black font-black text-3xl md:text-6xl uppercase italic tracking-tighter whitespace-nowrap">
                  FORÇA PROIBIDA
                </span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {modules.map((module, i) => (
            <div key={i} className="glass-card rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-500 group flex flex-col h-full shadow-2xl hover:translate-y-[-8px]">
               <div className="relative h-60 overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-xl z-20">
                    <span className="text-[10px] font-black text-primary tracking-widest uppercase">
                      MOD {module.num}
                    </span>
                  </div>
               </div>
               
               <div className="p-10 flex-grow flex flex-col relative">
                  <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                    {module.icon}
                  </div>
                  
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors leading-tight">
                    {module.title}
                  </h4>
                  
                  <p className="text-zinc-400 font-bold italic text-sm md:text-base leading-relaxed mb-8">
                    {module.desc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-accent" />
                       <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest italic">Liberado</span>
                    </div>
                    <span className="text-[8px] font-black uppercase text-primary tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Ver Detalhes →</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
