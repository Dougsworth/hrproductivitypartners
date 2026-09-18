import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ShellHero } from "@/components/ShellHero";
import { ScriptLine } from "@/components/ScriptLine";

export const Insights = () => {
  const [lead, ...rest] = articles;

  return (
    <div className="bg-sand">
      <ShellHero
        eyebrow="Insights"
        titleLead="Ideas for a stronger"
        titleAccent="tomorrow"
        blurb="Practical thinking on people, work and the future of HR in the Caribbean — written by us, not reposted from somewhere else."
        image={site.introImage}
        imageAlt="HR practitioners in discussion around a table"
      >
        <ScriptLine className="mb-4 mt-10" delay={800}>
          Read it, then use it Monday morning.
        </ScriptLine>
      </ShellHero>

      <div className="mx-auto max-w-shell px-6 pb-section lg:px-10">
        {/* Lead story gets the room it deserves; the rest run as a pair
            beneath it, so the page has a hierarchy instead of a grid. */}
        {lead ? (
          <Reveal>
            <Link
              to={`/insights/${lead.slug}`}
              className="group grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-deep/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-deep/10 lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="relative min-h-[240px] overflow-hidden lg:min-h-[340px]">
                <img
                  src={lead.image}
                  alt={lead.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-sand px-3 py-1.5 text-eyebrow font-semibold uppercase text-deep ring-1 ring-deep/10">
                  Latest
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex items-center gap-2">
                  <time dateTime={lead.iso} className="text-eyebrow font-semibold uppercase text-ink/70">
                    {lead.date}
                  </time>
                  <span className="text-ink/40" aria-hidden>·</span>
                  <span className="text-eyebrow font-semibold uppercase text-ink/70">
                    {lead.readingTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-fluid-h2 font-bold text-deep">
                  {lead.title}
                </h2>
                <p className="mt-4 max-w-prose text-fluid-base text-ink/75">
                  {lead.standfirst}
                </p>
                <span className="mt-7 inline-flex min-h-[44px] items-center text-fluid-sm font-semibold text-deep">
                  Read the piece{" "}
                  <span className="ml-1 text-ember-ink transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={i * 90} className="h-full">
              <Link
                to={`/insights/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-deep/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-deep/10"
              >
                <div className="overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
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

        {/* Keeps the conversion path open without sending anyone to a
            different-looking page. */}
        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-deep px-7 py-9 sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="font-display text-fluid-h3 font-bold text-white">
                Want this thinking applied to your organisation?
              </p>
              <p className="mt-2 text-fluid-sm text-white/70">
                One conversation is usually enough to know whether we can help.
              </p>
            </div>
            <Link
              to="/contacts"
              className="group inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-fluid-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-ember-700 hover:text-white"
            >
              Book a conversation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
