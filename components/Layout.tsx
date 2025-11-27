
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Cpu, MapPin, Clock, Mail, Search, Calculator, User, MessageCircle, Send, Instagram, Video, ArrowRight, Grid, ShoppingCart, ChevronDown } from 'lucide-react';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';
import PriceTicker from './PriceTicker';
import GlobalSearch from './GlobalSearch';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    window.addEventListener('open-global-search', handleOpenSearch);
    return () => window.removeEventListener('open-global-search', handleOpenSearch);
  }, []);

  const navLinks = [
    { label: 'Главная', path: '/' },
    { label: 'Каталог радиодеталей', path: '/catalog' },
    { label: 'Прайс-лист (PDF)', path: '/pricelist' },
    { label: 'Почтовые отправления', path: '/delivery' },
    { label: 'Блог', path: '/blog' },
    { label: 'Контакты', path: '/delivery' }, // Можно сделать отдельную стр, пока delivery
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans pb-16 md:pb-0">
      
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* 1. TOP BAR (INFO) - Gray background like Centrloma */}
      <div className="bg-gray-100 text-gray-600 text-xs border-b border-gray-200 hidden lg:block">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <div className="flex items-center gap-6">
                  <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary-600" />
                      г. Москва, Пятницкое ш., 18
                  </span>
                  <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary-600" />
                      Пн-Вс: 09:00 - 21:00
                  </span>
                  <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-primary-600" />
                      buy@radiogold.ru
                  </span>
              </div>
              <div className="flex items-center gap-4">
                  <a href={SOCIAL_LINKS.whatsapp} className="hover:text-primary-600 transition-colors">Пишите нам в WhatsApp</a>
                  <span className="text-gray-300">|</span>
                  <Link to="/delivery" className="hover:text-primary-600 transition-colors">Работа с регионами</Link>
              </div>
          </div>
      </div>

      {/* 2. MAIN HEADER (Search, Logo, Phones) - White background, dense */}
      <header className="bg-white py-4 shadow-sm relative z-30">
          <div className="container mx-auto px-4">
              <div className="flex items-center justify-between gap-4 xl:gap-8">
                  
                  {/* Logo */}
                  <Link to="/" className="flex items-center gap-2 shrink-0">
                      <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                          <Cpu className="w-7 h-7" />
                      </div>
                      <div className="leading-tight">
                          <div className="text-xl font-black text-dark-900 tracking-tight">RADIOGOLD</div>
                          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Скупка в Москве</div>
                      </div>
                  </Link>

                  {/* Catalog Button (Like Centrloma) */}
                  <Link 
                    to="/catalog" 
                    className="hidden lg:flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded font-bold transition-all shadow-md shrink-0"
                  >
                      <Grid className="w-5 h-5" />
                      КАТАЛОГ
                  </Link>

                  {/* Search Bar - Big and Central */}
                  <div className="hidden md:flex flex-1 relative max-w-3xl" onClick={() => setIsSearchOpen(true)}>
                      <input 
                        type="text" 
                        readOnly
                        placeholder="Поиск по маркировке (например: КМ, РЭС-9, Часы)..."
                        className="w-full h-11 pl-4 pr-12 border-2 border-primary-500 rounded focus:outline-none bg-gray-50 cursor-pointer hover:bg-white transition-colors text-sm"
                      />
                      <button className="absolute right-0 top-0 h-11 w-12 bg-primary-500 flex items-center justify-center text-white rounded-r hover:bg-primary-600">
                          <Search className="w-5 h-5" />
                      </button>
                  </div>

                  {/* Contact Info */}
                  <div className="hidden xl:flex flex-col items-end shrink-0">
                      <a href="tel:+79991234567" className="text-lg font-bold text-dark-900 hover:text-primary-600 leading-none">
                          8 (999) 123-45-67
                      </a>
                      <a href={SOCIAL_LINKS.whatsapp} className="text-xs text-primary-600 border-b border-primary-600 border-dashed hover:border-solid cursor-pointer mt-1">
                          Заказать звонок
                      </a>
                  </div>

                  {/* Actions (Calc/Cart) */}
                  <div className="flex items-center gap-3 shrink-0">
                      <Link to="/calculator" className="hidden sm:flex flex-col items-center justify-center text-gray-600 hover:text-primary-600 transition-colors">
                          <div className="relative p-2 border border-gray-200 rounded-full hover:border-primary-500 hover:bg-primary-50 transition-all">
                              <Calculator className="w-5 h-5" />
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">1</div>
                          </div>
                          <span className="text-[10px] font-medium mt-1">Расчет</span>
                      </Link>
                      
                      {/* Mobile Burger */}
                      <button 
                          className="lg:hidden p-2 text-dark-900 bg-gray-100 rounded hover:bg-gray-200"
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                      </button>
                  </div>
              </div>

              {/* Mobile Search Bar (Visible only on mobile) */}
              <div className="mt-4 md:hidden" onClick={() => setIsSearchOpen(true)}>
                  <div className="relative">
                      <input 
                        type="text" 
                        readOnly
                        placeholder="Поиск деталей..."
                        className="w-full h-10 pl-3 pr-10 border border-gray-300 rounded focus:outline-none bg-gray-50 text-sm"
                      />
                      <div className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-gray-500">
                          <Search className="w-4 h-4" />
                      </div>
                  </div>
              </div>
          </div>
      </header>

      {/* 3. NAVIGATION BAR (Black/Dark) - Like Centrloma */}
      <div className="bg-dark-900 text-white hidden lg:block border-t border-gray-800">
          <div className="container mx-auto px-4">
              <nav className="flex items-center gap-8 text-sm font-medium">
                  {navLinks.map((link) => (
                      <NavLink 
                        key={link.path} 
                        to={link.path}
                        className={({ isActive }) => 
                            `py-3 border-b-2 transition-colors hover:text-primary-400 ${isActive ? 'border-primary-500 text-primary-400' : 'border-transparent text-gray-300'}`
                        }
                      >
                          {link.label}
                      </NavLink>
                  ))}
                  {/* Ticker integrated into nav bar right side or below */}
              </nav>
          </div>
      </div>
      
      {/* Price Ticker */}
      <PriceTicker />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white pt-20 px-4 animate-fade-in">
              <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full"
              >
                  <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col space-y-4 text-lg font-medium">
                  {navLinks.map((link) => (
                      <Link 
                        key={link.path} 
                        to={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className="border-b border-gray-100 pb-2"
                      >
                          {link.label}
                      </Link>
                  ))}
                  <div className="pt-4">
                      <a href="tel:+79991234567" className="block text-xl font-bold mb-2">8 (999) 123-45-67</a>
                      <p className="text-gray-500 text-sm mb-4">Ежедневно 09:00 - 21:00</p>
                      <div className="flex gap-4">
                          <a href={SOCIAL_LINKS.whatsapp} className="flex-1 py-2 bg-[#25D366] text-white rounded flex justify-center items-center gap-2">
                              <MessageCircle className="w-5 h-5" /> WhatsApp
                          </a>
                          <a href={SOCIAL_LINKS.telegram} className="flex-1 py-2 bg-[#229ED9] text-white rounded flex justify-center items-center gap-2">
                              <Send className="w-5 h-5" /> Telegram
                          </a>
                      </div>
                  </div>
              </nav>
          </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Sticky Mobile Bottom Bar (Like Centrloma/Marketplaces) */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-gray-200 grid grid-cols-4 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Link to="/" className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-primary-600">
            <div className="w-6 h-6"><HomeIcon /></div>
            <span className="text-[10px] mt-1">Главная</span>
        </Link>
        <Link to="/catalog" className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-primary-600">
             <div className="w-6 h-6"><Grid className="w-5 h-5" /></div>
            <span className="text-[10px] mt-1">Каталог</span>
        </Link>
        <Link to="/calculator" className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-primary-600 relative">
             <div className="w-6 h-6"><Calculator className="w-5 h-5" /></div>
             <div className="absolute top-1 right-6 w-2 h-2 bg-primary-500 rounded-full"></div>
            <span className="text-[10px] mt-1">Оценка</span>
        </Link>
        <a href={SOCIAL_LINKS.whatsapp} className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-green-600">
             <div className="w-6 h-6"><MessageCircle className="w-5 h-5" /></div>
            <span className="text-[10px] mt-1">WhatsApp</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-dark-900 text-white pt-12 pb-24 md:pb-12 border-t border-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-6 h-6 text-primary-500" />
                <span className="text-xl font-bold">RADIOGOLD</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Федеральная сеть скупки радиодеталей. Работаем с 2010 года.
              </p>
              <div className="flex gap-4">
                  {/* Social Icons */}
                  <a href={SOCIAL_LINKS.telegram} className="hover:text-primary-500 transition"><Send className="w-5 h-5" /></a>
                  <a href={SOCIAL_LINKS.whatsapp} className="hover:text-primary-500 transition"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white border-b border-gray-700 pb-2 inline-block">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/catalog" className="hover:text-primary-500">Конденсаторы КМ</Link></li>
                <li><Link to="/catalog" className="hover:text-primary-500">Микросхемы</Link></li>
                <li><Link to="/catalog" className="hover:text-primary-500">Транзисторы</Link></li>
                <li><Link to="/catalog" className="hover:text-primary-500">Реле и контакторы</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white border-b border-gray-700 pb-2 inline-block">Клиентам</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/delivery" className="hover:text-primary-500">Доставка из регионов</Link></li>
                <li><Link to="/pricelist" className="hover:text-primary-500">Скачать прайс-лист</Link></li>
                <li><Link to="/calculator" className="hover:text-primary-500">Онлайн оценка</Link></li>
                <li><Link to="/blog" className="hover:text-primary-500">Статьи</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white border-b border-gray-700 pb-2 inline-block">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary-500 mt-0.5" /> 
                    <span>г. Москва,<br/>Пятницкое шоссе, 18</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary-500" /> 
                    <a href="tel:+79991234567" className="hover:text-white">8 (999) 123-45-67</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary-500" /> 
                    <span>buy@radiogold.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} RadioGold Moscow. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
)

export default Layout;
