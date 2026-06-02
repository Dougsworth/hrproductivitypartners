import { useState } from "react";
import { resources, site } from "@/data/site";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ResourceGate } from "@/components/ResourceGate";

export const Resources = () => {
  const [gated, setGated] = useState<{ title: string; file: string } | null>(null);
  return (
    <>
      {gated && <ResourceGate resource={gated} onClose={() => setGated(null)} />}

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

      {/* ===== Resource index — editorial list ===== */}
      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="border-t border-slate-200">
            {resources.map((r, i) => {
              const open = () => {
                if (r.gated) {
                  setGated({ title: r.title, file: r.file });
                } else {
                  window.open(r.file, "_blank", "noopener,noreferrer");
                }
              };
              return (
                <Reveal key={r.title} delay={(i % 3) * 80}>
                  <button
                    onClick={open}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-slate-200 py-8 text-left transition-colors hover:bg-slate-50/70 sm:gap-8 sm:py-10"
                  >
                    {/* index number */}
                    <span className="font-display text-3xl font-bold text-slate-200 transition-colors group-hover:text-accent sm:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* title + meta */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <Icon name={r.icon} className="hidden h-5 w-5 text-brand sm:block" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                          {r.tag}
                        </span>
                        <span className="text-xs font-medium text-slate-400">
                          {r.meta}
                        </span>
                        {r.gated && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="5" y="11" width="14" height="9" rx="2" />
                              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                            </svg>
                            Email required
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-xl font-bold text-brand transition-colors group-hover:text-brand-700 sm:text-2xl">
                        {r.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                        {r.body}
                      </p>
                    </div>

                    {/* action affordance */}
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-slate-200 text-brand transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white sm:h-14 sm:w-14">
                      {r.gated ? (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="9" rx="2" />
                          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 3v12M7 11l5 4 5-4M5 21h14" />
                        </svg>
                      )}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
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
