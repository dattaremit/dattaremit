import { Button } from "@/components/ui/button";
import { ArrowUpRight, Building2, Banknote, Receipt, Clock4 } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Linked via Plaid",
    description:
      "Connect your US bank account securely — credentials never touch our servers, only a tokenised link.",
  },
  {
    icon: Banknote,
    title: "UPI & IMPS payout",
    description:
      "Funds land in the recipient's Indian bank account over UPI or IMPS rails.",
  },
  {
    icon: Receipt,
    title: "Transparent quote",
    description:
      "Exact exchange rate and fees shown before you confirm. No mark-ups hidden in the rate.",
  },
  {
    icon: Clock4,
    title: "Fast settlement",
    description:
      "Most transfers settle to the recipient within minutes, subject to banking hours.",
  },
];

export function PaymentSection() {
  return (
    <section className="relative py-20 md:py-28 surface-soft overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="display-mixed text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-foreground">
              Bank to bank, no middle layer.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Link a US checking account once through Plaid, add a verified
              recipient, and send USD that lands as INR in their Indian bank
              account.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Powered by our regulated payments partner, Cybrid. Transfer
              range: USD 1 – USD 10,000 per transaction, with a weekly
              aggregate limit disclosed in the app.
            </p>
            <div className="mt-8">
              <Button variant="brand" size="lg" asChild>
                <a href="#contact">
                  Get started
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right feature list — split into 2x2 on sm+ */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative rounded-3xl border border-border bg-card p-6 sm:p-7 transition-colors duration-200 hover:border-foreground/20"
                >
                  <div className="mb-8">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand-deep)]">
                      <feature.icon className="size-[18px]" />
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
