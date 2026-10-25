import { Link } from "react-router-dom";
import "@/styles/pages/home.css";

/** Home page, following the approved mockup. Header and footer come from the shell. */
export const Home = () => {
  return (
    <div className="pg-home" style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", color: "#0E2F37", background: "#FAF8F4", fontSize: "16px", lineHeight: "1.6", WebkitFontSmoothing: "antialiased", overflowX: "hidden" }}>


  {/* Hero */}
  <section id="top" className="hero">
    <svg className="drawn" viewBox="0 0 1440 620" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", pointerEvents: "none", zIndex: "0" }}><path pathLength="1" d="M520 640C600 520 590 400 690 320S900 220 960 130 1060 0 1140 -30" fill="none" stroke="#D7B89A" strokeWidth="1.2" vectorEffect="non-scaling-stroke"></path><path pathLength="1" d="M580 640C660 540 660 430 760 350S960 250 1020 160" fill="none" stroke="#E6D3C0" strokeWidth="1" vectorEffect="non-scaling-stroke"></path></svg>
    <div className="wrap hero-grid">
    <div className="hero-copy">
      <p className="eyebrow fade d0">People. Organizations. Caribbean. Global.</p>
      <h1 aria-label="Build a workplace people thrive in" style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(44px, 4.6vw, 68px)", lineHeight: "1.02", letterSpacing: "-0.025em", color: "#063E4A" }}>
        <span className="line"><span>Build a workplace</span></span>
        <span className="line l2"><span>people <em className="slot" style={{ fontStyle: "italic", color: "#B34A10", position: "relative", whiteSpace: "nowrap", display: "inline-block", verticalAlign: "top" }}><span className="sizer" aria-hidden="true">belong in.</span><span className="prism"><span className="face f0" aria-hidden="true">thrive in.</span><span className="face f1" aria-hidden="true">grow in.</span><span className="face f2" aria-hidden="true">belong in.</span><span className="face f3" aria-hidden="true">stay in.</span></span><svg className="drawn" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", left: "0.04em", bottom: "-0.1em", width: "96%", height: "0.24em", overflow: "visible" }}><path pathLength="1" d="M4 16C70 7 150 5 296 11" fill="none" stroke="#B34A10" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path></svg></em></span></span>
      </h1>
      <p className="fade d1" style={{ margin: "26px 0 30px", maxWidth: "30em", fontSize: "17px", lineHeight: "1.6", color: "#3E4F53" }}>HR consulting from Kingston for organizations across Jamaica and the Caribbean. We strengthen your people, systems and leadership so the business performs and good people stay.</p>
      <div className="fade d2 stack" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <Link className="btn btn-dark" to="/contacts">Book a consultation<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
        <Link className="btn btn-line" to="/services">See our services</Link>
      </div>
    </div>
    <div className="hero-art">
      <div className="hero-img"><img src="/assets/hrppi/team-banner-cutout.webp" alt="The HRPPI team smiling beside the HRPPI sign" width="1400" height="940" /></div>
      <div className="hero-card">Stronger people.<br />Brighter Caribbean.<i></i></div>
    </div>
    </div>
  </section>

  {/* Local expertise, global perspective */}
  <section id="about-hrppi" className="band">
    <svg aria-hidden="true" viewBox="0 0 400 400" style={{ position: "absolute", left: "-80px", bottom: "-120px", width: "460px", height: "460px", opacity: "0.07" }}><g fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"><path d="M60 380C140 300 200 220 250 60"></path><path d="M120 300c-40-10-80-40-96-80M150 260c-44-14-80-46-92-92M178 216c-42-20-70-56-76-104M200 170c-36-24-56-62-56-108M222 124c-26-26-38-62-32-100"></path><path d="M120 300c30-30 70-42 116-34M150 260c34-28 74-36 118-24M178 216c34-26 70-30 110-14M200 170c30-24 62-26 96-10M222 124c22-20 48-22 74-10"></path></g></svg>
    <div className="wrap band-grid">
      <div className="rev">
        <p className="eyebrow light">Local expertise. Global perspective.</p>
        <h2 className="h2big" style={{ margin: "0 0 24px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(40px, 4.8vw, 64px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#FFFFFF" }}>Caribbean organizations. <em style={{ fontStyle: "italic", color: "#E7B48F" }}>Global possibilities.</em></h2>
        <p style={{ margin: "0 0 32px", maxWidth: "28em", color: "#C9D8DA" }}>Rooted in the Caribbean and informed by global practice, we bring practical, people centred solutions that help businesses and communities thrive.</p>
        <a className="btn btn-white" href="#about">About HRPPI<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></a>
      </div>
      <div>
        <div className="why-row rev"><span className="why-ico"><svg width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 24C10 14 16 8 25 4"></path><path d="M9 18c-4 0-6-3-6-7 4 0 7 2 7 6M13 13c-2-3-1-7 2-9 2 3 2 7-1 9M17 9c3-2 7-2 9 0-2 3-6 3-9 1"></path></svg></span><div><h3 style={{ margin: "0 0 6px", fontFamily: "Fraunces, Georgia, serif", fontSize: "21px", fontWeight: "400", color: "#FFFFFF" }}>Rooted in the Caribbean</h3><p style={{ margin: "0", fontSize: "14.5px", color: "#B9CDD0" }}>More than 20 years advising organizations across the region, from family businesses to government ministries.</p></div></div>
        <div className="why-row rev"><span className="why-ico"><svg width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="14" cy="14" r="10.5"></circle><path d="M3.5 14h21M14 3.5c3 3 4.5 6.5 4.5 10.5S17 21.5 14 24.5M14 3.5c-3 3-4.5 6.5-4.5 10.5S11 21.5 14 24.5"></path></svg></span><div><h3 style={{ margin: "0 0 6px", fontFamily: "Fraunces, Georgia, serif", fontSize: "21px", fontWeight: "400", color: "#FFFFFF" }}>Informed by global practice</h3><p style={{ margin: "0", fontSize: "14.5px", color: "#B9CDD0" }}>International standards and research, applied to the realities of how work gets done here.</p></div></div>
        <div className="why-row rev"><span className="why-ico"><svg width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="3.5"></circle><circle cx="19" cy="10" r="3.5"></circle><path d="M3 23c0-3.9 3.1-7 7-7 2.2 0 4.2 1 5.5 2.6M13 23c0-3.9 2.7-7 6-7s6 3.1 6 7"></path></svg></span><div><h3 style={{ margin: "0 0 6px", fontFamily: "Fraunces, Georgia, serif", fontSize: "21px", fontWeight: "400", color: "#FFFFFF" }}>Led by our CEO</h3><p style={{ margin: "0", fontSize: "14.5px", color: "#B9CDD0" }}>Every engagement is led personally by Shirley Bartley, with a hands on, client focused approach.</p></div></div>
      </div>
    </div>
  </section>

  {/* How we help */}
  <section id="services" className="wrap help">
    <div className="help-head">
      <div className="help-text rev">
        <div>
          <p className="eyebrow">Practical solutions. Lasting impact.</p>
          <h2 className="h2big" style={{ margin: "0 0 18px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "54px", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#063E4A" }}>How we help</h2>
          <p style={{ margin: "0", maxWidth: "26em", fontSize: "17px", color: "#3E4F53" }}>From strategy to implementation, we support organizations at every stage of their people journey, with one partner from the first conversation to the results.</p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", margin: "0 0 0 4px" }}>
          <p className="note" style={{ margin: "0", fontSize: "24px", transform: "rotate(-3deg)", transformOrigin: "left" }}>Better people practices.<br />Stronger organizations.</p>
          <svg width="70" height="34" viewBox="0 0 70 34" fill="none" stroke="#B34A10" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true" style={{ marginBottom: "14px", flex: "none" }}><path d="M2 30C20 30 40 22 66 4"></path></svg>
        </div>
      </div>
      <div className="help-img uv">
        <img src="/assets/hrppi/consult-notes.jpg" alt="Two people taking notes in a meeting over coffee" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
      </div>
    </div>
    <div className="svc-grid">
      <Link className="svc-card rev" to="/services#systems"><span className="tile" style={{ background: "#0A3B44" }}><svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="14" cy="14" r="3.6"></circle><path d="M14 3.5v3M14 21.5v3M3.5 14h3M21.5 14h3M6.6 6.6l2.1 2.1M19.3 19.3l2.1 2.1M6.6 21.4l2.1-2.1M19.3 8.7l2.1-2.1"></path></svg></span><span><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "20px", lineHeight: "1.25", color: "#063E4A" }}>HR systems and technology</span><span style={{ display: "block", marginTop: "4px", fontSize: "14px", lineHeight: "1.5", color: "#5A686B" }}>We select and implement HR software so hiring, payroll, reviews and reporting run from one place.</span></span><svg className="arrow" width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-card rev" to="/services#training"><span className="tile" style={{ background: "#B5562A" }}><svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 11l12-6 12 6-12 6z"></path><path d="M7 13.5V19c2 2 4.5 3 7 3s5-1 7-3v-5.5M26 11v7"></path></svg></span><span><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "20px", lineHeight: "1.25", color: "#063E4A" }}>Training and leadership development</span><span style={{ display: "block", marginTop: "4px", fontSize: "14px", lineHeight: "1.5", color: "#5A686B" }}>Programmes that build skills across your teams and prepare managers to lead with confidence.</span></span><svg className="arrow" width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-card rev" to="/services#change"><span className="tile" style={{ background: "#F6E7DA" }}><svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#B5562A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 23V16M11 23V11M17 23V14M23 23V6"></path></svg></span><span><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "20px", lineHeight: "1.25", color: "#063E4A" }}>Organizational change</span><span style={{ display: "block", marginTop: "4px", fontSize: "14px", lineHeight: "1.5", color: "#5A686B" }}>Guidance through restructuring, mergers and new ways of working, with clear communication at every stage.</span></span><svg className="arrow" width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-card rev" to="/services#engagement"><span className="tile" style={{ background: "#0A3B44" }}><svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="10" r="3.5"></circle><circle cx="19" cy="10" r="3.5"></circle><path d="M2.5 23c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5M12.5 23c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"></path></svg></span><span><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "20px", lineHeight: "1.25", color: "#063E4A" }}>Employee engagement and retention</span><span style={{ display: "block", marginTop: "4px", fontSize: "14px", lineHeight: "1.5", color: "#5A686B" }}>Practical strategies that help people feel valued, do their best work and choose to stay.</span></span><svg className="arrow" width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-card rev" to="/services#culture"><span className="tile" style={{ background: "#B5562A" }}><svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 21h8M11 24.5h6M14 3a7 7 0 0 0-4 12.7c.7.6 1 1.4 1 2.3v.5h6V18c0-.9.4-1.7 1-2.3A7 7 0 0 0 14 3z"></path></svg></span><span><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "20px", lineHeight: "1.25", color: "#063E4A" }}>Culture and values</span><span style={{ display: "block", marginTop: "4px", fontSize: "14px", lineHeight: "1.5", color: "#5A686B" }}>We help you define and embed your values and make them real in everyday decisions.</span></span><svg className="arrow" width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-card ask rev" to="/contacts"><span><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "20px", lineHeight: "1.25", color: "#FFFFFF" }}>Not sure which fits?</span><span style={{ display: "block", marginTop: "4px", fontSize: "14px", lineHeight: "1.5", color: "#C9D8DA" }}>Tell us the problem and Shirley will point you to the right place, honestly.</span></span><svg className="arrow" width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="#E7B48F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
    </div>
  </section>

  {/* Leadership */}
  <section id="about" className="lead">
    <div className="wrap lead-grid">
    <div className="lead-art">
      <div className="lead-img uv"><img src="/assets/hrppi/shirley-bartley.jpg" alt="Shirley Bartley, CEO of HRPPI" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 12%" }} /></div>
      <div className="lead-cap"><strong style={{ fontWeight: "600" }}>Shirley Bartley, CEO</strong><br /><span style={{ color: "#5A686B" }}>HRPPI</span></div>
    </div>
    <div className="lead-copy">
      <p className="eyebrow">Our leadership</p>
      <blockquote aria-label="Investing in people is the smartest business move of all." style={{ margin: "0 0 28px", fontFamily: "Fraunces, Georgia, serif", fontStyle: "italic", fontWeight: "300", fontSize: "clamp(30px, 3.4vw, 46px)", lineHeight: "1.12", letterSpacing: "-0.015em", color: "#063E4A", textIndent: "-0.42em" }}><span className="w" style={{ animationRange: "cover 12% cover 20%" }}>“Investing</span> <span className="w" style={{ animationRange: "cover 16% cover 24%" }}>in</span> <span className="w" style={{ animationRange: "cover 20% cover 28%" }}>people</span> <span className="w" style={{ animationRange: "cover 24% cover 32%" }}>is</span> <span className="w" style={{ animationRange: "cover 28% cover 36%" }}>the</span> <span className="w" style={{ animationRange: "cover 32% cover 40%" }}>smartest</span> <span className="w" style={{ animationRange: "cover 36% cover 44%" }}>business</span> <span className="w" style={{ animationRange: "cover 40% cover 48%" }}>move</span> <span className="w" style={{ animationRange: "cover 44% cover 52%" }}>of</span> <span className="w" style={{ animationRange: "cover 48% cover 56%" }}>all.”</span></blockquote>
      <h2 style={{ margin: "0 0 20px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "32px", lineHeight: "1.15", color: "#063E4A" }}>Every engagement, led by Shirley Bartley.</h2>
      <p style={{ margin: "0 0 16px", maxWidth: "34em", color: "#3E4F53" }}>Human Resource Productivity Partners, International is a registered HR consulting practice based in Kingston. We partner with organizations to build stronger, more capable and more human centred workplaces.</p>
      <p style={{ margin: "0 0 32px", maxWidth: "34em", color: "#3E4F53" }}>Shirley is an Accredited Business Communicator (IABC), among the first Jamaicans to hold the designation, with an MBA and senior roles at Scotiabank and the Ministry of National Security and Justice behind every project.</p>
      <Link className="btn btn-line" to="/contacts">Talk to Shirley<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
    </div>
    </div>
  </section>

  {/* Insights */}
  <section id="insights" className="wrap sec" style={{ paddingTop: "104px", paddingBottom: "112px" }}>
    <div className="ins-head" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px", marginBottom: "44px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px 48px" }}>
        <div>
          <p className="eyebrow">Ideas. Resources. Perspectives.</p>
          <h2 className="h2big" style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "54px", lineHeight: "1", letterSpacing: "-0.02em", color: "#063E4A" }}>Insights</h2>
        </div>
        <p style={{ margin: "0 0 6px", maxWidth: "26em", fontSize: "14.5px", color: "#5A686B" }}>Practical ideas and resources to help you build stronger teams and more resilient organizations across the Caribbean.</p>
      </div>
      <Link className="pill" to="/insights">View all insights<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
    </div>
    <div className="ins-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "24px" }}>
      <Link className="ins-card rev" to="/insights/future-of-work-caribbean"><div className="ph"><div><img src="/assets/305fca0a91a3332e30d5d66832dd1957_392x261.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div><span className="tag">People and culture</span></div><div style={{ padding: "30px 22px 22px", display: "flex", flexDirection: "column", flex: "1" }}><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "21px", lineHeight: "1.25", color: "#063E4A" }}>The future of work in the Caribbean</span><span style={{ display: "block", margin: "10px 0 18px", fontSize: "14px", color: "#5A686B" }}>Why the region's job losses point to productivity, not automation.</span><span className="more">Read more<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></span></div></Link>
      <Link className="ins-card rev" to="/insights/boost-employee-engagement"><div className="ph"><div><img src="/assets/2c555ad8375e98a3229a69057a87b7d4_378x252.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div><span className="tag">Leadership</span></div><div style={{ padding: "30px 22px 22px", display: "flex", flexDirection: "column", flex: "1" }}><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "21px", lineHeight: "1.25", color: "#063E4A" }}>Five ways to boost employee engagement</span><span style={{ display: "block", margin: "10px 0 18px", fontSize: "14px", color: "#5A686B" }}>Practical steps that make a real difference, most of which need no budget.</span><span className="more">Read more<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></span></div></Link>
      <Link className="ins-card rev" to="/insights/hr-automation-guide-smbs"><div className="ph"><div><img src="/assets/2a474ae2cafb1b462795c8138c8a50c4_392x261.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div><span className="tag">HR technology</span></div><div style={{ padding: "30px 22px 22px", display: "flex", flexDirection: "column", flex: "1" }}><span style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "21px", lineHeight: "1.25", color: "#063E4A" }}>HR automation: a practical guide for small and medium businesses</span><span style={{ display: "block", margin: "10px 0 18px", fontSize: "14px", color: "#5A686B" }}>How the right tools save time and improve decision making.</span><span className="more">Read more<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></span></div></Link>
    </div>
    <div className="swipe"><span>Swipe for more</span><Link to="/insights">View all insights</Link></div>
  </section>

  {/* Call to action */}
  <section id="contact" className="cta">
    <div className="cta-bg" aria-hidden="true"><img src="/assets/hrppi/cta-landscape.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "70% 60%" }} /></div>
    <div className="wrap sec" style={{ position: "relative", paddingTop: "104px", paddingBottom: "96px" }}>
      <p className="eyebrow light">Let's build what's next.</p>
      <h2 className="h2big" style={{ margin: "0 0 22px", maxWidth: "13ch", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(42px, 5.4vw, 72px)", lineHeight: "1.02", letterSpacing: "-0.025em", color: "#FFFFFF" }}>Tell us what you are <em style={{ fontStyle: "italic", color: "#E7B48F" }}>working on.</em></h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 64px", alignItems: "flex-end", justifyContent: "space-between" }}>
        <p style={{ margin: "0", maxWidth: "30em", color: "#C9D8DA" }}>Every enquiry is read by Shirley and answered within one business day. Tell us about your goals, your team and the challenges you are facing.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 28px", alignItems: "center" }}>
          <Link className="btn btn-white" to="/contacts">Book a consultation<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
          <a href="mailto:Hrproductivitypartner@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#FFFFFF", fontSize: "14.5px", textDecoration: "none", borderBottom: "1px solid rgba(255, 255, 255, 0.4)", paddingBottom: "3px", wordBreak: "break-all" }}>Hrproductivitypartner@gmail.com<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M2 7h10M8 3l4 4-4 4"></path></svg></a>
        </div>
      </div>
    </div>
  </section>

    </div>
  );
};
