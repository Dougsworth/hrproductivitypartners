import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";

const links = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/#about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contacts" },
];

/** Which entry is current: matched on the path, so an article lights Insights. */
const useIsCurrent = () => {
  const { pathname } = useLocation();
  return (to: string) => {
    const path = to.split("#")[0];
    if (to.includes("#")) return false;
    return pathname === path || (path !== "/" && pathname.startsWith(path + "/"));
  };
};

export const Header = () => {
  const isCurrent = useIsCurrent();
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-brand">
            <img src={site.logo} alt="" width={40} height={40} />
            <span className="site-brand__text">
              <span className="site-brand__name">HRPPI</span>
              <span className="site-brand__tag">Human Resource Productivity<br />Partners, International</span>
            </span>
          </Link>
          <nav aria-label="Main" className="site-nav">
            <div className="site-nav__links">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`navlink${isCurrent(l.to) ? " on" : ""}`}
                  aria-current={isCurrent(l.to) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link to="/contacts" className="site-btn">
              Book a consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" /></svg>
            </Link>
          </nav>
        </div>
      </header>
      {/* On a phone the main links sit in a slim row under the header. */}
      <nav aria-label="Sections" className="site-mnav">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={isCurrent(l.to) ? "on" : undefined}
            aria-current={isCurrent(l.to) ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </>
  );
};
