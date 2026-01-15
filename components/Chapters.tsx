
import React from 'react';
import { 
  BookOpen, 
  Microscope, 
  Target, 
  Zap, 
  Brain, 
  Leaf, 
  Clock, 
  Layers, 
  ShieldCheck, 
  Calendar, 
  Rocket 
} from 'lucide-react';

const modules = [
  {
    num: "01",
    title: "Fundamentos da Performance",
    desc: "O que realmente são recursos ergogênicos: multiplicadores de resultado baseados em bioquímica humana.",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "02",
    title: "Evidência vs. Marketing",
    desc: "A lista definitiva do que a ciência comprova (Creatina, Cafeína, Beta-alanina) e o que é lixo.",
    icon: <Microscope className="w-5 h-5 text-secondary" />,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "03",
    title: "Estratégia dos 1%",
    desc: "A Pirâmide da Ergogenia: por que começar pelo topo garante o seu fracasso.",
    icon: <Target className="w-5 h-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "04",
    title: "Energia e Potência Máxima",
    desc: "Como aumentar força e densidade muscular usando os compostos certos na dose de elite.",
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "05",
    title: "O Foco do Mutante",
    desc: "Domine sua concentração com noitrópicos seguros: L-Teanina, Ashwagandha e foco dopaminérgico.",
    icon: <Brain className="w-5 h-5 text-primary" />,
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "06",
    title: "Modulação de Cortisol",
    desc: "Como plantas adaptógenas bloqueiam o estresse e aceleram sua recuperação em 48 horas.",
    icon: <Leaf className="w-5 h-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "07",
    title: "Timing Bioquímico",
    desc: "Saiba exatamente QUANDO ingerir cada recurso para evitar o desperdício e o efeito platô.",
    icon: <Clock className="w-5 h-5 text-secondary" />,
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "08",
    title: "Stacks de Resultados",
    desc: "Protocolos prontos para Hipertrofia, Queima de Gordura e Foco Máximo via sinergia bioquímica.",
    icon: <Layers className="w-5 h-5 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "09",
    title: "Blindagem Biológica",
    desc: "Ciclagem segura e redução de danos. Como manter a performance sem sacrificar a longevidade.",
    icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "10",
    title: "Plano de Guerra 30 Dias",
    desc: "O checklist diário para implementar o método e monitorar seus novos resultados.",
    icon: <Calendar className="w-5 h-5 text-primary" />,
    image: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "Final",
    title: "Consolidação e Expansão",
    desc: "Como manter os ganhos e subir de nível para o monitoramento avançado de elite.",
    icon: <Rocket className="w-5 h-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800"
  }
];

const Chapters: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase italic">Currículo de Elite</h2>
          <h3 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase tracking-tight leading-[0.9]">
            📘 O MAPA DO <span className="text-gradient">CONHECIMENTO.</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic font-medium">
            "Conhecimento técnico é a arma mais poderosa contra a estagnação genética."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, i) => (
            <div 
              key={i} 
              className={`bg-zinc-900/60 border border-white/5 rounded-[2.5rem] hover:border-primary/40 transition-all duration-500 group relative overflow-hidden flex flex-col h-full shadow-2xl`}
            >
              <div className="relative h-44 overflow-hidden bg-zinc-900">
                <img 
                  src={module.image} 
                  alt={module.title}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-[0.7] contrast-[1.2] grayscale-[0.3] group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
                  <span className="text-[10px] font-black text-primary tracking-widest font-display">
                    MOD {module.num}
                  </span>
                </div>
              </div>

              <div className="p-6 pt-5 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all border border-white/5 group-hover:border-primary/20 shrink-0">
                    {module.icon}
                  </div>
                  <h4 className="text-base font-black text-foreground group-hover:text-primary transition-colors uppercase tracking-tight italic leading-tight">
                    {module.title}
                  </h4>
                </div>
                
                <p className="text-zinc-400 text-[11px] leading-relaxed font-bold italic opacity-90 group-hover:opacity-100 transition-opacity">
                  {module.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                   <div className="h-1 w-8 bg-primary/20 group-hover:bg-primary/60 rounded-full transition-all" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 italic group-hover:text-primary transition-colors">Protocolo Validado</span>
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
