/* ============================================
   ACHIEVEMENTS SECTION — Trust Builder
   Video showcase of hackathon wins and awards.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { achievements } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  /* Force autoplay on all achievement videos — needed on mobile */
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {});
      }
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".achievement-badge",
        { scale: 0, rotation: -15 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".achievement-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".achievement-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievement-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".achievement-video-wrap",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievement-video-wrap",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".achievement-highlight",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".achievement-highlights",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".achievement-tag",
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: ".achievement-tags",
            start: "top 90%",
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
      id="achievements"
    >
      {/* Background glow layers */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          filter: "blur(150px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.10] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      <div className="relative z-10">
        <SectionTitle title="RECOGNITION & AWARDS" label="Achievements" />

        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card relative">
            <div className="glass-card rounded-3xl overflow-hidden border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left — Video */}
                <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[500px] overflow-hidden bg-black">
                  <div className="achievement-video-wrap absolute inset-0">
                    <video
                      ref={(el) => { if (el) videoRefs.current.push(el); }}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    >
                      {/* WebM/VP9 — Chrome, Firefox, Edge Chromium */}
                      <source
                        src={achievement.video.replace("/upload/", "/upload/vc_vp9,ac_none/").replace(".mp4", ".webm")}
                        type="video/webm; codecs=vp9"
                      />
                      {/* H.264 MP4 — Safari, all Edge versions */}
                      <source
                        src={achievement.video.replace("/upload/", "/upload/vc_h264,ac_none/")}
                        type="video/mp4; codecs=avc1.42E01E"
                      />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/20" />
                  </div>

                  {/* Floating position badge */}
                  <div className="achievement-badge absolute top-5 left-5 z-10">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-yellow-500/90 backdrop-blur-sm text-black font-bold text-sm shadow-lg shadow-yellow-500/30">
                      <span className="text-lg">🏆</span>
                      {achievement.position}
                    </div>
                  </div>

                  {/* Prize badge */}
                  <div className="achievement-badge absolute top-5 right-5 z-10">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-green-500/90 backdrop-blur-sm text-black font-bold text-sm shadow-lg shadow-green-500/30">
                      <span>💰</span>
                      {achievement.prize}
                    </div>
                  </div>

                  {/* Play indicator */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs text-white/70 font-medium">HACKATHON HIGHLIGHTS</span>
                  </div>
                </div>

                {/* Right — Content */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm">☁️</div>
                    <span className="text-sm text-primary font-medium">{achievement.organizer}</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-sm text-muted">{achievement.date}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                    {achievement.title}
                  </h3>

                  <p className="text-sm text-primary/70 font-mono mb-4">
                    Team {achievement.teamName}
                  </p>

                  <div className="mb-5 p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-xs text-muted/70 uppercase tracking-wider mb-1">Problem Statement</p>
                    <p className="text-sm text-foreground/80 font-medium">{achievement.problemStatement}</p>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  <div className="achievement-highlights space-y-2.5 mb-6">
                    {achievement.highlights.map((highlight, i) => (
                      <div key={i} className="achievement-highlight flex items-start gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                          </svg>
                        </span>
                        <span className="text-foreground/70">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="achievement-tags flex flex-wrap gap-1.5">
                    {achievement.tags.map((tag, i) => (
                      <span key={i} className="achievement-tag text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
