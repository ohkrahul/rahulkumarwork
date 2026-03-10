/* ============================================
   ABOUT SECTION — Client-Conversion Focused
   "WHY ME." heading with value propositions,
   animated feature cards, and toolkit cloud.
   Designed to convince clients to hire.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const allSkills = skillCategories.flatMap((cat) => cat.skills);

const VALUE_PROPS = [
  {
    icon: "⚡",
    title: "Lightning Fast Delivery",
    desc: "From concept to live website in 2-4 weeks, not months. I work at startup speed so you can launch before your competitors.",
    stat: "2-4 weeks",
    statLabel: "avg. delivery",
    accent: "emerald",
  },
  {
    icon: "💰",
    title: "Revenue-Focused Code",
    desc: "Every line of code is written to convert visitors into customers. SEO-optimized, fast-loading, and designed to sell.",
    stat: "35%",
    statLabel: "avg. sales boost",
    accent: "blue",
  },
  {
    icon: "🎯",
    title: "Pixel-Perfect Execution",
    desc: "Your design vision implemented exactly as intended. Smooth animations, responsive layouts, zero compromises on quality.",
    stat: "100%",
    statLabel: "implementation fidelity",
    accent: "purple",
  },
  {
    icon: "🤝",
    title: "Transparent Communication",
    desc: "Daily updates, no surprises. You&apos;ll always know project status, timeline, and next steps. I respond within 2 hours.",
    stat: "< 2hrs",
    statLabel: "response time",
    accent: "amber",
  },
];

const ACCENT_MAP: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", glow: "group-hover:shadow-emerald-500/10" },
  blue:    { border: "border-blue-500/30",    bg: "bg-blue-500/10",    text: "text-blue-400",    glow: "group-hover:shadow-blue-500/10" },
  purple:  { border: "border-primary/30",     bg: "bg-primary/10",     text: "text-primary",     glow: "group-hover:shadow-primary/10" },
  amber:   { border: "border-amber-500/30",   bg: "bg-amber-500/10",   text: "text-amber-400",   glow: "group-hover:shadow-amber-500/10" },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-heading",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-heading", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".value-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: ".value-cards-grid", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".toolkit-heading",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".toolkit-heading", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".skill-pill",
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power2.out", stagger: 0.03,
          scrollTrigger: { trigger: ".skills-cloud", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 section-padding overflow-hidden"
      id="about"
    >
      {/* Background glows */}
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(140px)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(circle, #9333ea 0%, transparent 70%)", filter: "blur(130px)" }}
      />

      <div className="relative z-10">
        {/* ====== WHY ME HEADING ====== */}
        <div className="mb-16">
          <h2 className="about-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
            WHY
            <br />
            <span className="text-gradient">HIRE ME.</span>
          </h2>
          <p className="about-heading mt-6 text-muted text-base md:text-lg leading-relaxed max-w-xl">
            Freelance Software Developer based in Mumbai. Google Cloud Hackathon finalist. 
            I don&apos;t just write code — I build products that generate revenue.
          </p>
        </div>

        {/* ====== VALUE PROPOSITION CARDS — 2×2 GRID ====== */}
        <div className="value-cards-grid grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {VALUE_PROPS.map((prop, i) => {
            const colors = ACCENT_MAP[prop.accent];
            return (
              <div
                key={i}
                className={`value-card group relative rounded-2xl border ${colors.border} bg-card/50 backdrop-blur-sm p-7 hover:bg-card/80 hover:shadow-xl ${colors.glow} transition-all duration-500`}
                data-cursor-hover
              >
                {/* Top row: icon + stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {prop.icon}
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-black ${colors.text}`}>{prop.stat}</p>
                    <p className="text-[10px] text-muted uppercase tracking-wider">{prop.statLabel}</p>
                  </div>
                </div>

                {/* Title + description */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-foreground transition-colors duration-300">
                  {prop.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {prop.desc}
                </p>

                {/* Hover accent line */}
                <div className={`absolute bottom-0 left-0 h-0.5 ${colors.bg} w-0 group-hover:w-full transition-all duration-500 rounded-full`} />
              </div>
            );
          })}
        </div>

        {/* ====== TOOLKIT SECTION ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="toolkit-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
              MY
              <br />
              TOOLKIT.
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-md mb-6">
              Battle-tested technologies for building fast, scalable, and beautiful products. 
              From frontend animations to backend APIs.
            </p>

            {/* Key highlights */}
            <div className="flex flex-wrap gap-3">
              {["Full-Stack", "AI/ML Integration", "Mobile Apps", "Cloud Native", "DevOps"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary/10 border border-primary/20 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            {/* Unified skill cloud */}
            <div className="skills-cloud flex flex-wrap gap-2">
              {allSkills.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="skill-pill group/pill relative px-4 py-2.5 rounded-xl text-sm font-medium bg-card border border-card-border text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-default select-none"
                  data-cursor-hover
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom stat line */}
            <div className="mt-8 flex items-center gap-3 text-sm text-muted/60">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{allSkills.length}+ technologies & tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
