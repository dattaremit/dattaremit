import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does DattaRemit do?",
    a: "DattaRemit is a cross-border money-transfer service for the US-to-India corridor. You fund a transfer from a linked US bank account, and the recipient receives INR in their Indian bank account via UPI or IMPS. We operate through our regulated payments partner, Zynk Labs, who performs identity verification, fund custody, and settlement under their licenses.",
  },
  {
    q: "Which countries and currencies are supported?",
    a: "Today, DattaRemit supports the United States to India corridor only. You send USD from a US bank account; the recipient receives INR. Additional corridors are on our roadmap and will be announced when they launch.",
  },
  {
    q: "How do I sign up?",
    a: "Create an account on the web or mobile app with your email, verify it, and complete identity verification (KYC). Once your KYC is approved, link a US bank account through Plaid and add a recipient. Most users complete onboarding in under ten minutes.",
  },
  {
    q: "What documents do I need for KYC?",
    a: "Senders complete KYC through our partner Zynk Labs, which typically requires a government-issued ID and proof of address. Indian recipients are verified using Aadhaar and PAN, in line with RBI requirements. The exact document list is presented in the KYC flow and may vary by jurisdiction.",
  },
  {
    q: "How fast is delivery?",
    a: "Most transfers settle to the recipient's bank account within minutes once funds are debited from your US bank. Delivery times depend on your funding method, banking hours, and compliance checks, and bank-holiday delays are possible.",
  },
  {
    q: "What does it cost?",
    a: "Fees and the exact exchange rate applied are disclosed on the review screen before you confirm any transfer. You only pay what you see at confirmation — no hidden mark-ups on the rate.",
  },
  {
    q: "Are there transfer limits?",
    a: "Yes. The per-transaction range is USD 1 to USD 10,000. A weekly aggregate limit also applies and is visible in the app. Limits may change based on regulatory requirements and your account status.",
  },
  {
    q: "How is my money protected?",
    a: "Customer funds are held and settled by our regulated partner Zynk Labs — DattaRemit does not custody funds. On our side, personally identifiable information is encrypted field-by-field with AES-256-GCM using keys managed in AWS KMS, all traffic is protected with TLS and HSTS, and sensitive actions require step-up verification (email code on web, biometric on mobile).",
  },
  {
    q: "Is DattaRemit regulated?",
    a: "DattaRemit operates through a regulated payments partner (Zynk Labs) that holds the money-transmission authorizations required to move funds between the US and India. Your transfer is executed under that regulated framework, and DattaRemit complies with applicable KYC and AML requirements of our partner and the jurisdictions we operate in.",
  },
  {
    q: "What if a transfer fails or is delayed?",
    a: "If a transfer cannot be completed, the full amount debited from your funding source is returned. You can track every transfer in the Activity screen, and our support team can investigate any transfer that does not settle as expected.",
  },
  {
    q: "How do I contact support?",
    a: "Email support@dattaremit.com and we respond within 24 hours. For privacy or data-protection requests write to privacy@dattaremit.com. For legal questions, legal@dattaremit.com.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about sending money with DattaRemit.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
