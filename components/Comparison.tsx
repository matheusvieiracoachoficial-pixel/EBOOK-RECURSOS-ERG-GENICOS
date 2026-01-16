
import React from 'react';
import { ShieldX, ShieldCheck, Star, X, Check } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-zinc-950 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-xs font-black text-white/30 tracking-[0.4em] uppercase italic">O CONFRONTAR FINAL</h2>
          <h3 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
            MUDE DE <span className="text-red-600">LADO</span> <br /> 
            <span className="text-gradient">ENQUANTO HÁ TEMPO.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Lado SEM O PROTOCOLO */}
          <div className="bg-zinc-900/40 p-10 md:p-16 rounded-[3rem] border border-white/5 space-y-12 transition-all hover:border-red-500/20 group">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center border border-red-600/20 group-hover:scale-110 transition-transform">
                <ShieldX className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-zinc-600 uppercase italic tracking-tighter">SEM O <br /> PROTOCOLO</h4>
            </div>
            
            <ul className="space-y-8">
              {[
                "Treina há meses e o espelho não muda",
                "Cansaço mental e zero drive matinal",
                "Se mata no treino mas a recuperação é lenta",
                "Gasta rios de dinheiro com pré-treinos inúteis",
                "Vive no eterno platô biológico de amador"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 text-zinc-500 font-bold uppercase italic text-base md:text-xl tracking-tight leading-tight">
                  <X className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lado COM O FORÇA PROIBIDA */}
          <div className="bg-zinc-900/60 p-10 md:p-16 rounded-[3rem] border-2 border-primary/40 space-y-12 relative overflow-hidden group shadow-[0_0_80px_rgba(249,115,22,0.15)] bg-gradient-to-br from-primary/5 to-transparent">
            {/* Decorativo */}
            <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity rotate-12">
              <Star className="w-96 h-96 text-primary fill-primary" />
            </div>

            <div className="flex items-center gap-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter">COM O <br /> <span className="text-primary">FORÇA PROIBIDA</span></h4>
            </div>
            
            <ul className="space-y-8 relative z-10">
              {[
                "Evolução visual já nos primeiros 7 dias",
                "Drive de elite, foco natural e energia brutal",
                "Recuperação imediata após treinos intensos",
                "Uso inteligente de ergogênicos naturais",
                "Presença física que impõe respeito real"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 text-white font-black uppercase italic text-base md:text-xl tracking-tight leading-tight group-hover:translate-x-2 transition-transform">
                  <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/40 shrink-0 mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 relative z-10">
               <div className="bg-primary/20 border border-primary/30 p-4 rounded-2xl text-center">
                  <p className="text-primary font-black text-xs uppercase tracking-[0.3em] italic">RESULTADO GARANTIDO POR CIÊNCIA</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
