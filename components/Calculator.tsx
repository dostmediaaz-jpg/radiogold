import React, { useState, useMemo } from 'react';
import { COMPONENT_CATALOG } from '../constants';
import { CartItem, CategoryType } from '../types';
import { Plus, Trash2, Calculator as CalcIcon, TrendingUp, Send, Phone, CheckCircle, Loader2 } from 'lucide-react';
import Button from './Button';
import Modal from './Modal';
import { sendToTelegram } from '../services/telegramService';

const Calculator: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [contactData, setContactData] = useState({ name: '', phone: '' });

  const addToCart = (item: typeof COMPONENT_CATALOG[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty < 0) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalValue = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.pricePerUnit * item.quantity), 0);
  }, [cart]);

  const filteredCatalog = useMemo(() => {
    if (selectedCategory === 'all') return COMPONENT_CATALOG;
    return COMPONENT_CATALOG.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const isSent = await sendToTelegram({
      contact: contactData,
      type: 'CALCULATOR_ORDER',
      cart: cart.map(i => ({ name: i.name, quantity: i.quantity, unit: i.unit, price: i.pricePerUnit * i.quantity })),
      total: totalValue
    });

    setLoading(false);
    if (isSent) {
      setSuccess(true);
      setCart([]); // Clear cart on success
    } else {
      alert('Ошибка отправки. Попробуйте позже.');
    }
  };

  const closeAndReset = () => {
    setIsModalOpen(false);
    // Delay reset to allow closing animation if needed, or immediate
    setTimeout(() => {
        setSuccess(false);
        setContactData({ name: '', phone: '' });
    }, 300);
  }

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100" id="calculator">
      <div className="p-6 bg-dark-900 text-white">
        <div className="flex items-center gap-2 mb-2">
          <CalcIcon className="text-primary-500 w-6 h-6" />
          <h2 className="text-2xl font-bold">Онлайн Калькулятор</h2>
        </div>
        <p className="text-gray-400">Выберите детали из каталога, чтобы узнать предварительную стоимость партии.</p>
      </div>

      <div className="flex flex-col lg:flex-row h-[600px] lg:h-[700px]">
        {/* Catalog Section */}
        <div className="flex-1 p-4 overflow-y-auto border-r border-gray-100 bg-gray-50">
          <div className="mb-4">
            <select 
              className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Все категории</option>
              {Object.values(CategoryType).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredCatalog.map(item => (
              <div key={item.id} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary-100 text-primary-800">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.name}</h3>
                  <p className="text-primary-600 font-bold text-lg">
                    {item.pricePerUnit.toLocaleString()} ₽ <span className="text-xs text-gray-500 font-normal">/ {item.unit}</span>
                  </p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="mt-3 w-full"
                  onClick={() => addToCart(item)}
                >
                  <Plus className="w-4 h-4 mr-1" /> Добавить
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart/Summary Section */}
        <div className="lg:w-96 bg-white flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Ваша партия
            </h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                <CalcIcon className="w-12 h-12 mb-2 opacity-20" />
                <p>Список пуст. Добавьте детали из каталога слева.</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex flex-col p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-sm text-gray-700 line-clamp-2 w-3/4">{item.name}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        min="0"
                        step="0.1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseFloat(e.target.value) || 0)}
                        className="w-20 p-1 text-center text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary-500"
                      />
                      <span className="text-xs text-gray-500">{item.unit}</span>
                    </div>
                    <div className="font-bold text-gray-800">
                      {(item.pricePerUnit * item.quantity).toLocaleString()} ₽
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 bg-dark-900 text-white mt-auto">
            <div className="flex justify-between items-end mb-4">
              <span className="text-gray-400 text-sm">Итоговая оценка:</span>
              <span className="text-3xl font-bold text-primary-500">{totalValue.toLocaleString()} ₽</span>
            </div>
            <Button fullWidth variant="primary" disabled={cart.length === 0} onClick={() => setIsModalOpen(true)}>
              Оформить заявку
            </Button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              *Цена является предварительной и может измениться при осмотре.
            </p>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <Modal isOpen={isModalOpen} onClose={closeAndReset} title="Оформление заявки">
        {success ? (
          <div className="text-center py-4">
             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
             <p className="text-gray-600 mb-6">
                Мы получили ваш список деталей на сумму <span className="font-bold">{totalValue.toLocaleString()} ₽</span>.
                Менеджер свяжется с вами в ближайшее время.
             </p>
             <Button fullWidth onClick={closeAndReset}>Отлично</Button>
          </div>
        ) : (
          <form onSubmit={handleOrderSubmit} className="space-y-4">
            <p className="text-gray-600 text-sm mb-4">
                Оставьте контактные данные, чтобы мы могли подтвердить цены и договориться о встрече.
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
              <input 
                type="text" 
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Иван"
                value={contactData.name}
                onChange={e => setContactData({...contactData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
              <div className="relative">
                 <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                 <input 
                    type="tel" 
                    required
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+7 (999) 000-00-00"
                    value={contactData.phone}
                    onChange={e => setContactData({...contactData, phone: e.target.value})}
                 />
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600 border border-gray-200">
                <div className="flex justify-between font-bold mb-1">
                    <span>Количество позиций:</span>
                    <span>{cart.length}</span>
                </div>
                <div className="flex justify-between font-bold text-primary-600">
                    <span>Сумма:</span>
                    <span>{totalValue.toLocaleString()} ₽</span>
                </div>
            </div>

            <Button fullWidth size="lg" disabled={loading} className="flex items-center justify-center gap-2">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {loading ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Calculator;