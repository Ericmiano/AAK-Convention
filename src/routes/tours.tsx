import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, WordRise } from "@/components/site/Reveal";
import { GlowOrb, PalmCanopy } from "@/components/site/Tropics";
import { CONVENTION } from "@/lib/convention";
import teamPhoto from "@/assets/Team 1.jpg";
import mwacheDamPhoto from "@/assets/Mwache Dam.jpg";
import ukundaAirportPhoto from "@/assets/Ukunda Airport Terminal Expansion.jpg";
import kisiteWasiniPhoto from "@/assets/Kisite Mpunguti Marine Park & Wasini Island.jpg";

const TOUR_SIGNUP_URL = "https://forms.cloud.microsoft/r/sBC1RcB0ww";
const GOLF_SIGNUP_URL =
  "https://forms.cloud.microsoft/pages/responsepage.aspx?id=uep3lBbp0kSDmQC1vDvBylk3nN6UqTNDszQDQI_t2MpUMExUSk81S0xXQVZOUjJJMkdBQUcxRkZRVi4u&route=shorturl";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Build Tours | AAK Annual Convention 2026, Diani" },
      {
        name: "description",
        content:
          "Build tours for the AAK Annual Convention 2026: Ukunda Airport, Mwache Dam and Kisite Mpunguti Marine National Park & Wasini Island.",
      },
      { property: "og:title", content: "Build Tours — AAK Annual Convention 2026" },
      {
        property: "og:description",
        content: "Coastal infrastructure and marine heritage — the Kwale build tours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: Tours,
});

const TOURS = [
  {
    id: "ukunda-airport",
    title: "Ukunda Airport",
    when: "Friday, 18 September · 2:00 p.m. — 4:00 p.m.",
    tag: "Build Tour of Kwale — AAK Coast Branch",
    body: "Explore the ongoing terminal expansion at Ukunda Airport and gain insight into modern airport planning, infrastructure development and passenger terminal design — and how aviation infrastructure supports tourism, regional connectivity and economic growth.",
    photo: {
      url: ukundaAirportPhoto,
      alt: "Ukunda Airport terminal expansion, Kwale County",
    },
    facts: [
      { k: "Distance", v: "Approx. 8 km from Diamonds Leisure Lodge (15 minutes)" },
      { k: "Tour Fee", v: "KES 1,500 per head" },
      {
        k: "What To Bring",
        v: "National ID or passport, comfortable walking shoes, identification badge",
      },
      {
        k: "Activities",
        v: "Airport briefing · Guided terminal and airside tour (subject to security clearance) · Infrastructure presentation · Q&A · Group photograph",
      },
    ],
  },
  {
    id: "mwache-dam",
    title: "Mwache Dam",
    when: "Friday, 18 September · 2:00 p.m. — 4:00 p.m.",
    tag: "Build Tour of Kwale — AAK Coast Branch",
    body: "A flagship Kenya Vision 2030 project, the KES 20 billion Mwache Dam is Kenya's first large Roller-Compacted Concrete (RCC) dam — 87.5 metres high and built to store 186 million m³ of water, supplying Mombasa and Kwale Counties, irrigating over 7,000 hectares and creating some 2,500 jobs.",
    photo: {
      url: mwacheDamPhoto,
      alt: "Mwache Dam Project, Kwale County",
    },
    facts: [
      { k: "Distance", v: "Approx. 90 km from Diamonds Leisure Lodge (1 hr 45 min)" },
      { k: "Tour Fee", v: "KES 2,500 per head" },
      {
        k: "What To Bring",
        v: "Closed comfortable shoes, identification badge, reusable water bottle — basic PPE provided on site",
      },
      {
        k: "Activities",
        v: "Project briefing · Guided technical tour · Engineering and sustainability discussions · Q&A · Group photo",
      },
    ],
  },
  {
    id: "kisite-wasini",
    title: "Kisite Mpunguti & Wasini Island",
    when: "Saturday, 19 September · Departs 8:00 a.m.",
    tag: "Post-Convention Build Tour — Catherine Kiruku, BDM",
    body: "An immersive marine conservation experience at KWS Offices, Shimoni — dolphin spotting and snorkeling at Kisite Marine Park, a traditional Swahili seafood lunch on Wasini Island, and an optional visit to the Shimoni Slave Caves.",
    photo: {
      url: kisiteWasiniPhoto,
      alt: "Kisite Mpunguti Marine National Park and Wasini Island, Kwale County",
    },
    facts: [
      { k: "Distance", v: "Approx. 65 km from Diamonds Leisure Lodge (1 hr 20 min)" },
      { k: "Tour Fee", v: "KES 6,000 per head" },
      {
        k: "What To Bring",
        v: "ID or passport, reusable water bottle, swimming costume, plastic shoes, towel, sunscreen, camera or phone",
      },
      {
        k: "Activities",
        v: "Dolphin spotting · Snorkeling · Marine conservation briefing · Seafood lunch · Wasini village visit · Optional Shimoni Slave Caves tour",
      },
    ],
  },
];

