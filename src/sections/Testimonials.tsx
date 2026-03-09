/* ============================================
   TESTIMONIALS SECTION — Social Proof
   Results-focused testimonials with star
   ratings, real-sounding quotes with 
   specific business impact metrics.
   ============================================ */

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonials-container",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 400 + 24;
    const totalWidth = cardWidth * testimonials.length;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: string) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (tweenRef.current) {
      if (isPaused) tweenRef.current.pause();
      else tweenRef.current.resume();
    }
  }, [isPaused]);

  const allCards = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
      <div className="section-padding">
        <SectionTitle title="CLIENT RESULTS" label="What Clients Say" />
      </div>

      <div
        className="testimonials-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6 pl-6"
          style={{ width: "fit-content" }}
        >
          {allCards.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              data-cursor-hover
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#8b5cf6"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-card-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
