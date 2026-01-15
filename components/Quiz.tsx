
import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Target, Brain, ShieldAlert, Sparkles, Activity, ShieldCheck, ArrowRight, BarChart3, ScanLine, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

interface QuizProps {
  onComplete: (profile: string) => void;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    text: "Como você se sente 30 minutos após o treino?",
    options: [
      { text: "Destruído. Preciso deitar imediatamente.", weight: "cansado" },
      { text: "Normal, sinto que o treino foi 'ok'.", weight: "perdidao" },
      { text: "Frustrado. Parece que não rendeu o suficiente.", weight: "estagnado" },
      { text: "Energizado, mas com dores articulares/musculares.", weight: "pronto" }
    ]
  },
  {
    id: 2,
    text: "Qual destas frases descreve sua rotina alimentar?",
    options: [
      { text: "Sem rotina. Como o que dá, quando dá.", weight: "perdidao" },
      { text: "Tento comer limpo, mas sinto fome constante.", weight: "cansado" },
      { text: "Bato os macros com precisão, mas não evoluo.", weight: "estagnado" },
      { text: "Dieta regrada, mas estagnei na força/carga.", weight: "pronto" }
    ]
  },
  {
    id: 3,
    text: "Sobre o uso de estimulantes (Café/Pré-treino):",
    options: [
      { text: "Dependência total. Sem cafeína não treino.", weight: "cansado" },
      { text: "Uso esporádico, sinto taquicardia/ansiedade.", weight: "perdidao" },
      { text: "Tomo doses altas e não sinto mais efeito.", weight: "estagnado" },
      { text: "Uso estratégico, mas busco otimização real.", weight: "pronto" }
    ]
  },
  {
    id: 4,
    text: "Qual é o seu maior inimigo hoje?",
    options: [
      { text: "Estética estagnada. O espelho não muda.", weight: "estagnado" },
      { text: "Cansaço mental e falta de foco/drive.", weight: "cansado" },
      { text: "Falta de direcionamento técnico.", weight: "perdidao" },
      { text: "Platô de força extrema (as cargas pararam).", weight: "pronto" }
    ]
  }
];

