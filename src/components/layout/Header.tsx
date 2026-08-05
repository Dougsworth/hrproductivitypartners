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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium outline-none transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-brand after:transition-all focus-visible:after:w-full ${
      isActive
        ? "text-brand after:w-full"
        : "text-slate-600 hover:text-brand after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur"
          : "border-b border-slate-100 bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-3.5 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-slate-200">
            <img
              src={site.logo}
              alt={site.shortName}
              className="h-9 w-9 rounded-full object-contain"
            />
          </span>
          <span className="leading-tight">
            {/* Compact wordmark on mobile, full name from sm up */}
            <span className="block font-display text-lg font-bold text-brand sm:hidden">
              HRPPI
            </span>
            <span className="hidden font-display text-[15px] font-semibold text-brand sm:block sm:text-base">
              Human Resource Productivity Partners
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-400 sm:text-[10px] sm:tracking-[0.32em]">
              International
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contacts"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand/30"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-brand transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-brand transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-brand transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden border-t border-slate-100 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="space-y-1 px-6 py-4">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  isActive ? "bg-brand-50 text-brand" : "text-slate-600 hover:bg-slate-50 hover:text-brand"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contacts"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
};
