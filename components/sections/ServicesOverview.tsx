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
      <div className="relative h-full bg-[#13131A] border border-[#2A2A38] rounded-2xl p-8 overflow-hidden motion-card hover:border-[#5B4CFF]/50 hover:bg-[#1A1A24]">
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "inset 0 0 40px rgba(91,76,255,0.08)" }}
        />

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#5B4CFF]/15 border border-[#5B4CFF]/20 flex items-center justify-center mb-6 text-[#7B6FFF] group-hover:bg-[#5B4CFF]/25 transition-colors duration-300">
          {icon}
        </div>

        <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F5F4F0] mb-3">
          {title}
        </h3>
        <p className="text-[#5A5A72] text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Arrow */}
        <div className="absolute top-8 right-8 text-[#2A2A38] group-hover:text-[#5B4CFF] transition-colors duration-200 text-xl">
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
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Websites & Landing Pages",
    description:
      "Marketing sites, landing pages, and content-driven websites that load fast, rank well, and convert. No WordPress, no page builders — real code.",
    href: "/services#website-development",
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
    title: "Custom Platforms & Portals",
    description:
      "Custom SaaS tools, internal dashboards, and product MVPs — built on modern stacks with clean architecture that won't need rewriting in 18 months.",
    href: "/services#custom-software",
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
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile Applications",
    description:
      "iOS and Android apps built with React Native — one codebase, both platforms, shipped without the cross-platform compromises most teams make.",
    href: "/services#mobile-applications",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0D0D12]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-[#5B4CFF] bg-[#5B4CFF]/10 border border-[#5B4CFF]/20 mb-6">
            <span className="w-1 h-1 rounded-full bg-[#5B4CFF]" />
            What we build
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-5xl text-[#F5F4F0] mt-4 mb-5">
            Three things we do
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #7B6FFF 0%, #00E5C3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              exceptionally well.
            </span>
          </h2>
          <p className="text-[#5A5A72] text-base leading-relaxed">
            We don't do "everything digital." We do websites, web apps, and
            mobile apps — and we do them properly.
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
