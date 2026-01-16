
import React from 'react';
import { XCircle, ShieldAlert, HeartCrack, Skull, TrendingDown } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase italic tracking-widest">
              <TrendingDown className="w-4 h-4" /> IDENTIFICAÇÃO BRUTA
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase italic leading-[0.9] tracking-tighter">
              POR QUE VOCÊ AINDA <br /><span className="text-red-600">PARECE UM AMADOR?</span>
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg leading-tight font-medium">
              <p className="italic">Faça o teste do espelho agora. Olhe para si mesmo. Cadê a evolução? Cadê a força que você prometeu que teria?</p>
              
              <p className="text-white font-black uppercase tracking-tighter pt-4">VOCÊ JÁ PASSOU POR ISSO:</p>
              
              <div className="space-y-4">
                {[
                  "Seguiu treino de influencer e não viu diferença?",
                  "Tentou suplemento caro e só perdeu dinheiro?",
                  "Comeu frango com batata doce achando que isso bastava?",
                  "Treina pesado, se cansa, mas sua bioquímica está travada?"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground font-black italic uppercase text-sm tracking-tight">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-10 rounded-[2.5rem] border border-white/5 space-y-8 relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <Skull className="w-48 h-48 text-white" />
             </div>
             <div className="flex items-center gap-3">
                <HeartCrack className="w-8 h-8 text-zinc-600" />
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">A CULPA NÃO É SUA. É DO SISTEMA.</h3>
             </div>
             <p className="text-zinc-400 leading-relaxed italic font-medium">
               Eles escondem o que realmente funciona. O problema não é você, é que você está tentando correr uma maratona com o freio de mão puxado. <span className="text-white font-black underline decoration-primary underline-offset-4">FORÇA PROIBIDA</span> é o plano de 7 dias pra quem tá travado no físico de iniciante.
             </p>
             <div className="p-6 bg-red-600/10 border border-red-600/20 rounded-2xl">
                <p className="text-red-500 text-sm font-black uppercase tracking-widest italic">⚠️ AVISO FINAL:</p>
                <p className="text-sm text-zinc-300 mt-2 italic font-bold">Chegou a hora de quebrar esse ciclo. Pare de ser o palhaço do suor.</p>
             </div>
          </div>
        </div>

        <div className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-red-600/10 via-zinc-900 to-zinc-900 border border-white/10 overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <ShieldAlert className="w-40 h-40 text-primary" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-foreground font-display uppercase italic tracking-tighter leading-none">
            VOCÊ TEM 7 DIAS PRA <br /> <span className="text-gradient">MUDAR O JOGO.</span>
          </h3>
          <p className="text-lg md:text-2xl font-black text-foreground/90 max-w-4xl mx-auto italic uppercase tracking-tighter leading-none">
            OU MAIS 7 PRA CONTINUAR RECLAMANDO. A ESCOLHA É SUA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
