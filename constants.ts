
import { CategoryType, ComponentItem, BlogPost, TickerItem } from './types';

// =====================================================================
// ВАША БАЗА ДАННЫХ ЦЕН (РАСШИРЕННАЯ)
// =====================================================================

export const SOCIAL_LINKS = {
    telegram: 'https://t.me/your_channel',
    instagram: 'https://instagram.com/your_profile',
    tiktok: 'https://tiktok.com/@your_profile',
    whatsapp: 'https://wa.me/79991234567', // Замените на ваш номер
};

export const TICKER_DATA: TickerItem[] = [
  { symbol: 'Au (Золото)', price: 6250.45, change: 1.2 },
  { symbol: 'Ag (Серебро)', price: 78.20, change: -0.5 },
  { symbol: 'Pt (Платина)', price: 2890.00, change: 0.8 },
  { symbol: 'Pd (Палладий)', price: 3150.50, change: 2.1 },
  { symbol: 'USD/RUB', price: 92.50, change: 0.1 },
];

// SEO Text Blocks for Categories (To defeat competitors like Dragomir)
export const SEO_DESCRIPTIONS: Record<CategoryType, string> = {
    [CategoryType.CAPACITOR]: `
        <h2 class="text-xl font-bold mb-2">Скупка конденсаторов КМ в Москве</h2>
        <p class="mb-2">Компания RadioGold предлагает самые высокие цены на керамические конденсаторы КМ (зеленые, рыжие) в Московском регионе. Мы принимаем конденсаторы серий КМ-3, КМ-4, КМ-5, КМ-6, а также бескорпусные К10-17, К10-47.</p>
        <p>Цена на конденсаторы КМ зависит от курса палладия и платины на Лондонской бирже. Мы обновляем прайс ежедневно. Особую ценность представляют конденсаторы группы H30 ("зеленые"), а также крупные рыжие КМ с маркировкой H90.</p>
    `,
    [CategoryType.TRANSISTOR]: `
        <h2 class="text-xl font-bold mb-2">Прием транзисторов с позолотой</h2>
        <p class="mb-2">Покупаем советские транзисторы серий КТ, 2Т, КП. Наиболее дорогие — так называемые "вертолеты" (КТ 904, 920 и др.) в болтах и с желтыми лопастями. Также дорого принимаем транзисторы в круглых корпусах (КТ803, КТ808) и "полевики" с 4 ногами.</p>
        <p>Важно: Цена зависит от года выпуска. Транзисторы до 1990 года содержат больше золота. Импортные транзисторы принимаются только с видимой позолотой.</p>
    `,
    [CategoryType.MICROCIRCUIT]: `
        <h2 class="text-xl font-bold mb-2">Скупка микросхем и процессоров</h2>
        <p>Принимаем 133, 134, 155, 564 серии. Самые дорогие — с желтой (позолоченной) подложкой и выводами. Керамические процессоры (Intel, AMD, советские копии) оцениваются поштучно. Пластиковые микросхемы принимаются на вес.</p>
    `,
    [CategoryType.RELAY]: `
        <h2 class="text-xl font-bold mb-2">Скупка реле РЭС, РПС</h2>
        <p>Дорого покупаем реле РЭС-7, РЭС-8, РЭС-9, РЭС-10, РЭС-22. Цена зависит от ПАСПОРТА изделия. Паспорт указан на корпусе. Некоторые реле содержат чистое золото или платину (РЭС-9 паспорт 201, 202).</p>
    `,
    [CategoryType.CONNECTOR]: `
        <h2 class="text-xl font-bold mb-2">Разъемы СССР и Украина</h2>
        <p>Скупаем разъемы СНО, СНП, РППМ, ГРПМ, РС. Оценка производится по количеству контактов или на вес. Контакты должны быть желтого цвета. Посеребренные разъемы (ШР) принимаются дешевле.</p>
    `,
    [CategoryType.RESISTOR]: `
        <h2 class="text-xl font-bold mb-2">Резисторы СП5, ПП3</h2>
        <p>Покупаем переменные резисторы СП5-1, СП5-2, СП5-3, ПП3-40, ПП3-43. Они содержат палладиевую проволоку. Цена зависит от года выпуска (до 1990 — дороже).</p>
    `,
    [CategoryType.SWITCH]: `
        <h2 class="text-xl font-bold mb-2">Переключатели и тумблеры</h2>
        <p>Принимаем ПГ2, ПГ7, ПР2-2, ПР2-5, тумблеры ТВ1, ПТ. Серебряные контакты, золото и сплавы ПлИ (платина-иридий).</p>
    `,
    [CategoryType.TECHNICAL_SILVER]: `
        <h2 class="text-xl font-bold mb-2">Техническое серебро</h2>
        <p>Скупка контактов (магнитные/немагнитные), оплетки, проволоки, корпусов К52. Высокая цена за грамм.</p>
    `,
    [CategoryType.BATTERY]: `
        <h2 class="text-xl font-bold mb-2">Аккумуляторы СЦ</h2>
        <p>Серебряно-цинковые аккумуляторы СЦ, СЦС, СЦД. Принимаем любые размеры. Внутри содержатся пластины с высоким содержанием серебра.</p>
    `,
    [CategoryType.WATCH]: `
        <h2 class="text-xl font-bold mb-2">Корпуса часов Au</h2>
        <p>Желтые корпуса советских часов с маркировкой Au, Au10, Au12.5, Au20. Скупаем только корпуса без механизмов.</p>
    `,
    [CategoryType.LAMP]: `
        <h2 class="text-xl font-bold mb-2">Радиолампы генераторные</h2>
        <p>ГУ-50, ГУ-72, ГМИ, ГС. Новые в упаковке стоят дороже. Внутри содержится золото на сетках.</p>
    `,
    [CategoryType.LIGATURE]: `
        <h2 class="text-xl font-bold mb-2">Лигатура и импортный лом</h2>
        <p>Позолоченные контакты, срезка с плат, импортные разъемы. Оценка производится с помощью спектрального анализатора.</p>
    `
};

