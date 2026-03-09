/* ============================================
   TECH MARQUEE
   Infinite scrolling strip of technology names.
   Builds trust: "Look at all the tools I master."
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { techLogos } from "@/lib/data";

export default function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure one set width
    const items = track.querySelectorAll(".marquee-set");
    if (items.length === 0) return;
    const setWidth = (items[0] as HTMLElement).offsetWidth;

    const tween = gsap.to(track, {
      x: -setWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: string) => parseFloat(x) % setWidth),
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  const items = techLogos;

  return (
    <section className="py-8 md:py-12 border-y border-card-border/50 overflow-hidden bg-card/30">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{ width: "fit-content" }}
      >
        {/* Repeat 3x for seamless loop */}
        {[0, 1, 2].map((setIdx) => (
          <div key={setIdx} className="marquee-set flex items-center">
            {items.map((name, i) => (
              <div
                key={`${setIdx}-${i}`}
                className="flex items-center gap-3 px-8 md:px-12"
              >
                <span className="text-sm md:text-base font-semibold text-muted/60 uppercase tracking-wider hover:text-primary transition-colors duration-300">
                  {name}
                </span>
                <span className="text-primary/30 text-xs">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
