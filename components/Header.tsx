
import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  onLogoClick?: () => void;
  hideNav?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, hideNav = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-6",
      isScrolled ? "py-4 bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-6 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 group cursor-pointer shrink-0" onClick={handleLogoClick}>
          <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center group-hover:scale-110 transition-transform">
            <img 
              src="https://i.imgur.com/TPQK7ag.png" 
              alt="Força Proibida" 
              className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]"
            />
          </div>
          <span className="font-display font-black text-xs md:text-xl tracking-tighter uppercase leading-none whitespace-nowrap">
            FORÇA <span className="text-primary">PROIBIDA</span>
          </span>
        </div>

        {!hideNav && (
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#social-proof" className="text-[10px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors italic">Resultados</a>
            <a href="#chapters" className="text-[10px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors italic">Módulos</a>
            <a href="#pricing" className="text-[10px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors italic">Acesso</a>
          </nav>
        )}

        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-orange-400 text-black px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 whitespace-nowrap"
        >
          Acessar Agora
        </button>
      </div>
    </header>
  );
};

export default Header;
