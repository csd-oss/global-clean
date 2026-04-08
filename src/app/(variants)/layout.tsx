export const metadata = {
  title: 'Global Clean – Professional Cleaning Bratislava',
  description: 'Reliable, thorough, and fairly priced cleaning services in Bratislava.',
};

export default function VariantsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
