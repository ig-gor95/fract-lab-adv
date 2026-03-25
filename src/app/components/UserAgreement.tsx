import { X } from 'lucide-react';

interface UserAgreementProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserAgreement({ isOpen, onClose }: UserAgreementProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Пользовательское соглашение</h2>
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
              Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между платформой «СвязиВДело» (далее — Платформа) и пользователем при использовании сервиса партнерских рекомендаций.
            </p>
            <p>
              Регистрируясь на Платформе, пользователь подтверждает, что ознакомился с условиями настоящего Соглашения и принимает их в полном объеме.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Предмет соглашения</h3>
            <p className="mb-3">
              Платформа предоставляет пользователю возможность получать вознаграждение за рекомендации проверенных компаний-партнеров своим знакомым и контактам.
            </p>
            <p>
              Пользователь получает доступ к реферальным ссылкам и материалам для продвижения партнерских предложений (офферов).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Права и обязанности пользователя</h3>
            <div className="mb-4">
              <p className="font-semibold text-slate-900 mb-2">Пользователь имеет право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать реферальные ссылки на партнерские офферы</li>
                <li>Получать вознаграждение за успешные рекомендации согласно условиям каждого оффера</li>
                <li>Запрашивать информацию о статусе своих рекомендаций</li>
                <li>Прекратить сотрудничество в любой момент</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-2">Пользователь обязуется:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставлять достоверную информацию при регистрации</li>
                <li>Не использовать спам и недобросовестные методы продвижения</li>
                <li>Не создавать искусственный трафик и фиктивные рекомендации</li>
                <li>Соблюдать законодательство РФ при продвижении офферов</li>
                <li>Не дискредитировать компании-партнеры</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">4. Условия выплат</h3>
            <p className="mb-3">
              Вознаграждение выплачивается в соответствии с условиями каждого конкретного оффера после подтверждения совершения целевого действия (покупки, оформления услуги и т.д.).
            </p>
            <p className="mb-3">
              Выплаты производятся в течение 7-14 дней после подтверждения сделки компанией при достижении минимальной суммы для вывода.
            </p>
            <p>
              Платформа оставляет за собой право отклонить выплату в случае выявления нарушений условий настоящего Соглашения.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">5. Ответственность</h3>
            <p className="mb-3">
              Платформа не несет ответственности за качество товаров и услуг компаний-партнеров. Все претензии по качеству должны направляться напрямую партнерам.
            </p>
            <p>
              Пользователь несет полную ответственность за методы продвижения реферальных ссылок и соответствие своих действий законодательству РФ.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">6. Прекращение сотрудничества</h3>
            <p className="mb-3">
              Платформа оставляет за собой право прекратить сотрудничество с пользователем в случае:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Нарушения условий настоящего Соглашения</li>
              <li>Использования запрещенных методов продвижения</li>
              <li>Предоставления недостоверной информации</li>
              <li>Создания искусственного трафика</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">7. Изменение условий</h3>
            <p>
              Платформа вправе в одностороннем порядке изменять условия настоящего Соглашения. Новая редакция вступает в силу с момента ее размещения на сайте.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">8. Заключительные положения</h3>
            <p>
              Все споры и разногласия решаются путем переговоров. В случае невозможности достижения согласия, споры разрешаются в соответствии с законодательством Российской Федерации.
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