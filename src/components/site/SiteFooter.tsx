import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Check, Copy, Facebook, Instagram, X as XIcon, type LucideIcon } from "lucide-react";
import { CONVENTION } from "@/lib/convention";
import { WaveDivider } from "@/components/site/Tropics";
import { TermsDialog } from "@/components/site/TermsDialog";
import { PartnersStrip } from "@/components/site/PartnersStrip";

const SECRETARIAT_EMAIL = "aak@aak.or.ke";

const LINKS: { to: string; label: string }[] = [
  { to: "/", label: "Convention" },
  { to: "/programme", label: "Programme" },
  { to: "/diani", label: "Diani & Stay" },
  { to: "/tours", label: "Build Tours" },
  { to: "/register", label: "Registration & fees" },
];

const SOCIALS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "https://instagram.com/arch_ke", label: "AAK on Instagram", icon: Instagram },
  { href: "https://facebook.com/ArchKE", label: "AAK on Facebook", icon: Facebook },
  { href: "https://x.com/arch_ke", label: "AAK on X", icon: XIcon },
];

export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  // The static export serves each route from its own /route/index.html, so
  // the browser's actual pathname carries a trailing slash the route
  // definitions don't — strip it before comparing, or SSR (no slash) and
  // client hydration (slash) disagree and React throws a hydration mismatch.
  const pathname = useRouterState({ select: (s) => s.location.pathname.replace(/\/$/, "") });
  const onProgrammePage = pathname === "/programme";
  const onRegisterPage = pathname === "/register";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SECRETARIAT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link above remains the primary path.
    }
  }

  return (
    <footer className="relative border-t border-border bg-sand text-sand-foreground">
      <WaveDivider className="-mt-px text-background" flip />
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="rule-label">{CONVENTION.organiser}</p>
            <h2 className="mt-3 font-display text-2xl leading-tight md:text-3xl">
              {CONVENTION.name} — {CONVENTION.dates}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {CONVENTION.venue}, {CONVENTION.location}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {onProgrammePage ? (
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="lift rounded-lg border border-border bg-background px-5 py-3 font-display text-sm font-medium text-foreground"
              >
                Back to top
              </button>
            ) : (
              <Link
                to="/programme"
                className="lift rounded-lg border border-border bg-background px-5 py-3 font-display text-sm font-medium text-foreground"
              >
                View the programme
              </Link>
            )}
            {onRegisterPage ? (
              <a
                href="#register-cta"
                className="lift rounded-lg bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
              >
                Register as a delegate
              </a>
            ) : (
              <Link
                to="/register"
                className="lift rounded-lg bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
              >
                Register as a delegate
              </Link>
            )}
          </div>
        </div>

        <nav className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-8">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="underline-sweep font-display text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <span className="inline-flex items-center gap-1.5">
            <a
              href={`mailto:${SECRETARIAT_EMAIL}?subject=AAK%20Annual%20Convention%202026`}
              className="underline-sweep font-display text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {SECRETARIAT_EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email address copied" : "Copy email address"}
              title={copied ? "Copied" : "No mail app? Copy the address"}
              className="inline-flex h-5 w-5 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </span>
        </nav>

        <div className="mt-10 border-t border-border pt-8">
          <PartnersStrip />
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <p>© 2026 Architectural Association of Kenya. All rights reserved.</p>
            <TermsDialog className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-surface" />
          </div>
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="lift inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <p>Convention enquiries: the AAK Secretariat, Nairobi.</p>
        </div>
      </div>
    </footer>
  );
}
