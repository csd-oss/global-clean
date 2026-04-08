'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const t = useTranslations('nav');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(240,246,252,.88)',
        borderBottom: '1px solid rgba(28,114,180,.12)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C72B4]/40 rounded-sm"
            aria-label="Global Clean – home"
          >
            <Image
              src="/images/image.png"
              alt="Global Clean"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="font-heading text-[1.25rem] tracking-wide text-[#162033] hidden sm:block leading-none">
              Global Clean
            </span>
          </button>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="primary" size="sm" onClick={() => scrollTo('contact')}>
              {t('cta')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
