
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import { Truck, Banknote, ShieldCheck, Zap, Camera, PackageOpen, ChevronRight } from 'lucide-react';
import { CATEGORY_DETAILS } from '../constants';
import { CategoryType } from '../types';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-12">
      <SEO 
        title="Скупка радиодеталей RadioGold | Цены выше рынка"
        description="Прием радиодеталей в Москве. КМ, транзисторы, разъемы. Актуальный прайс-лист. Оплата сразу."
      />

      {/* COMPACT HERO SECTION (Like Industrial Sites) */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1 text-left">
                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded font-bold text-xs mb-4 uppercase tracking-wide">
                        Работаем с 2010 года
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-dark-900 mb-4 leading-tight">
                        Скупка радиодеталей <br/>
                        <span className="text-primary-600">на 15% дороже</span> конкурентов
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 max-w-xl">
                        Честная оценка по бирже LME. Выезд курьера по Москве. 
                        Мгновенная оплата наличными или на карту.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link to="/catalog">
                            <Button size="lg" className="px-8 shadow-lg shadow-primary-500/20">Смотреть цены</Button>
                        </Link>
                        <Link to="/delivery">
                            <Button variant="outline" size="lg" className="px-8 border-gray-300 hover:border-primary-500">Отправить почтой</Button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-[450px]">
                    <img 
                        src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800" 
                        alt="Скупка деталей" 
                        className="rounded-xl shadow-2xl object-cover h-[300px] w-full"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* DENSE CATEGORY GRID (Centrloma Style) */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900">Популярные категории</h2>
            <Link to="/catalog" className="text-primary-600 font-bold text-sm hover:underline flex items-center">
                Весь каталог <ChevronRight className="w-4 h-4" />
            </Link>
        </div>
        
        {/* Grid with explicit borders and white bg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Object.values(CategoryType).slice(0, 10).map((cat) => (
                <Link 
                    key={cat}
                    to="/catalog"
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary-500 hover:shadow-lg transition-all group flex flex-col items-center text-center h-full"
                >
                    <div className="w-full h-32 mb-3 overflow-hidden rounded bg-gray-50 flex items-center justify-center">
                        <img 
                            src={CATEGORY_DETAILS[cat]?.image || 'https://placehold.co/200'} 
                            alt={cat}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm group-hover:text-primary-600 leading-tight">
                        {cat}
                    </h3>
                </Link>
            ))}
        </div>
      </section>

      {/* TRUST BLOCK (Compact) */}
      <section className="bg-white py-12 border-y border-gray-200">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                {[
                    {icon: Banknote, title: "Высокие цены", text: "Прямые договора с заводами"},
                    {icon: ShieldCheck, title: "Честные весы", text: "Взвешиваем при вас до 0.01г"},
                    {icon: Truck, title: "Выезд курьера", text: "Бесплатно от 5000 руб"},
                    {icon: Zap, title: "Оплата сразу", text: "Наличные или карта на месте"}
                ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-dark-900">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section className="container mx-auto px-4 py-12">
          <div className="bg-dark-900 rounded-2xl p-6 md:p-10 text-white shadow-2xl flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Бесплатная оценка по фото</h2>
                  <p className="text-gray-300 mb-6">
                      Не хотите искать в каталоге? Пришлите фото деталей в WhatsApp или Telegram. 
                      Наш эксперт ответит в течение 5 минут и назовет точную сумму.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                          <Camera className="w-6 h-6 text-primary-500" />
                          <div>
                              <div className="font-bold">WhatsApp</div>
                              <div className="text-xs text-gray-400">+7 (999) 123-45-67</div>
                          </div>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                          <PackageOpen className="w-6 h-6 text-primary-500" />
                          <div>
                              <div className="font-bold">Telegram</div>
                              <div className="text-xs text-gray-400">@radiogold_buy</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="lg:w-1/3 bg-white text-gray-900 rounded-xl p-1">
                  <LeadForm />
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;
