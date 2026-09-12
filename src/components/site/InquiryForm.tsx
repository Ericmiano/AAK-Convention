import { useId, useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SECRETARIAT_EMAIL = "secretariat@aak.or.ke";

type InquiryFormProps = {
  /** Prefixes the email subject, e.g. a tour name — keeps replies sortable at the Secretariat's end. */
  subjectContext: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  className?: string;
};

/**
 * No backend is wired up for this static site, so submitting opens the
 * delegate's mail client with a pre-filled message to the Secretariat —
 * matching the mailto pattern already used in the site footer.
 */
export function InquiryForm({
  subjectContext,
  messageLabel = "Message",
  messagePlaceholder = "Tell us a little about your enquiry.",
  submitLabel = "Send to the Secretariat",
  className = "",
}: InquiryFormProps) {
  const formId = useId();
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `${subjectContext} — ${name || "AAK Convention 2026"}`;
    const bodyLines = [message, "", `Name: ${name}`, `Email: ${email}`];
    const mailto = `mailto:${SECRETARIAT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n"),
    )}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className={`rounded-sm border border-border bg-surface p-6 text-sm text-foreground ${className}`}
      >
        <p className="font-display text-base font-semibold">Your mail app should now be open.</p>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Send the message to reach the AAK Secretariat directly at {SECRETARIAT_EMAIL}.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 font-display text-xs font-medium text-primary underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 ${className}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor={`${formId}-name`} className="text-xs font-medium text-foreground">
            Name
          </label>
          <Input
            id={`${formId}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Wanjiru"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor={`${formId}-email`} className="text-xs font-medium text-foreground">
            Email
          </label>
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={`${formId}-message`} className="text-xs font-medium text-foreground">
          {messageLabel}
        </label>
        <Textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          placeholder={messagePlaceholder}
        />
      </div>
      <Button type="submit" className="w-fit">
        {submitLabel}
      </Button>
    </form>
  );
}
