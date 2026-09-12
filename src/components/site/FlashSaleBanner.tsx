import { useEffect, useState } from "react";
import { OFFICIAL_REGISTRATION_URL } from "@/lib/tickets";

const SALE_START = new Date("2026-08-29T00:00:00+03:00").getTime();
const SALE_END = new Date("2026-09-01T00:00:00+03:00").getTime();

function timeParts(ms: number) {
  const clamped = Math.max(ms, 0);
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped / 3_600_000) % 24),
    minutes: Math.floor((clamped / 60_000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export function FlashSaleBanner() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now === null || now >= SALE_END) return null;

  const isLive = now >= SALE_START;
  const t = timeParts(SALE_END - now);

  return (
    <div
      className="shimmer-sheen animate-gradient-pan animate-flash-pop relative mb-10 overflow-hidden rounded-sm border-2 border-destructive shadow-[var(--shadow-raised)] md:mb-12"
      style={{
        background:
          "linear-gradient(120deg, var(--destructive) 0%, oklch(0.4 0.19 22.5) 50%, var(--destructive) 100%)",
        backgroundSize: "220% 220%",
      }}
    >
      <div className="relative flex flex-col items-center gap-4 px-6 py-6 text-center md:flex-row md:justify-between md:px-9 md:text-left">
        <div>
          {isLive ? (
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
              Flash Sale — Ongoing
            </span>
          ) : (
            <p className="text-xs font-bold tracking-[0.2em] text-destructive-foreground/85 uppercase">
              Starting midnight tonight.
            </p>
          )}
          <p className="mt-2 font-display text-xl font-extrabold tracking-tight text-destructive-foreground uppercase md:text-2xl">
            Save KES 7,000 this weekend!
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-destructive-foreground md:text-xl">
            <span className="text-destructive-foreground/60 line-through">KES 35,000</span>{" "}
            <span aria-hidden="true">→</span>{" "}
            <span className="text-2xl md:text-3xl">KES 28,000</span>
          </p>
          {isLive ? (
            <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-destructive-foreground/80 uppercase">
              Ends in{" "}
              <span className="tabular-nums">
                {t.days > 0 && `${t.days}d `}
                {String(t.hours).padStart(2, "0")}h {String(t.minutes).padStart(2, "0")}m{" "}
                {String(t.seconds).padStart(2, "0")}s
              </span>
            </p>
          ) : (
            <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-destructive-foreground/80 uppercase">
              Saturday – Monday · 29–31 August
            </p>
          )}
        </div>
        <a
          href={OFFICIAL_REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group animate-flash-nudge inline-flex shrink-0 items-center gap-3 rounded-sm bg-destructive-foreground px-7 py-3.5 font-display text-sm font-bold tracking-wide text-destructive transition-transform duration-300 hover:-translate-y-1 active:scale-[0.97]"
        >
          Register Here
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
}
