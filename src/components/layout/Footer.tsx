import { Link } from "react-router-dom";
import { nav, site } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-900 text-white">
      <div
        className="absolute -left-32 -top-20 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white">
              <img
                src={site.logo}
                alt={site.shortName}
                className="h-10 w-10 rounded-full object-contain"
              />
            </span>
            <span className="font-display text-lg font-semibold leading-tight">
              Human Resource Productivity Partners,{" "}
              <span className="text-white/70">International</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-white/60">
            {site.name} is a registered human resource consulting service.
            Strengthening your people capacity is our business.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li>{site.location}</li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Human Resource Productivity Partners,
            International (HRPPI). All rights reserved.
          </p>
          {/* Freshness signal for search & AI engines — bump when content changes */}
          <p>Page updated August 2026</p>
        </div>
      </div>
    </footer>
  );
};
