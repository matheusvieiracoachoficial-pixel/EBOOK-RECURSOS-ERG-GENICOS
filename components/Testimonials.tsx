
import React from 'react';
import { Star, Quote, ShieldCheck, Users, Flame } from 'lucide-react';

const socialProofData = [
  {
    name: "BRUNO SILVA",
    status: "INICIANTE",
    text: "1 semana aplicando. Tô com mais força, pump mais bruto e dormindo que nem pedra. Primeira vez que vejo meu treino render.",
    tag: "Resultados Reais"
  },
  {
    name: "AMANDA COSTA",
    status: "ESTUDANTE",
    text: "Nem suplementava direito. Agora sigo o plano e me sinto ligada no 220v. Sem ansiedade, sem queda de energia.",
    tag: "Performance"
  },
  {
    name: "RICARDO OLIVEIRA",
    status: "ESTAGNADO",
    text: "2 anos estagnado. O protocolo me deu direção. Força, foco e finalmente estou crescendo de novo.",
    tag: "Ganho de Massa"
  },
  {
    name: "LARISSA MARTINS",
    status: "MÃE",
    text: "Achava que já tava velha pra isso. Mas em 7 dias, voltei a sentir meu corpo VIVO.",
    tag: "Vitalidade"
  },
  {
    name: "ANDRÉ SOUZA",
    status: "NUTRICIONISTA",
    text: "Faço nutrição. O que tem nesse protocolo é o que FUNCIONA. Sem palhaçada. O cara entrega o que ninguém fala.",
    tag: "Científico"
  },
  {
    name: "THIAGO FERREIRA",
    status: "CÉTICO",
    text: "Paguei R$19 achando que ia ser só mais um PDF furado. Mano… apliquei e meu corpo respondeu em 5 dias. Racional, agressivo e eficiente.",
    tag: "Custo-Benefício"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#09090b] px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex justify-center gap-1.5 mb-2">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-primary drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />)}
            </div>
            <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase italic tracking-[0.3em] mb-2">
              <Users className="w-4 h-4" /> COMUNIDADE DE ALTA PERFORMANCE
            </div>
            <h2 className="text-4xl md:text-8xl font-black text-white font-display uppercase italic tracking-tighter leading-none">
                RELATOS DO <span className="text-primary underline decoration-white/10 underline-offset-[12px]">CAMPO DE BATALHA.</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase tracking-tight text-sm md:text-base italic max-w-2xl mx-auto">
                RESULTADOS REAIS DE PESSOAS QUE PARARAM DE OUVIR INFLUENCERS E PASSARAM A SEGUIR A CIÊNCIA DO RESULTADO.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialProofData.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900/40 p-10 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all duration-700 flex flex-col gap-8 group hover:bg-zinc-900/60 shadow-xl relative"
                >
                    <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <Quote className="w-16 h-16 text-white" />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-black text-primary italic">
                            {index + 1}
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">Tag: {item.tag}</span>
                           <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-primary fill-primary" />)}
                           </div>
                        </div>
                    </div>
                    
                    <p className="text-base md:text-lg font-medium text-zinc-300 italic leading-relaxed group-hover:text-white transition-colors relative z-10">
                        "{item.text}"
                    </p>

                    <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                        <div>
                           <p className="text-white font-black text-sm italic uppercase tracking-tight leading-none mb-1">{item.name}</p>
                           <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{item.status}</p>
                        </div>
                        <div className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-xl border border-accent/20">
                           <ShieldCheck className="w-3 h-3 text-accent" />
                           <span className="text-[9px] font-black text-accent uppercase tracking-widest">Verificado</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="pt-12 flex justify-center">
           <div className="flex items-center gap-3 bg-zinc-900/50 px-8 py-4 rounded-full border border-white/5 animate-bounce">
              <Flame className="w-5 h-5 text-primary" />
              <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">E o próximo depoimento vai ser o seu.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
