import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The legal terms that govern your use of DattaRemit, including eligibility, the USD-to-INR money-transfer service, fees, refunds, prohibited uses, and dispute resolution.",
  openGraph: {
    title: "Terms of Service | DattaRemit",
    description:
      "The legal terms that govern your use of DattaRemit's USD-to-INR money-transfer service.",
    url: "https://dattaremit.com/terms",
  },
  alternates: {
    canonical: "https://dattaremit.com/terms",
  },
};

type Section =
  | { title: string; content: string }
  | { title: string; intro: string; items: string[]; outro?: string }
  | { title: string; intro: string; content: string };

const sections: Section[] = [
  {
    title: "1. Acceptance of these terms",
    content:
      "These Terms of Service (the “Terms”) form a legally binding agreement between you (“you”, “your”, or “Customer”) and DattaRemit Inc. (“DattaRemit”, “we”, “us”, or “our”) and govern your access to and use of the DattaRemit website at dattaremit.com, our mobile applications, APIs, and any related services (collectively, the “Service”). By creating an account, completing identity verification, initiating a transfer, or otherwise using the Service, you confirm that you have read, understood, and agreed to these Terms, our Privacy Policy, and our Cookie Policy. If you do not agree, you must not use the Service.",
  },
  {
    title: "2. Our service and how it works",
    intro:
      "DattaRemit provides a technology platform that enables eligible users in the United States to initiate money transfers that result in the delivery of Indian Rupees (INR) to a recipient’s Indian bank account. Money-transmission activity — including fund custody, foreign-exchange conversion, and settlement — is performed by our regulated payments partner, Zynk Labs, under their licenses.",
    items: [
      "You link a United States bank account through Plaid as the funding source.",
      "You create or select a recipient with verified Indian bank account details (name, account number, IFSC).",
      "Before confirmation, we display the amount you will send, the exchange rate applied, the fees payable, and the amount the recipient will receive.",
      "You authorise the transfer through step-up verification — an email code on the web and biometric confirmation on mobile.",
      "Funds are debited from your US bank account, converted to INR by our partner, and delivered to the recipient via UPI or IMPS.",
    ],
    outro:
      "DattaRemit is a technology provider, not a bank. Customer funds are not held by DattaRemit at any time.",
  },
  {
    title: "3. Eligibility",
    intro:
      "To use the Service you represent and warrant that you:",
    items: [
      "Are at least 18 years old and have the legal capacity to enter into a binding contract in your jurisdiction.",
      "Reside in the United States and maintain a lawful US bank account you own or are authorised to use.",
      "Are not a resident of, or located in, any country that is the subject of comprehensive US, UN, EU, or UK sanctions.",
      "Are not on any restricted-party list maintained by the US Office of Foreign Assets Control (OFAC), the UN Security Council, the European Union, HM Treasury, or equivalent Indian authorities.",
      "Provide accurate, current, and complete information during registration and identity verification, and keep that information up to date.",
      "Use the Service only for lawful purposes and in compliance with these Terms and applicable law.",
    ],
  },
  {
    title: "4. Account registration and identity verification (KYC)",
    content:
      "You must create an account and complete identity verification before you can initiate a transfer. Identity verification is performed by our regulated payments partner, Zynk Labs, and may require you to provide government-issued identification, a photograph or selfie, proof of address, and, for the Indian recipient side, Aadhaar and Permanent Account Number (PAN). Additional information (including source-of-funds documentation) may be requested at any time if required by applicable law or our risk controls. We may decline to open or may suspend or close your account at any time if we cannot verify your identity, if you provide inaccurate information, or if we have a reasonable basis to believe that your use of the Service presents a legal, regulatory, or fraud risk.",
  },
  {
    title: "5. Your account credentials and account security",
    content:
      "You are responsible for safeguarding your login credentials, including your password and any two-factor verification mechanisms. You must not share your account with any other person. You must notify us immediately at support@dattaremit.com if you suspect that your account has been compromised or that any unauthorised activity has occurred. You are responsible for all activity under your account until you notify us. We may require you to re-authenticate or to complete step-up verification at any time for your protection.",
  },
  {
    title: "6. Money-transfer service and transfer limits",
    intro:
      "All transfers are subject to limits and controls that we or our partner may change from time to time, including without notice where required by law or for risk management:",
    items: [
      "Per-transaction range: USD 1.00 minimum and USD 10,000.00 maximum.",
      "A weekly aggregate limit per customer is enforced in the application and disclosed within the app.",
      "Additional limits may be imposed based on your account status, transaction history, or applicable regulation.",
      "We may decline, hold, reverse, or delay a transfer if we have a reasonable basis to do so, including for compliance screening, suspected fraud, or operational issues with our partner or a destination bank.",
      "Delivery times are estimates, not guarantees. Most transfers settle within minutes but may take longer due to banking hours, holidays, compliance checks, or beneficiary-bank constraints.",
    ],
  },
  {
    title: "7. Exchange rates, fees, and your authorisation",
    content:
      "Before you confirm any transfer, the review screen will display (a) the USD amount debited from your funding source, (b) the exchange rate applied to that transfer, (c) all fees payable, and (d) the INR amount to be delivered to the recipient. Exchange rates fluctuate; the rate applied to your transfer is the rate displayed at the moment you confirm. By confirming the transfer you (i) authorise us and our partner to debit your linked US bank account for the total amount displayed, (ii) authorise the conversion of that amount from USD to INR at the disclosed rate, and (iii) authorise the disbursement of the INR amount to the recipient you selected. You are solely responsible for ensuring that recipient details are accurate. Once a transfer is authorised and submitted to our partner’s settlement rail, it generally cannot be cancelled.",
  },
  {
    title: "8. Cancellation, refunds, and failed transfers",
    intro:
      "We will make reasonable efforts to help you cancel or amend a transfer before it is settled, but we cannot guarantee that a pending transfer can be recalled. The following rules apply:",
    items: [
      "If we or our partner decline a transfer or cannot complete it, the funds debited from your funding source will be returned in full to that source. Return times depend on your bank and are typically between one and five business days.",
      "If a transfer is delivered to the account you specified, we cannot recall the funds once they are in the beneficiary’s control. If recipient details were entered incorrectly, we will attempt a recall on your behalf but cannot guarantee recovery.",
      "If you believe a transfer was initiated without your authorisation, contact us within 60 days of the transaction date at support@dattaremit.com. We will investigate and, where required by applicable law, reimburse unauthorised transactions.",
      "Fees paid on a completed transfer are not refundable except where we are required to refund them by law.",
    ],
  },
  {
    title: "9. Prohibited uses",
    intro:
      "You must not use the Service, and you must not allow anyone else to use your account, for any of the following:",
    items: [
      "Any activity that is illegal under the laws of the United States, India, or any other jurisdiction that applies to your use of the Service.",
      "Money laundering, terrorist financing, the financing of proliferation, fraud, or the evasion of taxes, duties, or sanctions.",
      "Sending or receiving funds on behalf of third parties without our express written consent.",
      "Transactions involving controlled substances, weapons, adult services, gambling, counterfeit goods, or other activity restricted by our partner’s rules.",
      "Transactions with parties located in, or ordinarily resident in, countries subject to comprehensive sanctions (including but not limited to Cuba, Iran, North Korea, Syria, and the Crimea, so-called Donetsk People’s Republic, and so-called Luhansk People’s Republic regions of Ukraine).",
      "Any attempt to interfere with, probe, or disrupt the Service — including reverse engineering, introducing malware, scraping, rate-limit evasion, or unauthorised API use.",
      "Any attempt to impersonate another person, create multiple accounts, or circumvent identity-verification requirements.",
    ],
  },
  {
    title: "10. Compliance cooperation and monitoring",
    content:
      "You agree to cooperate with any reasonable request for additional information or documentation from us or our regulated partner in connection with identity verification, source-of-funds verification, or transaction review. You acknowledge that we and our partner monitor transactions for signs of fraud, money laundering, or other prohibited activity, and that we and our partner may freeze, hold, reverse, or report transactions as required by law without prior notice to you where that notice is itself prohibited by law.",
  },
  {
    title: "11. Third-party services",
    content:
      "The Service depends on third-party providers, including our regulated payments partner (Zynk Labs), bank-linking partners (Plaid), identity provider (Clerk), cloud infrastructure, email delivery, push-notification delivery, and error-monitoring providers. Your use of these providers through our Service is subject to their own terms and privacy policies. We are not responsible for the acts or omissions of third parties that we do not control, except to the extent required by applicable law.",
  },
  {
    title: "12. Intellectual property",
    content:
      "The Service, including all software, text, graphics, logos, and other content provided by DattaRemit, is owned by DattaRemit or its licensors and is protected by copyright, trademark, and other intellectual-property laws. We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your personal, non-commercial use, strictly in accordance with these Terms. You must not copy, modify, distribute, sell, or create derivative works from any part of the Service without our prior written consent.",
  },
  {
    title: "13. Communications and electronic notices",
    content:
      "By using the Service you consent to receive communications from us electronically — including transfer confirmations, security alerts, service updates, and legally required notices — by email, in-app message, or push notification. You agree that any notices, agreements, disclosures, or other communications delivered electronically satisfy any legal requirement that such communications be in writing. You may withdraw consent for non-essential marketing communications at any time through your account settings or by contacting us; essential service communications cannot be turned off while you maintain an account.",
  },
  {
    title: "14. Disclaimers",
    content:
      "Except as expressly set out in these Terms and to the fullest extent permitted by applicable law, the Service is provided on an “as is” and “as available” basis. DattaRemit disclaims all warranties, whether express, implied, statutory, or otherwise — including any warranty of merchantability, fitness for a particular purpose, non-infringement, or quiet enjoyment. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that any information obtained through the Service will be accurate or reliable. Exchange-rate quotes are indicative until the moment you confirm a transfer.",
  },
  {
    title: "15. Limitation of liability",
    content:
      "To the fullest extent permitted by applicable law, DattaRemit and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages — including loss of profits, loss of data, loss of business opportunity, or reputational harm — arising out of or in connection with your use of the Service, whether based on contract, tort, strict liability, or any other theory, even if we have been advised of the possibility of such damages. In no event shall our aggregate liability to you for any claim arising out of or relating to the Service exceed the greater of (a) the total fees you paid to DattaRemit in the twelve (12) months preceding the event giving rise to the claim, or (b) one hundred US dollars (USD 100). Nothing in these Terms limits liability that cannot be limited under applicable law, including liability for fraud, gross negligence, or wilful misconduct.",
  },
  {
    title: "16. Indemnification",
    content:
      "You agree to defend, indemnify, and hold harmless DattaRemit and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses — including reasonable legal fees — arising out of or in connection with (a) your breach of these Terms, (b) your violation of any applicable law or the rights of any third party, (c) any inaccurate, incomplete, or misleading information you provide, or (d) the misuse of your account, whether or not authorised by you.",
  },
  {
    title: "17. Suspension and termination",
    content:
      "We may suspend or terminate your account or access to any part of the Service at any time, with or without notice, if we believe (a) you have breached these Terms, (b) your use of the Service creates a legal, regulatory, or fraud risk, (c) your identity cannot be verified or re-verified, or (d) you have been inactive for a prolonged period. You may terminate your account at any time by contacting support@dattaremit.com. Provisions that by their nature should survive termination — including sections on prohibited uses, disclaimers, limitation of liability, indemnification, governing law, and dispute resolution — will survive.",
  },
  {
    title: "18. Changes to these Terms",
    content:
      "We may update these Terms from time to time to reflect changes in the Service, our operations, or the law. When we make a material change, we will notify you through the Service or by email and will update the “last updated” date below. Your continued use of the Service after the effective date of an update constitutes your acceptance of the updated Terms. If you do not accept an update, you must stop using the Service and close your account.",
  },
  {
    title: "19. Force majeure",
    content:
      "We are not liable for any failure or delay in performance caused by events beyond our reasonable control — including acts of God, natural disasters, war, civil unrest, terrorism, strikes, governmental action, sanctions, changes in law, internet or telecommunications outages, payment-rail outages, or failures of our regulated partner or its correspondent banks.",
  },
  {
    title: "20. Governing law and dispute resolution",
    content:
      "These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Service will be resolved exclusively in the state or federal courts located in Delaware, and you and we each irrevocably consent to the personal jurisdiction of those courts. Nothing in this section prevents either party from seeking injunctive or other equitable relief in any court of competent jurisdiction to protect its intellectual property or confidential information.",
  },
  {
    title: "21. Assignment and relationship",
    content:
      "You may not assign these Terms or any of your rights or obligations under them without our prior written consent. We may assign these Terms in connection with a reorganisation, merger, or sale of our business. These Terms do not create any agency, partnership, joint venture, or employment relationship between you and DattaRemit.",
  },
  {
    title: "22. Severability and entire agreement",
    content:
      "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid provision will be replaced by a valid provision that most closely matches the intent of the original. These Terms, together with our Privacy Policy, Cookie Policy, and any additional policies referenced within the Service, constitute the entire agreement between you and DattaRemit and supersede any prior agreement on the same subject matter.",
  },
  {
    title: "23. Contact",
    content:
      "Questions about these Terms can be sent to legal@dattaremit.com. Support questions should go to support@dattaremit.com. Privacy and data-protection requests should be directed to privacy@dattaremit.com. Compliance questions and regulator enquiries can be sent to compliance@dattaremit.com.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: April 22, 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-semibold mb-3">
                    {section.title}
                  </h2>
                  {"content" in section && !("intro" in section) && (
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  )}
                  {"intro" in section && (
                    <>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        {section.intro}
                      </p>
                      {"items" in section && (
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                          {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {"outro" in section && section.outro && (
                        <p className="text-muted-foreground leading-relaxed mt-3">
                          {section.outro}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
