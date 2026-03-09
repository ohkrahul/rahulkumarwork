/* ============================================
   PROCESS SECTION
   Zigzag process steps (Discovery, Design,
   Development, Launch) with scroll-triggered
   stagger animations and connecting lines.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal of process steps
      gsap.fromTo(
        ".process-step",
        { x: (i) => (i % 2 === 0 ? -60 : 60), opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".process-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Connecting line grows on scroll
      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".process-container",
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 section-padding">
      <SectionTitle title="HOW WE WORK TOGETHER" label="My Process" />

      <div className="process-container relative max-w-3xl mx-auto">
        {/* Vertical connecting line */}
        <div className="process-line absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-px" />

        {/* Process steps in zigzag layout */}
        <div className="space-y-12 md:space-y-16">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`process-step relative flex items-start gap-6 md:gap-0 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Step content */}
              <div
                className={`flex-1 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-12"
                    : "md:text-left md:pl-12"
                }`}
              >
                <div className="glass-card rounded-2xl p-6 inline-block">
                  <span className="text-primary font-mono text-sm">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{step.title}</h3>
                  <p className="text-muted text-sm mt-2">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-7" />

              {/* Empty space for zigzag on desktop */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
