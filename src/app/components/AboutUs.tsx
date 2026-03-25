import { Users, Target, Shield, Sparkles } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              О платформе
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
              Кто мы такие
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Объединяем бизнес и людей с полезными связями
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-emerald-500/20">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Для партнёров</h3>
              <p className="text-slate-400 leading-relaxed">
                Монетизируйте свои связи без вложений и рисков. Стабильный доход от рекомендаций.
              </p>
            </div>
            
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-500/20">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Для бизнеса</h3>
              <p className="text-slate-400 leading-relaxed">
                Получайте качественных клиентов через личные рекомендации. Платите только за результат.
              </p>
            </div>
            
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-violet-500/20">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/30">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Прозрачность</h3>
              <p className="text-slate-400 leading-relaxed">
                Все условия понятны и зафиксированы заранее. Полный контроль над процессом.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Фото основателя */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center shadow-2xl shadow-emerald-500/20 border-2 border-emerald-500/30">
                    <span className="text-4xl font-bold text-white select-none">С</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">София</h3>
                  <p className="text-emerald-400 font-medium">ex-VK / Tinkoff • МФТИ</p>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  <strong className="text-white">СвязиВДело</strong> — это платформа, которая помогает людям зарабатывать 
                  на том, что они и так делают: рекомендуют хорошие продукты и услуги своим знакомым. 
                  Мы работаем только с проверенными компаниями и гарантируем честные выплаты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}