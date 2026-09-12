import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, WordRise } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { GlowOrb, PalmCanopy } from "@/components/site/Tropics";
import { NearbyStaysCarousel } from "@/components/site/NearbyStaysCarousel";
import { CONVENTION } from "@/lib/convention";
import { ACCOMMODATION, RESORT_FACILITIES, VENUE_CONTACT } from "@/lib/tickets";
import { PHOTOS } from "@/lib/media";
import themeResilience from "@/assets/theme-resilience.webp";

const RESORT_BOOKING_URL =
  "https://www.simplebooking.it/ibe2/hotel/9933?lang=EN&cur=USD&in=2026-09-15&out=2026-09-20&guests=A%2CA";

export const Route = createFileRoute("/diani")({
  head: () => ({
    meta: [
      { title: "Diani & the Venue | AAK Annual Convention 2026" },
      {
        name: "description",
        content:
          "Diamonds Leisure Beach & Golf Resort in Diani, Kwale County hosts the AAK Annual Convention 2026. Venue, build tours of Ukunda Airport and Mwache Dam, and travel notes.",
      },
      { property: "og:title", content: "Diani & the Venue — AAK Annual Convention 2026" },
      {
        property: "og:description",
        content:
          "Where the Convention happens: the coastal venue, the Kwale build tours and how to get to Diani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/diani" },
      { rel: "preload", as: "image", href: PHOTOS.dianiBeach.url },
    ],
  }),
  component: Diani,
});

