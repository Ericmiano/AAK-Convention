import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, WordRise } from "@/components/site/Reveal";
import { GlowOrb, PalmCanopy } from "@/components/site/Tropics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONVENTION, SESSIONS, SUBTHEMES } from "@/lib/convention";
import { TICKETS, CPD_POINTS } from "@/lib/tickets";
import heroDiani from "@/assets/hero-diani.webp";
import themeResilience from "@/assets/theme-resilience.webp";
import dianiBeach from "@/assets/diani-beach.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAK Annual Convention 2026 | Diani, 16–19 September" },
      {
        name: "description",
        content:
          "The AAK Annual Convention 2026 in Diani, Kenya: Shifting the Built Environment from Fragility to Resilience. 16–19 September at Diamonds Leisure Beach & Golf Resort.",
      },
      { property: "og:title", content: "AAK Annual Convention 2026 — Diani, Kenya" },
      {
        property: "og:description",
        content:
          "Four days on the Kenyan coast: climate action, urban governance, community resilience and construction innovation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroDiani },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: CONVENTION.name,
          description: CONVENTION.theme,
          startDate: CONVENTION.isoStart,
          endDate: CONVENTION.isoEnd,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: CONVENTION.venue,
            address: { "@type": "PostalAddress", addressLocality: "Diani", addressCountry: "KE" },
          },
          organizer: {
            "@type": "Organization",
            name: CONVENTION.organiser,
            url: "https://aak.or.ke",
          },
          offers: {
            "@type": "Offer",
            url: CONVENTION.registrationUrl,
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <ThemeSection />
        <Subthemes />
        <ProgrammeSnapshot />
        <DianiSection />
        <Faq />
        <RegisterBand />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-0">
      <div className="grid min-h-[92vh] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative flex flex-col justify-center px-5 py-16 md:px-12 lg:py-24 xl:px-20">
          <GlowOrb className="-left-24 top-10 h-72 w-72 opacity-[0.14]" />
          <PalmCanopy className="parallax-slow -top-6 right-2 h-48 w-48 text-primary/10 md:h-64 md:w-64" />
          <Reveal>
            <p className="rule-label">
              {CONVENTION.organiser} · {CONVENTION.dates} · Convention Concluded
            </p>
          </Reveal>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-foreground sm:text-6xl xl:text-7xl">
            <WordRise as="span" delay={90} text="Shifting the Built Environment" />
            <WordRise
              as="span"
              delay={370}
              className="mt-2 block text-gradient-crimson"
              text="from Fragility to Resilience"
            />
          </h1>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The Convention is over — four days of plenaries, workshops, build tours and the
              Built Environment Baraza at Diamonds Leisure Beach &amp; Golf Resort, Diani. Missed
              it? Here are the highlights.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/highlights"
                className="group shimmer-sheen inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-raised)] transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
              >
                See the highlights
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                to="/programme"
                className="inline-flex items-center justify-center rounded-sm border border-border bg-card px-7 py-4 font-display text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                View the programme
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {[
                { k: "Dates", v: "16 – 19 Sept 2026" },
                { k: "Venue", v: CONVENTION.venue },
                { k: "Where", v: CONVENTION.location },
              ].map((d) => (
                <div key={d.k}>
                  <dt className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {d.k}
                  </dt>
                  <dd className="mt-1.5 font-display text-sm leading-snug text-foreground">
                    {d.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative min-h-[60vh] lg:min-h-full">
          <img
            src={heroDiani}
            alt="Contemporary coastal pavilion with timber screens overlooking the Indian Ocean in Diani, Kenya"
            width={1408}
            height={1760}
            fetchPriority="high"
            className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--background) 0%, color-mix(in oklab, var(--background) 20%, transparent) 22%, transparent 55%)",
            }}
          />
          <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-8 lg:max-w-xs">
            <div className="rounded-sm border border-border bg-background/85 p-5 backdrop-blur-md">
              <p className="rule-label">The Coast Edition</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Diani, Kwale County — where Swahili building heritage, marine ecology and coastal
                infrastructure meet the resilience agenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "Climate Action",
    "Urban Governance",
    "Community Resilience",
    "Circular Materials",
    "Build Tours",
    "Grow A Classroom",
    "Built Environment Baraza",
  ];
  const strip = [...words, ...words];
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-y border-border bg-secondary py-4 text-secondary-foreground"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {strip.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="font-display text-sm tracking-[0.2em] uppercase opacity-90"
          >
            {w}
            <span className="ml-10 opacity-50">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function ThemeSection() {
  return (
    <section id="theme" className="surface-grain border-b border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal variant="clip" className="overflow-hidden rounded-sm">
          <img
            src={themeResilience}
            alt="Coral-stone colonnade and carved timber detail of Swahili coastal architecture in warm sunlight"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="rule-label">The 2026 Theme</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
              Resilience is a design decision, not an afterthought.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Kenya's built environment is being tested by climate volatility, fragmented urban
              governance and pressure on housing and infrastructure. The Convention brings
              architects, quantity surveyors, engineers, planners, landscape architects and
              construction managers together to move practice from fragility toward measurable
              resilience.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-8 space-y-4">
              {[
                "Five plenary sessions across three days of programming",
                "A Built Environment Baraza on the state of practice",
                "Build tours of Ukunda Airport, Mwache Dam and the Kwale coast",
                "Grow A Classroom mentorship and student design awards",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-border pb-4 text-sm text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Subthemes() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="rule-label">Subthemes</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
            Four lenses on a resilient built environment
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {SUBTHEMES.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                <span className="font-display text-4xl font-semibold text-sand-foreground/25 transition-colors duration-500 group-hover:text-primary">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug font-semibold text-foreground md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgrammeSnapshot() {
  return (
    <section className="border-y border-border bg-sand py-24 text-sand-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <p className="rule-label">Programme</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight font-semibold md:text-5xl">
                Four days, five sessions, one narrative
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/programme"
              className="inline-flex items-center gap-2 font-display text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              Full programme of events
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <ol className="mt-14 space-y-px overflow-hidden rounded-sm border border-border bg-border">
          {SESSIONS.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 80}>
              <Link
                to="/programme"
                hash={s.id}
                className="group grid gap-5 bg-background p-8 transition-colors duration-500 hover:bg-surface md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:p-10"
              >
                <div className="md:w-40">
                  <p className="font-display text-sm font-semibold text-primary">{s.day}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.date}</p>
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {s.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug font-semibold text-foreground md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="font-display text-lg text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DianiSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <p className="rule-label">The Setting</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
              Diani, Kwale County
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The Convention is hosted at Diamonds Leisure Beach &amp; Golf Resort — a coastal
              setting that doubles as case study. Build tours take delegates to Ukunda Airport and
              Mwache Dam, while the post-Convention day opens onto Kisite Mpunguti Marine National
              Park and Wasini Island.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/diani"
              className="mt-8 inline-flex items-center gap-2 rounded-sm border border-border bg-card px-6 py-3.5 font-display text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Plan your stay in Diani
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
        <Reveal variant="clip" delay={120} className="overflow-hidden rounded-sm">
          <img
            src={dianiBeach}
            alt="Aerial view of Diani beach: white sand, turquoise shallows and a palm-fringed resort roofline"
            width={1400}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "How do I register for the Convention?",
    a: "Delegate registration is now closed. For enquiries, contact the AAK Secretariat directly — call, text or WhatsApp on the numbers listed on the Registration & Fees page.",
  },
  {
    q: "What were the ticket tiers and prices?",
    a: TICKETS.map((t) => `${t.name}: KES ${t.price.toLocaleString("en-KE")} (${t.unit})`).join(
      " · ",
    ),
  },
  {
    q: "How many CPD points will I earn?",
    a: `Attending delegates earn CPD points certified as part of the delegate pack: ${CPD_POINTS.map((c) => `${c.body} ${c.points}`).join(" · ")}.`,
  },
  {
    q: "Where will I stay, and is accommodation included?",
    a: `Delegate fees cover the Convention programme, not accommodation. Booking a room — at ${CONVENTION.venue} or any nearby hotel — is each delegate's own responsibility, arranged directly with the property of their choice.`,
  },
];

function Faq() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="rule-label">Questions</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal delay={140} className="mt-12">
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQS.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border">
                <AccordionTrigger className="font-display text-base text-foreground md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function RegisterBand() {
  return (
    <section
      className="animate-gradient-pan relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--gradient-ink)", backgroundSize: "220% 220%" }}
    >
      <GlowOrb className="-right-24 -top-24 h-96 w-96 opacity-30" />
      <PalmCanopy className="parallax-slow -bottom-10 -left-10 h-56 w-56 text-ink-foreground/10 md:h-72 md:w-72" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="rule-label">Registration Closed</p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mt-5 font-display text-3xl leading-tight font-semibold text-ink-foreground md:text-5xl">
            Delegate registration has closed
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/70">
            For enquiries, contact the AAK Secretariat directly — call, text or WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={230}>
          <Link
            to="/register"
            className="group shimmer-sheen mt-10 inline-flex items-center gap-3 rounded-sm bg-primary px-9 py-4.5 font-display text-base font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
          >
            Contact the Secretariat
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
