import { useTranslations } from 'next-intl';
import type { RoomCount } from '@/types/calculator';
import { ROOM_COUNTS, ROOM_PRICES } from '@/lib/pricing';

interface Props {
  selectedRooms: RoomCount;
  onRoomsChange: (r: RoomCount) => void;
}

export function RegularCleaningTab({ selectedRooms, onRoomsChange }: Props) {
  const t = useTranslations('calculator');

  return (
    <div>
      <p className="font-body text-sm mb-4" style={{ color: '#4A6480' }}>{t('rooms.label')}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ROOM_COUNTS.map((count) => {
          const isSelected = selectedRooms === count;
          return (
            <button
              key={count}
              onClick={() => onRoomsChange(count)}
              aria-pressed={isSelected}
              className="relative min-h-[54px] rounded-xl p-3 flex flex-col items-center justify-center gap-0.5 font-body transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C72B4]/40 focus-visible:ring-offset-2"
              style={
                isSelected
                  ? {
                      background: 'rgba(28,114,180,0.12)',
                      border: '1.5px solid rgba(28,114,180,0.55)',
                      boxShadow: '0 0 16px rgba(28,114,180,0.10)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.60)',
                      border: '1.5px solid rgba(28,114,180,0.12)',
                    }
              }
            >
              <span
                className="text-sm"
                style={{
                  fontWeight: isSelected ? 600 : 400,
                  color: isSelected ? '#1C72B4' : '#4A6480',
                }}
              >
                {t(`rooms.${count}`)}
              </span>
              <span
                className="text-xs"
                style={{ color: isSelected ? 'rgba(28,114,180,0.70)' : '#7A94AA' }}
              >
                od {ROOM_PRICES[count]} €
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
