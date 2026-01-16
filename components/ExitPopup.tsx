
import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, ArrowRight, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface ExitPopupProps {
  onPurchase: () => void;
}

const ExitPopup: React.FC<ExitPopupProps> = ({ onPurchase }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // 1. Mostrar ao tentar sair (Exit Intent)
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // 2. Mostrar após scroll de 90%
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (scrolled > height * 0.9 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseOut);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-500">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-primary/30 p-10 md:p-14 rounded-[3.5rem] text-center shadow-[0_0_100px_rgba(249,115,22,0.3)] animate-in zoom-in duration-500">
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 p-2 text-zinc-600 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="space-y-8">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl border border-primary/20 flex items-center justify-center mx-auto mb-8">
            <ShieldAlert className="w-10 h-10 text-primary animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight font-display">
            ⚠️ VOCÊ CHEGOU ATÉ O FINAL… <br />
            <span className="text-primary">E AINDA TÁ PENSANDO?</span>
          </h2>

          <div className="space-y-4">
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm italic">
              Todo mundo quer resultado. <br />
              Mas poucos têm coragem de agir.
            </p>
            <p className="text-white text-xl font-black uppercase italic tracking-tighter">
              VOCÊ VAI SAIR DAQUI DO MESMO JEITO QUE ENTROU?
            </p>
          </div>

          <div className="pt-8">
             <button 
               onClick={onPurchase}
               className="w-full py-7 bg-primary hover:bg-orange-400 text-black font-black text-xl md:text-2xl uppercase tracking-tighter rounded-2xl transition-all shadow-2xl border-b-[10px] border-orange-900 flex items-center justify-center gap-3 group"
             >
               VOLTAR E COMPRAR AGORA
               <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
             </button>
             
             <div className="flex items-center justify-center gap-3 mt-6">
                <Zap className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">Acesso imediato ao arsenal de elite</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
