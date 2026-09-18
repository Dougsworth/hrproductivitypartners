export const ASSETS = "/assets";
export const HRPPI_ICONS = `${ASSETS}/hrppi/icons`;
export const HRPPI_ART = `${ASSETS}/hrppi/graphics`;

export const site = {
  name: "Human Resource Productivity Partners, International",
  shortName: "HRPPI",
  brand: "#144355",
  tagline: "We make your people our business.",
  location: "Kingston, Jamaica",
  director: "Shirley Bartley",
  // TODO: switch to a professional domain email (e.g. hello@hrproductivitypartners.com)
  // once the mailbox is set up — see the "get contracts" plan.
  email: "Hrproductivitypartner@gmail.com",
  // TODO: replace with your real Calendly link
  calendly: "https://calendly.com/hrppi/intro-call",
  logo: `${ASSETS}/d6387f063fe2b8fffcfe29490c918341_150x150.png`,
  // Branded banner — diverse team in office beneath the HRPPI wall logo
  heroImage: `${ASSETS}/hrppi-banner-v2.png`,
  introImage: `${ASSETS}/intro-meeting.png`,
  ctaImage:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contacts" },
];

export const resources = [
  {
    icon: "strategy",
    tag: "Toolkit",
    title: "HR Health Check",
    body: "A 20-point self-assessment with a scoring guide and a priority-action planner, so you can see exactly where your people practices are costing you time, money and talent.",
    meta: "Toolkit · 6 pages",
    file: `${ASSETS}/resources/hr-health-check.pdf`,
    gated: true,
  },
  {
    icon: "change",
    tag: "Playbook",
    title: "Manager's Guide to Tough Conversations",
    body: "A complete manager playbook with a prep worksheet, the 4-A conversation framework, ready-to-use scripts for six common situations, and follow-up templates.",
    meta: "Playbook · 7 pages",
    file: `${ASSETS}/resources/tough-conversations-guide.pdf`,
    gated: true,
  },
  {
    icon: "performance",
    tag: "Template",
    title: "Performance Review Toolkit",
    body: "A ready-to-use review template with a manager rating rubric, a goal-setting framework, and a self-review form your team can put to work straight away.",
    meta: "Template · 6 pages",
    file: `${ASSETS}/resources/performance-review-template.pdf`,
    gated: true,
  },
  {
    icon: "talent",
    tag: "Checklist",
    title: "New-Hire Onboarding Checklist",
    body: "Everything a strong first 30 days should cover, so new people get productive faster and are far more likely to stay.",
    meta: "Checklist",
    file: `${ASSETS}/resources/onboarding-checklist.pdf`,
    gated: false,
  },
  {
    icon: "engagement",
    tag: "Checklist",
    title: "Employee Engagement Starter Kit",
    body: "Practical, low-cost ways to lift morale and keep your best people, most of which you can start this week.",
    meta: "Checklist",
    file: `${ASSETS}/resources/engagement-starter-kit.pdf`,
    gated: false,
  },
  {
    icon: "culture",
    tag: "Worksheet",
    title: "Define Your Company Values",
    body: "A guided worksheet that turns vague ideals into clear values your team can actually live by.",
    meta: "Worksheet",
    file: `${ASSETS}/resources/company-values-worksheet.pdf`,
    gated: false,
  },
];

/**
 * Why-HRPPI pillars. Framed as strengths, not raw counts —
 * small numbers ("5 services", "1 partner") read as weaknesses when
 * displayed as big stats, so only genuinely impressive figures stay numeric.
 */
export const pillars = [
  {
    icon: "performance",
    title: "15+ years",
    body: "of senior HR expertise behind every engagement",
  },
  {
    icon: "talent",
    title: "Director-led",
    body: "You work directly with the principal — never a junior team",
  },
  {
    icon: "strategy",
    title: "End-to-end",
    body: "From HR systems and training to culture and change",
  },
  {
    icon: "culture",
    title: "Zero templates",
    body: "Every solution is built around your business, not a binder",
  },
];

/**
 * Director profile — E-E-A-T / credibility signals.
 * All credentials below are on the public record; add or refine as needed.
 */
