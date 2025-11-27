export enum CategoryType {
  CAPACITOR = 'Конденсаторы',
  TRANSISTOR = 'Транзисторы',
  MICROCIRCUIT = 'Микросхемы',
  RELAY = 'Реле',
  CONNECTOR = 'Разъемы',
  RESISTOR = 'Резисторы',
  SWITCH = 'Переключатели',
  TECHNICAL_SILVER = 'Техническое серебро',
  BATTERY = 'Аккумуляторы',
  WATCH = 'Корпуса часов',
  LAMP = 'Лампы',
  LIGATURE = 'Лигатура (Импорт)'
}

export interface ComponentItem {
  id: string;
  name: string;
  category: CategoryType;
  pricePerUnit: number; // in RUB
  unit: 'шт' | 'г' | 'кг' | 'контакт';
  imagePlaceholder: string;
  description: string;
}

export interface CartItem extends ComponentItem {
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string; // HTML content
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TickerItem {
  symbol: string;
  price: number;
  change: number; // percentage
}