import { Link } from "react-router-dom";
import "@/styles/pages/services.css";

/** The five services in full, and how an engagement runs. */
export const Services = () => {
  return (
    <div className="pg-services" style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", color: "#0E2F37", background: "#FFFFFF", fontSize: "17px", lineHeight: "1.6", WebkitFontSmoothing: "antialiased", overflowX: "hidden" }}>
        {/* Intro */}
        <section style={{ background: "#FAF8F4", borderBottom: "1px solid #E2DDD3" }}>
          <div className="sec" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px 88px", display: "flex", flexWrap: "wrap", gap: "40px 80px", alignItems: "flex-end", justifyContent: "space-between" }}>
            <h1 style={{ margin: "0", flex: "1 1 520px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(46px, 6.4vw, 92px)", lineHeight: "1", letterSpacing: "-0.025em", color: "#063E4A" }}>
              <span className="line"><span>Five ways we</span></span>
              <span className="line"><span style={{ animationDelay: ".12s" }}>work with <em style={{ fontStyle: "italic", color: "#B34A10" }}>you.</em></span></span>
            </h1>
            <p className="fade" style={{ margin: "0", flex: "1 1 320px", maxWidth: "26em", fontSize: "19px", lineHeight: "1.55", color: "#3E4F53" }}>Pick the one closest to what you are dealing with. Most engagements start with one area and grow from there, always shaped around the size, sector and goals of your organization.</p>
          </div>
        </section>

        {/* Services with index rail */}
        <section className="sec" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px 64px", display: "flex", flexWrap: "wrap", gap: "48px 80px", alignItems: "flex-start" }}>
          <div className="railwrap" style={{ flex: "0 1 240px" }}>
            <nav className="rail idx" aria-label="Services on this page">
              <p style={{ margin: "0 0 14px", fontSize: "14px", color: "#5A686B" }}>On this page</p>
              <a href="#systems"><span>HR systems setup</span></a>
              <a href="#training"><span>Staff training and development</span></a>
              <a href="#change"><span>Managing big changes</span></a>
              <a href="#engagement"><span>Engagement and retention</span></a>
              <a href="#culture" style={{ borderBottom: "1px solid #E2DDD3" }}><span>Company culture</span></a>
            </nav>
          </div>

          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "104px" }}>

            <article id="systems" className="svcblock">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 48px", alignItems: "flex-start" }}>
                <div style={{ flex: "1 1 340px", minWidth: "0" }}>
                  <h2 style={{ margin: "0 0 18px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "40px", lineHeight: "1.08", letterSpacing: "-0.015em", color: "#063E4A" }}>HR systems setup</h2>
                  <p style={{ margin: "0 0 28px", fontSize: "18px", color: "#3E4F53" }}>We pick and set up the software that runs your HR, so hiring, payroll, reviews and training all live in one place instead of scattered spreadsheets.</p>
                  <ul style={{ listStyle: "none", margin: "0", padding: "0", color: "#3E4F53" }}>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Choose the right HR software for your size and budget</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Set up your employee records and onboarding system</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Install a tool to run staff training online</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3", borderBottom: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Set up performance reviews and goal tracking</li>
                  </ul>
                </div>
                <div className="ph unveil" style={{ flex: "0 1 300px", aspectRatio: "4 / 5" }}><img src="/assets/2a474ae2cafb1b462795c8138c8a50c4_392x261.jpg" alt="A professional working on a laptop" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div>
              </div>
            </article>

            <article id="training" className="svcblock">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 48px", alignItems: "flex-start" }}>
                <div style={{ flex: "1 1 340px", minWidth: "0" }}>
                  <h2 style={{ margin: "0 0 18px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "40px", lineHeight: "1.08", letterSpacing: "-0.015em", color: "#063E4A" }}>Staff training and development</h2>
                  <p style={{ margin: "0 0 28px", fontSize: "18px", color: "#3E4F53" }}>We train your people and grow your managers, so your team keeps getting better and you build leaders from within instead of always hiring out.</p>
                  <ul style={{ listStyle: "none", margin: "0", padding: "0", color: "#3E4F53" }}>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Training programmes to upskill your staff</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Clear career paths so people know how to grow</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Manager and leadership coaching</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3", borderBottom: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Help leaders communicate and lead through change</li>
                  </ul>
                </div>
                <div className="ph unveil" style={{ flex: "0 1 300px", aspectRatio: "4 / 5" }}><img src="/assets/hrppi/workshop.jpg" alt="A facilitator leading a workshop with a team" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% center" }} /></div>
              </div>
            </article>

            <article id="change" className="svcblock">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 48px", alignItems: "flex-start" }}>
                <div style={{ flex: "1 1 340px", minWidth: "0" }}>
                  <h2 style={{ margin: "0 0 18px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "40px", lineHeight: "1.08", letterSpacing: "-0.015em", color: "#063E4A" }}>Managing big changes</h2>
                  <p style={{ margin: "0 0 28px", fontSize: "18px", color: "#3E4F53" }}>Restructuring, new systems, new leadership? We guide your team through the change so it actually lands and holds, instead of falling apart after week two.</p>
                  <ul style={{ listStyle: "none", margin: "0", padding: "0", color: "#3E4F53" }}>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>A clear plan for rolling out the change</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Communication so staff know what is happening and why</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Support for managers leading their teams through it</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3", borderBottom: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Follow-up so the new way of working sticks</li>
                  </ul>
                </div>
                <div className="ph unveil" style={{ flex: "0 1 300px", aspectRatio: "4 / 5" }}><img src="/assets/4cfb5c35398df23c99491f75f37c1c47_378x252.jpg" alt="Managers planning around a meeting table" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div>
              </div>
            </article>

            <article id="engagement" className="svcblock">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 48px", alignItems: "flex-start" }}>
                <div style={{ flex: "1 1 340px", minWidth: "0" }}>
                  <h2 style={{ margin: "0 0 18px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "40px", lineHeight: "1.08", letterSpacing: "-0.015em", color: "#063E4A" }}>Engagement and retention</h2>
                  <p style={{ margin: "0 0 28px", fontSize: "18px", color: "#3E4F53" }}>We help your people feel valued and stay, through fair conflict handling, a workplace people are proud of, and communication that keeps everyone in the loop.</p>
                  <ul style={{ listStyle: "none", margin: "0", padding: "0", color: "#3E4F53" }}>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>A fair, clear process for handling workplace conflict</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>A reputation that attracts and keeps good staff</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Internal communication that actually reaches people</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3", borderBottom: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Events and activities that boost team morale</li>
                  </ul>
                </div>
                <div className="ph unveil" style={{ flex: "0 1 300px", aspectRatio: "4 / 5" }}><img src="/assets/2c555ad8375e98a3229a69057a87b7d4_378x252.jpg" alt="A smiling professional on a phone call" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div>
              </div>
            </article>

            <article id="culture" className="svcblock">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 48px", alignItems: "flex-start" }}>
                <div style={{ flex: "1 1 340px", minWidth: "0" }}>
                  <h2 style={{ margin: "0 0 18px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "40px", lineHeight: "1.08", letterSpacing: "-0.015em", color: "#063E4A" }}>Building your company culture</h2>
                  <p style={{ margin: "0 0 28px", fontSize: "18px", color: "#3E4F53" }}>We help you define how your company actually works and feels, your values and your way of doing things, then make it real in everyday behaviour rather than a poster on the wall.</p>
                  <ul style={{ listStyle: "none", margin: "0", padding: "0", color: "#3E4F53" }}>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Define your company values and identity</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Turn those values into day to day habits</li>
                    <li style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid #E2DDD3", borderBottom: "1px solid #E2DDD3" }}><svg className="tick" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5l3 3 7-7" fill="none" stroke="#B34A10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>Tools to keep the culture strong as you grow</li>
                  </ul>
                </div>
                <div className="ph unveil" style={{ flex: "0 1 300px", aspectRatio: "4 / 5" }}><img src="/assets/806f85e0f8efb465de628ea5f301eef1_469x313.jpg" alt="Two professionals greeting each other with a handshake" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div>
              </div>
            </article>

          </div>
        </section>

        {/* Process: a real sequence, so it is numbered */}
        <section style={{ background: "#063E4A", color: "#E8EFEF", marginTop: "64px" }}>
          <div className="sec" style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 64px", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px" }}>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(38px, 4.8vw, 64px)", lineHeight: "1.05", letterSpacing: "-0.02em", color: "#FFFFFF" }}>How an engagement runs</h2>
              <p style={{ margin: "0", maxWidth: "26em", color: "#C9D8DA" }}>Whatever the starting point, the work moves through the same three stages.</p>
            </div>
            <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "48px 48px" }}>
              <li style={{ paddingTop: "24px", position: "relative" }}>
                <div className="grow" style={{ position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "rgba(232, 239, 239, 0.4)" }}></div>
                <span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "72px", lineHeight: "1", color: "#F2B48A", marginBottom: "20px" }}>01</span>
                <h3 style={{ margin: "0 0 10px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "28px", color: "#FFFFFF" }}>Discover</h3>
                <p style={{ margin: "0", color: "#C9D8DA" }}>We get to know your business goals, take stock of your current team, and find where HR can add the most value.</p>
              </li>
              <li style={{ paddingTop: "24px", position: "relative" }}>
                <div className="grow" style={{ position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "rgba(232, 239, 239, 0.4)" }}></div>
                <span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "72px", lineHeight: "1", color: "#F2B48A", marginBottom: "20px" }}>02</span>
                <h3 style={{ margin: "0 0 10px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "28px", color: "#FFFFFF" }}>Design</h3>
                <p style={{ margin: "0", color: "#C9D8DA" }}>We build the systems, programmes and policies that line your people up with where your business is going.</p>
              </li>
              <li style={{ paddingTop: "24px", position: "relative" }}>
                <div className="grow" style={{ position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "rgba(232, 239, 239, 0.4)" }}></div>
                <span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "72px", lineHeight: "1", color: "#F2B48A", marginBottom: "20px" }}>03</span>
                <h3 style={{ margin: "0 0 10px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "28px", color: "#FFFFFF" }}>Deliver</h3>
                <p style={{ margin: "0", color: "#C9D8DA" }}>We put it in place, guide the change, and make the new ways of working stick well after we step back.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#FAF8F4" }}>
          <div className="sec" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 24px", display: "flex", flexWrap: "wrap", gap: "32px 64px", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ margin: "0 0 8px", fontFamily: "Caveat, cursive", fontSize: "30px", lineHeight: "1.1", color: "#B34A10", transform: "rotate(-2deg)", transformOrigin: "left" }}>Not sure which one fits?</p>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: "1.1", letterSpacing: "-0.015em", color: "#063E4A" }}>Tell us the problem. We will tell you honestly if we can help.</h2>
            </div>
            <Link className="btn" to="/contacts" style={{ background: "#063E4A", padding: "15px 26px", borderRadius: "3px", fontSize: "16px", fontWeight: "500", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>Book a consultation</Link>
          </div>
        </section>
    </div>
  );
};
