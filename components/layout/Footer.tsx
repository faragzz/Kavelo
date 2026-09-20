import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Pages: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#website-development", label: "Website Development" },
    { href: "/services#web-applications", label: "Web Applications" },
    { href: "/services#mobile-applications", label: "Mobile Applications" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#13131A] border-t border-[#2A2A38]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center group mb-5">
              <Image 
                src="/logo-cropped.png" 
                alt="Kavelo" 
                width={120} 
                height={30} 
                className="h-7 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-[#5A5A72] text-sm leading-relaxed max-w-xs">
              Software built by engineers who care about shipping clean code —
              not just closing tickets.
            </p>
            <a
              href="mailto:kavelo.hq@gmail.com"
              className="inline-block mt-5 text-sm text-[#00E5C3] hover:text-[#00BFA5] transition-colors"
            >
              kavelo.hq@gmail.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs text-[#5A5A72] uppercase tracking-widest font-semibold mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8888A8] hover:text-[#F5F4F0] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#2A2A38] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A5A72]">
            © {new Date().getFullYear()} Kavelo. All rights reserved.
          </p>
          <p className="text-xs text-[#5A5A72]">
            Built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
