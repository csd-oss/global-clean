import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { ArrowDown } from 'lucide-react';

interface Props {
  total: number;
  roomTotal: number;
  windowTotal: number;
  additionalTotal: number;
  onRequestQuote: () => void;
}

export function PriceSummary({ total, roomTotal, windowTotal, additionalTotal, onRequestQuote }: Props) {
  const t = useTranslations('calculator');

  return (
    <div
      className="mt-6 rounded-2xl p-6"
      style={{
        background: 'rgba(255,255,255,0.82)',
        border: '1px solid rgba(28,114,180,0.22)',
        boxShadow: '0 8px 36px rgba(28,114,180,0.10)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
      }}
    >
      {/* Breakdown */}
      {(windowTotal > 0 || additionalTotal > 0) && (
        <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 text-sm font-body" style={{ color: '#7A94AA' }}>
          <span>{t('tabs.regular')}: {roomTotal} €</span>
          {windowTotal > 0    && <span style={{ color: 'rgba(28,114,180,0.70)' }}>{t('tabs.windows')}: +{windowTotal} €</span>}
          {additionalTotal > 0 && <span style={{ color: 'rgba(28,114,180,0.70)' }}>{t('tabs.additional')}: +{additionalTotal} €</span>}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-body text-sm mb-1" style={{ color: '#4A6480' }}>{t('total')}</p>
          <div className="flex items-baseline gap-2">
            <span className="font-body text-lg" style={{ color: '#4A6480' }}>{t('from')}</span>
            <span className="font-heading text-5xl" style={{ color: '#1C72B4' }}>
              {total}
            </span>
            <span className="font-body text-2xl" style={{ color: '#4A6480' }}>{t('currency')}</span>
          </div>
        </div>

        <Button
          variant="cta"
          size="lg"
          onClick={onRequestQuote}
          className="w-full sm:w-auto flex-shrink-0 whitespace-nowrap"
        >
          <ArrowDown size={18} aria-hidden="true" />
          {t('cta')}
        </Button>
      </div>

      <p className="font-body text-xs mt-4 leading-relaxed" style={{ color: 'rgba(74,100,128,0.75)' }}>
        {t('disclaimer')}
      </p>
      <p className="font-body text-xs mt-1" style={{ color: 'rgba(74,100,128,0.55)' }}>
        {t('noVat')}
      </p>
    </div>
  );
}
