
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Truck, Package, CheckCircle2, AlertTriangle, FileText, Download, ShieldCheck, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import { sendToTelegram } from '../services/telegramService';

const DeliveryPage: React.FC = () => {
  const [trackNumber, setTrackNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleTrackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await sendToTelegram({
        type: 'QUICK_REQUEST',
        contact: { name: 'Клиент (Трек-номер)', phone: trackNumber, city: 'Регион' }
    });
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="Скупка радиодеталей почтой | Инструкция и Опись | RadioGold"
        description="Отправка радиодеталей почтой России и СДЭК. Скачать опись вложения. Правила упаковки, чтобы получить максимальную выплату."
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 rounded-full text-sm font-bold mb-4">
                Работаем по всей России
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Живете не в Москве? <br/>
                <span className="text-primary-600">Отправьте детали Почтой!</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Мы принимаем посылки через Почту России и СДЭК. <br/>
                Гарантируем видеофиксацию вскрытия и оплату в день получения.
            </p>
        </div>

        {/* FREE SHIPPING BANNER */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-2xl p-6 md:p-8 text-white mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                    <Truck className="w-8 h-8 text-primary-500" />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1">Оплачиваем доставку за вас!</h3>
                    <p className="text-gray-300 text-sm">При сумме оценки посылки <span className="text-white font-bold">свыше 50 000 руб</span>, мы полностью компенсируем ваши расходы на пересылку.</p>
                </div>
            </div>
            <div className="flex gap-4 opacity-80 grayscale hover:grayscale-0 transition-all">
               {/* Visual placeholder for CDEK/Post logos since we don't have external assets */}
               <div className="px-4 py-2 bg-white text-blue-800 font-extrabold rounded italic">Почта России</div>
               <div className="px-4 py-2 bg-green-500 text-white font-extrabold rounded">CDEK</div>
            </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-primary-500/30 text-3xl font-bold border-4 border-white">
                    1
                </div>
                <h3 className="text-xl font-bold mb-3">Соберите посылку</h3>
                <p className="text-gray-600">
                    Рассортируйте детали по пакетам. Вложите опись (скачать ниже) или листок с контактами.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative">
                 <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-primary-500/30 text-3xl font-bold border-4 border-white">
                    2
                </div>
                <h3 className="text-xl font-bold mb-3">Отправьте нам</h3>
                <p className="text-gray-600">
                    Адрес: 125464, г. Москва, Пятницкое шоссе, д. 18. <br/>
                    Получатель: ИП Иванов И.И. <br/>
                    Телефон: +7 (999) 123-45-67
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative">
                 <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-primary-500/30 text-3xl font-bold border-4 border-white">
                    3
                </div>
                <h3 className="text-xl font-bold mb-3">Получите деньги</h3>
                <p className="text-gray-600">
                    В день получения мы свяжемся с вами, покажем видео вскрытия и переведем деньги.
                </p>
            </div>
        </div>

        {/* Detailed Packaging Rules (NEW) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Package className="text-primary-600" />
                Правила упаковки (Важно!)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-lg mb-3">✅ Как нужно делать:</h4>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                            <span><strong>Сортируйте:</strong> КМ зеленые отдельно от рыжих. Микросхемы отдельно от транзисторов. Это ускорит оценку.</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                            <span><strong>Упакуйте плотно:</strong> Используйте пупырчатую пленку или газеты, чтобы детали не гремели.</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                            <span><strong>Подпишите пакеты:</strong> Если знаете вес, напишите его маркером на пакете (пример: "КМ, 120г").</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-3">❌ Чего делать нельзя:</h4>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                            <span><strong>Не смешивайте все в кучу:</strong> "Микс" оценивается по самой дешевой позиции!</span>
                        </li>
                        <li className="flex gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                            <span><strong>Не отправляйте грязь:</strong> Очистите детали от плат, если сдаете на вес (скуска). Лишний припой и ножки считаются засором.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Download Inventory Button (NEW) */}
            <div className="mt-8 bg-gray-50 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                        <h4 className="font-bold">Опись вложения (Бланк)</h4>
                        <p className="text-sm text-gray-500">Скачайте, заполните и вложите в посылку.</p>
                    </div>
                </div>
                <Button variant="outline" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); alert('В демо-режиме файл не скачивается, но кнопка работает!'); }}>
                    <Download className="w-4 h-4" /> Скачать PDF
                </Button>
            </div>
        </div>

        {/* FAQ Delivery */}
         <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <ShieldCheck className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-bold text-lg mb-2">Это безопасно?</h4>
                <p className="text-gray-600 text-sm">Да. Почта России и СДЭК предоставляют трек-номера. Мы ведем видеофиксацию вскрытия каждой посылки. Если вес не сойдется — мы пришлем вам видео.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <DollarSign className="w-8 h-8 text-primary-600 mb-3" />
                <h4 className="font-bold text-lg mb-2">Как получить деньги?</h4>
                <p className="text-gray-600 text-sm">После оценки (в день получения) мы переводим деньги на карту Сбер, Тинькофф или любого другого банка. Комиссию берем на себя.</p>
            </div>
         </div>

        {/* Track Form */}
        <div className="bg-dark-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Уже отправили посылку?</h2>
            <p className="text-gray-300 mb-8">Сообщите нам трек-номер, и мы будем ждать её прибытия.</p>
            
            {sent ? (
                <div className="bg-green-500/20 text-green-300 p-4 rounded-xl inline-flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Мы получили трек-номер. Спасибо!
                </div>
            ) : (
                <form onSubmit={handleTrackSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-3">
                    <input 
                        type="text" 
                        required
                        placeholder="Трек-номер (например: 1234567890)"
                        value={trackNumber}
                        onChange={(e) => setTrackNumber(e.target.value)}
                        className="flex-1 px-5 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                    <Button disabled={loading}>
                        {loading ? 'Отправка...' : 'Отправить'}
                    </Button>
                </form>
            )}
        </div>

      </div>
    </div>
  );
};

export default DeliveryPage;
