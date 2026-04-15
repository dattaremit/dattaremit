import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how DattaRemit collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
  openGraph: {
    title: "Privacy Policy | DattaRemit",
    description:
      "Learn how DattaRemit collects, uses, and protects your personal information.",
    url: "https://dattaremit.com/privacy",
  },
  alternates: {
    canonical: "https://dattaremit.com/privacy",
  },
};

const sections = [
  {
    title: "Overview",
    content:
      "DattaRemit Inc. (\u201CDattaRemit\u201D, \u201Cwe\u201D, \u201Cus\u201D) respects and is committed to protecting the privacy of every user of the DattaRemit platform, including dattaremit.com and our mobile applications. In order to provide you with accurate, reliable, and personalized cross-border money transfer services between the United States and India, DattaRemit collects, uses, and discloses your personal information strictly in accordance with this Privacy Policy. Except as otherwise stated here, DattaRemit will not disclose or provide your personal information to any third party without your prior consent or unless required by law. By registering for, accessing, or using any part of the DattaRemit platform, you agree to the terms of this Privacy Policy.",
  },
  {
    title: "Applying Range",
    content:
      "When you register or activate an account on the DattaRemit platform, you are required to provide personal information including your full legal name, email address, phone number, date of birth, nationality, present and permanent addresses, government-issued identification details, and, where applicable, banking and recipient information necessary to complete a transfer. When you use the DattaRemit platform, we also automatically receive and record information sent by your device and browser, including but not limited to your IP address, browser type, language preference, device and operating system details, access date and time, app version, crash and diagnostic data, and general usage patterns. This information may be collected by DattaRemit directly or through trusted third-party service providers that support identity verification, authentication, payments, and platform stability.",
  },
  {
    title: "Use of Information",
    content:
      "Without your prior consent, DattaRemit will not sell, lease, trade, or share your personal information with any third party. We use your information to operate the platform and deliver our services, including to: verify your identity and perform Know-Your-Customer (KYC) and Anti-Money-Laundering (AML) checks; process and settle money transfers between the United States and India; comply with applicable legal, tax, and regulatory obligations in every jurisdiction in which we operate; detect, investigate, and prevent fraud and other unlawful activity; provide customer support and resolve disputes; and send you service-related notifications. With your consent, we may occasionally use your contact details to send product updates, new feature announcements, or marketing materials. You may withdraw this consent at any time. DattaRemit does not permit any party to collect, edit, or sell your personal information and reserves the right to suspend or terminate the account of any user found engaging in such activities.",
  },
  {
    title: "The Information Disclosure",
    intro:
      "Under the following circumstances, DattaRemit may disclose your personal information, in full or in part:",
    items: [
      "With your prior consent, to a specifically identified third party.",
      "To regulated payment and KYC partners \u2014 including Zynk Labs (identity verification and settlement rails across US and India jurisdictions) and Plaid (US bank account linking) \u2014 strictly to the extent required to complete a transfer you have initiated.",
      "To service providers that support our operations, such as Clerk (authentication), Sentry (error and crash monitoring), Resend (transactional email), Expo and Firebase (push notifications), and Google (address autocomplete), each bound by contractual confidentiality obligations.",
      "To regulators, courts, or law-enforcement agencies when required by applicable law, subpoena, or other valid legal process.",
      "Where you are found to be in violation of United States or Indian law, our Terms of Service, or any other DattaRemit agreement.",
      "Where DattaRemit, in its reasonable discretion, needs to provide transaction or contact information to facilitate completion of, or dispute resolution in connection with, a transaction initiated on the DattaRemit platform.",
    ],
  },
  {
    title: "The Storage and Exchange of Information",
    content:
      "Information collected by DattaRemit or our affiliated service providers is stored on managed cloud infrastructure, including encrypted PostgreSQL databases and secure object storage, with cryptographic keys managed through AWS Key Management Service (KMS). Because DattaRemit facilitates cross-border payments, your information may be transmitted to and processed in jurisdictions other than the one in which you reside \u2014 in particular between the United States and India \u2014 to complete transactions, satisfy regulatory reporting, and operate the platform. Wherever your data is stored or processed, we apply the protections described in this Policy.",
  },
  {
    title: "The Use of Cookies",
    content:
      "The DattaRemit website uses cookies and similar technologies to deliver a secure and personalized experience, including keeping you signed in, remembering your preferences, measuring how the site performs, and, where applicable, supporting analytics and promotional services. You have the right to accept or reject non-essential cookies; most browsers allow you to manage cookie preferences through their settings. Please note that certain essential cookies are required to authenticate your session and protect your account \u2014 if you reject these, you may not be able to log in or use features of the DattaRemit platform that depend on them.",
  },
  {
    title: "Information Security",
    content:
      "Your DattaRemit account is protected by industry-standard security controls, including 256-bit TLS encryption for data in transit, AES-256 encryption for data at rest (with keys managed by AWS KMS), two-factor authentication, strict least-privilege access controls for employees, and periodic independent security reviews. Despite these measures, please note that no security system is perfect and no method of electronic transmission or storage is completely secure. We urge you to safeguard your personal information and to provide it only when necessary to complete a legitimate transaction on the DattaRemit platform. If you suspect that your account, password, or any other personal information has been compromised, please contact DattaRemit customer support immediately at support@dattaremit.com.",
  },
  {
    title: "Special Notes on Minors",
    content:
      "DattaRemit\u2019s services are intended solely for adults. You may not create an account or use any part of the DattaRemit platform unless you are at least eighteen (18) years of age and otherwise legally recognized as an adult under the laws of the United States and, where applicable, India. If we become aware that a minor has created an account, we will take appropriate steps to close the account and delete the associated personal information.",
  },
  {
    title: "Updating Information",
    content:
      "You agree to promptly notify DattaRemit of any changes, updates, or corrections to your personal information so that we can continue to provide our services accurately and comply with our regulatory obligations. You may review, update, or modify your profile information and communication preferences at any time from the Profile section of the DattaRemit mobile application, or by contacting customer support for assistance.",
  },
  {
    title: "Contact Us",
    content:
      "For any questions, clarifications, or requests related to this Privacy Policy \u2014 including requests to access, correct, or delete your personal information \u2014 please contact our Data Protection team at privacy@dattaremit.com, or write to us at: DattaRemit Inc., [Registered address \u2014 TO BE UPDATED].",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">Last updated: April 15, 2026</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
                  {"content" in section && section.content && (
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  )}
                  {"intro" in section && section.intro && (
                    <p className="text-muted-foreground leading-relaxed mb-3">{section.intro}</p>
                  )}
                  {"items" in section && section.items && (
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
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
