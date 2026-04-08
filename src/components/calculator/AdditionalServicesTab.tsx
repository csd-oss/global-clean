import { useTranslations } from 'next-intl';
import type { AdditionalItem } from '@/types/calculator';

interface Props {
  items: AdditionalItem[];
  onToggle: (id: string) => void;
}

export function AdditionalServicesTab({ items, onToggle }: Props) {
  const t = useTranslations('calculator');

  return (
    <div>
      <p className="font-body text-sm mb-4" style={{ color: '#4A6480' }}>{t('additionalLabel')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-all duration-150"
            style={
              item.checked
                ? {
                    background: 'rgba(28,114,180,0.10)',
                    border: '1.5px solid rgba(28,114,180,0.40)',
                  }
                : {
                    background: 'rgba(255,255,255,0.55)',
                    border: '1.5px solid rgba(28,114,180,0.10)',
                  }
            }
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onToggle(item.id)}
              className="w-4 h-4 flex-shrink-0"
              style={{ accentColor: '#1C72B4' }}
            />
            <div className="flex-1 min-w-0">
              <p
                className="font-body text-sm font-medium leading-tight"
                style={{ color: item.checked ? '#162033' : '#4A6480' }}
              >
                {t(item.labelKey as Parameters<typeof t>[0])}
              </p>
            </div>
            <span
              className="font-body text-sm font-semibold flex-shrink-0"
              style={{ color: item.checked ? '#1C72B4' : '#7A94AA' }}
            >
              od {item.price} €
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
