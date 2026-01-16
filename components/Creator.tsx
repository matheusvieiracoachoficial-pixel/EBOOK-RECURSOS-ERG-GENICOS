
import React from 'react';
import { Quote, ShieldCheck, Award, GraduationCap, Microscope } from 'lucide-react';

const Creator: React.FC = () => {
  return (
    <section id="about-matheus" className="py-24 bg-black px-4 relative overflow-hidden border-t border-white/5">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* COLUNA FOTO */}
        <div className="flex-1 w-full max-w-md lg:max-w-none text-center lg:text-left">
           <div className="relative group">
              {/* Glow Behind Photo */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
                 <img 
                  src="https://i.imgur.com/EmB0fNQ.jpeg" 
                  alt="Matheus Vieira" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              <div className="mt-6 space-y-1">
                 <p className="text-sm md:text-base font-black text-white uppercase italic tracking-tighter">Matheus Vieira</p>
                 <p className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em]">Treinador e Criador do Força Proibida</p>
              </div>
           </div>
        </div>

        {/* COLUNA TEXTO */}
        <div className="flex-[1.5] space-y-8">
          <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase italic tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
            <Microscope className="w-4 h-4" /> Autoridade & Ciência
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white font-display uppercase italic tracking-tighter leading-none">
            Quem é <span className="text-primary text-gradient">Matheus Vieira?</span>
          </h2>

          <div className="space-y-6 text-lg text-zinc-400 font-medium leading-relaxed italic">
            <p>
              Eu não sou mais um influencer fitness. Eu sou o cara que vive o que ensina — <strong className="text-white not-italic">no sangue, no treino e na prática.</strong>
            </p>
            
            <p>
              Formado em <strong className="text-white not-italic">Educação Física</strong>, especialista em <strong className="text-white not-italic">Nutrição e Recursos Ergogênicos Naturais</strong>, treino e aplico performance como estilo de vida. Depois de transformar a vida de mais de 100 alunos no Brasil, criei o protocolo <span className="text-white font-black uppercase">Força Proibida</span> — um método direto, sem frescura, feito pra quem quer evolução de verdade.
            </p>

            <blockquote className="mt-10 p-8 bg-zinc-900/50 border-l-4 border-primary rounded-r-3xl relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 opacity-5"><Quote className="w-24 h-24 text-white" /></div>
              <p className="text-white text-xl md:text-2xl font-black font-display uppercase tracking-tight leading-tight relative z-10 italic">
                “O que me motivou a criar o Força Proibida foi ver gente treinando duro e mesmo assim não evoluindo. Treinar é fácil. Crescer com inteligência é o segredo. Esse protocolo é o que eu aplico. O que eu vivo. E agora, é seu.”
              </p>
              <p className="mt-4 text-xs font-black text-primary uppercase tracking-widest">– Matheus Vieira</p>
            </blockquote>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-white/5">
                <GraduationCap className="w-4 h-4 text-zinc-500" />
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Educação Física</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-white/5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Especialista Nutrição</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-white/5">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Ergogênicos Naturais</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Creator;
