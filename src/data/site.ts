export const ASSETS = "/assets";

export const site = {
  name: "Human Resource Productivity Partners, International",
  shortName: "HRPPI",
  brand: "#144355",
  tagline: "We make your people our business.",
  location: "Kingston, Jamaica",
  email: "info@hrproductivitypartner.com",
  phone: "+1 (876) 000-0000",
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
  { label: "Resources", to: "/resources" },
  { label: "Contacts", to: "/contacts" },
];

export const resources = [
  {
    icon: "strategy",
    tag: "Free assessment",
    title: "HR Health Check",
    body: "A quick self-assessment to see where your people practices are strong — and where the gaps are costing you.",
    cta: "Request the assessment",
  },
  {
    icon: "talent",
    tag: "Checklist",
    title: "New-Hire Onboarding Checklist",
    body: "Everything a great first 30 days should include, so new people get productive faster and stay longer.",
    cta: "Get the checklist",
  },
  {
    icon: "change",
    tag: "Guide",
    title: "Manager's Guide to Tough Conversations",
    body: "A practical framework for feedback, conflict and performance chats your managers will actually use.",
    cta: "Get the guide",
  },
  {
    icon: "performance",
    tag: "Template",
    title: "Performance Review Template",
    body: "A clean, fair review template that ties individual goals to business outcomes — no jargon.",
    cta: "Get the template",
  },
  {
    icon: "engagement",
    tag: "Checklist",
    title: "Employee Engagement Starter Kit",
    body: "Simple, low-cost ways to lift morale and keep your best people — things you can start this week.",
    cta: "Get the starter kit",
  },
  {
    icon: "culture",
    tag: "Worksheet",
    title: "Define Your Company Values",
    body: "A guided worksheet to turn vague ideals into clear values your team can actually live by.",
    cta: "Get the worksheet",
  },
];

export const testimonials = [
  {
    quote:
      "HRPPI rebuilt our entire performance management approach. Within two quarters our managers were actually having the conversations that move the business.",
    name: "Operations Director",
    org: "Regional financial services firm",
  },
  {
    quote:
      "They didn't hand us a binder and leave — they embedded with our team and made the change stick. Our time-to-hire dropped noticeably.",
    name: "Head of People",
    org: "Growing logistics company",
  },
  {
    quote:
      "Practical, no jargon, and genuinely invested in our people. The culture work alone changed how our teams show up every day.",
    name: "Managing Director",
    org: "Professional services group",
  },
];

export const caseStudies = [
  {
    tag: "Talent & Recruiting",
    result: "30% faster time-to-hire",
    title: "Rebuilding a structured, bias-aware hiring process",
    body: "We redesigned the end-to-end recruiting workflow — from role scorecards to structured interviews — cutting time-to-hire while improving quality of hire.",
  },
  {
    tag: "Organizational Change",
    result: "90%+ adoption in 2 quarters",
    title: "A company-wide HR system rollout that actually stuck",
    body: "Sourcing, implementation and change management for a new HRMS — paired with leader enablement so the tools were adopted, not abandoned.",
  },
  {
    tag: "Culture & Engagement",
    result: "Measurable lift in engagement",
    title: "Turning values on the wall into daily behaviour",
    body: "We designed and entrenched a culture framework with feedback loops and manager coaching, moving culture from a poster to a practice.",
  },
];

export const stats = [
  { value: "15+", label: "Years of HR expertise" },
  { value: "5", label: "Core service areas" },
  { value: "100%", label: "Tailored to your business" },
  { value: "1", label: "Dedicated partner per client" },
];

export const whyUs = [
  {
    title: "Strategy that fits",
    body: "Built around your goals — never a generic template.",
  },
  {
    title: "A partner, not a vendor",
    body: "We embed with your team, not just hand over a binder.",
  },
  {
    title: "End-to-end people solutions",
    body: "Systems, learning, change and culture — all under one roof.",
  },
];

export const quote = {
  text: "Your human resource is your most valuable business asset. Our role is to make sure it fits the needs, goals, and aims of your business — and contributes directly to your bottom line.",
  attribution: "Human Resource Productivity Partners, International",
};

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We learn your business goals, assess your current workforce, and identify where HR can create the most value.",
  },
  {
    step: "02",
    title: "Design",
    body: "We design the systems, programs, and policies that align your people with where your business is headed.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "We implement, manage change, and embed the practices so improvements are sustained long after we start.",
  },
];

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  details: string[];
  image: string;
  icon: string;
  /** tailwind bg + text classes for the playful icon tile */
  tile: string;
};

export const services: Service[] = [
  {
    slug: "hr-systems",
    title: "HR Systems Setup",
    blurb:
      "We pick and set up the software that runs your HR — so hiring, payroll, reviews and training all live in one place instead of scattered spreadsheets.",
    details: [
      "Choose the right HR software for your size and budget",
      "Set up your employee records and onboarding system",
      "Install a tool to run staff training online",
      "Set up performance reviews and goal tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=80",
    icon: "systems",
    tile: "bg-[#144355] text-white",
  },
  {
    slug: "learning-talent",
    title: "Staff Training & Development",
    blurb:
      "We train your people and grow your managers — so your team keeps getting better and you build leaders from within instead of always hiring out.",
    details: [
      "Training programs to upskill your staff",
      "Clear career paths so people know how to grow",
      "Manager and leadership coaching",
      "Help leaders communicate and lead through change",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    icon: "growth",
    tile: "bg-[#f97316] text-white",
  },
  {
    slug: "organizational-change",
    title: "Managing Big Changes",
    blurb:
      "Restructuring, new systems, new leadership? We guide your team through the change so it actually lands — and doesn't fall apart after week two.",
    details: [
      "A clear plan for rolling out the change",
      "Communication so staff know what's happening and why",
      "Support for managers leading their teams through it",
      "Follow-up so the new way of working sticks",
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    icon: "change",
    tile: "bg-[#1b6b86] text-white",
  },
  {
    slug: "employee-engagement",
    title: "Keeping Staff Happy & Engaged",
    blurb:
      "We help your people feel valued and stay — through fair conflict handling, a workplace people are proud of, and communication that keeps everyone in the loop.",
    details: [
      "Fair, clear process for handling workplace conflict",
      "Build a reputation that attracts and keeps good staff",
      "Internal communication that actually reaches people",
      "Events and activities that boost team morale",
    ],
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
    icon: "engagement",
    tile: "bg-[#0d9488] text-white",
  },
  {
    slug: "organizational-culture",
    title: "Building Your Company Culture",
    blurb:
      "We help you define how your company actually works and feels — your values, your way of doing things — and make it real in everyday behaviour, not just a poster.",
    details: [
      "Define your company values and identity",
      "Turn those values into day-to-day habits",
      "Tools to keep the culture strong as you grow",
    ],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    icon: "culture",
    tile: "bg-[#7c3aed] text-white",
  },
];
