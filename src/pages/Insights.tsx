import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { longDate, readTime } from "@/pages/Article";
import "@/styles/pages/insights.css";

/** Every article, newest first: the lead runs large, the rest as rows. */
export const Insights = () => {
  const [lead, ...rest] = articles;

  return (
    <div className="pg-insights">
      <section className="ins-intro">
        <div className="ins-wrap ins-intro__inner">
          <h1>
            <span className="line"><span>Ideas for a stronger</span></span>
            <span className="line"><span style={{ animationDelay: ".12s" }}><em>tomorrow.</em></span></span>
          </h1>
          <p className="fade">
            Practical thinking on people, work and the future of HR in the Caribbean. Written by us, for the people
            who have to make it work on Monday morning.
          </p>
        </div>
      </section>

      <section className="ins-wrap ins-list">
        {lead && (
          <Link to={`/insights/${lead.slug}`} className="ins-lead">
            <div className="ph">
              <img src={lead.image} alt={lead.imageAlt} />
            </div>
            <div>
              <span className="meta">{longDate(lead.iso)}, {readTime(lead.readingTime)}</span>
              <span className="t">{lead.title}</span>
              <span className="sf">{lead.standfirst}</span>
              <span className="more">Read the piece</span>
            </div>
          </Link>
        )}

        {rest.map((a) => (
          <Link key={a.slug} to={`/insights/${a.slug}`} className="ins-row">
            <div className="ph">
              <img src={a.thumb} alt="" />
            </div>
            <div>
              <span className="meta">{longDate(a.iso)}, {readTime(a.readingTime)}</span>
              <span className="t">{a.title}</span>
              <span className="sf">{a.standfirst}</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
