import Image from "next/image";

const projects = [
  {
    title: "Balsam Medical Booking Platform",
    category: "Healthcare / White-label booking",
    description:
      "A white-label booking platform for multi-branch medical groups. Patients can find doctors by specialty, compare ratings and live availability, and book online, with clinic directories, insurance listings, and WhatsApp support.",
    tags: [
      "Doctor discovery",
      "Live availability",
      "Online booking",
      "Patient ratings",
      "Insurance listings",
      "Multi-branch clinics",
      "Arabic support",
      "WhatsApp support",
    ],
    image: "/projects/balsam-medical.webp",
    href: "https://blsmy.com/aldammam/",
  },
  {
    title: "tutortod — Academy & Tutoring Platform",
    category: "Education / Academy management",
    description:
      "A full-stack platform for online tutoring businesses. Academy owners manage courses, categories, and staff through dedicated dashboards, while students browse a Udemy-style catalog and join live classes through built-in video conferencing. Includes media uploads, admin and owner role-based access, and real-time session management.",
    tags: [
      "Online course catalog",
      "Academy dashboards",
      "Tutor and staff management",
      "Live video classes",
      "Media library",
      "Admin and owner roles",
      "Real-time sessions",
    ],
    image: "/projects/tutortod.webp",
    href: "https://tutortod.com",
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="bg-kavelo-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-kavelo-teal">
              Portfolio / selected projects
            </p>
            <h1 className="font-[family-name:var(--font-syne)] text-4xl font-bold leading-tight text-kavelo-charcoal lg:text-6xl">
              Software designed for the real world.
            </h1>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <div className="relative aspect-video overflow-hidden bg-kavelo-border">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full items-end justify-between p-6">
                    <span className="font-[family-name:var(--font-syne)] text-6xl font-bold text-kavelo-ink/15">
                      {project.title.startsWith("Balsam") ? "01" : "02"}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-kavelo-muted">
                      Project image
                    </span>
                  </div>
                )}
              </div>

              <div className="border-b border-kavelo-border py-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-kavelo-teal">
                      {project.category}
                    </p>
                    <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-kavelo-charcoal">
                      {project.title}
                    </h2>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="grid size-10 shrink-0 place-items-center border border-kavelo-border text-xl text-kavelo-amber transition-colors hover:border-kavelo-amber hover:bg-kavelo-amber hover:text-white"
                  >
                    ↗
                  </a>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-kavelo-muted">
                  {project.description}
                </p>

                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Project capabilities"
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-kavelo-border px-2.5 py-1 text-xs text-kavelo-charcoal"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
