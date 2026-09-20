const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "A focused 60-minute call to understand what you're building, why, and for whom. We scope it honestly — what's in, what's out, what it costs.",
    duration: "Week 1",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Once scope is clear, we build toward a usable MVP — not decks of wireframes. You get regular updates and a live preview throughout, so you can steer with real software.",
    duration: "Weeks 2–N",
  },
  {
    number: "03",
    title: "Ship",
    description:
      "Production deployment, domain configuration, performance checks, and a handoff walkthrough so you understand what you own.",
    duration: "Final week",
  },
  {
    number: "04",
    title: "Support",
    description:
      "30 days of post-launch support included. After that, flexible retainer options if you need ongoing iteration — no obligation.",
    duration: "30 days post-launch",
  },
];

export default function ProcessSnapshot() {
  return (
    <section className="py-24 lg:py-32 bg-[#0D0D12]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 scroll-reveal">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-[#00E5C3] bg-[#00E5C3]/10 border border-[#00E5C3]/20 mb-6">
              <span className="w-1 h-1 rounded-full bg-[#00E5C3]" />
              How it works
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-5xl text-[#F5F4F0] mt-4">
              From first call to
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #00E5C3 0%, #7B6FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                live product.
              </span>
            </h2>
          </div>
          <p className="text-[#5A5A72] text-sm leading-relaxed max-w-sm">
            A process designed around getting things done — not managing
            expectations with project updates.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-[#2A2A38] scroll-progress-track">
            <div className="scroll-progress-fill bg-gradient-to-r from-[#5B4CFF] via-[#00E5C3] to-[#7B6FFF]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 stagger-grid">
            {steps.map((step, i) => (
              <div key={step.number} className="relative step-item">
                {/* Step number bubble */}
                <div className="w-20 h-20 rounded-2xl bg-[#13131A] border border-[#2A2A38] flex flex-col items-center justify-center mb-8 relative z-10 step-bubble">
                  <span className="text-xs text-[#00E5C3] font-bold uppercase tracking-widest mb-0.5">
                    Step
                  </span>
                  <span className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F5F4F0]">
                    {step.number}
                  </span>
                </div>

                {/* Duration badge */}
                <div className="text-xs text-[#5A5A72] font-medium mb-3 uppercase tracking-wider">
                  {step.duration}
                </div>

                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F5F4F0] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#5A5A72] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
