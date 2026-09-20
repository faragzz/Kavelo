"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const pointer = useRef({ x: 50, y: 40 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    };

    if (frame.current !== null) return;

    frame.current = requestAnimationFrame(() => {
      const hero = heroRef.current;
      if (hero) {
        hero.style.setProperty("--pointer-x", `${pointer.current.x}%`);
        hero.style.setProperty("--pointer-y", `${pointer.current.y}%`);
      }
      frame.current = null;
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-[#0D0D12]"
      onPointerMove={handlePointerMove}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Ambient glow and pointer light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5B4CFF]/10 blur-[120px] pointer-events-none" />
      <div
        className="absolute w-[360px] h-[360px] rounded-full bg-[#00E5C3]/10 blur-[90px] pointer-events-none hero-pointer-orb"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-[#00E5C3] bg-[#00E5C3]/10 border border-[#00E5C3]/20 mb-8 animate-reveal">
          <span className="w-1 h-1 rounded-full bg-[#00E5C3]" />
          Software development agency
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-syne)] font-800 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-reveal animate-reveal-delay-1">
          <span className="text-[#F5F4F0]">Websites, web apps,</span>
          <br />
          <span className="text-[#F5F4F0]">and mobile apps —</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #7B6FFF 0%, #00E5C3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            built fast, built to last.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#8888A8] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-reveal animate-reveal-delay-2">
          Kavelo is a software agency for founders who need it done right —
          without the overhead, the hand-offs, or the overpriced scope docs. You
          work directly with the engineers building your product.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal animate-reveal-delay-3">
          <CTAButton href="/contact" size="lg">
            Start your project →
          </CTAButton>
          <CTAButton href="#services" variant="secondary" size="lg">
            See what we build
          </CTAButton>
        </div>

        {/* Trust signal */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#5A5A72] animate-reveal animate-reveal-delay-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5C3]" />
            Reply within 24 hours
          </span>
          <span className="hidden sm:block w-px h-4 bg-[#2A2A38]" />
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5C3]" />
            Fixed-scope engagements
          </span>
          <span className="hidden sm:block w-px h-4 bg-[#2A2A38]" />
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5C3]" />
            No long-term retainer required
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A5A72] text-xs">
        <span className="uppercase tracking-widest text-[10px]">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-[#5A5A72] to-transparent" />
      </div>
    </section>
  );
}
