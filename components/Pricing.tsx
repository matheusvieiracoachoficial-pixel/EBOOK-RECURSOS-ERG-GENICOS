
import React from 'react';
import { Check, ArrowRight, BookOpen, ShieldCheck, Star, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';
import CountdownTimer from './CountdownTimer';

interface PricingProps {
  onPurchase?: () => void;
  isExpired?: boolean;
  onExpire?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPurchase, isExpired, onExpire }) => {
  return (
    <section id="pricing" className="py-24 bg-black px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase italic">Acesso Imediato</h2>
          <h3 className="text-4xl md:text-7xl font-black text-foreground font-display uppercase italic leading-none tracking-tighter">
            O FIM DA <span className="text-gradient">ENROLAÇÃO.</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            Garanta o protocolo completo pelo preço de um lanche.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <CountdownTimer variant="inline" isExpired={!!isExpired} onExpire={onExpire || (() => {})} />
        </div>

        <div className="max-w-xl mx-auto">
          <div className={cn(
            "relative flex flex-col p-8 md:p-12 rounded-[3rem] border transition-all duration-500 group bg-zinc-900 border-primary/40 shadow-[0_0_80px_rgba(249,115,22,0.15)]",
            isExpired && "opacity-80 grayscale pointer-events-none"
          )}>
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl bg-gradient-to-r from-primary to-orange-400 text-black animate-pulse">
              <span className="flex items-center gap-2">
                <Star className="w-3 h-3 fill-black" />
                Destaque: PROTOCOLO 7 DIAS
              </span>
            </div>

            <div className="mb-8 flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="text-3xl font-black text-foreground uppercase italic tracking-tighter leading-none">Força Proibida</h4>
                <p className="text-xs text-muted-foreground font-medium italic">O manual que a elite usa em segredo.</p>
              </div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center border bg-primary/10 border-primary/20">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col">
                <span className="text-zinc-500 text-sm font-bold line-through italic mb-1">De R$ 97,00 por:</span>
                <div className="flex items-start gap-1">
                    <span className="text-lg font-bold text-primary mt-2">R$</span>
                    <span className="text-8xl font-black text-foreground tracking-tighter font-display">19</span>
                    <span className="text-lg font-bold text-primary mt-2">,00</span>
                </div>
                <span className="text-xs font-black uppercase text-primary bg-primary/10 w-fit px-2 py-1 rounded italic mt-2">à vista</span>
              </div>
              {!isExpired && (
                <div className="mt-6 flex flex-col gap-1">
                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest italic flex items-center gap-2">
                        <Check className="w-3 h-3 text-primary" /> NÃO TEM MENSALIDADE
                    </p>
                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest italic flex items-center gap-2">
                        <Check className="w-3 h-3 text-primary" /> NÃO TEM DESCULPA
                    </p>
                </div>
              )}
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "E-book Direto e Reto",
                "Estratégia de Ergogênicos Naturais",
                "Guia Alimentar Sem Balança",
                "Treino de Ataque (Casa/Academia)",
                "Cronograma de 7 Dias"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base font-bold italic text-foreground/90">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-accent/20">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {!isExpired ? (
              <button 
                onClick={onPurchase}
                className="w-full py-8 rounded-2xl font-black text-xl uppercase tracking-tighter transition-all flex items-center justify-center gap-3 border-b-8 bg-primary text-black hover:bg-orange-400 border-orange-700 shadow-xl shadow-primary/20 active:scale-[0.98]"
              >
                LIBERAR AGORA
                <ArrowRight className="w-6 h-6" />
              </button>
            ) : (
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl text-center">
                <p className="text-red-500 text-xs font-black uppercase tracking-widest italic flex items-center justify-center gap-2 mb-1">
                  <ShieldAlert className="w-4 h-4" /> Oferta Finalizada
                </p>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest leading-tight">Aguarde a liberação de novas vagas</p>
              </div>
            )}
            
            <div className="mt-6 flex items-center justify-center gap-2 opacity-50">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Compra 100% Segura & Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
