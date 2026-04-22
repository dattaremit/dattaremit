import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  LegalPageHero,
  LegalBody,
  LegalSectionHeading,
} from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Security",
  description:
    "DattaRemit's security program: how we encrypt customer data, authenticate users, harden our mobile and web apps, monitor for abuse, and respond to incidents.",
  openGraph: {
    title: "Security | DattaRemit",
    description:
      "DattaRemit's security program: how we encrypt customer data, authenticate users, and protect every transfer.",
    url: "https://dattaremit.com/security",
  },
  alternates: {
    canonical: "https://dattaremit.com/security",
  },
};

type Section =
  | { title: string; content: string }
  | { title: string; intro: string; items: string[] };

const sections: Section[] = [
  {
    title: "Our approach",
    content:
      "DattaRemit treats security as a product requirement, not a checkbox. We operate as a partner-of-record on top of our regulated payments partner, Zynk Labs, which means we do not custody customer funds. Our platform's job is to collect the information necessary to initiate a transfer, authenticate the sender, move data securely to the settlement rail, and keep customers informed. Every engineering change is reviewed through a security lens before it ships.",
  },
  {
    title: "Data classification",
    intro:
      "We classify every field we store into one of three categories and apply controls accordingly:",
    items: [
      "Highly sensitive personal data — full name, date of birth, phone number, email address, residential address, government-issued identity numbers, bank account numbers, and IFSC codes. Encrypted at the field level with AES-256-GCM using master keys stored in AWS Key Management Service (KMS). For fields that must be searched (e.g. email lookup), we additionally store an HMAC-SHA256 blind index so the plaintext never leaves the application, but exact-match lookups still work.",
      "Account metadata — account status, KYC state, Clerk user identifier, timestamps, and activity logs. Stored in managed PostgreSQL with TLS-enforced connections and daily encrypted backups.",
      "Non-sensitive operational data — anonymised error traces, performance metrics, and health-check results. Sent to Sentry with PII redacted at source.",
    ],
  },
  {
    title: "Encryption",
    intro: "Every byte of customer data is encrypted in transit and at rest:",
    items: [
      "In transit: TLS 1.2 or higher across all client–server and service-to-service links. HSTS is enforced with a one-year max-age and the preload flag, so browsers will refuse non-HTTPS connections.",
      "At rest (application layer): AES-256-GCM with a unique 96-bit IV per encrypt, 128-bit authentication tag, and master-key operations performed inside AWS KMS. Plaintext keys never leave KMS.",
      "At rest (storage layer): managed PostgreSQL volumes are encrypted at rest by the cloud provider. Database connections use a pinned certificate authority and require sslmode=verify-full.",
      "Backups: encrypted with the same discipline as primary storage. Key rotation is performed via KMS without re-encrypting ciphertext, using envelope encryption.",
    ],
  },
  {
    title: "Authentication and session security",
    intro:
      "Customer authentication is handled by Clerk, an enterprise-grade identity provider. On top of Clerk's baseline we add:",
    items: [
      "Authorised-parties allow-listing — every JWT is rejected if the 'azp' claim does not match the domains operated by DattaRemit.",
      "Step-up verification on sensitive actions — initiating a transfer on the web requires a fresh 6-digit email code issued immediately before the action. Re-authentication is required even if the user's session is already valid.",
      "Biometric gating on mobile — the mobile app prompts for Face ID or fingerprint before any transfer. After three failed attempts, biometrics are locked out until the user re-authenticates through Clerk.",
      "Short-lived tokens — session tokens are rotated frequently and invalidated server-side on logout or password change.",
    ],
  },
  {
    title: "Transfer integrity",
    intro:
      "Money movement is the most sensitive path in our platform. We harden it with:",
    items: [
      "Idempotency keys — every financial request carries a client-generated key. The server records the key, its request hash, and its result in a dedicated table with a 24-hour TTL. Replaying the same request returns the original result; replaying with a different payload is rejected.",
      "Serializable transaction isolation — weekly limit enforcement happens inside a row-locked Serializable transaction to prevent race-condition double spends.",
      "Signed webhooks — inbound webhooks from Zynk Labs and Clerk are verified with HMAC-SHA256, a timestamp-prefixed payload, and a five-minute replay window. Comparisons use timing-safe equality.",
      "Request tracing — every request is tagged with an X-Request-Id which is logged, returned in the response, and quoted by support so any transfer can be traced end-to-end.",
    ],
  },
  {
    title: "Application hardening",
    intro: "The web and API tier ships with a defensive baseline:",
    items: [
      "Strict Content Security Policy (default-src 'none', frame-ancestors 'none', object-src 'none').",
      "X-Frame-Options DENY and Cross-Origin-Opener-Policy / Cross-Origin-Resource-Policy set to same-origin.",
      "X-Content-Type-Options nosniff and Referrer-Policy no-referrer.",
      "Multi-tier rate limiting — 200 requests per 15 minutes per IP globally, 200 per 15 minutes per user for authenticated endpoints, 30 per 10 minutes for sensitive financial endpoints, and 10 per 15 minutes for bank-link-token generation.",
      "Per-request structured logging via Winston with automatic PII redaction so sensitive fields never appear in log files or Sentry breadcrumbs.",
    ],
  },
  {
    title: "Mobile hardening",
    intro: "On iOS and Android we apply additional platform-specific defences:",
    items: [
      "Screen-capture protection on sensitive screens (KYC, authentication, transfer confirmation).",
      "Push tokens, device identifiers, and secure settings stored in expo-secure-store (iOS Keychain / Android Keystore) and wiped on logout.",
      "Biometric authentication via expo-local-authentication (Face ID, Touch ID, Fingerprint) with server-aware enrollment state and three-strike lockout.",
      "Certificate handling enforces the OS trust store; no debug-only CAs are bundled with release builds.",
    ],
  },
  {
    title: "Infrastructure and operations",
    intro:
      "Our production environment runs on managed cloud infrastructure with documented operational controls:",
    items: [
      "Managed PostgreSQL with encrypted-at-rest storage, point-in-time recovery, and pinned-CA TLS.",
      "Application containers built with multi-stage Docker images on minimal Alpine base, shipped to a managed container platform.",
      "Least-privilege IAM — application workloads assume roles scoped to the minimum set of KMS, database, and storage operations they actually perform.",
      "Secrets are never committed to source control; they are injected at runtime from the platform's secret store.",
      "Health checks probe database connectivity with a 5-second timeout so the load balancer can remove unhealthy instances automatically.",
    ],
  },
  {
    title: "Secure development lifecycle",
    intro: "Every change goes through the same guarded pipeline:",
    items: [
      "Static analysis — Semgrep scans every commit and pull request for known insecure patterns.",
      "Dependency audit — bun audit runs on every CI build and blocks merges on high-severity advisories.",
      "Container scanning — Trivy scans every production image for OS and application-layer vulnerabilities after build.",
      "Type checking — the entire server is compiled with TypeScript strict mode; the CI build fails on any type error.",
      "Automated test suite — integration tests run on every push and pull request before merge.",
    ],
  },
  {
    title: "Logging, monitoring and incident response",
    intro:
      "We can answer the question ‘what happened to a customer's transfer?’ within minutes:",
    items: [
      "Every request carries an X-Request-Id that is written to application logs, admin audit logs, and activity records tied to the affected user and transaction.",
      "Winston writes structured JSON logs in production with PII redacted at source. Warnings and errors are forwarded to Sentry with breadcrumbs for the relevant transfer.",
      "An admin audit log records every action taken by internal staff, including actor ID, timestamp, affected resource, and a human-readable description.",
      "If a security incident affects customer data, we notify affected customers without undue delay and follow the notification timelines required by applicable law. Contact security@dattaremit.com to report a suspected vulnerability or incident.",
    ],
  },
  {
    title: "Physical and organisational security",
    intro:
      "Our engineering team follows operational hygiene that complements the technical controls:",
    items: [
      "Access to production is gated by SSO and hardware-backed MFA.",
      "Engineers receive security and privacy training at onboarding and annually thereafter.",
      "Production database access is audited and limited to named engineers with a legitimate business need.",
      "Laptops are full-disk encrypted and enrolled in mobile device management.",
    ],
  },
  {
    title: "Responsible disclosure",
    content:
      "If you believe you have found a security vulnerability in DattaRemit, please report it to security@dattaremit.com. Please include a clear description, reproduction steps, and any proof-of-concept material. We will acknowledge your report within three business days, investigate in good faith, and keep you informed while we work on a fix. We ask that you avoid testing that could disrupt service, violate privacy, or destroy data, and that you do not disclose the issue publicly until we have released a fix.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageHero
          eyebrow="Security"
          title="Security."
          titleAccent="The controls behind every transfer."
          description="How we protect your data, your money, and your account — with concrete technical measures, not marketing claims."
          lastUpdated="April 22, 2026"
        />
        <LegalBody>
          {sections.map((section, i) => (
            <div key={section.title}>
              <LegalSectionHeading number={i + 1} title={section.title} />
              {"content" in section && !("intro" in section) && (
                <p>{section.content}</p>
              )}
              {"intro" in section && (
                <>
                  <p className="mb-3">{section.intro}</p>
                  {"items" in section && (
                    <ul>
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </LegalBody>
      </main>
      <Footer />
    </>
  );
}
