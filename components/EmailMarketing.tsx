
import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MousePointer2 } from 'lucide-react';
import { cn } from '../lib/utils';

const emailSequence = [
  {
    id: 1,
    tag: "CONSCIÊNCIA",
    subject: "O erro invisível no seu treino...",
    body: `Olá, [Nome]!

Você já sentiu que está dando 110% na academia, mas o espelho e a balança parecem estagnados?

Muitos acreditam que o segredo é apenas "treinar mais pesado". Mas a verdade é que o esforço sem estratégia bioquímica é como tentar acelerar um carro com o freio de mão puxado.

No próximo email, vou te mostrar como a elite dos atletas destrava esse freio usando a ciência dos recursos ergogênicos com o nosso novo e-book.

Fique de olho.

Abraço,
Equipe Protocolo Atleta.`
  },
  {
    id: 2,
    tag: "EDUCAÇÃO",
    subject: "O que ninguém te conta sobre Biohacking",
    body: `Oi, [Nome].

Ontem falamos sobre estratégia. Hoje, vamos dar nome aos bois: Recursos Ergogênicos.

Diferente do que o senso comum diz, ergogenia não é sobre substâncias mágicas, mas sobre substâncias que otimizam a produção de ATP, reduzem a percepção de fadiga e aceleram a síntese proteica.

Tudo isso está detalhado no nosso e-book.

Amanhã vou te mostrar como os atletas do 1% usam isso a favor deles.

Até lá.`
  },
  {
    id: 3,
    tag: "AUTORIDADE",
    subject: "O segredo dos 1% (Não é só genética)",
    body: `[Nome], já reparou como atletas de elite mantêm o foco do primeiro ao último set?

Eles não contam apenas com a sorte ou com uma genética privilegiada. Eles utilizam protocolos de noitrópicos e adaptógenos para manter o cortisol sob controle e a dopamina alta.

Eles sabem exatamente o que ingerir para que o cérebro não desista antes do corpo.

Eu compilei todos esses protocolos em um único e-book para que você não precise mais adivinhar.

Fique atento ao meu próximo email. Vou liberar algo especial.`
  },
  {
    id: 4,
    tag: "OFERTA",
    subject: "Seu Protocolo de Performance está aqui.",
    body: `Finalmente chegou a hora, [Nome]!

Liberei oficialmente o acesso ao e-book "O Segredo dos Atletas".

Este é o mapa completo para você dominar sua própria fisiologia:
- Protocolos de Dosagem Real
- Ciência dos Noitrópicos
- Estratégias de Recuperação Acelerada

Tudo isso pelo preço de um pré-treino genérico.

Clique aqui para garantir seu exemplar: [LINK PARA CHECKOUT]

Sua performance nunca mais será a mesma.`
  },
  {
    id: 5,
    tag: "URGÊNCIA",
    subject: "Últimas horas (Sua garantia expira em breve)",
    body: `[Nome], o tempo está acabando.

A oferta especial de lançamento do nosso e-book será encerrada em breve. 

Você tem duas escolhas:
1. Continuar treinando no escuro, gastando dinheiro com suplementos que não funcionam.
2. Assumir o controle da sua biologia com um guia baseado em ciência, com Risco Zero (7 dias de garantia).

Qual vai ser?

Garanta sua vaga agora: [LINK PARA CHECKOUT]

Vejo você no topo.`
  }
];

const EmailMarketing: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `Assunto: ${emailSequence[activeTab].subject}\n\n${emailSequence[activeTab].body}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-zinc-950 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">
            Marketing Toolkit
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-display uppercase tracking-tight">
            SEQUÊNCIA DE <span className="text-gradient">CONVERSÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Utilize nossa sequência estratégica de 5 emails para nutrir sua audiência e maximizar suas vendas.
          </p>
        </div>

        <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-72 bg-black/40 border-b md:border-b-0 md:border-r border-white/5 p-6 space-y-2">
            <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-4 px-4">
              Emails do Fluxo
            </div>
            {emailSequence.map((email, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all group",
                  activeTab === i 
                    ? "bg-primary text-black font-black" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-white"
                )}
              >
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black",
                  activeTab === i ? "bg-black/20" : "bg-white/10"
                )}>
                  {i + 1}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-tighter opacity-60 leading-none mb-1">{email.tag}</span>
                  <span className="text-xs font-bold truncate">Email {i + 1}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Email Content Display */}
          <div className="flex-1 p-8 md:p-12 relative">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                   <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">{emailSequence[activeTab].tag}</span>
                   <h3 className="text-xl font-bold text-foreground">Email de Nurturing {activeTab + 1}</h3>
                </div>
              </div>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs font-black uppercase tracking-widest"
              >
                {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copiado!" : "Copiar Texto"}
              </button>
            </div>

            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Assunto:</label>
                <div className="text-lg font-bold text-foreground bg-white/[0.02] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  {emailSequence[activeTab].subject}
                  <Sparkles className="w-4 h-4 text-secondary opacity-50" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Corpo do Email:</label>
                <div className="bg-zinc-950/50 p-6 rounded-xl border border-white/5 font-mono text-sm leading-relaxed text-foreground/80 whitespace-pre-wrap">
                  {emailSequence[activeTab].body}
                </div>
              </div>

              <div className="pt-6 flex items-center gap-3 text-xs text-muted-foreground font-medium bg-primary/5 p-4 rounded-xl border border-primary/10">
                <MousePointer2 className="w-4 h-4 text-primary" />
                <span>Dica: Lembre-se de substituir [Nome] e [LINK PARA CHECKOUT] antes de enviar.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailMarketing;
