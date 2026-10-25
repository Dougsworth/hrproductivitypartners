import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "@/styles/pages/home.css";

/** Home page, following the approved mockup. Header and footer come from the shell. */
export const Home = () => {
  return (
    <div className="pg-home page" style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", color: "#0E2F37", background: "#FAF8F4", fontSize: "16px", lineHeight: "1.6", WebkitFontSmoothing: "antialiased", overflowX: "clip" }}>


  {/* Hero */}
  <section id="top" className="hero">
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <p className="eyebrow fade d0">People. Organizations. Caribbean. Global.</p>
        <h1 aria-label="Build a workplace people thrive in" style={{ margin: "0", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(44px, 4.6vw, 68px)", lineHeight: "1.02", letterSpacing: "-0.025em", color: "#063E4A" }}>
          <span className="line"><span>Build a workplace</span></span>
          <span className="line l2"><span>people <em className="slot" style={{ fontStyle: "italic", color: "#B34A10", position: "relative", whiteSpace: "nowrap", display: "inline-block", verticalAlign: "top" }}><span className="sizer" aria-hidden="true">belong in.</span><span className="prism"><span className="face f0" aria-hidden="true">thrive in.</span><span className="face f1" aria-hidden="true">grow in.</span><span className="face f2" aria-hidden="true">belong in.</span><span className="face f3" aria-hidden="true">stay in.</span></span><svg className="drawn" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", left: "0.04em", bottom: "-0.1em", width: "96%", height: "0.24em", overflow: "visible" }}><path pathLength="1" d="M4 16C70 7 150 5 296 11" fill="none" stroke="#B34A10" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path></svg></em></span></span>
        </h1>
        <p className="fade d1" style={{ margin: "26px 0 30px", maxWidth: "30em", fontSize: "17px", lineHeight: "1.6", color: "#3E4F53" }}>HR consulting from Kingston for organizations across Jamaica and the Caribbean. We strengthen your people, systems and leadership so the business performs and good people stay.</p>
        <div className="fade d2 stack" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <Link className="btn btn-dark" to="/contacts">Book a consultation</Link>
          <Link className="btn btn-line" to="/services">See our services</Link>
        </div>
      </div>
      <div className="hero-art">
        <img src="/assets/hrppi/team-banner-cutout.webp" alt="The HRPPI team smiling beside the HRPPI sign" width="1400" height="940" />
        <p className="note hero-note fade d3" aria-hidden="true" style={{ margin: "0" }}>Stronger people.<br />Brighter Caribbean.</p>
      </div>
    </div>
  </section>

  {/* Local expertise, global perspective */}
  <section id="about-hrppi" className="band">
    <div className="wrap band-grid">
      <div>
        <p className="eyebrow light">Local expertise. Global perspective.</p>
        <h2 className="h2big" style={{ margin: "0 0 24px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "clamp(40px, 4.6vw, 62px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#FFFFFF" }}>Caribbean organizations. <em style={{ fontStyle: "italic", color: "#E7B48F" }}>Global possibilities.</em></h2>
        <p style={{ margin: "0 0 32px", maxWidth: "28em", color: "#C9D8DA" }}>Rooted in the Caribbean and informed by global practice, we bring practical, people centred solutions that help businesses and communities thrive.</p>
        <a className="btn btn-white" href="#about">About HRPPI</a>
      </div>
      <ul className="why">
        <li><h3>Rooted in the Caribbean</h3><p>More than 20 years advising organizations across the region, from family businesses to government ministries.</p></li>
        <li><h3>Informed by global practice</h3><p>International standards and research, applied to the realities of how work gets done here.</p></li>
        <li><h3>Led by our CEO</h3><p>Every engagement is led personally by Shirley Bartley, with a hands on, client focused approach.</p></li>
      </ul>
    </div>
  </section>

  {/* How we help */}
  <section id="services" className="wrap help">
    <div className="help-head">
      <div className="help-text">
        <div>
          <p className="eyebrow">Practical solutions. Lasting impact.</p>
          <h2 className="h2big" style={{ margin: "0 0 18px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "54px", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#063E4A" }}>How we help</h2>
          <p style={{ margin: "0", maxWidth: "26em", fontSize: "17px", color: "#3E4F53" }}>From strategy to implementation, we support organizations at every stage of their people journey, with one partner from the first conversation to the results.</p>
        </div>
        <p className="note" style={{ margin: "0", fontSize: "25px", transform: "rotate(-3deg)", transformOrigin: "left" }}>Better people practices.<br />Stronger organizations.</p>
      </div>
      <div className="help-img uv">
        <img src="/assets/hrppi/consult-notes.jpg" alt="Two people taking notes in a meeting over coffee" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
      </div>
    </div>

    <div className="svc-list">
      <Link className="svc-row" to="/services#systems"><span className="t">HR systems and technology</span><span className="d">We select and implement HR software so hiring, payroll, reviews and reporting run from one place.</span><svg className="arrow" width="20" height="20" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-row" to="/services#training"><span className="t">Training and leadership development</span><span className="d">Programmes that build skills across your teams and prepare managers to lead with confidence.</span><svg className="arrow" width="20" height="20" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-row" to="/services#change"><span className="t">Organizational change</span><span className="d">Guidance through restructuring, mergers and new ways of working, with clear communication at every stage.</span><svg className="arrow" width="20" height="20" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-row" to="/services#engagement"><span className="t">Employee engagement and retention</span><span className="d">Practical strategies that help people feel valued, do their best work and choose to stay.</span><svg className="arrow" width="20" height="20" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
      <Link className="svc-row" to="/services#culture"><span className="t">Culture and values</span><span className="d">We help you define and embed your values and make them real in everyday decisions.</span><svg className="arrow" width="20" height="20" viewBox="0 0 14 14" fill="none" stroke="#B34A10" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"></path></svg></Link>
    </div>

    <div className="svc-acc">
      <details><summary>HR systems and technology<span className="pm" aria-hidden="true"></span></summary><div className="body">We select and implement HR software so hiring, payroll, reviews and reporting run from one place.<br /><Link className="textlink" to="/services#systems">How this works</Link></div></details>
      <details><summary>Training and leadership<span className="pm" aria-hidden="true"></span></summary><div className="body">Programmes that build skills across your teams and prepare managers to lead with confidence.<br /><Link className="textlink" to="/services#training">How this works</Link></div></details>
      <details><summary>Organizational change<span className="pm" aria-hidden="true"></span></summary><div className="body">Guidance through restructuring, mergers and new ways of working, with clear communication at every stage.<br /><Link className="textlink" to="/services#change">How this works</Link></div></details>
      <details><summary>Engagement and retention<span className="pm" aria-hidden="true"></span></summary><div className="body">Practical strategies that help people feel valued, do their best work and choose to stay.<br /><Link className="textlink" to="/services#engagement">How this works</Link></div></details>
      <details><summary>Culture and values<span className="pm" aria-hidden="true"></span></summary><div className="body">We help you define and embed your values and make them real in everyday decisions.<br /><Link className="textlink" to="/services#culture">How this works</Link></div></details>
    </div>

    <p className="unsure"><span>Not sure which one fits? Tell us the problem and Shirley will point you the right way.</span><Link className="textlink" to="/contacts">Ask Shirley</Link></p>
  </section>

  {/* Leadership */}
  <section id="about" className="lead">
    <div className="wrap lead-grid">
      <div className="lead-art uv">
        <img src="/assets/hrppi/shirley-bartley.jpg" alt="Shirley Bartley, CEO of HRPPI" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 12%" }} />
        <div className="lead-cap"><strong style={{ fontWeight: "600" }}>Shirley Bartley</strong><br /><span style={{ color: "#5A686B" }}>CEO, HRPPI</span></div>
        <p className="lead-mq" aria-hidden="true">“Investing in people is the smartest business move of all.”<span>Shirley Bartley, CEO</span></p>
      </div>
      <div className="lead-copy">
        <p className="eyebrow">Our leadership</p>
        <blockquote aria-label="Investing in people is the smartest business move of all." style={{ margin: "0 0 28px", fontFamily: "Fraunces, Georgia, serif", fontStyle: "italic", fontWeight: "300", fontSize: "clamp(30px, 3.4vw, 46px)", lineHeight: "1.12", letterSpacing: "-0.015em", color: "#063E4A", textIndent: "-0.42em" }}><span className="w" style={{ animationRange: "cover 12% cover 20%" }}>“Investing</span> <span className="w" style={{ animationRange: "cover 16% cover 24%" }}>in</span> <span className="w" style={{ animationRange: "cover 20% cover 28%" }}>people</span> <span className="w" style={{ animationRange: "cover 24% cover 32%" }}>is</span> <span className="w" style={{ animationRange: "cover 28% cover 36%" }}>the</span> <span className="w" style={{ animationRange: "cover 32% cover 40%" }}>smartest</span> <span className="w" style={{ animationRange: "cover 36% cover 44%" }}>business</span> <span className="w" style={{ animationRange: "cover 40% cover 48%" }}>move</span> <span className="w" style={{ animationRange: "cover 44% cover 52%" }}>of</span> <span className="w" style={{ animationRange: "cover 48% cover 56%" }}>all.”</span></blockquote>
        <h2 style={{ margin: "0 0 20px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", fontSize: "32px", lineHeight: "1.15", color: "#063E4A" }}>Every engagement, led by Shirley Bartley.</h2>
        <p style={{ margin: "0 0 16px", maxWidth: "34em", color: "#3E4F53" }}>Human Resource Productivity Partners, International is a registered HR consulting practice based in Kingston. We partner with organizations to build stronger, more capable and more human centred workplaces.</p>
        <p style={{ margin: "0 0 32px", maxWidth: "34em", color: "#3E4F53" }}>Shirley is an Accredited Business Communicator (IABC), among the first Jamaicans to hold the designation, with an MBA and senior roles at Scotiabank and the Ministry of National Security and Justice behind every project.</p>
        <Link className="btn btn-line" to="/contacts">Talk to Shirley</Link>
      </div>
    </div>
  </section>

  {/* Insights */}
  <section id="insights" className="wrap sec" style={{ paddingTop: "104px", paddingBottom: "112px" }}>
    <div className="ins-head" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px", marginBottom: "48px" }}>
      <div>
        <p className="eyebrow">Ideas. Resources. Perspectives.</p>
        <h2 className="h2big" style={{ margin: "0 0 14px", fontFamily: "Fraunces, Georgia, serif", fontWeight: "300", fontSize: "54px", lineHeight: "1", letterSpacing: "-0.02em", color: "#063E4A" }}>Insights</h2>
        <p style={{ margin: "0", maxWidth: "30em", fontSize: "15.5px", color: "#5A686B" }}>Practical ideas to help you build stronger teams and more resilient organizations across the Caribbean.</p>
      </div>
      <Link className="textlink" to="/insights" style={{ fontSize: "15px" }}>View all insights</Link>
    </div>
    <div className="ins-grid">
      <Link className="ins big" to="/insights/future-of-work-caribbean"><span className="ph"><img src="/assets/305fca0a91a3332e30d5d66832dd1957_392x261.jpg" alt="" /></span><span className="tg">People and culture</span><span className="tt">The future of work in the Caribbean</span><span className="sf">Why the region's job losses point to productivity, not automation, and what that means for the people you lead.</span></Link>
      <Link className="ins small" to="/insights/boost-employee-engagement"><span className="ph"><img src="/assets/2c555ad8375e98a3229a69057a87b7d4_378x252.jpg" alt="" /></span><span><span className="tg">Leadership</span><span className="tt">Five ways to boost employee engagement</span><span className="sf">Practical steps that make a real difference, most of which need no budget.</span></span></Link>
      <Link className="ins small" to="/insights/hr-automation-guide-smbs"><span className="ph"><img src="/assets/2a474ae2cafb1b462795c8138c8a50c4_392x261.jpg" alt="" /></span><span><span className="tg">HR technology</span><span className="tt">HR automation: a practical guide for small and medium businesses</span><span className="sf">How the right tools save time and improve decision making.</span></span></Link>
    </div>
    <div className="swipe"><span>Swipe for more</span><Link className="textlink" to="/insights">View all</Link></div>
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
          <Link className="btn btn-white" to="/contacts">Book a consultation</Link>
          <a href="mailto:Hrproductivitypartner@gmail.com" style={{ color: "#FFFFFF", fontSize: "15px", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "6px", textDecorationColor: "rgba(255, 255, 255, 0.45)", wordBreak: "break-all" }}>Hrproductivitypartner@gmail.com</a>
        </div>
      </div>
    </div>
  </section>
      {/* The phone booking bar lives on <body> so page transitions can't break its fixed position. */}
      {createPortal(<div className="pg-home-dock"><div className="dock" role="region" aria-label="Quick contact">
    <Link className="btn btn-white" to="/contacts">Book a consultation</Link>
    <a className="mail" href="mailto:Hrproductivitypartner@gmail.com" aria-label="Email HRPPI"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3.5 6.5l8.5 6.5 8.5-6.5"></path></svg></a>
  </div></div>, document.body)}
    </div>
  );
};