function Tours() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="surface-grain relative overflow-hidden border-b border-border px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
          <GlowOrb className="-left-20 top-16 h-72 w-72 opacity-[0.14]" />
          <PalmCanopy className="parallax-slow -top-8 right-4 h-52 w-52 text-primary/10 md:h-64 md:w-64" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="rule-label">Build Tours</p>
              </Reveal>
              <WordRise
                as="h1"
                delay={90}
                className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-foreground md:text-6xl"
                text="Experience beyond the Conference"
              />
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Three tours run during the Convention. Confirm your places when you check in at
                  registration.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <a
                  href={TOUR_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-sheen mt-9 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
                >
                  Register for tours
                  <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            </div>
            <Reveal
              variant="clip"
              delay={120}
              className="aspect-[13/9] overflow-hidden rounded-sm shadow-[var(--shadow-soft)]"
            >
              <img
                src={teamPhoto}
                alt="AAK delegates on a build tour site visit, in high-visibility vests and hard hats"
                width={901}
                height={624}
                fetchPriority="high"
                className="animate-ken-burns h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-14 md:grid-cols-2">
              {TOURS.map((t, i) => (
                <Reveal key={t.id} delay={i * 90}>
                  <article
                    id={t.id}
                    className="scroll-mt-28 overflow-hidden rounded-sm border border-border bg-card"
                  >
                    <div className="relative grid grid-cols-1 gap-px overflow-hidden">
                      <img
                        src={t.photo.url}
                        alt={t.photo.alt}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="h-64 w-full object-cover md:h-72"
                      />
                    </div>
                    <div className="p-8 md:p-9">
                      <p className="text-[0.62rem] tracking-[0.18em] text-primary uppercase">
                        {t.when}
                      </p>
                      <h2 className="mt-3 font-display text-2xl leading-snug font-semibold text-foreground">
                        {t.title}
                      </h2>
                      <p className="mt-1 text-xs text-muted-foreground">{t.tag}</p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                      <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2">
                        {t.facts.map((f) => (
                          <div key={f.k}>
                            <dt className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                              {f.k}
                            </dt>
                            <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                              {f.v}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <div className="mt-8 border-t border-border pt-6">
                        <p className="rule-label">Sign Up For This Tour</p>
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                          Places are confirmed at check-in, but register your interest now to hold
                          your spot.
                        </p>
                        <a
                          href={TOUR_SIGNUP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group shimmer-sheen mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
                        >
                          Sign up for this tour
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <p className="rule-label">Wednesday, 16 September</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                Charity Golf Tournament
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Kick off the Convention on the greens — the AAK Charity Golf Tournament runs all
                day at {CONVENTION.venue}. Sign up in advance to secure a tee time.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a
                href={GOLF_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group shimmer-sheen mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
              >
                Sign up for the golf tournament
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-border bg-sand py-24 text-sand-foreground md:py-32">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <Reveal>
              <p className="rule-label">Plan Your Stay</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl leading-tight font-semibold md:text-5xl">
                Build tours depart from {CONVENTION.venue}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                See accommodation, resort facilities and travel notes for {CONVENTION.location}.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/diani"
                className="mt-8 inline-flex items-center gap-2 rounded-sm border border-border bg-background px-6 py-3.5 font-display text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Diani & Stay
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
