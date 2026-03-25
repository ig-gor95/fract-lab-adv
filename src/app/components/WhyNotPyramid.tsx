import { CheckCircle2, DollarSign, BarChart3, Shield } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Рекомендуете реальные продукты',
    description: 'Только проверенные компании с реальными услугами. Никаких фейковых товаров или сомнительных схем.'
  },
  {
    icon: DollarSign,
    title: 'Платим после закрытой сделки',
    description: 'Вознаграждение только за реальные результаты. Компания получила клиента — вы получаете деньги.'
  },
  {
    icon: BarChart3,
    title: 'Полная прозрачность процесса',
    description: 'Фиксируем каждый лид в Telegram и уведомляем о статусе: получен, переговоры, сделка закрыта.'
  }
];

export function WhyNotPyramid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
              <Shield className="w-4 h-4" />
              Гарантии и прозрачность
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 font-bold">
              Честная работа
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Прозрачные условия и никаких скрытых схем
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {reasons.map((reason, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-200 transition-all hover:shadow-xl shadow-lg h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-emerald-200 shadow-xl">
            <div className="flex items-start gap-6">
              <div className="hidden md:block w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Работаем по договору
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">СвязиВДело</strong> — это платформа, которая помогает людям зарабатывать 
                  на том, что они и так делают: рекомендуют хорошие продукты и услуги своим знакомым. 
                  Все условия фиксируются заранее, выплаты контролируются, а процесс полностью прозрачен.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
