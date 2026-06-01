import { useState } from "react";
import { site } from "@/data/site";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

  return (
    <>
      {/* Page header (padded to clear fixed nav) */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white pb-12 pt-32 sm:pb-16 sm:pt-36">
        <div
          className="pointer-events-none absolute -right-32 -top-16 h-96 w-96 rounded-full bg-brand-50"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-brand sm:text-6xl">
            Let's start the conversation.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Strengthening your people capacity is our business. Reach out and
            we'll get right back to you.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div>
            <h2 className="font-display text-3xl font-semibold text-brand">Let's talk</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {site.name} is a registered human resource consulting service
              operating out of {site.location}. Whether you're rethinking your HR
              systems, building leaders, or driving change — we'd love to help.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { label: "Location", value: site.location },
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                { label: "Phone", value: site.phone },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-brand-50/50 p-5"
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white"
                    aria-hidden
                  >
                    {item.label[0]}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-brand hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-slate-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-4xl bg-brand-50/60 p-8 ring-1 ring-brand/5 sm:p-10"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={field}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className={field}
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
