import { TrendingUp, Car, Cog, Code, ExternalLink, Search, SlidersHorizontal, Star, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { QuickRegisterModal } from './QuickRegisterModal';

interface Offer {
  icon: any;
  title: string;
  audience: string;
  reward: string;
  rewardType: string;
  rewardValue: number;
  color: string;
  image: string;
  link: string | null;
  featured?: boolean;
  category: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

const offers: Offer[] = [
  {
    icon: TrendingUp,
    title: 'Аналитика данных',
    audience: 'фаундеры, продакты, e-commerce',
    reward: '10%',
    rewardType: 'от суммы заказа',
    rewardValue: 15000,
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    link: 'https://fractlab.ru',
    featured: true,
    category: 'Аналитика и данные',
    tags: ['Высокая выплата', 'B2B', 'SaaS'],
    difficulty: 'medium'
  },
  {
    icon: Car,
    title: 'Шины и диски',
    audience: 'автовладельцы, автопарки',
    reward: '5%',
    rewardType: 'от суммы покупки',
    rewardValue: 2000,
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop',
    link: null,
    category: 'Товары и услуги',
    tags: ['B2C', 'E-commerce', 'Быстрая конверсия'],
    difficulty: 'easy'
  },
  {
    icon: Cog,
    title: 'Производство втулок',
    audience: 'заводы, производства, технические директора',
    reward: '5%',
    rewardType: 'от суммы заказа',
    rewardValue: 5000,
    color: 'violet',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    link: null,
    category: 'Производство',
    tags: ['B2B', 'Процент от заказа', 'Крупные сделки'],
    difficulty: 'hard'
  },
  {
    icon: Code,
    title: 'Студия разработки',
    audience: 'бизнес с задачами на IT, стартапы',
    reward: '7%',
    rewardType: 'от суммы заказа',
    rewardValue: 20000,
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
    link: null,
    featured: true,
    category: 'IT и разработка',
    tags: ['B2B', 'Высокая выплата', 'Процен от заказа'],
    difficulty: 'medium'
  }
];

const categories = ['Все офферы', 'Аналитика и данн��е', 'Товары и услуги', 'Производство', 'IT и разработка'];
const difficultyLabels = {
  easy: 'Легко',
  medium: 'Средне',
  hard: 'Сложно'
};

export function Offers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все офферы');
  const [sortBy, setSortBy] = useState<'reward' | 'default'>('default');
  const [showFilters, setShowFilters] = useState(false);

  const handleOfferClick = (offerTitle: string) => {
    setSelectedOffer(offerTitle);
    setIsModalOpen(true);
  };

  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Фильтрация и сортировка
  const filteredOffers = useMemo(() => {
    let result = [...offers];

    // Фильтр по категории
    if (selectedCategory !== 'Все офферы') {
      result = result.filter(offer => offer.category === selectedCategory);
    }

    // Поиск
    if (searchQuery) {
      result = result.filter(offer => 
        offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.audience.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Сортировка
    if (sortBy === 'reward') {
      result.sort((a, b) => b.rewardValue - a.rewardValue);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-600',
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-violet-500 to-violet-600',
    orange: 'from-orange-500 to-orange-600'
  };

  const difficultyColors = {
    easy: 'bg-green-100 text-green-700 border-green-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    hard: 'bg-red-100 text-red-700 border-red-200'
  };

  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
                💼 Проверенные партнёры
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 font-bold">
                Доступные офферы
              </h2>
              <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
                Выберите компанию, которая подходит вашей аудитории
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Выплаты через 7-14 дней после подтверждения сделки
              </div>
            </div>

            {/* Поиск и фильтры */}
            <div className="mb-8 space-y-4">
              {/* Поисковая строка */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Поиск по офферам, аудитории, тегам..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
                
                <div className="flex gap-3">
                  {/* Кнопка фильтров */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-6 py-4 rounded-xl font-medium transition-all ${
                      showFilters 
                        ? 'bg-emerald-500 text-white shadow-lg' 
                        : 'bg-white text-slate-700 border border-slate-300 hover:border-emerald-300'
                    }`}
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    <span className="hidden md:inline">Фильтры</span>
                  </button>

                  {/* Сортировка */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-6 py-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700 font-medium cursor-pointer"
                  >
                    <option value="default">По умолчанию</option>
                    <option value="reward">По выплате ↓</option>
                  </select>
                </div>
              </div>

              {/* Панель фильтров */}
              {showFilters && (
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg animate-in slide-in-from-top-4 duration-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="w-5 h-5 text-slate-600" />
                    <h3 className="font-semibold text-slate-900">Категории</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          selectedCategory === category
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Результаты поиска */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-slate-600">
                Найдено офферов: <span className="font-bold text-slate-900">{filteredOffers.length}</span>
              </p>
              {(searchQuery || selectedCategory !== 'Все офферы') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Все офферы');
                  }}
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-sm underline"
                >
                  Сбросить фильтры
                </button>
              )}
            </div>
            
            {/* Карточки офферов */}
            {filteredOffers.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {filteredOffers.map((offer, index) => (
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-200 transition-all hover:shadow-2xl shadow-lg hover:-translate-y-1 flex flex-col relative"
                  >
                    {/* Бейджи */}
                    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 items-end">
                      {offer.featured && (
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          ХИТ
                        </div>
                      )}
                      <div className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyColors[offer.difficulty]}`}>
                        {difficultyLabels[offer.difficulty]}
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={offer.image} 
                        alt={offer.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                      <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[offer.color as keyof typeof colorClasses]} flex items-center justify-center shadow-lg`}>
                        <offer.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      {/* Заголовок */}
                      <div className="mb-3 h-14 flex items-start">
                        {offer.link ? (
                          <a 
                            href={offer.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors inline-flex items-center gap-2 group/link"
                          >
                            {offer.title}
                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <h3 className="text-xl font-bold text-slate-900">
                            {offer.title}
                          </h3>
                        )}
                      </div>

                      {/* Категория */}
                      <div className="mb-3">
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
                          {offer.category}
                        </span>
                      </div>

                      {/* Теги */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {offer.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        {/* Аудитория */}
                        <div className="mb-6">
                          <div className="text-xs text-slate-500 mb-1.5 uppercase tracking-wider font-medium">Кому рекомендовать</div>
                          <p className="text-sm text-slate-700 leading-relaxed">{offer.audience}</p>
                        </div>
                        
                        {/* Вознаграждение */}
                        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 p-4 rounded-xl flex flex-col justify-center">
                          <div className="text-xs text-emerald-700 mb-1.5 uppercase tracking-wider font-medium">Вознаграждение</div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-slate-900">{offer.reward}</span>
                            <span className="text-sm text-slate-600">{offer.rewardType}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleOfferClick(offer.title)}
                        className={`mt-6 w-full bg-gradient-to-r ${colorClasses[offer.color as keyof typeof colorClasses]} text-white px-6 py-3.5 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl`}
                      >
                        Хочу рекомендовать
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Офферы не найдены</h3>
                <p className="text-slate-600 mb-6">Попробуйте изменить параметры поиска или фильтры</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Все офферы');
                  }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
            
            {/* CTA блок */}
            <div className="text-center bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-slate-700">
                Не нашли подходящий оффер?{' '}
                <button onClick={scrollToForm} className="text-emerald-600 font-semibold hover:text-emerald-700 underline decoration-emerald-500/30 underline-offset-4 hover:decoration-emerald-500 transition-colors">
                  Напишите нам
                </button>
                {' '}— добавим новые компании под вашу аудитория
              </p>
            </div>

            {/* Блок для компаний */}
            <div className="mt-6 text-center bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
              <p className="text-slate-200">
                <span className="text-white font-semibold">Владелец бизнеса?</span> Хотите привлечь клиентов через рекомендации?{' '}
                <button onClick={scrollToForm} className="text-emerald-400 font-semibold hover:text-emerald-300 underline decoration-emerald-500/30 underline-offset-4 hover:decoration-emerald-500 transition-colors">
                  Оставьте заявку
                </button>
                {' '}— расскажем о размещении вашего оффера
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuickRegisterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedOffer={selectedOffer}
      />
    </>
  );
}