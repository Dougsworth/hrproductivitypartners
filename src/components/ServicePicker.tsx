import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "@/data/site";
import { Reveal } from "@/components/Reveal";

/** Soft tints, in card order, matching the brand artwork. */
const TINTS = [
  "bg-tint-blue",
  "bg-tint-peach",
  "bg-tint-mint",
  "bg-tint-lilac",
  "bg-tint-cream",
  "bg-tint-sky",
];

/**
 * The tinted cards from the design, but each one opens the real detail:
 * the blurb and the "what you get" list a prospect actually needs to see
 * before they book a call. One-line cards look tidy and sell nothing.
 */
export const ServicePicker = () => {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="min-w-0">
      <div
        className="grid auto-rows-fr gap-3 grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 xl:gap-4"
        role="tablist"
        aria-label="Our services"
      >
        {services.map((item, i) => {
          const isActive = i === active;
          return (
            <Reveal key={item.slug} delay={i * 80} className="h-full">
              <button
                role="tab"
                aria-selected={isActive}
                aria-controls="service-detail"
                onClick={() => setActive(i)}
                className={`group flex h-full w-full flex-col rounded-2xl p-5 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-deep/10 ${
                  TINTS[i % TINTS.length]
                } ${isActive ? "ring-2 ring-ember ring-offset-2 ring-offset-sand" : ""}`}
              >
                <img src={item.art} alt="" aria-hidden className="h-8 w-8 shrink-0" />
                <span className="mt-4 font-display text-[0.95rem] font-bold leading-[1.25] text-deep xl:text-[0.9rem]">
                  {item.title}
                </span>
                <span className="mb-6 mt-2 block text-[0.8125rem] leading-[1.5] text-ink/75">
                  {item.blurb.split(",")[0]}.
                </span>
                <span
                  aria-hidden
                  className={`card-arrow mt-auto grid h-10 w-10 place-items-center self-start rounded-full text-deep transition-colors ${
                    isActive ? "bg-white shadow-md" : "bg-white/80 group-hover:bg-white group-hover:shadow-md"
                  }`}
                >
                  {isActive ? "✓" : "→"}
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* detail panel */}
      <div
        id="service-detail"
        key={active}
        role="tabpanel"
        className="mt-6 grid animate-fade-up overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-deep/5 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="relative min-h-[220px] lg:min-h-full">
          <img src={s.image} alt={s.imageAlt} className="h-full w-full object-cover" />
        </div>
        <div className="p-7 sm:p-10">
          <p className="text-eyebrow font-semibold uppercase text-ember-ink">
            0{active + 1} · What you get
          </p>
          <h3 className="mt-3 font-display text-fluid-h3 font-bold text-deep">{s.title}</h3>
          <p className="mt-3 max-w-prose text-fluid-base text-ink/75">{s.blurb}</p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {s.details.map((d) => (
              <li key={d} className="flex items-start gap-3 text-fluid-sm text-ink/80">
                <span
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contacts"
            className="group mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-deep px-7 py-3.5 text-fluid-sm font-semibold text-white shadow-lg shadow-deep/20 transition-all hover:-translate-y-0.5 hover:bg-deep-800"
          >
            Talk to us about this
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
