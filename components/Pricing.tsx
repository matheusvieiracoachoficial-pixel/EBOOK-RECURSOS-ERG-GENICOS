
import React from 'react';
import { ArrowRight, Star, ShieldAlert, CheckCircle2, Gift, Zap, ShieldCheck, Lock } from 'lucide-react';
import { cn } from '../lib/utils';
import CountdownTimer from './CountdownTimer';

interface PricingProps {
  onPurchase?: () => void;
  isExpired?: boolean;
  onExpire?: () => void;
}

const offerItems = [
  { name: "Protocolo Força Proibida (Manual Base)", price: "R$ 147,00" },
  { name: "Guia Alimentar de Substituição", price: "R$ 47,00" },
  { name: "Planilha Calculadora de Macros", price: "R$ 37,00" },
  { name: "Acesso ao Podcast Fechado", price: "R$ 97,00" },
  { name: "Acesso à Comunidade VIP", price: "R$ 197,00" },
];

const Pricing: React.FC<PricingProps> = ({ onPurchase, isExpired, onExpire }) => {
  return (
    <section id="pricing" className="py-32 bg-zinc-950 px-4 relative overflow-hidden">
      {/* Visual background dynamics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.3em] italic">
            ACESSO IMEDIATO LIBERADO
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
            SÃO OS ÚLTIMOS <br /><span className="text-gradient">MINUTOS...</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs md:text-sm italic">
            O valor real desse conhecimento é incalculável. A oferta é simbólica.
          </p>
        </div>

        {/* Premium Offer Card */}
        <div className={cn(
          "relative flex flex-col rounded-[3rem] md:rounded-[4rem] overflow-hidden border transition-all duration-700",
          isExpired ? "opacity-40 grayscale pointer-events-none border-white/5" : "bg-zinc-900 border-primary/30 shadow-[0_0_100px_rgba(249,115,22,0.2)]"
        )}>
          {/* Discount Header */}
          <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 py-6 text-center">
            <span className="text-black font-black text-sm md:text-lg uppercase italic tracking-[0.2em] flex items-center justify-center gap-3">
              <Gift className="w-5 h-5 md:w-6 md:h-6 animate-bounce" /> VOCÊ ESTÁ LEVANDO O COMBO ELITE:
            </span>
          </div>

          <div className="p-8 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Value Stack */}
            <div className="space-y-8">
              <div className="space-y-5">
                {offerItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                         <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-zinc-200 font-black italic text-sm md:text-lg uppercase tracking-tight group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-zinc-600 font-black italic text-xs md:text-sm line-through shrink-0 ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-white/5 space-y-6">
                 <div className="flex items-center justify-between opacity-40">
                    <span className="text-zinc-400 font-black text-xs uppercase italic tracking-[0.2em]">VALOR TOTAL ESTIMADO:</span>
                    <span className="text-zinc-400 font-black text-xl line-through italic">R$ 525,00</span>
                 </div>
                 <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 flex items-center gap-4">
                    <Zap className="w-8 h-8 text-primary animate-pulse" />
                    <p className="text-xs md:text-sm font-black text-zinc-300 uppercase italic leading-tight">
                       CONDIÇÃO EXCLUSIVA HOJE: <br />
                       <span className="text-primary text-lg">ECONOMIA REAL DE R$ 505,10.</span>
                    </p>
                 </div>
              </div>
            </div>

            {/* Pricing Action */}
            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-10">
               <div className="space-y-4">
                  <span className="text-zinc-500 text-sm md:text-lg font-black uppercase italic tracking-widest block">SAI TUDO POR APENAS:</span>
                  <div className="flex items-start justify-center lg:justify-end gap-1">
                      <span className="text-3xl md:text-4xl font-black text-primary mt-6 italic">R$</span>
                      <span className="text-[10rem] md:text-[14rem] font-black text-white tracking-tighter font-display italic leading-none drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                        19
                      </span>
                      <div className="flex flex-col items-start mt-6">
                        <span className="text-4xl md:text-5xl font-black text-primary italic">,90</span>
                        <span className="text-[10px] md:text-xs text-zinc-500 font-black uppercase tracking-widest italic ml-1">Pagamento único</span>
                      </div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-xl inline-block">
                    <p className="text-accent font-black text-xs uppercase tracking-[0.3em] italic animate-pulse">
                      <ShieldCheck className="w-4 h-4 inline mr-2" /> ACESSO VITALÍCIO LIBERADO
                    </p>
                  </div>
               </div>

               <div className="w-full space-y-6">
                  {!isExpired ? (
                    <button 
                      onClick={onPurchase}
                      className="btn-primary w-full py-8 md:py-10 text-2xl md:text-4xl shadow-[0_30px_70px_-20px_rgba(249,115,22,0.6)] group"
                    >
                      GARANTIR MINHA VAGA
                      <ArrowRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-3 transition-transform" />
                    </button>
                  ) : (
                    <div className="bg-red-500/10 border border-red-500/20 p-10 rounded-3xl text-center w-full">
                      <p className="text-red-500 text-lg font-black uppercase tracking-widest italic flex items-center justify-center gap-3">
                        <ShieldAlert className="w-6 h-6" /> OFERTA ENCERRADA
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center lg:justify-end gap-6 opacity-40 grayscale">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                       <Lock className="w-3 h-3" /> Seguro
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                       <ShieldCheck className="w-3 h-3" /> Garantido
                    </div>
                    <img src="https://logospng.org/download/mercado-pago/logo-mercado-pago-2048.png" alt="Mercado Pago" className="h-4 object-contain" />
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Global Stats/Timer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-8">
           <div className="h-full">
              <CountdownTimer variant="inline" isExpired={!!isExpired} onExpire={onExpire || (() => {})} />
           </div>
           <div className="flex items-center gap-8 p-10 bg-zinc-900/60 border border-white/10 rounded-[3rem] shadow-xl">
              <div className="w-20 h-20 shrink-0 bg-accent/10 rounded-[2rem] flex items-center justify-center border border-accent/20">
                 <ShieldCheck className="w-10 h-10 text-accent" />
              </div>
              <div className="space-y-2">
                 <h4 className="text-2xl font-black text-white uppercase italic tracking-tight leading-none">RISCO ZERO</h4>
                 <p className="text-zinc-500 text-sm font-bold uppercase italic leading-tight">
                    7 dias de garantia incondicional. Evolua drasticamente ou devolvemos 100% do seu dinheiro.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
