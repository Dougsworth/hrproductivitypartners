import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, site } from "@/data/site";

/**
 * Sections on the home page that a nav item can point at, in DOM order.
 * Only these two are anchors; the bands between and after them — the
 * results panel, the insights row, the closing call to action — belong to
 * no nav entry, and the spy below says so rather than leaving the previous
 * one lit.
 */
const HOME_SECTIONS = ["services", "about"];

/** Where the fixed header stops and the page a visitor is reading begins. */
const readingTop = () =>
  document.querySelector("header")?.getBoundingClientRect().bottom ?? 72;

/**
 * The section a visitor is actually looking at, or null between sections.
 *
 * Measured by probing a single point a third of the way down the readable
 * area and asking which section covers it. The alternative — remembering
 * the last section whose top edge went by — never lets go, so "Services"
 * stayed lit through the results band underneath it and "About" through
 * everything to the footer, which is the opposite of what a marker is for.
 */
const spyHomeSection = (): string | null => {
  const top = readingTop();
  const probe = top + (window.innerHeight - top) / 3;

  for (const id of HOME_SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const r = el.getBoundingClientRect();
    if (r.top <= probe && r.bottom > probe) return `/#${id}`;
  }

  // Above the first section is the hero, which is Home. Past the last one
  // there is nothing to mark, and the indicator fades out rather than
  // pointing at a section the visitor left two screens ago.
  const first = document.getElementById(HOME_SECTIONS[0]);
  if (first && first.getBoundingClientRect().top > probe) return "/";
  return null;
};

/**
 * Which nav entry should read as "current". On the home page this is driven
 * by scroll position; everywhere else by the URL, with nested routes
 * (an article under /insights) still lighting up their parent.
 */
