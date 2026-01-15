
import React from 'react';
import { Star, Quote, Smartphone } from 'lucide-react';

const testimonials = [
  {
    name: "Felipe S.",
    age: "29 anos | SP",
    text: "Em 3 semanas usando as estratégias, minha performance melhorou MUITO. Recuperação mais rápida e muito mais disposição.",
    tag: "Resultados Reais"
  },
  {
    name: "Ricardo F.",
    age: "34 anos | GO",
    text: "Sério, conteúdo de curso premium! Muito acima do que eu esperava de um e-book.",
    tag: "Qualidade Premium"
  },
  {
    name: "Daniel M.",
    age: "25 anos | RJ",
    text: "O app facilitou tudo. Ver os vídeos com explicação direta foi essencial.",
    tag: "Praticidade"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <div className="flex justify-center gap-1 mb-4">
             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-secondary fill-secondary" />)}
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase italic">
            DEPOIMENTOS <span className="text-gradient">REAIS.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-900 p-10 rounded-[3rem] border border-white/5 relative group hover:border-primary/40 transition-all flex flex-col h-full">
              <Quote className="w-12 h-12 text-primary/10 absolute top-8 right-8" />
              
              <div className="mb-6 flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full w-fit">
                 {i === 2 && <Smartphone className="w-3 h-3 text-secondary" />}
                 <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">{t.tag}</span>
              </div>

              <p className="text-lg text-foreground/90 mb-8 relative z-10 italic leading-relaxed font-medium flex-grow">
                "{t.text}"
              </p>
              
              <div className="pt-8 border-t border-white/5">
                <p className="text-foreground font-black text-xl italic uppercase tracking-tight">{t.name}</p>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">{t.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
