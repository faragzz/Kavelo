import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Pages: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    {
      href: "/services#website-development",
      label: "Websites & Landing Pages",
    },
    { href: "/services#web-applications", label: "Web Applications" },
    { href: "/services#mobile-applications", label: "Mobile Applications" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-kavelo-paper border-t border-kavelo-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-1.5 group mb-5">
              <span className="relative block h-7 w-7 shrink-0 overflow-hidden">
                <Image
                  src="/logo-cropped.png"
                  alt=""
                  width={120}
                  height={30}
                  className="absolute left-0 top-0 h-7 w-auto max-w-none [filter:hue-rotate(138deg)]"
                />
              </span>
              <span className="font-[family-name:var(--font-syne)] text-lg font-bold text-kavelo-charcoal transition-opacity group-hover:opacity-75">
                Kavelo
              </span>
            </Link>
            <p className="text-kavelo-muted text-sm leading-relaxed max-w-xs">
              Founder-led websites, web applications, and mobile products by
              Ahmed Farag.
            </p>
            <a
              href="mailto:kavelo.hq@gmail.com"
              className="inline-block mt-5 text-sm text-kavelo-amber hover:text-kavelo-amber-dark transition-colors"
            >
              kavelo.hq@gmail.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs text-kavelo-muted uppercase tracking-widest font-semibold mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-kavelo-charcoal/80 hover:text-kavelo-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-kavelo-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-kavelo-muted">
            © {new Date().getFullYear()} Kavelo. All rights reserved.
          </p>
          <p className="text-xs text-kavelo-muted">Built to last.</p>
        </div>
      </div>
    </footer>
  );
}
