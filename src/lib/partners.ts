import partners from '../data/partners.json';

export type Partner = {
  key: string;
  name: string;
  /** URL to link to: the tracked affiliate link if one is set, else the plain official URL. */
  url: string;
  kind: string;
  blurb: string;
  /** True only when `affiliateUrl` has been filled in in partners.json. */
  affiliate: boolean;
  /** Optional store/demo links (app partners only). */
  playUrl?: string;
  demoUrl?: string;
};

/** Every partner link on the site carries these rel values, affiliate or not. */
export const PARTNER_REL = 'sponsored nofollow noopener';

export function getPartner(key: string): Partner {
  const p = (partners as Record<string, any>)[key];
  if (!p || key.startsWith('_')) throw new Error(`Unknown partner key "${key}". Add it to src/data/partners.json first.`);
  const affiliateUrl = typeof p.affiliateUrl === 'string' ? p.affiliateUrl.trim() : '';
  return { key, name: p.name, kind: p.kind, blurb: p.blurb, url: affiliateUrl || p.url, affiliate: affiliateUrl !== '', ...(p.playUrl ? { playUrl: p.playUrl } : {}), ...(p.demoUrl ? { demoUrl: p.demoUrl } : {}) };
}

export function allPartners(): Partner[] {
  return Object.keys(partners).filter((k) => !k.startsWith('_')).map(getPartner);
}
