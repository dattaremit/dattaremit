import Link from "next/link";
import { Lock, ShieldCheck, Fingerprint, ArrowUpRight } from "lucide-react";

const trustPoints = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description:
      "Personal data is AES-256 encrypted, at rest and in transit.",
  },
  {
    icon: ShieldCheck,
    title: "Funds in regulated custody",
    description:
      "Cybrid holds and settles every transfer under their licenses.",
  },
  {
    icon: Fingerprint,
    title: "Verified every send",
    description:
      "Email code or Face ID confirms each transfer before it leaves.",
  },
];

export function TrustSection() {
  return (
    <section
      id="trust"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="display-mixed text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-foreground">
              With us, you&rsquo;re safe.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Your data is encrypted before it leaves your device. Funds are
              held by a regulated custodian &mdash; not by us. Every transfer
              is verified.
            </p>
            <Link
              href="/security"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Read the full security overview
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right thin trust rows */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {trustPoints.map((point) => (
                <li
                  key={point.title}
                  className="flex items-start gap-5 py-6 md:py-7"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand-deep)]">
                    <point.icon className="size-[18px]" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[17px] font-semibold tracking-tight text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
