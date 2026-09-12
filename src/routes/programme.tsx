import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, WordRise } from "@/components/site/Reveal";
import { DressCode } from "@/components/site/DressCode";
import { GlowOrb, PalmCanopy } from "@/components/site/Tropics";
import { CONVENTION, SESSIONS } from "@/lib/convention";
import programmePdf from "@/assets/Programme.pdf";
import prospectusPdf from "@/assets/Prospectus.pdf";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "Programme | AAK Annual Convention 2026, Diani" },
      {
        name: "description",
        content:
          "Session-by-session programme for the AAK Annual Convention 2026 in Diani: climate action, urban governance, community resilience, construction innovation and build tours.",
      },
      { property: "og:title", content: "Programme — AAK Annual Convention 2026" },
      {
        property: "og:description",
        content:
          "Five sessions across 16–19 September 2026 at Diamonds Leisure Beach & Golf Resort, Diani, Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
  component: Programme,
});

function Programme() {
  const [openId, setOpenId] = useState<string>(SESSIONS[0]!.id);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="surface-grain relative overflow-hidden border-b border-border px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
          <GlowOrb className="-left-20 top-16 h-72 w-72 opacity-[0.14]" />
          <PalmCanopy className="parallax-slow -top-8 right-6 h-52 w-52 text-primary/10 md:h-64 md:w-64" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <p className="rule-label">Programme of Events</p>
            </Reveal>
            <WordRise
              as="h1"
              delay={90}
              className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-semibold text-foreground md:text-6xl"
              text="Four days on the coast, session by session"
            />
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {CONVENTION.dates} · {CONVENTION.venue}, {CONVENTION.location}. Times are indicative
                and may be refined by the AAK Secretariat closer to the Convention.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/register"
                  className="shimmer-sheen inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
                >
                  Register as a delegate
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={programmePdf}
                  download="AAK Annual Convention 2026 Programme.pdf"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-7 py-4 font-display text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  Download programme (PDF)
                </a>
                <a
                  href={prospectusPdf}
                  download="AAK Annual Convention 2026 Prospectus.pdf"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-7 py-4 font-display text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  Download prospectus (PDF)
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="space-y-5">
              {SESSIONS.map((s, i) => {
                const open = openId === s.id;
                return (
                  <Reveal key={s.id} delay={i * 70}>
                    <article
                      id={s.id}
                      className="scroll-mt-28 overflow-hidden rounded-sm border border-border bg-card"
                    >
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenId(open ? "" : s.id)}
                        className="flex w-full items-start gap-5 p-7 text-left transition-colors duration-300 hover:bg-surface md:p-9"
                      >
                        <span className="mt-1 font-display text-sm font-semibold text-primary md:w-24">
                          {s.day}
                        </span>
                        <span className="flex-1">
                          <span className="block text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                            {s.label} · {s.date}
                          </span>
                          <span className="mt-2 block font-display text-xl leading-snug font-semibold text-foreground md:text-2xl">
                            {s.title}
                          </span>
                          <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                            {s.summary}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={`font-display text-xl text-muted-foreground transition-transform duration-300 ${
                            open ? "rotate-45 text-primary" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <div
                        className="grid transition-[grid-template-rows] duration-500 ease-out"
                        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <ol className="border-t border-border">
                            {s.items.map((item, idx) => (
                              <li
                                key={`${s.id}-${idx}`}
                                className="grid gap-2 border-b border-border px-7 py-5 last:border-b-0 md:grid-cols-[8rem_1fr] md:gap-8 md:px-9"
                              >
                                <span className="font-display text-xs tracking-wide text-primary tabular-nums">
                                  {item.time}
                                </span>
                                <span>
                                  <span className="block text-sm leading-snug font-medium text-foreground">
                                    {item.title}
                                  </span>
                                  {item.detail && (
                                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                                      {item.detail}
                                    </span>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <p className="rule-label">What To Wear</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                Dress code for the evening events
              </h2>
            </Reveal>
            <Reveal delay={140} className="mt-12">
              <DressCode />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
