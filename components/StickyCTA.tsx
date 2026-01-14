
import React, { useEffect, useState } from 'react';

interface StickyCTAProps {
  onPurchase?: () => void;
  isExpired?: boolean;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onPurchase, isExpired }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isExpired) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-2xl border-t border-primary/20 p-4 z-50 flex items-center justify-between md:justify-center gap-8 transition-all duration-500 transform translate-y-0 shadow-[0_-10px_50px_rgba(249,115,22,0.2)] pb-24 md:pb-6">
      <div className="hidden md:block text-white font-black text-xl uppercase font-display tracking-tighter italic">
        Sair da <span className="text-primary">Mediocridade</span> Agora.
      </div>
      <button 
        onClick={onPurchase}
        className="w-full md:w-auto bg-primary hover:bg-orange-400 text-black font-black py-4 px-12 rounded-xl text-center shadow-xl transition-all hover:scale-105 uppercase tracking-tighter text-lg"
      >
        DESTRAVAR MEU ACESSO
      </button>
    </div>
  );
};

export default StickyCTA;
