
import React, { useState, useEffect, useCallback } from 'react';
import { Clock, AlertTriangle, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';

const STORAGE_KEY = 'forca_proibida_timer_start';
const DURATION_MINUTES = 30;

interface CountdownTimerProps {
  onExpire: () => void;
  isExpired: boolean;
  variant?: 'sticky' | 'inline';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ onExpire, isExpired, variant = 'sticky' }) => {
  const [timeLeft, setTimeLeft] = useState<number>(DURATION_MINUTES * 60);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const now = Date.now();
    let startTimeStr = localStorage.getItem(STORAGE_KEY);
    let startTime: number;

    if (!startTimeStr) {
      startTime = now;
      localStorage.setItem(STORAGE_KEY, startTime.toString());
    } else {
      startTime = parseInt(startTimeStr, 10);
    }

    const endTime = startTime + DURATION_MINUTES * 60 * 1000;

    const calculateTime = () => {
      const current = Date.now();
      const diff = Math.max(0, endTime - current);
      const secondsRemaining = Math.floor(diff / 1000);
      
      setTimeLeft(secondsRemaining);
      
      if (secondsRemaining <= 0 && !isExpired) {
        onExpire();
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    setIsInitialized(true);

    return () => clearInterval(interval);
  }, [onExpire, isExpired]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return {
      m: m.toString().padStart(2, '0'),
      s: s.toString().padStart(2, '0')
    };
  };

  const time = formatTime(timeLeft);

  if (!isInitialized) return null;

  if (isExpired) {
    return (
      <div className={cn(
        "bg-red-950/20 border border-red-500/30 p-4 rounded-2xl text-center animate-pulse",
        variant === 'sticky' ? "fixed bottom-0 left-0 w-full z-[60] backdrop-blur-xl border-t" : "w-full my-6"
      )}>
        <p className="text-red-500 font-black uppercase tracking-widest text-[10px] md:text-xs italic flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4" /> Essa condição expirou. Em breve novas vagas.
        </p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="bg-zinc-900 border border-white/5 p-6 rounded-[2rem] text-center space-y-3 my-8 shadow-2xl">
        <p className="text-zinc-400 text-[11px] font-black uppercase tracking-[0.2em] italic leading-none">
          ⏳ Acesso liberado por tempo limitado
        </p>
        <div className="text-4xl md:text-5xl font-black text-primary font-display tabular-nums tracking-tighter italic">
          {time.m}:{time.s}
        </div>
        <p className="text-[10px] text-zinc-500 font-bold italic leading-tight">
          Por organização e limite de suporte, essa condição não fica aberta o tempo todo.
        </p>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] bg-zinc-950/95 backdrop-blur-xl border-t border-primary/20 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 hidden md:flex">
             <Clock className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-tighter italic leading-none">
              CONDIÇÃO ESPECIAL EXPIRA EM:
            </span>
            <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-1 hidden md:block">
              VALOR VOLTARÁ PARA R$ 147,00 APÓS O PRAZO
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-zinc-900 border border-white/10 rounded-lg px-3 py-1 text-2xl md:text-3xl font-black text-primary font-display tabular-nums">
            {time.m}:{time.s}
          </div>
        </div>

        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-orange-400 text-black font-black px-6 py-2 rounded-xl text-[10px] md:text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
        >
          APROVEITAR
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