const useActiveNav = () => {
  const { pathname } = useLocation();
  const [section, setSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setSection(null);
      return;
    }

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setSection(spyHomeSection()));
    };

    schedule();
    // Photographs landing move every section under them, so measure again
    // once the page has settled.
    const settle = window.setTimeout(schedule, 400);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  if (pathname === "/") return section;

  // Longest matching route wins, so /insights/some-article → /insights.
  const match = nav
    .filter((n) => !n.to.includes("#") && n.to !== "/")
    .filter((n) => pathname === n.to || pathname.startsWith(`${n.to}/`))
    .sort((a, b) => b.to.length - a.to.length)[0];

  return match?.to ?? null;
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const activeTo = useActiveNav();

  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  const toggleRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  // Pinning the body to open the sheet reports scrollY as 0, which would
  // otherwise un-condense the header underneath and shift the sheet.
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    const onScroll = () => {
      if (openRef.current) return;
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  /**
   * While the sheet is open the page behind it is pinned at its current
   * offset rather than left to scroll under your finger, and Escape closes
   * it. Closing puts you back on the exact line you were reading.
   */
  useEffect(() => {
    if (!open) return;

    const y = window.scrollY;
    document.body.style.top = `${-y}px`;
    document.body.classList.add("is-locked");
    sheetRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("is-locked");
      document.body.style.top = "";
      window.scrollTo(0, y);
    };
  }, [open]);

  /**
   * Measure the active item and park the ember pill behind it. Re-measured
   * on resize and once webfonts land, since both change the label widths.
   */
  useLayoutEffect(() => {
    const measure = () => {
      const wrap = navRef.current;
      const el = activeTo ? itemRefs.current[activeTo] : null;
      if (!wrap || !el) {
        setPill((p) => ({ ...p, ready: false }));
        return;
      }
      const a = el.getBoundingClientRect();
      const b = wrap.getBoundingClientRect();
      setPill({ left: a.left - b.left, width: a.width, ready: true });
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [activeTo]);

  // Hover used to land on the same text-deep as the current item, so
  // pointing at About while Services was current read as two current items.
  // Hovering now gets a plain grey wash; the ember pill stays the one mark
  // that means "you are here".
  const itemClass = (isActive: boolean) =>
    `relative z-10 inline-flex min-h-[44px] items-center rounded-full px-4 text-fluid-sm outline-none transition-colors duration-300 ${
      isActive
        ? "font-semibold text-deep"
        : "font-medium text-ink/75 hover:bg-deep/[0.06] hover:text-ink"
    }`;

  // On a phone the bar tightens once you start reading, handing a little
  // more of a small screen back to the page. The desktop bar is unchanged.
  const condensed = scrolled && !open;

  return (
    /* The frosted state is dropped while the sheet is open: backdrop-filter
       would make this element the containing block for the fixed sheet
       below it. Dropping it also restores the full bar behind the sheet. */
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[var(--safe-t)] transition-all duration-300 ${
        condensed
          ? "border-b border-deep/10 bg-sand/95 shadow-md shadow-deep/5 backdrop-blur"
          : "border-b border-transparent bg-sand"
      }`}
    >
      <div
        className={`relative z-10 mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 transition-[padding] duration-300 lg:px-10 ${
          condensed ? "py-2 md:py-3.5" : "py-3.5"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <span
            className={`grid place-items-center rounded-full ring-1 ring-deep/10 transition-all duration-300 ${
              condensed ? "h-9 w-9 md:h-11 md:w-11" : "h-11 w-11"
            }`}
          >
            <img
              src={site.logo}
              alt={site.shortName}
              className={`rounded-full object-contain transition-all duration-300 ${
                condensed ? "h-7 w-7 md:h-9 md:w-9" : "h-9 w-9"
              }`}
            />
          </span>
          <span className="leading-tight">
            {/* Compact wordmark on mobile, full name from sm up */}
            <span className="block font-display text-lg font-bold text-deep sm:hidden">
              HRPPI
            </span>
            <span className="hidden font-display text-[15px] font-semibold text-deep sm:block sm:text-base">
              Human Resource Productivity Partners
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/70 sm:text-[11px] sm:tracking-[0.32em] ${
                condensed ? "hidden sm:block" : "block"
              }`}
            >
              International
            </span>
          </span>
        </Link>

        {/* Desktop nav — one pill glides between items instead of five
            separate underlines blinking on and off. */}
        <nav className="hidden items-center gap-2 md:flex">
          <div ref={navRef} className="relative flex items-center gap-1">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-1 rounded-full bg-ember-100 ring-1 ring-ember/25 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{
                left: pill.left,
                width: pill.width,
                opacity: pill.ready ? 1 : 0,
              }}
            />
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                ref={(el) => {
                  itemRefs.current[item.to] = el;
                }}
                aria-current={activeTo === item.to ? "page" : undefined}
                className={itemClass(activeTo === item.to)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contacts"
            className="group ml-3 rounded-full bg-deep px-5 py-3 text-fluid-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-deep-800 hover:shadow-lg hover:shadow-deep/30"
          >
            Let's Talk
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </nav>

        {/* Mobile toggle. 44px square: the smallest target a thumb can
            hit reliably, per the platform guidelines both phones ship. */}
        <button
          ref={toggleRef}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full transition-transform active:scale-90 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-deep transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-deep transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-deep transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* ---------- Mobile menu ----------
          A sheet that covers the page rather than an accordion that pushes
          it down: the view you were on stays exactly where you left it,
          and the entries arrive in order instead of appearing at once. */}
      {open && (
        <div
          id="mobile-menu"
          ref={sheetRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="sheet-in fixed inset-x-0 bottom-0 top-[var(--header-h)] z-0 flex flex-col overflow-y-auto overscroll-contain border-t border-deep/10 bg-sand outline-none md:hidden"
        >
          <nav className="px-6 pt-2">
            {nav.map((item, i) => {
              const isActive = activeTo === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  style={{ animationDelay: `${60 + i * 45}ms` }}
                  className="sheet-item flex items-center gap-4 border-b border-deep/10 py-5 transition-transform active:scale-[0.98]"
                >
                  {/* The ember rule marks where you are — the same mark the
                      desktop pill makes, in the form a list can use. */}
                  <span
                    aria-hidden
                    className={`h-px shrink-0 transition-all duration-300 ${
                      isActive ? "w-8 bg-ember" : "w-3 bg-deep/20"
                    }`}
                  />
                  <span
                    className={`font-display text-[1.6rem] font-bold leading-none ${
                      isActive ? "text-ember-ink" : "text-deep"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div
            className="sheet-item mt-auto px-6 pb-[calc(var(--safe-b)+1.5rem)] pt-10"
            style={{ animationDelay: `${60 + nav.length * 45}ms` }}
          >
            <p className="mb-8 -rotate-[3deg] font-script text-[1.7rem] font-semibold leading-tight text-deep/70">
              {site.tagline}
            </p>
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="flex min-h-[52px] items-center justify-center rounded-full bg-ember px-6 text-base font-bold text-ink shadow-lg shadow-ember/25 transition-transform active:scale-[0.98]"
            >
              Book a consultation
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block break-words text-center text-fluid-sm text-ink/70"
            >
              {site.email}
            </a>
          </div>
        </div>
      )}

    </header>
  );
};
