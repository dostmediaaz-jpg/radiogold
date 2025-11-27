import React from 'react';
import { TICKER_DATA } from '../constants';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PriceTicker: React.FC = () => {
  return (
    <div className="bg-dark-900 text-white overflow-hidden py-2 border-b border-gray-800">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Дублируем контент для бесконечной прокрутки */}
        {[...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-bold text-gray-400 mr-2">{item.symbol}:</span>
            <span className="font-mono text-white mr-2">{item.price.toLocaleString()}</span>
            <span className={`text-xs flex items-center ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {item.change >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
              {item.change}%
            </span>
          </div>
        ))}
      </div>
      <style>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default PriceTicker;