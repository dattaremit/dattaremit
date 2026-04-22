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
    "How DattaRemit protects your data, your money, and your account — from sign-in to delivery.",
  openGraph: {
    title: "Security | DattaRemit",
    description:
      "How DattaRemit protects your data, your money, and your account on every transfer.",
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
    title: "How we think about security",
    content:
      "We don't hold your money — our regulated partner Cybrid does. Our job is to collect what's needed for your transfer, confirm it's really you, move your data safely, and keep you informed. Every change we ship gets a security review before it goes live.",
  },
  {
    title: "What we store, and how we protect it",
    intro:
      "We sort every piece of information by how sensitive it is, then protect it accordingly.",
    items: [
      "Personal details — your name, date of birth, phone, email, address, ID numbers, and bank account details. Each field is locked with its own encryption. The master key lives inside Amazon's key vault and never leaves it. For fields we need to look up (like your email), we also store a one-way fingerprint so we can find an exact match without ever unlocking the original.",
      "Account info — your account status, verification stage, sign-in ID, and activity history. Kept in a managed database with encrypted connections and daily encrypted backups.",
      "Diagnostic data — anonymised error reports and performance metrics. Anything personal is stripped out before it leaves your device.",
    ],
  },
  {
    title: "Encryption",
    intro: "Your data is locked down when it travels and when it sits still.",
    items: [
      "On the move: every connection uses modern TLS. We've opted into the strictest browser enforcement, so your browser will refuse to talk to us over anything weaker.",
      "At rest: sensitive fields are encrypted one by one with AES-256 — the same grade used for sensitive government data. The keys live inside Amazon Key Management Service and are never handled by our app in the clear.",
      "In backups: same protection as live data. Keys are rotated regularly without needing to re-encrypt everything.",
    ],
  },
  {
    title: "Sign-in and sessions",
    intro:
      "Sign-in is handled by Clerk, a trusted identity provider. On top of that we add:",
    items: [
      "Tokens from any domain other than ours are rejected outright.",
      "Starting a transfer on the web needs a fresh 6-digit code emailed to you — even if you're already signed in.",
      "On mobile, Face ID or fingerprint is required before every transfer. Three failed attempts lock biometrics until you sign in again.",
      "Sessions expire quickly and are cancelled the moment you log out or change your password.",
    ],
  },
  {
    title: "Protecting every transfer",
    intro: "Moving money is the most sensitive thing we do. A few specific guards:",
    items: [
      "Duplicate protection — if the app retries after a dropped connection, you won't be charged twice. A retry with different details is rejected instead of going through.",
      "Your weekly limit is checked inside a database lock, so you can't accidentally overspend by sending two transfers at the same instant.",
      "Messages we receive from Cybrid and Clerk are signed. We verify the signature and reject anything older than five minutes.",
      "Every request carries a unique ID we log on our side and return to you. Support can use it to trace a transfer from start to finish.",
    ],
  },
  {
    title: "Hardened web and API",
    intro: "The website and servers ship with a defensive baseline:",
    items: [
      "Strict browser rules block other sites from embedding, framing, or hijacking our pages.",
      "Rate limits on general traffic, signed-in users, financial actions, and bank-linking — enough headroom for normal use, enough friction to shut down abuse.",
      "Logs are scrubbed of personal information before anything is written to disk or sent to error tracking.",
    ],
  },
  {
    title: "Hardened mobile app",
    intro: "On iPhone and Android we add platform-specific protections:",
    items: [
      "Sensitive screens (identity check, sign-in, transfer confirmation) can't be screenshotted or screen-recorded.",
      "Security tokens and secure settings live in the phone's built-in vault — iOS Keychain or Android Keystore — and are wiped on logout.",
      "Biometric login uses Face ID, Touch ID, or the Android fingerprint reader. Three failures lock it until you sign in through Clerk again.",
      "Released builds only trust certificates the operating system trusts. No debug shortcuts ship to the App Store or Play Store.",
    ],
  },
  {
    title: "Infrastructure",
    intro: "Production runs on managed cloud infrastructure with documented controls:",
    items: [
      "Managed database with encrypted storage and point-in-time recovery, so we can roll back to any moment if something breaks.",
      "The app runs in small, isolated containers on a locked-down platform.",
      "Each part of the system only has the access it actually needs — nothing more.",
      "Secrets (API keys, database passwords) are never in our source code. They're loaded at runtime from a secure store.",
      "Health checks pull unhealthy servers out of rotation automatically, so you always reach a working one.",
    ],
  },
  {
    title: "How we write and ship code",
    intro: "Every change goes through the same checks before it reaches you:",
    items: [
      "Automatic scans flag known risky patterns on every commit.",
      "Dependency audits block any merge that introduces a known vulnerability.",
      "Container scans check every production image for issues before release.",
      "Strict type checking catches whole categories of bugs before the code ever runs.",
      "Integration tests run on every change to catch regressions early.",
    ],
  },
  {
    title: "Logging and incident response",
    intro: "If something goes wrong, we can pinpoint what happened in minutes.",
    items: [
      "Every request, log line, and activity record shares the same ID, so a single transfer can be traced end to end.",
      "Logs are structured for fast search, with personal information stripped before writing.",
      "An audit log records every action our internal team takes — who did what, when, and to which account.",
      "If an incident affects your data, we'll tell you promptly and follow the notification timelines required by law. To report something, email security@dattaremit.com.",
    ],
  },
  {
    title: "Team and access",
    intro:
      "Controls on systems only work if controls on people match. Ours do:",
    items: [
      "Production access requires single sign-on and a hardware security key.",
      "Engineers complete security and privacy training at onboarding and every year after.",
      "Database access is limited to named engineers with a documented reason, and every query is logged.",
      "Work laptops are fully encrypted and centrally managed.",
    ],
  },
  {
    title: "Reporting a vulnerability",
    content:
      "If you think you've found a security issue, email security@dattaremit.com. A clear description and steps to reproduce help us act fast. We'll reply within three business days, investigate honestly, and keep you posted while we fix it. Please don't run tests that could disrupt the service or expose other people's data, and hold off on public disclosure until we've shipped a fix.",
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
          description="How we protect your data, your money, and your account — explained in plain English, not marketing."
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
