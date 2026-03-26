import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { submitToSheet } from '../submitToSheet';

interface QuickRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOffer?: string;
}

interface FormData {
  name: string;
  contact: string;
  contactMethod: 'telegram' | 'whatsapp' | 'phone';
  consent: boolean;
}

export function QuickRegisterModal({ isOpen, onClose, preselectedOffer }: QuickRegisterModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      contactMethod: 'telegram'
    }
  });

  if (!isOpen) return null;

  const onSubmit = (data: FormData) => {
    // Получаем UTM-метки из URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get('utm_source') || 'direct',
      utm_medium: urlParams.get('utm_medium') || 'none',
      utm_campaign: urlParams.get('utm_campaign') || 'none',
    };

    // Отправка в Яндекс.Метрику
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(108252817, 'reachGoal', 'quick_registration', {
        name: data.name,
        contact: data.contact,
        contactMethod: data.contactMethod,
        offer: preselectedOffer,
        ...utmData
      });
    }

    submitToSheet({
      form_type: 'quick',
      name: data.name,
      contact: data.contact,
      contactMethod: data.contactMethod,
      offers: preselectedOffer || '',
      ...utmData,
    });

    setIsSubmitted(true);
    reset();
    
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Быстрая заявка</h3>
            {preselectedOffer && (
              <p className="text-sm text-emerald-600 mt-1">Оффер: {preselectedOffer}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Заявка отправлена!</h4>
              <p className="text-slate-600">
                Мы свяжемся с вами в течение часа и пришлём всё необходимое для старта
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="quick-name" className="block text-sm font-medium text-slate-700 mb-2">
                  Как вас зовут? *
                </label>
                <input
                  type="text"
                  id="quick-name"
                  {...register('name', { required: 'Укажите своё имя' })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Иван"
                  autoFocus
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Как с вами связаться? *
                </label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <label className="relative">
                    <input
                      type="radio"
                      value="telegram"
                      {...register('contactMethod')}
                      className="peer sr-only"
                    />
                    <div className="px-3 py-2 border-2 border-slate-300 rounded-lg text-center cursor-pointer peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 transition-all text-sm font-medium">
                      Telegram
                    </div>
                  </label>
                  <label className="relative">
                    <input
                      type="radio"
                      value="whatsapp"
                      {...register('contactMethod')}
                      className="peer sr-only"
                    />
                    <div className="px-3 py-2 border-2 border-slate-300 rounded-lg text-center cursor-pointer peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 transition-all text-sm font-medium">
                      WhatsApp
                    </div>
                  </label>
                  <label className="relative">
                    <input
                      type="radio"
                      value="phone"
                      {...register('contactMethod')}
                      className="peer sr-only"
                    />
                    <div className="px-3 py-2 border-2 border-slate-300 rounded-lg text-center cursor-pointer peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 transition-all text-sm font-medium">
                      Звонок
                    </div>
                  </label>
                </div>

                <input
                  type="text"
                  {...register('contact', { 
                    required: 'Укажите контакт для связи',
                  })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="@username или номер телефона"
                />
                {errors.contact && (
                  <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('consent', { required: 'Необходимо согласиться с условиями' })}
                    className="w-4 h-4 mt-0.5 text-emerald-600 bg-white border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  />
                  <span className="text-sm text-slate-700">
                    Я согласен с{' '}
                    <a
                      href="/privacy-policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 underline"
                    >
                      политикой конфиденциальности
                    </a>
                    {' '}и{' '}
                    <a
                      href="/user-agreement.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 underline"
                    >
                      пользовательским соглашением
                    </a>
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
              >
                <span>Отправить заявку</span>
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-slate-500 text-center">
                Ответим в течение часа • Полностью бесплатно
              </p>
            </form>
          )}
        </div>
      </div>
      
    </div>
  );
}