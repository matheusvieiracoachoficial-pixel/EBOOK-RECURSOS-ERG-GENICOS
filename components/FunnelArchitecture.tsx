
import React from 'react';
import { 
  Layers, 
  ArrowRight, 
  UserPlus, 
  ShoppingCart, 
  TrendingUp, 
  Zap, 
  ShieldCheck,
  Split,
  Tag,
  MessageSquare,
  CheckCircle2,
  Clock,
  Database,
  Mail,
  Smartphone
} from 'lucide-react';
import { cn } from '../lib/utils';

const FunnelArchitecture: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4 relative overflow-hidden min-h-screen">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest italic">
            Visualizador de Estrutura Técnica (Blueprint)
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tighter italic">
            BLUEPRINT DO <span className="text-gradient">FUNIL PRO.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic font-medium">
            Abaixo está a estrutura lógica, gatilhos de CRM e a régua de automação configurada.
          </p>
        </div>

        {/* Funnel Map Container */}
        <div className="relative space-y-16">
          
          {/* STEP 1: TRAFFIC & VSL */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-zinc-900 border border-white/5 p-8 rounded-[2.5rem] shadow-2xl relative group">
              <div className="absolute -top-4 -left-4 bg-zinc-800 text-zinc-400 text-[10px] font-black px-3 py-1 rounded-lg italic border border-white/5">01. ENTRADA</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <UserPlus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-white uppercase italic tracking-tight">Página de Vendas (VSL)</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Headline + Vídeo + Timer 30min</p>
                </div>
              </div>
              <div className="bg-black/40 p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">Tags Atribuídas:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[8px] font-black px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded">#origem_quiz</span>
                  <span className="text-[8px] font-black px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">#visitou_vsl</span>
                </div>
              </div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-primary/40 to-transparent" />
          </div>

          {/* STEP 2: CHECKOUT & ORDER BUMPS */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xl bg-zinc-900 border border-primary/20 p-8 rounded-[3rem] shadow-2xl relative">
              <div className="absolute -top-4 -left-4 bg-primary text-black text-[10px] font-black px-3 py-1 rounded-lg italic">02. CONVERSÃO</div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                    <ShoppingCart className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase italic tracking-tight">Checkout Otimizado</h4>
                    <span className="text-[9px] text-accent font-black uppercase tracking-widest">Inteligência de Perfil</span>
                  </div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg text-[8px] font-black text-accent uppercase">Bump: Redução Danos</div>
                  <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg text-[8px] font-black text-accent uppercase">Bump: Planner Digital</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                  <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Tag className="w-3 h-3" /> Perfilamento:
                  </div>
                  <div className="space-y-1">
                    <div className="text-[8px] font-bold text-zinc-400">#obj_performance</div>
                    <div className="text-[8px] font-bold text-zinc-400">#perfil_intermediario</div>
                  </div>
                </div>
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                  <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Zap className="w-3 h-3" /> Eventos CRM:
                  </div>
                  <div className="space-y-1">
                    <div className="text-[8px] font-bold text-primary">#checkout_iniciado</div>
                    <div className="text-[8px] font-bold text-zinc-400">#disparo_abandono_30m</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-16 flex flex-col items-center">
               <div className="w-px h-full bg-primary/30" />
               <div className="w-4 h-4 rounded-full bg-primary border-4 border-zinc-950 -mt-2 shadow-[0_0_20px_rgba(249,115,22,0.5)]" />
            </div>
          </div>

          {/* STEP 3: UPSELL & DOWNSELL BRANCH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 max-w-5xl mx-auto relative">
            
            {/* Camino UPSELL */}
            <div className="relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="text-[9px] font-black text-accent uppercase tracking-[0.2em] italic mb-2">Sim (Comprado)</div>
                <div className="w-px h-8 bg-accent/30" />
              </div>
              
              <div className="bg-zinc-900 border border-accent/30 p-8 rounded-[2.5rem] shadow-xl space-y-6 relative group hover:border-accent transition-all">
                <div className="absolute top-4 right-4"><TrendingUp className="w-8 h-8 text-accent/10" /></div>
                <div>
                  <h5 className="text-xl font-black text-white uppercase italic tracking-tighter">Upsell: Consultoria Elite</h5>
                  <p className="text-[10px] text-accent font-black uppercase tracking-widest mt-1">Acompanhamento 90 dias</p>
                </div>
                <div className="bg-accent/5 p-4 rounded-2xl border border-accent/10">
                   <div className="text-[9px] font-black text-accent uppercase mb-2">Ações de LTV:</div>
                   <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black px-2 py-0.5 bg-accent/20 text-accent rounded">#aceitou_upsell</span>
                      <span className="text-[8px] font-black px-2 py-0.5 bg-accent/20 text-accent rounded">#perfil_acelerador</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Camino DOWNSELL */}
            <div className="relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="text-[9px] font-black text-red-500 uppercase tracking-[0.2em] italic mb-2">Não (Recusado)</div>
                <div className="w-px h-8 bg-red-500/30" />
              </div>

              <div className="bg-zinc-900 border border-red-500/20 p-8 rounded-[2.5rem] shadow-xl space-y-6 relative group hover:border-red-500/40 transition-all">
                <div className="absolute top-4 right-4"><Split className="w-8 h-8 text-red-500/10" /></div>
                <div>
                  <h5 className="text-xl font-black text-white uppercase italic tracking-tighter">Downsell: Protocolo Guiado</h5>
                  <p className="text-[10px] text-red-400 font-black uppercase tracking-widest mt-1">Caminho Solo Estruturado</p>
                </div>
                <div className="bg-red-500/5 p-4 rounded-2xl border border-red-500/10">
                   <div className="text-[9px] font-black text-red-400 uppercase mb-2">Ações de LTV:</div>
                   <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black px-2 py-0.5 bg-red-500/20 text-red-400 rounded">#recusou_upsell</span>
                      <span className="text-[8px] font-black px-2 py-0.5 bg-red-500/20 text-red-400 rounded">#produto_downsell</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4: THANK YOU & AUTOMATION ENGINE */}
          <div className="flex flex-col items-center pt-12">
            <div className="h-16 w-px bg-gradient-to-b from-zinc-800 to-primary" />
            
            <div className="w-full max-w-4xl bg-zinc-900 border border-white/10 p-10 rounded-[3.5rem] shadow-2xl space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
                <div className="text-center md:text-left space-y-2">
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">Página de Obrigado</h4>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest italic">Acesso Imediato + Início da Régua de Relacionamento</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center"><Database className="w-6 h-6 text-primary" /></div>
                </div>
              </div>

              {/* Automation Timeline */}
              <div className="space-y-8">
                <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic mb-6">Automações Pós-Venda (Régua LTV)</div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { d: "D0", t: "Boas-vindas", i: <Smartphone className="w-4 h-4" />, c: "WhatsApp + E-mail" },
                    { d: "D1-D3", t: "Doutrinação", i: <Mail className="w-4 h-4" />, c: "Conteúdo Científico" },
                    { d: "D5-D7", t: "Ativação", i: <Zap className="w-4 h-4" />, c: "Prova Social Elite" },
                    { d: "D10+", t: "Cross-sell", i: <Tag className="w-4 h-4" />, c: "Novas Ofertas" }
                  ].map((step, i) => (
                    <div key={i} className="bg-black/40 p-5 rounded-2xl border border-white/5 space-y-3 relative group overflow-hidden">
                       <div className="text-[14px] font-black text-primary italic">{step.d}</div>
                       <div className="text-xs font-black text-white uppercase italic tracking-tight">{step.t}</div>
                       <div className="flex items-center gap-2 text-[9px] text-zinc-500 font-bold">
                          {step.i} {step.c}
                       </div>
                       <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/10 group-hover:bg-primary/40 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend / Status */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                 <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Status do Funil</span>
                   <span className="text-[9px] text-accent font-bold uppercase tracking-widest mt-1 italic">Ativo & Otimizado</span>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                 <div className="w-3 h-3 rounded-full bg-accent" />
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Segurança de Dados</span>
                   <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1 italic">Criptografia SSL End-to-End</span>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                 <div className="w-3 h-3 rounded-full bg-blue-500" />
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Segmentação</span>
                   <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1 italic">Tags CRM Ativas</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelArchitecture;
