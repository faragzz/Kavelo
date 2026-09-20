"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import CTAButton from "@/components/ui/CTAButton";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D12]/90 backdrop-blur-md border-b border-[#2A2A38]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo-cropped.png" 
            alt="Kavelo" 
            width={120} 
            height={30} 
            className="h-7 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#8888A8] hover:text-[#F5F4F0] transition-colors duration-200 font-medium"
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
          className="md:hidden p-2 text-[#8888A8] hover:text-[#F5F4F0] transition-colors"
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
        <div className="md:hidden bg-[#13131A] border-t border-[#2A2A38] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#C8C7C0] hover:text-[#F5F4F0] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton href="/contact" size="sm" className="w-full justify-center mt-2">
            Start your project
          </CTAButton>
        </div>
      )}
    </header>
  );
}
