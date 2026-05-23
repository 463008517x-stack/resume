import { zh } from './zh';
import { en } from './en';
import type { Locale } from '@/config';

const dict = { zh, en } as const;

export function useTranslations(locale: Locale) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: unknown = dict[locale];
    for (const k of keys) {
      if (typeof result === 'object' && result !== null && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof result === 'string' ? result : key;
  };
}

export function getLocaleFromPath(pathname: string, base = '/resume'): Locale {
  const stripped = pathname.replace(base, '');
  if (stripped.startsWith('/en')) return 'en';
  return 'zh';
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}

export function pickLocale<T>(field: { zh: T; en: T }, locale: Locale): T {
  return field[locale];
}
