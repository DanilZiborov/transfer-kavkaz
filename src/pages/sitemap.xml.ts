import type { APIRoute } from 'astro';
import { getRoutes } from '../lib/routes';
import { localUrl, routeUrl } from '../lib/urls';

export const GET: APIRoute = async ({ site, url }) => {
  const routes = await getRoutes();
  const paths = [localUrl(), localUrl('routes/'), ...routes.map(({ id }) => routeUrl(id))];
  const locations = paths.map((path) => `  <url><loc>${new URL(path, site ?? url)}</loc></url>`);
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...locations,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
