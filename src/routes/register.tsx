import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, CountUp, WordRise } from "@/components/site/Reveal";
import { GlowOrb, PalmCanopy } from "@/components/site/Tropics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONVENTION } from "@/lib/convention";
import {
  TICKETS,
  CPD_POINTS,
  REGISTRATION_FACTS,
  REGISTRATION_INCLUDES,
  SECRETARIAT_PHONES,
} from "@/lib/tickets";

const REGISTRATION_FAQS = [
  {
    q: "What's the difference between Member and Non-Member rates?",
    a: "The Member rate applied to architects, quantity surveyors, engineers, planners and other built-environment professionals in good standing with AAK. Everyone else registered at the Non-Member rate.",
  },
  {
    q: "Could I register as a group?",
    a: "Yes — a group of 5 AAK Members could register together for KES 157,500, working out to KES 31,500 per delegate.",
  },
  {
    q: "I'm a fresh graduate or student — is there still a way to attend?",
    a: "Online registration at the Fresh Graduates & Students rate has closed. Contact the AAK Secretariat directly (numbers above) to ask about availability.",
  },
  {
    q: "Is accommodation included in the delegate fee?",
    a: `No — delegate fees cover the Convention programme only. Booking a room, at ${CONVENTION.venue} or any nearby hotel, is each delegate's own responsibility.`,
  },
  {
    q: "I already registered and paid — where's my confirmation?",
    a: "Registered delegates receive confirmation and their delegate pack details from the AAK Secretariat directly. If you haven't heard back, call, text or WhatsApp the numbers above.",
  },
  {
    q: "Can I still sign up for a build tour?",
    a: "Contact the AAK Secretariat directly to check build tour availability — final confirmation happens on site at check-in.",
  },
];

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Registration Closed | AAK Annual Convention 2026" },
      {
        name: "description",
        content:
          "Delegate registration for the AAK Annual Convention 2026 in Diani is now closed. Contact the AAK Secretariat directly for enquiries — call, text or WhatsApp.",
      },
      { property: "og:title", content: "Registration Closed — AAK Annual Convention 2026" },
      {
        property: "og:description",
        content: "Registration has closed. Contact the AAK Secretariat directly for enquiries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: Register,
});

