import { Languages } from 'lucide-react';
import type { Locale } from '@/config';

interface Props {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: Props) {
  const handleSwitch = () => {
    const target: Locale = locale === 'zh' ? 'en' : 'zh';
    const { pathname, search, hash } = window.location;
    const re = new RegExp(`/${locale}(/|$)`);
    const next = pathname.replace(re, `/${target}$1`);
    localStorage.setItem('lang', target);
    window.location.href = next + search + hash;
  };

  return (
    <button
      onClick={handleSwitch}
      aria-label="Switch language"
      title="Switch language"
      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 px-2.5 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:text-white"
    >
      <Languages className="h-3.5 w-3.5" />
      <span className="font-mono">{locale === 'zh' ? 'EN' : '中'}</span>
    </button>
  );
}
