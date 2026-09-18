import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav, site } from "@/data/site";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const baseLink =
    "relative inline-flex min-h-[44px] items-center text-fluid-sm font-medium outline-none transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-ember after:transition-all focus-visible:after:w-full";

  const anchorClass = `${baseLink} text-ink/75 hover:text-deep after:w-0 hover:after:w-full`;

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium outline-none transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-ember after:transition-all focus-visible:after:w-full ${
      isActive
        ? "text-deep after:w-full"
        : "text-ink/75 hover:text-deep after:w-0 hover:after:w-full"
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) =>
            item.to.includes("#") ? (
              // In-page anchor: never a "route", so never rendered active.
              <a key={item.to} href={item.to.replace(/^\//, "")} className={anchorClass}>
                {item.label}
              </a>
            ) : (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ),
          )}
          <Link
            to="/contacts"
            className="group rounded-full bg-deep px-5 py-3 text-fluid-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-deep-800 hover:shadow-lg hover:shadow-deep/30"
          >
            Let's Talk
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
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
          {nav.map((item) =>
            item.to.includes("#") ? (
              <a
                key={item.to}
                href={item.to.replace(/^\//, "")}
                onClick={() => setOpen(false)}
                className="block min-h-[44px] rounded-lg px-3 py-3 text-base font-medium text-ink/70 transition-colors hover:bg-white hover:text-deep"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block min-h-[44px] rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-ember-100 text-deep"
                      : "text-ink/70 hover:bg-white hover:text-deep"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Link
            to="/contacts"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-deep px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
};
