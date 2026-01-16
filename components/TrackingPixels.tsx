
import React, { useEffect } from 'react';

/**
 * CONFIGURAÇÃO DE RASTREAMENTO OFICIAL
 * Pixel ID: 2332198060633333
 */
const PIXEL_ID = '2332198060633333';

const TrackingPixels: React.FC<{
  currentView: 'sales' | 'thanks' | 'quiz' | 'upsell' | 'downsell';
  eventData?: any;
}> = ({ currentView, eventData }) => {
  
  useEffect(() => {
    // Inicialização segura do Pixel para TypeScript
    const initPixel = () => {
      if (window.fbq) return;

      const n = function(...args: any[]) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      } as any;

      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];

      const t = document.createElement('script');
      t.async = true;
      t.src = 'https://connect.facebook.net/en_US/fbevents.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode?.insertBefore(t, s);
      
      window.fbq = n;
      window.fbq('init', PIXEL_ID);
    };

    initPixel();

    // Track PageView em cada mudança de view
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Eventos específicos por etapa do funil
    switch (currentView) {
      case 'quiz':
        if (window.fbq) window.fbq('trackCustom', 'Step_Quiz_Start');
        break;
      case 'sales':
        if (window.fbq) {
          window.fbq('track', 'ViewContent');
          if (eventData?.fromQuiz) {
            window.fbq('track', 'Lead', { content_name: 'Diagnóstico Concluído' });
          }
        }
        break;
      case 'upsell':
        if (window.fbq) {
          window.fbq('track', 'ViewContent', { content_category: 'Upsell', value: 97.0, currency: 'BRL' });
        }
        break;
      case 'downsell':
        if (window.fbq) {
          window.fbq('track', 'ViewContent', { content_category: 'Downsell', value: 9.90, currency: 'BRL' });
        }
        break;
      case 'thanks':
        if (window.fbq) {
          window.fbq('track', 'Purchase', {
            value: eventData?.value || 19.90,
            currency: 'BRL',
            content_ids: ['FORCA_PROIBIDA_01']
          });
        }
        break;
    }
  }, [currentView, eventData]);

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }} 
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`} 
      />
    </noscript>
  );
};

// Extensão de tipos global
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default TrackingPixels;
