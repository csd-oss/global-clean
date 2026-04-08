import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'cta' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f6fc] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#1C72B4] to-[#2E8FD8] text-white hover:shadow-[0_6px_24px_rgba(28,114,180,.35)] hover:-translate-y-0.5 focus-visible:ring-[#1C72B4] shadow-[0_4px_16px_rgba(28,114,180,.22)]',
    cta:
      'bg-gradient-to-r from-[#D42B2B] to-[#E84040] text-white hover:shadow-[0_6px_28px_rgba(212,43,43,.40)] hover:-translate-y-0.5 focus-visible:ring-[#D42B2B] shadow-[0_4px_20px_rgba(212,43,43,.25)]',
    outline:
      'border-2 border-[#1C72B4] text-[#1C72B4] hover:bg-[#1C72B4]/8 focus-visible:ring-[#1C72B4]',
    ghost:
      'text-[#1C72B4] hover:bg-[#1C72B4]/8 focus-visible:ring-[#1C72B4]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-base min-h-[52px]',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
