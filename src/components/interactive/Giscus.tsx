import { useEffect, useRef } from 'react';
import { GISCUS } from '@/config';
import type { Locale } from '@/config';

interface Props {
  locale: Locale;
}

export default function Giscus({ locale }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (ref.current.querySelector('script')) return;

    const isDark = document.documentElement.classList.contains('dark');

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', GISCUS.repo);
    script.setAttribute('data-repo-id', GISCUS.repoId);
    script.setAttribute('data-category', GISCUS.category);
    script.setAttribute('data-category-id', GISCUS.categoryId);
    script.setAttribute('data-mapping', GISCUS.mapping);
    script.setAttribute('data-strict', GISCUS.strict);
    script.setAttribute('data-reactions-enabled', GISCUS.reactionsEnabled);
    script.setAttribute('data-emit-metadata', GISCUS.emitMetadata);
    script.setAttribute('data-input-position', GISCUS.inputPosition);
    script.setAttribute('data-theme', isDark ? 'dark_dimmed' : 'light');
    script.setAttribute('data-lang', locale === 'zh' ? 'zh-CN' : 'en');
    script.setAttribute('data-loading', 'lazy');

    ref.current.appendChild(script);
  }, [locale]);

  return <div ref={ref} className="giscus mt-8" />;
}
