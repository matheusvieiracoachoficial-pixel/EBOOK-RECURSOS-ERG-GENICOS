
import React from 'react';
import { 
  Database, 
  GitMerge, 
  Mail, 
  MessageSquare, 
  Tag, 
  Users, 
  Zap, 
  Clock, 
  BarChart3,
  Target,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { cn } from '../lib/utils';

const automationFlow = [
  {
    day: "D0",
    title: "Boas-vindas Imediato",
    channels: ["E-mail", "WhatsApp"],
    focus: "Entrega + Segurança",
    desc: "Confirmação de compra, dados de acesso e vídeo rápido do fundador reforçando a segurança do protocolo."
  },
  {
    day: "D1-D3",
    title: "Doutrinação Inicial",
    channels: ["E-mail"],
    focus: "Evitar Erros Comuns",
    desc: "Conteúdo educativo sobre os 3 maiores erros de iniciantes. Reduz ansiedade e previne pedidos de reembolso."
  },
  {
    day: "D5-D7",
    title: "Ativação de Resultados",
    channels: ["WhatsApp"],
    focus: "Prova Social",
    desc: "Exemplos de evolução de outros membros. Posicionamento sutil da Consultoria Elite como próximo passo lógico."
  },
  {
    day: "D10+",
    title: "Recorrência & LTV",
    channels: ["E-mail", "WhatsApp"],
    focus: "Monetização Progressiva",
    desc: "Ofertas segmentadas. Se perfil_acelerador, oferecer Upgrade. Se nao_consumiu, enviar guia de reativação."
  }
];

const tagCategories = [
  {
    label: "Origem",
    tags: ["origem_quiz", "origem_checkout"],
    color: "text-blue-400 bg-blue-400/10"
  },
  {
    label: "Produto",
    tags: ["produto_ebook", "produto_bump_seguranca", "produto_upsell_elite"],
    color: "text-primary bg-primary/10"
  },
  {
    label: "Perfil",
    tags: ["perfil_cauteloso", "perfil_intermediario", "perfil_acelerador"],
    color: "text-accent bg-accent/10"
  },
  {
    label: "Objetivo",
    tags: ["obj_energia", "obj_foco", "obj_performance"],
    color: "text-secondary bg-secondary/10"
  },
  {
    label: "Comportamento",
    tags: ["abriu_emails", "engajou_whatsapp", "recusou_upsell"],
    color: "text-zinc-400 bg-zinc-400/10"
  }
];

const CRMAutomation: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
        <Database className="w-96 h-96 text-primary" />
      </div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest italic">
            CRM Strategy & LTV
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase tracking-tighter italic">
            MAPA DE <span className="text-gradient">AUTOMAÇÃO.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic font-medium">
            A inteligência por trás das vendas. Segmentação precisa para suporte proativo e lucro recorrente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Automação Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <GitMerge className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-black text-white uppercase italic tracking-widest">Fluxo de Relacionamento</h3>
            </div>
            
            <div className="space-y-4 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-px before:bg-white/5">
              {automationFlow.map((step, i) => (
                <div key={i} className="relative pl-20 group">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-zinc-900 border border-white/10 rounded-2xl flex flex-col items-center justify-center group-hover:border-primary/40 transition-all z-10">
                    <span className="text-xs font-black text-primary italic leading-none">{step.day}</span>
                    <Clock className="w-3 h-3 text-zinc-600 mt-1" />
                  </div>
                  
                  <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] space-y-4 hover:bg-zinc-900/60 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <h4 className="text-xl font-black text-white uppercase italic tracking-tight">{step.title}</h4>
                      <div className="flex gap-2">
                        {step.channels.map((ch, idx) => (
                          <span key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase text-zinc-400">
                            {ch === 'E-mail' ? <Mail className="w-3 h-3" /> : <MessageSquare className="w-3 h-3" />}
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest italic">
                      <Target className="w-3 h-3" /> Foco: {step.focus}
                    </div>
                    <p className="text-sm text-zinc-500 font-bold italic leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tagging System */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-black text-white uppercase italic tracking-widest">Sistema de Tags (CRM)</h3>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 space-y-10 shadow-2xl">
              {tagCategories.map((cat, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">{cat.label}</span>
                    <BarChart3 className="w-3 h-3 text-zinc-700" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag, idx) => (
                      <span key={idx} className={cn(
                        "px-3 py-1.5 rounded-lg text-[10px] font-black tracking-tight transition-all cursor-default border border-transparent hover:border-current",
                        cat.color
                      )}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-6">
                <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-[10px] font-black text-foreground uppercase tracking-widest">Regra de Ouro</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-bold italic leading-relaxed">
                    "Nunca venda errado para o perfil errado. Use a tag #perfil_cauteloso para remover gatilhos de urgência agressiva e focar em ciência."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center gap-6">
               <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-accent" />
               </div>
               <div className="space-y-2">
                  <h4 className="text-sm font-black text-white uppercase tracking-widest italic">Integração WhatsApp</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                    Dashboard preparado para integração via Webhook com Any.chat ou Evolution API.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMAutomation;
