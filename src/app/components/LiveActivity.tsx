import { useEffect, useState } from 'react';
import { Zap, CheckCircle2, Clock } from 'lucide-react';

export function LiveActivity() {
  const [isPulse, setIsPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsPulse(prev => !prev);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-50 via-white to-blue-50 border-b border-slate-200/60 py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <Zap className={`w-5 h-5 text-emerald-600 transition-all duration-500 ${isPulse ? 'scale-100' : 'scale-90'}`} />
              <div className="absolute inset-0 w-5 h-5">
                <Zap className="w-5 h-5 text-emerald-400 animate-ping" />
              </div>
            </div>
            <span className="font-medium text-slate-700">
              Платформа работает
            </span>
          </div>
          
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="font-medium text-slate-700">
              Все офферы активны
            </span>
          </div>
          
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-slate-700">
              Ответ в течение часа
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
