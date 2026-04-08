'use client';

import { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';

interface DatePickerProps {
  value: string; // 'YYYY-MM-DD'
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  label: string;
  name: string;
}

function formatDisplay(dateStr: string): string {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  if (!y || !m || !d) return dateStr;
  return `${d}.${m}.${y}`;
}

export function DatePicker({ value, onChange, error, required, label, name }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = value ? new Date(value) : undefined;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleSelect(day: Date | undefined) {
    if (!day) return;
    const y = day.getFullYear();
    const m = String(day.getMonth() + 1).padStart(2, '0');
    const d = String(day.getDate()).padStart(2, '0');
    onChange(`${y}-${m}-${d}`);
    setOpen(false);
  }

  const inputBorderClass = error
    ? 'border-[#D42B2B]/50 bg-[#fff5f5]'
    : 'border-[rgba(28,114,180,0.18)] bg-[rgba(255,255,255,0.85)] hover:border-[rgba(28,114,180,0.30)]';

  return (
    <div className="flex flex-col gap-1.5" ref={ref}>
      <label htmlFor={name} className="font-body text-sm font-medium" style={{ color: '#4A6480' }}>
        {label}
        {required && (
          <span style={{ color: 'rgba(28,114,180,0.65)' }} className="ml-0.5" aria-hidden="true">*</span>
        )}
      </label>

      <button
        id={name}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-invalid={!!error}
        className={`w-full font-body text-sm rounded-xl px-4 py-3 min-h-[44px] outline-none transition-all duration-150 border flex items-center justify-between ${inputBorderClass} ${open ? 'border-[rgba(28,114,180,0.55)] ring-2 ring-[rgba(28,114,180,0.12)] bg-white' : ''}`}
      >
        <span style={{ color: value ? '#162033' : '#B8CEDE' }}>
          {value ? formatDisplay(value) : 'DD.MM.YYYY'}
        </span>
        <CalendarDays size={16} style={{ color: '#7A94AA', flexShrink: 0 }} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={label}
          className="absolute z-50 mt-1 rounded-2xl p-4"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(28,114,180,0.18)',
            boxShadow: '0 16px 48px rgba(28,114,180,0.14)',
          }}
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleSelect}
            disabled={{ before: new Date() }}
            showOutsideDays
            components={{
              Chevron: ({ orientation }) =>
                orientation === 'left'
                  ? <ChevronLeft size={16} />
                  : <ChevronRight size={16} />,
            }}
            classNames={{
              root: 'font-body text-sm',
              months: 'flex flex-col',
              month: '',
              month_caption: 'flex items-center justify-between mb-3',
              caption_label: 'font-body font-semibold text-sm',
              nav: 'flex items-center gap-1',
              button_previous: 'p-1.5 rounded-lg hover:bg-[rgba(28,114,180,0.08)] text-[#4A6480] transition-colors',
              button_next: 'p-1.5 rounded-lg hover:bg-[rgba(28,114,180,0.08)] text-[#4A6480] transition-colors',
              month_grid: 'w-full border-collapse',
              weekdays: '',
              weekday: 'text-center text-xs font-semibold pb-2 w-9',
              week: '',
              day: 'p-0 text-center',
              day_button: [
                'w-9 h-9 rounded-xl text-sm transition-all duration-100 font-body',
                'hover:bg-[rgba(28,114,180,0.10)] hover:text-[#1C72B4]',
                'focus:outline-none focus:ring-2 focus:ring-[rgba(28,114,180,0.25)]',
              ].join(' '),
              selected: '!bg-[#1C72B4] !text-white rounded-xl font-semibold',
              today: 'font-bold text-[#1C72B4]',
              outside: 'opacity-30',
              disabled: 'opacity-20 cursor-not-allowed hover:bg-transparent hover:text-inherit',
            }}
            styles={{
              caption_label: { color: '#162033' },
              weekday: { color: '#7A94AA' },
              day_button: { color: '#162033' },
            }}
          />
        </div>
      )}

      {error && (
        <p id={`${name}-error`} role="alert" className="font-body text-xs" style={{ color: '#D42B2B' }}>
          {error}
        </p>
      )}
    </div>
  );
}
