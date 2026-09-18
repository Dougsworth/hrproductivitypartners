import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * An italic accent word with a hand-drawn underline that draws itself the
 * first time it scrolls into view — the flourish the old hero had on
 * "people", rebuilt to match the orange swooshes in the brand artwork.
 *
 * The stroke is an SVG path so it keeps its hand-drawn wobble at any size,
 * unlike a CSS border or gradient.
 */
export const AccentWord = ({
  children,
  className = "",
  delay = 400,
}: {
  children: ReactNode;
  className?: string;
  /** ms to wait after the word appears before the stroke draws */
  delay?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = window.setTimeout(() => setDrawn(true), delay);
          io.disconnect();
          return () => window.clearTimeout(t);
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <span ref={ref} className={`relative inline-block italic ${className}`}>
      {children}
      {/* the swoosh sits under the baseline and is purely decorative */}
      <svg
        className="pointer-events-none absolute -bottom-[0.14em] left-[-0.03em] h-[0.34em] w-[calc(100%+0.06em)] overflow-visible"
        viewBox="0 0 200 22"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M3 15.5C28 7.5 62 3.5 100 4.5c34 .9 66 5.4 97 11"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className={`accent-swoosh ${drawn ? "is-drawn" : ""}`}
        />
      </svg>
    </span>
  );
};
