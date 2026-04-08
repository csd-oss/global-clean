'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import type { ContactPayload, FormStatus } from '@/types/form';
import { sendContactForm } from '@/lib/emailjs';

const empty: ContactPayload = {
  from_name: '',
  from_phone: '',
  from_email: '',
  address: '',
  preferred_date: '',
  message: '',
};

export function useContactForm() {
  const [fields, setFields] = useState<ContactPayload>(empty);
  const [quoteSummary, setQuoteSummary] = useState<string>('');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  // Pre-fill quote summary on mount (handles page reload with stored quote)
  useEffect(() => {
    const stored = sessionStorage.getItem('quoteDescription');
    if (stored) setQuoteSummary(stored);
  }, []);

  // Update quote summary when calculator fires the quote event (same-page flow)
  useEffect(() => {
    const handler = (e: Event) => {
      const { quoteDescription } = (e as CustomEvent<{ quoteDescription: string }>).detail;
      setQuoteSummary(quoteDescription);
      setErrors((err) => ({ ...err, message: undefined }));
    };
    window.addEventListener('quoteReady', handler);
    return () => window.removeEventListener('quoteReady', handler);
  }, []);

  const setField = useCallback(
    (key: keyof ContactPayload, value: string) => {
      setFields((f) => ({ ...f, [key]: value }));
      setErrors((e) => ({ ...e, [key]: undefined }));
    },
    [],
  );

  const validate = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof ContactPayload, string>> = {};
    if (!fields.from_name.trim()) newErrors.from_name = 'required';
    if (!fields.from_phone.trim()) newErrors.from_phone = 'required';
    if (!fields.from_email.trim()) newErrors.from_email = 'required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email))
      newErrors.from_email = 'invalid';
    if (!fields.address.trim()) newErrors.address = 'required';
    if (!fields.preferred_date) newErrors.preferred_date = 'required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [fields]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!validate()) return;
      setStatus('submitting');

      // Build the full message: selected services summary + optional customer note
      const parts: string[] = [];
      if (quoteSummary) parts.push(quoteSummary);
      if (fields.message.trim()) parts.push(fields.message.trim());
      const combinedMessage = parts.join('\n\n---\n\n');

      try {
        await sendContactForm({ ...fields, message: combinedMessage });
        setStatus('success');
        setFields(empty);
        setQuoteSummary('');
        sessionStorage.removeItem('quoteDescription');
        sessionStorage.removeItem('quoteTotal');
      } catch {
        setStatus('error');
      }
    },
    [fields, quoteSummary, validate],
  );

  return { fields, quoteSummary, errors, status, setField, handleSubmit };
}
