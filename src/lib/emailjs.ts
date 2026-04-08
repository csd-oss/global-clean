import type { ContactPayload } from '@/types/form';

export async function sendContactForm(data: ContactPayload): Promise<void> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Contact API error ${res.status}: ${text}`);
  }
}
