type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  // intro feature row
  strategy: (
    <>
      <circle cx="12" cy="7" r="2.4" />
      <circle cx="5.5" cy="16" r="2.2" />
      <circle cx="18.5" cy="16" r="2.2" />
      <path d="M12 9.4v3M10 14l-3 1M14 14l3 1" />
    </>
  ),
  talent: (
    <>
      <circle cx="9" cy="8" r="2.6" />
      <path d="M4 19a5 5 0 0 1 10 0" />
      <path d="M15.5 6.5a2.4 2.4 0 0 1 0 4.6" />
      <path d="M16.5 14.2A4.8 4.8 0 0 1 20 19" />
    </>
  ),
  performance: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16v-3M12 16v-6M16 16V8" />
      <path d="M14.5 5.5 18 4l-.4 3.4" />
    </>
  ),

  // service tiles — clean line icons
  systems: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
      <path d="M7.5 8.5 9.5 10l-2 1.5M12.5 11.5H16" />
    </>
  ),
  growth: (
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 4h6v6" />
    </>
  ),
  change: (
    <>
      <path d="M20 11a8 8 0 0 0-14.3-4.5M4 5v3h3" />
      <path d="M4 13a8 8 0 0 0 14.3 4.5M20 19v-3h-3" />
    </>
  ),
  engagement: (
    <>
      <path d="M21 11.5a7.5 7.5 0 0 1-10.5 6.9L4 20l1.6-4.5A7.5 7.5 0 1 1 21 11.5z" />
      <path d="M9 11h.01M12.5 11h.01M16 11h.01" />
    </>
  ),
  culture: (
    <>
      <path d="M12 3l2.1 5.4L20 9l-4.2 3.6L17 18l-5-3-5 3 1.2-5.4L4 9l5.9-.6L12 3z" />
    </>
  ),
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.strategy}
    </svg>
  );
}
