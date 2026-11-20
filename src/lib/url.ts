/** Join a site-relative path onto the configured base path ("/template-prompt-shop/" or "/"). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  return base + path.replace(/^\//, '');
}
/** Absolute URL (for canonicals, sitemap, JSON-LD). */
export function absUrl(path = '', site?: URL): string {
  return new URL(withBase(path), site ?? import.meta.env.SITE).toString();
}
export const SITE_NAME = 'Template and Prompt Shop';
