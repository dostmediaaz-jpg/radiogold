// СЕРВИС ДЛЯ ОТПРАВКИ УВЕДОМЛЕНИЙ В TELEGRAM
// Инструкция:
// 1. Создайте бота через @BotFather и получите токен.
// 2. Узнайте свой Chat ID через @userinfobot (или ID группы, куда добавили бота).

// ВСТАВЬТЕ ВАШИ ДАННЫЕ СЮДА:
const BOT_TOKEN = '7000000000:AAHgF...'; // Ваш токен от BotFather
const CHAT_ID = '123456789';             // Ваш ID (или ID группы)

export interface OrderDetails {
  contact: {
    name: string;
    phone: string;
    city?: string;
  };
  cart?: {
    name: string;
    quantity: number;
    unit: string;
    price: number;
  }[];
  total?: number;
  type: 'QUICK_REQUEST' | 'CALCULATOR_ORDER';
}

export const sendToTelegram = async (data: OrderDetails): Promise<boolean> => {
  // Проверка на заглушки
  if (BOT_TOKEN.includes('AAHgF') || CHAT_ID === '123456789') {
    console.warn('⚠️ Telegram токен не настроен! Заявка выведена в консоль:');
    console.log(data);
    // Имитация успешной отправки для демонстрации интерфейса
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  let message = '';

  if (data.type === 'QUICK_REQUEST') {
    message = `⚡️ <b>НОВАЯ ЗАЯВКА С САЙТА</b>\n\n` +
              `👤 <b>Имя:</b> ${data.contact.name}\n` +
              `📱 <b>Телефон:</b> ${data.contact.phone}\n` +
              `🏙 <b>Город:</b> ${data.contact.city || 'Не указан'}`;
  } else {
    message = `🧮 <b>РАСЧЕТ КАЛЬКУЛЯТОРА</b>\n\n` +
              `👤 <b>Имя:</b> ${data.contact.name}\n` +
              `📱 <b>Телефон:</b> ${data.contact.phone}\n\n` +
              `📦 <b>Список деталей:</b>\n`;
    
    data.cart?.forEach((item, index) => {
      message += `${index + 1}. ${item.name} — ${item.quantity} ${item.unit} (${item.price.toLocaleString()} ₽)\n`;
    });

    message += `\n💰 <b>ИТОГО: ${data.total?.toLocaleString()} ₽</b>`;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    return false;
  }
};