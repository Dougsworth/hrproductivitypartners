import { useState, type ChangeEvent } from "react";
import { site } from "@/data/site";
import "@/styles/pages/contact.css";

type Form = { name: string; org: string; email: string; topic: string; message: string };

/** Contact: who you are reaching on the left, a five field note on the right. */
export const Contact = () => {
  const [form, setForm] = useState<Form>({ name: "", org: "", email: "", topic: "Not sure yet", message: "" });
  const set =
    (k: keyof Form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const subject = `Enquiry: ${form.topic}${form.org ? ` (${form.org})` : ""}`;
  const body = [
    `Name: ${form.name}`,
    `Organisation: ${form.org}`,
    `Email: ${form.email}`,
    `Topic: ${form.topic}`,
    "",
    form.message,
  ].join("\n");
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const ready = form.name && form.email && form.message;
  const hint = ready
    ? "Opens your email app with the note ready to send."
    : "Add your name, email and a few lines, then send.";

  return (
    <div className="pg-contact" style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", color: "#0E2F37", background: "#FAF8F4", fontSize: "17px", lineHeight: "1.6", WebkitFontSmoothing: "antialiased" }}>
      <div className="contact-split" style={{ display: "flex", flexWrap: "wrap" }}>

          {/* Left: who you are reaching */}
          <section style={{ flex: "1 1 480px", background: "#063E4A", color: "#E8EFEF", display: "flex", justifyContent: "flex-end" }}>
            <div className="sec" style={{ width: "100%", maxWidth: "600px", padding: "96px 64px 80px 24px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "56px" }}>
              <div>
                <h1 style={{ margin: "0 0 28px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(46px, 5.4vw, 80px)", lineHeight: "1", letterSpacing: "-0.025em", color: "#FFFFFF" }}>
                  <span className="line"><span>Let's start the</span></span>
                  <span className="line"><span style={{ animationDelay: ".12s" }}><em style={{ fontStyle: "italic", color: "#F2B48A" }}>conversation.</em></span></span>
                </h1>
                <p className="fade" style={{ margin: "0", maxWidth: "26em", fontSize: "18px", color: "#C9D8DA" }}>Tell us what you are trying to move, a team, a system, a culture, and we will tell you honestly whether we are the right help.</p>
              </div>

              <figure className="fade" style={{ margin: "0", display: "flex", gap: "20px", alignItems: "center" }}>
                <img src="/assets/hrppi/shirley-bartley.jpg" alt="Shirley Bartley" width="88" height="88" style={{ display: "block", width: "88px", height: "88px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 15%", flex: "none", background: "#EDEDED" }} />
                <figcaption>
                  <span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "22px", color: "#FFFFFF" }}>Shirley Bartley, CEO</span>
                  <span style={{ display: "block", fontSize: "15px", color: "#C9D8DA" }}>Every enquiry is read by the person who would do the work.</span>
                </figcaption>
              </figure>

              <dl className="fade" style={{ margin: "0", display: "grid", gridTemplateColumns: "120px 1fr", gap: "0", fontSize: "16px" }}>
                <dt style={{ padding: "14px 0", borderTop: "1px solid rgba(232, 239, 239, 0.25)", color: "#A9C1C4" }}>Email</dt>
                <dd style={{ margin: "0", padding: "14px 0", borderTop: "1px solid rgba(232, 239, 239, 0.25)" }}><a className="mail" href={`mailto:${site.email}`}>{site.email}</a></dd>
                <dt style={{ padding: "14px 0", borderTop: "1px solid rgba(232, 239, 239, 0.25)", color: "#A9C1C4" }}>Replies</dt>
                <dd style={{ margin: "0", padding: "14px 0", borderTop: "1px solid rgba(232, 239, 239, 0.25)" }}>Within one business day</dd>
                <dt style={{ padding: "14px 0", borderTop: "1px solid rgba(232, 239, 239, 0.25)", borderBottom: "1px solid rgba(232, 239, 239, 0.25)", color: "#A9C1C4" }}>Based in</dt>
                <dd style={{ margin: "0", padding: "14px 0", borderTop: "1px solid rgba(232, 239, 239, 0.25)", borderBottom: "1px solid rgba(232, 239, 239, 0.25)" }}>Kingston, Jamaica. Serving the Caribbean.</dd>
              </dl>
            </div>
          </section>

          {/* Right: the note */}
          <section style={{ flex: "1 1 480px", display: "flex", justifyContent: "flex-start" }}>
            <div className="sec" style={{ width: "100%", maxWidth: "600px", padding: "96px 24px 80px 64px", boxSizing: "border-box" }}>
              <h2 style={{ margin: "0 0 6px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "36px", lineHeight: "1.1", color: "#063E4A" }}>Send us a note</h2>
              <p style={{ margin: "0 0 44px", fontFamily: "Caveat, cursive", fontSize: "26px", lineHeight: "1.1", color: "#B34A10", transform: "rotate(-1.5deg)", transformOrigin: "left" }}>Five fields. No forms behind the form.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
                  <div className="field" style={{ flex: "1 1 200px" }}>
                    <label htmlFor="c-name">Your name</label>
                    <input id="c-name" type="text" autoComplete="name" placeholder="Jane Brown" value={form.name} onChange={set("name")} />
                  </div>
                  <div className="field" style={{ flex: "1 1 200px" }}>
                    <label htmlFor="c-org">Organisation</label>
                    <input id="c-org" type="text" autoComplete="organization" placeholder="Company or ministry" value={form.org} onChange={set("org")} />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={set("email")} />
                </div>
                <div className="field">
                  <label htmlFor="c-topic">What is this about?</label>
                  <select id="c-topic" value={form.topic} onChange={set("topic")}>
                    <option>Not sure yet</option>
                    <option>HR systems setup</option>
                    <option>Staff training and development</option>
                    <option>Managing big changes</option>
                    <option>Engagement and retention</option>
                    <option>Building company culture</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="c-msg">What are you working on?</label>
                  <textarea id="c-msg" rows={5} placeholder="A few lines is plenty." value={form.message} onChange={set("message")}></textarea>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 24px", alignItems: "center", marginTop: "8px" }}>
                  <a className="send" href={mailto} style={{ background: "#063E4A", color: "#FFFFFF", textDecoration: "none", padding: "16px 28px", borderRadius: "3px", fontSize: "16px", fontWeight: "500", minHeight: "52px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>Send message</a>
                  <span style={{ fontSize: "14px", color: "#5A686B" }}>{hint}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};
