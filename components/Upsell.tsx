
import React from 'react';
import { Crown, Check, Trophy, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface UpsellProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Upsell: React.FC<UpsellProps> = ({ onAccept, onDecline }) => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 space-y-12 animate-fade-in-up">
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
          <div className="w-[85%] h-full bg-primary shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-1000" />
        </div>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] italic">
            ESPERA! NÃO FECHE ESTA PÁGINA
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase italic tracking-tighter leading-[0.85]">
            ADICIONE MAIS <span className="text-primary">RESULTADO</span> <br />
            AO SEU PROTOCOLO.
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs md:text-sm italic max-w-2xl mx-auto">
            VOCÊ ESTÁ PRESTES A COMEÇAR O FORÇA PROIBIDA... MAS E SE VOCÊ TIVESSE ACESSO DIRETO AO CRIADOR DO MÉTODO?
          </p>
        </div>

        {/* Offer Card */}
        <div className="bg-zinc-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative group">
           <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[4/5] md:aspect-auto">
                 <img 
                  src="/assets/D5ECF0C8.jpg" 
                  alt="Matheus Vieira" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                 <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                       <Crown className="w-6 h-6 text-black" />
                    </div>
                    <div>
                       <p className="text-xs font-black uppercase text-primary italic leading-none">VIP STRATEGY</p>
                       <p className="text-lg font-black text-white italic leading-none">MATHEUS VIEIRA</p>
                    </div>
                 </div>
              </div>

              <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                 <div className="space-y-4">
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter flex items-center gap-3">
                       <Trophy className="w-6 h-6 text-secondary" /> 
                       CONSULTORIA RÁPIDA (7 DIAS)
                    </h3>
                    <p className="text-zinc-400 text-sm italic font-medium leading-relaxed">
                       Durante 7 dias, você vai poder tirar dúvidas diretamente comigo no WhatsApp — treinador, nutricionista e especialista em performance.
                    </p>
                 </div>

                 <ul className="space-y-4">
                    {[
                      "Análise rápida da sua rotina",
                      "Ajuste fino de dosagens",
                      "Suporte direto no WhatsApp VIP",
                      "Feedback sobre execução de treinos"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs font-black uppercase italic text-zinc-300">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                 </ul>

                 <div className="pt-4 border-t border-white/5 space-y-6">
                    <div className="flex flex-col">
                       <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest line-through">De R$ 197,00 por apenas</span>
                       <div className="flex items-center gap-1">
                          <span className="text-xl font-bold text-primary italic">R$</span>
                          <span className="text-6xl font-black text-white tracking-tighter italic">97</span>
                          <span className="text-sm font-black text-primary italic">,00</span>
                       </div>
                    </div>

                    <div className="space-y-3">
                      <button 
                        onClick={onAccept}
                        className="w-full py-6 bg-primary hover:bg-orange-400 text-black font-black text-lg uppercase tracking-tighter rounded-2xl transition-all shadow-xl shadow-primary/20 border-b-4 border-orange-800 flex items-center justify-center gap-3 group"
                      >
                        SIM, QUERO A CONSULTORIA
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      
                      <button 
                        onClick={onDecline}
                        className="w-full py-4 text-zinc-600 hover:text-zinc-400 font-black text-[10px] uppercase tracking-widest italic transition-colors underline underline-offset-4"
                      >
                        Não, prefiro tentar sozinho e arriscar errar as doses.
                      </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Security Footer */}
        <div className="flex flex-wrap justify-center gap-8 opacity-30 grayscale pointer-events-none">
           <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Segurança Total</span>
           </div>
           <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Acesso Imediato</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Upsell;
