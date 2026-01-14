
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
  { sub: "Você ainda tá pensando?", icon: <Target className="w-4 h-4" /> },
  { sub: "Decisão tomada em 2 minutos.", icon: <Zap className="w-4 h-4" /> },
  { sub: "Tem gente comprando enquanto você decide.", icon: <ShieldAlert className="w-4 h-4" /> },
  { sub: "Enquanto você hesita, outros já estão aplicando.", icon: <Flame className="w-4 h-4" /> },
  { sub: "Essa condição não espera sua confiança.", icon: <AlertCircleIcon /> },
  { sub: "A janela fecha sem aviso. Quem entrou, entrou.", icon: <ShieldAlert className="w-4 h-4" /> }
];

function AlertCircleIcon() {
  return <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center text-[10px] font-black">!</div>;
}

// Som de notificação limpo (Ping de Venda/App)
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

  // Inicializa o áudio
  useEffect(() => {
    const audio = new Audio(NOTIFICATION_SOUND_URL);
    audio.volume = 0.5;
    audioRef.current = audio;
  }, []);

  const playSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silencia erro de autoplay se o usuário ainda não interagiu
        console.log("Aguardando interação para som...");
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

      case 'view':
        const viewers = Math.floor(Math.random() * (240 - 150 + 1)) + 150;
        return {
          type: 'view',
          title: <span className="text-zinc-200"><strong>{viewers} pessoas</strong></span>,
          subtitle: "estão vendo essa oferta agora",
          icon: <Users className="w-4 h-4 text-secondary" />,
          accentColor: "border-secondary/20 bg-secondary/10"
        };

      case 'bonus':
        return {
          type: 'bonus',
          title: <span className="text-zinc-200"><strong>{randomEntry.name} ({randomEntry.state})</strong></span>,
          subtitle: "Comprou o guia + bônus de performance 🔥",
          icon: <Flame className="w-4 h-4 text-primary" />,
          accentColor: "border-primary/20 bg-primary/10"
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
    playSound(); // DISPARA O SOM EM TODOS

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => clearTimeout(hideTimer);
  }, [isPermanentlyClosed, generateContent, playSound]);

  useEffect(() => {
    // Inicia após 7 segundos
    const initialDelay = setTimeout(showPopup, 7000);

    let sequenceTimer: ReturnType<typeof setTimeout>;
    
    const runSequence = () => {
      // Intervalo de 10 a 20 segundos
      const nextDelay = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
      
      sequenceTimer = setTimeout(() => {
        showPopup();
        runSequence();
      }, nextDelay);
    };

    runSequence();

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(sequenceTimer);
    };
  }, [showPopup]);

  if (isPermanentlyClosed || !content) return null;

  return (
    <div 
      className={cn(
        "fixed left-4 right-4 sm:left-6 sm:right-auto z-[100] transition-all duration-700 transform pointer-events-none",
        "bottom-56 sm:bottom-36", // Acima do sticky CTA e Timer no mobile
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
      )}
    >
      <div className={cn(
        "bg-zinc-900/95 backdrop-blur-md border p-2.5 pr-8 rounded-xl shadow-2xl flex items-center gap-3 pointer-events-auto group w-fit max-w-[320px] mx-auto sm:mx-0 transition-all",
        content.accentColor
      )}>
        <div className="relative shrink-0">
          <div className={cn(
            "w-9 h-9 rounded-lg flex items-center justify-center border transition-all bg-black/40 border-white/5",
          )}>
            {content.icon}
          </div>
          {content.type !== 'view' && (
            <div className="absolute -top-1 -right-1">
               <CheckCircle2 className="w-3.5 h-3.5 text-accent fill-black" />
            </div>
          )}
        </div>

        <div className="flex flex-col min-w-0">
          <p className="text-[12px] font-medium leading-tight">
            {content.title}
          </p>
          <p className="text-[10px] text-zinc-400 font-bold mt-0.5 leading-tight italic uppercase tracking-tight">
            {content.subtitle}
          </p>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); setIsPermanentlyClosed(true); }}
          className="absolute top-1 right-1 p-1 text-zinc-700 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Fechar"
        >
          <X className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofPopup;
