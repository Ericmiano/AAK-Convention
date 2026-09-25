import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, WordRise } from "@/components/site/Reveal";
import { GlowOrb, PalmCanopy } from "@/components/site/Tropics";
import { CONVENTION } from "@/lib/convention";
import day1Video from "@/assets/highlights-video/day1-highlights.mp4";
import day2Video from "@/assets/highlights-video/day2-highlights.mp4";
import day1Poster from "@/assets/highlights-video/day1-poster.jpg";
import day2Poster from "@/assets/highlights-video/day2-poster.jpg";

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

const photoModules = import.meta.glob<string>("../assets/highlights/*/*.jpg", {
  eager: true,
  import: "default",
});

function photosFor(folder: string) {
  return Object.entries(photoModules)
    .filter(([path]) => path.includes(`/highlights/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
}

type Group = { label: string; photos: string[] };

const RECAP_DAYS: {
  day: string;
  date: string;
  title: string;
  body: string;
  video?: { src: string; poster: string; label: string };
  groups: Group[];
}[] = [
  {
    day: "Day 01",
    date: "Wednesday, 16 September 2026",
    title: "Arrival, Golf & Community Engagement",
    body: "Delegates arrived in Diani as the Charity Golf Tournament teed off, and the AAK Governing Council joined the Grow A Classroom Mentorship at Mabokoni Primary School for pupils' awards and certificates.",
    video: { src: day1Video, poster: day1Poster, label: "Day 1 highlight reel" },
    groups: [{ label: "", photos: photosFor("day-1") }],
  },
  {
    day: "Day 02",
    date: "Thursday, 17 September 2026",
    title: "Official Opening, Climate Action & Urban Governance",
    body: "The Official Opening Ceremony and keynote by Charles Hinga, CBS, opened the day, followed by sessions on nature-based solutions, circular materials, devolution and urban governance, the Built Environment Baraza, and the Opening Cocktail on the shoreline.",
    video: { src: day2Video, poster: day2Poster, label: "Day 2 highlight reel" },
    groups: [
      { label: "Sessions", photos: photosFor("day-2-sessions") },
      { label: "Exhibition", photos: photosFor("day-2-exhibition") },
      { label: "Opening Cocktail", photos: photosFor("day-2-cocktail") },
      { label: "Governing Council Meeting", photos: photosFor("day-2-meeting") },
    ],
  },
  {
    day: "Day 03",
    date: "Friday, 18 September 2026",
    title: "People, Place, Innovation & the Future of Construction",
    body: "Sessions on cultural heritage, material innovation and construction technology gave way to the Build Tour of Kwale, team building on the beach, and the Closing Gala Dinner with the Charity Golf and Grow A Classroom awards.",
    groups: [
      { label: "Sessions", photos: photosFor("day-3-sessions") },
      { label: "Build Tour of Kwale", photos: photosFor("day-3-build-tour") },
      { label: "Exhibition", photos: photosFor("day-3-exhibition") },
      { label: "Closing Gala Dinner", photos: photosFor("day-3-dinner") },
    ],
  },
  {
    day: "Day 04",
    date: "Saturday, 19 September 2026",
    title: "Post-Convention Build Tour",
    body: "An optional day on the coast — Kisite Mpunguti Marine National Park and Wasini Island — closed out the Convention.",
    groups: [],
  },
];

function PhotoGrid({ photos }: { photos: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (photos.length === 0) return null;
  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group aspect-[4/3] overflow-hidden rounded-sm border border-border bg-surface"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Convention photo</DialogTitle>
          {openIndex !== null && (
            <img
              src={photos[openIndex]}
              alt=""
              className="max-h-[85vh] w-full rounded-sm object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function VideoBlock({ src, poster, label }: { src: string; poster: string; label: string }) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Videos are loaded on demand via fetch -> Blob rather than a direct
  // <video src>. Browser extensions that auto-detect and offer to download
  // playable media (download managers, etc.) key off a real, directly
  // fetchable URL on the video element — a blob: URL isn't one, and nothing
  // loads at all until the visitor actually presses play, which also saves
  // everyone who doesn't click from downloading 30+MB for nothing.
  useEffect(() => {
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [blobUrl]);

  async function handlePlay() {
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(`${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
      setStatus("idle");
      requestAnimationFrame(() => videoRef.current?.play());
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-black">
      {blobUrl ? (
        <video ref={videoRef} src={blobUrl} controls className="h-full w-full" aria-label={label} />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Play ${label}`}
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            {status === "loading" ? (
              <span className="rounded-full bg-background/90 px-5 py-2.5 font-display text-xs font-semibold tracking-wide text-foreground">
                Loading video…
              </span>
            ) : status === "error" ? (
              <span className="rounded-full bg-background/90 px-5 py-2.5 font-display text-xs font-semibold tracking-wide text-destructive">
                Couldn't load — tap to retry
              </span>
            ) : (
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 shadow-[var(--shadow-raised)] transition-transform duration-300 group-hover:scale-110">
                <span
                  aria-hidden="true"
                  className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-foreground"
                />
              </span>
            )}
          </span>
        </button>
      )}
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
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="space-y-20 md:space-y-28">
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

                    {d.video && (
                      <div className="mt-7 max-w-xl">
                        <VideoBlock {...d.video} />
                      </div>
                    )}

                    {d.groups.length === 0 ? (
                      <p className="mt-7 text-xs text-muted-foreground">
                        Photos from this day are being added.
                      </p>
                    ) : (
                      <div className="mt-7 space-y-8">
                        {d.groups.map(
                          (g) =>
                            g.photos.length > 0 && (
                              <div key={g.label || d.day}>
                                {g.label && (
                                  <p className="mb-3 text-[0.62rem] tracking-[0.18em] text-primary uppercase">
                                    {g.label}
                                  </p>
                                )}
                                <PhotoGrid photos={g.photos} />
                              </div>
                            ),
                        )}
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
