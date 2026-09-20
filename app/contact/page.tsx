import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Kavelo. Tell us what you're building and we'll reply within 24 hours with a straight answer — not a discovery questionnaire.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24 lg:py-32 bg-[#0D0D12] relative overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#5B4CFF]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — info */}
            <div>
              <SectionLabel>Get in touch</SectionLabel>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl lg:text-6xl text-[#F5F4F0] mt-6 mb-6 leading-tight">
                Tell us what
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
                  you're building.
                </span>
              </h1>
              <p className="text-[#5A5A72] text-lg leading-relaxed mb-12">
                We'll read your message, review your project, and reply within
                24 hours with a straight answer — not a boilerplate sales email.
              </p>

              {/* Contact details */}
              <div className="space-y-6 stagger-grid">
                <div className="flex items-start gap-4 p-5 bg-[#13131A] border border-[#2A2A38] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#5B4CFF]/15 border border-[#5B4CFF]/20 flex items-center justify-center flex-shrink-0 text-[#7B6FFF]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#5A5A72] uppercase tracking-wider font-semibold mb-1">
                      Email us directly
                    </p>
                    <a
                      href="mailto:kavelo.hq@gmail.com"
                      className="text-[#F5F4F0] text-sm font-medium hover:text-[#7B6FFF] transition-colors"
                    >
                      kavelo.hq@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-[#13131A] border border-[#2A2A38] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5C3]/15 border border-[#00E5C3]/20 flex items-center justify-center flex-shrink-0 text-[#00E5C3]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#5A5A72] uppercase tracking-wider font-semibold mb-1">
                      Response time
                    </p>
                    <p className="text-[#F5F4F0] text-sm font-medium">
                      Within 24 hours
                    </p>
                    <p className="text-[#5A5A72] text-xs mt-0.5">
                      Usually much sooner during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-[#13131A] border border-[#2A2A38] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#5B4CFF]/15 border border-[#5B4CFF]/20 flex items-center justify-center flex-shrink-0 text-[#7B6FFF]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#5A5A72] uppercase tracking-wider font-semibold mb-1">
                      What happens next
                    </p>
                    <p className="text-[#F5F4F0] text-sm font-medium">
                      A real reply from an engineer
                    </p>
                    <p className="text-[#5A5A72] text-xs mt-0.5">
                      Not an automated sequence. Not a sales call you didn't ask
                      for.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#13131A] border border-[#2A2A38] rounded-2xl p-8 lg:p-10 motion-card animate-reveal animate-reveal-delay-2">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F5F4F0] mb-8">
                Start your project
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
