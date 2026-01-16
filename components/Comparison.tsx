
import React from 'react';
import { XCircle, CheckCircle2, TrendingDown, Zap, ShieldAlert, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-zinc-950 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] italic">
            Diferencial Competitivo
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-display uppercase italic tracking-tighter leading-none">
            ANTES E DEPOIS DO <br />
            <span className="text-primary">FORÇA PROIBIDA.</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs md:text-sm italic max-w-2xl mx-auto">
            A DISTÂNCIA ENTRE ONDE VOCÊ ESTÁ E ONDE QUER CHEGAR É O MÉTODO QUE VOCÊ ESCOLHE SEGUIR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Coluna SEM */}
          <div className="relative group">
            <div className="h-full bg-zinc-900/40 p-8 md:p-12 rounded-[2.5rem] border border-red-500/10 hover:border-red-500/30 transition-all duration-500 space-y-10">
               <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                     <ShieldAlert className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-500 uppercase tracking-tighter italic">
                     🚫 SEM O <br /> PROTOCOLO
                  </h3>
               </div>

               <ul className="space-y-5">
                 {[
                   "Treina há meses e o corpo parece o mesmo",
                   "Sente cansaço, desânimo e zero constância",
                   "Se mata no treino e não sente recuperação",
                   "Suplementa errado ou nem sabe por onde começar",
                   "Vive no platô, rodando em círculo",
                   "Sente que ninguém nota sua evolução",
                   "Motivação oscilando toda semana",
                   "Faz o que vê no Instagram e nunca funciona"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 group/item">
                     <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                     <span className="text-zinc-500 font-medium italic text-sm md:text-base leading-tight group-hover/item:text-zinc-300 transition-colors">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Coluna COM */}
          <div className="relative group">
            {/* Glow effect only for the 'WITH' column */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-orange-600/30 rounded-[2.6rem] blur-xl opacity-40 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative h-full bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border-2 border-primary shadow-[0_20px_50px_-15px_rgba(249,115,22,0.3)] space-y-10 overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Zap className="w-32 h-32 text-primary" />
               </div>

               <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-black flex items-center justify-center shadow-lg shadow-primary/20">
                     <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">
                     ✅ COM O <br /> <span className="text-primary">FORÇA PROIBIDA</span>
                  </h3>
               </div>

               <ul className="space-y-5">
                 {[
                   "Evolução visível já nos primeiros 7 dias",
                   "Energia brutal, foco natural e disciplina afiada",
                   "Recuperação acelerada com suporte natural",
                   "Plano direto com recursos ergogênicos naturais aplicáveis",
                   "Progresso contínuo com método validado",
                   "Presença que impõe respeito na academia e fora dela",
                   "Clareza de objetivo, rotina leve e evolução consistente",
                   "Estratégia pensada pra iniciantes com resultado real"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                     <span className="text-white font-black italic text-sm md:text-base leading-tight uppercase tracking-tight">{item}</span>
                   </li>
                 ))}
               </ul>

               <div className="pt-6 border-t border-white/10 flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-primary animate-pulse rotate-180" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] italic">Evolução Inevitável Ativada</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
