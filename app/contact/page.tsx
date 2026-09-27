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
      <section className="py-24 lg:py-32 bg-[#F7F5F1] relative overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#D9622B]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — info */}
            <div>
              <SectionLabel>Get in touch</SectionLabel>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl lg:text-6xl text-[#1A1D24] mt-6 mb-6 leading-tight">
                Tell us what
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
                  you're building.
                </span>
              </h1>
              <p className="text-[#686B70] text-lg leading-relaxed mb-12">
                Ahmed will review your message and email you within 24 hours
                with a straight answer.
              </p>

              {/* Contact details */}
              <div className="space-y-6 stagger-grid">
                <div className="flex items-start gap-4 p-5 bg-white border border-[#E4E0D9] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#D9622B]/15 border border-[#D9622B]/20 flex items-center justify-center flex-shrink-0 text-[#B94C1F]">
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
                    <p className="text-xs text-[#686B70] uppercase tracking-wider font-semibold mb-1">
                      Email us directly
                    </p>
                    <a
                      href="mailto:kavelo.hq@gmail.com"
                      className="text-[#1A1D24] text-sm font-medium hover:text-[#B94C1F] transition-colors"
                    >
                      kavelo.hq@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-[#E4E0D9] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#2E6E62]/15 border border-[#2E6E62]/20 flex items-center justify-center flex-shrink-0 text-[#2E6E62]">
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
                    <p className="text-xs text-[#686B70] uppercase tracking-wider font-semibold mb-1">
                      Response time
                    </p>
                    <p className="text-[#1A1D24] text-sm font-medium">
                      Within 24 hours
                    </p>
                    <p className="text-[#686B70] text-xs mt-0.5">
                      Usually much sooner during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-[#E4E0D9] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#D9622B]/15 border border-[#D9622B]/20 flex items-center justify-center flex-shrink-0 text-[#B94C1F]">
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
                    <p className="text-xs text-[#686B70] uppercase tracking-wider font-semibold mb-1">
                      What happens next
                    </p>
                    <p className="text-[#1A1D24] text-sm font-medium">
                      A real reply from an engineer
                    </p>
                    <p className="text-[#686B70] text-xs mt-0.5">
                      No automated sequence. Phone calls only if you request
                      one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white border border-[#E4E0D9] rounded-2xl p-8 lg:p-10 motion-card animate-reveal animate-reveal-delay-2">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#1A1D24] mb-8">
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
