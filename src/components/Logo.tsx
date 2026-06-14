export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>
      <path
        d="M10 6h20c6 0 11 4 11 10 0 5-3 8-7 9l9 17h-9l-8-15h-6v15h-9V6z"
        fill="url(#logoGrad)"
      />
      <path d="M19 14v8h7c2 0 4-1 4-4s-2-4-4-4h-7z" fill="#1a1024" />
    </svg>
  );
}