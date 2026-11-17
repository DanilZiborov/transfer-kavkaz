import { getCollection } from 'astro:content';

export async function getRoutes() {
  const routes = await getCollection('routes');
  return routes.sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}

const rubles = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
});

export function formatPrice(price: number) {
  return `от ${rubles.format(price)}`;
}
