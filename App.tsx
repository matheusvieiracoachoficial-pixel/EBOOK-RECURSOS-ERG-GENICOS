
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Chapters from './components/Chapters';
import Bonuses from './components/Bonuses';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Creator from './components/Creator';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ThankYou from './components/ThankYou';
import SocialProofPopup from './components/SocialProofPopup';
import CountdownTimer from './components/CountdownTimer';
import Quiz from './components/Quiz';
import DevNav from './components/DevNav';
import Upsell from './components/Upsell';
import Downsell from './components/Downsell';
import TrackingPixels from './components/TrackingPixels';
import FAQ from './components/FAQ';

/**
 * LINKS OFICIAIS CAKTO
 */
const CAKTO_LINK_SALES = 'https://pay.cakto.com.br/3fik4hg_724336';
const CAKTO_LINK_UPSELL = 'https://pay.cakto.com.br/UPSELL_LINK';
const CAKTO_LINK_DOWNSELL = 'https://pay.cakto.com.br/DOWNSELL_LINK';

type ViewType = 'sales' | 'thanks' | 'quiz' | 'upsell' | 'downsell';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('quiz');
  const [isExpired, setIsExpired] = useState(false);
  const [userProfile, setUserProfile] = useState<string | null>(null);
  const [showDevNav, setShowDevNav] = useState(true);
  const [trackingData, setTrackingData] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const step = params.get('step');
    if (step === 'thanks') setCurrentView('thanks');
    if (step === 'upsell') setCurrentView('upsell');
    if (step === 'downsell') setCurrentView('downsell');
    window.scrollTo(0, 0);
  }, []);

  const goToCheckout = () => { 
    if (window.fbq) window.fbq('track', 'InitiateCheckout');
    window.location.href = CAKTO_LINK_SALES; 
  };

  const goToUpsellCheckout = () => { window.location.href = CAKTO_LINK_UPSELL; };
  const goToDownsellCheckout = () => { window.location.href = CAKTO_LINK_DOWNSELL; };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden font-sans">
      
      <TrackingPixels currentView={currentView} eventData={trackingData} />

      {showDevNav && (
        <DevNav 
          currentView={currentView} 
          setView={setCurrentView} 
          onClose={() => setShowDevNav(false)} 
        />
      )}

      {currentView === 'thanks' && (
        <>
          <Header hideNav onLogoClick={() => setCurrentView('sales')} />
          <main><ThankYou /></main>
          <Footer />
        </>
      )}

      {currentView === 'upsell' && (
        <Upsell 
          onAccept={goToUpsellCheckout} 
          onDecline={() => setCurrentView('downsell')} 
        />
      )}

      {currentView === 'downsell' && (
        <Downsell 
          onAccept={goToDownsellCheckout} 
          onDecline={() => setCurrentView('thanks')} 
        />
      )}

      {currentView === 'quiz' && (
        <Quiz 
          onComplete={(profile) => {
            setUserProfile(profile);
            setTrackingData({ fromQuiz: true });
            setCurrentView('sales');
            setTimeout(() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
            }, 500);
          }} 
          onClose={() => setCurrentView('sales')} 
        />
      )}

      {currentView === 'sales' && (
        <>
          <Header hideNav />
          <main>
            {/* 1. HEADLINE (Hero) */}
            <Hero 
              onPurchase={goToCheckout} 
              onQuiz={() => setCurrentView('quiz')} 
              isExpired={isExpired} 
              userProfile={userProfile} 
            />

            {/* 2. PROVAS SOCIAIS (Antes/Depois) */}
            <SocialProof />

            {/* 3. MÓDULOS DO CURSO */}
            <Chapters />

            {/* 4. BÔNUS EXCLUSIVOS */}
            <Bonuses />

            {/* 5. COMPARAÇÃO (NOVA SEÇÃO) */}
            <Comparison />

            {/* 6. OFERTA */}
            <Pricing 
              onPurchase={goToCheckout} 
              isExpired={isExpired} 
              onExpire={() => setIsExpired(true)} 
            />

            <FAQ />

            {/* 7. SOBRE O CRIADOR */}
            <Creator />
          </main>
          <Footer />
          <StickyCTA 
            onPurchase={goToCheckout} 
            isExpired={isExpired} 
          />
          <SocialProofPopup />
          <CountdownTimer onExpire={() => setIsExpired(true)} isExpired={isExpired} />
        </>
      )}
    </div>
  );
}
