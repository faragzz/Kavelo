import CTAButton from "@/components/ui/CTAButton";

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32 bg-[#0D0D12] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-[#5B4CFF]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <p className="text-[#5A5A72] text-sm font-medium uppercase tracking-widest mb-6">
          Ready when you are
        </p>

        {/* Headline */}
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-6xl text-[#F5F4F0] leading-tight mb-6">
          Let's build something
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #7B6FFF 0%, #00E5C3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            worth shipping.
          </span>
        </h2>

        <p className="text-[#5A5A72] text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Tell us what you're building. We'll respond within 24 hours with a straight answer
          — not a discovery questionnaire.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/contact" size="lg">
            Start your project →
          </CTAButton>
          <a
            href="mailto:kavelo.hq@gmail.com"
            className="text-sm text-[#8888A8] hover:text-[#F5F4F0] transition-colors"
          >
            Or email us directly at kavelo.hq@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
