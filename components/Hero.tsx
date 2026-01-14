
import React from 'react';
import { ChevronRight, ShieldCheck, Zap, ShieldAlert, Target, Sparkles, Play } from 'lucide-react';
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
        return <>DESTRAVE A <span className="text-primary underline decoration-primary/20 underline-offset-8">ENERGIA</span> <br /><span className="text-gradient">QUE SEU CORPO ESCONDE.</span></>;
      case 'perdidao':
        return <>PARE DE <span className="text-primary underline decoration-primary/20 underline-offset-8">ADIVINHAR</span> <br /><span className="text-gradient">E COMECE A EVOLUIR.</span></>;
      case 'estagnado':
        return <>QUEBRE O <span className="text-primary underline decoration-primary/20 underline-offset-8">PLATÔ</span> <br /><span className="text-gradient">DE FORÇA HOJE MESMO.</span></>;
      case 'pronto':
        return <>ATIVE SEU <span className="text-primary underline decoration-primary/20 underline-offset-8">ÁPICE</span> <br /><span className="text-gradient">BIOQUÍMICO AGORA.</span></>;
      default:
        return <>DESTRAVE A <span className="text-primary underline decoration-primary/20 underline-offset-8">FORÇA</span> <br /><span className="text-gradient">QUE VOCÊ NÃO TEM.</span></>;
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden bg-zinc-950">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] grayscale blur-[2px] pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-xl mb-4">
          <Target className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-red-500 text-[10px] md:text-xs font-black tracking-widest uppercase italic">
            {userProfile ? `DIAGNÓSTICO IDENTIFICADO: ${userProfile.toUpperCase()}` : "CIÊNCIA OCULTA PELA ELITE: O PROTOCOLO QUE VOCÊ NUNCA VIU."}
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white font-display uppercase italic">
          {getHeadline()}
        </h1>

        {/* VSL VIDEO FRAME - O QUADRO QUE VOCÊ PEDIU */}
        <div className="relative w-full max-w-4xl mx-auto my-12 group">
          {/* Neon Glow behind the video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-orange-600/30 rounded-[2.2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl aspect-video">
            {/* Embed do YouTube - Troque o ID 'ScMzIvxBSi4' pelo ID do seu vídeo */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&modestbranding=1&showinfo=0" 
              title="VSL Força Proibida"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Floating badge for authority */}
          <div className="absolute -bottom-6 -right-6 md:right-10 bg-black/80 backdrop-blur-xl border border-primary/40 p-4 rounded-2xl shadow-2xl hidden md:flex items-center gap-3 animate-float">
             <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-black fill-black" />
             </div>
             <div className="text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Aperte o Play</p>
                <p className="text-xs font-bold text-white italic">Assista até o final.</p>
             </div>
          </div>
        </div>

        <p className="text-xl md:text-3xl text-zinc-100 max-w-4xl mx-auto leading-tight italic font-black uppercase tracking-tighter">
          PARE DE SER O <span className="text-primary">FIGURANTE</span> DA ACADEMIA. O SUOR NÃO CONSTRÓI MÚSCULO. A BIOQUÍMICA CERTA, SIM.
        </p>

        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium italic">
          Enquanto você gasta dinheiro com "pré-treino de influencer", a elite usa protocolos silenciosos que multiplicam os resultados. Você quer o segredo ou quer continuar sendo médio?
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
                DESTRAVAR MEU ACESSO
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
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Sua indecisão te deixou de fora. Aguarde a próxima turma.</p>
               </div>
            </div>
          )}
          
          <div className="flex items-center gap-4 text-muted-foreground/40 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-accent" />
            MÉTODO VALIDADO • ACESSO IMEDIATO APÓS O PIX
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
