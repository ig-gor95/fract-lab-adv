import { useEffect } from 'react';
import { Header } from './components/Header';
import { LiveActivity } from './components/LiveActivity';
import { Offers } from './components/Offers';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { WhyNotPyramid } from './components/WhyNotPyramid';
import { FAQ } from './components/FAQ';
import { AboutUs } from './components/AboutUs';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  useEffect(() => {
    // Инициализация Яндекс.Метрики
    // Замените 12345678 на ваш реальный ID счетчика
    (function(m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
      m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * (new Date() as any);
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(12345678, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
    }

    // Логирование UTM-меток при загрузке страницы
    const urlParams = new URLSearchParams(window.location.search);
    const hasUTM = Array.from(urlParams.keys()).some(key => key.startsWith('utm_'));
    
    if (hasUTM) {
      console.log('UTM метки обнаружены:', {
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_content: urlParams.get('utm_content'),
        utm_term: urlParams.get('utm_term')
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <LiveActivity />
      <Offers />
      <HowItWorks />
      <Testimonials />
      <WhyNotPyramid />
      <FAQ />
      <AboutUs />
      <RegistrationForm />
      
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-2xl font-bold text-white mb-2">СвязиВДело</div>
              <p className="text-slate-500">Зарабатывайте на своих связях честно и прозрачно</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
              <div className="text-center">
                <div className="font-semibold text-white mb-2">Партнёрам</div>
                <p className="text-slate-500">Без вложений и рисков</p>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white mb-2">Выплаты</div>
                <p className="text-slate-500">После сделки на карту</p>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white mb-2">Поддержка</div>
                <p className="text-slate-500">Telegram 24/7</p>
              </div>
            </div>
            
            <div className="text-center text-sm border-t border-slate-800 pt-8">
              <p>© 2026 СвязиВДело. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Noscript для Яндекс.Метрики */}
      <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/12345678" 
            style={{ position: 'absolute', left: '-9999px' }} 
            alt="" 
          />
        </div>
      </noscript>
    </div>
  );
}

export default App;