const MARQUEE_ITEMS = [
  "SaaS Platform",
  "Blockchain",
  "Web & Mobile App",
  "Motion Design",
  "UI/UX",
  "Branding",
  "Presentation",
  "Social Media & Ads",
];

export function Marquee({
  items = MARQUEE_ITEMS,
  className = "text-foreground",
  dotClassName = "bg-muted-foreground",
}: {
  items?: string[];
  className?: string;
  dotClassName?: string;
}) {
  return (
    <div className="overflow-hidden py-6">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {items.map((item, index) => (
              <span
                key={index}
                className={`mx-6 flex items-center gap-6 whitespace-nowrap text-sm font-medium tracking-wide sm:text-base ${className}`}
              >
                {item}
                <span className={`h-1.5 w-1.5 rotate-45 ${dotClassName}`} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
