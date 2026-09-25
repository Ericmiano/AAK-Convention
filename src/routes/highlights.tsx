import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, WordRise } from "@/components/site/Reveal";
import { GlowOrb, PalmCanopy } from "@/components/site/Tropics";
import { CONVENTION } from "@/lib/convention";

export const Route = createFileRoute("/highlights")({
  head: () => ({
    meta: [
      { title: "Highlights | AAK Annual Convention 2026, Diani" },
      {
        name: "description",
        content:
          "The AAK Annual Convention 2026 in Diani is over — relive it here with photo and video highlights from all four days.",
      },
      { property: "og:title", content: "Highlights — AAK Annual Convention 2026" },
      {
        property: "og:description",
        content: "Missed the Convention? Relive it in photos and video.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/highlights" }],
  }),
  component: Highlights,
});

const RECAP_DAYS = [
  {
    day: "Day 01",
    date: "Wednesday, 16 September 2026",
    title: "Arrival, Golf & Community Engagement",
    body: "Delegates arrived in Diani as the Charity Golf Tournament teed off, and the AAK Governing Council joined the Grow A Classroom Mentorship at Mabokoni Primary School for pupils' awards and certificates.",
    hasVideo: false,
  },
  {
    day: "Day 02",
    date: "Thursday, 17 September 2026",
    title: "Official Opening, Climate Action & Urban Governance",
    body: "The Official Opening Ceremony and keynote by Charles Hinga, CBS, opened the day, followed by sessions on nature-based solutions, circular materials, devolution and urban governance, the Built Environment Baraza, and the Opening Cocktail on the shoreline.",
    hasVideo: true,
  },
  {
    day: "Day 03",
    date: "Friday, 18 September 2026",
    title: "People, Place, Innovation & the Future of Construction",
    body: "Sessions on cultural heritage, material innovation and construction technology gave way to the Build Tour of Kwale, team building on the beach, and the Closing Gala Dinner with the Charity Golf and Grow A Classroom awards.",
    hasVideo: false,
  },
  {
    day: "Day 04",
    date: "Saturday, 19 September 2026",
    title: "Post-Convention Build Tour",
    body: "An optional day on the coast — Kisite Mpunguti Marine National Park and Wasini Island — closed out the Convention.",
    hasVideo: false,
  },
];

function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-sm border border-dashed border-border bg-surface">
      <p className="px-6 text-center text-xs leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}

function Highlights() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="surface-grain relative overflow-hidden border-b border-border px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
          <GlowOrb className="-left-20 top-16 h-72 w-72 opacity-[0.14]" />
          <PalmCanopy className="parallax-slow -top-8 right-6 h-52 w-52 text-primary/10 md:h-64 md:w-64" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <p className="rule-label">Convention Concluded</p>
            </Reveal>
            <WordRise
              as="h1"
              delay={90}
              className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-semibold text-foreground md:text-6xl"
              text="The Convention is over — here's what it looked like"
            />
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {CONVENTION.dates} · {CONVENTION.venue}, {CONVENTION.location}. Couldn't make it
                to Diani? Relive the four days in photos and video below.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/programme"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-7 py-4 font-display text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  See the full programme
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="space-y-16 md:space-y-24">
              {RECAP_DAYS.map((d) => (
                <Reveal key={d.day}>
                  <article className="scroll-mt-28">
                    <p className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                      {d.day} · {d.date}
                    </p>
                    <h2 className="mt-2 font-display text-2xl leading-snug font-semibold text-foreground md:text-3xl">
                      {d.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {d.body}
                    </p>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <MediaPlaceholder
                        label={
                          d.hasVideo
                            ? "Highlight video — coming soon"
                            : "Photo gallery — coming soon"
                        }
                      />
                      <MediaPlaceholder label="Photo gallery — coming soon" />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-sand py-24 text-sand-foreground md:py-32">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <Reveal>
              <p className="rule-label">More To Come</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl leading-tight font-semibold md:text-5xl">
                Photos and video are being added
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                The AAK Secretariat is curating the full set from all four days — check back
                soon for the complete gallery and highlight reel.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
