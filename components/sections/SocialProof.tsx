import Image from "next/image";

const featuredWork = [
  {
    number: "01",
    category: "Healthcare / Appointment booking",
    name: "Balsam Medical",
    image: "/projects/balsam-medical.webp",
    imageAlt: "Balsam Medical doctor booking directory",
    description:
      "A multi-branch booking platform where patients can find doctors by specialty, compare availability and ratings, and book visits. Clinic directories, insurance listings, Arabic support, and WhatsApp contact are part of the experience.",
    href: "https://blsmy.com/aldammam/",
    linkLabel: "Visit Balsam Medical",
  },
  {
    number: "02",
    category: "Education / Online tutoring",
    name: "tutortod",
    image: "/projects/tutortod.webp",
    imageAlt: "tutortod online tutoring platform homepage",
    description:
      "An academy platform combining course discovery and owner dashboards with tutor management, media uploads, role-based access, and live classes through built-in video conferencing.",
    href: "https://tutortod.com",
    linkLabel: "Visit tutortod",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-kavelo-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-kavelo-amber-dark">
            Selected work
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold leading-tight text-kavelo-charcoal lg:text-5xl">
            Built for real operations.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-kavelo-muted">
            Two platforms built for healthcare and education, shown here with
            links to the live products.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {featuredWork.map((work) => (
            <article
              key={work.name}
              className="border-t border-kavelo-border pt-6"
            >
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="group/image relative mb-6 block aspect-video overflow-hidden bg-kavelo-border"
                aria-label={work.linkLabel}
              >
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover/image:scale-[1.02]"
                />
              </a>
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-kavelo-teal">
                  {work.category}
                </p>
                <span className="font-[family-name:var(--font-syne)] text-sm font-bold text-kavelo-amber">
                  {work.number}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-kavelo-charcoal">
                {work.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-kavelo-muted">
                {work.description}
              </p>
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-kavelo-amber-dark transition-colors hover:text-kavelo-amber"
              >
                {work.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
