import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Clinic booking platforms, academy and tutoring software, and custom workflow products built around real operating needs.",
};

const services = [
  {
    id: "clinic-booking",
    label: "Clinic booking platforms",
    headline: "Make finding and booking care straightforward.",
    subline:
      "Give patients a clear path from finding a doctor to booking an appointment across your clinics.",
    included: [
      "Doctor profiles and specialty-based discovery",
      "Clinic and branch directories",
      "Appointment availability and online booking flows",
      "Ratings and insurance provider information",
      "Arabic and right-to-left support when required",
      "WhatsApp and other service integrations",
      "Responsive patient experience",
    ],
    idealClient:
      "Clinics and multi-branch medical groups that want patients to discover providers and book without relying on calls and manual coordination.",
    accent: "#D9622B",
  },
  {
    id: "academy-platforms",
    label: "Academy and tutoring platforms",
    headline: "Bring courses, tutors, and live classes together.",
    subline:
      "Give academy owners, staff, tutors, and students the tools they need in one connected learning platform.",
    included: [
      "Course catalog and category management",
      "Dedicated academy owner and staff dashboards",
      "Tutor and team management",
      "Role-based access for owners and administrators",
      "Media uploads and course resources",
      "Live-class and video-conferencing integration",
      "Scheduling and real-time session management",
    ],
    idealClient:
      "Tutoring businesses and academies managing courses, people, and live lessons across disconnected tools.",
    accent: "#2E6E62",
  },
  {
    id: "custom-workflows",
    label: "Custom workflow software",
    headline: "Replace manual hand-offs with a clear workflow.",
    subline:
      "Turn a validated process or product idea into a web application with clear roles, integrations, and room to grow.",
    included: [
      "Product discovery and scoped requirements",
      "Role-based portals and dashboards",
      "Database and API implementation",
      "Third-party service integrations",
      "Responsive user experience",
      "Testing of key workflows",
      "Deployment and developer handoff",
    ],
    idealClient:
      "Teams with a proven manual workflow or validated product idea that needs reliable software rather than another disconnected tool.",
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
          <SectionLabel>What we build</SectionLabel>
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl lg:text-7xl text-[#1A1D24] mt-6 mb-6 leading-tight">
            Software shaped around your operations.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #B94C1F 0%, #2E6E62 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built with your team.
            </span>
          </h1>
          <p className="text-[#686B70] text-lg max-w-xl leading-relaxed">
            Start with a clear scope, work directly with the engineers, and
            build only what your team needs to move forward.
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

                <CTAButton href="/contact">
                  Start a {service.label.split(" ")[0].toLowerCase()} project →
                </CTAButton>
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
