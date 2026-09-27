"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CTAButton from "@/components/ui/CTAButton";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kavelo-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 group"
          aria-label="Kavelo home"
        >
          <span className="relative block h-7 w-7 shrink-0 overflow-hidden">
            <Image
              src="/logo-cropped.png"
              alt=""
              width={120}
              height={30}
              className="absolute left-0 top-0 h-7 w-auto max-w-none [filter:hue-rotate(138deg)]"
              priority
            />
          </span>
          <span className="font-[family-name:var(--font-syne)] text-lg font-bold text-kavelo-charcoal transition-opacity group-hover:opacity-75">
            Kavelo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-kavelo-charcoal/75 hover:text-kavelo-amber transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <CTAButton href="/contact" size="sm">
            Start your project
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-kavelo-charcoal hover:text-kavelo-amber transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5 transition-transform" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current transition-transform" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-kavelo-paper px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-kavelo-charcoal hover:text-kavelo-amber transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton
            href="/contact"
            size="sm"
            className="w-full justify-center mt-2"
          >
            Start your project
          </CTAButton>
        </div>
      )}
    </header>
  );
}
