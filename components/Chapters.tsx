
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
    desc: "Entenda o que realmente são recursos ergogênicos e por que não são atalhos, mas multiplicadores inteligentes.",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "02",
    title: "O que a Ciência Comprova",
    desc: "Veja o que funciona de verdade (Creatina, Cafeína, Beta-alanina) com base em estudos científicos.",
    icon: <Microscope className="w-5 h-5 text-secondary" />,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "03",
    title: "A Estratégia dos Atletas de Elite",
    desc: "A Pirâmide da Ergogenia: descubra por que a maioria erra ao começar pelo topo antes de dominar o essencial.",
    icon: <Target className="w-5 h-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "04",
    title: "Energia e Potência Máxima",
    desc: "Como aumentar força e resistência usando os ergogênicos certos na dose correta sem comprometer sua saúde.",
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "05",
    title: "Foco Mental e Clareza",
    desc: "Melhore concentração e tomada de decisão com noitrópicos seguros como L-Teanina e Ashwagandha.",
    icon: <Brain className="w-5 h-5 text-primary" />,
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "06",
    title: "Adaptógenos e Resiliência",
    desc: "Aprenda como plantas adaptógenas ajudam a controlar o estresse e acelerar a recuperação real.",
    icon: <Leaf className="w-5 h-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "07",
    title: "Timing e Dosagem Inteligente",
    desc: "Saiba exatamente quando e como usar cada recurso para maximizar resultados e evitar desperdício.",
    icon: <Clock className="w-5 h-5 text-secondary" />,
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "08",
    title: "Combinações (Stacks)",
    desc: "Protocolos prontos para força, hipertrofia, resistência e foco máximo baseados em sinergia bioquímica.",
    icon: <Layers className="w-5 h-5 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "09",
    title: "Segurança e Uso Responsável",
    desc: "Tudo sobre efeitos colaterais, contraindicações e ciclagem segura para proteger seu corpo.",
    icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "10",
    title: "Plano Prático de 30 Dias",
    desc: "Passo a passo para implementar o método com checklist diário e monitoramento de resultados.",
    icon: <Calendar className="w-5 h-5 text-primary" />,
    image: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "Final",
    title: "Ação e Próximo Nível",
    desc: "Como transformar conhecimento em resultado real e evoluir para o monitoramento avançado.",
    icon: <Rocket className="w-5 h-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800"
  }
];

const Chapters: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase italic">Estrutura do eBook</h2>
          <h3 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase tracking-tight leading-[0.9]">
            📘 O QUE VOCÊ VAI <span className="text-gradient">APRENDER?</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic font-medium">
            "Este não é um guia para fazer mais. É um manual para usar melhor."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, i) => (
            <div 
              key={i} 
              className={`bg-zinc-900/60 border border-white/5 rounded-[2.5rem] hover:border-primary/40 transition-all duration-500 group relative overflow-hidden flex flex-col h-full shadow-2xl`}
            >
              {/* Image Container with high visibility - Increased default brightness and opacity */}
              <div className="relative h-44 overflow-hidden bg-zinc-900">
                <img 
                  src={module.image} 
                  alt={module.title}
                  loading="eager"
                  className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] grayscale-[0.2] group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                {/* MOD Number Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
                  <span className="text-[10px] font-black text-primary tracking-widest font-display">
                    MOD {module.num}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 pt-5 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all border border-white/5 group-hover:border-primary/20">
                    {module.icon}
                  </div>
                  <h4 className="text-base font-black text-foreground group-hover:text-primary transition-colors uppercase tracking-tight italic leading-tight">
                    {module.title}
                  </h4>
                </div>
                
                <p className="text-muted-foreground text-[11px] leading-relaxed font-bold italic opacity-90 group-hover:opacity-100 transition-opacity">
                  {module.desc}
                </p>

                {/* Footer of the card */}
                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                   <div className="h-1 w-8 bg-primary/20 group-hover:bg-primary/60 rounded-full transition-all" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 italic group-hover:text-primary transition-colors">Ciência Aplicada</span>
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
