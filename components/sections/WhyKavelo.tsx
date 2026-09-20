const values = [
  {
    id: "ship",
    label: "01",
    headline: "Ship, Don't Stall",
    body: "Most agencies disappear into discovery for weeks before you see a single line of code. We get you to a usable MVP faster — something you can click, show users, and course-correct with, instead of another spec document.",
    proof: "MVPs measured in weeks, not quarters",
    accentColor: "#5B4CFF",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    id: "honest",
    label: "02",
    headline: "Technical Honesty",
    body: "If a feature will take three weeks, you'll hear it in the first conversation — not the third invoice. We give straight answers on timelines, tradeoffs, and technical risk. No overpromising. No surprises.",
    proof: "Fixed-scope quotes, no scope creep",
    accentColor: "#00E5C3",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    id: "quality",
    label: "03",
    headline: "Built to Last",
    body: "Throwaway MVPs cost more in the long run. We write clean, well-structured code that your next engineer can read, extend, and maintain without needing a full rewrite six months in.",
    proof: "Documented, tested, handoff-ready",
    accentColor: "#5B4CFF",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "team",
    label: "04",
    headline: "One Team, No Dilution",
    body: "You will never be handed off to a junior who wasn't in the original meeting. You work directly with the engineers building your product — every call, every decision, every sprint.",
    proof: "Direct access to your engineers, always",
    accentColor: "#00E5C3",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function WhyKavelo() {
  return (
    <section className="py-24 lg:py-32 bg-[#13131A] relative overflow-hidden">
      {/* Subtle background line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2A2A38] to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2A2A38] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-[#5B4CFF] bg-[#5B4CFF]/10 border border-[#5B4CFF]/20 mb-6">
            <span className="w-1 h-1 rounded-full bg-[#5B4CFF]" />
            Why Kavelo
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-5xl text-[#F5F4F0] mt-4">
            How we work is
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #7B6FFF 0%, #00E5C3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the product.
            </span>
          </h2>
        </div>

        {/* Values grid — alternating layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-grid">
          {values.map((value) => (
            <div
              key={value.id}
              className="relative bg-[#0D0D12] border border-[#2A2A38] rounded-2xl p-8 lg:p-10 overflow-hidden group hover:border-opacity-80 motion-card"
              style={{ "--accent": value.accentColor } as React.CSSProperties}
            >
              {/* Number */}
              <div className="text-[80px] font-bold font-[family-name:var(--font-syne)] text-[#1A1A24] leading-none absolute -top-2 -right-2 select-none pointer-events-none">
                {value.label}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  backgroundColor: `${value.accentColor}18`,
                  border: `1px solid ${value.accentColor}30`,
                  color: value.accentColor,
                }}
              >
                {value.icon}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F5F4F0] mb-4">
                {value.headline}
              </h3>
              <p className="text-[#5A5A72] leading-relaxed text-sm mb-6">
                {value.body}
              </p>

              {/* Proof line */}
              <div
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: value.accentColor }}
              >
                <span
                  className="w-4 h-px"
                  style={{ backgroundColor: value.accentColor }}
                />
                {value.proof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