function Diani() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="grid lg:grid-cols-2">
            <div className="relative flex flex-col justify-center px-5 pb-16 pt-36 md:px-12 md:pb-24 md:pt-44">
              <GlowOrb className="-left-20 top-16 h-72 w-72 opacity-[0.14]" />
              <PalmCanopy className="parallax-slow -top-6 right-6 h-52 w-52 text-primary/10 md:h-64 md:w-64" />
              <Reveal>
                <p className="rule-label">Venue & Setting</p>
              </Reveal>
              <WordRise
                as="h1"
                delay={90}
                className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-foreground md:text-6xl"
                text="Diamonds Leisure Beach & Golf Resort, Diani"
              />
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {CONVENTION.dates}. Sessions, exhibition, networking spaces, team building on the
                  beach and the closing gala dinner all sit within one coastal campus in Kwale
                  County.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <Link
                  to="/register"
                  className="shimmer-sheen mt-9 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
                >
                  Register as a delegate
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
            <Reveal variant="clip" className="min-h-[46vh] overflow-hidden lg:min-h-full">
              <img
                src={PHOTOS.dianiBeach.url}
                alt={PHOTOS.dianiBeach.alt}
                width={1400}
                height={900}
                fetchPriority="high"
                className="animate-ken-burns h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section className="surface-grain border-b border-border py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="rule-label">Accommodation · At The Venue</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                Rooms at Diamonds Leisure Beach &amp; Golf Resort
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 flex flex-col items-start gap-5 rounded-sm border-2 border-destructive/60 bg-destructive/10 px-6 py-6 shadow-sm md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  Rooms at Diamonds Leisure Beach &amp; Golf Resort can be booked directly online.
                </p>
                <a
                  href={RESORT_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group shimmer-sheen inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
                >
                  Book Your Room
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Accommodation is not included in the delegate fee. Whether booking at the resort
                directly or at any nearby property, arranging a room is each delegate's own
                responsibility.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 rule-label">Or Contact The Resort Directly</p>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-6 text-sm">
                <a
                  href={`tel:${VENUE_CONTACT.phone.replace(/\s+/g, "")}`}
                  className="underline-sweep font-medium text-foreground"
                >
                  {VENUE_CONTACT.phone}
                </a>
                <a
                  href={`mailto:${VENUE_CONTACT.email}`}
                  className="underline-sweep font-medium text-foreground"
                >
                  {VENUE_CONTACT.email}
                </a>
                <a
                  href={`https://${VENUE_CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-sweep font-medium text-foreground"
                >
                  {VENUE_CONTACT.website}
                </a>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {ACCOMMODATION.map((room, i) => (
                <Reveal key={room.name} delay={i * 80}>
                  <article className="h-full bg-card p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                    <p className="text-[0.62rem] tracking-[0.18em] text-primary uppercase">
                      {room.board}
                    </p>
                    <h3 className="mt-3 font-display text-xl leading-snug font-semibold text-foreground md:text-2xl">
                      {room.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {room.body}
                    </p>
                    <ul className="mt-6 space-y-2 border-t border-border pt-5">
                      {room.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="rule-label">Accommodation · Nearby The Venue</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                15 more places to stay near Diamonds Leisure
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Distances are measured from Diamonds Leisure Beach &amp; Golf Resort. Prices are per
                person per night in Kenya Shillings and vary with occupancy and meal plan unless
                noted. The AAK Secretariat does not book or manage these stays — contact each
                property directly to arrange your own reservation.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-3 max-w-2xl text-xs text-muted-foreground">
                Scrolls automatically — hover or drag to browse at your own pace.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-10">
              <NearbyStaysCarousel />
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Reveal>
                <p className="rule-label">Resort Facilities</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                  Everything on one coastal campus
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <ul className="mt-8 space-y-4">
                  {RESORT_FACILITIES.map((item) => (
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
            <Reveal variant="clip" delay={120} className="overflow-hidden rounded-sm">
              <img
                src={PHOTOS.dianiSunrise.url}
                alt={PHOTOS.dianiSunrise.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-sand py-16 text-sand-foreground md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="rule-label">Build Tours</p>
              <h2 className="mt-3 max-w-xl font-display text-2xl leading-snug font-semibold md:text-3xl">
                Ukunda Airport, Mwache Dam and Kisite Mpunguti Marine Park & Wasini Island
              </h2>
            </div>
            <Link
              to="/tours"
              className="lift inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-background px-6 py-3.5 font-display text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              See the build tours
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
            <Reveal variant="clip" className="overflow-hidden rounded-sm">
              <img
                src={PHOTOS.kwale.url}
                alt={PHOTOS.kwale.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="rule-label">Getting There</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                  Travel and arrival
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <ul className="mt-8 space-y-5">
                  {[
                    {
                      k: "By air",
                      v: "Daily flights from Nairobi to Ukunda (Diani) Airport, or to Moi International Airport, Mombasa, with a road transfer south.",
                    },
                    {
                      k: "By road",
                      v: "Diani sits roughly 30 km south of Mombasa via the Likoni crossing and the Lunga Lunga road.",
                    },
                    {
                      k: "Registration desk",
                      v: "Open all day on Wednesday, 16 September, with delegate code scanning from 0800 on subsequent mornings.",
                    },
                  ].map((row) => (
                    <li key={row.k} className="border-b border-border pb-5">
                      <p className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                        {row.k}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">{row.v}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-sand py-24 text-sand-foreground md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <p className="rule-label">Community</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl leading-tight font-semibold md:text-5xl">
                  Grow A Classroom, Mabokoni Primary School
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  On the opening day, the AAK Governing Council and delegates spend 0900 to 1400
                  mentoring students at Mabokoni Primary School. The Student Design Competition
                  awards are presented at the closing gala dinner.
                </p>
              </Reveal>
            </div>
            <Reveal variant="clip" delay={120} className="overflow-hidden rounded-sm">
              <img
                src={themeResilience}
                alt="Coral-stone colonnade with carved timber detailing in warm coastal sunlight"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Reveal>
                <p className="rule-label">Contact The Secretariat</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight font-semibold text-foreground md:text-5xl">
                  Questions about the venue, stay or build tours?
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Registered delegates and prospective attendees can reach the AAK Secretariat
                  directly — venue questions, accessibility needs and build tour queries all go
                  here. Accommodation bookings are handled directly with the hotel or resort of your
                  choice, not through the Secretariat.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <InquiryForm
                subjectContext="Diani venue enquiry"
                messagePlaceholder="Ask about the venue, accessibility or build tours…"
                className="rounded-sm border border-border bg-card p-8 md:p-10"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
