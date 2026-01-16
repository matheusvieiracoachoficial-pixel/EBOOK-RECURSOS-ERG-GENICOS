
import React, { useEffect } from 'react';

/**
 * CONFIGURAÇÃO DE RASTREAMENTO OFICIAL
 * Pixel ID: 2332198060633333
 */
const PIXEL_ID = '2332198060633333';

// Extensão de tipos global para evitar erros de build
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const TrackingPixels: React.FC<{
  currentView: 'sales' | 'thanks' | 'quiz' | 'upsell' | 'downsell';
  eventData?: any;
}> = ({ currentView, eventData }) => {
  
  useEffect(() => {
    // Inicialização segura do Pixel
    const initPixel = () => {
      if (typeof window === 'undefined') return;
      if (window.fbq) return;

      const f = window;
      const b = document;
      const e = 'script';
      const v = 'https://connect.facebook.net/en_US/fbevents.js';

      const n: any = function(...args: any[]) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      };

      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];

      const t = b.createElement(e) as HTMLScriptElement;
      t.async = !0;
      t.src = v;
      
      const s = b.getElementsByTagName(e)[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      }
      
      f.fbq = n;
      f.fbq('init', PIXEL_ID);
    };

    initPixel();

    // Track PageView em cada mudança de view
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Eventos específicos por etapa do funil
    if (window.fbq) {
      switch (currentView) {
        case 'quiz':
          window.fbq('trackCustom', 'Step_Quiz_Start');
          break;
        case 'sales':
          window.fbq('track', 'ViewContent');
          if (eventData?.fromQuiz) {
            window.fbq('track', 'Lead', { content_name: 'Diagnóstico Concluído' });
          }
          break;
        case 'upsell':
          window.fbq('track', 'ViewContent', { content_category: 'Upsell', value: 97.0, currency: 'BRL' });
          break;
        case 'downsell':
          window.fbq('track', 'ViewContent', { content_category: 'Downsell', value: 9.90, currency: 'BRL' });
          break;
        case 'thanks':
          window.fbq('track', 'Purchase', {
            value: eventData?.value || 19.90,
            currency: 'BRL',
            content_ids: ['FORCA_PROIBIDA_01']
          });
          break;
      }
    }
  }, [currentView, eventData]);

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }} 
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`} 
        alt="fb-pixel"
      />
    </noscript>
  );
};

export default TrackingPixels;
