/* ============================================
   FAQ SECTION
   Accordion-style frequently asked questions.
   Answers common client concerns: pricing,
   timeline, process, support.
   Removes friction from hiring decision.
   ============================================ */

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqs } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !answerRef.current) return;
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: answerRef.current.offsetHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`faq-item glass-card rounded-2xl overflow-hidden transition-colors duration-300 ${
        isOpen ? "border-primary/30" : ""
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
        data-cursor-hover
      >
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-primary/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-sm md:text-base font-semibold group-hover:text-primary transition-colors duration-300">
            {question}
          </h3>
        </div>
        <div
          className={`w-8 h-8 rounded-full border border-card-border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? "bg-primary border-primary rotate-45" : "group-hover:border-primary/50"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div ref={answerRef} className="px-6 pb-6 pl-16">
          <p className="text-sm text-muted leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".faq-list",
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
      id="faq"
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <SectionTitle title="COMMON QUESTIONS" label="FAQ" />

        <div className="faq-list space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center">
          <p className="text-muted text-sm mb-4">
            Have a different question?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 font-medium text-sm"
            data-cursor-hover
          >
            Let&apos;s chat — I respond within 24 hours
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
