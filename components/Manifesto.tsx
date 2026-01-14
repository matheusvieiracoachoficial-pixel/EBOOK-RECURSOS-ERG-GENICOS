
import React from 'react';
import { XCircle, ShieldAlert, HeartCrack, Skull, TrendingDown } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase italic tracking-widest">
              <TrendingDown className="w-4 h-4" /> CHOQUE DE REALIDADE
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase italic leading-[0.9] tracking-tighter">
              POR QUE VOCÊ AINDA <br /><span className="text-red-600">PARECE UM AMADOR?</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-tight font-medium">
              <p className="italic">Faça o teste do espelho agora. Olhe para si mesmo. Cadê a evolução dos últimos 6 meses? Cadê a força que você prometeu que teria?</p>
              
              <p className="text-white font-black uppercase tracking-tighter">A verdade dói: você está sendo o "palhaço do suor". Treina pesado, se cansa, mas sua bioquímica está travada.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Seu peitoral continua o mesmo de sempre",
                  "Você treina cansado e sem foco real",
                  "Cargas estagnadas enquanto amadores te passam",
                  "Você gasta R$ 300 em suplemento lixo todo mês"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground font-black italic uppercase text-sm tracking-tight">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-10 rounded-[2.5rem] border border-white/5 space-y-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <Skull className="w-48 h-48 text-white" />
             </div>
             <div className="flex items-center gap-3">
                <HeartCrack className="w-8 h-8 text-zinc-600" />
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">O ESFORÇO BURRO NÃO COMPENSA.</h3>
             </div>
             <p className="text-zinc-400 leading-relaxed italic font-medium">
               A elite não treina mais que você. Eles treinam com <span className="text-white font-black underline decoration-primary underline-offset-4">ESTRATÉGIA BIOQUÍMICA</span>. Enquanto você toma cafeína barata, eles estão modulando receptores e otimizando a síntese de ATP de forma cirúrgica.
             </p>
             <div className="p-6 bg-red-600/10 border border-red-600/20 rounded-2xl">
                <p className="text-red-500 text-sm font-black uppercase tracking-widest italic">⚠️ DECISÃO CRÍTICA:</p>
                <p className="text-sm text-zinc-300 mt-2 italic font-bold">Continuar sendo o cara que "tenta" é uma escolha. Ser o cara que "domina" exige o protocolo que você ainda não tem.</p>
             </div>
          </div>
        </div>

        <div className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-red-600/10 via-zinc-900 to-zinc-900 border border-white/10 overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <ShieldAlert className="w-40 h-40 text-primary" />
          </div>
          <h3 className="text-4xl md:text-7xl font-black text-foreground font-display uppercase italic tracking-tighter leading-none">
            PARE DE SER O <br /> <span className="text-gradient">FIGURANTE DA ACADEMIA.</span>
          </h3>
          <p className="text-xl md:text-3xl font-black text-foreground/90 max-w-4xl mx-auto italic uppercase tracking-tighter leading-none">
            VENENO É A IGNORÂNCIA QUE VOCÊ APLICA AO SEU CORPO TODO SANTO DIA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