// Данные для красивых плиток категорий (Как на Sxematika)
// Используем качественные фото с Unsplash для "дорогого" вида
export const CATEGORY_DETAILS: Record<CategoryType, { image: string, desc: string }> = {
    [CategoryType.CAPACITOR]: {
        image: 'https://images.unsplash.com/photo-1598555639180-379684346764?auto=format&fit=crop&q=80&w=800', 
        desc: 'КМ зеленые, рыжие, H90, К10-17'
    },
    [CategoryType.TRANSISTOR]: {
        image: 'https://images.unsplash.com/photo-1555617778-02518510b9fa?auto=format&fit=crop&q=80&w=800', 
        desc: 'КТ, 2Т, полевые, с желтыми ногами'
    },
    [CategoryType.MICROCIRCUIT]: {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', 
        desc: '133, 155, процессоры, желтая керамика'
    },
    [CategoryType.RELAY]: {
        image: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&q=80&w=800', 
        desc: 'РЭС-7, РЭС-9, РЭС-22, РПС'
    },
    [CategoryType.CONNECTOR]: {
        image: 'https://images.unsplash.com/photo-1622630732303-8e94514a1746?auto=format&fit=crop&q=80&w=800', 
        desc: 'СНП, СНО, Украина, позолоченные контакты'
    },
    [CategoryType.RESISTOR]: {
        image: 'https://images.unsplash.com/photo-1615206233284-97217578206d?auto=format&fit=crop&q=80&w=800', 
        desc: 'СП5, ПП3-40, реохорды с палладием'
    },
    [CategoryType.SWITCH]: {
        image: 'https://images.unsplash.com/photo-1615206233158-971c0800742f?auto=format&fit=crop&q=80&w=800', 
        desc: 'ПГ2, ПГ7, ПР2, тумблеры ТВ'
    },
    [CategoryType.TECHNICAL_SILVER]: {
        image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800', 
        desc: 'Контакты, пластины, магнит/немагнит'
    },
    [CategoryType.BATTERY]: {
        image: 'https://images.unsplash.com/photo-1604514288086-4e007827878d?auto=format&fit=crop&q=80&w=800', 
        desc: 'СЦ, СЦС, СЦД, серебряно-цинковые'
    },
    [CategoryType.WATCH]: {
        image: 'https://images.unsplash.com/photo-1617317376997-8748e6862c01?auto=format&fit=crop&q=80&w=800', 
        desc: 'Корпуса Au, Au10, Au20, браслеты'
    },
    [CategoryType.LAMP]: {
        image: 'https://images.unsplash.com/photo-1526662092594-e98c1e356522?auto=format&fit=crop&q=80&w=800', 
        desc: 'ГУ-50, ГМИ, генераторные лампы'
    },
    [CategoryType.LIGATURE]: {
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800', 
        desc: 'Импортные разъемы, ламели, pins'
    }
};

