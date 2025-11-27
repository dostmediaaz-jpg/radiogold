import React, { useState, useEffect, useRef } from 'react';
import { COMPONENT_CATALOG } from '../constants';
import { Search, X, ChevronRight, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const filteredItems = COMPONENT_CATALOG.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.description.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5); // Show top 5 results

  const handleSelect = (itemId: string) => {
    onClose();
    // In a real app, maybe navigate to item details or highlight in calculator
    // For now, let's go to calculator
    navigate('/calculator');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-dark-900/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-down transform transition-all">
        {/* Input Header */}
        <div className="relative flex items-center p-4 border-b border-gray-100">
          <Search className="w-6 h-6 text-gray-400 absolute left-6" />
          <input 
            ref={inputRef}
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск детали (например: КМ, РЭС-9, КТ803)..."
            className="w-full pl-12 pr-10 py-3 text-lg text-gray-900 placeholder-gray-400 border-none focus:ring-0 outline-none"
          />
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors absolute right-4">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto bg-gray-50">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-gray-500">
               <p className="mb-2">Введите маркировку детали</p>
               <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['КМ зеленые', 'РЭС-9', 'К52-2', 'СП5', 'КТ814'].map(tag => (
                      <button key={tag} onClick={() => setQuery(tag)} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs hover:border-primary-400 transition-colors">
                          {tag}
                      </button>
                  ))}
               </div>
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredItems.map(item => (
                <div 
                    key={item.id} 
                    onClick={() => handleSelect(item.id)}
                    className="flex items-center gap-4 p-4 hover:bg-white cursor-pointer transition-colors group"
                >
                  <img src={item.imagePlaceholder} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-gray-200" />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{item.name}</h4>
                    <p className="text-xs text-gray-500 truncate">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{item.pricePerUnit.toLocaleString()} ₽</div>
                    <div className="text-xs text-gray-400">за {item.unit}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500" />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
                <p className="text-gray-900 font-medium">Ничего не найдено</p>
                <p className="text-sm text-gray-500 mt-2">Попробуйте изменить запрос или <br/>воспользуйтесь <span className="text-primary-600 font-bold cursor-pointer" onClick={() => { onClose(); navigate('/calculator'); }}>Калькулятором</span> для поиска по категориям.</p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 p-3 flex justify-between items-center text-xs text-gray-500 px-6">
            <span>Найдено результатов: {filteredItems.length}</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary-600" onClick={() => { onClose(); navigate('/calculator'); }}>
                <Calculator className="w-3 h-3" /> Перейти в полный каталог
            </span>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;