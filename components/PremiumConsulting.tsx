
import React from 'react';
import { Crown, Check, X, ShieldCheck, Microscope, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const PremiumConsulting: React.FC = () => {
  return (
    <section id="consulting" className="py-32 bg-black px-4 relative overflow-hidden">
      {/* Exclusive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] italic">
              High-End Strategy
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground font-display uppercase tracking-tight leading-none">
              CONSULTORIA <br /><span className="text-gradient">PREMIUM</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Otimização Fisiológica sob Medida. Para quem não aceita nada menos que o ápice da performance humana.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                   <Microscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground uppercase italic tracking-tight">Metodologia Baseada em Dados</h4>
                  <p className="text-sm text-muted-foreground">Análise profunda de biomarcadores e rotina para criar seu stack individual.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                   <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground uppercase italic tracking-tight">Foco em Longevidade</h4>
                  <p className="text-sm text-muted-foreground">Alta performance sem sacrificar sua saúde a longo prazo. Estratégias éticas e seguras.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] backdrop-blur-sm">
               <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-4">Resultados Esperados</div>
               <div className="grid grid-cols-2 gap-4">
                  {["Performance Máxima", "Recuperação 2x Mais Rápida", "Foco Inabalável", "Sono Restaurador"].map((r, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {r}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/20 rotate-12">
               <Crown className="w-12 h-12 text-black" />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-black text-foreground uppercase font-display italic tracking-tighter mb-2">Plano Individual</h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Acompanhamento de 90 dias</p>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">O que está incluído:</div>
                <ul className="space-y-4">
                  {[
                    "Análise completa de rotina e objetivos",
                    "Criação de Stack Personalizado (Biohacking)",
                    "Acompanhamento quinzenal via Zoom",
                    "Protocolos de Timing Nutricional",
                    "Suporte direto via WhatsApp VIP",
                    "Acesso vitalício a todas as atualizações"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground/90">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded text-[10px] font-black text-red-400 uppercase tracking-widest">
                    Apenas 3 vagas/mês
                  </div>
                </div>
                
                <button className="w-full bg-primary hover:bg-orange-400 text-black font-black py-6 rounded-2xl text-xl uppercase tracking-tighter transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 group">
                  <Calendar className="w-6 h-6" />
                  Agendar Consultoria
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-widest font-bold">Incluso no ecossistema de elite</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
             <h5 className="text-sm font-black text-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
               <Check className="w-4 h-4 text-accent" /> PARA QUEM É
             </h5>
             <p className="text-xs text-muted-foreground leading-relaxed">
               Atletas de elite, empresários de alta performance e indivíduos que já dominam o básico e buscam a otimização final da sua biologia.
             </p>
          </div>
          <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] opacity-50">
             <h5 className="text-sm font-black text-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
               <X className="w-4 h-4 text-red-500" /> PARA QUEM NÃO É
             </h5>
             <p className="text-xs text-muted-foreground leading-relaxed">
               Iniciantes que não treinam de forma consistente, pessoas em busca de "pílulas mágicas" ou quem não está disposto a investir tempo em acompanhamento sério.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumConsulting;
