export const ASSETS = "/assets";

export const site = {
  name: "Human Resource Productivity Partner, International",
  shortName: "HRPPI",
  brand: "#144355",
  tagline: "We make your people our business.",
  location: "Kingston, Jamaica",
  email: "info@hrproductivitypartner.com",
  phone: "+1 (876) 000-0000",
  logo: `${ASSETS}/d6387f063fe2b8fffcfe29490c918341_150x150.png`,
  // Branded banner — diverse team in office beneath the HRPPI wall logo
  heroImage: `${ASSETS}/hrppi-banner.png`,
  introImage:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
  ctaImage:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contacts", to: "/contacts" },
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
  attribution: "Human Resource Productivity Partner, International",
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
  title: string;
  blurb: string;
  details: string[];
  image: string;
};

export const services: Service[] = [
  {
    title: "HR Systems Design, Sourcing & Implementation",
    blurb:
      "Human resource management systems, learning management systems and performance management systems — selected and implemented for the way you work.",
    details: [
      "Human resource management systems (HRMS)",
      "Learning management systems (LMS)",
      "Performance management systems",
    ],
    image: `${ASSETS}/4cfb5c35398df23c99491f75f37c1c47_378x252.jpg`,
  },
  {
    title: "Learning & Talent Development",
    blurb:
      "Learning, re-learning, upskilling, career pathing and performance management that grows your people and your leaders.",
    details: [
      "Upskilling, re-learning and career pathing",
      "People leader development & communication",
      "Change leadership and leading through crisis",
      "Building a successful leadership band",
    ],
    image: `${ASSETS}/2c555ad8375e98a3229a69057a87b7d4_378x252.jpg`,
  },
  {
    title: "Organizational Change",
    blurb:
      "Change policy design and implementation, change management and sustainment that makes transitions stick.",
    details: [
      "Change policy design & implementation",
      "Change management",
      "Change sustainment",
    ],
    image: `${ASSETS}/c563674674b60f43b50fe92173e4c7c9_392x261.jpg`,
  },
  {
    title: "Employee Engagement",
    blurb:
      "Conflict resolution, employment branding, and internal communication that keep your people connected and committed.",
    details: [
      "Employee conflict resolution & engagement",
      "Employment branding events and activities",
      "Internal communication policy & channel design",
    ],
    image: `${ASSETS}/305fca0a91a3332e30d5d66832dd1957_392x261.jpg`,
  },
  {
    title: "Organizational Culture",
    blurb:
      "Design, entrenchment and sustainment of a culture that reflects who you are and where you're going.",
    details: ["Culture design", "Culture entrenchment", "Culture sustainment"],
    image: `${ASSETS}/2a474ae2cafb1b462795c8138c8a50c4_392x261.jpg`,
  },
];