export const director = {
  name: "Shirley Bartley",
  role: "CEO",
  photo: `${ASSETS}/hrppi/shirley-bartley.jpg`,
  photoAlt:
    "Shirley Bartley, CEO of Human Resource Productivity Partners International, Kingston, Jamaica",
  summary:
    "Shirley leads every HRPPI engagement personally, bringing internationally accredited expertise and decades of senior corporate and government experience to your organization.",
  credentials: [
    "Accredited Business Communicator (ABC), IABC — among the first Jamaicans to earn the designation",
    "MBA, Business Management",
    "Graduate of CARIMAC, University of the West Indies",
    "Former senior internal communications manager, Scotiabank (BNS)",
    "10 years as Director of Public Relations, Ministry of National Security & Justice",
  ],
};

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We get to know your business goals, take stock of your current team, and find where HR can add the most value.",
  },
  {
    step: "02",
    title: "Design",
    body: "We build the systems, programs and policies that line your people up with where your business is going.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "We put it in place, guide the change, and make the new ways of working stick well after we step back.",
  },
];

export type Service = {
  slug: string;
  /** Custom HRPPI vector icon from the brand asset pack. */
  art: string;
  title: string;
  blurb: string;
  details: string[];
  image: string;
  /** Descriptive, keyword-rich alt text for the service image (SEO/AEO) */
  imageAlt: string;
  icon: string;
  /** tailwind bg + text classes for the playful icon tile */
  tile: string;
};

