
import React from 'react';
import { ShieldCheck, Lock, ShieldAlert } from 'lucide-react';

interface GuaranteeProps {
  onPurchase?: () => void;
  // @fix: Added isExpired to GuaranteeProps to match App.tsx usage and resolve type mismatch error.
  isExpired?: boolean;
}

const Guarantee: React.FC<GuaranteeProps> = ({ onPurchase, isExpired }) => {
  return (
    <section className="py-24 bg-zinc-950 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900 rounded-[3rem] border border-accent/20 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent/40" />
          
          <div className="shrink-0">
             <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                <ShieldCheck className="w-16 h-16 text-accent" />
             </div>
          </div>

          <div className="text-center md:text-left space-y-4">
            <h3 className="text-3xl font-black text-foreground font-display uppercase italic leading-none">
              RISCO <span className="text-accent">ZERO.</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed italic">
              Você tem 7 dias para testar todo o conteúdo. Se por qualquer motivo sentir que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center space-y-10">
          <h4 className="text-3xl md:text-5xl font-black text-foreground font-display uppercase italic leading-tight">
            CHEGOU A HORA DE <br /><span className="text-primary">DECIDIR.</span>
          </h4>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic leading-relaxed">
            Você vai continuar estagnado aceitando menos do que seu corpo pode entregar, ou vai assumir o controle da sua performance com inteligência?
          </p>
          
          <div className="flex flex-col items-center gap-6">
            {/* @fix: Conditionally render the CTA button or an expiration message based on the isExpired prop. */}
            {!isExpired ? (
              <button 
                onClick={onPurchase}
                className="bg-primary hover:bg-orange-400 text-black font-black px-16 py-8 rounded-2xl text-2xl uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(249,115,22,0.3)] border-b-8 border-orange-700"
              >
                QUERO MEU GUIA AGORA!
              </button>
            ) : (
              <div className="bg-red-950/20 border border-red-500/30 p-8 rounded-2xl text-center animate-pulse">
                <p className="text-red-500 font-black uppercase tracking-widest text-xs md:text-sm italic flex items-center justify-center gap-2 mb-2">
                  <ShieldAlert className="w-5 h-5" /> OPORTUNIDADE ENCERRADA
                </p>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest leading-tight">Sua janela de oportunidade fechou. Aguarde a próxima turma.</p>
              </div>
            )}
            
            <div className="flex items-center gap-2 text-muted-foreground/40 text-[10px] font-black uppercase tracking-widest">
              <Lock className="w-3 h-3" /> Pagamento 100% Criptografado • Acesso Imediato
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
