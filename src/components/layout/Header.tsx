import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, site } from "@/data/site";

/**
 * Sections on the home page that a nav item can point at, listed in DOM
 * order. The scroll-spy walks this list and keeps the last one whose top
 * edge has passed the reading line, so the nav indicator tracks the page
 * as you scroll rather than only when you click.
 */
const HOME_SECTIONS = ["services", "about"];

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
    const onScroll = () => {
      // The "reading line" sits just below the fixed header.
      const line = window.scrollY + 160;
      let current: string | null = null;
      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) {
          current = id;
        }
      }
      setSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (pathname === "/") return section ? `/#${section}` : "/";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

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

  const itemClass = (isActive: boolean) =>
    `relative z-10 inline-flex min-h-[44px] items-center rounded-full px-4 text-fluid-sm font-medium outline-none transition-colors duration-300 ${
      isActive ? "text-deep" : "text-ink/75 hover:text-deep"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-deep/10 bg-sand/95 shadow-md shadow-deep/5 backdrop-blur"
          : "border-b border-transparent bg-sand"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-3.5 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-deep/10">
            <img
              src={site.logo}
              alt={site.shortName}
              className="h-9 w-9 rounded-full object-contain"
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
            <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/70 sm:text-[11px] sm:tracking-[0.32em]">
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

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-deep transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-deep transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-deep transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden border-t border-deep/10 bg-sand transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="space-y-1 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              aria-current={activeTo === item.to ? "page" : undefined}
              className={`block min-h-[44px] rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                activeTo === item.to
                  ? "bg-ember-100 text-deep"
                  : "text-ink/70 hover:bg-white hover:text-deep"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacts"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-deep px-5 py-3 text-center text-base font-semibold text-white"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
};
