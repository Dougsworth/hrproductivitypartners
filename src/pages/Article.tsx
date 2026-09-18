import { Link, useParams, Navigate } from "react-router-dom";
import { getArticle, articles } from "@/data/articles";
import { Reveal } from "@/components/Reveal";

export const Article = () => {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) return <Navigate to="/resources" replace />;

  const others = articles.filter((a) => a.slug !== article.slug);

  return (
    <article className="bg-sand">
      {/* ---------- header ---------- */}
      <header className="mx-auto max-w-shell px-6 pb-10 pt-[calc(72px+clamp(3rem,2rem+4vw,5rem))] lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/resources"
            className="group inline-flex min-h-[44px] items-center gap-2 text-fluid-sm font-semibold text-ink/75 transition-colors hover:text-deep"
          >
            <span className="text-ember-ink transition-transform group-hover:-translate-x-1">←</span>
            All insights
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-ember" aria-hidden />
            <time
              dateTime={article.iso}
              className="text-eyebrow font-semibold uppercase text-ink/75"
            >
              {article.date}
            </time>
            <span className="text-ink/40" aria-hidden>·</span>
            <span className="text-eyebrow font-semibold uppercase text-ink/75">
              {article.readingTime}
            </span>
          </div>

          <h1 className="mt-5 font-display text-fluid-h1 font-bold text-deep">
            {article.title}
          </h1>
          <p className="mt-6 max-w-prose text-fluid-lead text-ink/75">
            {article.standfirst}
          </p>
        </div>
      </header>

      {/* ---------- hero image ---------- */}
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="aspect-[16/7] w-full object-cover"
          />
        </div>
      </div>

      {/* ---------- body ---------- */}
      <div className="mx-auto max-w-shell px-6 pb-section pt-12 lg:px-10">
        <div className="mx-auto max-w-3xl">
          {article.body.map((block, i) => (
            <Reveal key={i} delay={Math.min(i, 4) * 60} className="mt-10 first:mt-0">
              {block.heading && (
                <h2 className="font-display text-fluid-h3 font-bold text-deep">
                  {block.heading}
                </h2>
              )}
              {block.paras?.map((p) => (
                <p key={p} className="mt-4 text-fluid-base text-ink/80">
                  {p}
                </p>
              ))}
              {block.list && (
                <ul className="mt-5 space-y-3">
                  {block.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-fluid-base text-ink/80">
                      <span
                        className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          {article.sources && (
            <div className="mt-14 border-t border-ink/10 pt-8">
              <h2 className="text-eyebrow font-semibold uppercase text-ink/75">Sources</h2>
              <ul className="mt-4 space-y-2">
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center text-fluid-sm font-medium text-ember-ink underline decoration-ember/40 underline-offset-4 transition-colors hover:decoration-ember"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-14 rounded-3xl bg-deep p-8 sm:p-10">
            <p className="font-display text-fluid-h3 font-bold text-white">
              Want this working in your organization?
            </p>
            <p className="mt-3 max-w-prose text-fluid-base text-white/75">
              We help Caribbean employers turn ideas like these into systems their
              managers actually use.
            </p>
            <Link
              to="/contacts"
              className="group mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-fluid-sm font-bold text-ink shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:text-deep"
            >
              Book a consultation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- keep reading ---------- */}
      <div className="border-t border-ink/10 bg-sand-200/40">
        <div className="mx-auto max-w-shell px-6 py-section lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-eyebrow font-semibold uppercase text-ink/75">Keep reading</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {others.map((a, i) => (
                <Reveal key={a.slug} delay={i * 80}>
                  <Link
                    to={`/insights/${a.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-deep/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-deep/10"
                  >
                    <img
                      src={a.image}
                      alt={a.imageAlt}
                      className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <time dateTime={a.iso} className="text-eyebrow font-semibold uppercase text-ink/70">
                        {a.date}
                      </time>
                      <h3 className="mt-2 font-display text-fluid-h3 font-bold text-deep">
                        {a.title}
                      </h3>
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
      </div>
    </article>
  );
};
