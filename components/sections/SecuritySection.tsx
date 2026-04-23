import Link from "next/link";
import {
  ShieldCheck,
  KeyRound,
  Fingerprint,
  Lock,
  FileCheck,
  Eye,
  AlertTriangle,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";

const pillars = [
  {
    icon: KeyRound,
    title: "Your data is encrypted",
    description:
      "Personal details are individually locked. The master key stays inside Amazon's secure vault.",
  },
  {
    icon: Lock,
    title: "Private connections",
    description:
      "Every link between you and us is encrypted. Your browser refuses anything weaker.",
  },
  {
    icon: Fingerprint,
    title: "Extra check on transfers",
    description:
      "Every transfer asks for a fresh email code on the web, or Face ID / fingerprint on mobile.",
  },
  {
    icon: ShieldCheck,
    title: "Your money stays with Cybrid",
    description:
      "Funds are held and settled by Cybrid. DattaRemit never touches the money itself.",
  },
  {
    icon: FileCheck,
    title: "No double charges",
    description:
      "If the app retries after a dropped connection, you're never charged twice for the same transfer.",
  },
  {
    icon: Eye,
    title: "Personal info off our logs",
    description:
      "Sensitive fields are stripped before anything is written to our logs or sent anywhere.",
  },
  {
    icon: AlertTriangle,
    title: "Every change reviewed",
    description:
      "Each code change is scanned for known issues and vulnerabilities before it reaches you.",
  },
  {
    icon: Smartphone,
    title: "Mobile app lockdown",
    description:
      "Sensitive screens can't be screenshotted. Logins live in your phone's built-in vault.",
  },
];

export function SecuritySection() {
  return (
    <section
      id="security"
      className="relative py-20 md:py-28 bg-foreground text-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <h2 className="display-mixed text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight">
            How we protect you.
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg text-background/70 leading-relaxed">
            Real protections, not marketing claims. Every item below is live
            in production today.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-background/10 bg-background/[0.03] p-5 transition-colors duration-200 hover:bg-background/[0.06] hover:border-background/20"
            >
              <div className="mb-5">
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-[var(--brand)]/20 text-[var(--brand)]">
                  <pillar.icon className="size-4" />
                </span>
              </div>
              <h3 className="text-[15px] font-semibold tracking-tight mb-2">
                {pillar.title}
              </h3>
              <p className="text-[13px] text-background/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/security"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-[var(--primary-foreground)] px-5 py-2.5 text-sm font-semibold transition-all hover:brightness-105"
          >
            Full security overview
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/compliance"
            className="group inline-flex items-center gap-2 text-sm font-medium text-background/70 hover:text-background transition-colors"
          >
            Compliance & subprocessors
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
