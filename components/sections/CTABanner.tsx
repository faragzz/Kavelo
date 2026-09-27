import CTAButton from "@/components/ui/CTAButton";

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F5F1] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-[#D9622B]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <p className="text-[#686B70] text-sm font-medium uppercase tracking-widest mb-6">
          For clinics, academies, and product teams
        </p>

        {/* Headline */}
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-6xl text-[#1A1D24] leading-tight mb-6">
          Have a workflow
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #B94C1F 0%, #2E6E62 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            worth improving?
          </span>
        </h2>

        <p className="text-[#686B70] text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Tell Ahmed where booking, learning, or day-to-day operations get
          stuck. He&apos;ll email you within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/contact" size="lg">
            Talk through your project →
          </CTAButton>
          <a
            href="mailto:kavelo.hq@gmail.com"
            className="text-sm text-[#686B70] hover:text-[#1A1D24] transition-colors"
          >
            Or email us directly at kavelo.hq@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
