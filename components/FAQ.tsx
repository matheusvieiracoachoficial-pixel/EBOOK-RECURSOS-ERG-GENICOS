
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle, ShieldCheck, Zap, Smartphone, DollarSign } from 'lucide-react';
import { cn } from '../lib/utils';

/**
 * CONFIGURAÇÃO DE SUPORTE
 */
const LINK_WHATSAPP_SUPORTE = 'https://wa.me/5537998059950?text=oi%20matheus!%20gostaria%20de%20saber%20mais%20sobre%20o%20for%C3%A7a%20proibida';

const faqs = [
  {
    q: "Isso é seguro para a minha saúde?",
    a: "Sim. Diferente de fóruns e dicas de 'influenciadores', nosso guia é baseado estritamente em estudos clínicos. Focamos em recursos naturais e redução de danos, respeitando os limites biológicos do seu corpo.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    q: "Preciso gastar muito com suplementos?",
    a: "Pelo contrário. O Força Proibida vai te ensinar a parar de jogar dinheiro fora com 'pré-treinos' caros que são apenas cafeína com corante. Você aprenderá a investir apenas no que gera performance real.",
    icon: <DollarSign className="w-5 h-5" />
  },
  {
    q: "Já treino há anos, vou aprender algo novo?",
    a: "Com certeza. O Força Proibida detalha estratégias de timing e sinergia que a maioria dos praticantes avançados ignora. Se você bateu em um platô, o erro está nos detalhes bioquímicos que revelamos.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    q: "O acesso é imediato? Como recebo?",
    a: "Instantâneo. Assim que o pagamento for confirmado, você recebe um link no seu e-mail para baixar o E-book Força Proibida e acessar o App (se optar pelo Combo PRO).",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    q: "E se eu não gostar do conteúdo?",
    a: "Você tem nossa Garantia Incondicional de 7 dias. Se o conteúdo não superar suas expectativas, basta enviar um único e-mail e devolvemos 100% do seu investimento. O risco é todo nosso.",
    icon: <HelpCircle className="w-5 h-5" />
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-950 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase italic">Dúvidas Frequentes</h2>
          <h3 className="text-4xl md:text-6xl font-black text-foreground font-display uppercase tracking-tighter italic">
            PERGUNTAS <span className="text-gradient">CRÍTICAS.</span>
          </h3>
          <p className="text-muted-foreground text-lg italic max-w-xl mx-auto">
            Se sua dúvida não estiver aqui, nosso suporte está a um clique de distância.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "group border rounded-[2rem] transition-all duration-500 overflow-hidden cursor-pointer",
                openIndex === i 
                  ? "bg-zinc-900 border-primary/40 shadow-[0_0_30px_rgba(249,115,22,0.1)]" 
                  : "bg-black/40 border-white/5 hover:border-white/20"
              )}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="p-7 md:p-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    openIndex === i ? "bg-primary text-black" : "bg-white/5 text-muted-foreground group-hover:text-white"
                  )}>
                    {faq.icon}
                  </div>
                  <span className={cn(
                    "font-bold text-lg md:text-xl italic uppercase tracking-tight transition-colors",
                    openIndex === i ? "text-white" : "text-foreground/70"
                  )}>
                    {faq.q}
                  </span>
                </div>
                <div className={cn(
                  "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all",
                  openIndex === i ? "bg-primary text-black rotate-180" : "bg-white/5 text-muted-foreground"
                )}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </div>
              
              <div className={cn(
                "transition-all duration-500 ease-in-out",
                openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="px-8 pb-8 md:px-20">
                  <p className="text-muted-foreground leading-relaxed italic font-medium text-base md:text-lg border-l-2 border-primary/20 pl-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 text-center space-y-4">
           <p className="text-foreground font-bold italic uppercase tracking-tight">Ainda tem alguma dúvida específica?</p>
           <a 
             href={LINK_WHATSAPP_SUPORTE}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all border border-white/10 group"
           >
             <MessageCircle className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
             Falar com Consultor no WhatsApp
           </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
