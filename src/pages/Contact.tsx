import { useState } from "react";
import { site, services, director } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ShellHero } from "@/components/ShellHero";
import { ScriptLine } from "@/components/ScriptLine";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    interest: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website enquiry${form.interest ? ` — ${form.interest}` : ""} from ${
        form.name || "a visitor"
      }`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.organisation ? `Organisation: ${form.organisation}` : "",
        form.interest ? `Interested in: ${form.interest}` : "",
        "",
        form.message,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const label = "mb-1.5 block text-fluid-sm font-semibold text-deep";
  // text-fluid-base bottoms out at 16px, which is what stops iOS zooming
  // the whole page in the moment a field takes focus. Don't drop it.
  const field =
    "w-full appearance-none rounded-xl border border-deep/15 bg-white px-4 py-3.5 text-fluid-base text-ink outline-none transition focus:border-deep/40 focus:ring-4 focus:ring-deep/10 sm:py-3";

  const details = [
    { label: "Director", value: director.name, note: director.role },
    { label: "Location", value: site.location, note: "Serving the Caribbean" },
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      note: "We reply within one business day",
    },
  ];

  return (
    <div className="bg-sand">
      <ShellHero
        eyebrow="Get in touch"
        titleLead="Let's start the"
        titleAccent="conversation"
        blurb="Tell us what you're trying to move — a team, a system, a culture — and we'll tell you honestly whether we're the right help."
        image="/assets/1af8af7a40d7bb692ce8c1235b93a211.jpg"
        imageAlt="Two people shaking hands across a meeting table"
      >
        <ScriptLine className="mb-4 mt-10" delay={800}>
          We make your people our business.
        </ScriptLine>
      </ShellHero>

      <section className="py-section">
        <div className="mx-auto grid max-w-shell gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">
          {/* Who you're reaching */}
          <Reveal as="left">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-ember" aria-hidden />
              <span className="text-eyebrow font-semibold uppercase text-ink/75">
                Who you're reaching
              </span>
            </div>
            <h2 className="mt-5 font-display text-fluid-h2 font-bold text-deep">
              A direct line, not a queue.
            </h2>
            <p className="mt-5 max-w-prose text-fluid-base text-ink/75">
              {site.name} is a registered human resource consulting practice
              operating out of {site.location}. Every enquiry is read by the
              person who would do the work.
            </p>

            <dl className="mt-10 space-y-3">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-deep/5"
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-deep font-display text-lg font-bold text-white"
                    aria-hidden
                  >
                    {item.label[0]}
                  </span>
                  <div className="min-w-0">
                    <dt className="text-eyebrow font-semibold uppercase text-ink/70">
                      {item.label}
                    </dt>
                    <dd className="mt-1 break-words font-medium text-deep">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="underline decoration-ember/40 underline-offset-4 transition-colors hover:decoration-ember"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                    <dd className="mt-0.5 text-fluid-sm text-ink/70">{item.note}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Form */}
          <Reveal as="right">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-deep/5 sm:p-10"
            >
              <p className="font-display text-fluid-h3 font-bold text-deep">
                Send us a note
              </p>
              <p className="mt-2 text-fluid-sm text-ink/75">
                Four fields. No forms behind the form.
              </p>

              <div className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className={label}>
                      Name
                    </label>
                    {/* autoComplete and enterKeyHint are what turn a phone
                        keyboard from a wall of letters into something that
                        offers the answer and says "next" on the go key. */}
                    <input
                      id="c-name"
                      type="text"
                      required
                      autoComplete="name"
                      enterKeyHint="next"
                      value={form.name}
                      onChange={update("name")}
                      className={field}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-org" className={label}>
                      Organisation
                    </label>
                    <input
                      id="c-org"
                      type="text"
                      autoComplete="organization"
                      enterKeyHint="next"
                      value={form.organisation}
                      onChange={update("organisation")}
                      className={field}
                      placeholder="Where you work"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-email" className={label}>
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    enterKeyHint="next"
                    value={form.email}
                    onChange={update("email")}
                    className={field}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="c-interest" className={label}>
                    What's this about?
                  </label>
                  {/* appearance-none is what keeps this the same height and
                      shape as the inputs on iOS, so the chevron is ours. */}
                  <div className="relative">
                    <select
                      id="c-interest"
                      value={form.interest}
                      onChange={update("interest")}
                      className={`${field} cursor-pointer pr-11`}
                    >
                      <option value="">Not sure yet</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50"
                    >
                      ▾
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className={label}>
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    className={field}
                    placeholder="What are you trying to change?"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-ember px-6 text-fluid-sm font-bold text-ink shadow-lg shadow-ember/25 transition-all active:scale-[0.98] hover:-translate-y-0.5 hover:bg-ember-700 hover:text-white sm:min-h-[44px] sm:py-3.5"
                >
                  Send message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <p className="text-center text-fluid-sm text-ink/70">
                  This opens your email app with the message ready to send.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
