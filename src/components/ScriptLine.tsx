import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Tail = { left: number; top: number; width: number };

/**
 * Handwritten slogan line with a curved swoosh beneath it.
 *
 * The rotation lives on the OUTER wrapper so the text and the stroke turn
 * together — rotating only the text made the stroke drift across it and
 * read as a strikethrough.
 *
 * The stroke is measured against the LAST rendered line rather than the
 * whole block. On a narrow screen the slogan wraps, and a swoosh drawn at
 * block width would shoot out past the end of the words; measuring the
 * final line keeps it tucked under the last word at every size.
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
  const textRef = useRef<HTMLParagraphElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [tail, setTail] = useState<Tail | null>(null);

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

  useLayoutEffect(() => {
    const measure = () => {
      const p = textRef.current;
      if (!p || !p.firstChild) return;
      const range = document.createRange();
      range.selectNodeContents(p);
      const rects = Array.from(range.getClientRects());
      if (!rects.length) return;
      const last = rects[rects.length - 1];
      const box = p.getBoundingClientRect();
      setTail({
        left: last.left - box.left,
        top: last.bottom - box.top,
        width: last.width,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [children]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {/* one rotation for both, so they never drift apart */}
      <div className="relative inline-block -rotate-[3.5deg]">
        <p
          ref={textRef}
          className={`font-script text-[1.7rem] font-semibold leading-[1.2] sm:text-[1.95rem] ${
            tone === "light" ? "text-white" : "text-deep"
          }`}
        >
          {children}
        </p>

        {/* sits below the final line of text, never through it */}
        <svg
          className={`pointer-events-none absolute overflow-visible transition-opacity duration-300 ${
            tone === "light" ? "text-white/90" : "text-ember"
          } ${tail ? "opacity-100" : "opacity-0"}`}
          style={
            tail
              ? { left: tail.left, top: tail.top, width: tail.width }
              : { left: 0, top: "100%", width: "100%" }
          }
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
