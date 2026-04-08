export interface ContactPayload {
  from_name: string;
  from_phone: string;
  from_email: string;
  address: string;
  preferred_date: string;
  message: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
