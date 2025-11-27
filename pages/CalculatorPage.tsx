import React from 'react';
import Calculator from '../components/Calculator';
import SEO from '../components/SEO';

const CalculatorPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <SEO 
        title="Онлайн Калькулятор Радиодеталей | Оценка стоимости"
        description="Бесплатный онлайн калькулятор стоимости радиодеталей. Посчитайте, сколько стоят ваши конденсаторы КМ, микросхемы и транзисторы прямо сейчас."
        keywords="калькулятор радиодеталей, оценка радиодеталей онлайн, прайс лист радиодетали"
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Калькулятор скупки радиодеталей</h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Воспользуйтесь нашим интерактивным инструментом для предварительной оценки стоимости вашей партии.
          Цены обновляются ежедневно в соответствии с биржевыми котировками LME.
        </p>
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorPage;