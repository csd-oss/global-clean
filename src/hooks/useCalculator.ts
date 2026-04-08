'use client';

import { useState, useMemo, useCallback } from 'react';
import type { CalculatorState, RoomCount } from '@/types/calculator';
import {
  ROOM_PRICES,
  INITIAL_WINDOW_ITEMS,
  INITIAL_ADDITIONAL_ITEMS,
} from '@/lib/pricing';

const initialState: CalculatorState = {
  selectedRooms: '2',
  windowItems: INITIAL_WINDOW_ITEMS,
  additionalItems: INITIAL_ADDITIONAL_ITEMS,
};

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>(initialState);

  const roomTotal = useMemo(() => ROOM_PRICES[state.selectedRooms], [state.selectedRooms]);

  const windowTotal = useMemo(
    () => state.windowItems.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
    [state.windowItems],
  );

  const additionalTotal = useMemo(
    () => state.additionalItems.filter((i) => i.checked).reduce((sum, i) => sum + i.price, 0),
    [state.additionalItems],
  );

  const total = roomTotal + windowTotal + additionalTotal;

  const setRooms = useCallback((rooms: RoomCount) => {
    setState((prev) => ({ ...prev, selectedRooms: rooms }));
  }, []);

  const setWindowQty = useCallback((id: string, qty: number) => {
    setState((prev) => ({
      ...prev,
      windowItems: prev.windowItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, qty) } : item,
      ),
    }));
  }, []);

  const toggleAdditional = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      additionalItems: prev.additionalItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    }));
  }, []);

  const requestQuote = useCallback(
    (quoteDescription: string) => {
      sessionStorage.setItem('quoteDescription', quoteDescription);
      sessionStorage.setItem('quoteTotal', String(total));
      // Notify the contact form (already mounted) to pick up the new quote
      window.dispatchEvent(new CustomEvent('quoteReady', { detail: { quoteDescription } }));
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    [total],
  );

  return {
    state,
    total,
    roomTotal,
    windowTotal,
    additionalTotal,
    setRooms,
    setWindowQty,
    toggleAdditional,
    requestQuote,
  };
}
