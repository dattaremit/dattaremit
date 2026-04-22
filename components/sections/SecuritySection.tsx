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
    title: "Field-level encryption",
    description:
      "PII encrypted with AES-256-GCM. Master keys never leave AWS KMS.",
  },
  {
    icon: Lock,
    title: "TLS everywhere",
    description:
      "TLS 1.2+ on every link with HSTS preload, strict CSP, and hardened headers.",
  },
  {
    icon: Fingerprint,
    title: "Step-up authentication",
    description:
      "Email-code step-up on web transfers. Biometric gate with lockout on mobile.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated custody",
    description:
      "Funds held and settled by Zynk Labs. DattaRemit never custodies money.",
  },
  {
    icon: FileCheck,
    title: "Idempotent ops",
    description:
      "Every money-movement request carries an idempotency key. Signed webhooks.",
  },
  {
    icon: Eye,
    title: "PII-redacted logs",
    description:
      "Structured logs mask sensitive fields before they are written or shipped.",
  },
  {
    icon: AlertTriangle,
    title: "Continuous review",
    description:
      "Semgrep SAST on every change. Dependency audit and Trivy container scans.",
  },
  {
    icon: Smartphone,
    title: "Mobile hardening",
    description:
      "Screen-capture block. Tokens stored in iOS Keychain / Android Keystore.",
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
            Concrete controls, not marketing claims. Every item below is
            implemented in production today.
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
