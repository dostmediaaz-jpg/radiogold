
import React, { useState, useMemo } from 'react';
import { COMPONENT_CATALOG } from '../constants';
import SEO from '../components/SEO';
import { Search, Download, FileText } from 'lucide-react';
import Button from '../components/Button';

const PriceListPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return COMPONENT_CATALOG.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) || 
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleDownload = () => {
    alert('Скачивание PDF-прайса в разработке. Пожалуйста, используйте онлайн-версию.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Прайс-лист на радиодетали 2024 | Скачать цены"
        description="Полная таблица цен на скупку радиодеталей. Актуальный прайс-лист на сегодня. КМ, транзисторы, микросхемы, реле. Скачать PDF."
        keywords="прайс лист радиодетали, цены на радиодетали таблица, скупка радиодеталей цены txt"
      />

      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Прайс-лист</h1>
          <p className="text-gray-600">Актуальные цены на {new Date().toLocaleDateString()}</p>
        </div>
        <Button variant="outline" onClick={handleDownload} className="flex items-center gap-2">
           <Download className="w-4 h-4" /> Скачать PDF
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Поиск по названию..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
            </div>
            <div className="text-sm text-gray-500 hidden sm:block">
                Показано позиций: <strong>{filtered.length}</strong>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-bold tracking-wider">
                    <tr>
                        <th className="px-6 py-4">Наименование</th>
                        <th className="px-6 py-4">Категория</th>
                        <th className="px-6 py-4">Ед. изм.</th>
                        <th className="px-6 py-4 text-right">Цена</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {filtered.length > 0 ? (
                        filtered.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {item.name}
                                    {item.description && (
                                        <div className="text-xs text-gray-400 font-normal mt-0.5 truncate max-w-xs">
                                            {item.description}
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                                        {item.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{item.unit}</td>
                                <td className="px-6 py-4 text-right font-bold text-gray-900">
                                    {item.pricePerUnit.toLocaleString()} ₽
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                Ничего не найдено
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>

      <div className="mt-8 bg-primary-50 p-6 rounded-xl border border-primary-100 text-center">
         <h3 className="font-bold text-lg text-primary-900 mb-2">Не нашли нужную деталь?</h3>
         <p className="text-primary-700 mb-4">
            В прайсе указаны только основные позиции. Мы покупаем более 5000 наименований.
            <br/>Пришлите фото детали в WhatsApp для точной оценки.
         </p>
         <Button>Оценить по фото</Button>
      </div>
    </div>
  );
};

export default PriceListPage;
