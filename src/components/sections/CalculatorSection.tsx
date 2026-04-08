'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useCalculator } from '@/hooks/useCalculator';
import { RegularCleaningTab } from '@/components/calculator/RegularCleaningTab';
import { WindowCleaningTab } from '@/components/calculator/WindowCleaningTab';
import { AdditionalServicesTab } from '@/components/calculator/AdditionalServicesTab';
import { PriceSummary } from '@/components/calculator/PriceSummary';
import { ROOM_PRICES } from '@/lib/pricing';
import { ChevronDown, Home, Wind, Plus } from 'lucide-react';

function SectionCard({
  icon: Icon,
  number,
  title,
  subtitle,
  isOpen,
  onToggle,
  badge,
  children,
}: {
  icon: React.ElementType;
  number: string;
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onToggle?: () => void;
  badge?: string;
  children: React.ReactNode;
}) {
  const isCollapsible = !!onToggle;
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.78)',
        border: `1px solid ${isOpen ? 'rgba(28,114,180,0.30)' : 'rgba(28,114,180,0.12)'}`,
        boxShadow: isOpen
          ? '0 8px 32px rgba(28,114,180,0.10)'
          : '0 2px 12px rgba(28,114,180,0.05)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        disabled={!isCollapsible}
        className={`
          w-full flex items-center gap-4 px-5 py-[14px] text-left
          ${isCollapsible ? 'cursor-pointer transition-colors duration-200 hover:bg-[#1C72B4]/[0.03]' : 'cursor-default'}
        `}
        aria-expanded={isCollapsible ? isOpen : undefined}
      >
        {/* Icon */}
        <div className="relative flex-shrink-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
            style={
              isOpen
                ? { background: 'rgba(28,114,180,0.15)', border: '1px solid rgba(28,114,180,0.35)' }
                : { background: 'rgba(28,114,180,0.07)', border: '1px solid rgba(28,114,180,0.14)' }
            }
          >
            <Icon
              size={18}
              aria-hidden="true"
              style={{ color: isOpen ? '#1C72B4' : '#7A94AA' }}
            />
          </div>
          {/* Step badge */}
          <div
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: '#1C72B4' }}
          >
            <span className="text-white text-[9px] font-bold font-body">{number}</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <span
            className="font-body font-medium text-sm block"
            style={{ color: isOpen ? '#162033' : '#4A6480' }}
          >
            {title}
          </span>
          {subtitle && !isOpen && (
            <span className="font-body text-xs" style={{ color: '#7A94AA' }}>{subtitle}</span>
          )}
        </div>

        {badge && (
          <span
            className="font-body text-xs font-semibold rounded-full px-2.5 py-1 flex-shrink-0"
            style={{
              color: '#1C72B4',
              background: 'rgba(28,114,180,0.10)',
              border: '1px solid rgba(28,114,180,0.22)',
            }}
          >
            {badge}
          </span>
        )}

        {isCollapsible && (
          <ChevronDown
            size={17}
            style={{ color: isOpen ? '#1C72B4' : '#7A94AA' }}
            className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        )}
      </button>

      {isOpen && (
        <div
          className="px-5 pb-5"
          style={{ borderTop: '1px solid rgba(28,114,180,0.10)' }}
        >
          <div className="pt-4">{children}</div>
        </div>
      )}
    </div>
  );
}

export function CalculatorSection() {
  const t = useTranslations('calculator');
  const {
    state,
    total,
    roomTotal,
    windowTotal,
    additionalTotal,
    setRooms,
    setWindowQty,
    toggleAdditional,
    requestQuote,
  } = useCalculator();

  const [windowsOpen, setWindowsOpen] = useState(false);
  const [addonsOpen, setAddonsOpen] = useState(false);

  const buildQuoteDescription = () => {
    const lines: string[] = [];
    lines.push(`${t('tabs.regular')}: ${t(`rooms.${state.selectedRooms}`)} – ${t('from')} ${ROOM_PRICES[state.selectedRooms]} €`);

    const selWindows = state.windowItems.filter((i) => i.quantity > 0);
    if (selWindows.length > 0) {
      lines.push(`\n${t('tabs.windows')}:`);
      selWindows.forEach((i) => {
        lines.push(`- ${t(i.labelKey as Parameters<typeof t>[0])}: ${i.quantity} ${t('quantity')} × ${i.unitPrice} € = ${i.quantity * i.unitPrice} €`);
      });
      lines.push(`${t('windowsTotal')}: ${windowTotal} €`);
    }

    const selAddons = state.additionalItems.filter((i) => i.checked);
    if (selAddons.length > 0) {
      lines.push(`\n${t('tabs.additional')}:`);
      selAddons.forEach((i) => {
        lines.push(`- ${t(i.labelKey as Parameters<typeof t>[0])}: ${t('from')} ${i.price} €`);
      });
      lines.push(`${t('addonsTotal')}: ${t('from')} ${additionalTotal} €`);
    }

    lines.push(`\n${t('grandTotal')}: ${t('from')} ${total} €`);
    return lines.join('\n');
  };

  const windowBadge = windowTotal > 0 ? `+${windowTotal} €` : undefined;
  const addonBadge  = additionalTotal > 0 ? `+${additionalTotal} €` : undefined;

  return (
    <section id="calculator" className="py-24 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="sec-label">{t('sectionSubtitle')}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#162033]">
            {t('sectionTitle')}
          </h2>
          <div className="blue-line mx-auto mt-5" />
        </div>

        <div className="flex flex-col gap-3">
          <SectionCard
            icon={Home}
            number="1"
            title={t('tabs.regular')}
            isOpen={true}
            badge={`${roomTotal} €`}
          >
            <RegularCleaningTab
              selectedRooms={state.selectedRooms}
              onRoomsChange={setRooms}
            />
          </SectionCard>

          <SectionCard
            icon={Wind}
            number="2"
            title={t('tabs.windows')}
            subtitle={!windowsOpen ? t('windowsOptional') : undefined}
            isOpen={windowsOpen}
            onToggle={() => setWindowsOpen((v) => !v)}
            badge={windowBadge}
          >
            <WindowCleaningTab
              items={state.windowItems}
              onQuantityChange={setWindowQty}
            />
          </SectionCard>

          <SectionCard
            icon={Plus}
            number="3"
            title={t('tabs.additional')}
            subtitle={!addonsOpen ? t('addonsOptional') : undefined}
            isOpen={addonsOpen}
            onToggle={() => setAddonsOpen((v) => !v)}
            badge={addonBadge}
          >
            <AdditionalServicesTab
              items={state.additionalItems}
              onToggle={toggleAdditional}
            />
          </SectionCard>
        </div>

        <PriceSummary
          total={total}
          roomTotal={roomTotal}
          windowTotal={windowTotal}
          additionalTotal={additionalTotal}
          onRequestQuote={() => requestQuote(buildQuoteDescription())}
        />
      </div>
    </section>
  );
}
