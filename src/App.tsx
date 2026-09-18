import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  type Location,
} from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileDock } from "@/components/MobileDock";
import { Home } from "@/pages/Home";
import { Resources } from "@/pages/Resources";
import { Contact } from "@/pages/Contact";
import { Article } from "@/pages/Article";
import { Insights } from "@/pages/Insights";

/** How long the outgoing view takes to clear. Matches .view-leave in CSS. */
const EXIT_MS = 190;

/** Spoken when the view swaps, so the change is not silent. */
const routeTitle = (pathname: string) => {
  if (pathname === "/") return "Home";
  if (pathname.startsWith("/insights/")) return "Article";
  if (pathname.startsWith("/insights")) return "Insights";
  if (pathname.startsWith("/contacts")) return "Contact";
  if (pathname.startsWith("/resources")) return "Resources";
  return "Page";
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The shell — header, footer, paper ground — never unmounts. Only the
 * contents of <main> are swapped, and they are swapped deliberately: the
 * outgoing view lifts and fades, then the incoming one settles in from
 * below. The URL is still real, so every view is linkable and crawlable;
 * it just never feels like the browser threw the page away and rebuilt it.
 */
const SwappingViews = () => {
  const location = useLocation();
  const [shown, setShown] = useState<Location>(location);
  const [leaving, setLeaving] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    // Same view, different hash (Home → /#about): no swap, just scroll.
    if (location.pathname === shown.pathname) {
      if (location !== shown) setShown(location);
      return;
    }
    if (prefersReducedMotion()) {
      setShown(location);
      return;
    }
    setLeaving(true);
    const t = window.setTimeout(() => {
      setShown(location);
      setLeaving(false);
    }, EXIT_MS);
    return () => window.clearTimeout(t);
  }, [location, shown]);

  // Scroll is tied to the view that is actually on screen, not to the URL,
  // so the jump happens under cover of the fade rather than mid-animation.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      if (!shown.hash) return;
    }
    if (shown.hash) {
      const el = document.getElementById(shown.hash.slice(1));
      if (el) {
        const t = window.setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          60,
        );
        return () => window.clearTimeout(t);
      }
    }
    window.scrollTo(0, 0);
  }, [shown]);

  return (
    <>
      {/* A one-line announcement so assistive tech is told the view
          changed. The container itself is never a live region — that
          would re-read the whole page on every swap. */}
      <p className="sr-only" role="status" aria-live="polite">
        {routeTitle(shown.pathname)}
      </p>
      <div key={shown.pathname} className={leaving ? "view-leave" : "view-enter"}>
        <Routes location={shown}>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      {/* dvh rather than vh: on a phone, vh is measured against the browser
          chrome's collapsed state, so a 100vh shell overflows by the height
          of the address bar until you scroll. */}
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <SwappingViews />
        </main>
        <Footer />
        <MobileDock />
      </div>
    </BrowserRouter>
  );
};
