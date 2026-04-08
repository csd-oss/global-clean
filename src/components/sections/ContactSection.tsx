import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/forms/ContactForm';
import { Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');
  const ft = useTranslations('footer');

  const contactItems = [
    {
      icon: Phone,
      href: `tel:${ft('phone').replace(/\s/g, '')}`,
      label: ft('phone'),
    },
    {
      icon: Mail,
      href: `mailto:${ft('email')}`,
      label: ft('email'),
    },
    {
      icon: Clock,
      href: undefined,
      label: ft('hours'),
    },
  ];

  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="sec-label">{t('sectionSubtitle')}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#162033]">
            {t('sectionTitle')}
          </h2>
          <div className="blue-line mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Contact details */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.78)',
                border: '1px solid rgba(28,114,180,0.14)',
                boxShadow: '0 8px 28px rgba(28,114,180,0.07)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <h3 className="font-heading text-xl text-[#162033] mb-5">
                Global Clean
              </h3>
              <ul className="space-y-4">
                {contactItems.map(({ icon: Icon, href, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(28,114,180,0.10)',
                        border: '1px solid rgba(28,114,180,0.20)',
                      }}
                    >
                      <Icon size={15} style={{ color: '#1C72B4' }} aria-hidden="true" />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm transition-colors duration-150 hover:text-[#1C72B4]"
                        style={{ color: '#4A6480' }}
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="font-body text-sm" style={{ color: '#4A6480' }}>{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust note */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(28,114,180,0.08) 0%, rgba(184,212,234,0.12) 100%)',
                border: '1px solid rgba(28,114,180,0.18)',
              }}
            >
              <p className="font-body text-sm leading-relaxed" style={{ color: '#4A6480' }}>
                {t('trustNote').split(t('trustNoteHighlight')).map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<strong style={{ color: '#1C72B4' }}>{t('trustNoteHighlight')}</strong></span>
                  ) : <span key={i}>{part}</span>
                ))}
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="lg:col-span-2 rounded-2xl p-6 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.78)',
              border: '1px solid rgba(28,114,180,0.14)',
              boxShadow: '0 8px 28px rgba(28,114,180,0.07)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
