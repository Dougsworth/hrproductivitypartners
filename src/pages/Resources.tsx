import { Link } from "react-router-dom";
import { resources, site } from "@/data/site";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export const Resources = () => {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-brand-900 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div
          className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl"
          aria-hidden
        />
        <div
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent-soft" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-soft">
              Free resources
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
            Practical HR tools — free to use.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Templates, checklists and guides you can put to work today. Want one?
            Reach out and we'll send it over — no strings attached.
          </p>
        </div>
      </section>

      {/* ===== Resource grid ===== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 3) * 110}
              className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={r.icon} className="h-6 w-6" />
              </div>
              <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {r.tag}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-brand">
                {r.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {r.body}
              </p>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  "Resource request: " + r.title,
                )}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-700"
              >
                {r.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-brand py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/10"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Want help putting these to work?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Book a free intro call and we'll tailor the right approach to your team.
          </p>
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-brand transition-all hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Book a free call
          </a>
        </div>
      </section>
    </>
  );
};
