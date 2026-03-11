/* ============================================
   CONTACT SECTION — Conversion CTA
   
   "READY TO START?" with availability status,
   response time guarantee, and prominent form.
   Designed to reduce friction and encourage
   clients to reach out immediately.
   ============================================ */

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks } from "@/lib/data";
import AnimatedText from "@/components/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-field",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".contact-info-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".social-link",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".social-links",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:         formData.name,
          email:        formData.email,
          phone:        formData.phone  || "Not provided",
          project_type: formData.project || "Not specified",
          budget:       formData.budget  || "Not specified",
          message:      formData.message,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", project: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 section-padding relative overflow-hidden"
      id="contact"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.12] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #9333ea 0%, transparent 70%)",
          filter: "blur(150px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Heading + Info */}
        <div>
          <AnimatedText
            text="READY TO START YOUR PROJECT?"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] mb-8"
          />

          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Tell me about your project and I&apos;ll get back to you with a 
            free consultation and custom quote within 24 hours.
          </p>

          {/* Trust signals */}
          <div className="contact-info space-y-5 mb-10">
            <div className="contact-info-item flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 text-lg">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium">Free consultation call</p>
                <p className="text-xs text-muted">No commitments, no pressure</p>
              </div>
            </div>

            <div className="contact-info-item flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg">⚡</span>
              </div>
              <div>
                <p className="text-sm font-medium">Response within 24 hours</p>
                <p className="text-xs text-muted">Usually much faster</p>
              </div>
            </div>

            <div className="contact-info-item flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 text-lg">📋</span>
              </div>
              <div>
                <p className="text-sm font-medium">Fixed-price quotes</p>
                <p className="text-xs text-muted">Know exactly what you&apos;ll pay</p>
              </div>
            </div>
          </div>

          {/* Availability status */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-400">
              Currently accepting new projects
            </span>
          </div>
        </div>

        {/* Right: Contact form */}
        <div>
          <form onSubmit={handleSubmit} className="contact-form space-y-5">
            {/* Name & Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="contact-field">
                <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-card-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted/50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact-field">
                <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-card-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted/50"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Phone number */}
            <div className="contact-field">
              <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-card border border-card-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted/50"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Project type & Budget row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="contact-field">
                <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                  Project Type
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full bg-card border border-card-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 appearance-none"
                >
                  <option value="" className="bg-card">Select type...</option>
                  <option value="website" className="bg-card">Website / Landing Page</option>
                  <option value="webapp" className="bg-card">Web Application</option>
                  <option value="ecommerce" className="bg-card">E-Commerce</option>
                  <option value="redesign" className="bg-card">Redesign / Rebuild</option>
                  <option value="ai" className="bg-card">AI Integration</option>
                  <option value="other" className="bg-card">Other</option>
                </select>
              </div>
              <div className="contact-field">
                <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-card border border-card-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 appearance-none"
                >
                  <option value="" className="bg-card">Select budget...</option>
                  <option value="10k-25k" className="bg-card">₹10,000 - ₹25,000</option>
                  <option value="25k-50k" className="bg-card">₹25,000 - ₹50,000</option>
                  <option value="50k-1L" className="bg-card">₹50,000 - ₹1,00,000</option>
                  <option value="1L-2L" className="bg-card">₹1,00,000 - ₹2,00,000</option>
                  <option value="2L+" className="bg-card">₹2,00,000+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="contact-field">
              <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                Project Details *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-card border border-card-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none placeholder:text-muted/50"
                placeholder="Brief description of your project, goals, and timeline..."
                required
              />
            </div>

            {/* Success message */}
            {status === "success" && (
              <div className="contact-field flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                <span className="text-lg">✅</span>
                <span>Message sent! I&apos;ll get back to you within 24 hours.</span>
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div className="contact-field flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <span className="text-lg">❌</span>
                <span>Something went wrong. Please email me directly at rahulsahu3612@gmail.com</span>
              </div>
            )}

            {/* Submit button */}
            <div className="contact-field">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-10 py-4 rounded-xl bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send & Get Free Quote"}
              </button>
              <p className="text-xs text-muted mt-3">
                🔒 Your info is never shared. I&apos;ll reply within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Social links footer */}
      <div className="social-links mt-20 pt-12 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group flex flex-col items-center gap-1"
              data-cursor-hover
            >
              <span className="text-sm font-bold group-hover:text-primary transition-colors duration-300">
                {link.name}
              </span>
              <span className="text-xs text-muted group-hover:text-foreground/60 transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-xs text-muted">
          © Rahul Kumar Sahu | {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
