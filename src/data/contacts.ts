import { localUrl } from '../lib/urls';

export const contacts = {
  phone: '+71231112233',
  whatsapp: '+71231112233',
  // Мок профиля для тестирования перехода. Для запуска нужна ссылка из профиля MAX.
  maxProfileUrl: 'https://max.ru/u/71231112233',
  // phone здесь тоже мок: рабочий переход в чат настраивается по ссылке профиля.
  maxWebUrl: 'https://web.max.ru/?phone=71231112233',
};

export const phoneDisplay = contacts.phone.replace(/^(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 ($2) $3-$4-$5');
const whatsappNumber = contacts.whatsapp.replace(/\D/g, '');

export const contactChannels = [
  { icon: 'phone', label: 'Позвонить', mobileHref: `tel:${contacts.phone}`, desktopHref: localUrl('#contacts') },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    mobileHref: `https://wa.me/${whatsappNumber}`,
    desktopHref: `https://web.whatsapp.com/send?phone=${whatsappNumber}`,
  },
  { icon: 'max', label: 'MAX', mobileHref: contacts.maxProfileUrl, desktopHref: contacts.maxWebUrl },
] as const;
