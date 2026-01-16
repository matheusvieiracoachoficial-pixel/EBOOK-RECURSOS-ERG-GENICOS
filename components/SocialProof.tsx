
import React from 'react';
import { Users, Star, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Fernanda Costa",
    age: "26 anos",
    role: "Mãe & Empresária",
    feedback: "Finalmente perdi aquela gordura teimosa e mantive a massa magra. A estratégia de dieta funcional é muito fácil de seguir mesmo com a rotina de mãe.",
    gender: "female"
  },
  {
    name: "Ricardo Alencar",
    age: "32 anos",
    role: "Empresário",
    feedback: "Sempre fui o 'magrelo' do escritório. Em uma semana seguindo o guia de ergogênicos naturais, minha densidade muscular e foco no trabalho mudaram.",
    gender: "male"
  },
  {
    name: "Camila Torres",
    age: "24 anos",
    role: "Estudante de Medicina",
    feedback: "Minha disposição mudou da água pro vinho. O capítulo de descanso elite me fez acordar com energia de verdade pra aguentar o plantão e treinar.",
    gender: "female"
  },
  {
    name: "Marcos Vinícius",
    age: "29 anos",
    role: "Engenheiro Civil",
    feedback: "Protocolo de elite. Recuperei meu drive e minha força em tempo recorde. Sinto que saí de um platô de 2 anos em apenas 7 dias.",
    gender: "male"
  },
  {
    name: "Beatriz Nogueira",
    age: "31 anos",
    role: "Advogada",
    feedback: "O foco que o protocolo dá é incrível. Meus treinos mudaram de patamar. Recomendo para todas que buscam performance e estética de elite.",
    gender: "female"
  },
  {
    name: "Gustavo Silva",
    age: "27 anos",
    role: "Personal Trainer",
    feedback: "Acompanho muitos métodos, mas a visão bioquímica do Matheus é diferenciada. Apliquei em mim e o volume muscular saltou em 5 dias.",
    gender: "male"
  },
  {
    name: "Julia Mendes",
    age: "23 anos",
    role: "Modelo Fotográfica",
    feedback: "Achei que era só pra homem, mas os ajustes pra mulher funcionam demais. Tonificação e definição apareceram muito rápido sem inchaço.",
    gender: "female"
  },
  {
    name: "Felipe Gontijo",
    age: "22 anos",
    role: "Estudante Universitário",
    feedback: "Parei de gastar rios de dinheiro com suplemento lixo que só dava palpitação. O pump que consegui na primeira semana foi surreal.",
    gender: "male"
  },
  {
    name: "Letícia Ramos",
    age: "25 anos",
    role: "Nutricionista",
    feedback: "Como nutri, validei cada vírgula. O guia alimentar é prático e eficiente. Melhorei meu físico e recomendo a metodologia pela segurança.",
    gender: "female"
  },
  {
    name: "Carlos Eduardo",
    age: "24 anos",
    role: "Analista de Sistemas",
    feedback: "O foco dopaminérgico que esse guia ensina é bizarro. Minha presença física hoje impõe respeito na academia e no trabalho.",
    gender: "male"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-32 bg-zinc-950 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] italic mx-auto">
            <Users className="w-4 h-4" /> COMUNIDADE FORÇA PROIBIDA
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-white font-display uppercase italic tracking-tighter leading-[0.85]">
            RESULTADOS QUE <br /><span className="text-gradient">IMPÕEM RESPEITO.</span>
          </h2>
          <div className="flex justify-center gap-1">
             {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 md:w-8 md:h-8 text-secondary fill-secondary drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]" />)}
          </div>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs italic">
            MAIS DE 1.000 VIDAS TRANSFORMADAS PELA METODOLOGIA DO MATHEUS VIEIRA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card rounded-[2.5rem] p-10 border border-white/5 hover:border-primary/40 transition-all duration-500 group flex flex-col h-full shadow-2xl hover:translate-y-[-5px] bg-gradient-to-br from-zinc-900/80 to-zinc-950/90">
               <div className="flex justify-between items-start mb-8">
                 <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                    <Quote className="w-5 h-5 text-primary" />
                 </div>
                 <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/10">
                    <ShieldCheck className="w-3 h-3 text-accent" />
                    <span className="text-[7px] font-black text-white/60 uppercase tracking-widest">Verificado</span>
                 </div>
               </div>
               
               <div className="flex-grow flex flex-col space-y-6">
                  <p className="text-zinc-200 font-bold italic text-base leading-relaxed flex-grow">
                    "{t.feedback}"
                  </p>

                  <div className="pt-8 border-t border-white/5 space-y-4">
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-black text-white uppercase italic tracking-tight group-hover:text-primary transition-colors leading-none">
                        {t.name}
                      </h4>
                      <div className="flex items-center justify-between">
                         <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">{t.age}</p>
                         <span className="text-[8px] font-black text-primary/60 uppercase tracking-widest italic">{t.role}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-0.5">
                       {[...Array(5)].map((_, starIdx) => <Star key={starIdx} className="w-3 h-3 text-secondary fill-secondary" />)}
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Social Proof Footer */}
        <div className="text-center pt-10">
           <div className="inline-flex flex-col md:flex-row items-center gap-8 px-12 py-8 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md shadow-2xl">
              <div className="flex -space-x-4">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-950 bg-zinc-800 overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" className="w-full h-full object-cover grayscale" />
                   </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-zinc-950 bg-primary flex items-center justify-center text-[10px] font-black text-black shadow-lg">
                    +1k
                 </div>
              </div>
              <div className="text-left">
                 <p className="text-white font-black uppercase italic tracking-tight text-lg md:text-xl">JUNTE-SE AOS +1.000 ALUNOS</p>
                 <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest italic">A próxima grande transformação pode ser a sua.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
