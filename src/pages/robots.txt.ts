import type { APIRoute } from 'astro';
import { indexable, localUrl } from '../lib/urls';

export const GET: APIRoute = ({ site, url }) => {
  // Прототип оставляем доступным для обхода, чтобы робот мог прочитать noindex.
  const lines = ['User-agent: *', 'Disallow:'];
  if (indexable) lines.push(`Sitemap: ${new URL(localUrl('sitemap.xml'), site ?? url)}`);
  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
