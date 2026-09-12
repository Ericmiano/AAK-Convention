import { PARTNERS } from "@/lib/partners";

export function PartnersStrip() {
  return (
    <div>
      <p className="rule-label">Partners</p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {PARTNERS.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.name} (opens in a new tab)`}
            title={p.name}
            className={`lift group flex h-16 w-32 items-center justify-center rounded-sm border border-border bg-white p-3 transition-[filter,opacity] duration-500 ${
              p.keepColor ? "" : "grayscale hover:grayscale-0"
            }`}
          >
            <img
              src={p.logo}
              alt={p.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
