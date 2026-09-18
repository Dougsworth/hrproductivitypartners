import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** delay in ms before the element animates in */
  delay?: number;
  className?: string;
  /** translate direction */
  as?: "up" | "left" | "right";
};

export const Reveal = ({ children, delay = 0, className = "", as = "up" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour the OS setting: show everything immediately, animate nothing.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // A little scale alongside the translate reads as "settling into place"
  // rather than "sliding in", which is what makes it feel considered.
  const hidden =
    as === "left"
      ? "opacity-0 -translate-x-8 scale-[0.99]"
      : as === "right"
        ? "opacity-0 translate-x-8 scale-[0.99]"
        : "opacity-0 translate-y-8 scale-[0.99]";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
};
