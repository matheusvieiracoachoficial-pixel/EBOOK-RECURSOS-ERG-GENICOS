
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 text-center">
        
        <div className="space-y-6">
          <h4 className="text-2xl md:text-5xl font-black text-foreground font-display uppercase italic tracking-tighter leading-tight max-w-3xl">
             "Este não é um guia para fazer mais. <br />
             <span className="text-primary underline decoration-primary/30 underline-offset-8">É um manual para usar melhor.</span>"
          </h4>
          <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-sm opacity-60">
             O MEDO NASCE DA IGNORÂNCIA. A CONFIANÇA NASCE DO CONHECIMENTO.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 pt-12 border-t border-white/5">
          <div className="text-muted-foreground text-xs text-center md:text-left font-bold uppercase tracking-widest italic">
            <p>&copy; {new Date().getFullYear()} Força Proibida – O Guia Natural.</p>
            <p className="mt-2">Todos os direitos reservados.</p>
          </div>
          
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground/60 text-[10px] leading-relaxed uppercase font-bold italic">
            ESTE PRODUTO NÃO SUBSTITUI O PARECER PROFISSIONAL. SEMPRE CONSULTE UM MÉDICO PARA TRATAR DE ASSUNTOS RELATIVOS À SAÚDE. RESPEITE SEU CORPO.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
