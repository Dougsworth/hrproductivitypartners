import { Fragment } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getArticle, articles } from "@/data/articles";
import { director } from "@/data/site";
import "@/styles/pages/article.css";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-08-28" → "28 August 2026" */
export const longDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

/** "6 min read" → "6 minute read" */
export const readTime = (t: string) => t.replace(/\bmin\b/, "minute");

/** Set the last word of a title in the italic accent. */
const AccentTitle = ({ title }: { title: string }) => {
  const i = title.lastIndexOf(" ");
  if (i < 0) return <>{title}</>;
  return (
    <>
      {title.slice(0, i + 1)}
      <em style={{ fontStyle: "italic", color: "#B34A10" }}>{title.slice(i + 1)}</em>
    </>
  );
};

/** A list item that opens with a short label ("Rework. Work that…") gets the label set bold. */
const ListItem = ({ text }: { text: string }) => {
  const m = text.match(/^([^.]{2,40})\.\s(.+)$/);
  if (m && m[1].split(" ").length <= 5) {
    return (
      <li>
        <strong style={{ fontWeight: 500 }}>{m[1]}.</strong> {m[2]}
      </li>
    );
  }
  return <li>{text}</li>;
};

export const Article = () => {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <Navigate to="/insights" replace />;

  const others = articles.filter((a) => a.slug !== article.slug);
  // The pull quote sits after the first paragraph of the first titled section.
  const pullAt = article.body.findIndex((b) => b.heading);
  let firstPara = true;

  return (
    <div className="pg-article" style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", color: "#0E2F37", background: "#FAF8F4", fontSize: "17px", lineHeight: "1.6", WebkitFontSmoothing: "antialiased" }}>
      <div className="progress" aria-hidden="true" />
      <article>
        <div className="sec" style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 24px 56px" }}>
          <Link className="textlink fade" to="/insights" style={{ fontSize: "15px" }}>All insights</Link>
          <h1 className="fade f2" style={{ margin: "40px 0 28px", fontFamily: "Fraunces, Georgia, serif", fontWeight: 300, fontSize: "clamp(42px, 6vw, 84px)", lineHeight: 1.02, letterSpacing: "-0.025em", color: "#063E4A" }}>
            <AccentTitle title={article.title} />
          </h1>
          <p className="fade f3" style={{ margin: "0 0 32px", maxWidth: "34em", fontFamily: "Fraunces, Georgia, serif", fontWeight: 300, fontSize: "clamp(21px, 2vw, 26px)", lineHeight: 1.45, color: "#3E4F53" }}>
            {article.standfirst}
          </p>
          <div className="fade f3" style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", alignItems: "center", paddingTop: "20px", borderTop: "1px solid #E2DDD3", fontSize: "14px", color: "#5A686B" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0E2F37" }}>
              <img src={director.photo} alt="" width={32} height={32} style={{ display: "block", width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 15%" }} />
              {director.name}
            </span>
            <time dateTime={article.iso}>{longDate(article.iso)}</time>
            <span>{readTime(article.readingTime)}</span>
          </div>
        </div>

        <figure style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="heroimg" style={{ aspectRatio: "21 / 9", overflow: "hidden", background: "#E9E4DA" }}>
            <img src={article.image} alt={article.imageAlt} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          </div>
        </figure>

        <div className="prose" style={{ maxWidth: "680px", margin: "0 auto", padding: "72px 24px 32px", fontFamily: "Fraunces, Georgia, serif", fontWeight: 300, fontSize: "20px", lineHeight: 1.68, color: "#1E3A42", fontVariationSettings: "'opsz' 18" }}>
          {article.body.map((block, bi) => (
            <Fragment key={bi}>
              {block.heading && <h2>{block.heading}</h2>}
              {block.paras?.map((p, pi) => {
                const drop = firstPara;
                firstPara = false;
                return (
                  <Fragment key={pi}>
                    <p className={drop ? "drop" : undefined}>{p}</p>
                    {bi === pullAt && pi === 0 && article.pull && (
                      <blockquote className="pull">{article.pull}</blockquote>
                    )}
                  </Fragment>
                );
              })}
              {block.list && (
                <ul>
                  {block.list.map((li, i) => <ListItem key={i} text={li} />)}
                </ul>
              )}
            </Fragment>
          ))}
        </div>

        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "24px 24px 96px" }}>
          {article.sources && article.sources.length > 0 && (
            <div style={{ borderTop: "1px solid #E2DDD3", paddingTop: "24px", fontSize: "14px", color: "#5A686B" }}>
              <p style={{ margin: "0 0 10px", color: "#0E2F37", fontWeight: 500 }}>Sources</p>
              <ol style={{ margin: 0, paddingLeft: "20px", listStyle: "decimal", display: "flex", flexDirection: "column", gap: "6px" }}>
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a className="textlink" href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px" }}>{s.label.replace(" — ", ", ")}</a>
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "48px", padding: "28px 0", borderTop: "1px solid #063E4A", borderBottom: "1px solid #E2DDD3" }}>
            <img src={director.photo} alt="" width={72} height={72} style={{ display: "block", width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 15%", flex: "none" }} />
            <div>
              <p style={{ margin: "0 0 4px", fontFamily: "Fraunces, Georgia, serif", fontSize: "21px", color: "#063E4A" }}>{director.name}</p>
              <p style={{ margin: 0, fontSize: "15px", color: "#4A5A5E" }}>CEO of HRPPI. Former senior internal communications manager at Scotiabank and ten years as Director of Public Relations at the Ministry of National Security and Justice.</p>
            </div>
          </div>
        </div>
      </article>

      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2DDD3" }}>
        <div className="sec" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "16px", marginBottom: "40px" }}>
            <h2 style={{ margin: 0, fontFamily: "Fraunces, Georgia, serif", fontWeight: 300, fontSize: "44px", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#063E4A" }}>Keep reading</h2>
            <Link className="textlink" to="/insights" style={{ fontSize: "16px" }}>All insights</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px 40px" }}>
            {others.map((o) => (
              <Link key={o.slug} className="card" to={`/insights/${o.slug}`} style={{ textDecoration: "none", color: "#0E2F37", display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div className="ph" style={{ flex: "0 0 200px", aspectRatio: "3 / 2", background: "#E9E4DA" }}>
                  <img src={o.thumb} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <span style={{ display: "block", fontSize: "14px", color: "#5A686B", marginBottom: "8px" }}>{longDate(o.iso)}, {readTime(o.readingTime)}</span>
                  <span className="t" style={{ display: "block", fontFamily: "Fraunces, Georgia, serif", fontSize: "24px", lineHeight: 1.25, color: "#063E4A" }}>{o.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
