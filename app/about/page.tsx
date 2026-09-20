import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kavelo was built around a simple idea: founders deserve a software partner who builds well, communicates honestly, and ships on time. Learn why we exist and how we work.",
};

const values = [
  {
    headline: "Ship, Don't Stall",
    body: "The worst thing a software project can do is stall. Not fail — stall. Endless discovery, endless revisions, endless conversations about things that could be resolved by putting a working MVP in front of users. Kavelo was built to move.",
  },
  {
    headline: "Technical Honesty",
    body: "We tell you what we think — including things you might not want to hear. If your timeline is unrealistic, we'll say so on the first call. If a feature is going to add 3 weeks, we'll tell you before we start it. You deserve to make decisions with real information.",
  },
  {
    headline: "Built to Last",
    body: "We've seen too many founders inherit spaghetti code from a previous agency and face a full rewrite six months in. We build as if your next engineer is going to maintain this — because they will.",
  },
  {
    headline: "One Team, No Dilution",
    body: "There's no PM layer, no account manager buffer, no junior picking up overflow. You work directly with the engineers building your product, every step of the way.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-24 lg:py-32 bg-[#0D0D12] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#5B4CFF]/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>About Kavelo</SectionLabel>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl lg:text-6xl text-[#F5F4F0] mt-6 mb-6 leading-tight">
                Built by engineers
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #7B6FFF 0%, #00E5C3 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  who ship things.
                </span>
              </h1>
              <p className="text-[#5A5A72] text-lg leading-relaxed">
                Kavelo exists because founders kept telling us the same story:
                they hired an agency, got a beautiful proposal, waited three
                months, and ended up with code they couldn&apos;t maintain.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-[#13131A] border border-[#2A2A38] flex items-center justify-center motion-card animate-float">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-[#5B4CFF]/20 border border-[#5B4CFF]/30 flex items-center justify-center text-2xl font-bold font-[family-name:var(--font-syne)] text-[#7B6FFF] mx-auto mb-4">
                    AF
                  </div>
                  <p className="text-[#F5F4F0] font-semibold font-[family-name:var(--font-syne)] mb-1">
                    Ahmed Farag
                  </p>
                  <p className="text-[#5A5A72] text-sm">
                    Founder &amp; Engineer, Kavelo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#13131A] relative">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2A2A38] to-transparent" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionLabel accent="teal">The story</SectionLabel>
          <div className="mt-8 space-y-6 text-[#8888A8] text-lg leading-relaxed">
            <p>
              Before Kavelo, I was building other people&apos;s products —
              tutoring platforms with live classes and payments, hospital
              systems that needed booking and branding that actually worked,
              ecommerce that had to notify customers when stock came back,
              payment flows, refunds, and AI tools that read documents instead
              of just demoing well.
            </p>
            <p>
              The pattern was always the same. Founders didn&apos;t need another
              40-page discovery deck. They needed someone who could model the
              database, ship the auth, wire the payments, and put a usable
              product in front of users — then keep the code clean enough that
              the next hire wasn&apos;t rewriting it.
            </p>
            <p>
              I started Kavelo with a simple constraint: only take work I can do
              well, communicate honestly, and get to an MVP faster than the
              agencies I used to clean up after. If a timeline isn&apos;t real,
              I say so before we take the project — not after the third invoice.
            </p>
            <p>
              The name is coined: craft plus velocity. A cove you can actually
              ship from. What it stands for is software that&apos;s built, not
              churned out.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#0D0D12]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-5xl text-[#F5F4F0] mt-6">
              Values, in context.
            </h2>
            <p className="text-[#5A5A72] mt-4 max-w-lg mx-auto">
              These aren&apos;t aspirational bullets on a deck — they&apos;re
              the things we actually think about when we take on a project.
            </p>
          </div>

          <div className="space-y-6 stagger-grid">
            {values.map((v, i) => (
              <div
                key={v.headline}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start p-8 lg:p-10 bg-[#13131A] border border-[#2A2A38] rounded-2xl motion-card"
              >
                <div>
                  <span className="text-xs text-[#5A5A72] font-semibold uppercase tracking-widest">
                    0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F5F4F0] mt-2">
                    {v.headline}
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-[#5A5A72] leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#13131A] text-center border-t border-[#2A2A38]">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl text-[#F5F4F0] mb-4">
            Let&apos;s work together.
          </h2>
          <p className="text-[#5A5A72] mb-8">
            If any of this resonates, we&apos;d love to hear what you&apos;re
            building.
          </p>
          <CTAButton href="/contact" size="lg">
            Start the conversation →
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
