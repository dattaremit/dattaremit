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
      {/* Subtle inverted mesh */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 20%, color-mix(in oklch, var(--brand) 12%, transparent) 0%, transparent 50%), radial-gradient(ellipse at 85% 85%, color-mix(in oklch, var(--brand-deep) 10%, transparent) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--background) 1px, transparent 1px), linear-gradient(to bottom, var(--background) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-background/60">
            <span className="tabular">06</span>
            <span className="h-px w-6 bg-background/30" />
            Security & data protection
          </div>
          <h2 className="display-mixed text-[clamp(2rem,5vw,3.75rem)]">
            <span className="font-semibold">How we protect</span>{" "}
            <span className="font-light italic text-background/70">you.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg text-background/70 leading-relaxed">
            Concrete controls, not marketing claims. Every item below is
            implemented in production today.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-background/12 bg-background/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-background/[0.06] hover:border-background/25"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-normal tabular tracking-[0.18em] uppercase text-background/50">
                  0{(i + 1).toString().padStart(1, "0")} / 08
                </span>
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-[var(--brand)]/20 text-[var(--brand)] transition-all group-hover:bg-[var(--brand)]/30">
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
