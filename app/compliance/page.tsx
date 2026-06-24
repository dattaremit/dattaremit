import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  LegalPageHero,
  LegalBody,
  LegalSectionHeading,
} from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "DattaRemit's regulatory model, KYC and AML program, sanctions posture, subprocessors, and record-keeping practices for the US-to-India remittance corridor.",
  openGraph: {
    title: "Compliance | DattaRemit",
    description:
      "DattaRemit's regulatory model, KYC and AML program, and subprocessor list.",
    url: "https://dattaremit.com/compliance",
  },
  alternates: {
    canonical: "https://dattaremit.com/compliance",
  },
};

type Section =
  | { title: string; content: string }
  | { title: string; intro: string; items: string[] }
  | {
      title: string;
      intro: string;
      table: { name: string; purpose: string; jurisdiction: string }[];
    };

const sections: Section[] = [
  {
    title: "Regulatory model",
    content:
      "DattaRemit operates as a technology partner-of-record on top of a regulated payments infrastructure provider. Our partner holds the money-transmission authorizations necessary to collect funds from US senders and disburse INR to Indian recipients. DattaRemit provides the customer-facing application and data flow; our partners performs the regulated activities of identity verification, fund custody, foreign-exchange conversion, and settlement. This model allows us to offer a compliant money-movement product without operating as a standalone Money Services Business (MSB). All activity is performed within the regulatory framework of our partner.",
  },
  {
    title: "Jurisdictions served",
    content:
      "At launch, DattaRemit supports the United States-to-India corridor. Senders must reside in the United States and pass US-side identity verification. Recipients must hold an Indian bank account and pass India-side identity verification, including Aadhaar and Permanent Account Number (PAN) submission as required by the Reserve Bank of India's rules. We do not offer our service to residents of countries that are the subject of comprehensive trade sanctions, and we may decline individual transactions that present an unacceptable compliance risk.",
  },
  {
    title: "Customer Identification Program (KYC)",
    intro:
      "Every customer completes identity verification before they can initiate a transfer. KYC is performed by our partner Persona. At a minimum we collect:",
    items: [
      "Full legal name as it appears on government-issued identification.",
      "Date of birth.",
      "Residential address (for senders, a verifiable US address).",
      "Nationality and country of residence.",
      "Government-issued identification document: type, number, and an image of the document. For Indian recipients, this includes Aadhaar and PAN.",
      "A live photograph or selfie, matched against the identification document.",
      "Source-of-funds information for higher-value transfers, as required by our partner's rules.",
    ],
  },
  {
    title: "Anti-Money Laundering (AML) controls",
    intro:
      "We work within our partner's AML framework and apply the following controls on the DattaRemit side:",
    items: [
      "Transaction limits: per-transaction maximum of USD 15,000 and a weekly aggregate limit enforced inside a Serializable database transaction to prevent race-condition breaches.",
      "Idempotency: every financial request carries an idempotency key to prevent duplicate or manipulated requests.",
      "Activity logging: every sensitive action (KYC start, KYC status change, transfer initiation, transfer completion) is written to a tamper-evident activity log tied to the customer and transaction.",
      "Admin audit trail: every action taken by an internal user is recorded with the actor identifier, timestamp, affected resource, and a human-readable description.",
      "Suspicious-activity escalation: patterns inconsistent with a customer's declared profile are escalated to our regulated partner for further review, who perform sanctions, PEP, and adverse-media screening and files Suspicious Activity Reports (SARs) where required.",
      "Record retention: customer identification records, transaction records, and communications are retained for the period required by applicable law (a minimum of five years in most jurisdictions).",
    ],
  },
  {
    title: "Sanctions and restricted-party screening",
    content:
      "Sanctions screening against OFAC Specially Designated Nationals, UN consolidated list, EU consolidated list, HM Treasury and equivalent Indian lists is performed by our regulated partner prior to onboarding and before every transaction. DattaRemit does not knowingly transact with any party on a restricted list, and we will decline or freeze transactions that fail screening. If you believe a transaction has been declined in error, please contact support@dattaremit.com.",
  },
  {
    title: "Data protection and privacy",
    content:
      "DattaRemit is the data controller for customer information collected through our applications. Refer to our Privacy Policy for more details.",
  },
  {
    title: "Record keeping",
    content:
      "We retain identification records, transaction records, and related communications for as long as required by the laws of the jurisdictions in which we or our partner operate (a minimum of five years from the end of the customer relationship in most cases). Logs containing personally identifiable information are redacted at source and retained only for the shortest period needed for debugging, abuse investigation, and regulatory reporting.",
  },
  {
    title: "Complaints and regulatory contacts",
    content:
      "If you have a complaint about DattaRemit or the handling of your transfer, please write to support@dattaremit.com first; we aim to acknowledge within 24 hours and resolve within 3-5 business days.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageHero
          eyebrow="Compliance"
          title="Compliance."
          titleAccent="The regulatory picture."
          description="Our regulatory model, KYC and AML program, sanctions posture, and the subprocessors behind the Service."
          lastUpdated="April 22, 2026"
          showGlobe
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
                          Provider
                        </th>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          Jurisdiction
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {section.table.map((row) => (
                        <tr key={row.name}>
                          <td className="px-4 py-3 align-top font-semibold text-foreground whitespace-nowrap">
                            {row.name}
                          </td>
                          <td className="px-4 py-3 align-top text-muted-foreground leading-relaxed">
                            {row.purpose}
                          </td>
                          <td className="px-4 py-3 align-top text-muted-foreground whitespace-nowrap">
                            {row.jurisdiction}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </LegalBody>
      </main>
      <Footer />
    </>
  );
}
