export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Присваиваем более уникальный ID, чтобы избежать совпадений в DOM */}
        <linearGradient id="rubezhLogoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>
      
      {/* Используем fillRule="evenodd", чтобы внутренний контур автоматически 
        стал прозрачным вырезом. Теперь фон за логотипом будет красиво просвечивать.
      */}
      <path
        d="M10 6h20c6 0 11 4 11 10 0 5-3 8-7 9l9 17h-9l-8-15h-6v15h-9V6zm9 8v8h7c2 0 4-1 4-4s-2-4-4-4h-7z"
        fill="url(#rubezhLogoGradient)"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}