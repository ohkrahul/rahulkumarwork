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

const CYCLE_WORDS = ["WEBSITES", "WEB APPS", "MOBILE APPS", "SAAS TOOLS", "E-COMMERCE", "EXPERIENCES"];

export default function Hero() {
  const sectionRef    = useRef<HTMLElement>(null);
  const headlineRef   = useRef<HTMLDivElement>(null);
  const subtitleRef   = useRef<HTMLParagraphElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);
  const statsRef      = useRef<HTMLDivElement>(null);
  const videoWrapRef  = useRef<HTMLDivElement>(null);
  const videoRef      = useRef<HTMLVideoElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const badgeRef      = useRef<HTMLDivElement>(null);
  const cycleRef      = useRef<HTMLSpanElement>(null);
  const cycleIdxRef   = useRef(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
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

      // 6. Video panel slides in
      tl.fromTo(
        videoWrapRef.current,
        { x: 60, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=2"
      );

      // 7. Scroll indicator fades in
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      );

      // ====== VIDEO FLOAT ANIMATION ======
      gsap.to(videoWrapRef.current, {
        y: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ====== CYCLING HEADLINE WORD ======
      const cycleTick = () => {
        const el = cycleRef.current;
        if (!el) return;
        cycleIdxRef.current = (cycleIdxRef.current + 1) % CYCLE_WORDS.length;
        gsap.timeline()
          .to(el, { yPercent: -110, opacity: 0, duration: 0.35, ease: "power2.in" })
          .call(() => { el.textContent = CYCLE_WORDS[cycleIdxRef.current]; })
          .fromTo(el,
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
          );
      };
      intervalId = setInterval(cycleTick, 2400);

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

    return () => {
      ctx.revert();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col section-padding pt-20 pb-10 lg:pt-28 lg:pb-20 lg:min-h-screen overflow-hidden gap-0"
      id="hero"
    >

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

      <div className="w-full flex flex-col">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start">
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
            {["I BUILD", null, "THAT GROW", "YOUR", "BUSINESS"].map((word, i) => (
              <div key={i} className="overflow-hidden">
                {word === null ? (
                  /* Cycling animated word */
                  <span
                    className="hero-line block font-black tracking-tighter leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] overflow-hidden"
                    style={{ transformOrigin: "bottom left" }}
                  >
                    <span ref={cycleRef} className="inline-block text-primary">
                      WEBSITES
                    </span>
                  </span>
                ) : (
                  <span
                    className={`hero-line block font-black tracking-tighter leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] ${
                      word === "YOUR" || word === "BUSINESS" ? "text-gradient" : ""
                    }`}
                    style={{ transformOrigin: "bottom left" }}
                  >
                    {word}
                  </span>
                )}
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
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
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

        </div>

        {/* ====== RIGHT: Intro video ====== */}
        <div className="relative flex items-center justify-center lg:justify-end lg:pt-8">

          {/* Outer glow */}
          <div
            className="absolute -inset-16 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.28) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />

          <div
            ref={videoWrapRef}
            className="relative w-52 sm:w-64 md:w-72 lg:w-[22rem] xl:w-96"
          >
            {/* Device-style frame */}
            <div
              className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Sheen overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none" style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(0,0,0,0.25) 100%)"
              }} />

              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                onCanPlay={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
              >
                <source
                  src="https://res.cloudinary.com/dtpz8iptk/video/upload/vc_vp9,ac_none/v1773092564/2_vvw4h7.webm"
                  type="video/webm; codecs=vp9"
                />
                <source
                  src="https://res.cloudinary.com/dtpz8iptk/video/upload/vc_h264,ac_none/v1773092564/2_vvw4h7.mp4"
                  type="video/mp4; codecs=avc1.42E01E"
                />
              </video>
            </div>

            {/* Floating badge — hackathon */}
            <div className="absolute -bottom-3 left-2 lg:-bottom-4 lg:-left-4 z-20 flex items-center gap-2 px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-2xl bg-card border border-yellow-500/30 shadow-xl backdrop-blur-sm">
              <span className="text-base lg:text-xl">🏆</span>
              <div>
                <p className="text-[9px] lg:text-[10px] font-bold text-yellow-400 uppercase tracking-wider">Google Cloud</p>
                <p className="text-[9px] lg:text-[10px] text-white/60">3rd Runner Up</p>
              </div>
            </div>

            {/* Floating badge — available */}
            <div className="absolute -top-3 right-2 lg:-top-4 lg:-right-4 z-20 flex items-center gap-1.5 px-2.5 py-1.5 lg:gap-2 lg:px-3 lg:py-2 rounded-2xl bg-card border border-emerald-500/30 shadow-xl backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5 lg:h-2 lg:w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 lg:h-2 lg:w-2 bg-emerald-500" />
              </span>
              <p className="text-[9px] lg:text-[10px] font-medium text-emerald-400">Open to work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats — full width, centered below grid */}
      <div
        ref={statsRef}
        className="w-full flex flex-wrap justify-center gap-8 lg:gap-16 pt-8 lg:pt-10 mt-8 lg:mt-6 border-t border-white/5"
      >
        {stats.map((stat, i) => (
          <div key={i} className="stat-item text-center">
            <div className="flex items-baseline gap-0.5 justify-center">
              <span
                className="hero-stat-number text-3xl sm:text-4xl lg:text-5xl font-black text-foreground"
                data-value={stat.value}
              >
                0
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                {stat.suffix}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted mt-1 uppercase tracking-wider whitespace-nowrap">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      </div>{/* end outer column wrapper */}

      {/* Scroll indicator — desktop only */}
      <div
        ref={scrollIndicatorRef}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground/50 to-transparent" />
      </div>
    </section>
  );
}
