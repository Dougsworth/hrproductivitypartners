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

/**
 * The banner. Full-bleed and stacked under the copy on a phone, beside it
 * from lg up; `photo-fade` dissolves whichever edge meets the paper.
 */
const HeroPhoto = ({ className = "" }: { className?: string }) => (
  <div className={`photo-fade relative overflow-hidden ${className}`}>
    <img
      src={site.heroImage}
      alt="HR consultants working with a client team in a bright Kingston office"
      className="h-full w-full object-cover object-center"
    />
  </div>
);

export const Home = () => {
  return (
    <div className="bg-sand">
      {/* ==================== HERO ==================== */}
      <section className="relative bg-sand pt-[var(--header-h)]">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          {/* copy */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:py-16 lg:pl-[max(1.5rem,calc((100vw-82.5rem)/2+2.5rem))] lg:pr-16">
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

              {/* Full-width buttons on a phone: one thumb, one target,
                  no reaching across for a 7rem-wide pill. */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  data-cta
                  to={hero.primaryCta.to}
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ember px-7 text-fluid-sm font-bold text-ink shadow-lg shadow-ember/25 transition-all active:scale-[0.98] hover:-translate-y-0.5 hover:bg-ember-700 hover:text-white sm:min-h-[44px] sm:justify-start sm:py-3.5"
                >
                  {hero.primaryCta.label}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-deep/20 px-7 text-fluid-sm font-semibold text-deep transition-all active:scale-[0.98] hover:-translate-y-0.5 hover:border-deep/40 hover:bg-white sm:min-h-[44px] sm:justify-start sm:py-3.5"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>

            {/* On a phone the banner belongs in the middle of the hero, not
                stranded at the end of it: bled to both screen edges, with
                its top dissolving out of the copy above. */}
            <HeroPhoto className="-mx-6 mt-10 aspect-[4/3] sm:-mx-10 sm:mt-12 lg:hidden" />

            <Reveal delay={80}>
              {/* stat strip — three even columns divided by hairlines on a
                  phone, where the desktop's wide flex row would wrap 2 + 1 */}
              <dl className="mt-10 grid grid-cols-3 divide-x divide-deep/10 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-6 sm:divide-x-0">
                {heroStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-2 px-2 text-center first:pl-0 last:pr-0 sm:flex-row sm:items-center sm:gap-3 sm:px-0 sm:text-left"
                  >
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

          <HeroPhoto className="hidden lg:block lg:min-h-[620px]" />
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
          <Reveal as="left" className="p-6 sm:p-12">
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

        {/* right: three pillars on deep teal. Three centred blocks stacked
            down a phone is most of a screen of scrolling for nine words, so
            on mobile they read as a divided list instead — icon, then the
            line it belongs to. */}
        <div className="bg-deep px-6 py-10 sm:px-12 sm:py-16">
          <div className="grid divide-y divide-white/15 sm:grid-cols-3 sm:divide-y-0">
            {approach.points.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className={`flex items-start gap-4 py-5 first:pt-0 last:pb-0 sm:block sm:px-6 sm:py-0 sm:text-center ${
                  i > 0 ? "sm:border-l sm:border-white/15" : ""
                }`}
              >
                <img
                  src={p.art}
                  alt=""
                  aria-hidden
                  className="h-10 w-10 shrink-0 [filter:brightness(0)_invert(1)] sm:mx-auto sm:h-12 sm:w-12"
                />
                <div className="min-w-0">
                  <p className="font-display text-fluid-h3 font-bold text-white sm:mt-4">
                    {p.title}
                  </p>
                  <p className="mt-1 text-fluid-sm text-white/70 sm:mt-2">{p.body}</p>
                </div>
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
            <figure className="p-6 sm:p-10">
              <span className="block h-px w-8 bg-ember" aria-hidden />
              <blockquote className="mt-5 max-w-[15rem] font-display text-2xl font-bold leading-[1.25] text-white">
                &ldquo;{results.quote}&rdquo;
              </blockquote>
              <span className="mt-5 block h-px w-8 bg-ember" aria-hidden />
            </figure>
          </Reveal>

          {/* stats */}
          <Reveal delay={80} className="bg-deep px-6 py-10 sm:px-12 sm:py-16">
            <Eyebrow label={results.eyebrow} tone="light" />
            <h2 className="mt-4 font-display text-fluid-h2 font-bold text-white">
              Stronger people.
              <br />
              Stronger businesses.
            </h2>
            <dl className="mt-8 grid grid-cols-3 gap-0 sm:mt-10">
              {results.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-2.5 first:pl-0 sm:px-3 ${i > 0 ? "border-l border-white/15" : ""}`}
                >
                  <dt className="font-display text-[2rem] font-bold leading-none text-white sm:text-5xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2.5 text-fluid-sm leading-snug text-white/70 sm:mt-3">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Meeting photo. Held back until lg: on a phone this band already
              opens on a full-width photograph, and a second one directly
              under it is a screen of scrolling that says nothing new. */}
          <Reveal
            as="right"
            delay={160}
            className="relative hidden lg:block lg:min-h-[380px]"
          >
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
                data-cta
                to="/contacts"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-deep px-7 py-3.5 text-fluid-sm font-semibold text-white shadow-lg shadow-deep/20 transition-all hover:-translate-y-0.5 hover:bg-deep-800"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>

            <Reveal as="right" delay={120}>
              <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-deep/5 sm:p-9">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  {/* Fixed, modest width: the source is 521px wide, so
                      rendering at ~176-192px gives ~3x pixel density and
                      reads sharp. Full-card width was near 1:1 and soft. */}
                  <img
                    src={director.photo}
                    alt={director.photoAlt}
                    width={521}
                    height={651}
                    loading="lazy"
                    decoding="async"
                    className="w-44 shrink-0 self-center rounded-2xl object-cover object-top shadow-sm ring-1 ring-deep/5 sm:w-40 sm:self-start lg:w-48"
                  />
                  <div className="min-w-0 flex-1">
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
                  </div>
                </div>
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

            {/* On a phone these run sideways under the thumb rather than
                down the page, with the third card left peeking past the
                right edge so the swipe needs no caption. The whole card is
                the link — a 90px "Read more" is not a tap target. */}
            <div className="rail -mx-6 flex snap-x snap-mandatory scroll-pl-6 gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-x-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
              {insights.posts.map((post, i) => (
                <Reveal
                  key={post.title}
                  delay={i * 80}
                  className="w-[78%] shrink-0 snap-start sm:w-auto"
                >
                  <Link
                    to={post.to}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-deep/5 transition-all active:scale-[0.98] hover:-translate-y-1 hover:shadow-xl hover:shadow-deep/10"
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
                      <span className="mt-auto inline-flex min-h-[44px] items-center pt-5 text-fluid-sm font-semibold text-deep">
                        Read more{" "}
                        <span className="text-ember-ink transition-transform group-hover:translate-x-1">
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
              data-cta
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
