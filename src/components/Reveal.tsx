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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden =
    as === "left"
      ? "opacity-0 -translate-x-6"
      : as === "right"
        ? "opacity-0 translate-x-6"
        : "opacity-0 translate-y-6";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
};
