
import React, { useState, useMemo } from 'react';
import { COMPONENT_CATALOG, CATEGORY_DETAILS, SEO_DESCRIPTIONS } from '../constants';
import { CategoryType } from '../types';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Search, Calculator, Filter, ArrowLeft } from 'lucide-react';

const Catalog: React.FC = () => {
  // State: 'all' means showing Categories Grid. Specific category string means showing items.
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Подсчет количества товаров в каждой категории
  const categoriesWithCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    COMPONENT_CATALOG.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Фильтрация товаров (если выбрана категория)
  const filteredItems = useMemo(() => {
    return COMPONENT_CATALOG.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-12">
      <SEO 
        title={activeCategory === 'all' ? "Каталог радиодеталей | Все цены" : `Скупка ${activeCategory} | Цены 2024`}
        description={activeCategory === 'all' ? "Полный каталог скупки радиодеталей с фото." : `Актуальные цены на ${activeCategory}. Скупка дорого в Москве.`}
      />

      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 mb-8 shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
             <Link to="/" className="hover:text-primary-600">Главная</Link>
             <span>/</span>
             {activeCategory !== 'all' && (
                 <>
                    <button onClick={() => setActiveCategory('all')} className="hover:text-primary-600">Каталог</button>
                    <span>/</span>
                 </>
             )}
             <span className="text-gray-800 font-medium">{activeCategory === 'all' ? 'Каталог' : activeCategory}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             {activeCategory === 'all' ? 'Каталог радиодеталей' : activeCategory}
          </h1>
          <p className="text-gray-500 max-w-3xl">
            {activeCategory === 'all' 
                ? 'Выберите категорию, чтобы посмотреть детальный прайс-лист. Мы покупаем радиодетали по курсу Лондонской биржи.'
                : 'Цены указаны за новые и б/у детали. Окончательная стоимость зависит от года выпуска и состояния.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* VIEW 1: CATEGORY GRID (VITRINA) */}
        {activeCategory === 'all' && searchQuery === '' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Object.values(CategoryType).map((cat) => (
                    <div 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                    >
                        {/* Image Container */}
                        <div className="h-56 overflow-hidden bg-gray-100 relative">
                            <img 
                                src={CATEGORY_DETAILS[cat]?.image || 'https://placehold.co/400x300?text=No+Image'} 
                                alt={cat}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Dark gradient for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            
                            <div className="absolute bottom-5 left-5 text-white z-10">
                                <h3 className="text-xl font-bold tracking-tight mb-1">{cat}</h3>
                                <span className="text-[10px] uppercase tracking-wider font-bold bg-primary-600 px-2 py-1 rounded text-white inline-block">
                                    {categoriesWithCounts[cat] || 0} позиций
                                </span>
                            </div>
                        </div>
                        {/* Description */}
                        <div className="p-5">
                            <p className="text-sm text-gray-500 line-clamp-2 h-10">
                                {CATEGORY_DETAILS[cat]?.desc}
                            </p>
                            <div className="mt-4 flex items-center text-primary-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                                Перейти в каталог <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            /* VIEW 2: PRODUCT LIST WITH SIDEBAR */
            <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
                
                {/* Sidebar */}
                <aside className="lg:w-72 shrink-0">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
                        <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                            <span className="font-bold text-gray-800 flex items-center gap-2">
                                <Filter className="w-4 h-4" /> Категории
                            </span>
                            {activeCategory !== 'all' && (
                                <button 
                                    onClick={() => setActiveCategory('all')} 
                                    className="text-xs text-primary-600 hover:underline"
                                >
                                    Сбросить
                                </button>
                            )}
                        </div>
                        <div className="max-h-[400px] lg:max-h-none overflow-y-auto">
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`w-full text-left px-4 py-3 text-sm flex justify-between items-center transition-colors border-l-4
                                ${activeCategory === 'all' 
                                    ? 'bg-primary-50 text-primary-700 border-primary-500 font-bold' 
                                    : 'text-gray-600 hover:bg-gray-50 border-transparent hover:text-primary-600'
                                }`}
                            >
                                <span>Все категории</span>
                            </button>
                            {Object.values(CategoryType).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`w-full text-left px-4 py-3 text-sm flex justify-between items-center transition-colors border-l-4
                                    ${activeCategory === cat 
                                        ? 'bg-primary-50 text-primary-700 border-primary-500 font-bold' 
                                        : 'text-gray-600 hover:bg-gray-50 border-transparent hover:text-primary-600'
                                    }`}
                                >
                                    <span>{cat}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${activeCategory === cat ? 'bg-primary-200 text-primary-800' : 'bg-gray-100 text-gray-400'}`}>
                                        {categoriesWithCounts[cat] || 0}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Products */}
                <div className="flex-1">
                    {/* Search & Back Button */}
                    <div className="flex gap-4 mb-6">
                        {activeCategory !== 'all' && (
                            <button 
                                onClick={() => setActiveCategory('all')}
                                className="px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700 font-medium shrink-0"
                            >
                                <ArrowLeft className="w-5 h-5" /> Назад
                            </button>
                        )}
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder={`Поиск в категории ${activeCategory === 'all' ? 'Каталог' : activeCategory}...`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    {filteredItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="group bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full overflow-hidden">
                                    <div className="aspect-[4/3] bg-white p-6 relative flex items-center justify-center border-b border-gray-100 overflow-hidden">
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                                {item.category}
                                            </span>
                                        </div>
                                        <img 
                                            src={item.imagePlaceholder} 
                                            alt={item.name} 
                                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-primary-600 transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                                            {item.description}
                                        </p>
                                        <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                                            <div>
                                                <div className="text-xs text-gray-400 font-medium">Цена скупки:</div>
                                                <div className="text-xl font-extrabold text-gray-900">
                                                    {item.pricePerUnit.toLocaleString()} ₽ 
                                                    <span className="text-sm font-normal text-gray-400 ml-1">/ {item.unit}</span>
                                                </div>
                                            </div>
                                            <Link to="/calculator">
                                                <button className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors" title="Добавить в расчет">
                                                    <Calculator className="w-5 h-5" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-gray-200 border-dashed">
                             <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                             </div>
                             <h3 className="text-lg font-bold text-gray-900">Ничего не найдено</h3>
                             <p className="text-gray-500">Попробуйте изменить поиск.</p>
                             <button onClick={() => setSearchQuery('')} className="mt-4 text-primary-600 font-medium hover:underline">
                                Очистить поиск
                             </button>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* SEO TEXT BLOCK (Visible only inside category) */}
        {activeCategory !== 'all' && SEO_DESCRIPTIONS[activeCategory as CategoryType] && (
            <div className="mt-16 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
                <div 
                    className="prose prose-sm text-gray-600 max-w-none"
                    dangerouslySetInnerHTML={{ __html: SEO_DESCRIPTIONS[activeCategory as CategoryType] }} 
                />
            </div>
        )}

      </div>
    </div>
  );
};

export default Catalog;
