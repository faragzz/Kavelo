import Link from "next/link";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative h-full bg-white border border-[#E4E0D9] rounded-2xl p-8 overflow-hidden motion-card hover:border-[#D9622B]/50">
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "inset 0 0 40px rgba(217, 98, 43,0.08)" }}
        />

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#D9622B]/15 border border-[#D9622B]/20 flex items-center justify-center mb-6 text-[#B94C1F] group-hover:bg-[#D9622B]/25 transition-colors duration-300">
          {icon}
        </div>

        <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#1A1D24] mb-3">
          {title}
        </h3>
        <p className="text-[#686B70] text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Arrow */}
        <div className="absolute top-8 right-8 text-[#E4E0D9] group-hover:text-[#D9622B] transition-colors duration-200 text-xl">
          →
        </div>
      </div>
    </Link>
  );
}

const services = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18M8 14h3M8 18h7" />
      </svg>
    ),
    title: "Clinic booking platforms",
    description:
      "Help patients find the right doctor, check availability, and book across clinic branches. Add doctor profiles, insurance information, Arabic support, and WhatsApp contact to fit your workflow.",
    href: "/services#clinic-booking",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Academy & tutoring platforms",
    description:
      "Bring course catalogs, owner dashboards, tutor management, media uploads, and live classes into one platform for your learning business.",
    href: "/services#academy-platforms",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 8h8M8 12h5M8 16h8" />
      </svg>
    ),
    title: "Custom workflow software",
    description:
      "Replace spreadsheets and disconnected hand-offs with a web product shaped around your team's roles, processes, and integrations.",
    href: "/services#custom-workflows",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F7F5F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-[#D9622B] bg-[#D9622B]/10 border border-[#D9622B]/20 mb-6">
            <span className="w-1 h-1 rounded-full bg-[#D9622B]" />
            What we build
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-5xl text-[#1A1D24] mt-4 mb-5">
            Software for the work
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #B94C1F 0%, #2E6E62 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your team actually does.
            </span>
          </h2>
          <p className="text-[#686B70] text-base leading-relaxed">
            Start with the workflow that needs fixing: patient booking, online
            learning, or a custom internal process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
