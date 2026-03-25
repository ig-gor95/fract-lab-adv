import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Это правда бесплатно? Никаких скрытых платежей?',
    answer: 'Да, абсолютно бесплатно. Вы не платите ни копейки — ни за регистрацию, ни за доступ к офферам. Мы зарабатываем на комиссии с компаний, а не с партнёров.'
  },
  {
    question: 'Когда я получу деньги?',
    answer: 'После того как компания подтвердит сделку с вашим клиентом. Обычно это 7-14 дней. Выплаты делаем на карту — как удобно.'
  },
  {
    question: 'А если мой знакомый не купит?',
    answer: 'Ничего страшного — вы ничего не теряете. Платим только за реальные сделки. Не купил сейчас — возможно купит позже, а вы всё равно будете в системе.'
  },
  {
    question: 'Мне нужно быть продажником?',
    answer: 'Нет. Не нужно звонить, впаривать, уговаривать. Просто расскажите знакомому о продукте, который ему реально подходит. Если тема зайдёт — он сам купит.'
  },
  {
    question: 'Сколько можно заработать?',
    answer: 'Зависит от ваших связей и активности. Кто-то приводит 1-2 клиентов в месяц и получает 15-20 тысяч. Кто-то делает 5-10 сделок и получает 100+ тысяч. Без потолка.'
  },
  {
    question: 'Как вы проверяете, что клиент мой?',
    answer: 'Когда регистрируетесь, получаете уникальную реферальную ссылку или промокод. Клиент её использует — система автоматом привязывает его к вам. Всё прозрачно.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 font-bold">
              Частые вопросы
            </h2>
            <p className="text-xl text-slate-600">
              Отвечаем на всё, что обычно спрашивают
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-left group"
                >
                  <span className="font-semibold text-slate-900 text-lg pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-blue-200 transition-all ${openIndex === index ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' : ''}`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-all ${
                        openIndex === index ? 'rotate-180 text-white' : 'text-emerald-600'
                      }`}
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <p className="text-slate-700 leading-relaxed text-lg bg-gradient-to-br from-slate-50 to-transparent p-6 rounded-xl border-l-4 border-emerald-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}