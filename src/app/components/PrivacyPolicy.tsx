import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Политика конфиденциальности</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6 text-slate-700">
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Общие положения</h3>
            <p className="mb-3">
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, которую платформа «СвязиВДело» может получить о пользователе во время использования сайта.
            </p>
            <p>
              Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Персональные данные пользователей</h3>
            <p className="mb-3">Под персональными данными в настоящей Политике понимается:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя пользователя</li>
              <li>Контактная информация (номер телефона, Telegram, WhatsApp)</li>
              <li>Информация о выбранных офферах</li>
              <li>UTM-метки и данные о переходах на сайт</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Цели сбора персональных данных</h3>
            <p className="mb-3">Персональные данные пользователя используются в целях:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Связи с пользователем для предоставления партнерских материалов</li>
              <li>Формирования реферальных ссылок</li>
              <li>Расчета и выплаты вознаграждений</li>
              <li>Улучшения качества услуг и пользовательского опыта</li>
              <li>Аналитики эффективности рекламных кампаний</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">4. Обработка персональных данных</h3>
            <p className="mb-3">
              Обработка персональных данных осуществляется на основе принципов законности и справедливости. Мы обрабатываем только те данные, которые необходимы для достижения указанных целей.
            </p>
            <p>
              Персональные данные хранятся в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">5. Защита персональных данных</h3>
            <p>
              Мы применяем необходимые и достаточные организационные и технические меры для защиты персональных данных пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">6. Передача данных третьим лицам</h3>
            <p className="mb-3">
              Мы не передаем персональные данные пользователей третьим лицам, за исключением случаев:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Пользователь явно выразил свое согласие на такие действия</li>
              <li>Передача необходима для использования пользователем определенной услуги</li>
              <li>Передача предусмотрена российским или иным применимым законодательством</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">7. Изменение Политики конфиденциальности</h3>
            <p>
              Мы оставляем за собой право в любое время изменять настоящую Политику. При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента ее размещения.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">8. Обратная связь</h3>
            <p>
              Все предложения или вопросы по поводу настоящей Политики следует направлять через форму обратной связи на сайте.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Дата последнего обновления: 25 марта 2026 г.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
