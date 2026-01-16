
import React from 'react';
import { ChevronRight, ShieldCheck, ShieldAlert, Zap, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeroProps {
  onPurchase?: () => void;
  onQuiz?: () => void;
  isExpired?: boolean;
  userProfile?: string | null;
}

const Hero: React.FC<HeroProps> = ({ onPurchase, onQuiz, isExpired, userProfile }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-24 overflow-hidden bg-zinc-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.02] grayscale pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')" }}
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10 animate-fade-in-up">
        
        {/* Brand Reveal */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-64 md:h-96 w-full max-w-[420px] drop-shadow-[0_0_50px_rgba(249,115,22,0.4)]">
             <img 
              src="https://i.imgur.com/TPQK7ag.png" 
              alt="Logo Força Proibida" 
              className="w-full h-full object-contain"
              fetchPriority="high"
             />
          </div>
        </div>

        {/* Headline System */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] italic mx-auto">
            <Zap className="w-3 h-3 md:w-4 md:h-4" /> Protocolo Validado Cientificamente
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-none text-white font-display uppercase italic">
              Como Ganhar Mais
            </h1>
            <div className="w-full max-w-3xl h-14 md:h-24 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 flex items-center justify-center rounded-xl shadow-[0_0_40px_rgba(249,115,22,0.5)] transform -skew-x-6">
               <span className="text-black text-2xl md:text-6xl font-black uppercase italic tracking-tighter skew-x-6">FORÇA, PUMP E VOLUME</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-none text-white font-display uppercase italic">
              Em Apenas 7 Dias
            </h1>
          </div>
          
          <h2 className="text-lg md:text-3xl text-zinc-400 font-bold italic tracking-tight uppercase max-w-3xl mx-auto">
            Usando o Protocolo Natural que os Atletas <span className="text-white">Não Divulgam!</span>
          </h2>

          {/* Checklist de Benefícios */}
          <div className="max-w-2xl mx-auto grid grid-cols-1 gap-4 pt-6">
            {[
              "Sem precisar de bomba ou treino de 2h",
              "De “Estagnado Invisível” a “Mutante Notado na Academia”",
              "Para Homens e Mulheres que querem mudar o corpo agora"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-left bg-white/[0.03] border border-white/5 p-5 rounded-2xl hover:border-primary/30 transition-all group">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center border border-accent/40 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm md:text-xl font-black text-zinc-200 uppercase italic tracking-tight group-hover:text-white transition-colors">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Area */}
        <div className="pt-8 flex flex-col items-center gap-8">
          {!isExpired ? (
            <div className="w-full max-w-md space-y-4">
              <button 
                onClick={onPurchase}
                className="btn-primary w-full py-8 md:py-10 px-12 text-2xl md:text-4xl shadow-[0_30px_70px_-20px_rgba(249,115,22,0.6)] group"
              >
                COMEÇAR AGORA
                <ChevronRight className="w-8 h-8 md:w-12 md:h-12 ml-1 inline-block group-hover:translate-x-3 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-8 pt-4">
                 <div className="flex flex-col items-center gap-1 opacity-60">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest italic">Acesso Imediato</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 opacity-60">
                    <Zap className="w-5 h-5 text-secondary" />
                    <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest italic">Risco Zero</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 opacity-60">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest italic">SSL Seguro</span>
                 </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-950/20 border border-red-500/20 px-10 py-8 rounded-3xl flex items-center gap-6 animate-pulse">
               <ShieldAlert className="w-10 h-10 text-red-500" />
               <div className="text-left">
                  <p className="text-red-500 font-black uppercase tracking-widest text-sm italic">OPORTUNIDADE ENCERRADA</p>
                  <p className="text-zinc-600 text-xs font-bold italic">O cronômetro chegou ao fim.</p>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
