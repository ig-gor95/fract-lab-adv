import { Search, UserPlus, Wallet, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Выбираете компанию',
    description: 'Изучаете доступные офферы и выбираете то, что подойдёт вашим знакомым. Это займёт пару минут.'
  },
  {
    icon: UserPlus,
    number: '02',
    title: 'Делаете рекомендацию',
    description: 'Рассказываете знакомому о продукте удобным способом: сообщением, звонком или при встрече.'
  },
  {
    icon: Wallet,
    number: '03',
    title: 'Получаете выплату',
    description: 'После успешной сделки получаете вознаграждение на карту. Быстро, прозрачно, без скрытых условий.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
              ⚡ Простой процесс
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 font-bold">
              Как это работает
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Три простых шага до первой выплаты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-200 transition-all hover:shadow-xl shadow-lg h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-emerald-500/30 rotate-3 group-hover:rotate-6 transition-transform">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
