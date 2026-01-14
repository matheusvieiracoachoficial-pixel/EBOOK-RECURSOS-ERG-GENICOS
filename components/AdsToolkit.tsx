
import React, { useState } from 'react';
import { Megaphone, Copy, Check, Layout, Type, MousePointerClick, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const adsData = {
  headlines: [
    "Treine Menos, Performe Mais",
    "O Segredo da Bioquímica Atleta",
    "Destrave Sua Performance Hoje",
    "Foco Inabalável no Seu Treino",
    "Protocolo de Elite: e-book"
  ],
  mainTexts: [
    {
      type: "DOR / CURTO",
      content: "Cansado de treinar pesado e não ver evolução? O problema pode estar na sua bioquímica. Descubra os protocolos de elite para destravar seus resultados com nosso e-book."
    },
    {
      type: "AUTORIDADE / MÉDIO",
      content: "Atletas de elite não contam com a sorte. Eles usam ciência. Conheça os recursos ergogênicos que otimizam energia, foco e recuperação de forma segura e ética no nosso e-book."
    },
    {
      type: "BENEFÍCIO / CURTO",
      content: "Mais energia, foco total e recuperação acelerada. O e-book definitivo de suplementação avançada baseada em evidências científicas. Pare de adivinhar."
    },
    {
      type: "CURIOSIDADE / MÉDIO",
      content: "O que separa os campeões dos amadores? Não é só a genética, é um protocolo de precisão. Aprenda a modular sua fisiologia com o que há de mais moderno na ciência esportiva."
    },
    {
      type: "DIRETO / CURTO",
      content: "Pare de gastar dinheiro com suplementos inúteis que só te dão palpitação. Aprenda o que realmente funciona para sua performance física e mental hoje com o e-book."
    }
  ],
  ctas: [
    "Quero Acesso Imediato",
    "Saiba Mais",
    "Garantir Meu Guia"
  ]
};

const AdsToolkit: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="py-24 bg-background px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/10 border border-secondary/20 text-[10px] font-black text-secondary uppercase tracking-widest">
            Traffic Generator
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-display uppercase tracking-tight">
            ADS <span className="text-gradient">TOOLKIT</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Copies de alta conversão validadas para Meta Ads e Google Ads. Copie e cole para escalar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Headlines Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Type className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold uppercase tracking-tight italic">Headlines <span className="text-xs text-muted-foreground font-normal opacity-60">(Max 40 Chars)</span></h3>
            </div>
            <div className="space-y-3">
              {adsData.headlines.map((headline, i) => (
                <div 
                  key={i} 
                  onClick={() => handleCopy(headline)}
                  className="group cursor-pointer bg-zinc-900 border border-white/5 p-4 rounded-xl flex items-center justify-between hover:border-primary/40 transition-all active:scale-[0.98]"
                >
                  <span className="font-bold text-sm text-foreground/80">{headline}</span>
                  {copiedText === headline ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />}
                </div>
              ))}
            </div>

            <div className="pt-8 flex items-center gap-3 mb-4">
              <MousePointerClick className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold uppercase tracking-tight italic">CTAs</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {adsData.ctas.map((cta, i) => (
                <div 
                  key={i}
                  onClick={() => handleCopy(cta)}
                  className="group cursor-pointer bg-zinc-900 border border-white/5 p-4 rounded-xl text-center hover:border-accent/40 transition-all active:scale-[0.98]"
                >
                   <div className="flex items-center justify-center gap-2">
                     <span className="text-[10px] font-black uppercase text-foreground/80">{cta}</span>
                     {copiedText === cta ? <Check className="w-3 h-3 text-accent" /> : <Copy className="w-3 h-3 text-white/10 group-hover:text-accent" />}
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Texts Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Layout className="w-5 h-5 text-secondary" />
              <h3 className="text-xl font-bold uppercase tracking-tight italic">Textos Principais</h3>
            </div>
            <div className="space-y-4">
              {adsData.mainTexts.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-zinc-900 border border-white/5 p-6 rounded-2xl space-y-4 relative group overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-secondary bg-secondary/10 px-2 py-1 rounded uppercase tracking-widest">{item.type}</span>
                    <button 
                      onClick={() => handleCopy(item.content)}
                      className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-white transition-colors"
                    >
                      {copiedText === item.content ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                      {copiedText === item.content ? "Copiado" : "Copiar"}
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {item.content}
                  </p>
                  <div className="absolute top-0 right-0 p-2 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <Megaphone className="w-24 h-24 rotate-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center gap-4 max-w-3xl mx-auto">
          <Sparkles className="w-6 h-6 text-primary shrink-0" />
          <p className="text-xs text-muted-foreground font-medium text-center italic leading-relaxed">
            Dica de Tráfego: Utilize imagens de alta resolução que mostrem atletas em foco profundo ou elementos de laboratório/ciência para aumentar o CTR nestas copies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdsToolkit;
