'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { MapPin, ShieldCheck } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const badges = [
    { icon: MapPin,       key: 'delivery'  },
    { icon: ShieldCheck,  key: 'guarantee' },
  ] as const;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center pt-16">

      {/* Content */}
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Overline */}
        <p className="anim-up font-body text-[11px] tracking-[0.24em] uppercase mb-6"
          style={{ color: 'rgba(28,114,180,0.7)' }}>
          Bratislava &mdash; Professional Cleaning Service
        </p>

        {/* Headline */}
        <h1
          className="anim-up-1 font-heading text-[#162033] leading-[1.08] mb-7"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6.2rem)' }}
        >
          {t('headline').split(' ').map((word, i, arr) => {
            // italicize the middle word(s) for visual flair
            const isAccent = i === 1 || i === 2;
            return isAccent ? (
              <em
                key={i}
                className="not-italic"
                style={{
                  background: 'linear-gradient(135deg, #1C72B4 0%, #2E8FD8 60%, #1a90d8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {word}{i < arr.length - 1 ? ' ' : ''}
              </em>
            ) : (
              <span key={i}>{word}{i < arr.length - 1 ? ' ' : ''}</span>
            );
          })}
        </h1>

        {/* Blue divider */}
        <div className="anim-up-2 blue-line mx-auto mb-8" />

        {/* Sub-headline */}
        <p
          className="anim-up-2 font-body max-w-md mx-auto mb-10 leading-relaxed font-light"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#4A6480' }}
        >
          {t('subheadline')}
        </p>

        {/* CTA */}
        <div className="anim-up-3 mb-12">
          <Button variant="cta" size="lg" onClick={() => scrollTo('calculator')}>
            {t('cta')}
          </Button>
        </div>

        {/* Trust badges */}
        <div className="anim-up-4 flex flex-wrap justify-center gap-3">
          {badges.map(({ icon: Icon, key }, i) => (
            <div
              key={key}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 ${
                i === 0 ? 'anim-float-a' : i === 1 ? 'anim-float-b' : 'anim-float-c'
              }`}
              style={{
                background: 'rgba(255,255,255,0.80)',
                border: '1px solid rgba(255,255,255,0.95)',
                boxShadow: '0 4px 18px rgba(28,114,180,0.09)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <Icon size={13} style={{ color: '#1C72B4', opacity: 0.8 }} aria-hidden="true" />
              <span className="font-body text-sm" style={{ color: '#4A6480' }}>
                {t(`badges.${key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
