import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { AccentWord } from "@/components/AccentWord";

type ShellHeroProps = {
  eyebrow: string;
  /** Headline text before the accented word. */
  titleLead: string;
  /** The word that gets the hand-drawn underline. Optional. */
  titleAccent?: string;
  /** Punctuation that follows the accent word, e.g. "." */
  titleTail?: string;
  blurb?: ReactNode;
  image: string;
  imageAlt: string;
  /** Anything that sits under the blurb — links, meta, buttons. */
  children?: ReactNode;
  /** A shorter band for secondary views like an article. */
  compact?: boolean;
};

/**
 * Every view opens on the same band: eyebrow rule, serif headline with one
 * word underlined by hand, a line of plain English, then a photo whose left
 * edge dissolves into the paper. Only the words and the photograph change
 * between views, which is what makes swapping content feel like the same
 * site turning its head rather than a different page loading.
 */
export const ShellHero = ({
  eyebrow,
  titleLead,
  titleAccent,
  titleTail = ".",
  blurb,
  image,
  imageAlt,
  children,
  compact = false,
}: ShellHeroProps) => (
  <section className="shell-hero relative bg-sand pt-[var(--header-h)]">
    <div className="grid items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      <div
        className={`flex flex-col justify-center px-6 sm:px-10 lg:pl-[max(1.5rem,calc((100vw-82.5rem)/2+2.5rem))] lg:pr-16 ${
          compact ? "py-8 sm:py-10 lg:py-14" : "py-10 sm:py-12 lg:py-16"
        }`}
      >
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-ember" aria-hidden />
            <span className="text-eyebrow font-semibold uppercase text-ink/75">
              {eyebrow}
            </span>
          </div>

          <h1
            className={`mt-5 font-display font-bold tracking-tight text-deep ${
              compact ? "text-fluid-h2" : "text-fluid-h1"
            }`}
          >
            {titleLead}
            {titleAccent ? (
              <>
                {" "}
                <AccentWord className="text-ember-ink" delay={450}>
                  {titleAccent}
                </AccentWord>
              </>
            ) : null}
            {titleTail}
          </h1>

          {blurb ? (
            <p className="mt-6 max-w-prose text-fluid-lead text-ink/75">{blurb}</p>
          ) : null}

          {children}
        </Reveal>
      </div>

      {/* A fixed pixel height crops differently on every phone; an aspect
          ratio keeps the same picture on all of them. Beside the copy from
          lg up, the column's own height takes over again. */}
      <div
        className={`photo-fade relative overflow-hidden ${
          compact
            ? "aspect-[16/9] lg:aspect-auto lg:min-h-[380px]"
            : "aspect-[4/3] lg:aspect-auto lg:min-h-[460px]"
        }`}
      >
        <img src={image} alt={imageAlt} className="h-full w-full object-cover object-center" />
      </div>
    </div>
  </section>
);
