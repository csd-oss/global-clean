import { useTranslations } from 'next-intl';
import { Calculator, Send, Sparkles } from 'lucide-react';

const STEPS = [
  { num: '1', ghost: '01', icon: Calculator },
  { num: '2', ghost: '02', icon: Send       },
  { num: '3', ghost: '03', icon: Sparkles   },
] as const;

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="sec-label">{t('sectionSubtitle')}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#162033]">
            {t('sectionTitle')}
          </h2>
          <div className="blue-line mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-[22px] left-[calc(50%/3+22px)] right-[calc(50%/3+22px)] h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(28,114,180,.30), rgba(184,212,234,.60), rgba(28,114,180,.30), transparent)',
            }}
            aria-hidden="true"
          />

          {STEPS.map(({ num, ghost, icon: Icon }) => (
            <div key={num} className="relative flex flex-col items-center text-center">
              {/* Ghost number */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 font-heading font-bold leading-none select-none pointer-events-none"
                style={{ fontSize: '7rem', opacity: 0.04, color: '#1C72B4' }}
                aria-hidden="true"
              >
                {ghost}
              </div>

              {/* Step icon circle */}
              <div className="relative z-10 mb-6">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    border: '1.5px solid rgba(28,114,180,0.40)',
                    boxShadow: '0 4px 16px rgba(28,114,180,0.12)',
                  }}
                >
                  <Icon size={18} style={{ color: '#1C72B4' }} aria-hidden="true" />
                </div>
              </div>

              <h3 className="font-heading text-2xl text-[#162033] mb-3 relative z-10">
                {t(`steps.${num}.title`)}
              </h3>
              <p className="font-body text-sm leading-relaxed max-w-xs relative z-10" style={{ color: '#4A6480' }}>
                {t(`steps.${num}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
