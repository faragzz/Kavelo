const values = [
  {
    id: "ship",
    label: "01",
    headline: "Ship, Don't Stall",
    body: "Start with the workflow and the people who use it. The first milestone is a clearly scoped plan, followed by working software you can review and steer.",
    proof: "Working milestones, reviewed with you",
    accentColor: "#D9622B",
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
    body: "Before work starts, you receive an agreed scope, timeline, and estimate. Tradeoffs and changes are discussed openly, so you can decide what belongs in the project.",
    proof: "Scope and estimate agreed before work",
    accentColor: "#2E6E62",
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
    body: "The goal is software your team can continue to operate and extend. Key workflows are tested, and the handoff covers how the product is structured and deployed.",
    proof: "Practical handoff for future maintenance",
    accentColor: "#D9622B",
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
    headline: "Founder-led, direct access",
    body: "Ahmed Khaled Farag leads the technical work and is your direct contact from scoping through delivery. The person discussing the product is the person building it.",
    proof: "Direct work with the founder-engineer",
    accentColor: "#2E6E62",
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
    <section className="py-24 lg:py-32 bg-[#F7F5F1] relative overflow-hidden">
      {/* Subtle background line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E4E0D9] to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E4E0D9] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-[#D9622B] bg-[#D9622B]/10 border border-[#D9622B]/20 mb-6">
            <span className="w-1 h-1 rounded-full bg-[#D9622B]" />
            Why Kavelo
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-5xl text-[#1A1D24] mt-4">
            How I work is
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #B94C1F 0%, #2E6E62 100%)",
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
              className="relative bg-white border border-[#E4E0D9] rounded-2xl p-8 lg:p-10 overflow-hidden group hover:border-opacity-80 motion-card"
              style={{ "--accent": value.accentColor } as React.CSSProperties}
            >
              {/* Number */}
              <div className="text-[80px] font-bold font-[family-name:var(--font-syne)] text-[#1A1D24] leading-none absolute -top-2 -right-2 select-none pointer-events-none">
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

              <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#1A1D24] mb-4">
                {value.headline}
              </h3>
              <p className="text-[#686B70] leading-relaxed text-sm mb-6">
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
