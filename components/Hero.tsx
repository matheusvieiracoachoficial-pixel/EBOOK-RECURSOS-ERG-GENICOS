
import React from 'react';
import { ChevronRight, ShieldCheck, ShieldAlert, Target, Activity } from 'lucide-react';
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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-20 overflow-hidden bg-[#09090b]">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-[10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] opacity-40 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12 animate-fade-in-up">
        
        {/* LOGO E IMAGEM PRINCIPAL - OVERLAP BRUTAL */}
        <div className="relative flex flex-col items-center justify-center group cursor-default">
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-125 animate-pulse" />
          
          {/* Imagem de Fundo (Protocolo) */}
          <div className="relative z-10 w-full max-w-[340px] md:max-w-[560px] transition-transform duration-1000 group-hover:scale-[1.05]">
            <img 
              src="https://i.imgur.com/TPQK7ag.png" 
              alt="Protocolo Força Proibida" 
              className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(249,115,22,0.5)] mix-blend-screen"
            />
          </div>
          
          {/* TEXTO EM CIMA DA IMAGEM - Overlap Premium */}
          <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none px-4 mt-8 md:mt-16">
            <h2 className="text-6xl md:text-[13rem] font-black text-white font-display tracking-tighter italic uppercase drop-shadow-[0_20px_60px_rgba(0,0,0,1)] leading-[0.8] select-none text-center">
              FORÇA <br /><span className="text-primary">PROIBIDA</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 md:mt-6 opacity-80">
               <div className="h-px w-12 md:w-20 bg-primary/60" />
               <span className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.4em] italic">O Protocolo de Elite</span>
               <div className="h-px w-12 md:w-20 bg-primary/60" />
            </div>
          </div>
        </div>

        {/* HEADLINE */}
        <div className="space-y-6 pt-16">
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white font-sans uppercase italic max-w-5xl mx-auto drop-shadow-2xl">
            {getHeadline()}
          </h1>
          <p className="text-lg md:text-3xl text-zinc-500 max-w-3xl mx-auto font-bold italic uppercase tracking-tighter leading-tight">
            ESTE É O PROTOCOLO QUE A ELITE ESCONDE PARA DESTRAVAR <br />
            <span className="text-white underline decoration-primary underline-offset-8">RESULTADOS BRUTOS EM 7 DIAS.</span>
          </p>
        </div>

        {/* CTA PRINCIPAL */}
        <div className="flex flex-col items-center gap-8 pt-4">
          {!isExpired ? (
            <div className="flex flex-col items-center gap-6 w-full max-w-lg">
              <button 
                onClick={onPurchase}
                className={cn(
                  "group relative w-full inline-flex items-center justify-center px-10 py-8",
                  "font-black text-black text-2xl md:text-4xl uppercase tracking-tighter",
                  "bg-primary rounded-[2rem] overflow-hidden transition-all duration-500",
                  "hover:bg-orange-400 hover:scale-105 shadow-[0_0_80px_rgba(249,115,22,0.4)]",
                  "active:scale-95 border-b-[12px] border-orange-900"
                )}
              >
                LIBERAR ACESSO AGORA
                <ChevronRight className="w-10 h-10 ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                   <Activity className="w-5 h-5 text-accent animate-pulse" />
                   <span className="text-xs font-black text-zinc-400 uppercase tracking-widest italic">Bioquímica Ativada</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                   <ShieldCheck className="w-5 h-5 text-primary" />
                   <span className="text-xs font-black text-zinc-400 uppercase tracking-widest italic">Garantia Blindada</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-950/40 border border-red-500/30 px-10 py-8 rounded-[3rem] text-center">
               <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
               <p className="text-red-500 font-black uppercase tracking-widest text-sm italic">OFERTA EXPIRADA</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
