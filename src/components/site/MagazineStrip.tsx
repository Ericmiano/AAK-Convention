import { Reveal } from "@/components/site/Reveal";
import cover from "@/assets/magazine-cover.jpg";

// Served as-is from public/, so the URL stays stable for sharing.
export const MAGAZINE_PDF = "/AAK-Annual-Convention-Magazine-2026.pdf";

export function MagazineStrip() {
  return (
    <section
      id="magazine"
      className="shimmer-sheen animate-gradient-pan relative scroll-mt-24 overflow-hidden border-y-2 border-destructive py-14 md:py-20"
      style={{
        background:
          "linear-gradient(120deg, var(--destructive) 0%, oklch(0.4 0.19 22.5) 50%, var(--destructive) 100%)",
        backgroundSize: "220% 220%",
      }}
    >
      <Reveal className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 sm:flex-row md:gap-14 md:px-8">
        <a href={MAGAZINE_PDF} target="_blank" rel="noopener" className="shrink-0">
          <img
            src={cover}
            alt="Cover of the AAK Annual Convention 2026 Magazine: Shifting the Built Environment From Fragility to Resilience"
            width={496}
            height={702}
            loading="lazy"
            className="w-44 -rotate-2 rounded-sm shadow-2xl ring-4 ring-destructive-foreground/90 transition-transform duration-300 hover:rotate-0 hover:scale-105 md:w-56"
          />
        </a>
        <div className="text-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive-foreground px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-destructive uppercase">
            <span
              aria-hidden="true"
              className="relative inline-flex h-1.5 w-1.5 rounded-full bg-destructive"
            >
              <span
                aria-hidden="true"
                className="animate-pulse-ring absolute inset-0 rounded-full bg-destructive"
              />
            </span>
            Just released
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold tracking-tight text-destructive-foreground md:text-5xl">
            The Convention Magazine 2026 is out
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-destructive-foreground/85 md:text-base">
            Shifting the Built Environment From Fragility to Resilience — 130 pages from Diani.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={MAGAZINE_PDF}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-sm bg-destructive-foreground px-7 py-4 font-display text-sm font-bold tracking-wide text-destructive shadow-[var(--shadow-raised)] transition-transform duration-300 hover:-translate-y-1"
            >
              Read the magazine
            </a>
            <a
              href={MAGAZINE_PDF}
              download
              className="inline-flex items-center justify-center rounded-sm border-2 border-destructive-foreground/70 px-7 py-4 font-display text-sm font-semibold text-destructive-foreground transition-colors hover:bg-destructive-foreground/10"
            >
              Download PDF · 48 MB
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
