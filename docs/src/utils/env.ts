import { URLMAP, GITHUBURLBASE, VERCELURL } from '../constants/url';
/**
 * @description check cross-env site mode is gh
 * @returns {boolean}
 */
export function checkIsGH(): boolean {
  return process.env.SITE === 'gh';
}

/**
 * @description check cross-env site mode is deno
 * @returns {boolean}
 */
export function checkIsSSR(): boolean {
  return !!process.env.SITE && ['deno', 'render'].includes(process.env.SITE);
}

/**
 * @description get site base sub path
 * @returns {string}
 */
export function getBase(): string {
  return checkIsGH() ? GITHUBURLBASE : '/';
}

/**
 * @description get site url
 * @returns {string}
 */
export function getSiteURL(): string {
  const siteKey = process.env.SITE;
  return siteKey ? URLMAP[siteKey as keyof typeof URLMAP] : VERCELURL;
}
