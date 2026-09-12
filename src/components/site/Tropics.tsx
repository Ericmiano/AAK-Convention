/**
 * Decorative tropical motion layers. All purely presentational.
 */

export function PalmCanopy({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute select-none ${className}`}>
      <svg viewBox="0 0 320 260" className="h-full w-full" fill="none">
        <g
          className="animate-palm-sway"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <path d="M160 0v70" />
          {[-70, -40, -12, 14, 42, 70].map((deg, i) => (
            <g key={deg} transform={`rotate(${deg} 160 62)`}>
              <path d={`M160 62c${18 + i * 3} 6 ${52 + i * 4} 24 ${74 + i * 5} 56`} />
              {[0.25, 0.45, 0.65, 0.85].map((t) => (
                <path
                  key={t}
                  d={`M${160 + (74 + i * 5) * t} ${62 + 56 * t * t}l${10 + i} ${-8 - i}`}
                  opacity="0.55"
                />
              ))}
            </g>
          ))}
        </g>
        <g className="animate-palm-sway-alt" stroke="currentColor" strokeWidth="1.1" opacity="0.5">
          {[-55, -25, 5, 35, 62].map((deg, i) => (
            <path
              key={deg}
              transform={`rotate(${deg} 96 34)`}
              d={`M96 34c${16 + i * 3} 8 ${44 + i * 4} 26 ${60 + i * 4} 54`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function WaveDivider({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative h-14 w-full overflow-hidden md:h-20 ${className}`}
      style={flip ? { transform: "rotate(180deg)" } : undefined}
    >
      <svg
        className="animate-wave h-full w-[200%]"
        viewBox="0 0 2880 80"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 40c120-26 240-26 360 0s240 26 360 0 240-26 360 0 240 26 360 0 240-26 360 0 240 26 360 0 240-26 360 0v40H0z" />
      </svg>
    </div>
  );
}

export function GlowOrb({
  className = "",
  gradient = "var(--gradient-crimson)",
}: {
  className?: string;
  gradient?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`animate-drift pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: gradient }}
    />
  );
}

export function ScrollProgress() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
    >
      <div className="scroll-progress-bar h-full w-full origin-left bg-primary/80" />
    </div>
  );
}
