const items = [
  "HR Strategy",
  "AI in HR",
  "Talent Development",
  "People Analytics",
  "Organizational Change",
  "AI-Powered Recruiting",
  "Employee Engagement",
  "Performance Management",
  "HR Automation",
  "Culture Design",
  "Leadership Coaching",
  "Change Management",
];

export const Marquee = () => {
  return (
    <div className="relative flex overflow-hidden border-y border-brand-700/40 bg-brand py-4 text-white">
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {items.concat(items).map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-lg font-medium tracking-tight text-white/90">
              {item}
            </span>
            <span className="text-accent-soft">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
