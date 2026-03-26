import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Rocket } from 'lucide-react';
import { submitToSheet } from '../submitToSheet';

interface FormData {
  name: string;
  telegram: string;
  offers: string[];
  consent: boolean;
}

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Получаем UTM-метки из URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get('utm_source') || 'direct',
      utm_medium: urlParams.get('utm_medium') || 'none',
      utm_campaign: urlParams.get('utm_campaign') || 'none',
      utm_content: urlParams.get('utm_content') || 'none',
      utm_term: urlParams.get('utm_term') || 'none'
    };

    // Отправка в Яндекс.Метрику (если подключена)
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(108252817, 'reachGoal', 'registration_submit', {
        name: data.name,
        telegram: data.telegram,
        offers: data.offers.join(', '),
        ...utmData
      });
    }

    submitToSheet({
      form_type: 'main',
      name: data.name,
      contact: data.telegram,
      contactMethod: 'telegram',
      offers: data.offers.join(', '),
      ...utmData,
    });

    setIsSubmitted(true);
    reset();
    
    // Скрываем сообщение через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const offers = [
    'Аналитика данных',
    'Шины и диски',
    'Производство втулок',
    'Студия разработки'
  ];

  return (
    <section id="registration" className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm">
              <Rocket className="w-4 h-4" />
              Старт за 2 минуты
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
              Стать партнёром
            </h2>
            <p className="text-xl text-slate-300">
              Заполните форму — и мы пришлём вашу реферальную ссылку в Telegram
            </p>
          </div>
          
          {isSubmitted && (
            <div className="mb-8 p-6 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-2xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Заявка принята!</h3>
                  <p className="text-emerald-200">Мы получили ваши данные и свяжемся с вами в Telegram в течение часа. Проверьте сообщения!</p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-slate-800">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-3">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Укажите своё имя' })}
                  className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-slate-500 transition-all"
                  placeholder="Иван"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="telegram" className="block text-sm font-semibold text-slate-200 mb-3">
                  Telegram *
                </label>
                <input
                  type="text"
                  id="telegram"
                  {...register('telegram', { 
                    required: 'Укажите свой Telegram',
                    pattern: {
                      value: /^@?[a-zA-Z0-9_]{5,32}$/,
                      message: 'Неверный формат Telegram (например: @username)'
                    }
                  })}
                  className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-slate-500 transition-all"
                  placeholder="@username"
                />
                {errors.telegram && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    {errors.telegram.message}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-4">
                  Какие офферы вас интересуют? *
                </label>
                <div className="space-y-3">
                  {offers.map((offer, index) => (
                    <label key={index} className="flex items-center gap-4 cursor-pointer group p-4 rounded-xl hover:bg-slate-950/50 transition-all border border-transparent hover:border-slate-800">
                      <input
                        type="checkbox"
                        value={offer}
                        {...register('offers', { required: 'Выберите хотя бы один оффер' })}
                        className="w-5 h-5 text-emerald-600 bg-slate-950 border-slate-700 rounded focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                      />
                      <span className="text-slate-300 group-hover:text-white font-medium transition-colors">{offer}</span>
                    </label>
                  ))}
                </div>
                {errors.offers && (
                  <p className="mt-3 text-sm text-red-400 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    {errors.offers.message}
                  </p>
                )}
              </div>
              
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('consent', { required: 'Необходимо согласиться с условиями' })}
                    className="w-5 h-5 mt-0.5 text-emerald-600 bg-slate-950 border-slate-700 rounded focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  />
                  <span className="text-sm text-slate-300">
                    Я согласен с{' '}
                    <a
                      href="/privacy-policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 underline"
                    >
                      политикой конфиденциальности
                    </a>
                    {' '}и{' '}
                    <a
                      href="/user-agreement.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 underline"
                    >
                      пользовательским соглашением
                    </a>
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    {errors.consent.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/50 flex items-center justify-center gap-3"
              >
                <span>Получить доступ</span>
                <Send className="w-5 h-5" />
              </button>
              
              <div className="bg-gradient-to-r from-slate-950/50 to-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <p className="font-medium text-slate-300 mb-1">Что дальше?</p>
                    <p>Регистрация занимает 30 секунд. Первую ссылку получите сразу после одобрения в Telegram.</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
          
          <p className="text-center text-sm text-slate-500 mt-8">
            Отправляя форму, вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </div>
      
    </section>
  );
}