import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web applications, and mobile applications designed around your business, customers, and goals.",
};

const services = [
  {
    id: "website-development",
    label: "Websites & landing pages",
    ctaLabel: "Discuss your website",
    headline: "Make a clear, confident first impression.",
    subline:
      "Turn your website into a useful part of your business: explain what you offer, build trust, and make the next step obvious.",
    included: [
      "Custom design tailored to your brand and audience",
      "Responsive layouts for phones, tablets, and desktops",
      "Clear page structure and calls to action",
      "Performance and search-engine foundations",
      "Content management integration when useful",
      "Analytics and third-party integrations as needed",
      "Launch support and a practical handoff",
    ],
    idealClient:
      "Businesses launching a new offer, improving an outdated website, or making it easier for customers to understand and choose their services.",
    accent: "#D9622B",
  },
  {
    id: "web-applications",
    label: "Web applications",
    ctaLabel: "Discuss your web application",
    headline: "Give customers and teams better ways to get things done.",
    subline:
      "Build a secure, browser-based product around the workflows, information, and services your business relies on.",
    included: [
      "Customer portals, dashboards, and internal tools",
      "Discovery and requirements scoped before development",
      "Authentication and role-based access",
      "Database, API, and third-party integrations",
      "Responsive interface for desktop and mobile browsers",
      "Testing for important user workflows",
      "Deployment and developer handoff",
    ],
    idealClient:
      "Businesses with a validated product idea or a workflow that has outgrown spreadsheets and disconnected tools.",
    accent: "#2E6E62",
  },
  {
    id: "mobile-applications",
    label: "Mobile applications",
    ctaLabel: "Discuss your mobile app",
    headline: "Put your product in your customers' hands.",
    subline:
      "Design and build mobile experiences for iOS and Android that connect to your product and fit naturally into your customers' day.",
    included: [
      "App structure, screens, and interaction design",
      "iOS and Android development",
      "Connection to existing APIs and services",
      "Account, notification, and device features as needed",
      "Testing across key devices and workflows",
      "App Store and Google Play release preparation",
      "Launch support and a practical handoff",
    ],
    idealClient:
      "Businesses extending an existing digital product or launching a mobile service for their customers.",
    accent: "#D9622B",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="py-24 lg:py-32 bg-[#F7F5F1] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#D9622B]/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>What I build</SectionLabel>
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl lg:text-7xl text-[#1A1D24] mt-6 mb-6 leading-tight">
            Websites, web apps, and mobile apps.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #B94C1F 0%, #2E6E62 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built around your goals.
            </span>
          </h1>
          <p className="text-[#686B70] text-lg max-w-xl leading-relaxed">
            From a first website to a multi-role product, Ahmed works directly
            with you to shape a clear scope and a practical build plan.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 lg:py-32 ${i % 2 === 0 ? "bg-white" : "bg-[#F7F5F1]"} relative`}
        >
          {i % 2 === 0 && (
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E4E0D9] to-transparent" />
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

                <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl lg:text-4xl text-[#1A1D24] mb-4 leading-tight">
                  {service.headline}
                </h2>
                <p className="text-[#686B70] text-base leading-relaxed mb-8">
                  {service.subline}
                </p>

                {/* Ideal client */}
                <div className="mb-10">
                  <p className="text-xs text-[#686B70] uppercase tracking-wider font-semibold mb-3">
                    Ideal for
                  </p>
                  <p className="text-sm text-[#686B70] leading-relaxed">
                    {service.idealClient}
                  </p>
                </div>

                <CTAButton href="/contact">{service.ctaLabel} →</CTAButton>
              </div>

              {/* Right — included list */}
              <div
                className={`${i % 2 !== 0 ? "lg:order-1" : ""} bg-white border border-[#E4E0D9] rounded-2xl p-8 motion-card`}
              >
                <p className="text-xs text-[#686B70] uppercase tracking-widest font-semibold mb-6">
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
                      <span className="text-sm text-[#686B70] leading-relaxed">
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
      <section className="py-24 bg-[#F7F5F1] text-center relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full bg-[#D9622B]/10 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl lg:text-4xl text-[#1A1D24] mb-4">
            Not sure which fits?
          </h2>
          <p className="text-[#686B70] mb-8">
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
