import { useTranslations } from 'next-intl';
import { Home, Wind, Plus } from 'lucide-react';

const SERVICES = [
  { key: 'regular',    icon: Home, num: '01' },
  { key: 'windows',   icon: Wind, num: '02' },
  { key: 'additional', icon: Plus, num: '03' },
] as const;

export function ServicesSection() {
  const t = useTranslations('services');

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(({ key, icon: Icon, num }) => {
            const features = t.raw(`${key}.features`) as string[];
            return (
              <article
                key={key}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(28,114,180,.12)]"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(255,255,255,0.92)',
                  borderTop: '2px solid #1C72B4',
                  boxShadow: '0 8px 32px rgba(28,114,180,0.07)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                }}
              >
                {/* Ghost number */}
                <div
                  className="absolute top-3 right-5 font-heading font-bold leading-none select-none pointer-events-none"
                  style={{ fontSize: '5rem', color: 'rgba(28,114,180,0.06)' }}
                  aria-hidden="true"
                >
                  {num}
                </div>

                {/* Icon */}
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: 'rgba(28,114,180,0.10)',
                    border: '1px solid rgba(28,114,180,0.20)',
                  }}
                >
                  <Icon size={20} style={{ color: '#1C72B4' }} aria-hidden="true" />
                </div>

                <h3 className="font-heading text-2xl text-[#162033] mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: '#4A6480' }}>
                  {t(`${key}.description`)}
                </p>

                {/* Blue separator */}
                <div className="w-8 h-px mb-5" style={{ background: 'rgba(28,114,180,.20)' }} />

                <ul className="space-y-2.5">
                  {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-body" style={{ color: '#4A6480' }}>
                      <span
                        className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                        style={{ background: 'rgba(28,114,180,0.55)' }}
                        aria-hidden="true"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
