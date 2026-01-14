
import React from 'react';
import { Check, Zap, BookOpenCheck, ArrowRight } from 'lucide-react';

interface DownsellProps {
  onComplete: () => void;
}

/**
 * LINK DO DOWNSELL NA CACTO (R$ 47 ou similar)
 * Configure a "URL de Sucesso" na Cacto para redirecionar para:
 * https://seusite.com/?step=thanks
 */
const CACTO_DOWNSELL_LINK = 'https://pay.cacto.com.br/PROTOCOLO_GUIADO';

const Downsell: React.FC<DownsellProps> = ({ onComplete }) => {
  const handleDownsellPurchase = () => {
    window.location.href = CACTO_DOWNSELL_LINK;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans py-16">
      <div className="fixed top-0 left-0 w-full h-2 bg-zinc-900 z-50">
        <div className="h-full bg-secondary w-[95%] shadow-[0_0_20px_rgba(250,204,21,0.5)]" />
      </div>

      <main className="max-w-4xl mx-auto px-6 space-y-12 text-center animate-fade-in-up">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest italic">ÚLTIMA TENTATIVA: APOIO MÁXIMO</div>
          <h1 className="text-4xl md:text-7xl font-black font-display uppercase italic tracking-tighter leading-none">NÃO TENTE <span className="text-secondary">SOZINHO</span>.</h1>
          <p className="text-lg text-zinc-400 italic font-medium">Se a consultoria não é para o seu momento agora, garanta pelo menos o <strong>Protocolo Guiado</strong> por um valor simbólico.</p>
        </div>

        <div className="bg-zinc-900 border border-white/5 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
          <BookOpenCheck className="absolute -bottom-8 -right-8 w-64 h-64 text-secondary opacity-5" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="flex items-center gap-3"><Zap className="w-6 h-6 text-secondary" /><h3 className="text-2xl font-black uppercase italic tracking-tighter">PROTOCOLO GUIADO</h3></div>
              <ul className="space-y-3">
                {["Calculadoras de Dosagem", "Checklist de Saúde", "Manual de Stacks", "Guia de Exames"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold uppercase italic"><Check className="w-4 h-4 text-secondary" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
               <div className="text-center">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Apenas Hoje</span>
                  <div className="text-7xl font-black text-white italic font-display tracking-tighter">R$ 47</div>
                  <span className="text-sm font-black text-secondary uppercase italic">Sem taxas extras</span>
               </div>
               <button onClick={handleDownsellPurchase} className="w-full py-6 bg-secondary hover:bg-yellow-400 text-black rounded-2xl font-black text-xl uppercase tracking-tighter border-b-8 border-yellow-700 shadow-xl group">QUERO O PROTOCOLO <ArrowRight className="w-5 h-5 inline ml-1 group-hover:translate-x-1 transition-transform" /></button>
            </div>
          </div>
        </div>

        <button onClick={onComplete} className="text-zinc-700 hover:text-white transition-colors text-xs font-black uppercase tracking-widest underline underline-offset-8 italic">Pular esta etapa e ir para o acesso básico</button>
      </main>
    </div>
  );
};

export default Downsell;
