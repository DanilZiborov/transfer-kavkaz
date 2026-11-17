const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function localUrl(path = '') {
  return `${base}${path}`;
}

export function routeUrl(id: string) {
  return localUrl(`routes/${id}/`);
}

export const indexable = import.meta.env.SITE_INDEXABLE === 'true';
