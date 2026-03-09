/* ============================================
   GSAP ANIMATION UTILITIES
   Reusable animation presets for the portfolio
   ============================================ */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Text reveal animation - animates text lines from below
 * Used for headlines and section titles
 */
export const animateTextReveal = (
  element: string | Element,
  delay: number = 0
) => {
  return gsap.fromTo(
    element,
    {
      y: 120,
      opacity: 0,
      rotateX: -40,
    },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1.2,
      delay,
      ease: "power4.out",
      stagger: 0.08,
    }
  );
};

/**
 * Fade up animation - general purpose scroll-triggered fade
 * Used for cards, paragraphs, and UI elements
 */
export const animateFadeUp = (
  element: string | Element | Element[],
  trigger?: string | Element,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
    start?: string;
  }
) => {
  return gsap.fromTo(
    element,
    {
      y: options?.y ?? 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: options?.duration ?? 1,
      delay: options?.delay ?? 0,
      ease: "power3.out",
      stagger: options?.stagger ?? 0.1,
      scrollTrigger: trigger
        ? {
            trigger,
            start: options?.start ?? "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        : undefined,
    }
  );
};

/**
 * Stagger animation - animates children in sequence
 * Used for skill cards, service cards, grid items
 */
export const animateStagger = (
  elements: string | Element | Element[],
  trigger: string | Element,
  options?: {
    y?: number;
    stagger?: number;
    duration?: number;
    start?: string;
  }
) => {
  return gsap.fromTo(
    elements,
    {
      y: options?.y ?? 40,
      opacity: 0,
      scale: 0.95,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: options?.duration ?? 0.8,
      ease: "power3.out",
      stagger: options?.stagger ?? 0.15,
      scrollTrigger: {
        trigger,
        start: options?.start ?? "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

/**
 * Parallax effect - creates depth on scroll
 * Used for images and background elements
 */
export const animateParallax = (
  element: string | Element,
  speed: number = 50,
  trigger?: string | Element
) => {
  return gsap.to(element, {
    y: speed,
    ease: "none",
    scrollTrigger: {
      trigger: trigger ?? element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
};

/**
 * Scale reveal - element scales in from small
 * Used for images and cards on scroll
 */
export const animateScaleReveal = (
  element: string | Element,
  trigger?: string | Element
) => {
  return gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger ?? element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

/**
 * Horizontal scroll section - pins and scrolls horizontally
 */
export const createHorizontalScroll = (
  container: string | Element,
  panels: string | Element
) => {
  const panelElements = gsap.utils.toArray(panels) as Element[];
  return gsap.to(panelElements, {
    xPercent: -100 * (panelElements.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (panelElements.length - 1),
      end: () => "+=" + (container as HTMLElement).offsetWidth,
    },
  });
};

/**
 * Magnetic effect - element follows cursor within bounds
 * Used for buttons and interactive elements
 */
export const createMagneticEffect = (
  element: HTMLElement,
  strength: number = 0.3
) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function
  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
