/* ============================================
   NAVIGATION COMPONENT
   Fixed navbar with scroll-triggered hide/show,
   blur backdrop, and smooth GSAP animations.
   ============================================ */

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navLinks } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Intro animation: nav slides down on page load
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Track scroll to add backdrop blur when not at top
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      // Hide nav on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 200) {
        gsap.to(nav, { y: -100, duration: 0.3, ease: "power2.in" });
      } else {
        gsap.to(nav, { y: 0, duration: 0.3, ease: "power2.out" });
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu toggle animation
  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu", {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        ".mobile-link",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to(".mobile-menu", {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-card-border"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-tight"
            data-cursor-hover
          >
            RAHUL SAHU
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-300 relative group"
                data-cursor-hover
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <MagneticButton
              as="a"
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-foreground transition-colors duration-300"
            >
              Let&apos;s Collaborate
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className="mobile-menu fixed inset-0 z-40 bg-background flex flex-col items-center justify-center md:hidden"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link text-3xl font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-link mt-4 px-8 py-3 rounded-full bg-primary text-foreground text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </>
  );
}
