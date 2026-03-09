/* ============================================
   SECTION TITLE COMPONENT
   Reusable section header with animated text
   and optional subtitle/label.
   ============================================ */

"use client";

import AnimatedText from "./AnimatedText";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  label,
  className = "",
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      {label && (
        <span className="text-primary text-sm font-mono uppercase tracking-[0.2em] mb-4 block">
          {label}
        </span>
      )}
      <AnimatedText
        text={title}
        as="h2"
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9]"
      />
      {subtitle && (
        <p className="text-muted text-lg md:text-xl mt-6 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
