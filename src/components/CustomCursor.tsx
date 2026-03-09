/* ============================================
   CUSTOM CURSOR COMPONENT
   Follows mouse with smooth GSAP animation.
   Grows on hover over interactive elements.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Track mouse position with GSAP for buttery smooth movement
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    // Grow cursor on hoverable elements
    const handleMouseEnter = () => cursor.classList.add("cursor-hover");
    const handleMouseLeave = () => cursor.classList.remove("cursor-hover");

    window.addEventListener("mousemove", moveCursor);

    // Attach hover listeners to all interactive elements
    const hoverTargets = document.querySelectorAll(
      "a, button, [data-cursor-hover], input, textarea"
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      {/* Inner dot cursor */}
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
    </>
  );
}
