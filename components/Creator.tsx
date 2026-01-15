
import React from 'react';
import { Microscope, Dumbbell, History, Quote, TrendingUp } from 'lucide-react';

const timelineData = [
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    year: "17 anos",
    title: "O Início Frustrante",
    borderColor: "border-zinc-700",
    textColor: "text-zinc-500"
  },
  {
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    year: "Primeiros Passos",
    title: "Treinos na Raça",
    borderColor: "border-zinc-600",
    textColor: "text-zinc-400"
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    year: "Formação",
    title: "Educação Física",
    borderColor: "border-primary",
    textColor: "text-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    year: "Virada de Chave",
    title: "O Primeiro Resultado",
    borderColor: "border-primary",
    textColor: "text-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    year: "Consistência",
    title: "Evolução Constante",
    borderColor: "border-primary",
    textColor: "text-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
    year: "O Método",
    title: "Aplicação Prática",
    borderColor: "border-accent",
    textColor: "text-accent"
  },
  {
    image: "https://images.unsplash.com/photo-1581093458891-b9883f8792e4?q=80&w=800&auto=format&fit=crop",
    year: "Autoridade",
    title: "Consultoria Especializada",
    borderColor: "border-accent",
    textColor: "text-accent"
  },
  {
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800&auto=format&fit=crop",
    year: "Estratégia",
    title: "Nutrição Inteligente",
    borderColor: "border-blue-500",
    textColor: "text-blue-500"
  },
  {
    image: "https://images.unsplash.com/photo-1517963879466-e9b5ce382d69?q=80&w=800&auto=format&fit=crop",
    year: "Vivência",
    title: "Protocolo Validado",
    borderColor: "border-blue-500",
    textColor: "text-blue-500"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    year: "Nível Elite",
    title: "Reconhecimento Nacional",
    borderColor: "border-orange-500",
    textColor: "text-orange-500"
  }
];

const Creator: React.FC = () => {
  return (
    <section id="creator" className="py-24 bg-zinc-950 px-4 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* PARTE 1: A HISTÓRIA TEXTUAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase italic tracking-widest">
              <History className="w-4 h-4" /> A Origem do Protocolo
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase italic tracking-tighter leading-[0.9]">
              EU NÃO NASCI <br />
              <span className="text-gradient">COM GENÉTICA DE MUTANTE.</span>
            </h2>

            <div className="space-y-6 text-lg text-zinc-400 font-medium leading-relaxed italic">
              <p>
                <strong className="text-white not-italic">Aos 17 anos</strong>, eu era o cara que fazia tudo "certo" e continuava invisível. Treinava até a falha, comia o que mandavam, gastava todo meu dinheiro em suplementos coloridos... e o espelho não mudava.
              </p>
              
              <div className="pl-6 border-l-4 border-primary/40 py-2">
                <p className="text-white text-xl font-bold font-display uppercase tracking-tight">
                  "Eu decidi parar de ouvir 'influenciadores' e comecei a ouvir a bioquímica."
                </p>
              </div>

              <p>
                Vesti o jaleco. Mergulhei em fisiologia, endocrinologia e nutrição avançada. Descobri que a elite não usa "sorte". Eles usam <strong className="text-primary not-italic">protocolos de otimização</strong>.
              </p>

              <p>
                O <span className="text-white font-black">Força Proibida</span> não é um achismo. É a documentação exata do que eu fiz para sair da estagnação total para o meu melhor físico, de forma 100% natural e estratégica.
              </p>
            </div>

            <div className="pt-4">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-black text-white uppercase italic tracking-tighter">Matheus</span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Criador do Método</span>
                  </div>
               </div>
            </div>
          </div>

          {/* DESTAQUE PRINCIPAL (FOTO ATUAL) */}
          <div className="relative group order-1 lg:order-2">
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-primary/40 shadow-[0_0_40px_rgba(249,115,22,0.15)] bg-zinc-900">
                <img 
                  src={timelineData[5].image} // Usa a foto "O Método" como destaque
                  alt="Resultado Atual" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex items-end justify-between">
                <div>
                    <span className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 mb-1">
                        <Dumbbell className="w-4 h-4" /> Resultado Real
                    </span>
                    <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">O Físico Proibido</h4>
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* PARTE 2: LINHA DO TEMPO VISUAL (GRID DE 10 FOTOS) */}
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="inline-flex items-center justify-center gap-2 pt-8 text-primary font-black uppercase italic tracking-widest text-xs">
                    <TrendingUp className="w-4 h-4" /> Timeline Evolutiva
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">
                    A Jornada por trás do Método
                </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {timelineData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3 group cursor-default">
                        <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden border-2 ${item.borderColor} shadow-lg bg-zinc-900 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                            <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            
                            {/* Número da etapa */}
                            <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                                {index + 1}
                            </div>
                        </div>
                        
                        <div className="text-center space-y-1 px-1">
                            <p className={`text-[10px] font-black uppercase tracking-widest ${item.textColor}`}>
                                {item.year}
                            </p>
                            <p className="text-xs font-bold text-white uppercase italic leading-tight group-hover:text-primary transition-colors">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
