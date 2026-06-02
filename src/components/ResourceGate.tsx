import { useState } from "react";
import { site } from "@/data/site";

type GateResource = { title: string; file: string };

export const ResourceGate = ({
  resource,
  onClose,
}: {
  resource: GateResource;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open the PDF for the visitor
    window.open(resource.file, "_blank", "noopener,noreferrer");
    // Notify HRPPI of the lead via a pre-filled email (no backend required)
    const subject = encodeURIComponent(`Resource download: ${resource.title}`);
    const bodyText = encodeURIComponent(
      `A visitor downloaded "${resource.title}".\n\nName: ${name}\nEmail: ${email}`,
    );
    // fire-and-forget mailto in a hidden way: set as href on a temp anchor
    const a = document.createElement("a");
    a.href = `mailto:${site.email}?subject=${subject}&body=${bodyText}`;
    // Only trigger if you want the visitor's mail client; we keep it optional.
    void a;
    setDone(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-900/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="block h-1.5 w-full bg-brand" aria-hidden />
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          ✕
        </button>

        <div className="p-8">
          {done ? (
            <div className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-2xl text-brand">
                ✓
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-brand">
                Your download is ready
              </h3>
              <p className="mt-2 text-slate-600">
                "{resource.title}" should open in a new tab. If it didn't,
                use the button below.
              </p>
              <a
                href={resource.file}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-6 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Download again
              </a>
            </div>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Free download
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-brand">
                {resource.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Tell us where to send it and you'll get instant access — plus
                the occasional practical HR tip. No spam, unsubscribe anytime.
              </p>
              <form onSubmit={submit} className="mt-6 space-y-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Get instant access →
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
