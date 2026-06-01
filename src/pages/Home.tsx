import { Link } from "react-router-dom";
import { services, site, stats, process, quote } from "@/data/site";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";

export const Home = () => {
  return (
    <>
      {/* ============ HERO — full-bleed banner fit to viewport, copy bottom-left ============ */}
      <section className="relative isolate flex h-[78vh] max-h-[760px] min-h-[440px] items-end overflow-hidden bg-brand-900">
        {/* Banner fills the hero; anchored to keep the HRPPI logo/people in frame on every size */}
        <img
          src={site.heroImage}
          alt="The HRPPI team beneath the company logo in their Kingston office"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[35%_top] sm:object-[20%_top]"
        />
        {/* Bottom scrim so the copy reads, rest of image stays clear */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-brand-900/95 via-brand-900/40 to-transparent"
          aria-hidden
        />

        {/* Copy block in bottom-left */}
        <div className="w-full">
          <div className="mx-auto w-full max-w-[1280px] px-6 pb-6 sm:pb-4 lg:pb-5">
            <div className="max-w-2xl">
              <h1 className="animate-fade-up font-display text-2xl font-bold leading-[1.15] text-white drop-shadow-lg sm:text-2xl lg:text-3xl">
                We make your{" "}
                <span className="word-people italic">
                  <span className="text-white">people</span>
                </span>{" "}
                our business.
              </h1>
              <div
                className="mt-5 flex animate-fade-up flex-wrap items-center gap-3 sm:mt-6"
                style={{ animationDelay: "0.2s" }}
              >
                <Link
                  to="/services"
                  className="group rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Our services
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* scrolling capability marquee */}
      <Marquee />

      {/* ============ STATS + heading ============ */}
      <section className="bg-white py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Why HRPPI
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand sm:text-5xl">
            The partner your people deserve
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[1280px] grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 px-px sm:mt-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="bg-white px-6 py-10 text-center">
              <p className="font-display text-4xl font-bold text-brand sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 sm:gap-16 lg:grid-cols-2">
          <Reveal as="left" className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-4xl bg-brand-50" aria-hidden />
            <img
              src={site.introImage}
              alt="HR consultant meeting with a client"
              className="relative w-full rounded-4xl object-cover shadow-lg"
            />
          </Reveal>
          <Reveal as="right" delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              How strong is your workforce?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] text-brand sm:text-5xl">
              We turn your people into real business value.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Your workforce is your most valuable asset. We make sure it fits the
              goals of your business — and your bottom line.
            </p>
            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-2 text-lg font-semibold text-brand transition-colors hover:text-brand-700"
            >
              Explore our services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              What we do
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand sm:text-4xl">
              Services built around your people
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 120} className="h-full">
                <Link
                  to="/services"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                    <h3 className="mt-1 font-display text-xl font-bold text-brand">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.blurb}</p>
                    <span className="mt-4 text-sm font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="rounded-full border border-slate-300 px-8 py-3.5 font-semibold text-brand transition-colors hover:border-brand hover:bg-white"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* ============ QUOTE — professional touch ============ */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="font-display text-6xl leading-none text-brand-100 sm:text-7xl">“</span>
            <blockquote className="-mt-5 font-display text-xl font-medium leading-relaxed text-brand sm:-mt-6 sm:text-3xl">
              {quote.text}
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <cite className="text-sm font-semibold uppercase not-italic tracking-[0.2em] text-slate-500">
                {quote.attribution}
              </cite>
              <span className="h-px w-8 bg-accent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS — connected timeline ============ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                How we work
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-brand sm:text-4xl">
                Three steps, real momentum
              </h2>
            </div>
            <p className="max-w-sm text-slate-600">
              A clear path from understanding your business to embedding lasting
              change — no guesswork, no jargon.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 md:block" aria-hidden />
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 150} className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white font-display text-lg font-bold text-brand shadow-sm">
                    {p.step}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-brand sm:mt-6">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT / CTA — branded panel ============ */}
      <section className="relative overflow-hidden bg-brand py-16 sm:py-28">
        {/* concentric ring motif echoing the globe logo */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full border border-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/10"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-6 sm:gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal as="left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              About us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
              Strengthening your people capacity is our business
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/80">
              {site.name} (HRPPI) is a registered human resource consulting service
              operating out of {site.location}. Our mandate is to partner with our
              clients to build your human resource and improve your business value.
            </p>
          </Reveal>
          <Reveal as="right" delay={150} className="w-full lg:justify-self-end">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8">
              <p className="font-display text-2xl font-bold text-white">
                Ready to partner with us?
              </p>
              <p className="mt-2 text-white/70">
                Let's talk about the workforce you want to build.
              </p>
              <Link
                to="/contacts"
                className="mt-6 inline-block w-full rounded-full bg-white px-8 py-3.5 text-center font-semibold text-brand transition-all hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
