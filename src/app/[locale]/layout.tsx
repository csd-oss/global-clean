import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { Gilda_Display, Nunito } from 'next/font/google';
import '../globals.css';

const gildaDisplay = Gilda_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Global Clean – Profesionálne upratovanie Bratislava',
  description:
    'Spoľahlivé upratovanie bytov, umývanie okien a doplnkové služby v Bratislave. Doprava zdarma. Ceny bez DPH.',
  keywords: ['upratovanie', 'bratislava', 'cleaning', 'čistenie okien', 'прибирання'],
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${gildaDisplay.variable} ${nunito.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
