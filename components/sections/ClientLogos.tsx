import type { ReactNode } from "react";

type LogoItem = {
  name: string;
  mark: ReactNode;
};

const logos: LogoItem[] = [
  {
    name: "Northline",
    mark: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M3 14V4h3l5 7.2V4h3v10h-3L6 6.8V14H3Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Lumenpath",
    mark: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 2.2v2.2M9 13.6v2.2M2.2 9h2.2M13.6 9h2.2M4.2 4.2l1.6 1.6M12.2 12.2l1.6 1.6M13.8 4.2l-1.6 1.6M5.8 12.2l-1.6 1.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Harbor & Co",
    mark: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M3 13c2-2 4-3 6-3s4 1 6 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M9 4v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 6.5 9 4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Velora",
    mark: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M3.5 4 9 14.5 14.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Nimbus",
    mark: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M5.2 13.2h7.4A3.2 3.2 0 0 0 14.5 7.4 4.1 4.1 0 0 0 7.2 6.2 3.3 3.3 0 0 0 5.2 13.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ClientLogos() {
  return (
    <div className="border-t border-[#2A2A38] pt-12">
      <p className="text-center text-xs text-[#5A5A72] uppercase tracking-widest mb-10">
        Teams we&apos;ve built with
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
        {logos.map(({ name, mark }) => (
          <div
            key={name}
            className="flex items-center gap-2.5 text-[#5A5A72] hover:text-[#C8C7C0] transition-colors duration-300"
          >
            <span className="opacity-80">{mark}</span>
            <span className="font-[family-name:var(--font-syne)] font-semibold text-sm tracking-wide">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
