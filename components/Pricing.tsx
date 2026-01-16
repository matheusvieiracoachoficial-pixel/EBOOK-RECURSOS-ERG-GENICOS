
import React from 'react';
import { Check, ArrowRight, BookOpen, Star, ShieldAlert, Zap, Lock } from 'lucide-react';
import { cn } from '../lib/utils';
import CountdownTimer from './CountdownTimer';

interface PricingProps {
  onPurchase?: () => void;
  isExpired?: boolean;
  onExpire?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPurchase, isExpired, onExpire }) => {
  return (
    <section id="pricing" className="py-24 bg-[#050505] px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-primary/10 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
            <Zap className="w-4 h-4" /> ÚLTIMA CHANCE REAL
          </div>
          <h3 className="text-5xl md:text-9xl font-black text-white font-display uppercase italic leading-none tracking-tighter">
            O INVESTIMENTO <br /> <span className="text-gradient">MAIS INTELIGENTE.</span>
          </h3>
          <p className="text-zinc-500 text-lg md:text-2xl max-w-2xl mx-auto font-bold uppercase tracking-tighter italic leading-tight">
            VOCÊ PODE CONTINUAR IGUAL, OU PAGAR <span className="text-white underline decoration-primary underline-offset-8">O PREÇO DE UM LANCHE</span> E DESTRAVAR O SEU FÍSICO.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-16">
          <CountdownTimer variant="inline" isExpired={!!isExpired} onExpire={onExpire || (() => {})} />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={cn(
            "relative flex flex-col p-8 md:p-16 rounded-[4rem] border transition-all duration-700 group bg-zinc-900 border-primary/30 shadow-[0_0_120px_rgba(249,115,22,0.2)]",
            isExpired && "opacity-80 grayscale pointer-events-none"
          )}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-10 py-4 rounded-full text-[14px] font-black uppercase tracking-[0.2em] shadow-2xl bg-gradient-to-r from-primary via-orange-400 to-secondary text-black animate-glow whitespace-nowrap">
              <span className="flex items-center gap-3">
                <Star className="w-5 h-5 fill-black" />
                ACESSO COMPLETO + 5 BÔNUS
              </span>
            </div>

            <div className="mb-12 flex items-center justify-between">
              <div className="space-y-2 text-left">
                <h4 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">Força Proibida</h4>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                   <p className="text-[11px] text-zinc-500 font-black uppercase tracking-widest italic">Entrega Imediata no E-mail</p>
                </div>
              </div>
              <div className="w-24 h-24 rounded-[2rem] flex items-center justify-center border bg-primary/10 border-primary/20 shadow-inner shrink-0">
                <BookOpen className="w-12 h-12 text-primary" />
              </div>
            </div>

            <div className="mb-12 p-10 bg-black/60 rounded-[3rem] border border-white/5 text-center">
              <span className="text-zinc-600 text-sm font-black line-through italic mb-2 uppercase tracking-widest block">De R$ 147,00 por:</span>
              <div className="flex items-start justify-center gap-1">
                  <span className="text-3xl font-black text-primary mt-6 italic">R$</span>
                  <span className="text-[10rem] md:text-[13rem] font-black text-white tracking-tighter font-display leading-[0.8] drop-shadow-[0_15px_45px_rgba(249,115,22,0.4)]">19</span>
                  <div className="flex flex-col mt-6">
                     <span className="text-3xl font-black text-primary italic">,90</span>
                     <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mt-2">ÚNICO PAGAMENTO</span>
                  </div>
              </div>
            </div>

            <ul className="space-y-6 mb-12 px-2 text-left">
              {[
                "Protocolo Força Proibida (7 Dias)",
                "Lista de Ergogênicos Naturais",
                "Estratégia de Foco Inabalável",
                "Plano Alimentar de Performance",
                "Manual Sono & Recuperação",
                "BÔNUS: Grupo VIP de Elite"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-base md:text-xl font-bold italic text-zinc-200 uppercase tracking-tight">
                  <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-accent text-black">
                    <Check className="w-5 h-5 stroke-[3.5px]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {!isExpired ? (
              <div className="space-y-6">
                <button 
                  onClick={onPurchase}
                  className="w-full py-8 rounded-[2.5rem] font-black text-2xl md:text-4xl uppercase tracking-tighter transition-all flex items-center justify-center gap-4 border-b-[14px] bg-primary text-black hover:bg-orange-400 border-orange-900 shadow-2xl shadow-primary/30 active:scale-[0.98] group"
                >
                  EU QUERO O PROTOCOLO AGORA
                  <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex flex-col items-center gap-6 pt-4">
                  <div className="flex items-center gap-8 opacity-60">
                    <img src="https://logospng.org/download/mercado-pago/logo-mercado-pago-256.png" alt="Mercado Pago" className="h-8 grayscale" />
                    <div className="w-px h-8 bg-white/10" />
                    <img src="https://logospng.org/download/pix/logo-pix-256.png" alt="Pix" className="h-8 grayscale" />
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600">
                    <Lock className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Transação 100% Segura</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-[2.5rem] text-center">
                <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <p className="text-red-500 text-xl font-black uppercase tracking-widest italic">VAGAS ENCERRADAS</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
