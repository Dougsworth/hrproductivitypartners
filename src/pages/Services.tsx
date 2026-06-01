import { Link } from "react-router-dom";
import { services } from "@/data/site";

export const Services = () => {
  return (
    <>
      {/* Page header (padded to clear fixed nav) */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white pb-16 pt-36">
        <div
          className="pointer-events-none absolute -right-32 -top-16 h-96 w-96 rounded-full bg-brand-50"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            What we do
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-brand sm:text-6xl">
            Services built around your people.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Practical HR solutions designed to grow your people and your business
            value — from systems and learning to culture and change.
          </p>
        </div>
      </section>

      {/* Alternating service rows */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] space-y-24 px-6">
          {services.map((s, i) => (
            <div key={s.title} className="grid items-center gap-12 lg:grid-cols-2">
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className={`absolute -top-4 h-full w-full rounded-4xl bg-brand-50 ${
                    i % 2 === 1 ? "-right-4" : "-left-4"
                  }`}
                  aria-hidden
                />
                <img
                  src={s.image}
                  alt={s.title}
                  className="relative w-full rounded-4xl object-cover shadow-xl"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-display text-5xl font-bold text-brand-100">
                  0{i + 1}
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-brand">
                  {s.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">{s.blurb}</p>
                <ul className="mt-6 space-y-3">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand">
                        ✓
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold text-brand">
            Ready to strengthen your workforce?
          </h2>
          <p className="mt-3 text-slate-600">
            Let's talk about how we can partner with your team.
          </p>
          <Link
            to="/contacts"
            className="mt-7 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
};
