
import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  MessageCircle, 
  Users, 
  Instagram, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  Lock
} from 'lucide-react';
import { cn } from '../lib/utils';

/**
 * CONFIGURAÇÃO DE LINKS OFICIAIS
 */
const LINK_EBOOK_DRIVE = 'https://drive.google.com/file/d/1HKtP5bJlphy97toAUZ-v2PMCd0SrGpDc/view?usp=sharing';
const LINK_WHATSAPP_SUPORTE = 'https://wa.me/5500000000000?text=Oi,%20acabei%20de%20comprar%20o%20protocolo%20e%20quero%20começar%20agora!';
const LINK_GRUPO_VIP = 'https://chat.whatsapp.com/DykO4bZWx3XIbXOANHrh1B';
const INSTAGRAM_HANDLE = '@forcaproibida';

const ThankYou: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-zinc-950 px-4 relative overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full space-y-12 relative z-10 animate-fade-in-up">
        
        {/* TÍTULO PRINCIPAL */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-3xl opacity-20 animate-pulse" />
              <div className="relative w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center border border-accent/30 shadow-2xl rotate-3">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white font-display uppercase tracking-tighter italic leading-[0.85]">
            COMPRA CONFIRMADA! <br />
            <span className="text-gradient">AGORA COMEÇA A SUA TRANSFORMAÇÃO.</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs md:text-sm italic">
            O seu acesso foi liberado. Baixe o manual e entre para a elite.
          </p>
        </div>

        {/* GRID DE AÇÕES RÁPIDAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. ENTREGA DO EBOOK */}
          <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 group hover:border-primary/40 transition-all ring-1 ring-primary/5">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
              <Download className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-black text-white uppercase italic tracking-tight">BAIXAR PROTOCOLO</h3>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Acesso direto via Google Drive</p>
            </div>
            <a 
              href={LINK_EBOOK_DRIVE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary hover:bg-orange-400 text-black font-black rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-primary/20 text-center"
            >
              BAIXAR AGORA
            </a>
          </div>

          {/* 2. ATIVAÇÃO WHATSAPP */}
          <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 group hover:border-accent/40 transition-all">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="font-black text-white uppercase italic tracking-tight">SUPORTE EXPRESSO</h3>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Dúvidas? Me chama no Whats</p>
            </div>
            <a 
              href={LINK_WHATSAPP_SUPORTE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-accent hover:bg-green-400 text-black font-black rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-accent/10 text-center"
            >
              FALAR NO WHATSAPP
            </a>
          </div>

          {/* 3. GRUPO VIP */}
          <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 group hover:border-secondary/40 transition-all">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-black text-white uppercase italic tracking-tight">GRUPO VIP</h3>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Dicas extras e avisos</p>
            </div>
            <a 
              href={LINK_GRUPO_VIP} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-secondary hover:bg-yellow-400 text-black font-black rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-secondary/10 text-center"
            >
              ENTRAR NO GRUPO
            </a>
          </div>

        </div>

        {/* SEMENTE DE UPSELL (ANTECIPAÇÃO) */}
        <div className="bg-gradient-to-br from-primary/10 via-zinc-900 to-zinc-900 border border-primary/20 p-10 md:p-14 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles className="w-32 h-32 text-primary" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
              <Zap className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">QUER O ACOMPANHAMENTO COMPLETO?</h2>
              <p className="text-zinc-400 font-medium italic text-sm md:text-base">
                Em breve abriremos vagas para o suporte direto com o <span className="text-primary font-black">Protocolo de 7 Dias</span>. 
                Fique atento ao Grupo VIP para o acesso antecipado e desconto exclusivo.
              </p>
            </div>
          </div>
        </div>

        {/* PROVA SOCIAL / INSTAGRAM */}
        <div className="text-center space-y-8 pt-8 border-t border-white/5">
          <div className="space-y-2">
            <p className="text-sm font-black text-zinc-600 uppercase tracking-[0.3em]">ATIVE SUA REPUTAÇÃO</p>
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">ME MARCA NO INSTAGRAM</h3>
            <p className="text-zinc-500 text-xs italic font-medium max-w-lg mx-auto leading-relaxed">
              Poste um story com seu acesso, marque o <span className="text-white font-bold">{INSTAGRAM_HANDLE}</span> e eu te mando um conteúdo bônus exclusivo via Direct.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-700 italic">
              <Lock className="w-3 h-3" /> COMPRA SEGURA • AMBIENTE CRIPTOGRAFADO
            </div>
            
            <button 
              onClick={() => window.location.href = '/'}
              className="group inline-flex items-center gap-2 text-zinc-800 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.4em] italic"
            >
              VOLTAR AO SITE PRINCIPAL
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThankYou;
