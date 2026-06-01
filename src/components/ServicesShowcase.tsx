import { useState } from "react";
import { services, site } from "@/data/site";
import Icon from "@/components/Icon";

export const ServicesShowcase = () => {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
      {/* Tabs */}
      <div className="flex flex-col gap-2">
        {services.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                isActive
                  ? "border-brand/15 bg-brand text-white shadow-lg"
                  : "border-slate-100 bg-white text-brand hover:border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                  isActive ? "bg-white/15 text-white" : "bg-brand-50 text-brand"
                }`}
              >
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <span className="flex-1">
                <span className="block font-display text-base font-bold leading-tight">
                  {item.title}
                </span>
              </span>
              <span
                className={`text-lg transition-transform ${
                  isActive ? "translate-x-0 text-accent-soft" : "-translate-x-1 text-slate-300 group-hover:translate-x-0"
                }`}
              >
                →
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        key={active}
        className="animate-fade-up overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
      >
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
        </div>
        <div className="p-8">
          <span className="font-display text-sm font-bold text-accent">
            0{active + 1}
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold text-brand">{s.title}</h3>
          <p className="mt-3 leading-relaxed text-slate-600">{s.blurb}</p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
            What you get
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {s.details.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-white">
                  ✓
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Book a free call about this
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
