/* ============================================
   PROJECT CARD COMPONENT
   Shows live website iframe preview, hover 
   animations, and GSAP scroll-triggered reveal.
   ============================================ */

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Project } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.15,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === card) t.kill();
      });
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden bg-card border border-card-border hover:border-primary/30 transition-all duration-500"
      data-cursor-hover
    >
      {/* Live website preview iframe */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-black/50">
        {project.link ? (
          <>
            {/* Browser chrome bar */}
            <div className="absolute top-0 left-0 right-0 z-10 h-7 bg-card/90 backdrop-blur-sm border-b border-card-border/50 flex items-center px-3 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <div className="ml-3 flex-1 h-4 rounded bg-card-border/30 flex items-center px-2">
                <span className="text-[9px] text-muted/50 truncate">{project.link}</span>
              </div>
            </div>

            {/* Iframe container — scaled down to show full site */}
            <div className="absolute inset-0 pt-7">
              <div className="w-full h-full overflow-hidden">
                <iframe
                  src={project.link}
                  title={`${project.title} Preview`}
                  className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  tabIndex={-1}
                />
              </div>
            </div>

            {/* Hover overlay with actions */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 z-20" />
          </>
        ) : (
          /* Fallback gradient for projects without a link */
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-24 h-24 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}66)`,
                  boxShadow: `0 20px 60px ${project.color}40`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="relative z-30 p-6">
        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-primary/80 font-mono mb-3">
          {project.subtitle}
        </p>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Action links */}
        <div className="mt-4 flex items-center gap-4">
          {/* Case study */}
          <Link
            href={`/project/${project.slug}`}
            className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            <span>CASE STUDY</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Live site link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted hover:text-primary text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
            >
              <span>VISIT SITE</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
