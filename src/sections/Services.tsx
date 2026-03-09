/* ============================================
   SERVICES SECTION — Premium 3x3 Grid
   Each card: gradient icon, title, description,
   and flowing tech tag pills.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tags appear after cards
      gsap.fromTo(
        ".service-tag",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.02,
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 section-padding overflow-hidden"
      id="services"
    >
      {/* Background glow */}
      <div
        className="absolute -top-20 left-1/2 w-[600px] h-[400px] rounded-full opacity-[0.10] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          filter: "blur(160px)",
        }}
      />
      <div
        className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #9333ea 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      <div className="relative z-10">
        <SectionTitle title="HOW I CAN HELP" label="Services" />

        {/* Services grid — 3 columns */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
              data-cursor-hover
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.1), transparent, rgba(139,92,246,0.05))" }} />

              {/* Top accent line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-700 ease-out" />

              <div className="relative z-10 p-7 flex flex-col h-full">
                {/* Icon with gradient background */}
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold mb-2.5 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-muted leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-card-border/50">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="service-tag text-[10px] px-2 py-0.5 rounded-md bg-card-border/30 text-muted/80 border border-card-border/50 group-hover:border-primary/20 group-hover:text-primary/70 group-hover:bg-primary/5 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
