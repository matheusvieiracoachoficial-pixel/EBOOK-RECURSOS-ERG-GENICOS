
import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Target, Brain, ShieldAlert, Sparkles, Loader2, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

interface QuizProps {
  onComplete: (profile: string) => void;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    text: "Como você se sente depois de um treino?",
    options: [
      { text: "Morto. Parece que fui atropelado.", weight: "cansado" },
      { text: "Normal, mas nada demais.", weight: "perdidao" },
      { text: "Bem, mas sinto que poderia render mais.", weight: "estagnado" },
      { text: "Disposto e com energia extra.", weight: "pronto" }
    ]
  },
  {
    id: 2,
    text: "Qual frase te representa melhor?",
    options: [
      { text: "“Treino, como direito... e mesmo assim, não evoluo.”", weight: "cansado" },
      { text: "“Me falta constância e foco.”", weight: "perdidao" },
      { text: "“Acho que preciso de algo a mais, mas não quero usar bomba.”", weight: "estagnado" },
      { text: "“Tô bem, mas quero subir de nível.”", weight: "pronto" }
    ]
  },
  {
    id: 3,
    text: "Você já usou algum recurso ergogênico natural?",
    options: [
      { text: "Nem sei o que é isso.", weight: "cansado" },
      { text: "Já ouvi falar, mas nunca usei.", weight: "perdidao" },
      { text: "Usei uma vez, mas sem orientação.", weight: "estagnado" },
      { text: "Já testei alguns, mas quero algo estruturado.", weight: "pronto" }
    ]
  },
  {
    id: 4,
    text: "O que mais te atrapalha hoje?",
    options: [
      { text: "Falta de energia / cansaço", weight: "cansado" },
      { text: "Desânimo ou preguiça", weight: "perdidao" },
      { text: "Estagnação nos resultados", weight: "estagnado" },
      { text: "Recuperação lenta / Dores", weight: "pronto" }
    ]
  }
];

const profiles = {
  cansado: {
    title: "O Cansado Crônico",
    description: "Você dá o seu máximo, mas o corpo não responde. Provavelmente está sem suporte natural pro esforço que faz. Você precisa de estímulo interno, não só whey e motivação.",
    icon: <ShieldAlert className="w-12 h-12 text-red-500" />
  },
  perdidao: {
    title: "O Perdidão",
    description: "Você tenta, pesquisa, até compra uns suplementos aleatórios... mas no fundo não sabe o que tá fazendo. O problema não é você, é o protocolo errado.",
    icon: <Brain className="w-12 h-12 text-secondary" />
  },
  estagnado: {
    title: "O Estagnado Focado",
    description: "Você já fez o que a maioria não faz — treina, come direito e estuda. Mas a verdade é que sem os estímulos certos, o corpo trava. Você não precisa de bomba, só precisa dos recursos naturais certos.",
    icon: <Target className="w-12 h-12 text-primary" />
  },
  pronto: {
    title: "O Pronto pra Avançar",
    description: "Seu corpo tá pedindo pra sair da média. Agora você precisa de um método claro, natural e validado — usado por quem leva performance a sério para atingir o ápice.",
    icon: <Zap className="w-12 h-12 text-accent" />
  }
};

const Quiz: React.FC<QuizProps> = ({ onComplete, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<keyof typeof profiles | null>(null);

  const handleAnswer = (weight: string) => {
    const newAnswers = [...answers, weight];
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    setIsCalculating(true);
    setTimeout(() => {
      const counts = finalAnswers.reduce((acc: any, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      
      const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b) as keyof typeof profiles;
      setResult(winner);
      setIsCalculating(false);
    }, 2800); // Um pouco mais longo para o efeito de scanner
  };

  if (isCalculating) {
    return (
      <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center p-6 overflow-hidden">
        <div className="relative w-48 h-48 mb-12">
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse" />
          <div className="absolute inset-2 border border-primary/10 rounded-full" />
          
          {/* Efeito de Scanner */}
          <div className="absolute left-0 right-0 h-0.5 bg-primary/60 shadow-[0_0_15px_rgba(249,115,22,0.8)] z-10 animate-[scan_2s_ease-in-out_infinite]" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <Activity className="w-12 h-12 text-primary animate-pulse" />
          </div>
        </div>

        <div className="space-y-4 text-center max-w-xs">
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter animate-pulse">
            Analisando Biometria...
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] animate-[fade-in_1s_ease-in_infinite_alternate]">
              Cruzando dados de esforço...
            </p>
            <p className="text-zinc-600 text-[8px] font-bold uppercase tracking-widest italic opacity-50">
              Identificando lacunas ergogênicas
            </p>
          </div>
        </div>

        <style>{`
          @keyframes scan {
            0%, 100% { top: 10%; opacity: 0; }
            50% { top: 90%; opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  if (result) {
    const profile = profiles[result];
    return (
      <div className="fixed inset-0 z-[100] bg-zinc-950 overflow-y-auto px-6 py-20 flex flex-col items-center">
        <div className="max-w-xl w-full space-y-8 animate-fade-in-up">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-[2.5rem] shadow-2xl relative group">
              <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-50" />
              <div className="relative">
                {profile.icon}
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] italic">Diagnóstico Concluído</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none font-display">
                {profile.title}
              </h2>
            </div>

            <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] text-zinc-400 italic font-medium leading-relaxed">
              {profile.description}
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl w-full text-left space-y-4 relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 opacity-5">
                 <ShieldCheck className="w-24 h-24 text-primary" />
               </div>
               <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest relative z-10">
                 <Activity className="w-4 h-4" /> Recomendação Crítica:
               </div>
               <p className="text-sm text-zinc-200 font-bold italic relative z-10">
                 Seu perfil indica que você está perdendo cerca de 40% dos seus resultados por falta de otimização bioquímica. O protocolo natural é obrigatório para você agora.
               </p>
            </div>

            <button 
              onClick={() => onComplete(result)}
              className="w-full py-8 bg-primary hover:bg-orange-400 text-black font-black text-xl md:text-2xl uppercase tracking-tighter rounded-2xl transition-all shadow-[0_20px_50px_rgba(249,115,22,0.3)] border-b-8 border-orange-700 flex items-center justify-center gap-3 active:scale-95"
            >
              🔓 LIBERAR MEU PROTOCOLO AGORA
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">
              Acesso imediato à área de membros após a inscrição
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-900">
        <div 
          className="h-full bg-primary transition-all duration-700 shadow-[0_0_15px_rgba(249,115,22,0.6)]" 
          style={{ width: `${((step + 1) / questions.length) * 100}%` }} 
        />
      </div>

      <div className="max-w-2xl w-full space-y-12 relative">
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] italic">
            <Sparkles className="w-4 h-4" /> Diagnóstico de Performance
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight font-display">
            {questions[step].text}
          </h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            Pergunta {step + 1} de {questions.length}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {questions[step].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option.weight)}
              className="group relative flex items-center justify-between p-6 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900 hover:border-primary/40 transition-all text-left active:scale-[0.98]"
            >
              <span className="text-lg font-bold text-zinc-300 group-hover:text-white transition-colors">
                {option.text}
              </span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                <ChevronRight className="w-5 h-5 text-zinc-700 group-hover:text-black transition-colors" />
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center flex-col items-center gap-4">
          <button 
            onClick={onClose}
            className="text-zinc-700 hover:text-zinc-500 text-[10px] font-black uppercase tracking-widest italic underline underline-offset-4 decoration-zinc-800"
          >
            Pular Diagnóstico e ir para o Guia
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
