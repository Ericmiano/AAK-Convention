import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Variant = "up" | "clip" | "left" | "right" | "scale" | "blur" | "tilt";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
  className?: string;
  as?: ElementType;
};

const CLASS: Record<Variant, string> = {
  up: "reveal",
  clip: "reveal-clip",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  blur: "reveal-blur",
  tilt: "reveal-tilt",
};

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function Reveal({ children, delay = 0, variant = "up", className = "", as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={`${CLASS[variant]} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Headline that animates in word by word. */
export function WordRise({
  text,
  className = "",
  delay = 0,
  as,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const Tag = (as ?? "span") as ElementType;
  const { ref, visible } = useInView<HTMLElement>();
  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={`word-rise ${visible ? "is-visible" : ""} ${className}`}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} style={{ ["--word-index" as string]: i }}>
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

/** Counts a number up when it scrolls into view. */
export function CountUp({
  value,
  duration = 1400,
  prefix = "",
  className = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
  className?: string;
}) {
  const { ref, visible } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {display.toLocaleString("en-KE")}
    </span>
  );
}
