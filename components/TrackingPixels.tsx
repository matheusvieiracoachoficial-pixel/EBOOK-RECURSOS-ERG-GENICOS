
import React, { useEffect } from 'react';

/**
 * CONFIGURAÇÃO DE RASTREAMENTO OFICIAL
 * Pixel ID: 1075052574767621
 * Token: EAAZAuemZBFjLkBQUfLZBZABargDGFkhKYjwuz9qCPiiZBTamTXm8GZBKGegcwY9fF2cvJNuPYcvwhm2dkximkkm3l1XtMZBq85UeSl20MRnNnuBS8wK3o9H32zbZCzFEdTaJGQecC6ZBKJs6DydlumVH0YO47Oati0cNBcm5eeJjhUebp3KI4JXbL6m1tx60vcSPqRAZDZD
 */
const PIXEL_IDS = {
  FACEBOOK: '1075052574767621',
  GOOGLE_TAG: 'G-XXXXXXX',
  TIKTOK: 'SEU_TIKTOK_ID'
};

interface TrackingPixelsProps {
  currentView: 'sales' | 'thanks' | 'quiz' | 'upsell' | 'downsell';
  eventData?: any;
}

const TrackingPixels: React.FC<TrackingPixelsProps> = ({ currentView, eventData }) => {
  
  useEffect(() => {
    // 1. INJEÇÃO DO SCRIPT BASE DO FACEBOOK PIXEL
    if (!window.fbq) {
      (function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js'));
      
      window.fbq('init', PIXEL_IDS.FACEBOOK);
    }

    // 2. DISPARO DE PAGEVIEW (Executa sempre que a view muda na SPA)
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    // 3. DISPARO DE EVENTOS ESPECÍFICOS DO FUNIL
    console.debug(`[PIXEL DEBUG] Processando vista: ${currentView}`);

    switch (currentView) {
      case 'quiz':
        // Rastrear progresso no quiz
        if (window.fbq) window.fbq('trackCustom', 'Step_Quiz_Start');
        break;

      case 'sales':
        // Se o usuário veio do quiz, consideramos um LEAD qualificado
        if (eventData?.fromQuiz && window.fbq) {
          window.fbq('track', 'Lead', { 
            content_name: 'Diagnóstico Concluído',
            status: 'Qualified'
          });
        }
        break;

      case 'upsell':
        // Visualização da oferta VIP
        if (window.fbq) {
          window.fbq('track', 'ViewContent', { 
            content_name: 'Consultoria VIP Matheus Vieira', 
            content_category: 'Upsell', 
            value: 97.00, 
            currency: 'BRL' 
          });
        }
        break;

      case 'downsell':
        // Visualização da oferta de retenção
        if (window.fbq) {
          window.fbq('track', 'ViewContent', { 
            content_name: 'Dicas de Performance Downsell', 
            content_category: 'Downsell', 
            value: 9.90, 
            currency: 'BRL' 
          });
        }
        break;

      case 'thanks':
        // Evento de Compra Finalizada
        const purchaseValue = eventData?.value || 19.00;
        if (window.fbq) {
          window.fbq('track', 'Purchase', {
            value: purchaseValue,
            currency: 'BRL',
            content_type: 'product',
            content_ids: ['FORCA_PROIBIDA_01'],
            num_items: 1
          });
        }
        break;
    }
  }, [currentView, eventData]);

  return (
    <div className="hidden pointer-events-none aria-hidden">
      {/* Fallback para navegadores sem JS */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display:'none'}} 
          src={`https://www.facebook.com/tr?id=${PIXEL_IDS.FACEBOOK}&ev=PageView&noscript=1`} 
        />
      </noscript>
    </div>
  );
};

// Definições globais para evitar erros de TS
declare global {
  interface Window {
    fbq: any;
    gtag: any;
    ttq: any;
    _fbq: any;
  }
}

export default TrackingPixels;
