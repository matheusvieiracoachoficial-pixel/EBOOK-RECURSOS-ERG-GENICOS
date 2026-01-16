
import React, { useState } from 'react';
import { Compass, Layout, CheckCircle, X, MousePointer2, TrendingUp, Tag, ChevronUp, ChevronDown, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

interface DevNavProps {
  currentView: 'sales' | 'thanks' | 'quiz' | 'upsell' | 'downsell';
  setView: (view: 'sales' | 'thanks' | 'quiz' | 'upsell' | 'downsell') => void;
  onClose: () => void;
}

const DevNav: React.FC<DevNavProps> = ({ currentView, setView, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps: { id: typeof currentView; label: string; icon: any; color?: string }[] = [
    { id: 'quiz', label: '1. Quiz (Diagnóstico)', icon: MousePointer2 },
    { id: 'sales', label: '2. Página de Vendas', icon: Layout },
    { id: 'upsell', label: '3. Upsell (Oferta VIP)', icon: TrendingUp },
    { id: 'downsell', label: '4. Downsell (Retenção)', icon: Tag },
    { id: 'thanks', label: '5. Tela de Obrigado', icon: CheckCircle },
  ];

  const getPixelStatus = () => {
    switch (currentView) {
      case 'quiz': return 'PageView';
      case 'sales': return 'PageView + Lead';
      case 'upsell':
      case 'downsell': return 'ViewContent';
      case 'thanks': return 'PURCHASE';
      default: return 'Active';
    }
  };

  return (
    <div className={cn(
      "fixed z-[250] transition-all duration-300",
      "lg:top-24 lg:right-6 lg:bottom-auto lg:left-auto lg:w-72 lg:translate-y-0",
      "bottom-28 right-4 w-64 translate-y-0 sm:w-72",
      !isExpanded && "w-auto bottom-28"
    )}>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black shadow-[0_0_20px_rgba(249,115,22,0.4)] border-2 border-orange-400 mb-4 ml-auto",
          isExpanded && "rotate-180 bg-zinc-900 text-primary border-primary/20"
        )}
      >
        {isExpanded ? <ChevronDown className="w-6 h-6" /> : <Compass className="w-6 h-6" />}
      </button>

      <div className={cn(
        "bg-zinc-900/95 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 shadow-2xl shadow-black/50 space-y-4 transition-all duration-300",
        !isExpanded && "hidden lg:block opacity-0 lg:opacity-100 scale-95 lg:scale-100",
        isExpanded && "block opacity-100 scale-100"
      )}>
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest italic">Editor Guide / Preview</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-red-500/10 rounded-lg transition-colors text-zinc-500 hover:text-red-500 group"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentView === step.id;
            
            return (
              <button 
                key={step.id}
                onClick={() => {
                  setView(step.id);
                  if (window.innerWidth < 1024) setIsExpanded(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all border",
                  isActive 
                    ? "bg-primary border-primary text-black font-black shadow-lg shadow-primary/20 scale-[1.02]" 
                    : "bg-black/20 border-white/5 text-zinc-400 hover:border-primary/40 hover:text-white"
                )}
              >
                <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-black" : "text-primary")} />
                <span className="text-[11px] uppercase font-bold tracking-tight">{step.label}</span>
              </button>
            );
          })}
        </div>

        <div className="pt-2 border-t border-white/5">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
               <Activity className="w-3 h-3 text-accent animate-pulse" />
               <span className="text-[9px] font-black text-zinc-500 uppercase">Pixel Status:</span>
            </div>
            <span className="text-[9px] font-black text-white uppercase italic">{getPixelStatus()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevNav;
