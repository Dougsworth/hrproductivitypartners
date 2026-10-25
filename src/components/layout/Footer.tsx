import { Link } from "react-router-dom";
import { site } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>{site.name}. Kingston, Jamaica.</p>
        <nav aria-label="Footer" className="site-footer__nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contacts">Contact</Link>
        </nav>
        <p>© {new Date().getFullYear()} HRPPI</p>
      </div>
    </footer>
  );
};
