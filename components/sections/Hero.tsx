"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const pointer = useRef({ x: 50, y: 45 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
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

  const resetPointer = () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    heroRef.current?.style.setProperty("--pointer-x", "50%");
    heroRef.current?.style.setProperty("--pointer-y", "45%");
  };

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative min-h-svh pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-kavelo-paper"
    >
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-pointer-light"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-kavelo-amber-dark bg-kavelo-amber/10 border border-kavelo-amber/20 mb-8 animate-reveal">
          <span className="w-1 h-1 rounded-full bg-kavelo-amber" />
          Founder-led digital product development
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-syne)] font-800 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-reveal animate-reveal-delay-1">
          <span className="text-kavelo-charcoal">Websites, web apps,</span>
          <br />
          <span className="text-kavelo-charcoal">and mobile apps.</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #D9622B 0%, #B94C1F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            built for your business.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-kavelo-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-reveal animate-reveal-delay-2">
          From your first website to a full digital product, Ahmed Khaled Farag
          works directly with you to turn your goals into a clear, buildable
          plan.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal animate-reveal-delay-3">
          <CTAButton href="/contact" size="lg">
            Discuss your project →
          </CTAButton>
          <CTAButton href="#services" variant="secondary" size="lg">
            See recent work
          </CTAButton>
        </div>

        {/* Trust signal */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-kavelo-muted animate-reveal animate-reveal-delay-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-kavelo-sage" />
            Reply within 24 hours
          </span>
          <span className="hidden sm:block w-px h-4 bg-kavelo-border" />
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-kavelo-sage" />
            Fixed-scope engagements
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-kavelo-muted text-xs">
        <span className="uppercase tracking-widest text-[10px]">Scroll</span>
        <span className="w-px h-8 bg-linear-to-b from-kavelo-border to-transparent" />
      </div>
    </section>
  );
}
