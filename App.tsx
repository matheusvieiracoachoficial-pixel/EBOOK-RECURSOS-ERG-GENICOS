
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Creator from './components/Creator'; // Novo Componente
import Results from './components/Results';
import Benefits from './components/Benefits';
import Chapters from './components/Chapters';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ThankYou from './components/ThankYou';
import SocialProofPopup from './components/SocialProofPopup';
import CountdownTimer from './components/CountdownTimer';
import Quiz from './components/Quiz';

/**
 * LINK ÚNICO E OFICIAL CAKTO (R$ 19)
 */
const CAKTO_LINK_FINAL = 'https://pay.cakto.com.br/3fik4hg_724336';

export default function App() {
  const [currentView, setCurrentView] = useState<'sales' | 'thanks' | 'quiz'>('quiz');
  const [isExpired, setIsExpired] = useState(false);
  const [userProfile, setUserProfile] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    // Roteamento via URL
    if (params.get('step') === 'thanks') {
      setCurrentView('thanks');
    }

    window.scrollTo(0, 0);
  }, []);

  const handlePurchaseNavigation = () => {
    window.location.href = CAKTO_LINK_FINAL;
  };

  // 1. TELA DE OBRIGADO
  if (currentView === 'thanks') {
    return (
      <div className="min-h-screen bg-zinc-950 text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
        <Header hideNav onLogoClick={() => window.location.href = '/'} />
        <main><ThankYou /></main>
        <Footer />
      </div>
    );
  }

  // 2. TELA DE DIAGNÓSTICO
  if (currentView === 'quiz') {
    return (
      <Quiz 
        onComplete={(profile) => {
          setUserProfile(profile);
          setCurrentView('sales');
          setTimeout(() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        }} 
        onClose={() => setCurrentView('sales')} 
      />
    );
  }

  // 3. PÁGINA DE VENDAS PRINCIPAL
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden font-sans">
      <Header hideNav />
      <main>
        <Hero 
          onPurchase={handlePurchaseNavigation} 
          onQuiz={() => setCurrentView('quiz')} 
          isExpired={isExpired} 
          userProfile={userProfile} 
        />
        <Manifesto />
        <Creator /> 
        <Results />
        <Benefits />
        <Chapters />
        <Testimonials />
        <FAQ />
        <Pricing 
          onPurchase={handlePurchaseNavigation} 
          isExpired={isExpired} 
          onExpire={() => setIsExpired(true)} 
        />
        <Guarantee 
          onPurchase={handlePurchaseNavigation} 
          isExpired={isExpired} 
        />
      </main>
      <Footer />
      <StickyCTA 
        onPurchase={handlePurchaseNavigation} 
        isExpired={isExpired} 
      />
      <SocialProofPopup />
      <CountdownTimer onExpire={() => setIsExpired(true)} isExpired={isExpired} />
    </div>
  );
}
