import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I sign up?", a: "Download the app or visit our website, tap 'Get Started', verify your ID, and send your first transfer in under 2 minutes." },
  { q: "How fast is delivery?", a: "Most transfers arrive within minutes. Bank deposits may take up to 1 business day. Mobile wallets and cash pickup are usually instant." },
  { q: "What does DattaRemit charge?", a: "Personal: 3 free transfers/month, then 0.5%. Premium: unlimited at 0.25%. Business: 0.15%. No hidden charges." },
  { q: "Where do your rates come from?", a: "We use the Google mid-market rate — the same rate banks use between themselves. Always visible before you confirm." },
  { q: "How is my money protected?", a: "256-bit encryption, two-factor authentication, biometric login, and regular security audits. Funds held in segregated accounts at regulated institutions." },
  { q: "Is DattaRemit licensed?", a: "Yes. Registered with FinCEN and licensed across all US jurisdictions where we operate. Fully AML/KYC compliant." },
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

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
