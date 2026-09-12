import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TERMS_TITLE, TERMS_INTRO, TERMS_CLOSING, TERMS_SECTIONS } from "@/lib/terms";

export function TermsDialog({ className = "" }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={`lift font-display transition-colors ${className}`}>
          Terms &amp; Conditions
        </button>
      </DialogTrigger>
      <DialogContent className="grid max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl grid-rows-[auto_1fr] gap-0 overflow-hidden rounded-sm p-0 sm:rounded-sm">
        <DialogHeader className="border-b border-border px-6 py-5 text-left">
          <p className="rule-label">Terms &amp; Conditions</p>
          <DialogTitle className="mt-1.5 font-display text-lg font-semibold leading-snug text-foreground md:text-xl">
            {TERMS_TITLE}
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto px-6 py-6">
          <p className="text-sm leading-relaxed text-muted-foreground">{TERMS_INTRO}</p>

          <div className="mt-8 space-y-8">
            {TERMS_SECTIONS.map((section) => (
              <section key={section.title}>
                <h3 className="font-display text-sm font-semibold tracking-[0.04em] text-foreground">
                  {section.title}
                </h3>
                <div className="mt-3 space-y-3">
                  {section.blocks.map((block, i) =>
                    block.type === "paragraph" ? (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {block.text}
                      </p>
                    ) : (
                      <div key={i} className="space-y-3">
                        {block.intro?.map((line, j) => (
                          <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                            {line}
                          </p>
                        ))}
                        <ul className="space-y-2">
                          {block.items.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {block.outro && (
                          <p className="text-sm leading-relaxed text-muted-foreground">{block.outro}</p>
                        )}
                      </div>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed font-medium text-foreground">
            {TERMS_CLOSING}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
