import { useTranslations } from 'next-intl';
import { Minus, Plus } from 'lucide-react';
import type { WindowItem } from '@/types/calculator';
import { WindowIcons } from './WindowIcons';

interface Props {
  items: WindowItem[];
  onQuantityChange: (id: string, qty: number) => void;
}

export function WindowCleaningTab({ items, onQuantityChange }: Props) {
  const t = useTranslations('calculator');

  return (
    <div>
      <p className="font-body text-sm mb-4" style={{ color: '#4A6480' }}>{t('windowsLabel')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => {
          const Icon = WindowIcons[item.id];
          const isActive = item.quantity > 0;
          return (
            <div
              key={item.id}
              className="rounded-xl p-3 transition-all duration-150"
              style={
                isActive
                  ? {
                      background: 'rgba(28,114,180,0.08)',
                      border: '1.5px solid rgba(28,114,180,0.35)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.55)',
                      border: '1.5px solid rgba(28,114,180,0.10)',
                    }
              }
            >
              <div className="flex items-center gap-3">
                {/* Window illustration */}
                <div
                  className="w-14 h-14 flex-shrink-0 rounded-lg flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
                  style={{ color: isActive ? '#1C72B4' : '#B8D4EA' }}
                >
                  {Icon ? <Icon /> : (
                    <div className="w-10 h-10 border-2 border-current rounded" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="font-body text-sm font-semibold leading-tight"
                    style={{ color: isActive ? '#162033' : '#4A6480' }}
                  >
                    {t(item.labelKey as Parameters<typeof t>[0])}
                  </p>
                  <p className="font-body text-xs mt-0.5" style={{ color: '#7A94AA' }}>
                    {item.unitPrice} €/{t('quantity')}
                    {isActive && (
                      <span className="ml-2 font-semibold" style={{ color: '#1C72B4' }}>
                        = {item.unitPrice * item.quantity} €
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Stepper */}
              <div
                className="flex items-center justify-between mt-3 pt-3"
                style={{ borderTop: '1px solid rgba(28,114,180,0.10)' }}
              >
                <button
                  onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity === 0}
                  aria-label={`Znížiť: ${t(item.labelKey as Parameters<typeof t>[0])}`}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C72B4]/40 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-[#1C72B4]/10"
                  style={{ border: '1px solid rgba(28,114,180,0.18)', color: '#4A6480' }}
                >
                  <Minus size={14} aria-hidden="true" />
                </button>

                <span
                  className="font-body text-lg font-bold tabular-nums"
                  style={{ color: isActive ? '#1C72B4' : '#B8D4EA' }}
                >
                  {item.quantity}
                </span>

                <button
                  onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                  aria-label={`Zvýšiť: ${t(item.labelKey as Parameters<typeof t>[0])}`}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C72B4]/40 hover:bg-[#1C72B4]/10"
                  style={{ border: '1px solid rgba(28,114,180,0.18)', color: '#4A6480' }}
                >
                  <Plus size={14} aria-hidden="true" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
