
import React from 'react';
import { Crown, Check, ShieldCheck, Trophy, ChevronRight, Zap, ArrowRight, Sparkles } from 'lucide-react';

interface UpsellProps {
  onComplete: () => void;
  onDecline: () => void;
}

/**
 * LINK DO UPSELL NA CACTO (R$ 97)
 * Configure a "URL de Sucesso" na Cacto para redirecionar para:
 * https://seusite.com/?step=thanks
 */
const CACTO_UPSELL_LINK = 'https://pay.cacto.com.br/UPSELL_ELITE';

const Upsell: React.FC<UpsellProps> = ({ onDecline }) => {
  const handleUpsellPurchase = () => {
    window.location.href = CACTO_UPSELL_LINK;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12">
      <div className="fixed top-0 left-0 w-full h-1.5 bg-zinc-900 z-50">
        <div className="h-full bg-primary w-4/5 shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
      </div>

      <main className="max-w-4xl mx-auto px-6 space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] italic">OFERTA VIP EXCLUSIVA</div>
          <h1 className="text-3xl md:text-6xl font-black font-display uppercase italic tracking-tighter leading-none">DOBRE SEUS <span className="text-primary">RESULTADOS</span> <br />COM SUPORTE <span className="text-gradient">INDIVIDUAL.</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden group">
              <Trophy className="absolute -bottom-8 -right-8 w-48 h-48 text-primary opacity-5 -rotate-12 transition-opacity group-hover:opacity-10" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3"><Crown className="w-8 h-8 text-primary" /><h2 className="text-2xl font-black uppercase italic tracking-tighter">CONSULTORIA ELITE 90</h2></div>
                <ul className="space-y-4">
                  {["Acompanhamento Individual WhatsApp", "Análise de Biomarcadores", "Protocolos de Precisão", "Suporte 90 Dias", "Garantia de Evolução"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight italic"><Check className="w-4 h-4 text-primary" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-6 px-4 opacity-20 grayscale"><ShieldCheck className="w-10 h-10" /><Zap className="w-10 h-10" /></div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-zinc-900 border border-white/10 rounded-[3rem] p-8 space-y-8 shadow-2xl">
              <div className="space-y-2 text-center">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Acesso Vitalício</p>
                <div className="text-5xl font-black text-white italic">R$ 97</div>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest">Ou em até 12x no cartão</p>
              </div>

              <button onClick={handleUpsellPurchase} className="w-full py-7 bg-primary hover:bg-orange-400 text-black rounded-2xl font-black text-xl uppercase tracking-tighter transition-all border-b-8 border-orange-800 shadow-xl group">
                <Sparkles className="w-5 h-5 inline mr-2 animate-pulse" /> QUERO ACELERAR AGORA <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button onClick={onDecline} className="w-full text-center text-zinc-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest underline underline-offset-4 decoration-zinc-800 italic">Continuar sem acompanhamento</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Upsell;
