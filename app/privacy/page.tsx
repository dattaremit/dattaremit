import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  LegalPageHero,
  LegalBody,
  LegalSectionHeading,
} from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DattaRemit collects, uses, stores, and shares your personal information for our USD-to-INR money-transfer service, and the rights you have over that information.",
  openGraph: {
    title: "Privacy Policy | DattaRemit",
    description:
      "How DattaRemit handles your personal information, and the rights you have over that information.",
    url: "https://dattaremit.com/privacy",
  },
  alternates: {
    canonical: "https://dattaremit.com/privacy",
  },
};

type Section =
  | { title: string; content: string }
  | { title: string; intro: string; items: string[]; outro?: string }
  | {
      title: string;
      intro: string;
      table: { left: string; right: string }[];
      outro?: string;
    };

const sections: Section[] = [
  {
    title: "1. Overview",
    content:
      "This Privacy Policy explains how DattaRemit Inc. (“DattaRemit”, “we”, “us”) collects, uses, stores, shares, and protects personal information in connection with our website at dattaremit.com, our mobile applications, and our USD-to-INR money-transfer service (together, the “Service”). It applies to everyone who visits our website, registers an account, initiates a transfer, or is named as a recipient of a transfer. By using the Service you confirm that you have read and understood this Policy.",
  },
  {
    title: "2. Who we are and how to contact us",
    content:
      "DattaRemit Inc. is the data controller for personal information collected through the Service. You can contact our data-protection team at privacy@dattaremit.com with any privacy question or to exercise any of the rights described below. We will acknowledge your request within a reasonable period and respond substantively within the time frames set by the law that applies to you.",
  },
  {
    title: "3. Information we collect",
    intro:
      "We only collect the information we need to provide the Service, meet our legal obligations, and keep our platform secure. The categories below describe what we collect and why.",
    items: [
      "Identity information — full legal name, date of birth, nationality, government-issued identification type and number, and a photograph or selfie used for identity verification. Collected during KYC and when you add a recipient.",
      "Contact information — email address, phone number, residential address, and, for recipients, a contact number used for transfer notifications.",
      "Financial information — US bank account linkage metadata (provided via Plaid), recipient Indian bank account number, IFSC code, bank name, branch, and account type. For Indian recipients we also collect Aadhaar and Permanent Account Number (PAN) as required by Indian regulation.",
      "Transaction information — amount sent, exchange rate applied, fees, amount received, timestamps, reference numbers, partner transaction identifiers, and transfer status.",
      "Account metadata — Clerk user identifier, account status, KYC status, activity log entries, and admin-side notes associated with your account.",
      "Device and usage information — IP address, device type and model, operating system, application version, browser type, language preference, crash and diagnostic data, push-notification tokens, and general patterns of usage.",
      "Authentication material — hashed passwords (managed by Clerk), session tokens, and one-time step-up codes. We do not store plaintext passwords or biometric templates; biometric matching happens on your device.",
      "Communications — messages you send to our support team, and logs of notifications and emails we send to you.",
    ],
  },
  {
    title: "4. How we use your information",
    intro:
      "We use your personal information only for the purposes listed below. We do not sell personal information and we do not share it with third parties for their own marketing.",
    items: [
      "To verify your identity and perform Know-Your-Customer (KYC) and Anti-Money-Laundering (AML) checks, through our regulated payments partner Cybrid.",
      "To operate, process, and settle money transfers between your US bank account and the recipient’s Indian bank account.",
      "To display accurate exchange-rate and fee information before you confirm a transfer.",
      "To send you service communications — transfer receipts, KYC notifications, security alerts, and account updates — by email, in-app message, or push notification.",
      "To prevent, detect, and investigate fraud, abuse, security incidents, and other prohibited activity on our platform.",
      "To comply with applicable legal, tax, and regulatory obligations, including record-keeping and reporting duties.",
      "To resolve disputes, enforce our Terms of Service, and establish or defend legal claims.",
      "To improve the Service through aggregated, non-identifying analysis of how our applications are used.",
      "With your consent, to send you occasional product updates and marketing communications; you can withdraw consent at any time.",
    ],
  },
  {
    title: "5. Legal bases (EEA/UK residents)",
    intro:
      "If you are located in the European Economic Area or the United Kingdom, we process your personal information on the following legal bases:",
    items: [
      "Performance of a contract — to deliver the Service you have asked us to provide, including executing transfers and providing account access.",
      "Compliance with a legal obligation — to meet KYC, AML, sanctions, tax, and record-keeping requirements that apply to us or to our regulated partner.",
      "Legitimate interests — to secure our platform against fraud and abuse, to investigate suspicious activity, to improve the Service, and to communicate with customers about material changes. Where we rely on legitimate interests we have considered and balanced them against your rights.",
      "Consent — for marketing communications, optional analytics, and any other processing where consent is the appropriate basis. You can withdraw consent at any time.",
    ],
  },
  {
    title: "6. Who we share your information with",
    intro:
      "We share personal information only with the categories of recipient listed below, and only for the purposes described in this Policy. Every recipient is bound by contractual confidentiality and security obligations.",
    table: [
      {
        left: "Cybrid",
        right:
          "Our regulated payments partner. Receives the information necessary to perform KYC, hold and settle funds, perform foreign-exchange conversion, and disburse INR to recipients. Acts as an independent controller for regulatory record-keeping.",
      },
      {
        left: "Plaid",
        right:
          "Provides secure, tokenised linkage of your US bank account for ACH funding. DattaRemit receives only the tokens and metadata necessary to initiate transfers; your online-banking credentials never touch our systems.",
      },
      {
        left: "Clerk",
        right:
          "Provides authentication, session management, and email verification for customer accounts. Stores credential material such as password hashes on our behalf.",
      },
      {
        left: "Amazon Web Services",
        right:
          "Manages master cryptographic keys through AWS Key Management Service (KMS). Key material never leaves KMS; all encrypt and decrypt operations are performed inside KMS.",
      },
      {
        left: "DigitalOcean",
        right:
          "Provides managed PostgreSQL, container hosting, and object storage for the DattaRemit platform.",
      },
      {
        left: "Sentry",
        right:
          "Receives anonymised error traces and diagnostic information. We configure Sentry to redact personally identifiable fields at source.",
      },
      {
        left: "Resend",
        right:
          "Sends transactional email on our behalf, including verification codes, KYC notifications, transfer receipts, and support replies.",
      },
      {
        left: "Expo",
        right:
          "Delivers push notifications to the DattaRemit mobile app on iOS and Android.",
      },
      {
        left: "Google",
        right:
          "Provides address autocomplete and normalisation during onboarding.",
      },
      {
        left: "Regulators, law enforcement, and courts",
        right:
          "We disclose information where required by a valid subpoena, court order, statutory request, or other legal process, and where necessary to comply with our partner’s regulatory obligations.",
      },
      {
        left: "Professional advisers and auditors",
        right:
          "Lawyers, accountants, and auditors bound by professional confidentiality, strictly where needed to provide advice or audit services.",
      },
      {
        left: "Business transfers",
        right:
          "If we are involved in a merger, acquisition, reorganisation, or sale of assets, personal information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy.",
      },
    ],
  },
  {
    title: "7. International transfers",
    content:
      "Because we facilitate cross-border payments, your personal information will be transmitted to and processed in jurisdictions other than your own — in particular, between the United States and India. Where we transfer personal information from the European Economic Area, the United Kingdom, or Switzerland to a country that has not been deemed to provide an adequate level of protection, we rely on the European Commission’s Standard Contractual Clauses (or their UK addendum) and, where appropriate, supplementary measures such as encryption in transit and at rest. A copy of the relevant clauses is available on request from privacy@dattaremit.com.",
  },
  {
    title: "8. How we protect your information",
    intro:
      "We apply layered technical and organisational controls to protect personal information. The most important are:",
    items: [
      "Field-level encryption of highly sensitive personal data (name, date of birth, phone number, email, bank account number, IFSC, etc.) using AES-256-GCM with master keys stored in AWS Key Management Service.",
      "Blind indexing (HMAC-SHA256) so that exact-match lookups work on encrypted data without the plaintext ever being stored.",
      "TLS 1.2 or higher on all client–server and service-to-service links, with HSTS preload enabled.",
      "Strict Content Security Policy, X-Frame-Options DENY, and other hardened security headers on our web properties.",
      "Strong authentication through Clerk, with email-code step-up on sensitive actions on the web and Face ID / fingerprint gating on mobile.",
      "Idempotency keys and HMAC-signed webhooks (with a five-minute replay window) to protect financial operations.",
      "Structured logs with automatic PII redaction, so sensitive fields never appear in log files or error-tracking systems.",
      "Continuous security review: Semgrep SAST on every change, bun audit on every CI run, and Trivy container scanning before deployment.",
      "Least-privilege engineering access to production and an internal audit log of every admin action.",
      "Despite these measures, no system is perfectly secure. You can help protect your account by choosing a strong, unique password, enabling biometric unlock on mobile, and contacting us at support@dattaremit.com as soon as you notice anything suspicious.",
    ],
  },
  {
    title: "9. Data retention",
    intro:
      "We retain personal information only for as long as we need it to provide the Service, meet our legal and regulatory obligations, and defend legal claims. Typical retention periods are:",
    items: [
      "Customer identification records (KYC documents and verification results): at least five (5) years after the end of the customer relationship, as required by US and Indian AML regulation.",
      "Transaction records: at least five (5) years after the transaction date.",
      "Account metadata: while your account is open, and for up to five (5) years after closure for audit and dispute purposes.",
      "Application logs with PII redacted: typically 30 to 90 days, unless a specific incident requires longer retention.",
      "Marketing preferences: until you withdraw consent.",
    ],
    outro:
      "After the applicable retention period we either delete the information or anonymise it so that it can no longer be linked to you.",
  },
  {
    title: "10. Your rights",
    intro:
      "Depending on where you live, you may have some or all of the following rights. We will not discriminate against you for exercising any of them.",
    items: [
      "Access — to know what personal information we hold about you and to receive a copy of it.",
      "Rectification — to have inaccurate or incomplete information corrected.",
      "Deletion — to request that we delete personal information, subject to our legal and regulatory retention obligations (for example, AML record-keeping duties).",
      "Restriction and objection — to ask us to limit certain processing, or to object to processing based on legitimate interests.",
      "Portability — to receive your information in a structured, machine-readable format and to transmit it to another controller where technically feasible.",
      "Withdrawal of consent — where we rely on consent (for example, for marketing), you can withdraw it at any time without affecting the lawfulness of prior processing.",
      "Do-not-sell / share and limit sensitive data — California residents may request that we limit the use of sensitive personal information; because we do not sell or share personal information for cross-context behavioural advertising, these rights are respected by default.",
      "Lodge a complaint — you have the right to lodge a complaint with your data-protection authority or, in the United States, the relevant state attorney general.",
    ],
    outro:
      "To exercise any of these rights, email privacy@dattaremit.com. We may need to verify your identity before acting on a request.",
  },
  {
    title: "11. Children",
    content:
      "The Service is for adults only. You must be at least 18 years old to create an account or initiate a transfer. We do not knowingly collect personal information from anyone under 18. If we become aware that we have collected information from a minor, we will delete it promptly. If you believe a minor has used the Service, please contact us at privacy@dattaremit.com.",
  },
  {
    title: "12. Cookies and similar technologies",
    content:
      "We use a small number of cookies and similar technologies to keep you logged in, remember your theme preference, and prevent abuse. We do not use cookies for cross-context behavioural advertising. For the full list and instructions on managing cookies, see our Cookie Policy at /cookies.",
  },
  {
    title: "13. Automated decision-making",
    content:
      "We apply automated rules to help detect fraud, prevent duplicate transfers (idempotency), and screen transactions against sanctions and other restricted-party lists. These automated checks may cause a transfer to be held or declined. Where a decision with a legal or similarly significant effect is made solely by automated means, you have the right to ask for human review. Contact privacy@dattaremit.com to exercise that right.",
  },
  {
    title: "14. Third-party websites and services",
    content:
      "Our Service may contain links to third-party websites or integrate with third-party services (for example, Plaid for bank linking). This Policy does not apply to those third-party sites or services; please review their own privacy policies before using them.",
  },
  {
    title: "15. Changes to this Policy",
    content:
      "We review this Policy regularly and will update it to reflect changes in the Service, our partners, or applicable law. When we make a material change we will notify you through the Service or by email and will update the “last updated” date below. Your continued use of the Service after the effective date of a change means you accept the updated Policy.",
  },
  {
    title: "16. Contact us",
    content:
      "For any question or request about this Privacy Policy, or to exercise any of the rights above, please write to privacy@dattaremit.com. You can also reach our support team at support@dattaremit.com and our compliance team at compliance@dattaremit.com. If you would prefer to write by post, contact us for our current registered address.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageHero
          eyebrow="Privacy"
          title="Privacy Policy."
          titleAccent="Your data, your rights."
          description="How we handle your personal information — what we collect, why, who we share it with, and the rights you have."
          lastUpdated="April 22, 2026"
        />
        <LegalBody>
          {sections.map((section, i) => (
            <div key={section.title}>
              <LegalSectionHeading number={i + 1} title={section.title} />
              {"content" in section && !("intro" in section) && (
                <p>{section.content}</p>
              )}
              {"intro" in section && <p className="mb-3">{section.intro}</p>}
              {"items" in section && (
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {"table" in section && (
                <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-background/60 text-left">
                      <tr>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          Recipient
                        </th>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          What they receive and why
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {section.table.map((row) => (
                        <tr key={row.left}>
                          <td className="px-4 py-3 align-top font-semibold text-foreground whitespace-nowrap">
                            {row.left}
                          </td>
                          <td className="px-4 py-3 align-top text-muted-foreground leading-relaxed">
                            {row.right}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {"outro" in section && section.outro && (
                <p className="mt-3">{section.outro}</p>
              )}
            </div>
          ))}
        </LegalBody>
      </main>
      <Footer />
    </>
  );
}
