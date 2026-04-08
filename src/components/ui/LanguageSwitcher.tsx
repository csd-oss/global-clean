'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const LOCALES = [
  { code: 'sk', label: 'SK' },
  { code: 'en', label: 'EN' },
  { code: 'uk', label: 'UA' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const preferred = localStorage.getItem('preferredLocale');
    if (preferred && preferred !== locale && LOCALES.some((l) => l.code === preferred)) {
      const segments = pathname.split('/');
      segments[1] = preferred;
      router.replace(segments.join('/') || '/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchLocale = (code: string) => {
    if (code === locale) return;
    localStorage.setItem('preferredLocale', code);
    const segments = pathname.split('/');
    segments[1] = code;
    router.push(segments.join('/') || '/');
  };

  return (
    <div
      className="flex items-center gap-0.5 rounded-full p-1"
      style={{
        background: 'rgba(255,255,255,0.8)',
        border: '1px solid rgba(28,114,180,.18)',
      }}
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          aria-pressed={locale === code}
          className={`
            px-2.5 py-1 rounded-full text-xs font-semibold font-body transition-all duration-150
            min-w-[34px] min-h-[28px] cursor-pointer
            ${locale === code
              ? 'bg-[#1C72B4] text-white shadow-sm'
              : 'text-[#4A6480] hover:text-[#1C72B4] hover:bg-[#1C72B4]/8'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
