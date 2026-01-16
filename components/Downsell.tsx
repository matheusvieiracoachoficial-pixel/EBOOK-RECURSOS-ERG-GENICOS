
import React from 'react';
import { ArrowRight, Check, ShieldAlert, Sparkles, Zap, Gift } from 'lucide-react';

interface DownsellProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Downsell: React.FC<DownsellProps> = ({ onAccept, onDecline }) => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white py-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-2xl w-full relative z-10 space-y-12 animate-fade-in-up">
        
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.3em] italic">
            ÚLTIMA CHANCE COM DESCONTO
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase italic tracking-tighter leading-none">
            NÃO SAIA DE <br /><span className="text-secondary">MÃOS VAZIAS.</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs italic leading-relaxed">
            SABEMOS QUE NEM SEMPRE É O MOMENTO CERTO... ENTÃO AQUI VAI UMA CHANCE ÚNICA.
          </p>
        </div>

        <div className="bg-zinc-900 border-2 border-dashed border-secondary/30 rounded-[2.5rem] p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
              <Gift className="w-48 h-48 text-secondary" />
           </div>

           <div className="space-y-4 relative z-10">
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">
                🔥 3 DICAS EXCLUSIVAS DE RESULTADO
              </h2>
              <p className="text-zinc-400 text-sm italic font-medium">
                Essas são as mesmas orientações de alta performance que aplico com meus alunos presenciais. Prática, direta e sem enrolação.
              </p>
           </div>

           <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex flex-col items-center">
                 <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest line-through">Preço Original R$ 47,00</span>
                 <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-secondary italic">R$</span>
                    <span className="text-7xl font-black text-white tracking-tighter italic">9</span>
                    <span className="text-xl font-black text-secondary italic">,90</span>
                 </div>
              </div>

              <button 
                onClick={onAccept}
                className="w-full py-6 bg-secondary hover:bg-yellow-400 text-black font-black text-lg uppercase tracking-tighter rounded-xl transition-all shadow-xl shadow-secondary/20 border-b-4 border-yellow-700 flex items-center justify-center gap-3 group"
              >
                SIM, QUERO COM DESCONTO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>

           <button 
            onClick={onDecline}
            className="text-zinc-600 hover:text-zinc-400 font-black text-[10px] uppercase tracking-widest italic transition-colors underline underline-offset-4"
          >
            Não quero nada, obrigado.
          </button>
        </div>

        <div className="flex justify-center gap-6 opacity-40">
           <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-widest italic">Acesso por 24h</span>
           </div>
           <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-[10px] font-black uppercase tracking-widest italic">Entrega Imediata</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Downsell;
