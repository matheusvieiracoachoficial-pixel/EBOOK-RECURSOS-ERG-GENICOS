
import React, { useState } from 'react';
import { Play, FileText, ChevronDown, ChevronUp, CheckCircle2, FlaskConical, Target } from 'lucide-react';
import { cn } from '../lib/utils';

const VSL: React.FC = () => {
  const [showScript, setShowScript] = useState(false);

  const scriptStages = [
    {
      label: "1. O HOOK (Abertura)",
      content: "Você já sentiu que, por mais que treine pesado, parece que bateu num teto? Que seu corpo simplesmente não responde mais como antes? Você vê atletas de elite treinando com uma intensidade que parece sobre-humana e se pergunta: 'O que eles sabem que eu não sei?'",
      directions: "Foco no rosto, expressão séria, quebra de padrão imediata."
    },
    {
      label: "2. IDENTIFICAÇÃO",
      content: "O problema não é sua falta de vontade. O problema é que você está tentando correr uma maratona com o freio de mão puxado: sua própria biologia. Sem a otimização correta dos seus recursos ergogênicos, você está deixando 40% dos seus resultados na mesa. É frustrante treinar e não evoluir.",
      directions: "Imagens de treinos cansativos, expressão de frustração."
    },
    {
      label: "3. AUTORIDADE CIENTÍFICA",
      content: "Recursos ergogênicos não são atalhos mágicos ou substâncias milagrosas. São ferramentas de precisão. A ciência moderna já mapeou como otimizar a ressíntese de ATP, como modular a cafeína para evitar o 'crash' e como usar adaptógenos para controlar o cortisol. Atletas de elite não contam com a sorte; eles contam com protocolos.",
      directions: "Gráficos científicos, imagens de laboratório e atletas de alto nível."
    },
    {
      label: "4. A SOLUÇÃO",
      content: "Eu compilei anos de estudos clínicos e protocolos práticos no e-book 'O Segredo dos Atletas'. Este não é apenas mais um guia de suplementação. É o mapa para você dominar sua própria fisiologia de forma segura, ética e eficiente.",
      directions: "Mostra o e-book em um tablet/mockup premium."
    },
    {
      label: "5. BENEFÍCIOS REAIS",
      content: "Aqui você vai aprender a gerar energia real (não apenas agitação), foco dopaminérgico inabalável e uma recuperação que permite você treinar pesado novamente no dia seguinte. Tudo com dosagens personalizadas e estratégias de redução de danos.",
      directions: "Lista de benefícios aparecendo na tela com ícones laranja."
    },
    {
      label: "6. A OFERTA",
      content: "Você poderia gastar meses lendo artigos científicos em inglês ou centenas de reais em consultas. Mas você pode ter todo esse conhecimento destilado agora. Por tempo limitado, você garante seu acesso por apenas R$ 67,90. É menos do que um pré-treino genérico que te daria apenas palpitação.",
      directions: "Preço em destaque, cronômetro de oferta."
    },
    {
      label: "7. CTA (Chamada para Ação)",
      content: "A ciência está ao seu lado. A decisão de parar de treinar no escuro é sua. Clique no botão abaixo agora, receba seu e-book instantaneamente e comece sua transformação hoje mesmo. Vejo você lá dentro.",
      directions: "Seta apontando para o botão de compra."
    }
  ];

  return (
    <section id="vsl" className="py-24 bg-background px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight font-display">
            A CIÊNCIA POR TRÁS DA <br />
            <span className="text-gradient uppercase">Elite Mundial.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Assista ao vídeo abaixo e entenda por que seu treino atual pode estar sendo sabotado pela sua <span className="text-foreground font-bold">própria bioquímica</span>.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative w-full aspect-video bg-zinc-900 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden group cursor-pointer ring-1 ring-white/5 hover:ring-primary/40 transition-all duration-700">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:scale-105 transition-transform duration-700" />
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
             <div className="relative">
                <div className="absolute inset-0 bg-primary blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative w-20 h-20 md:w-28 md:h-28 bg-primary rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 md:w-12 md:h-12 text-black fill-black ml-1.5" />
                </div>
             </div>
          </div>
        </div>

        {/* Script / Transcript Section */}
        <div className="mt-8 flex flex-col items-center">
          <button 
            onClick={() => setShowScript(!showScript)}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest py-4"
          >
            <FileText className="w-4 h-4" />
            {showScript ? "Esconder Roteiro do Vídeo" : "Ver Roteiro do Vídeo (Transcrição)"}
            {showScript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <div className={cn(
            "w-full bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500",
            showScript ? "max-h-[2000px] opacity-100 p-8 mt-4" : "max-h-0 opacity-0"
          )}>
            <div className="space-y-10 max-w-3xl mx-auto">
              {scriptStages.map((stage, i) => (
                <div key={i} className="space-y-4 border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <h4 className="text-primary font-black text-sm uppercase tracking-widest italic">{stage.label}</h4>
                  <p className="text-foreground/90 text-lg leading-relaxed font-medium">
                    {stage.content}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-muted-foreground bg-white/5 w-fit px-3 py-1 rounded">
                    <FlaskConical className="w-3 h-3" />
                    Direção: {stage.directions}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6">
            <button 
              onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
              className={cn(
                "w-full md:w-auto text-center font-black py-6 px-12 rounded-2xl text-xl uppercase tracking-tighter transition-all",
                "bg-primary text-black shadow-[0_20px_50px_-15px_rgba(249,115,22,0.4)] hover:shadow-[0_25px_60px_-10px_rgba(249,115,22,0.5)]",
                "transform hover:-translate-y-1 active:scale-95 border-b-4 border-orange-700"
              )}
            >
              Quero Otimizar Minha Performance
            </button>
            
            <div className="flex items-center gap-6 text-muted-foreground/40">
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="w-4 h-4" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Base Científica</span>
               </div>
               <div className="flex items-center gap-2">
                 <Target className="w-4 h-4" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Protocolo Prático</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VSL;
