/* ============================================
   MAGNETIC BUTTON COMPONENT
   Button that follows cursor within its bounds
   using GSAP magnetic effect for premium feel.
   ============================================ */

"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  as?: "button" | "a";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  strength = 0.3,
  as = "button",
  disabled = false,
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    // GSAP magnetic effect: element follows cursor within its bounds
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    // Snap back with elastic ease when mouse leaves
    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  const baseClasses = `magnetic-btn relative inline-flex items-center justify-center ${className}`;

  if (as === "a" && href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        onClick={onClick}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
