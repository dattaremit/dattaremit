import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does DattaRemit do?",
    a: "DattaRemit is a cross-border money transfer service for the US to India corridor. You fund a transfer from a linked US bank account, and the recipient receives INR in their Indian bank account. We operate through regulated payments partners who perform identity verification, fund custody, and settlement under their licenses.",
  },
  {
    q: "Which countries and currencies are supported?",
    a: "Today, DattaRemit supports the US to India corridor only. You send USD from a US bank account, and the recipient receives INR. Additional corridors are on our roadmap and will be announced when they launch.",
  },
  {
    q: "How do I sign up?",
    a: "Create an account on the web or mobile app with your email, verify it, and complete identity verification (KYC). Once your KYC is approved, link a US bank account through Plaid and add a recipient. Most users complete onboarding in under 5-7 minutes.",
  },
  {
    q: "What documents do I need for KYC?",
    a: "Senders complete KYC through our partner Persona, which typically requires a government-issued ID and proof of address. Most users provide a driver's license or state ID. Indian recipients are verified using Aadhaar and PAN, in line with RBI requirements.",
  },
  {
    q: "How fast is delivery?",
    a: "Customers may become eligible for instant transfers (under 10 minutes) once they have sufficient transaction history with us. For non instant transfers, funds are typically delivered to the recipient's bank account within 48 hours after the debit from your U.S. bank account. Delivery times depend on your funding method, banking hours, compliance checks, and bank holidays.",
  },
  {
    q: "What does it cost?",
    a: "All transfers are processed at the mid-market exchange rate (Google rate), with no surprise or hidden fees.",
  },
  {
    q: "Are there transfer limits?",
    a: "Yes. The per-transaction range is USD 1 to USD 10,000. A weekly aggregate limit also applies and is visible in the app. Limits may change based on regulatory requirements and your account status. For higher limits, please contact our support team.",
  },
  {
    q: "How is my money protected?",
    a: "Customer funds are held and settled by our regulated partners, who are FDIC-insured. DattaRemit does not custody funds. On our side, personally identifiable information is encrypted field by field using AES-256-GCM with keys managed by hyperscalers. All traffic is protected with TLS and HSTS, and sensitive actions require step up verification (email code on web, biometric verification on mobile).",
  },
  {
    q: "Is DattaRemit regulated?",
    a: "DattaRemit operates through regulated payments partners that hold the money transmission authorizations required to move funds between the US and India. Your transfer is executed under that regulated framework, and DattaRemit complies with the applicable KYC and AML requirements of our partners and the jurisdictions in which we operate.",
  },
  {
    q: "What if a transfer fails or is delayed?",
    a: "If a transfer cannot be completed, the full amount debited from your funding source is returned. You can track every transfer in the activity screen, and our support team can investigate any transfer that does not settle as expected. Our support team typically responds the same day to all inquiries.",
  },
  {
    q: "How do I contact support?",
    a: "Email support@dattaremit.com, and we typically respond the same day. For privacy or data protection requests, write to support@dattaremit.com. For legal questions, please contact support@dattaremit.com.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 surface-soft overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="display-mixed text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-tight text-foreground">
            Straight answers.
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about sending money with DattaRemit. If
            something is missing,{" "}
            <a
              href="#contact"
              className="text-foreground font-medium underline decoration-[var(--brand-deep)] decoration-2 underline-offset-4"
            >
              ask us directly
            </a>
            .
          </p>
        </div>

        <div className="w-full max-w-3xl text-left">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="pr-2">
                  <span className="text-base sm:text-lg font-medium tracking-tight">
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
