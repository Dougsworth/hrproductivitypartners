import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Reveal } from "@/components/Reveal";

export const Insights = () => (
  <div className="bg-sand">
    <div className="mx-auto max-w-shell px-6 pb-section pt-[calc(72px+clamp(3rem,2rem+4vw,5rem))] lg:px-10">
      <Reveal className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 shrink-0 bg-ember" aria-hidden />
          <span className="text-eyebrow font-semibold uppercase text-ink/75">Insights</span>
        </div>
        <h1 className="mt-5 font-display text-fluid-h1 font-bold text-deep">
          Ideas for a stronger tomorrow.
        </h1>
        <p className="mt-6 max-w-prose text-fluid-lead text-ink/75">
          Practical insights, trends and perspectives on people, work and the
          future of HR in the Caribbean.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 80} className="h-full">
            <Link
              to={`/insights/${a.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-deep/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-deep/10"
            >
              <img
                src={a.image}
                alt={a.imageAlt}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <time dateTime={a.iso} className="text-eyebrow font-semibold uppercase text-ink/70">
                    {a.date}
                  </time>
                  <span className="text-ink/40" aria-hidden>·</span>
                  <span className="text-eyebrow font-semibold uppercase text-ink/70">
                    {a.readingTime}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-fluid-h3 font-bold text-deep">
                  {a.title}
                </h2>
                <p className="mt-3 text-fluid-sm text-ink/75">{a.standfirst}</p>
                <span className="mt-auto inline-flex min-h-[44px] items-center pt-5 text-fluid-sm font-semibold text-deep">
                  Read more{" "}
                  <span className="ml-1 text-ember-ink transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);