export const COMPONENT_CATALOG: ComponentItem[] = [
  // --- КОНДЕНСАТОРЫ ---
  {
    id: '1',
    name: 'Конденсаторы КМ зеленые (общая группа)',
    category: CategoryType.CAPACITOR,
    pricePerUnit: 220000,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/kondensatory/km-zelenye-obshhaja.jpg',
    description: 'Самые дорогие. H90, 5V, 1 мкФ. Содержат платину и палладий.'
  },
  {
    id: '1-1',
    name: 'Конденсаторы КМ зеленые H30 (Д)',
    category: CategoryType.CAPACITOR,
    pricePerUnit: 250000,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/kondensatory/km-zelenye-d.jpg',
    description: 'Квадратные зеленые конденсаторы группы H30 ("Д"). Максимальная цена.'
  },
  {
    id: '2',
    name: 'Конденсаторы КМ рыжие (общая)',
    category: CategoryType.CAPACITOR,
    pricePerUnit: 180000,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/kondensatory/km-ryzhie-obshhaja.jpg',
    description: 'Рыжие, желтые, красные КМ. Высокое содержание драгметаллов.'
  },
  {
    id: '10',
    name: 'К52-1, К52-1М (крупные)',
    category: CategoryType.CAPACITOR,
    pricePerUnit: 80,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/kondensatory/k52-1-krupnye.jpg', 
    description: 'Танталовые в серебряном корпусе. Цена за штуку.'
  },
  {
    id: '11',
    name: 'К52-2 (большие)',
    category: CategoryType.CAPACITOR,
    pricePerUnit: 1100,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/kondensatory/k52-2-krupnye.jpg',
    description: 'Большие танталовые конденсаторы (ЭТО-1, ЭТО-2).'
  },
  {
    id: '13',
    name: 'К10-17 (окукленные)',
    category: CategoryType.CAPACITOR,
    pricePerUnit: 35000,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/kondensatory/k10-17-okuklennye.jpg',
    description: 'Желтые и синие "подушечки". Керамика.'
  },
  {
    id: '14',
    name: 'К53-1, К53-7, К53-18',
    category: CategoryType.CAPACITOR,
    pricePerUnit: 15,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/kondensatory/k53-1.jpg',
    description: 'Ниобиевые и танталовые конденсаторы различных размеров.'
  },

  // --- ТРАНЗИСТОРЫ ---
  {
    id: '3',
    name: 'Транзисторы КТ (желтые, "вертолеты")',
    category: CategoryType.TRANSISTOR,
    pricePerUnit: 65,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/tranzistory/kt-zheltye.jpg',
    description: 'В золоченом корпусе (KT600, KT900 серии, 2Т).'
  },
  {
    id: '3-1',
    name: 'Транзисторы КТ800 (круглые, желтые)',
    category: CategoryType.TRANSISTOR,
    pricePerUnit: 45,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/tranzistory/kt800-kruglye.jpg',
    description: 'Средней мощности, полностью желтый низ.'
  },
  {
    id: '3-3',
    name: 'Транзисторы КТ3102, 310, 501 (желтые ноги)',
    category: CategoryType.TRANSISTOR,
    pricePerUnit: 15,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/tranzistory/kt3102.jpg',
    description: 'Маломощные с желтыми выводами. Цена за штуку.'
  },
  {
    id: '3-4',
    name: 'Транзисторы "Полевики" (4 ноги)',
    category: CategoryType.TRANSISTOR,
    pricePerUnit: 25,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/tranzistory/poleviki.jpg',
    description: 'КП301, КП302, КП303 и аналоги с желтыми ногами.'
  },

  // --- РЕЛЕ ---
  {
    id: '4',
    name: 'Реле РЭС-7',
    category: CategoryType.RELAY,
    pricePerUnit: 450,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/rele/res-7.jpg',
    description: 'Определенные паспорта и года выпуска (до 1990г).'
  },
  {
    id: '4-1',
    name: 'Реле РЭС-9 (паспорт 201, 202)',
    category: CategoryType.RELAY,
    pricePerUnit: 250,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/rele/res-9.jpg',
    description: 'Овальные реле. Цена зависит от паспорта (201, 202, 213).'
  },
  {
    id: '4-3',
    name: 'Реле РЭС-10 (паспорт 302, 303)',
    category: CategoryType.RELAY,
    pricePerUnit: 180,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/rele/res-10.jpg',
    description: 'Малогабаритные реле в металлическом корпусе.'
  },
  {
    id: '4-4',
    name: 'Реле РЭС-22',
    category: CategoryType.RELAY,
    pricePerUnit: 45,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/rele/res-22.jpg',
    description: 'Открытые/закрытые контакты. Цена зависит от паспорта и года.'
  },

  // --- МИКРОСХЕМЫ ---
  {
    id: '5',
    name: 'Микросхемы 133 серия (золотая подложка)',
    category: CategoryType.MICROCIRCUIT,
    pricePerUnit: 80,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/mikroshemy/133-serija.jpg',
    description: 'Микросхемы с видимой позолотой, 14, 16 выводов.'
  },
  {
    id: '5-2',
    name: 'Процессоры керамика (желтые)',
    category: CategoryType.MICROCIRCUIT,
    pricePerUnit: 800,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/mikroshemy/processor-keramika.jpg',
    description: 'Советские процессоры 580, 1810 серий.'
  },
  {
    id: '5-3',
    name: '155 Серия (черные, пластик)',
    category: CategoryType.MICROCIRCUIT,
    pricePerUnit: 3500,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/mikroshemy/155-serija.jpg',
    description: 'Микросхемы в черном пластиковом корпусе. Принимаются на вес.'
  },

  // --- РЕЗИСТОРЫ ---
  {
    id: '8',
    name: 'Резисторы СП5-1, СП5-2, СП5-3',
    category: CategoryType.RESISTOR,
    pricePerUnit: 45,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/rezistory/sp5-1.jpg',
    description: 'Квадратные/цилиндрические. Содержат палладиевую проволоку.'
  },
  {
    id: '8-1',
    name: 'Резисторы ПП3-40, ПП3-43 (с 82 года)',
    category: CategoryType.RESISTOR,
    pricePerUnit: 150,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/rezistory/pp3-40.jpg',
    description: 'Переменные резисторы с палладием и золотом.'
  },

  // --- РАЗЪЕМЫ ---
  {
    id: '6',
    name: 'Разъемы СНП, СНО (Украина)',
    category: CategoryType.CONNECTOR,
    pricePerUnit: 45,
    unit: 'контакт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/razemy/snp-sno.jpg',
    description: 'Цена за 1 контакт (пимпочку). Полная позолота.'
  },
  {
    id: '6-1',
    name: 'Разъемы ШР (серебрение)',
    category: CategoryType.CONNECTOR,
    pricePerUnit: 1500,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/razemy/shr-serebro.jpg',
    description: 'Круглые авиационные разъемы. Скупка на вес (в корпусах или без).'
  },

  // --- ПЕРЕКЛЮЧАТЕЛИ ---
  {
    id: '9',
    name: 'Переключатели ПГ2, ПГ5, ПГ7',
    category: CategoryType.SWITCH,
    pricePerUnit: 120,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/perekljuchateli/pg2.jpg',
    description: 'Галетные переключатели. "Бочонки". Содержат золото/палладий.'
  },

  // --- АККУМУЛЯТОРЫ ---
  {
    id: '20',
    name: 'Аккумуляторы СЦ, СЦС, СЦД',
    category: CategoryType.BATTERY,
    pricePerUnit: 35000,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/akkumuljatory/sc-scs.jpg',
    description: 'Серебряно-цинковые аккумуляторы. Любые размеры. Цена за кг пластин.'
  },

  // --- КОРПУСА ЧАСОВ ---
  {
    id: '21',
    name: 'Корпуса часов (желтые, Au)',
    category: CategoryType.WATCH,
    pricePerUnit: 18000,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/korpusa-chasov/au.jpg',
    description: 'Советские часы с маркировкой Au, Au10, Au20. Без механизма.'
  },

  // --- ЛАМПЫ ---
  {
    id: '22',
    name: 'Лампы ГУ-50, ГУ-72, ГМИ',
    category: CategoryType.LAMP,
    pricePerUnit: 150,
    unit: 'шт',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/lampy/gu-50.jpg',
    description: 'Генераторные лампы. Цена зависит от модели и года. ГМИ - дорого.'
  },

  // --- ЛИГАТУРА ---
  {
    id: '23',
    name: 'Лигатура (импортные разъемы)',
    category: CategoryType.LIGATURE,
    pricePerUnit: 5500,
    unit: 'кг',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/ligatura/import.jpg',
    description: 'Позолоченные контакты от импортной техники, компьютерные разъемы.'
  },

  // --- СЕРЕБРО ---
   {
    id: '7',
    name: 'Техническое серебро (магнит/немагнит)',
    category: CategoryType.TECHNICAL_SILVER,
    pricePerUnit: 65,
    unit: 'г',
    imagePlaceholder: 'https://radiodetali-spb.ru/images/katalog/serebro/tehnicheskoe.jpg',
    description: 'Контакты с пускателей, реле, проволока. Очищенное дороже.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Как отличить дорогие конденсаторы КМ от дешевых аналогов',
    excerpt: 'Полный гид по маркировкам, цветам и годам выпуска. Узнайте, сколько стоит ваша находка.',
    date: '10 Окт 2023',
    readTime: '5 мин',
    category: 'Обучение',
    content: `
      <h2>Что такое КМ конденсаторы?</h2>
      <p>Конденсаторы КМ (керамические монолитные) — это легенда среди радиолюбителей и аффинажников. Они содержат значительное количество палладия и платины, что делает их одними из самых дорогих радиодеталей.</p>
      
      <h3>Основные виды КМ:</h3>
      <ul>
        <li><strong>КМ Зеленые (общая группа)</strong>: Самые массовые. Содержат много палладия. Цена может доходить до 200 000+ руб/кг.</li>
        <li><strong>КМ Рыжие</strong>: Содержат платину. Они ценятся чуть ниже зеленых, но все равно очень дорого.</li>
        <li><strong>КМ H30</strong>: Элитная группа, часто зеленого цвета, квадратные. Максимальная цена.</li>
      </ul>

      <h3>Как не перепутать?</h3>
      <p>Часто новички путают КМ с дешевыми пленочными конденсаторами К73-17 ("подушечки"). Главное отличие — КМ всегда керамические, твердые, их нельзя промять ногтем. На сломе они выглядят как слоеный пирог.</p>

      <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 my-4">
        <strong>Совет профи:</strong> Не скусывайте выводы (ножки) под самый корень! Оставьте 1-2 мм, так проще определить маркировку и год.
      </div>

      <h2>Как мы оцениваем?</h2>
      <p>Цена зависит от курса LME (Лондонской биржи). Мы обновляем прайс ежедневно. Чтобы узнать точную стоимость вашей партии, пришлите фото нам в WhatsApp или воспользуйтесь калькулятором на сайте.</p>
    `
  },
  {
    id: '2',
    title: 'Где искать радиодетали? Топ-5 советских приборов',
    excerpt: 'Разбираем старые осциллографы, генераторы и ЭВМ. В каких приборах больше всего золота?',
    date: '15 Окт 2023',
    readTime: '7 мин',
    category: 'Поиск',
    content: `
      <h2>Золотая жила в гараже</h2>
      <p>Многие выбрасывают старую советскую технику, не зная, что внутри может быть 10, 20 или даже 50 тысяч рублей.</p>
      
      <h3>Топ-5 самых богатых приборов:</h3>
      <ol>
        <li><strong>Генераторы частот (Г3-..., Г4-...)</strong>: Содержат много КМ конденсаторов и разъемов с позолотой.</li>
        <li><strong>Осциллографы (С1-...)</strong>: Ищите "трубчатые" конденсаторы и переключатели ПГ.</li>
        <li><strong>Частотомеры (Ч3-...)</strong>: Лидеры по содержанию золота и палладия. Один прибор может стоить как подержанное авто.</li>
        <li><strong>ЭВМ и старые компьютеры (ДВК, Искра)</strong>: Платы усыпаны желтыми микросхемами и КМ.</li>
        <li><strong>АТС и телефонные станции</strong>: Струны МКС (серебро/палладий), реле РЭС.</li>
      </ol>
    `
  },
  {
    id: '3',
    title: 'Динамика цен на палладий и платину в 2024 году',
    excerpt: 'Прогноз рынка драгметаллов. Почему сейчас лучшее время сдавать радиолом.',
    date: '20 Окт 2023',
    readTime: '4 мин',
    category: 'Аналитика',
    content: `
       <p>Рынок драгметаллов нестабилен, но тренд на редкоземельные металлы сохраняется. Палладий используется в автопроме, и спрос на него огромен.</p>
       <p>Мы рекомендуем не копить детали "на черный день", а фиксировать прибыль сейчас, пока курс доллара и биржевые котировки находятся на пике.</p>
    `
  }
];
