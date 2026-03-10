/* ============================================
   CASE STUDY PAGE - Dynamic Route
   /project/[slug]
   
   Features:
   - Parallax hero image
   - GSAP scroll-based animations
   - Animated sections with ScrollTrigger
   - Staggered tech stack reveal
   ============================================ */

"use client";

import { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";
import AnimatedText from "@/components/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  const project = projects.find((p) => p.slug === params.slug);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      // Hero image parallax - moves slower than scroll for depth
      gsap.to(heroImageRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Project info sections fade up on scroll
      gsap.fromTo(
        ".case-info",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".case-info-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tech stack tags stagger in
      gsap.fromTo(
        ".tech-tag",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(2)",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".tech-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Description paragraphs reveal
      gsap.fromTo(
        ".case-paragraph",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".case-content",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Gallery images parallax
      gsap.utils.toArray<HTMLElement>(".gallery-image").forEach((img) => {
        gsap.fromTo(
          img,
          { y: 40, scale: 0.95, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Next project section
      gsap.fromTo(
        ".next-project",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".next-project",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [project]);

  // 404 fallback
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">404</h1>
          <p className="text-muted mb-8">Project not found</p>
          <MagneticButton
            onClick={() => router.push("/")}
            className="px-8 py-3 rounded-full border border-card-border text-sm hover:border-primary transition-colors"
          >
            Back to Home
          </MagneticButton>
        </div>
      </div>
    );
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div ref={pageRef} className="min-h-screen">
      {/* Hero Section with parallax */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden flex items-end">
        {/* Parallax background */}
        <div
          ref={heroImageRef}
          className="absolute inset-0 scale-110"
          style={{
            background: `linear-gradient(135deg, ${project.color}44, ${project.color}11, #0a0a0a)`,
          }}
        >
          {/* Large decorative shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <div
              className="w-full h-full rounded-full blur-3xl opacity-30"
              style={{
                background: `radial-gradient(circle, ${project.color}, transparent)`,
              }}
            />
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 section-padding pb-12 md:pb-16 w-full">
          {/* Back button */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
            data-cursor-hover
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Back to Projects
          </button>

          <AnimatedText
            text={project.title}
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
            scrollTrigger={false}
            delay={0.3}
          />
          <p className="text-primary font-mono text-lg mt-4">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Project Info Grid */}
      <section className="section-padding py-16 md:py-24">
        <div className="case-info-container grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="case-info">
            <span className="text-xs text-muted uppercase tracking-wider block mb-2">
              Year
            </span>
            <span className="text-lg font-bold">{project.year}</span>
          </div>
          <div className="case-info">
            <span className="text-xs text-muted uppercase tracking-wider block mb-2">
              Role
            </span>
            <span className="text-lg font-bold">{project.role}</span>
          </div>
          <div className="case-info">
            <span className="text-xs text-muted uppercase tracking-wider block mb-2">
              Client
            </span>
            <span className="text-lg font-bold">{project.client}</span>
          </div>
          <div className="case-info">
            <span className="text-xs text-muted uppercase tracking-wider block mb-2">
              Links
            </span>
            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                  data-cursor-hover
                >
                  Live ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                  data-cursor-hover
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="tech-container mb-16">
          <h3 className="text-xs text-muted uppercase tracking-wider mb-4">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="tech-tag px-4 py-2 rounded-full glass-card text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed description */}
        <div className="case-content max-w-3xl">
          <h3 className="case-paragraph text-2xl md:text-3xl font-bold mb-6">
            Overview
          </h3>
          <p className="case-paragraph text-muted text-lg leading-relaxed mb-8">
            {project.longDescription}
          </p>
          <p className="case-paragraph text-muted leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Gallery / Mockups Section */}
      <section className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(project.images ?? []).map((src, i) => (
            <div
              key={i}
              className={`gallery-image rounded-2xl overflow-hidden border border-white/5 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
          {/* Fallback placeholder if no images */}
          {!project.images?.length && [1, 2, 3].map((i) => (
            <div
              key={i}
              className={`gallery-image rounded-2xl overflow-hidden ${
                i === 1 ? "md:col-span-2 h-64 md:h-96" : "h-48 md:h-64"
              }`}
              style={{
                background: `linear-gradient(${135 + i * 30}deg, ${project.color}22, ${project.color}08, #141414)`,
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-muted/30 text-sm">
                Project Screenshot {i}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="section-padding py-24 md:py-32 border-t border-card-border">
        <div className="next-project text-center">
          <span className="text-xs text-muted uppercase tracking-wider">
            Next Project
          </span>
          <button
            onClick={() => router.push(`/project/${nextProject.slug}`)}
            className="block mx-auto mt-4 group"
            data-cursor-hover
          >
            <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter group-hover:text-primary transition-colors duration-300">
              {nextProject.title}
            </span>
            <div className="mt-4 text-muted group-hover:text-foreground transition-colors">
              View Project →
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