const profiles = {
  cansado: {
    title: "O Cansado Crônico",
    subtitle: "Déficit de Recuperação do SNC",
    stats: { energia: 25, recuperacao: 15, foco: 40, potencial: 90 },
    description: "Seu sistema nervoso central está sobrecarregado. Você treina pesado, mas seu corpo está em modo de sobrevivência, não de hipertrofia. Você não precisa de mais treino, precisa de modulação hormonal natural e otimização de sono.",
    icon: <ShieldAlert className="w-10 h-10 text-red-500" />,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  perdidao: {
    title: "O Potencial Desperdiçado",
    subtitle: "Erro Crítico de Estratégia",
    stats: { energia: 60, recuperacao: 50, foco: 30, potencial: 95 },
    description: "Você tem o combustível, mas não tem o mapa. Sua bioquímica está uma bagunça por falta de direcionamento ergogênico. Otimizar isso vai te dar resultados de 1 ano em apenas alguns meses.",
    icon: <Brain className="w-10 h-10 text-secondary" />,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20"
  },
  estagnado: {
    title: "O Platô Biológico",
    subtitle: "Homeostase Metabólica",
    stats: { energia: 70, recuperacao: 60, foco: 85, potencial: 98 },
    description: "Você faz o básico bem, mas seu corpo se adaptou. Você bateu no 'teto natural' padrão. O protocolo vai quebrar sua homeostase para forçar uma nova resposta adaptativa sem o uso de esteroides.",
    icon: <Target className="w-10 h-10 text-primary" />,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  pronto: {
    title: "A Elite Adormecida",
    subtitle: "Otimização de Performance Final",
    stats: { energia: 85, recuperacao: 70, foco: 80, potencial: 100 },
    description: "Você já está acima da média, mas falta o 'ajuste fino'. Detalhes de timing nutricional e sinergia de compostos naturais vão destravar o seu verdadeiro limite genético.",
    icon: <Zap className="w-10 h-10 text-accent" />,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20"
  }
};

const Quiz: React.FC<QuizProps> = ({ onComplete, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [loadingText, setLoadingText] = useState("Iniciando varredura...");
  const [result, setResult] = useState<keyof typeof profiles | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (weight: string, index: number) => {
    setSelectedOption(index);
    if (navigator.vibrate) navigator.vibrate(50);

    setTimeout(() => {
      const newAnswers = [...answers, weight];
      setAnswers(newAnswers);
      setSelectedOption(null);
      
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        calculateResult(newAnswers);
      }
    }, 400);
  };

  const calculateResult = (finalAnswers: string[]) => {
    setIsCalculating(true);
    
    const logs = [
      "Processando variáveis de treino...",
      "Analisando perfil metabólico...",
      "Calculando eficiência mitocondrial...",
      "Verificando níveis de cortisol...",
      "Identificando gargalos de performance...",
      "Gerando protocolo personalizado..."
    ];

    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < logs.length) {
        setLoadingText(logs[logIndex]);
        logIndex++;
      }
    }, 600);

    setTimeout(() => {
      clearInterval(interval);
      const counts = finalAnswers.reduce((acc: any, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      
      const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b) as keyof typeof profiles;
      setResult(winner);
      setIsCalculating(false);
    }, 4000);
  };

  if (isCalculating) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 overflow-hidden">
        <div className="w-full max-w-md space-y-8 relative">
          <div className="relative flex justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center relative">
               <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" />
               <Activity className="w-12 h-12 text-primary animate-pulse" />
            </div>
          </div>

          <div className="space-y-4 font-mono text-left bg-zinc-900/50 p-6 rounded-xl border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-[scan_2s_linear_infinite]" />
             
             <div className="space-y-2">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                   <Lock className="w-3 h-3" /> System Access: Granted
                </p>
                <p className="text-zinc-400 text-sm flex items-center gap-2">
                   <span className="text-primary">root@system:~$</span> {loadingText}
                </p>
                <div className="h-2 w-full bg-zinc-800 rounded-full mt-4 overflow-hidden">
                   <div className="h-full bg-primary" style={{ width: '100%', animation: 'progress 4s linear' }} />
                </div>
             </div>
          </div>
        </div>
        <style>{`
          @keyframes scan { 0% { top: 0 } 100% { top: 100% } }
          @keyframes progress { 0% { width: 0% } 100% { width: 100% } }
        `}</style>
      </div>
    );
  }

  if (result) {
    const profile = profiles[result];
    return (
      <div className="fixed inset-0 z-[100] bg-zinc-950 overflow-y-auto animate-fade-in-up">
        <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full bg-zinc-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            
            <div className="relative p-8 md:p-12 text-center border-b border-white/5 bg-zinc-950/50">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
               
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">
                 <ScanLine className="w-3 h-3" /> Varredura Concluída
               </div>

               <div className={cn("w-20 h-20 mx-auto rounded-3xl flex items-center justify-center border-2 mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]", profile.bg, profile.border, profile.color)}>
                 {profile.icon}
               </div>

               <h2 className="text-3xl md:text-5xl font-black text-white font-display uppercase italic tracking-tighter leading-none mb-2">
                 {profile.title}
               </h2>
               <p className={cn("text-sm font-black uppercase tracking-[0.3em]", profile.color)}>
                 {profile.subtitle}
               </p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-2">
                    <BarChart3 className="w-3 h-3" /> Análise Biométrica Estimada
                 </div>
                 {Object.entries(profile.stats).map(([key, value], i) => (
                    <div key={i} className="space-y-1">
                       <div className="flex justify-between text-xs font-bold uppercase text-zinc-400">
                          <span>{key}</span>
                          <span className={cn((value as number) < 50 ? "text-red-500" : "text-white")}>{value as number}%</span>
                       </div>
                       <div className="h-2 w-full bg-black rounded-full overflow-hidden border border-white/5">
                          <div 
                            className={cn("h-full rounded-full transition-all duration-1000", profile.bg.replace('/10', ''))} 
                            style={{ width: `${value as number}%`, transitionDelay: `${i * 100}ms` }} 
                          />
                       </div>
                    </div>
                 ))}
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                 <p className="text-zinc-300 italic font-medium leading-relaxed text-sm md:text-base">
                   <span className="text-white font-bold">Diagnóstico:</span> {profile.description}
                 </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 justify-center text-[10px] font-black text-primary uppercase tracking-widest animate-pulse">
                   <ShieldCheck className="w-3 h-3" /> Protocolo Customizado Pronto
                </div>
                <button 
                  onClick={() => onComplete(result)}
                  className="w-full py-6 bg-primary hover:bg-orange-400 text-black font-black text-lg md:text-xl uppercase tracking-tighter rounded-xl transition-all shadow-[0_10px_40px_rgba(249,115,22,0.2)] border-b-4 border-orange-700 flex items-center justify-center gap-3 active:scale-95 group"
                >
                  DESTRAVAR MINHA EVOLUÇÃO
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-900">
        <div 
          className="h-full bg-gradient-to-r from-primary via-orange-400 to-secondary transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]" 
          style={{ width: `${((step + 1) / questions.length) * 100}%` }} 
        />
      </div>

      <div className="max-w-2xl w-full space-y-10 relative">
        <div className="space-y-6 text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
            <Sparkles className="w-3 h-3" /> Diagnóstico de Performance
          </div>
          
          <div className="space-y-2">
             <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight font-display">
               {questions[step].text}
             </h2>
             <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
               Questão {step + 1} de {questions.length}
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {questions[step].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option.weight, i)}
              className={cn(
                "group relative flex items-center justify-between p-5 md:p-6 rounded-2xl border transition-all duration-200 text-left active:scale-[0.98]",
                selectedOption === i 
                  ? "bg-primary border-primary text-black scale-[1.02] shadow-[0_0_30px_rgba(249,115,22,0.3)] z-10" 
                  : "bg-zinc-900/50 border-white/5 text-zinc-300 hover:bg-zinc-800 hover:border-white/20 hover:text-white"
              )}
            >
              <span className={cn(
                "text-base md:text-lg font-bold transition-colors",
                selectedOption === i ? "text-black" : "group-hover:text-white"
              )}>
                {option.text}
              </span>
              
              <div className={cn(
                "w-6 h-6 rounded-full border flex items-center justify-center transition-all shrink-0 ml-4",
                selectedOption === i 
                  ? "border-black bg-black text-primary" 
                  : "border-white/10 group-hover:border-primary group-hover:bg-primary group-hover:text-black"
              )}>
                {selectedOption === i ? <Activity className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <button 
            onClick={onClose}
            className="text-zinc-600 hover:text-zinc-400 text-[10px] font-black uppercase tracking-widest italic transition-colors flex items-center gap-2 group"
          >
            Pular Diagnóstico 
            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
