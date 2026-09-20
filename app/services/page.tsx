import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kavelo builds websites, web applications, and mobile applications for founders and small businesses. See what's included, typical timelines, and ideal-client fit for each service.",
};

const services = [
  {
    id: "website-development",
    label: "Websites & Landing Pages",
    headline: "A website that works as hard as you do.",
    subline:
      "Fast, semantic, and optimized for search — built on Next.js, not a drag-and-drop builder.",
    included: [
      "Custom design (no templates)",
      "Mobile-first, responsive layout",
      "Performance-optimized (Core Web Vitals green)",
      "SEO foundations: meta, sitemap, structured data",
      "CMS integration (Contentful, Sanity, or similar) if needed",
      "Deployment on Vercel or your preferred host",
      "Analytics setup (GA4 or Plausible)",
    ],
    idealClient:
      "Founders launching a product, businesses replacing an outdated site, or anyone who's outgrown a no-code builder and needs something that actually performs.",
    accent: "#5B4CFF",
  },
  {
    id: "web-applications",
    label: "Custom Platforms & Portals",
    headline: "From spreadsheet workflow to real product.",
    subline:
      "Custom SaaS tools, internal dashboards, client portals, and MVPs — built on modern stacks with architecture you won't regret.",
    included: [
      "Full-stack web application (Next.js + TypeScript)",
      "Database design and API architecture",
      "Authentication and authorization",
      "Third-party integrations (Stripe, Twilio, etc.)",
      "Automated testing for critical paths",
      "CI/CD pipeline setup",
      "Documentation and developer handoff notes",
    ],
    idealClient:
      "Founders who have validated a product idea and need working software. Businesses running on fragile spreadsheets or manual processes that are ready to automate.",
    accent: "#00E5C3",
  },
  {
    id: "mobile-applications",
    label: "Mobile Applications",
    headline: "iOS and Android, one codebase, no compromises.",
    subline:
      "React Native apps that feel native — without the cost of two separate engineering teams or the limitations of a wrapper.",
    included: [
      "React Native app for iOS & Android",
      "Native device APIs (camera, notifications, location, biometrics)",
      "Backend API integration or full-stack build",
      "App Store & Google Play submission",
      "Push notifications setup",
      "OTA update capability (Expo EAS)",
      "30-day post-launch support",
    ],
    idealClient:
      "Founders with a validated concept who need both platforms from day one. Businesses with an existing web app looking to extend to mobile without doubling the team.",
    accent: "#5B4CFF",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="py-24 lg:py-32 bg-[#0D0D12] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#5B4CFF]/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>What we build</SectionLabel>
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl lg:text-7xl text-[#F5F4F0] mt-6 mb-6 leading-tight">
            Three services.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #7B6FFF 0%, #00E5C3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Done properly.
            </span>
          </h1>
          <p className="text-[#5A5A72] text-lg max-w-xl leading-relaxed">
            We specialise so we can go deep — not wide. Each service below is
            something we've shipped dozens of times.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 lg:py-32 ${i % 2 === 0 ? "bg-[#13131A]" : "bg-[#0D0D12]"} relative`}
        >
          {i % 2 === 0 && (
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2A2A38] to-transparent" />
          )}

          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start stagger-grid">
              {/* Left — text */}
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                  style={{
                    color: service.accent,
                    backgroundColor: `${service.accent}15`,
                    border: `1px solid ${service.accent}25`,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: service.accent }}
                  />
                  {service.label}
                </div>

                <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl lg:text-4xl text-[#F5F4F0] mb-4 leading-tight">
                  {service.headline}
                </h2>
                <p className="text-[#5A5A72] text-base leading-relaxed mb-8">
                  {service.subline}
                </p>

                {/* Ideal client */}
                <div className="mb-10">
                  <p className="text-xs text-[#5A5A72] uppercase tracking-wider font-semibold mb-3">
                    Ideal for
                  </p>
                  <p className="text-sm text-[#8888A8] leading-relaxed">
                    {service.idealClient}
                  </p>
                </div>

                <CTAButton href="/contact">
                  Start a {service.label.split(" ")[0].toLowerCase()} project →
                </CTAButton>
              </div>

              {/* Right — included list */}
              <div
                className={`${i % 2 !== 0 ? "lg:order-1" : ""} bg-[#0D0D12] border border-[#2A2A38] rounded-2xl p-8 motion-card`}
              >
                <p className="text-xs text-[#5A5A72] uppercase tracking-widest font-semibold mb-6">
                  What's included
                </p>
                <ul className="space-y-4">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center text-xs"
                        style={{
                          backgroundColor: `${service.accent}20`,
                          color: service.accent,
                        }}
                      >
                        ✓
                      </span>
                      <span className="text-sm text-[#C8C7C0] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-[#0D0D12] text-center relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full bg-[#5B4CFF]/10 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl lg:text-4xl text-[#F5F4F0] mb-4">
            Not sure which fits?
          </h2>
          <p className="text-[#5A5A72] mb-8">
            Tell us what you're building in the contact form and we'll recommend
            the right approach.
          </p>
          <CTAButton href="/contact" size="lg">
            Get in touch →
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
