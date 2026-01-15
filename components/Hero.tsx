
import React from 'react';
import { ChevronRight, ShieldCheck, Zap, ShieldAlert, Target, Sparkles, Play, Skull, Dumbbell } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeroProps {
  onPurchase?: () => void;
  onQuiz?: () => void;
  isExpired?: boolean;
  userProfile?: string | null;
}

const Hero: React.FC<HeroProps> = ({ onPurchase, onQuiz, isExpired, userProfile }) => {
  const getHeadline = () => {
    switch (userProfile) {
      case 'cansado':
        return <>VOCÊ TREINA, SUA, <br /><span className="text-primary underline decoration-primary/20 underline-offset-8">MAS O ESPELHO</span> <br /><span className="text-gradient">CONTINUA RINDO DA SUA CARA?</span></>;
      case 'perdidao':
        return <>PARE DE <span className="text-primary underline decoration-primary/20 underline-offset-8">RODAR EM CÍRCULOS.</span> <br /><span className="text-gradient">SAIA DO FÍSICO DE INICIANTE.</span></>;
      default:
        return <>VOCÊ TREINA, SUA, <br />FAZ TUDO CERTO... <br /><span className="text-primary">MAS O ESPELHO</span> <br /><span className="text-gradient">CONTINUA RINDO DA SUA CARA?</span></>;
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-8 pb-20 overflow-hidden bg-zinc-950">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] grayscale blur-[2px] pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 animate-fade-in-up">
        
        {/* LOGO EM CÓDIGO (À PROVA DE FALHAS) */}
        <div className="flex flex-col items-center justify-center mb-4 group cursor-default pt-4">
          <div className="relative flex items-center justify-center">
             {/* Background Glow */}
             <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full" />
             
             {/* Icon Composition */}
             <div className="relative z-10 flex items-center justify-center h-24 w-24">
                <Dumbbell className="w-20 h-20 text-zinc-800 absolute -rotate-12 opacity-80" strokeWidth={1} />
                <Dumbbell className="w-20 h-20 text-zinc-800 absolute rotate-12 opacity-80" strokeWidth={1} />
                <div className="bg-zinc-950 rounded-full p-2 border-2 border-primary/20 shadow-[0_0_20px_rgba(249,115,22,0.3)] relative z-20">
                   <Skull className="w-14 h-14 md:w-16 md:h-16 text-primary drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" strokeWidth={1.5} />
                </div>
             </div>
          </div>
          
          <div className="flex flex-col items-center leading-none mt-4 select-none">
             <h2 className="text-4xl md:text-6xl font-black text-white font-display tracking-tighter italic drop-shadow-2xl">
               FORÇA <span className="text-primary">PROIBIDA</span>
             </h2>
             <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2 rounded-full" />
          </div>
        </div>

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] text-zinc-200 font-sans uppercase italic max-w-4xl mx-auto">
          {getHeadline()}
        </h1>

        {/* RED CARD (ABAIXO DA HEADLINE) */}
        <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-red-500/30 bg-red-950/30 backdrop-blur-xl shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            <Target className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-red-500 text-xs md:text-sm font-black tracking-widest uppercase italic">
              SEM ACHISMO. SEM MILAGRE. APENAS RESULTADO.
            </span>
          </div>
        </div>

        {/* VSL VIDEO FRAME */}
        <div className="relative w-full max-w-4xl mx-auto my-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-orange-600/30 rounded-[2.2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl aspect-video">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&modestbranding=1&showinfo=0" 
              title="VSL Força Proibida"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="absolute -bottom-6 -right-6 md:right-10 bg-black/80 backdrop-blur-xl border border-primary/40 p-4 rounded-2xl shadow-2xl hidden md:flex items-center gap-3 animate-float">
             <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-black fill-black" />
             </div>
             <div className="text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Protocolo de 7 Dias</p>
                <p className="text-xs font-bold text-white italic">Assista até o final.</p>
             </div>
          </div>
        </div>

        <p className="text-xl md:text-3xl text-zinc-100 max-w-4xl mx-auto leading-tight italic font-black uppercase tracking-tighter">
          BEM-VINDO AO PROTOCOLO QUE DESTRAVA <span className="text-primary">RESULTADO REAL</span> EM 7 DIAS.
        </p>

        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium italic">
          Treino, nutrição e recursos ergogênicos naturais para te entregar mais músculo, foco e recuperação desde a primeira semana. Se você cansou de parecer iniciante, esse é o fim da enrolação.
        </p>

        <div className="pt-6 flex flex-col items-center gap-6">
          {!isExpired ? (
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button 
                onClick={onPurchase}
                className={cn(
                  "group relative inline-flex items-center justify-center px-10 py-6",
                  "font-black text-black text-lg md:text-2xl uppercase tracking-tighter",
                  "bg-primary rounded-2xl overflow-hidden transition-all duration-300",
                  "hover:bg-orange-400 hover:scale-105 shadow-[0_0_60px_rgba(249,115,22,0.4)]",
                  "active:scale-95 border-b-8 border-orange-800"
                )}
              >
                LIBERAR PROTOCOLO AGORA
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {!userProfile && (
                <button 
                  onClick={onQuiz}
                  className={cn(
                    "group inline-flex items-center justify-center px-8 py-6",
                    "font-black text-white text-sm md:text-base uppercase tracking-widest",
                    "bg-zinc-900/50 border border-white/10 rounded-2xl transition-all duration-300",
                    "hover:bg-zinc-900 hover:border-primary/40 active:scale-95"
                  )}
                >
                  <Sparkles className="w-5 h-5 mr-3 text-primary" />
                  REFAZER DIAGNÓSTICO
                </button>
              )}
            </div>
          ) : (
            <div className="bg-red-950/20 border border-red-500/20 px-8 py-6 rounded-2xl flex items-center gap-4 animate-fade-in-up">
               <ShieldAlert className="w-8 h-8 text-red-500" />
               <div className="text-left">
                  <p className="text-red-500 font-black uppercase tracking-widest text-xs italic leading-tight">OPORTUNIDADE ENCERRADA</p>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Sua indecisão te deixou de fora.</p>
               </div>
            </div>
          )}
          
          <div className="flex items-center gap-4 text-muted-foreground/40 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-accent" />
            GARANTIA BLINDADA • ACESSO IMEDIATO
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
