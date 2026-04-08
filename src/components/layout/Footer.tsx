import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer
      style={{
        background: 'rgba(255,255,255,0.65)',
        borderTop: '1px solid rgba(28,114,180,0.14)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #1C72B4, #2E8FD8)' }}
              />
              <span className="font-heading text-xl text-[#162033] tracking-wide">
                Global Clean
              </span>
            </div>
            <p className="font-body text-sm" style={{ color: '#7A94AA' }}>
              {t('tagline')}
            </p>
            <p className="font-body text-xs mt-2" style={{ color: '#B8CEDE' }}>
              {t('noVat')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-body font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: '#1C72B4', letterSpacing: '0.18em' }}
            >
              {t('contactLabel')}
            </h3>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: t('address'),  href: undefined },
                { icon: Phone,  text: t('phone'),    href: `tel:${t('phone').replace(/\s/g, '')}` },
                { icon: Mail,   text: t('email'),    href: `mailto:${t('email')}` },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5 text-sm font-body">
                  <Icon
                    size={14}
                    className="mt-[3px] flex-shrink-0"
                    style={{ color: 'rgba(28,114,180,0.50)' }}
                    aria-hidden="true"
                  />
                  {href ? (
                    <a
                      href={href}
                      className="transition-colors duration-150 hover:text-[#1C72B4]"
                      style={{ color: '#7A94AA' }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ color: '#7A94AA' }}>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="font-body font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: '#1C72B4', letterSpacing: '0.18em' }}
            >
              {t('hoursLabel')}
            </h3>
            <div className="flex items-center gap-2.5">
              <Clock
                size={14}
                style={{ color: 'rgba(28,114,180,0.50)' }}
                aria-hidden="true"
              />
              <span className="font-body text-sm" style={{ color: '#7A94AA' }}>
                {t('hours')}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 text-center"
          style={{ borderTop: '1px solid rgba(28,114,180,0.10)' }}
        >
          <p className="font-body text-xs" style={{ color: '#B8CEDE' }}>
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
