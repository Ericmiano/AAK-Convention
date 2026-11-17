import { Reveal } from "@/components/site/Reveal";
import cover from "@/assets/magazine-cover.jpg";

// Served as-is from public/, so the URL stays stable for sharing.
const PDF = "/AAK-Annual-Convention-Magazine-2026.pdf";

export function MagazineStrip() {
  return (
    <section className="border-b border-border bg-surface py-14 md:py-20">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 sm:flex-row md:gap-12 md:px-8">
        <a href={PDF} target="_blank" rel="noopener" className="shrink-0">
          <img
            src={cover}
            alt="Cover of the AAK Annual Convention 2026 Magazine: Shifting the Built Environment From Fragility to Resilience"
            width={496}
            height={702}
            loading="lazy"
            className="w-40 rounded-sm shadow-[var(--shadow-raised)] transition-transform duration-300 hover:-translate-y-1 md:w-48"
          />
        </a>
        <div className="text-center sm:text-left">
          <p className="rule-label">New · Convention Magazine</p>
          <h2 className="mt-3 font-display text-2xl leading-snug font-semibold text-foreground md:text-3xl">
            AAK Annual Convention 2026 Magazine
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">PDF · 130 pages · 48 MB</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={PDF}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-raised)] transition-transform duration-300 hover:-translate-y-1"
            >
              Read the magazine
            </a>
            <a
              href={PDF}
              download
              className="inline-flex items-center justify-center rounded-sm border border-border bg-card px-7 py-4 font-display text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              Download PDF
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
