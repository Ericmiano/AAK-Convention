import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-16T09:00:00+03:00").getTime();

function parts(ms: number) {
  const clamped = Math.max(ms, 0);
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped / 3_600_000) % 24),
    minutes: Math.floor((clamped / 60_000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const t = parts(TARGET - (now ?? TARGET));
  const cells = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <dl className="grid grid-cols-4 gap-px overflow-hidden rounded-sm border border-border bg-border">
      {cells.map((cell) => (
        <div key={cell.label} className="bg-card px-2 py-4 text-center">
          <dd className="font-display text-2xl font-semibold tabular-nums text-foreground md:text-3xl">
            {now === null ? "––" : String(cell.value).padStart(2, "0")}
          </dd>
          <dt className="mt-1 text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">{cell.label}</dt>
        </div>
      ))}
    </dl>
  );
}
