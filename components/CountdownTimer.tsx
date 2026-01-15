
import React, { useState, useEffect } from 'react';
import { Clock, ShieldAlert } from 'lucide-react';

// REMOVIDO: const STORAGE_KEY = 'forca_proibida_timer_start'; 
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
    setIsInitialized(true);
    
    // CORREÇÃO: Define o tempo inicial sempre como "agora", sem buscar do localStorage.
    const now = Date.now();
    const startTime = now;
    const endTime = startTime + DURATION_MINUTES * 60 * 1000;

    const calculateTime = () => {
      const current = Date.now();
      const diff = Math.max(0, endTime - current);
      const secondsRemaining = Math.floor(diff / 1000);
      
      setTimeLeft(secondsRemaining);
      
      if (secondsRemaining <= 0) {
        // Verifica se já não está expirado para evitar loop
        if (!isExpired) {
          onExpire();
        }
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

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
    // LÓGICA DO POP-UP: Exibe apenas no timer 'sticky' (global) para travar a tela
    if (variant === 'sticky') {
      return (
        <div id="popup" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 animate-in fade-in zoom-in duration-500">
           {/* Caixinha de Pop-up solicitada com estilos exatos */}
           <div style={{
             background: '#111', 
             color: '#fff', 
             padding: '30px', 
             borderRadius: '12px', 
             textAlign: 'center', 
             maxWidth: '400px', 
             margin: 'auto',
             border: '1px solid #333',
             boxShadow: '0 0 50px rgba(249, 115, 22, 0.15)'
           }}>
            <h2 style={{color: '#ffae00', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px'}}>⚠️ A oferta expirou…</h2>
            <p style={{fontSize: '18px', margin: '20px 0', color: '#ddd', lineHeight: '1.5'}}>
              ...mas eu sei como é perder o timing. <br />
              Então aqui vai <strong>uma última chance real</strong>:
            </p>
            <p style={{fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '25px'}}>
              Libere o protocolo FORÇA PROIBIDA <br />
              <span style={{color: '#ffae00'}}>com bônus extra</span> por tempo limitadíssimo.
            </p>
            <a 
              href="https://pay.cakto.com.br/3fik4hg_724336" 
              style={{
                display: 'inline-block', 
                background: '#ffae00', 
                color: '#000', 
                padding: '15px 25px', 
                fontWeight: 'bold', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                marginTop: '10px',
                textTransform: 'uppercase',
                boxShadow: '0 4px 15px rgba(255, 174, 0, 0.3)'
              }}
            >
              QUERO MINHA SEGUNDA CHANCE
            </a>
          </div>
        </div>
      );
    }

    // Se for o timer inline (dentro da página), exibe apenas aviso discreto
    return (
      <div className="w-full my-6 bg-red-950/20 border border-red-500/30 p-4 rounded-2xl text-center animate-pulse">
        <p className="text-red-500 font-black uppercase tracking-widest text-[10px] md:text-xs italic flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4" /> Essa condição expirou.
        </p>
      </div>
    );
  }

  // Timer Inline (na página de vendas)
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

  // Timer Sticky (Barra inferior fixa)
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
