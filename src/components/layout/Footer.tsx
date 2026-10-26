import { Link } from "react-router-dom";
import { site } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <Link to="/" className="site-footer__brand">
            <img src={site.logo} alt="" width={40} height={40} />
            <span>
              <span className="site-footer__name">HRPPI</span>
              <span className="site-footer__tag">Human Resource Productivity<br />Partners, International</span>
            </span>
          </Link>
          <nav aria-label="Footer" className="site-footer__nav">
            <Link to="/services">Services</Link>
            <Link to="/#about">About</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contacts">Contact</Link>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Stronger people. Brighter Caribbean.</p>
        </div>
      </div>
    </footer>
  );
};
