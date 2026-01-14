
import React from 'react';
import { CheckCircle2, XCircle, Heart, ShieldPlus, Microscope } from 'lucide-react';

const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
            <Microscope className="w-4 h-4" /> Alinhamento de Intenção
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-foreground font-display uppercase italic leading-none">
            PAZ MENTAL + <br /> <span className="text-gradient">EVOLUÇÃO REAL.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
            Se você prefere ir devagar, mas ir certo, este guia é o seu próximo passo lógico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* NOT FOR */}
          <div className="bg-zinc-900/40 p-10 rounded-[2.5rem] border border-white/5 opacity-50 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="w-8 h-8 text-muted-foreground" />
              <h3 className="text-2xl font-bold text-muted-foreground uppercase tracking-tight italic leading-tight">NÃO É PARA QUEM:</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Busca atalhos ou milagres mágicos.",
                "Ignora riscos e acha que 'mais é melhor'.",
                "Não respeita o próprio corpo.",
                "Prefere o palpite do influencer ao dado científico.",
                "Quer resultados a qualquer custo, mesmo da saúde."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm font-medium">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FOR YOU */}
          <div className="bg-gradient-to-br from-primary/10 to-zinc-900/50 p-10 rounded-[2.5rem] border border-primary/20 shadow-2xl relative group">
             <div className="absolute -top-4 -right-4 bg-primary text-black text-[10px] font-black px-4 py-2 rounded-xl shadow-xl rotate-12">
                EVOLUÇÃO SEGURA
             </div>
            <div className="flex items-center gap-3 mb-8">
              <ShieldPlus className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight italic leading-tight">ESSE GUIA É PARA VOCÊ QUE:</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Quer evoluir, mas tem medo genuíno de errar.",
                "Respeita o próprio corpo acima de tudo.",
                "Está cansado de informações contraditórias.",
                "Não quer brincar com a própria saúde.",
                "Quer parar de ter medo e tomar decisões conscientes."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/90 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
