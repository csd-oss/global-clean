interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'tel' | 'email' | 'date' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required,
}: FormFieldProps) {
  const inputBase = `
    w-full font-body text-sm text-[#162033] rounded-xl px-4 py-3 min-h-[44px]
    outline-none transition-all duration-150
    placeholder:text-[#B8CEDE]
    ${error
      ? 'border border-[#D42B2B]/50 bg-[#fff5f5]'
      : 'border border-[rgba(28,114,180,0.18)] bg-[rgba(255,255,255,0.85)] hover:border-[rgba(28,114,180,0.30)] focus:border-[rgba(28,114,180,0.55)] focus:ring-2 focus:ring-[rgba(28,114,180,0.12)] focus:bg-white'
    }
  `;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-body text-sm font-medium" style={{ color: '#4A6480' }}>
        {label}
        {required && (
          <span style={{ color: 'rgba(28,114,180,0.65)' }} className="ml-0.5" aria-hidden="true">*</span>
        )}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={4}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`${inputBase} resize-none min-h-[100px]`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={inputBase}
        />
      )}

      {error && (
        <p id={`${name}-error`} role="alert" className="font-body text-xs" style={{ color: '#D42B2B' }}>
          {error}
        </p>
      )}
    </div>
  );
}
