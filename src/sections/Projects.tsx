/* ============================================
   PROJECTS SECTION
   "FEATURED PROJECTS" with responsive grid,
   GSAP scroll-triggered reveals and hover effects.
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading animation is handled by SectionTitle/AnimatedText
      // Additional scroll-triggered parallax on the grid container
      gsap.fromTo(
        ".projects-grid",
        { y: 40 },
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
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
      id="work"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(150px)" }}
      />
      <div
        className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(circle, #9333ea 0%, transparent 70%)", filter: "blur(140px)" }}
      />

      <div className="relative z-10">
      <SectionTitle
        title="FEATURED PROJECTS"
        label="Selected Work"
      />

      {/* Responsive project grid */}
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      </div>
    </section>
  );
}
