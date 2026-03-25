import { Sparkles, Rocket } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
              🚀 Запуск платформы
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 font-bold">
              Станьте первым партнёром
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Платформа только запускается — будьте в числе первых
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl border border-emerald-400">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Специальные условия для первых партнёров
                </h3>
                <p className="text-emerald-50 text-lg mb-6 leading-relaxed">
                  Регистрируйтесь сейчас и получите повышенный бонус на старте. Помогите нам протестировать платформу и станьте частью команды с самого начала.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
                    <div className="text-sm text-emerald-100 mb-1">Преимущество</div>
                    <div className="font-bold text-xl">Приоритетная поддержка</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
                    <div className="text-sm text-emerald-100 mb-1">Бонус</div>
                    <div className="font-bold text-xl">Увеличенные выплаты</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}