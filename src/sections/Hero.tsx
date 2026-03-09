/* ============================================
   HERO SECTION — Client Conversion Focused
   
   Key conversion elements:
   1. Availability badge (green dot = "hire me now")
   2. Direct headline that speaks to client needs
   3. Dual CTAs: "Start a Project" + "View Work"
   4. Quick stats row (social proof above the fold)
   5. Organic 3D blob (visual wow factor)
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/MagneticButton";
import { stats } from "@/lib/data";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // 0. Availability badge pops in
      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(2)" }
      );

      // 1. Headline text reveal
      tl.fromTo(
        ".hero-line",
        { y: "120%", opacity: 0, rotateX: -60 },
        {
          y: "0%",
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.1,
        },
        "-=0.3"
      );

      // 2. Subtitle fades in
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      // 3. CTA buttons slide up
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      // 4. Stats counter row
      tl.fromTo(
        ".stat-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.4"
      );

      // 5. Animated number count-up in stats
      document.querySelectorAll(".hero-stat-number").forEach((el) => {
        const target = parseInt(el.getAttribute("data-value") || "0", 10);
        const obj = { val: 0 };
        tl.to(
          obj,
          {
            val: target,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toString();
            },
          },
          "-=1.4"
        );
      });

      // 6. 3D blob morphs in
      tl.fromTo(
        blobRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "elastic.out(1, 0.4)" },
        "-=2"
      );

      // 7. Scroll indicator fades in
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      );

      // ====== BLOB ORGANIC ANIMATIONS ======
      gsap.to(blobRef.current, {
        y: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-piece-1", {
        borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
        rotate: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-piece-2", {
        borderRadius: "50% 50% 35% 65% / 60% 40% 60% 40%",
        rotate: -8,
        scale: 1.03,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-piece-3", {
        borderRadius: "55% 45% 40% 60% / 35% 65% 35% 65%",
        rotate: 12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-piece-4", {
        borderRadius: "38% 62% 55% 45% / 50% 50% 50% 50%",
        rotate: -6,
        scale: 0.97,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Availability badge pulse
      gsap.to(".availability-dot", {
        scale: 1.5,
        opacity: 0.4,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center section-padding pt-20 overflow-hidden"
      id="hero"
    >
      {/* SVG gooey filter for blob */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background glow layers */}
      <div
        className="absolute top-[10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.20] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, #4c1d95 40%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute top-[40%] left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.10] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          filter: "blur(130px)",
        }}
      />
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.12] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* ====== LEFT: Text Content ====== */}
        <div className="relative z-10">
          {/* Availability Badge — green pulsing dot */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="availability-dot absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">
              Available for New Projects
            </span>
          </div>

          {/* Headline — client-focused, not developer-focused */}
          <div
            ref={headlineRef}
            className="mb-6 md:mb-8"
            style={{ perspective: "600px" }}
          >
            {["I BUILD", "WEBSITES", "THAT GROW", "YOUR", "BUSINESS"].map((word, i) => (
              <div key={i} className="overflow-hidden">
                <span
                  className={`hero-line block font-black tracking-tighter leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] ${
                    word === "YOUR" || word === "BUSINESS" ? "text-gradient" : ""
                  }`}
                  style={{ transformOrigin: "bottom left" }}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* Value proposition subtitle */}
          <p
            ref={subtitleRef}
            className="text-muted text-base md:text-lg max-w-lg leading-relaxed mb-8"
          >
            Freelance developer who turns your ideas into fast, beautiful,
            revenue-generating web applications. From concept to launch in
            weeks, not months.
          </p>

          {/* Dual CTA — Primary action + Secondary */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-12">
            <MagneticButton
              as="a"
              href="#contact"
              className="group px-8 py-4 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#work"
              className="group px-8 py-4 rounded-full border border-foreground/20 bg-transparent text-foreground hover:border-primary/50 transition-colors duration-300"
            >
              <span className="flex items-center gap-3">
                View My Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-y-1">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </MagneticButton>
          </div>

          {/* Quick Stats Row — social proof above the fold */}
          <div ref={statsRef} className="flex flex-wrap gap-8 lg:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="flex items-baseline gap-0.5">
                  <span
                    className="hero-stat-number text-3xl md:text-4xl font-black text-foreground"
                    data-value={stat.value}
                  >
                    0
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ====== RIGHT: Organic 3D Liquid Blob ====== */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div
            ref={blobRef}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem]"
          >
            {/* Outer halo glow */}
            <div
              className="absolute -inset-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.35) 0%, rgba(99,102,241,0.15) 35%, transparent 65%)",
                filter: "blur(60px)",
              }}
            />

            {/* Gooey blob container */}
            <div className="absolute inset-0" style={{ filter: "url(#gooey)" }}>
              <div
                className="blob-piece-1 absolute"
                style={{
                  top: "5%", left: "5%", width: "90%", height: "90%",
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 30%, #4c1d95 60%, #312e81 100%)",
                }}
              />
              <div
                className="blob-piece-2 absolute"
                style={{
                  top: "-2%", right: "-2%", width: "70%", height: "65%",
                  borderRadius: "40% 60% 55% 45% / 55% 35% 65% 45%",
                  background: "linear-gradient(160deg, #6366f1 0%, #4f46e5 40%, #4c1d95 80%)",
                }}
              />
              <div
                className="blob-piece-3 absolute"
                style={{
                  bottom: "-4%", left: "-3%", width: "65%", height: "60%",
                  borderRadius: "45% 55% 50% 50% / 40% 60% 40% 60%",
                  background: "linear-gradient(200deg, #7c3aed 0%, #581c87 50%, #3b0764 100%)",
                }}
              />
              <div
                className="blob-piece-4 absolute"
                style={{
                  top: "25%", right: "-5%", width: "50%", height: "55%",
                  borderRadius: "55% 45% 35% 65% / 50% 50% 50% 50%",
                  background: "linear-gradient(180deg, #4f46e5 0%, #3730a3 60%, #1e1b4b 100%)",
                }}
              />
              <div
                className="absolute"
                style={{
                  top: "-6%", left: "20%", width: "55%", height: "45%",
                  borderRadius: "50% 50% 40% 60% / 45% 55% 45% 55%",
                  background: "linear-gradient(140deg, #8b5cf6 0%, #6d28d9 50%, #4c1d95 100%)",
                }}
              />
            </div>

            {/* Lighting layers */}
            <div
              className="absolute inset-[12%] pointer-events-none"
              style={{
                borderRadius: "50% 50% 45% 55% / 55% 45% 55% 45%",
                background: "radial-gradient(ellipse at 40% 35%, #a855f7 0%, #8b5cf6 25%, #6d28d9 50%, transparent 75%)",
                filter: "blur(8px)",
                opacity: 0.7,
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                top: "12%", left: "18%", width: "38%", height: "32%",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at 45% 40%, rgba(255,255,255,0.55) 0%, rgba(221,214,254,0.25) 30%, rgba(167,139,250,0.10) 55%, transparent 75%)",
                filter: "blur(6px)",
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                top: "20%", left: "28%", width: "14%", height: "10%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(4px)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "50%",
                background: "radial-gradient(ellipse at 75% 75%, rgba(15,10,40,0.6) 0%, transparent 50%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground/50 to-transparent" />
      </div>
    </section>
  );
}
