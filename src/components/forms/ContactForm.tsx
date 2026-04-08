'use client';

import { useTranslations } from 'next-intl';
import { useContactForm } from '@/hooks/useContactForm';
import { FormField } from './FormField';
import { DatePicker } from './DatePicker';
import { Button } from '@/components/ui/Button';
import { CheckCircle, AlertCircle, Loader2, ClipboardList } from 'lucide-react';

export function ContactForm() {
  const t = useTranslations('contact');
  const { fields, quoteSummary, errors, status, setField, handleSubmit } = useContactForm();
  const te = (code?: string) => {
    if (!code) return undefined;
    if (code === 'required') return t('required');
    if (code === 'invalid') return t('invalidEmail');
    return code;
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(28,114,180,0.10)',
            border: '1px solid rgba(28,114,180,0.28)',
          }}
        >
          <CheckCircle size={28} style={{ color: '#1C72B4' }} aria-hidden="true" />
        </div>
        <h3 className="font-heading text-2xl text-[#162033]">
          {t('successTitle')}
        </h3>
        <p className="font-body max-w-sm" style={{ color: '#4A6480' }}>{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label={t('sectionTitle')}>
      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl p-4 mb-6"
          style={{
            background: 'rgba(212,43,43,0.06)',
            border: '1px solid rgba(212,43,43,0.22)',
          }}
        >
          <AlertCircle size={18} style={{ color: '#D42B2B' }} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="font-body text-sm" style={{ color: '#D42B2B' }}>{t('error')}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label={t('fields.name')}
          name="from_name"
          type="text"
          value={fields.from_name}
          onChange={(v) => setField('from_name', v)}
          placeholder={t('placeholders.name')}
          error={te(errors.from_name)}
          required
        />
        <FormField
          label={t('fields.phone')}
          name="from_phone"
          type="tel"
          value={fields.from_phone}
          onChange={(v) => setField('from_phone', v)}
          placeholder={t('placeholders.phone')}
          error={te(errors.from_phone)}
          required
        />
        <FormField
          label={t('fields.email')}
          name="from_email"
          type="email"
          value={fields.from_email}
          onChange={(v) => setField('from_email', v)}
          placeholder={t('placeholders.email')}
          error={te(errors.from_email)}
          required
        />
        <FormField
          label={t('fields.address')}
          name="address"
          type="text"
          value={fields.address}
          onChange={(v) => setField('address', v)}
          placeholder={t('placeholders.address')}
          error={te(errors.address)}
          required
        />
        <div className="sm:col-span-2 relative">
          <DatePicker
            label={t('fields.preferredDate')}
            name="preferred_date"
            value={fields.preferred_date}
            onChange={(v) => setField('preferred_date', v)}
            error={errors.preferred_date ? t('required') : undefined}
            required
          />
        </div>
        {quoteSummary && (
          <div className="sm:col-span-2">
            <div
              className="rounded-xl p-4"
              style={{
                background: 'rgba(28,114,180,0.05)',
                border: '1px solid rgba(28,114,180,0.20)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <ClipboardList size={15} style={{ color: '#1C72B4', flexShrink: 0 }} aria-hidden="true" />
                <span
                  className="font-body text-xs font-semibold uppercase tracking-widest"
                  style={{ color: '#1C72B4' }}
                >
                  {t('selectedServicesTitle')}
                </span>
              </div>
              <pre
                className="font-body text-sm whitespace-pre-wrap leading-relaxed"
                style={{ color: '#4A6480' }}
              >
                {quoteSummary}
              </pre>
            </div>
          </div>
        )}
        <div className="sm:col-span-2">
          <FormField
            label={t('fields.message')}
            name="message"
            type="textarea"
            value={fields.message}
            onChange={(v) => setField('message', v)}
            placeholder={t('placeholders.message')}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button
          type="submit"
          variant="cta"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto whitespace-nowrap"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              {t('submitting')}
            </>
          ) : (
            t('submit')
          )}
        </Button>
        <p className="font-body text-xs" style={{ color: '#7A94AA' }}>{t('note')}</p>
      </div>
    </form>
  );
}