function Register() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="surface-grain relative overflow-hidden border-b border-border px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
          <GlowOrb className="-left-20 top-16 h-72 w-72 opacity-[0.14]" />
          <PalmCanopy className="parallax-slow -top-8 right-6 h-52 w-52 text-primary/10 md:h-64 md:w-64" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <p className="rule-label">Registration & Fees</p>
            </Reveal>
            <WordRise
              as="h1"
              delay={90}
              className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-semibold text-foreground md:text-6xl"
              text="Registration is now closed"
            />
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {CONVENTION.dates} · {CONVENTION.venue}, {CONVENTION.location}. Delegate
                registration has closed — for enquiries, contact the AAK Secretariat directly.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-destructive px-4 py-2 font-display text-sm font-bold tracking-wide text-destructive-foreground shadow-[var(--shadow-raised)]">
                Registration Closed
              </span>
            </Reveal>
            <Reveal
              delay={230}
              className="mt-12 grid gap-10 border-t border-border pt-8 md:grid-cols-2"
            >
              <div>
                <p className="rule-label">CPD Accreditation</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Attending delegates earn Continuing Professional Development points, certified per
                  regulator as part of the delegate pack.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border sm:max-w-lg">
                  {CPD_POINTS.map((c) => (
                    <div key={c.body} className="bg-card px-4 py-5 text-center sm:px-6">
                      <p className="font-display text-3xl font-semibold tabular-nums text-primary md:text-4xl">
                        {c.points}
                      </p>
                      <p className="mt-1 text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="rule-label">Contact The Secretariat</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Call, text or WhatsApp for registration enquiries:
                </p>
                <ul className="mt-4 flex max-w-md flex-wrap items-center gap-x-2 gap-y-2">
                  {SECRETARIAT_PHONES.map((p, i) => (
                    <li key={p.tel} className="flex items-center gap-2">
                      <a
                        href={`tel:${p.tel}`}
                        className="font-display text-base font-semibold tabular-nums text-foreground transition-colors hover:text-primary"
                      >
                        {p.display}
                      </a>
                      {p.whatsapp && (
                        <a
                          href={`https://wa.me/${p.tel.replace("+", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-border px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                        >
                          WhatsApp
                        </a>
                      )}
                      {i < SECRETARIAT_PHONES.length - 1 && (
                        <span aria-hidden="true" className="text-muted-foreground">
                          |
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
                {REGISTRATION_FACTS.map((f) => (
                  <div key={f.k}>
                    <dt className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                      {f.k}
                    </dt>
                    <dd className="mt-1.5 font-display text-sm leading-snug text-foreground">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section
          id="register-cta"
          className="animate-gradient-pan scroll-mt-28 py-8 md:py-10"
          style={{ background: "var(--gradient-ink)", backgroundSize: "220% 220%" }}
        >
          <Reveal>
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
              <div>
                <p className="rule-label">Registration Closed</p>
                <p className="mt-1.5 font-display text-lg font-semibold text-ink-foreground md:text-xl">
                  For enquiries, contact the AAK Secretariat — call, text or WhatsApp
                </p>
              </div>
              <ul className="flex shrink-0 flex-wrap items-center justify-center gap-x-2 gap-y-2">
                {SECRETARIAT_PHONES.map((p, i) => (
                  <li key={p.tel} className="flex items-center gap-2">
                    <a
                      href={`tel:${p.tel}`}
                      className="rounded-sm bg-primary px-4 py-2 font-display text-sm font-semibold tabular-nums text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      {p.display}
                    </a>
                    {i < SECRETARIAT_PHONES.length - 1 && (
                      <span aria-hidden="true" className="text-ink-foreground/50">
                        |
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="rule-label">Delegate Fees</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                Rates for every kind of delegate
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {TICKETS.map((t, i) => {
                const closed = t.status === "closed";
                return (
                  <Reveal key={t.id} delay={i * 70}>
                    <article
                      className={`group relative h-full p-8 transition-colors duration-500 md:p-10 ${
                        closed ? "bg-surface opacity-60" : "bg-card hover:bg-surface"
                      }`}
                    >
                      {t.featured && !closed && (
                        <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[0.6rem] font-semibold tracking-[0.14em] text-primary-foreground uppercase">
                          Best value
                        </span>
                      )}
                      <p className="text-[0.62rem] tracking-[0.18em] text-primary uppercase">
                        {t.unit}
                      </p>
                      <h3 className="mt-3 font-display text-xl leading-snug font-semibold text-foreground md:text-2xl">
                        {t.name}
                      </h3>
                      <p className="mt-5 font-display text-3xl font-semibold text-foreground md:text-4xl">
                        {closed ? (
                          <span className="tabular-nums">
                            KES {t.price.toLocaleString("en-KE")}
                          </span>
                        ) : (
                          <CountUp value={t.price} prefix="KES " />
                        )}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
                      <p
                        className={`mt-6 inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase ${
                          closed ? "text-muted-foreground" : "text-primary"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${closed ? "bg-muted-foreground" : "bg-primary"}`}
                        >
                          {!closed && (
                            <span
                              aria-hidden="true"
                              className="animate-pulse-ring absolute inset-0 rounded-full bg-primary"
                            />
                          )}
                        </span>
                        {closed ? "Closed" : "Available"}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-sand py-24 text-sand-foreground md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Reveal>
                <p className="rule-label">What's Included</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl leading-tight font-semibold md:text-5xl">
                  Every delegate fee covers
                </h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ul className="space-y-4">
                {REGISTRATION_INCLUDES.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-border pb-4 text-sm">
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
        </section>

        <section className="border-t border-border bg-background py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <p className="rule-label">Registration Questions</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                What the delegate rates covered
              </h2>
            </Reveal>
            <Reveal delay={140} className="mt-12">
              <Accordion type="single" collapsible className="border-t border-border">
                {REGISTRATION_FAQS.map((item) => (
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
      </main>
      <SiteFooter />
    </div>
  );
}
