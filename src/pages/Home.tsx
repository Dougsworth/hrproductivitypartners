import { Link } from "react-router-dom";
import {
  site,
  hero,
  heroStats,
  approach,
  results,
  insights,
  closingCta,
  director,
} from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { AccentWord } from "@/components/AccentWord";
import { ScriptLine } from "@/components/ScriptLine";
import { ServicePicker } from "@/components/ServicePicker";
import Icon from "@/components/Icon";

/** Small ember rule + uppercase label used above every section heading. */
const Eyebrow = ({ label, tone = "dark" }: { label: string; tone?: "dark" | "light" }) => (
  <div className="flex items-center gap-3">
    <span className="h-px w-8 shrink-0 bg-ember" aria-hidden />
    <span
      className={`text-eyebrow font-semibold uppercase ${
        tone === "light" ? "text-white/70" : "text-ink/75"
      }`}
    >
      {label}
    </span>
  </div>
);

export const Home = () => {
  return (
    <div className="bg-sand">
      {/* ==================== HERO ==================== */}
      <section className="relative bg-sand pt-[72px]">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          {/* copy */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:py-16 lg:pl-[max(1.5rem,calc((100vw-82.5rem)/2+2.5rem))] lg:pr-16">
            <Reveal>
              <Eyebrow label={hero.eyebrow} />
              <h1 className="mt-5 font-display text-fluid-h1 font-bold tracking-tight text-deep">
                {hero.titleLead}{" "}
                <AccentWord className="text-ember-ink" delay={550}>
                  {hero.titleAccent}
                </AccentWord>
                .
              </h1>
              <p className="mt-6 max-w-prose text-fluid-lead text-ink/75">
                {hero.subtitle}
              </p>
              {/* A visitor should be able to name what we sell within one
                  screen. The headline sets the tone; this line does the work. */}
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {hero.offers.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-fluid-sm text-ink/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to={hero.primaryCta.to}
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-fluid-sm font-bold text-ink shadow-lg shadow-ember/25 transition-all hover:-translate-y-0.5 hover:bg-ember-700 hover:text-white"
                >
                  {hero.primaryCta.label}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-full border border-deep/20 px-7 py-3.5 text-fluid-sm font-semibold text-deep transition-all hover:-translate-y-0.5 hover:border-deep/40 hover:bg-white"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>

              {/* stat strip */}
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
                {heroStats.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <Icon name={s.icon} className="h-6 w-6 shrink-0 text-deep" />
                    <div className="leading-tight">
                      <dt className="text-fluid-sm font-semibold text-deep">{s.value}</dt>
                      <dd className="text-fluid-sm text-ink/75">{s.label}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <ScriptLine className="mb-4 mt-12" delay={900}>
                {hero.script}
              </ScriptLine>
            </Reveal>
          </div>

          {/* photo — left edge dissolves into the cream column so the two
              halves read as one surface rather than two panels butted together */}
          <div className="edge-fade-l relative min-h-[300px] lg:min-h-[620px]">
            <img
              src={site.heroImage}
              alt="HR consultants working with a client team in a bright Kingston office"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ==================== APPROACH BAND ==================== */}
      <section className="grid lg:grid-cols-2">
        {/* left: coastline + headline */}
        <div className="relative isolate flex min-h-[260px] items-end overflow-hidden lg:min-h-[340px]">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
            alt="Caribbean coastline with hills meeting the sea"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-900/85 via-deep-900/45 to-deep-900/10"
            aria-hidden
          />
          <Reveal as="left" className="p-8 sm:p-12">
            <Eyebrow label={approach.eyebrow} tone="light" />
            <h2 className="mt-4 font-display text-fluid-h2 font-bold text-white">
              {approach.titleLead}
              <br />
              <AccentWord className="text-ember" delay={300}>
                {approach.titleAccent}
              </AccentWord>
            </h2>
          </Reveal>
        </div>

        {/* right: three pillars on deep teal */}
        <div className="bg-deep px-8 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-0">
            {approach.points.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className={`text-center sm:px-6 ${
                  i > 0 ? "sm:border-l sm:border-white/15" : ""
                }`}
              >
                <img
                  src={p.art}
                  alt=""
                  aria-hidden
                  className="mx-auto h-12 w-12 [filter:brightness(0)_invert(1)]"
                />
                <p className="mt-4 font-display text-fluid-h3 font-bold text-white">
                  {p.title}
                </p>
                <p className="mt-2 text-fluid-sm text-white/70">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="scroll-mt-24 bg-sand py-section">
        <div className="mx-auto max-w-shell px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12">
            <Reveal className="min-w-0">
              <Eyebrow label="Our services" />
              <h2 className="mt-4 font-display text-fluid-h2 font-bold text-deep">
                What can we help you solve?
              </h2>
              <p className="mt-5 max-w-xs text-fluid-sm text-ink/75">
                Five ways we work with Caribbean organizations. Pick one to see
                exactly what it includes.
              </p>
            </Reveal>

            <ServicePicker />
          </div>
        </div>
      </section>

      {/* ==================== RESULTS ==================== */}
      {results.show && (
        <section className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* pull quote over portrait */}
          <Reveal as="left" className="relative isolate flex min-h-[280px] items-center overflow-hidden lg:min-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              alt="An HR leader smiling during a client conversation"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-deep-900/70" aria-hidden />
            <figure className="p-8 sm:p-10">
              <span className="block h-px w-8 bg-ember" aria-hidden />
              <blockquote className="mt-5 max-w-[15rem] font-display text-2xl font-bold leading-[1.25] text-white">
                &ldquo;{results.quote}&rdquo;
              </blockquote>
              <span className="mt-5 block h-px w-8 bg-ember" aria-hidden />
            </figure>
          </Reveal>

          {/* stats */}
          <Reveal delay={80} className="bg-deep px-8 py-12 sm:px-12 sm:py-16">
            <Eyebrow label={results.eyebrow} tone="light" />
            <h2 className="mt-4 font-display text-fluid-h2 font-bold text-white">
              Stronger people.
              <br />
              Stronger businesses.
            </h2>
            <dl className="mt-10 grid grid-cols-3 gap-0">
              {results.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-3 first:pl-0 ${i > 0 ? "border-l border-white/15" : ""}`}
                >
                  <dt className="font-display text-4xl font-bold leading-none text-white sm:text-5xl">
                    {s.value}
                  </dt>
                  <dd className="mt-3 text-fluid-sm leading-snug text-white/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* meeting photo */}
          <Reveal as="right" delay={160} className="relative min-h-[240px] lg:min-h-[380px]">
            <img
              src={site.introImage}
              alt="A team in discussion during a workplace strategy session"
              className="h-full w-full object-cover object-center"
            />
          </Reveal>
        </section>
      )}

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="scroll-mt-24 bg-sand py-section">
        <div className="mx-auto max-w-shell px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
            <Reveal as="left">
              <Eyebrow label="About us" />
              <h2 className="mt-4 font-display text-fluid-h2 font-bold text-deep">
                Strengthening your people capacity is{" "}
                <AccentWord className="text-ember-ink" delay={350}>
                  our business
                </AccentWord>
                .
              </h2>
              <p className="mt-6 max-w-prose text-fluid-base text-ink/75">
                {site.name} is a registered human resource consulting service
                operating out of {site.location}. We partner with our clients to
                build their human resource and improve business value.
              </p>
              <Link
                to="/contacts"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-deep px-7 py-3.5 text-fluid-sm font-semibold text-white shadow-lg shadow-deep/20 transition-all hover:-translate-y-0.5 hover:bg-deep-800"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>

            <Reveal as="right" delay={120}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-deep/5">
                <div className="relative">
                  <img
                    src={director.photo}
                    alt={director.photoAlt}
                    className="aspect-[4/5] w-full object-cover object-top sm:aspect-[5/4]"
                  />
                </div>
                <div className="p-7 sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-eyebrow font-semibold uppercase text-ink/70">
                    Led by
                  </span>
                  <span className="rounded-full bg-ember-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ember-ink">
                    {director.role}
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl font-bold text-deep">
                  {director.name}
                </p>
                <p className="mt-3 text-fluid-sm text-ink/75">
                  {director.summary}
                </p>
                <ul className="mt-6 space-y-3 border-t border-deep/10 pt-6">
                  {director.credentials.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-fluid-sm leading-snug text-ink/75"
                    >
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                        aria-hidden
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== INSIGHTS ==================== */}
      <section className="bg-sand pb-section pt-6">
        <div className="mx-auto max-w-shell px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
            <Reveal>
              <Eyebrow label={insights.eyebrow} />
              <h2 className="mt-4 font-display text-fluid-h2 font-bold text-deep">
                {insights.titleLead}
                <br />
                {insights.titleRest}
              </h2>
              <p className="mt-5 max-w-xs text-fluid-sm text-ink/75">
                {insights.body}
              </p>
              <Link
                to="/insights"
                className="group mt-6 inline-flex min-h-[44px] items-center gap-2 text-fluid-sm font-semibold text-deep"
              >
                View all insights
                <span className="text-ember-ink transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {insights.posts.map((post, i) => (
                <Reveal
                  key={post.title}
                  delay={i * 80}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-deep/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-deep/10"
                >
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-ink/70">
                      {post.date}
                    </p>
                    <h3 className="mt-2 font-display text-fluid-h3 font-bold text-deep">
                      {post.title}
                    </h3>
                    <Link
                      to={post.to}
                      className="mt-auto inline-flex min-h-[44px] items-center pt-5 text-fluid-sm font-semibold text-deep"
                    >
                      Read more{" "}
                      <span className="text-ember-ink transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLOSING CTA ==================== */}
      <section className="relative isolate overflow-hidden">
        <img
          src={site.ctaImage}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-deep/80" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep/85 via-deep/60 to-ember/40" aria-hidden />
        <div className="mx-auto flex max-w-shell flex-col gap-8 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <Reveal as="left" className="max-w-xl">
            <Eyebrow label={closingCta.eyebrow} tone="light" />
            <h2 className="mt-4 font-display text-fluid-h2 font-bold text-white">
              {closingCta.title}
            </h2>
          </Reveal>
          <Reveal as="right" delay={120} className="flex flex-col items-start gap-6 lg:items-end">
            <Link
              to={closingCta.cta.to}
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ember px-8 py-4 text-fluid-sm font-bold text-ink shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white hover:text-deep"
            >
              {closingCta.cta.label}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <ScriptLine tone="light" className="mb-3" delay={300}>
              {closingCta.script}
            </ScriptLine>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
