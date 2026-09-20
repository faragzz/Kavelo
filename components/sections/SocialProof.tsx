import ClientLogos from "@/components/sections/ClientLogos";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <div className="bg-[#13131A] border border-[#2A2A38] rounded-2xl p-8 flex flex-col gap-6 motion-card">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#5B4CFF"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-[#C8C7C0] text-sm leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#5B4CFF]/20 flex items-center justify-center text-[#7B6FFF] font-bold text-sm font-[family-name:var(--font-syne)]">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#F5F4F0]">{name}</p>
          <p className="text-xs text-[#5A5A72]">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Kavelo turned a messy hospital booking process into a platform we could actually run. Clear scope, no drama, and the handoff notes were good enough for our internal team to keep going.",
    name: "Sara Al-Mansour",
    role: "Operations Lead",
    company: "Northline",
  },
  {
    quote:
      "We needed document-based AI workflows that didn't fall over in production. They were honest about what would take time — and still got us to a usable MVP faster than the last agency we tried.",
    name: "Daniel Reeves",
    role: "Founder",
    company: "Lumenpath",
  },
  {
    quote:
      "Payments, receipts, refunds — the unglamorous stuff that has to work. Direct access to the engineers meant we weren't translating through three layers of project management.",
    name: "Mira Patel",
    role: "Product Lead",
    company: "Nimbus",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 lg:py-32 bg-[#13131A] relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2A2A38] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-[#5B4CFF] bg-[#5B4CFF]/10 border border-[#5B4CFF]/20 mb-6">
            <span className="w-1 h-1 rounded-full bg-[#5B4CFF]" />
            Client results
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl lg:text-5xl text-[#F5F4F0] mt-4">
            What teams say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 stagger-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.company} {...t} />
          ))}
        </div>

        <ClientLogos />
      </div>
    </section>
  );
}
