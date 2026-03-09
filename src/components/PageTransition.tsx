/* ============================================
   PAGE TRANSITION COMPONENT
   Full-screen wipe animation between routes
   using GSAP timeline with clip-path animation.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Page intro: wipe the overlay off screen from bottom to top
    const tl = gsap.timeline();
    tl.set(overlay, { scaleY: 1, transformOrigin: "top" })
      .to(overlay, {
        scaleY: 0,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.1,
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="page-transition bg-primary"
      style={{ transformOrigin: "top" }}
    />
  );
}
