
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ShoppingBag, X, CheckCircle2, Users, Flame, Zap, ShieldAlert, CreditCard, Target } from 'lucide-react';
import { cn } from '../lib/utils';

const BRAZILIAN_DATA = [
  { name: "Rafael", state: "SP" }, { name: "Ricardo", state: "GO" }, 
  { name: "Daniel", state: "RJ" }, { name: "Lucas", state: "PR" }, 
  { name: "Marcos", state: "MG" }, { name: "André", state: "SC" }, 
  { name: "Gabriel", state: "RS" }, { name: "Rodrigo", state: "BA" },
  { name: "Aline", state: "BH" }, { name: "Juliana", state: "DF" },
  { name: "Bruno", state: "MT" }, { name: "Eduardo", state: "CE" },
  { name: "Vinícius", state: "PE" }, { name: "Marcelo", state: "ES" },
  { name: "Felipe", state: "SP" }, { name: "Thiago", state: "MS" }
];

const AGGRESSIVE_MESSAGES = [
  { sub: "Você ainda está pensando?", icon: <Target className="w-4 h-4" /> },
  { sub: "Decisão tomada em 2 minutos.", icon: <Zap className="w-4 h-4" /> },
  { sub: "Tem gente comprando enquanto você decide.", icon: <ShieldAlert className="w-4 h-4" /> },
  { sub: "Enquanto você hesita, outros já estão aplicando.", icon: <Flame className="w-4 h-4" /> },
  { sub: "Essa condição não espera sua confiança.", icon: <ShieldAlert className="w-4 h-4" /> },
  { sub: "A janela fecha sem aviso. Quem entrou, entrou.", icon: <ShieldAlert className="w-4 h-4" /> }
];

const NOTIFICATION_SOUND_URL = "https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3";

type PopupType = 'purchase' | 'view' | 'bonus' | 'group' | 'aggressive' | 'scarcity';

interface PopupContent {
  type: PopupType;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  icon: React.ReactNode;
  accentColor: string;
}

const SocialProofPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<PopupContent | null>(null);
  const [isPermanentlyClosed, setIsPermanentlyClosed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(NOTIFICATION_SOUND_URL);
    audio.volume = 0.2; // Volume mais baixo para não assustar
    audioRef.current = audio;
  }, []);

  const playSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silencia erro de autoplay
      });
    }
  }, []);

  const generateContent = useCallback((): PopupContent => {
    const randomEntry = BRAZILIAN_DATA[Math.floor(Math.random() * BRAZILIAN_DATA.length)];
    const randomAggressive = AGGRESSIVE_MESSAGES[Math.floor(Math.random() * AGGRESSIVE_MESSAGES.length)];
    
    const types: PopupType[] = ['purchase', 'view', 'bonus', 'group', 'aggressive', 'scarcity'];
    const randomType = types[Math.floor(Math.random() * types.length)];

    switch (randomType) {
      case 'group':
        const moreCount = Math.floor(Math.random() * (22 - 7 + 1)) + 7;
        return {
          type: 'group',
          title: <span className="text-zinc-200"><strong>{randomEntry.name}</strong> e mais {moreCount} pessoas</span>,
          subtitle: "acabaram de liberar o protocolo natural",
          icon: <Users className="w-4 h-4 text-primary" />,
          accentColor: "border-primary/20 bg-primary/10"
        };
      case 'aggressive':
        return {
          type: 'aggressive',
          title: <span className="text-zinc-200"><strong>{randomEntry.name} ({randomEntry.state})</strong> comprou agora.</span>,
          subtitle: randomAggressive.sub,
          icon: randomAggressive.icon,
          accentColor: "border-primary/30 bg-primary/10 shadow-[0_0_15px_rgba(249,115,22,0.1)]"
        };
      case 'scarcity':
        return {
          type: 'scarcity',
          title: <span className="text-zinc-200">Mais um acesso liberado.</span>,
          subtitle: "A janela fecha sem aviso prévio.",
          icon: <ShieldAlert className="w-4 h-4 text-red-500" />,
          accentColor: "border-red-500/30 bg-red-500/10"
        };
      default:
        return {
          type: 'purchase',
          title: <span className="text-zinc-200"><strong>{randomEntry.name} ({randomEntry.state})</strong></span>,
          subtitle: "Acabou de liberar o acesso total",
          icon: <CreditCard className="w-4 h-4 text-primary" />,
          accentColor: "border-primary/20 bg-primary/10"
        };
    }
  }, []);

  const showPopup = useCallback(() => {
    if (isPermanentlyClosed) return;
    setContent(generateContent());
    setIsVisible(true);
    playSound();
    setTimeout(() => setIsVisible(false), 5000);
  }, [isPermanentlyClosed, generateContent, playSound]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.5) showPopup();
    }, 12000);
    return () => clearInterval(timer);
  }, [showPopup]);

  if (isPermanentlyClosed || !content) return null;

  return (
    <div className={cn(
      "fixed left-4 right-4 sm:left-6 sm:right-auto z-[100] transition-all duration-700 transform pointer-events-none",
      "bottom-64 sm:bottom-32",
      isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
    )}>
      <div className={cn(
        "bg-zinc-900/95 backdrop-blur-md border p-3 rounded-2xl shadow-2xl flex items-center gap-4 pointer-events-auto group w-fit max-w-[320px] mx-auto sm:mx-0",
        content.accentColor
      )}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/40 border border-white/5 shrink-0">
          {content.icon}
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-[12px] font-medium leading-tight">{content.title}</p>
          <p className="text-[10px] text-zinc-400 font-bold mt-1 uppercase tracking-tight italic">{content.subtitle}</p>
        </div>
        <button onClick={() => setIsPermanentlyClosed(true)} className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <X className="w-3 h-3 text-zinc-600" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofPopup;
