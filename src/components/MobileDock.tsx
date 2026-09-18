import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";
import Icon from "@/components/Icon";

/** How far down the first screen you must be before the bar is any use. */
const HERO_FRACTION = 0.6;
/** Clearance kept under the footer, so the bar leaves before it collides. */
const FOOTER_MARGIN = 140;

/**
 * The two things a visitor on a phone actually wants, kept inside the
 * thumb's reach for the whole scroll.
 *
 * On a desktop the "Let's Talk" button is always a short mouse-move away in
 * the header. On a phone the header CTA is buried behind the menu button, so
 * by the second screen of a long page there is no way to act without
 * scrolling back. This bar is that way: a low-commitment email and the real
 * booking, side by side.
 *
 * It never speaks over the page. It waits until you are past the hero, stands
 * down whenever one of the page's own calls to action is on screen, and
 * retreats before the footer, whose links it would otherwise sit on top of.
 */
export const MobileDock = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  /**
   * Measured off the live geometry rather than tracked with an
   * IntersectionObserver: the service panel and every view are remounted as
   * you use the site, and an observer holds the elements it was handed at
   * setup, so it would quietly stop watching the buttons that matter.
   */
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const h = window.innerHeight;
      const pastHero = window.scrollY > h * HERO_FRACTION;

      const footer = document.querySelector("footer");
      const footerNear = footer
        ? footer.getBoundingClientRect().top < h + FOOTER_MARGIN
        : false;

      const ctaOnScreen = Array.from(
        document.querySelectorAll("[data-cta]"),
      ).some((el) => {
        const r = el.getBoundingClientRect();
        return r.bottom > 0 && r.top < h;
      });

      // On the contact page the whole view is this call to action.
      setShow(pastHero && !footerNear && !ctaOnScreen && pathname !== "/contacts");
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    schedule();
    // The view swaps a beat after the URL does, so the incoming view's
    // buttons are not in the document yet on the first pass.
    const settle = window.setTimeout(schedule, 300);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <div
      role="region"
      aria-label="Quick actions"
      className={`fixed inset-x-4 bottom-[calc(var(--safe-b)+0.75rem)] z-40 flex gap-1.5 rounded-full bg-deep/95 p-1.5 shadow-2xl shadow-deep/40 ring-1 ring-white/10 backdrop-blur transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:hidden ${
        show
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-[150%] opacity-0"
      }`}
    >
      <a
        href={`mailto:${site.email}`}
        className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full text-fluid-sm font-semibold text-white/90 transition-transform active:scale-95"
      >
        <Icon name="mail" className="h-[18px] w-[18px]" />
        Email us
      </a>
      <Link
        to="/contacts"
        className="flex min-h-[48px] flex-[1.35] items-center justify-center gap-2 rounded-full bg-ember text-fluid-sm font-bold text-ink transition-transform active:scale-95"
      >
        <Icon name="calendar" className="h-[18px] w-[18px]" />
        Book a call
      </Link>
    </div>
  );
};
