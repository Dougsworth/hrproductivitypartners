import { useEffect, useRef, useState } from "react";

/**
 * Handwritten slogan line with a curved swoosh beneath it.
 *
 * The rotation lives on the OUTER wrapper so the text and the stroke turn
 * together — rotating only the text made the stroke drift across it and
 * read as a strikethrough. The stroke then sits below the text box via
 * `top-full`, clearing the descenders at every size.
 *
 * Curve geometry is taken from the brand asset pack's own swoosh
 * (graphics/stronger-people-brighter-caribbean.svg): a shallow upward bow
 * that lifts toward the right, roughly 0.14 rise over run.
 */
export const ScriptLine = ({
  children,
  tone = "dark",
  className = "",
  delay = 500,
}: {
  children: string;
  tone?: "dark" | "light";
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          window.setTimeout(() => setDrawn(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {/* one rotation for both, so they never drift apart */}
      <div className="relative inline-block -rotate-[3.5deg]">
        <p
          className={`font-script text-[1.7rem] font-semibold leading-[1.2] sm:text-[1.95rem] ${
            tone === "light" ? "text-white" : "text-deep"
          }`}
        >
          {children}
        </p>

        {/* sits below the text box, never through it */}
        <svg
          className={`pointer-events-none absolute left-0 top-full w-full overflow-visible ${
            tone === "light" ? "text-white/90" : "text-ember"
          }`}
          viewBox="0 0 220 34"
          height="14"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M4 27C52 17 118 18 216 5"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            className={`accent-swoosh ${drawn ? "is-drawn" : ""}`}
          />
        </svg>
      </div>
    </div>
  );
};
