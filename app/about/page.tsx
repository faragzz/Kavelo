import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ahmed Farag, the founder-engineer behind Kavelo. Learn about the clinic booking, academy, and custom workflow software practice.",
};

const values = [
  {
    headline: "Scope before building",
    body: "Before development begins, I work with you to define what is included, what is not, the expected timeline, and the estimated cost. The project moves forward when those details are clear.",
  },
  {
    headline: "Technical Honesty",
    body: "You work directly with me, Ahmed Farag, founder and engineer. I explain technical tradeoffs and discuss changes with you so you can make decisions with clear information.",
  },
  {
    headline: "Built to Last",
    body: "The goal is software that can be maintained after launch. I focus on clear structure, testing key workflows, and a practical handoff for whoever supports the product next.",
  },
  {
    headline: "Founder-led delivery",
    body: "I lead the technical work and stay your direct contact from the first conversation through implementation and handoff. Any additional contributors and responsibilities are agreed up front.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-24 lg:py-32 bg-[#F7F5F1] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D9622B]/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>About Kavelo</SectionLabel>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl lg:text-6xl text-[#1A1D24] mt-6 mb-6 leading-tight">
                Built by a founder-engineer
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #B94C1F 0%, #2E6E62 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  who ships things.
                </span>
              </h1>
              <p className="text-[#686B70] text-lg leading-relaxed">
                Kavelo is my founder-led software practice. I focus on clinic
                booking, academy platforms, and custom workflows, with direct
                communication from scoping through delivery.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-white border border-[#E4E0D9] flex items-center justify-center motion-card animate-float">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-[#D9622B]/20 border border-[#D9622B]/30 flex items-center justify-center text-2xl font-bold font-[family-name:var(--font-syne)] text-[#B94C1F] mx-auto mb-4">
                    AF
                  </div>
                  <p className="text-[#1A1D24] font-semibold font-[family-name:var(--font-syne)] mb-1">
                    Ahmed Khaled Farag
                  </p>
                  <p className="text-[#686B70] text-sm">
                    Founder &amp; Engineer, Kavelo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white relative">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E4E0D9] to-transparent" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionLabel accent="teal">The story</SectionLabel>
          <div className="mt-8 space-y-6 text-[#686B70] text-lg leading-relaxed">
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
              I started Kavelo with a simple constraint: take on work I can
              deliver responsibly, communicate clearly, and scope before
              development begins. If a timeline or requirement needs to change,
              I raise it early so the client can make an informed decision.
            </p>
            <p>
              The name is coined: craft plus velocity. A cove you can actually
              ship from. What it stands for is software that&apos;s built, not
              churned out.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F7F5F1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <SectionLabel>How I work</SectionLabel>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-5xl text-[#1A1D24] mt-6">
              Values, in context.
            </h2>
            <p className="text-[#686B70] mt-4 max-w-lg mx-auto">
              These are the principles I use when scoping and delivering a
              project.
            </p>
          </div>

          <div className="space-y-6 stagger-grid">
            {values.map((v, i) => (
              <div
                key={v.headline}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start p-8 lg:p-10 bg-white border border-[#E4E0D9] rounded-2xl motion-card"
              >
                <div>
                  <span className="text-xs text-[#686B70] font-semibold uppercase tracking-widest">
                    0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#1A1D24] mt-2">
                    {v.headline}
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-[#686B70] leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center border-t border-[#E4E0D9]">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl text-[#1A1D24] mb-4">
            Let&apos;s work together.
          </h2>
          <p className="text-[#686B70] mb-8">
            If this approach fits your project, tell me what you&apos;re
            building and where the current process gets stuck.
          </p>
          <CTAButton href="/contact" size="lg">
            Start the conversation →
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
