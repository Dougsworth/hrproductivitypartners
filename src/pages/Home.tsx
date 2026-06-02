import { Link } from "react-router-dom";
import { site, stats, process } from "@/data/site";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import Icon from "@/components/Icon";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { PeopleWord } from "@/components/PeopleWord";

export const Home = () => {
  return (
    <>
      {/* ============ HERO ============ */}
      {/* MOBILE: whole banner uncropped, copy on brand panel below */}
      <section className="bg-brand-900 pt-[72px] sm:hidden">
        <div className="relative">
          <img
            src={site.heroImage}
            alt="The HRPPI team beneath the company logo in their Kingston office"
            className="w-full object-contain"
          />
          {/* blend the photo's bottom edge into the brand panel */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-900 to-transparent"
            aria-hidden
          />
        </div>
        <div className="px-6 pb-12 pt-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-soft">
              HRPPI · {site.location}
            </span>
          </div>
          <h1 className="mt-4 animate-fade-up font-display text-3xl font-bold leading-[1.12] text-white">
            We make your <PeopleWord /> our business.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-white/70">
            HR strategy, talent and change — built around your business.
          </p>
          <Link
            to="/services"
            className="group mt-6 inline-flex animate-fade-up items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Our services
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* DESKTOP/TABLET: full-bleed overlay hero */}
      <section className="relative isolate hidden h-[78vh] max-h-[760px] min-h-[440px] items-end overflow-hidden bg-brand-900 sm:flex">
        <img
          src={site.heroImage}
          alt="The HRPPI team beneath the company logo in their Kingston office"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[30%_top]"
        />
        {/* gradient along the bottom so copy reads, wall logo/text up top stay clear */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-brand-900 via-brand-900/65 to-transparent"
          aria-hidden
        />
        <div className="w-full">
          <div className="mx-auto w-full max-w-[1280px] px-6 pb-2 lg:pb-3">
            <div className="max-w-xl">
              <h1 className="font-display text-2xl font-bold leading-[1.15] text-white drop-shadow-lg lg:text-3xl">
                We make your <PeopleWord /> our business.
              </h1>
              <div
                className="mt-4 flex animate-fade-up flex-wrap items-center gap-3"
                style={{ animationDelay: "1.6s" }}
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

      {/* ============ STATS — proof points ============ */}
      <section className="bg-white pb-12 pt-10 sm:pb-16 sm:pt-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Why HRPPI
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand sm:text-5xl">
              The partner your people deserve
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Seasoned expertise and a hands-on, tailored approach — the numbers
              behind the partnership.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 100}
                className="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-8 text-center transition-shadow hover:shadow-md"
              >
                <p className="font-display text-4xl font-bold text-brand sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRO — two-column, image shown whole ============ */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal as="left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              How strong is your workforce?
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] text-brand sm:text-5xl">
              Does your HR strategy build real business value?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Does your human resource strategy build a workforce that is a
              significant business value? Does it understand your business goals
              and seamlessly contribute to a healthy bottom line?
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              At{" "}
              <strong className="font-semibold text-brand">
                Human Resource Productivity Partners, International
              </strong>
              , our job is to ensure that throughout your company, your human
              resource fits the needs, goals, and aims of your business.
            </p>
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/15 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Book a free intro call
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>

          <Reveal as="right" delay={120}>
            {/* image shown whole in a rounded card — never crops anyone */}
            <img
              src={site.introImage}
              alt="HR professionals collaborating in a modern boardroom"
              className="w-full rounded-3xl object-cover shadow-xl ring-1 ring-slate-200/60"
            />
            {/* why-us value points (not a service teaser — services are right below) */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: "strategy",
                  title: "Built around you",
                  body: "No templates — everything fits your goals.",
                },
                {
                  icon: "talent",
                  title: "A real partner",
                  body: "We embed with your team, not hand over a binder.",
                },
                {
                  icon: "performance",
                  title: "Made to last",
                  body: "We make sure the change actually sticks.",
                },
              ].map((f, i) => (
                <div key={f.title} className="group">
                  <div
                    className="grid h-11 w-11 animate-float-sm place-items-center rounded-xl bg-brand-50 text-brand transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    <Icon name={f.icon} className="h-6 w-6" />
                  </div>
                  <p className="mt-3 font-display font-bold text-brand">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES — tabbed showcase ============ */}
      <section id="services" className="scroll-mt-24 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              What we do
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand sm:text-4xl">
              What we can do for you
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Pick a service to see exactly what it includes and what you get.
            </p>
          </Reveal>

          <ServicesShowcase />
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
      <section id="about" className="relative scroll-mt-24 overflow-hidden bg-brand py-16 sm:py-28">
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
