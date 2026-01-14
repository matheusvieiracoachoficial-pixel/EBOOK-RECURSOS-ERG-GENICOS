
import React from 'react';
import { BarChart3, Repeat, Zap, MousePointer2, PieChart, TrendingUp } from 'lucide-react';

const metrics = [
  { label: 'CTR (Click-Through Rate)', value: '1.8% - 3.5%', target: 'Meta Ads', icon: <MousePointer2 className="text-primary w-5 h-5" /> },
  { label: 'Taxa de Conversão', value: '4% - 12%', target: 'Landing Page', icon: <Zap className="text-secondary w-5 h-5" /> },
  { label: 'LTV (Lifetime Value)', value: 'R$ 180,00', target: 'Média/Cliente', icon: <TrendingUp className="text-accent w-5 h-5" /> },
  { label: 'CAC (Custo Aquisição)', value: 'R$ 15,00', target: 'Meta Ads', icon: <PieChart className="text-primary w-5 h-5" /> }
];

const ConversionOptimization: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">
            Growth Analytics
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-display uppercase tracking-tight leading-none">
            SISTEMA DE <span className="text-gradient">OTIMIZAÇÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processo contínuo de testes A/B para maximizar o ROI de cada real investido no funil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((m, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                {m.icon}
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{m.label}</span>
              </div>
              <div className="text-3xl font-black text-foreground mb-1">{m.value}</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase">{m.target}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2rem] space-y-6">
            <div className="flex items-center gap-3">
              <Repeat className="text-primary w-6 h-6" />
              <h4 className="text-xl font-black text-foreground uppercase italic">Rotina de Testes A/B</h4>
            </div>
            <ul className="space-y-4">
              {[
                { t: "Headlines", d: "Testar abordagem de dor vs. autoridade científica." },
                { t: "CTAs", d: "Testar 'Quero Acesso' vs. 'Garantir meu Guia'." },
                { t: "VSL", d: "Testar versão curta (5 min) vs version longa (12 min)." },
                { t: "Cores", d: "Testar laranja (energia) vs. verde (biohacking)." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black text-primary border border-primary/20">{i+1}</span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{item.t}</p>
                    <p className="text-xs text-muted-foreground">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2rem] space-y-6 flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-accent w-6 h-6" />
              <h4 className="text-xl font-black text-foreground uppercase italic">Conversão por Etapa</h4>
            </div>
            <div className="space-y-4">
              {[
                { label: "Lead Magnet -> Email", perc: "35%", color: "bg-primary" },
                { label: "Email -> VSL", perc: "12%", color: "bg-secondary" },
                { label: "VSL -> Checkout", perc: "8%", color: "bg-accent" },
                { label: "Checkout -> Upsell", perc: "15%", color: "bg-orange-500" }
              ].map((step, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span>{step.label}</span>
                    <span className="text-foreground">{step.perc}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`${step.color} h-full rounded-full transition-all duration-1000`} style={{ width: step.perc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionOptimization;