export const services: Service[] = [
  {
    slug: "hr-systems",
    art: `${HRPPI_ICONS}/hr-automation.svg`,
    title: "HR Systems Setup",
    blurb:
      "We pick and set up the software that runs your HR, so hiring, payroll, reviews and training all live in one place instead of scattered spreadsheets.",
    details: [
      "Choose the right HR software for your size and budget",
      "Set up your employee records and onboarding system",
      "Install a tool to run staff training online",
      "Set up performance reviews and goal tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Consultant reviewing a cloud-based HR software dashboard used for payroll, onboarding and performance tracking in Kingston, Jamaica",
    icon: "systems",
    tile: "bg-[#144355] text-white",
  },
  {
    slug: "learning-talent",
    art: `${HRPPI_ICONS}/recruitment-talent.svg`,
    title: "Staff Training & Development",
    blurb:
      "We train your people and grow your managers, so your team keeps getting better and you build leaders from within instead of always hiring out.",
    details: [
      "Training programs to upskill your staff",
      "Clear career paths so people know how to grow",
      "Manager and leadership coaching",
      "Help leaders communicate and lead through change",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Team taking part in a staff training and leadership development workshop led by an HR consultant",
    icon: "growth",
    tile: "bg-[#f97316] text-white",
  },
  {
    slug: "organizational-change",
    art: `${HRPPI_ICONS}/leadership-change.svg`,
    title: "Managing Big Changes",
    blurb:
      "Restructuring, new systems, new leadership? We guide your team through the change so it actually lands and holds, instead of falling apart after week two.",
    details: [
      "A clear plan for rolling out the change",
      "Communication so staff know what's happening and why",
      "Support for managers leading their teams through it",
      "Follow-up so the new way of working sticks",
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Managers planning an organizational change and restructuring rollout around a boardroom table",
    icon: "change",
    tile: "bg-[#1b6b86] text-white",
  },
  {
    slug: "employee-engagement",
    art: `${HRPPI_ICONS}/employee-engagement.svg`,
    title: "Keeping Staff Happy & Engaged",
    blurb:
      "We help your people feel valued and stay, through fair conflict handling, a workplace people are proud of, and communication that keeps everyone in the loop.",
    details: [
      "Fair, clear process for handling workplace conflict",
      "Build a reputation that attracts and keeps good staff",
      "Internal communication that actually reaches people",
      "Events and activities that boost team morale",
    ],
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Happy, engaged employees collaborating in a positive workplace culture built on clear communication",
    icon: "engagement",
    tile: "bg-[#0d9488] text-white",
  },
  {
    slug: "organizational-culture",
    art: `${HRPPI_ICONS}/culture-design.svg`,
    title: "Building Your Company Culture",
    blurb:
      "We help you define how your company actually works and feels, your values and your way of doing things, then make it real in everyday behaviour rather than a poster on the wall.",
    details: [
      "Define your company values and identity",
      "Turn those values into day-to-day habits",
      "Tools to keep the culture strong as you grow",
    ],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Team workshop defining company values and organizational culture on a whiteboard",
    icon: "culture",
    tile: "bg-[#7c3aed] text-white",
  },
];

/* ============================================================
   2026 REFRESH — content for the redesigned home page.
   Everything below drives Home.tsx. Edit copy here, not in JSX.
   ============================================================ */

export const hero = {
  eyebrow: "People. Strategy. Progress.",
  /** The word set in italic ember inside the headline. */
  titleLead: "Build a workplace people",
  titleAccent: "thrive in",
  subtitle:
    "HR strategy, talent, technology and transformation for organizations across the Caribbean.",
  primaryCta: { label: "Book a Consultation", to: "/contacts" },
  secondaryCta: { label: "Explore Our Services", to: "/#services" },
  script: "Stronger People. Brighter Caribbean.",
  /** Named plainly, so a first-time visitor knows what is actually for sale. */
  offers: [
    "HR systems set up",
    "Staff training",
    "Change management",
    "Engagement & retention",
    "Culture design",
  ],
};

/**
 * Hero stat strip. These describe HRPPI itself — experience, reach and
 * scope — so they are defensible without client sign-off.
 */
export const heroStats = [
  { icon: "talent", value: "20+ Years", label: "Experience" },
  { icon: "strategy", value: "Caribbean", label: "Expertise" },
  { icon: "performance", value: "End-to-End", label: "HR Solutions" },
];

/** The three-up band on the deep teal panel. */
export const approach = {
  eyebrow: "Why HRPPI",
  titleLead: "Caribbean organizations.",
  titleAccent: "Global possibilities.",
  points: [
    {
      icon: "strategy",
      art: `${HRPPI_ICONS}/caribbean-focused.svg`,
      title: "Caribbean Focused",
      body: "Deep local understanding across the region.",
    },
    {
      icon: "performance",
      art: `${HRPPI_ICONS}/globally-informed.svg`,
      title: "Globally Informed",
      body: "Best practices from around the world.",
    },
    {
      icon: "talent",
      art: `${HRPPI_ICONS}/people-centered.svg`,
      title: "People Centered",
      body: "Real solutions for real people.",
    },
  ],
};

/**
 * ⚠️ RESULTS — PLACEHOLDER FIGURES.
 * These are the numbers from the design comp, NOT measured HRPPI outcomes.
 * Replace each one with a real, client-approved figure before this page is
 * published, or set `results.show = false` to hide the section entirely.
 * Publishing unverifiable performance claims on a registered consultancy's
 * site is a real liability — see the same warning in the old About block.
 */
export const results = {
  show: true,
  verified: false, // flip to true only when every stat below is real
  eyebrow: "Real Results",
  title: "Stronger people. Stronger businesses.",
  quote: "Investing in people is the smartest business move of all.",
  stats: [
    { value: "40%", label: "Faster hiring time" },
    { value: "60+", label: "Hours saved monthly" },
    { value: "95%", label: "Client satisfaction" },
  ],
};

export const insights = {
  eyebrow: "Insights",
  titleLead: "Ideas for a",
  titleRest: "stronger tomorrow.",
  body:
    "Practical insights, trends and perspectives on people, work and the future of HR in the Caribbean.",
  posts: [
    {
      date: "Aug 28, 2026",
      title: "The Future of Work in the Caribbean",
      to: "/insights/future-of-work-caribbean",
      image: `${ASSETS}/084932ea58bb34c01f9084a3e2a27d08.jpg`,
      imageAlt: "Palm trees against a Caribbean sky",
    },
    {
      date: "Aug 16, 2026",
      title: "5 Ways to Boost Employee Engagement",
      to: "/insights/boost-employee-engagement",
      image: `${ASSETS}/intro-meeting.png`,
      imageAlt: "Colleagues collaborating around a laptop in an office",
    },
    {
      date: "Aug 02, 2026",
      title: "HR Automation: A Practical Guide for SMBs",
      to: "/insights/hr-automation-guide-smbs",
      image: `${ASSETS}/1af8af7a40d7bb692ce8c1235b93a211.jpg`,
      imageAlt: "A tidy desk with a laptop and plants",
    },
  ],
};

export const closingCta = {
  eyebrow: "Let's build what's next",
  title: "Your next workplace transformation starts with a conversation.",
  cta: { label: "Let's Talk", to: "/contacts" },
  script: "People. Progress. Possibilities.",
};
