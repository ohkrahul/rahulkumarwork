/* ============================================
   ABOUT SECTION
   "ME." heading with intro video and 
   "MY TOOLKIT." with unified skill cloud.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

/* All skills flattened for the unified cloud */
const allSkills = skillCategories.flatMap((cat) => cat.skills);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Force autoplay — needed for mobile browsers that block the HTML attribute */
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-video",
        { scale: 0.85, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          scale: 1,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-video",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".toolkit-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".toolkit-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".skill-pill",
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.03,
          scrollTrigger: {
            trigger: ".skills-cloud",
            start: "top 85%",
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
      id="about"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(140px)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(circle, #9333ea 0%, transparent 70%)", filter: "blur(130px)" }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left column: ME. + Video */}
        <div>
          <h2 className="about-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8">
            ME.
          </h2>

          {/* Video with rounded border */}
          <div className="about-video relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-2 border-card-border group">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              {/* WebM/VP9 — Chrome, Firefox, Edge Chromium */}
              <source
                src="https://res.cloudinary.com/dtpz8iptk/video/upload/vc_vp9,ac_none/v1773092564/2_vvw4h7.webm"
                type="video/webm; codecs=vp9"
              />
              {/* H.264 MP4 — Safari, all Edge versions, IE11 fallback */}
              <source
                src="https://res.cloudinary.com/dtpz8iptk/video/upload/vc_h264,ac_none/v1773092564/2_vvw4h7.mp4"
                type="video/mp4; codecs=avc1.42E01E"
              />
            </video>
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent pointer-events-none" />
            {/* Play badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">About Me</span>
            </div>
          </div>

          {/* Brief bio */}
          <p className="mt-6 text-muted text-base md:text-lg leading-relaxed max-w-md">
            Freelance Software Developer based in Mumbai, specializing in
            crafting immersive web experiences with cutting-edge technologies.
            Google Cloud Hackathon winner. I build websites that grow your business.
          </p>
        </div>

        {/* Right column: MY TOOLKIT. */}
        <div>
          <h2 className="toolkit-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10">
            MY
            <br />
            TOOLKIT.
          </h2>

          {/* Unified skill cloud — all skills in one flowing grid */}
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
    </section>
  );
}
