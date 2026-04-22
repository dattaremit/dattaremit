import Link from "next/link";
import {
  ShieldCheck,
  KeyRound,
  Fingerprint,
  Lock,
  FileCheck,
  Eye,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: KeyRound,
    title: "Field-level encryption with AWS KMS",
    description:
      "Personal data — email, phone, date of birth, bank details — is encrypted field-by-field with AES-256-GCM using master keys stored in AWS Key Management Service. Keys never leave KMS.",
  },
  {
    icon: Lock,
    title: "TLS everywhere, HSTS preload",
    description:
      "All traffic is served over TLS 1.2+ with strict HTTP security headers: HSTS (one-year, preload), strict Content Security Policy, X-Frame-Options DENY, and Referrer-Policy no-referrer.",
  },
  {
    icon: Fingerprint,
    title: "Biometric and step-up authentication",
    description:
      "Mobile transfers require Face ID or fingerprint confirmation with a three-strike lockout. Web transfers require a fresh email-code step-up. Passwords and sessions are managed by Clerk.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated fund custody",
    description:
      "Customer funds are held and settled by our regulated payments partner Zynk Labs. DattaRemit never takes custody of funds in its own name.",
  },
  {
    icon: FileCheck,
    title: "Idempotent, signed financial operations",
    description:
      "Every money-movement request carries an idempotency key to prevent duplicate transfers. Partner webhooks are HMAC-signed with a five-minute replay window and timing-safe verification.",
  },
  {
    icon: Eye,
    title: "Observability with PII redaction",
    description:
      "Structured logs mask personally identifiable fields before they are written or shipped. Errors flow to Sentry; X-Request-Id lets support trace any action end-to-end.",
  },
  {
    icon: AlertTriangle,
    title: "Continuous security review",
    description:
      "Every change is scanned by Semgrep (SAST), dependencies are audited on every CI run, and production container images are scanned with Trivy before release.",
  },
  {
    icon: Fingerprint,
    title: "Mobile hardening",
    description:
      "Sensitive screens disable screen capture. Push tokens and device identifiers are stored in the OS secure enclave (iOS Keychain / Android Keystore) and wiped on logout.",
  },
];

export function SecuritySection() {
  return (
    <section
      id="security"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <ShieldCheck className="size-4 text-primary" />
            Security and data protection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How we protect you
          </h2>
          <p className="text-lg text-muted-foreground">
            Concrete controls, not marketing claims. Every item below is
            implemented in production today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">
                <pillar.icon className="size-7" />
              </div>
              <h3 className="font-semibold mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Read the full security overview
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
