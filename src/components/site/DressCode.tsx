import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import dresscodeFloralLadies from "@/assets/Women.jpeg";
import dresscodeFloralGents from "@/assets/mixed.jpeg";

type EventKey = "cocktail" | "gala";

const EVENTS: Record<EventKey, { label: string; when: string }> = {
  cocktail: { label: "Opening Cocktail", when: "Day 2 · 1900–2200" },
  gala: { label: "Closing Gala Dinner", when: "Day 3 · 1900–Late" },
};

const GALA_PALETTE = [
  { name: "Sunset Orange", hex: "#FE6522" },
  { name: "Golden Amber", hex: "#FFA746" },
  { name: "Soft Peach", hex: "#FEC8B0" },
  { name: "Hibiscus Pink", hex: "#F3548E" },
  { name: "Crimson Red", hex: "#EA3754" },
];

export function DressCode() {
  const [active, setActive] = useState<EventKey>("cocktail");

  return (
    <div>
      <div role="tablist" aria-label="Dress code by event" className="inline-flex rounded-full border border-border bg-card p-1">
        {(Object.keys(EVENTS) as EventKey[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-colors duration-300 ${
              active === key
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {EVENTS[key].label}
          </button>
        ))}
      </div>

      {active === "cocktail" ? (
        <Reveal key="cocktail" className="mt-10">
          <p className="rule-label">{EVENTS.cocktail.when}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground md:text-3xl">
            Dress Code: Beach Floral
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Resort-ready and sun-warmed — think tropical prints in citrus yellow, coral and
            hibiscus pink. For the ladies: a flowing floral maxi or an off-the-shoulder silhouette
            in breathable fabric. For the gents: a bold tropical-print shirt worn open and easy.
            Beachwear, not boardroom.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-sm border border-border">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={dresscodeFloralLadies}
                  alt="Beach floral mood board for ladies: warm-toned floral dresses in breezy, off-shoulder silhouettes"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="border-t border-border bg-card px-5 py-3 text-[0.68rem] font-semibold tracking-[0.14em] text-foreground uppercase">
                Ladies
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-sm border border-border">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={dresscodeFloralGents}
                  alt="Beach floral mood board for gents: bold tropical Hawaiian-style print shirts"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="border-t border-border bg-card px-5 py-3 text-[0.68rem] font-semibold tracking-[0.14em] text-foreground uppercase">
                Gents
              </figcaption>
            </figure>
          </div>
        </Reveal>
      ) : (
        <Reveal key="gala" className="mt-10">
          <p className="rule-label">{EVENTS.gala.when}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground md:text-3xl">
            Dress Code: Tequila Sunset
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Dress in the palette of a coastal sunset — warm oranges deepening into crimson and
            hibiscus pink.
          </p>
          <div className="mt-8 grid grid-cols-5 gap-px overflow-hidden rounded-sm border border-border bg-border">
            {GALA_PALETTE.map((c) => (
              <div key={c.hex} className="bg-card">
                <div aria-hidden="true" className="aspect-square" style={{ backgroundColor: c.hex }} />
                <p className="px-1 py-3 text-center text-[0.58rem] leading-tight font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}
