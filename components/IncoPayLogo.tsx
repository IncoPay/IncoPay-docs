/**
 * IncoPay logo mark — same SVG as IncoPay/app/logo/page.tsx and Landing header (cloud + nodes).
 */
export function IncoPayLogo({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
      <circle cx="10.5" cy="16" r="1.5" fill="currentColor" />
      <circle cx="13.5" cy="16" r="1.5" fill="currentColor" />
      <line x1="12" y1="14" x2="9" y2="12" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <line x1="12" y1="14" x2="15" y2="12" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <line x1="12" y1="14" x2="10.5" y2="16" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      <line x1="12" y1="14" x2="13.5" y2="16" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
    </svg>
  );
}
