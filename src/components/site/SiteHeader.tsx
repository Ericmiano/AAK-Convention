import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ScrollProgress } from "@/components/site/Tropics";
import logoMark from "@/assets/logo-mark.webp";
import aakOrgLogo from "@/assets/aak-org-logo.png";

const NAV = [
  { to: "/", label: "Convention" },
  { to: "/highlights", label: "Highlights" },
  { to: "/programme", label: "Programme" },
  { to: "/diani", label: "Diani & Stay" },
  { to: "/tours", label: "Build Tours" },
  { to: "/register", label: "Registration Info" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  // The static export serves each route from its own /route/index.html, so the
  // browser's actual pathname carries a trailing slash the route definitions
  // don't — strip it (but keep "/" intact) before comparing.
  const pathname = useRouterState({
    select: (s) =>
      s.location.pathname.length > 1 ? s.location.pathname.replace(/\/$/, "") : s.location.pathname,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const activeItem = NAV.find((item) =>
      item.to === "/"
        ? pathname === "/"
        : pathname === item.to || pathname.startsWith(`${item.to}/`),
    );

    function measure() {
      const container = navRef.current;
      const node = activeItem ? linkRefs.current[activeItem.to] : null;
      if (!container || !node) {
        setIndicator(null);
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      setIndicator({ left: nodeRect.left - containerRect.left, width: nodeRect.width });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/85 shadow-[var(--shadow-soft)]"
            : "border-b border-transparent bg-background/55"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-4 px-5 transition-all duration-500 md:px-12 xl:px-20 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="https://aak.or.ke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Architectural Association of Kenya (opens in a new tab)"
              title="Visit the AAK website"
              className="lift hidden shrink-0 rounded-lg border border-border bg-background p-1.5 sm:block"
            >
              <img
                src={aakOrgLogo}
                alt="Architectural Association of Kenya"
                className="h-8 w-auto object-contain"
              />
            </a>

            <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background p-1.5 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105">
                <img src={logoMark} alt="AAK" className="h-full w-full object-contain" />
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block font-display text-sm font-semibold tracking-tight text-foreground">
                  Annual Convention 2026
                </span>
                <span className="block text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                  Diani · 16–19 Sept
                </span>
              </span>
            </Link>
          </div>

          <nav ref={navRef} className="relative hidden items-center gap-1 md:flex">
            {indicator && (
              <span
                aria-hidden="true"
                className="absolute inset-y-1 z-0 rounded-lg bg-surface transition-[left,width] duration-500"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  transitionTimingFunction: "var(--ease-out-soft)",
                }}
              />
            )}
            {NAV.map((item) => (
              <Link
                key={item.to}
                ref={(el) => {
                  linkRefs.current[item.to] = el;
                }}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={
                  item.to === "/register"
                    ? "relative z-10 ml-1 rounded-full bg-destructive px-4 py-2 font-display text-sm font-bold tracking-wide text-destructive-foreground shadow-[var(--shadow-raised)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-destructive/90 active:scale-95"
                    : "underline-sweep relative z-10 rounded-lg px-3 py-2 font-display text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-transform duration-300 active:scale-95 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="font-display text-lg leading-none">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>

        {open && (
          <div className="animate-tick-in border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={
                    item.to === "/register"
                      ? "mt-2 rounded-full bg-destructive px-4 py-3 text-center font-display text-base font-bold tracking-wide text-destructive-foreground shadow-[var(--shadow-raised)] transition-colors hover:bg-destructive/90"
                      : "border-b border-border py-3 font-display text-base text-foreground"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
