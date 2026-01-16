
import React from 'react';
import { Microscope, History, Quote, GraduationCap, ShieldCheck, Award, Users, Target } from 'lucide-react';

const Creator: React.FC = () => {
  return (
    <section id="creator" className="py-32 bg-zinc-950 px-4 relative overflow-hidden border-t border-white/5">
      {/* Elementos de Brilho de Fundo */}
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado das Imagens / Visual */}
          <div className="relative grid grid-cols-2 gap-4">
             <div className="col-span-1 space-y-4">
                <div className="relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden border border-primary/30 shadow-2xl group">
                   <img 
                    src="https://i.imgur.com/L4bi8wA.jpeg" 
                    alt="Matheus Vieira - Especialista" 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="relative h-48 md:h-64 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl group">
                   <img 
                    src="https://i.imgur.com/wxBQWYX.jpeg" 
                    alt="Graduação Matheus Vieira" 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>

             <div className="col-span-1 pt-12">
                <div className="relative h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden border-2 border-primary/40 shadow-[0_0_60px_rgba(249,115,22,0.2)] group">
                   <img 
                    src="https://i.imgur.com/EmB0fNQ.jpeg" 
                    alt="Transformação Real Matheus" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                   
                   {/* Badge de Autoridade Flutuante */}
                   <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center">
                      <span className="text-primary font-black text-2xl leading-none italic">+1000</span>
                      <span className="text-[8px] font-black text-white/60 uppercase tracking-widest mt-1">VIDAS MUDADAS</span>
                   </div>

                   <div className="absolute bottom-10 left-6 right-6 space-y-3 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-black text-[10px] font-black uppercase italic tracking-widest shadow-xl">
                         <Award className="w-3 h-3" /> ESTRATEGISTA CHEFE
                      </div>
                      <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter drop-shadow-lg">MATHEUS VIEIRA</h4>
                      <p className="text-[10px] text-white/60 font-black uppercase tracking-[0.3em] italic">Fundador Força Proibida</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Lado do Texto / Autoridade */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase italic tracking-widest bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                <History className="w-4 h-4" /> A MENTE POR TRÁS DO MÉTODO
              </div>
              
              <h2 className="text-5xl md:text-8xl font-black text-foreground font-display uppercase italic tracking-tighter leading-[0.85]">
                👤 QUEM É <br />
                <span className="text-gradient">MATHEUS VIEIRA?</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-medium leading-relaxed italic">
              <div className="space-y-4">
                <p>
                  Com apenas <span className="text-white font-black underline decoration-primary decoration-2 underline-offset-4">21 anos</span>, Matheus Vieira decidiu quebrar o silêncio sobre o que realmente funciona na alta performance.
                </p>
                <p>
                  Educador, Nutricionista e <span className="text-primary font-black">Especialista em Bioquímica</span>, ele não apenas estuda a ciência — ele a manipula para gerar resultados que desafiam a genética comum.
                </p>
                <p>
                  Já são mais de <span className="text-white font-black">1.000 pessoas</span> que tiveram suas vidas e físicos transformados através de sua metodologia direta, agressiva e validada por resultados reais.
                </p>
              </div>
              
              <div className="bg-zinc-900/50 p-10 rounded-[3rem] border-l-8 border-primary shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-32 h-32 text-white" />
                </div>
                <p className="text-white text-2xl md:text-3xl font-black font-display uppercase tracking-tight leading-tight relative z-10 italic">
                  "Eu não estou aqui para te dar um PDF. Estou aqui para te dar o <span className="text-primary">DOMÍNIO</span> sobre a sua própria biologia."
                </p>
              </div>

              {/* Pilares de Autoridade */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                 <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:border-primary/40 transition-all">
                    <GraduationCap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-center text-zinc-300">EDUCADOR <br/>FÍSICO</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:border-primary/40 transition-all">
                    <Microscope className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-center text-zinc-300">ESP. EM <br/>BIOQUÍMICA</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:border-primary/40 transition-all">
                    <Users className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-center text-zinc-300">+1000 <br/>ALUNOS</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:border-primary/40 transition-all">
                    <Target className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-center text-zinc-300">RESULTADO <br/>GARANTIDO</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
