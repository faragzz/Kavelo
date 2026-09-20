"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".scroll-reveal, .stagger-grid, .scroll-progress-track",
    );

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8%" },
      );

      elements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }

    elements.forEach((element) => element.classList.add("is-visible"));
  }, [pathname]);

  return null;
}
