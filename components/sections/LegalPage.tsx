import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LegalPageHeroProps {
  index: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  lastUpdated: string;
}

export function LegalPageHero({
  index,
  eyebrow,
  title,
  titleAccent,
  description,
  lastUpdated,
}: LegalPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border brand-mesh">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-16 md:pb-20 relative">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-muted-foreground mb-6"
        >
          <Link
            href="/"
            className="hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">{eyebrow}</span>
        </nav>

        <div className="max-w-3xl">
          <div className="eyebrow mb-5">
            <span className="tabular">{index}</span>
            <span className="h-px w-6 bg-foreground/30" />
            {eyebrow}
          </div>
          <h1 className="display-mixed text-[clamp(2.25rem,6vw,4.5rem)] text-foreground">
            <span className="font-semibold">{title}</span>
            {titleAccent ? (
              <>
                {" "}
                <span className="font-light italic text-muted-foreground">
                  {titleAccent}
                </span>
              </>
            ) : null}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          ) : null}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur-sm px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[var(--brand-deep)]" />
            Last updated {lastUpdated}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl prose-legal space-y-10">{children}</div>
      </div>
    </section>
  );
}

export function LegalSectionHeading({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  const n = number.toString().padStart(2, "0");
  const cleanTitle = title.replace(/^\d+\.\s*/, "");
  return (
    <div className="flex items-baseline gap-3 mb-4">
      <span className="text-[10px] font-normal tabular tracking-[0.18em] uppercase text-muted-foreground pt-1 shrink-0">
        {n}
      </span>
      <h2 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
        {cleanTitle}
      </h2>
    </div>
  );
}
