import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HeroGlobe } from "@/components/ui/hero-globe";

interface LegalPageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  lastUpdated: string;
  /** Show the animated globe motif behind the header (security/compliance). */
  showGlobe?: boolean;
}

export function LegalPageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  lastUpdated,
  showGlobe = false,
}: LegalPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border brand-mesh">
      {showGlobe ? (
        <HeroGlobe className="top-1/2 right-[-14%] hidden h-[420px] w-[420px] -translate-y-1/2 sm:right-[-6%] md:block md:h-[560px] md:w-[560px]" />
      ) : null}
      <div className="container mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-16 md:pb-20 relative z-10">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-muted-foreground mb-6"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">{eyebrow}</span>
        </nav>

        <div className="max-w-3xl">
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
  const cleanTitle = title.replace(/^\d+\.\s*/, "");
  return (
    <h2 className="text-lg md:text-xl font-semibold tracking-tight text-foreground mb-4">
      {cleanTitle}
    </h2>
  );
}
