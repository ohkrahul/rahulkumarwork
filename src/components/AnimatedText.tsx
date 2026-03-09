/* ============================================
   ANIMATED TEXT COMPONENT
   GSAP-powered text reveal animation.
   Splits text into lines and animates each
   from below with staggered timing.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  scrollTrigger?: boolean;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  scrollTrigger = true,
  once = true,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".word");

    // GSAP text reveal: each word slides up from below with opacity fade
    const tl = gsap.timeline({
      scrollTrigger: scrollTrigger
        ? {
            trigger: container,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          }
        : undefined,
      delay,
    });

    tl.fromTo(
      words,
      {
        y: "110%",
        opacity: 0,
        rotateX: -80,
      },
      {
        y: "0%",
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.04,
      }
    );

    return () => {
      tl.kill();
    };
  }, [text, delay, scrollTrigger, once]);

  // Split text into individually animated words
  const words = text.split(" ");

  return (
    <Tag className={`${className}`} aria-label={text}>
      <span ref={containerRef} className="inline-flex flex-wrap gap-x-[0.3em]" style={{ perspective: "500px" }}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <span className="word inline-block" style={{ transformOrigin: "bottom center" }}>
              {word}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
