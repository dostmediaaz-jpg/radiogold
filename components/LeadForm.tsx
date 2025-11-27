import React, { useState } from 'react';
import Button from './Button';
import { Send, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';
import { sendToTelegram } from '../services/telegramService';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await sendToTelegram({
      contact: formData,
      type: 'QUICK_REQUEST'
    });

    setLoading(false);
    if (success) {
      setSubmitted(true);
      setFormData({ name: '', phone: '', city: '' });
    } else {
      alert('Ошибка соединения. Пожалуйста, позвоните нам напрямую.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="bg-green-50 p-8 rounded-xl border border-green-200 text-center h-full flex flex-col items-center justify-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Заявка принята!</h3>
        <p className="text-green-700 mb-6">Мы уже видим ваш запрос и перезвоним в течение 5 минут.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>Отправить еще</Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 h-full" id="contact-form">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Оценим детали онлайн</h2>
        <p className="text-gray-600">Оставьте номер — мы назовем цену сразу.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Как к вам обращаться?</label>
          <input 
            type="text" 
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Номер телефона</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input 
              type="tel" 
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 000-00-00"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ваш город</label>
           <div className="relative">
            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              id="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Москва"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
           </div>
        </div>

        <div className="pt-2">
            <Button fullWidth size="lg" type="submit" disabled={loading} className="flex items-center gap-2">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {loading ? 'Отправка...' : 'Узнать стоимость'}
            </Button>
        </div>
        
        <p className="text-xs text-center text-gray-400">
            Нажимая кнопку, вы даете согласие на обработку персональных данных.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;