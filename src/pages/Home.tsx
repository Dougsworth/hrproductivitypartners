import { Link } from "react-router-dom";
import "@/styles/pages/home.css";

/** Home page. */
export const Home = () => {
  return (
    <div className="pg-home" style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", color: "#0E2F37", background: "#FAF8F4", fontSize: "17px", lineHeight: "1.6", WebkitFontSmoothing: "antialiased", fontFeatureSettings: "'kern' 1", overflowX: "hidden" }}>
        {/* Header */}

        {/* Hero */}
        <section id="top" className="herogrid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 24px", boxSizing: "border-box" }}>
          <div className="herotext" style={{ minWidth: "0" }}>
            <h1 aria-label="Build a workplace people thrive in" style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(44px, 5.6vw, 80px)", lineHeight: "1.02", letterSpacing: "-0.025em", color: "#063E4A", fontVariationSettings: "'opsz' 144" }}>
              <span className="line"><span>Build a workplace</span></span>
              <span className="line l2"><span>people <em className="slot" style={{ fontStyle: "italic", color: "#B34A10", position: "relative", whiteSpace: "nowrap", display: "inline-block", verticalAlign: "top" }}><span className="sizer" aria-hidden="true">belong in.</span><span className="prism"><span className="face f0" aria-hidden="true">thrive in.</span><span className="face f1" aria-hidden="true">grow in.</span><span className="face f2" aria-hidden="true">belong in.</span><span className="face f3" aria-hidden="true">stay in.</span></span><svg className="drawn" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", left: "0.04em", bottom: "-0.1em", width: "96%", height: "0.24em", overflow: "visible" }}><path pathLength="1" d="M4 16C70 7 150 5 296 11" fill="none" stroke="#B34A10" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path></svg></em></span></span>
            </h1>
            <p className="fade d1" style={{ margin: "32px 0 0", maxWidth: "30em", fontSize: "19px", lineHeight: "1.55", color: "#3E4F53" }}>HR consulting from Kingston for organizations across Jamaica and the Caribbean. We strengthen your people, systems and leadership so the business performs and good people stay.</p>
            <div className="note fade d3" style={{ display: "flex", alignItems: "flex-end", gap: "4px", margin: "28px 0 4px 20px", fontSize: "27px", transform: "rotate(-2deg)" }}>
              <svg className="drawn late" width="38" height="32" viewBox="0 0 40 34" fill="none" stroke="#B34A10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginBottom: "-16px", flex: "none" }}><path pathLength="1" d="M37 5C22 3 9 10 6 29"></path><path pathLength="1" d="M1 23l5 7 6-5"></path></svg>
              <span style={{ paddingBottom: "6px" }}>We make your people our business.</span>
            </div>
            <div className="fade d2" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px" }}>
              <Link className="btn" to="/contacts" style={{ background: "#063E4A", padding: "15px 26px", borderRadius: "3px", fontSize: "16px", fontWeight: "500", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>Book a consultation</Link>
              <a className="textlink" href="#services" style={{ fontSize: "16px" }}>See our services</a>
            </div>
          </div>
          <figure style={{ margin: "0", minWidth: "0" }}>
            <img className="people" src="/assets/hrppi/team-banner-cutout.webp" alt="The HRPPI team smiling beside the HRPPI sign" width="1400" height="940" style={{ display: "block", width: "100%", height: "auto" }} />
            <figcaption className="fade d2" style={{ marginTop: "12px", fontSize: "14px", color: "#5A686B" }}>Stronger people. Brighter Caribbean.</figcaption>
          </figure>
        </section>

        {/* Why HRPPI */}
        <section className="sec" aria-label="Why HRPPI" style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 24px 88px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px 56px" }}>
            <div style={{ paddingTop: "22px", position: "relative" }}>
              <div className="grow" style={{ position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "#063E4A" }}></div>
              <h2 style={{ margin: "0 0 10px", fontFamily: "Fraunces, Georgia, serif", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#063E4A" }} className="tip">Rooted in the Caribbean</h2>
              <p style={{ margin: "0", color: "#4A5A5E" }}>More than 20 years advising organizations across the region, from family businesses to government ministries.</p>
            </div>
            <div style={{ paddingTop: "22px", position: "relative" }}>
              <div className="grow" style={{ position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "#063E4A" }}></div>
              <h2 style={{ margin: "0 0 10px", fontFamily: "Fraunces, Georgia, serif", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#063E4A" }} className="tip">Informed by global practice</h2>
              <p style={{ margin: "0", color: "#4A5A5E" }}>International standards and research, applied to the realities of how work gets done here.</p>
            </div>
            <div style={{ paddingTop: "22px", position: "relative" }}>
              <div className="grow" style={{ position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "#063E4A" }}></div>
              <h2 style={{ margin: "0 0 10px", fontFamily: "Fraunces, Georgia, serif", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#063E4A" }} className="tip">Led by our CEO</h2>
              <p style={{ margin: "0", color: "#4A5A5E" }}>Every engagement is led personally by Shirley Bartley. You work with the person who does the work.</p>
            </div>
          </div>
        </section>

        {/* Photo pair */}
        <section aria-label="HRPPI at work" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 128px" }}>
          <div className="pair" style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
            <figure style={{ margin: "0", flex: "7 1 460px" }}>
              <div className="unveil drift" style={{ aspectRatio: "3 / 2", overflow: "hidden", background: "#E9E4DA" }}>
                <img src="/assets/hrppi/workshop.jpg" alt="A facilitator leading a workshop with a team around a table" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <figcaption style={{ marginTop: "12px", fontSize: "14px", color: "#5A686B" }}>Leadership workshop</figcaption>
            </figure>
            <figure className="offset" style={{ margin: "96px 0 0", flex: "4 1 260px" }}>
              <div className="unveil drift" style={{ aspectRatio: "4 / 5", overflow: "hidden", background: "#E9E4DA" }}>
                <img src="/assets/hrppi/leader.jpg" alt="A confident professional woman in an office" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </figure>
          </div>
        </section>

        {/* Services */}
        <section id="services" style={{ background: "#FFFFFF", borderTop: "1px solid #E2DDD3", borderBottom: "1px solid #E2DDD3" }}>
          <div className="sec" style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 24px", display: "flex", flexWrap: "wrap", gap: "48px 96px", alignItems: "flex-start" }}>
            <div className="intro" style={{ flex: "1 1 280px", maxWidth: "360px" }}>
              <h2 style={{ margin: "0 0 20px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "52px", lineHeight: "1.05", letterSpacing: "-0.02em", color: "#063E4A" }}>How we help</h2>
              <p style={{ margin: "0 0 28px", color: "#4A5A5E" }}>Five areas of practice. Each engagement is shaped around the size, sector and goals of your organization.</p>
              <div className="unveil" style={{ aspectRatio: "4 / 3", overflow: "hidden", marginBottom: "28px", background: "#E9E4DA" }}>
                <img src="/assets/hrppi/handshake.jpg" alt="Two colleagues shaking hands across a desk" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <Link className="textlink" to="/services" style={{ fontSize: "16px" }}>See every service in detail</Link>
            </div>
            <div style={{ flex: "999 1 520px", minWidth: "0" }}>
              <div className="svc" style={{ borderTop: "1px solid #CFC8BB", padding: "30px 0", display: "flex", flexWrap: "wrap", gap: "10px 40px" }}>
                <div style={{ flex: "1 1 240px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "3px" }}><rect x="3" y="4" width="22" height="15" rx="2"></rect><path d="M9 24h10M14 19v5M8 10h6M8 14h10"></path></svg>
                  <h3 style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "25px", lineHeight: "1.25", color: "#063E4A" }}>HR systems and technology</h3>
                </div>
                <p style={{ margin: "0", flex: "1.4 1 300px", color: "#4A5A5E" }}>We select and implement HR software so hiring, payroll, performance reviews and training run from one place.</p>
              </div>
              <div className="svc" style={{ borderTop: "1px solid #CFC8BB", padding: "30px 0", display: "flex", flexWrap: "wrap", gap: "10px 40px" }}>
                <div style={{ flex: "1 1 240px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "3px" }}><path d="M3 24h6v-6h6v-6h6V6h4"></path><path d="M21 3h4v4"></path></svg>
                  <h3 style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "25px", lineHeight: "1.25", color: "#063E4A" }}>Training and leadership development</h3>
                </div>
                <p style={{ margin: "0", flex: "1.4 1 300px", color: "#4A5A5E" }}>Programmes that build skills across your teams and prepare managers to lead with confidence.</p>
              </div>
              <div className="svc" style={{ borderTop: "1px solid #CFC8BB", padding: "30px 0", display: "flex", flexWrap: "wrap", gap: "10px 40px" }}>
                <div style={{ flex: "1 1 240px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "3px" }}><path d="M5 12a9.5 9.5 0 0 1 17-4"></path><path d="M22 3v5h-5"></path><path d="M23 16a9.5 9.5 0 0 1-17 4"></path><path d="M6 25v-5h5"></path></svg>
                  <h3 style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "25px", lineHeight: "1.25", color: "#063E4A" }}>Organizational change</h3>
                </div>
                <p style={{ margin: "0", flex: "1.4 1 300px", color: "#4A5A5E" }}>Guidance through restructuring, mergers and new ways of working, with clear communication at every stage.</p>
              </div>
              <div className="svc" style={{ borderTop: "1px solid #CFC8BB", padding: "30px 0", display: "flex", flexWrap: "wrap", gap: "10px 40px" }}>
                <div style={{ flex: "1 1 240px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "3px" }}><path d="M14 23.5S4.5 18 4.5 11A5 5 0 0 1 14 8.5 5 5 0 0 1 23.5 11c0 7-9.5 12.5-9.5 12.5z"></path></svg>
                  <h3 style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "25px", lineHeight: "1.25", color: "#063E4A" }}>Employee engagement and retention</h3>
                </div>
                <p style={{ margin: "0", flex: "1.4 1 300px", color: "#4A5A5E" }}>Practical measures that help people feel valued, do their best work and choose to stay.</p>
              </div>
              <div className="svc" style={{ borderTop: "1px solid #CFC8BB", borderBottom: "1px solid #CFC8BB", padding: "30px 0", display: "flex", flexWrap: "wrap", gap: "10px 40px" }}>
                <div style={{ flex: "1 1 240px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "3px" }}><circle cx="9" cy="10" r="3.5"></circle><circle cx="19" cy="10" r="3.5"></circle><path d="M2.5 23c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5M12.5 23c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"></path></svg>
                  <h3 style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "25px", lineHeight: "1.25", color: "#063E4A" }}>Culture and values</h3>
                </div>
                <p style={{ margin: "0", flex: "1.4 1 300px", color: "#4A5A5E" }}>We help you define how your organization works and make it visible in everyday decisions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About / Leadership */}
        <section className="sec" id="about" style={{ maxWidth: "1200px", margin: "0 auto", padding: "128px 24px 120px" }}>
          <blockquote style={{ margin: "0 0 96px", maxWidth: "900px", fontFamily: "Fraunces, Georgia, serif", fontStyle: "italic", fontWeight: "300", fontSize: "clamp(32px, 4.4vw, 58px)", lineHeight: "1.12", letterSpacing: "-0.015em", color: "#063E4A", textIndent: "-0.42em" }} aria-label="Investing in people is the smartest business move of all."><span className="w" style={{ animationRange: "cover 12% cover 20%" }}>“Investing</span> <span className="w" style={{ animationRange: "cover 16% cover 24%" }}>in</span> <span className="w" style={{ animationRange: "cover 20% cover 28%" }}>people</span> <span className="w" style={{ animationRange: "cover 24% cover 32%" }}>is</span> <span className="w" style={{ animationRange: "cover 28% cover 36%" }}>the</span> <span className="w" style={{ animationRange: "cover 32% cover 40%" }}>smartest</span> <span className="w" style={{ animationRange: "cover 36% cover 44%" }}>business</span> <span className="w" style={{ animationRange: "cover 40% cover 48%" }}>move</span> <span className="w" style={{ animationRange: "cover 44% cover 52%" }}>of</span> <span className="w" style={{ animationRange: "cover 48% cover 56%" }}>all.”</span></blockquote>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 96px", alignItems: "flex-start" }}>
            <figure style={{ margin: "0", flex: "1 1 280px", maxWidth: "420px" }}>
              <div className="unveil" style={{ aspectRatio: "4 / 5", overflow: "hidden", background: "#EDEDED" }}>
                <img src="/assets/hrppi/shirley-bartley.jpg" alt="Shirley Bartley, CEO of HRPPI" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <figcaption style={{ marginTop: "14px", fontSize: "14px", color: "#5A686B" }}>Shirley Bartley, CEO</figcaption>
            </figure>
            <div style={{ flex: "999 1 420px", minWidth: "0", maxWidth: "640px" }}>
              <h2 style={{ margin: "0 0 28px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "52px", lineHeight: "1.05", letterSpacing: "-0.02em", color: "#063E4A" }}>Every engagement, led by Shirley</h2>
              <p style={{ margin: "0 0 20px", fontSize: "18px", color: "#3E4F53" }}>Human Resource Productivity Partners, International is a registered HR consulting practice based in Kingston. We partner with organizations to build their people capability and the business value that follows.</p>
              <p style={{ margin: "0 0 40px", color: "#4A5A5E" }}>Shirley brings decades of senior corporate and government experience and an internationally accredited background in organizational communication.</p>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", fontSize: "16px", color: "#3E4F53" }}>
                <li style={{ borderTop: "1px solid #E2DDD3", padding: "14px 0" }}>Accredited Business Communicator (ABC), IABC, among the first Jamaicans to hold the designation</li>
                <li style={{ borderTop: "1px solid #E2DDD3", padding: "14px 0" }}>MBA, Business Management; graduate of CARIMAC, University of the West Indies</li>
                <li style={{ borderTop: "1px solid #E2DDD3", padding: "14px 0" }}>Former senior internal communications manager, Scotiabank</li>
                <li style={{ borderTop: "1px solid #E2DDD3", borderBottom: "1px solid #E2DDD3", padding: "14px 0" }}>Ten years as Director of Public Relations, Ministry of National Security and Justice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section id="insights" style={{ borderTop: "1px solid #E2DDD3" }}>
          <div className="sec" style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "16px", marginBottom: "44px" }}>
              <h2 style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "52px", lineHeight: "1.05", letterSpacing: "-0.02em", color: "#063E4A" }}>Insights</h2>
              <Link className="textlink" to="/insights" style={{ fontSize: "16px" }}>View all insights</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "48px 40px" }}>
              <Link className="card" to="/insights/future-of-work-caribbean" style={{ textDecoration: "none", color: "#0E2F37", display: "block" }}>
                <div className="flip" style={{ aspectRatio: "3 / 2", marginBottom: "20px" }}><div className="flipper"><div className="side front"><img src="/assets/305fca0a91a3332e30d5d66832dd1957_392x261.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div><div className="side back"><p style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "21px", lineHeight: "1.3", color: "#FFFFFF" }}>Jamaica's outsourcing sector shed roughly 12,000 jobs in two years. The cause is productivity, not automation.</p><span style={{ fontSize: "14px", color: "#F2B48A" }}>Read the piece</span></div></div></div>
                <span style={{ display: "block", fontSize: "14px", color: "#5A686B", marginBottom: "8px" }}>28 August 2026</span>
                <span className="t" style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "24px", lineHeight: "1.25", color: "#063E4A" }}>The future of work in the Caribbean</span>
              </Link>
              <Link className="card" to="/insights/boost-employee-engagement" style={{ textDecoration: "none", color: "#0E2F37", display: "block" }}>
                <div className="flip" style={{ aspectRatio: "3 / 2", marginBottom: "20px" }}><div className="flipper"><div className="side front"><img src="/assets/2c555ad8375e98a3229a69057a87b7d4_378x252.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div><div className="side back"><p style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "21px", lineHeight: "1.3", color: "#FFFFFF" }}>Engagement is the everyday experience of being well managed. Five changes that move it, none needing a budget.</p><span style={{ fontSize: "14px", color: "#F2B48A" }}>Read the piece</span></div></div></div>
                <span style={{ display: "block", fontSize: "14px", color: "#5A686B", marginBottom: "8px" }}>16 August 2026</span>
                <span className="t" style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "24px", lineHeight: "1.25", color: "#063E4A" }}>Five ways to strengthen employee engagement</span>
              </Link>
              <Link className="card" to="/insights/hr-automation-guide-smbs" style={{ textDecoration: "none", color: "#0E2F37", display: "block" }}>
                <div className="flip" style={{ aspectRatio: "3 / 2", marginBottom: "20px" }}><div className="flipper"><div className="side front"><img src="/assets/2a474ae2cafb1b462795c8138c8a50c4_392x261.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div><div className="side back"><p style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "21px", lineHeight: "1.3", color: "#FFFFFF" }}>Move HR off spreadsheets without buying something you will not use. A four month sequence that works.</p><span style={{ fontSize: "14px", color: "#F2B48A" }}>Read the piece</span></div></div></div>
                <span style={{ display: "block", fontSize: "14px", color: "#5A686B", marginBottom: "8px" }}>2 August 2026</span>
                <span className="t" style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "24px", lineHeight: "1.25", color: "#063E4A" }}>HR automation: a practical guide for small and medium businesses</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ background: "#063E4A", color: "#E8EFEF" }}>
          <div className="sec" style={{ maxWidth: "1200px", margin: "0 auto", padding: "128px 24px 112px" }}>
            <p className="note" style={{ margin: "0 0 18px", fontSize: "32px", color: "#F2B48A", transform: "rotate(-2deg)", transformOrigin: "left" }}>Let's build what's next</p>
            <h2 style={{ margin: "0 0 56px", maxWidth: "14ch", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(44px, 6.4vw, 88px)", lineHeight: "1", letterSpacing: "-0.025em", color: "#FFFFFF" }}>Tell us what you are <em style={{ fontStyle: "italic", color: "#F2B48A" }}>working on.</em></h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", alignItems: "flex-end", justifyContent: "space-between", borderTop: "1px solid rgba(232, 239, 239, 0.25)", paddingTop: "28px" }}>
              <p style={{ margin: "0", maxWidth: "30em", fontSize: "18px", color: "#C9D8DA" }}>Every enquiry is read by Shirley and answered within one business day. If we are not the right fit, we will say so.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 28px", alignItems: "center" }}>
                <Link className="btnlight" to="/contacts" style={{ background: "#FFFFFF", color: "#063E4A", textDecoration: "none", padding: "15px 26px", borderRadius: "3px", fontSize: "16px", fontWeight: "500", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>Book a consultation</Link>
                <a href="mailto:Hrproductivitypartner@gmail.com" style={{ color: "#FFFFFF", fontSize: "16px", textDecoration: "underline", textUnderlineOffset: "5px", textDecorationThickness: "1px" }}>Hrproductivitypartner@gmail.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
    </div>
  );
};
