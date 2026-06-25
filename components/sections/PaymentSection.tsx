import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { LinkSimple, Bank, Receipt, Lightning } from "@phosphor-icons/react/ssr";
import { GlowCard } from "@/components/ui/glow-card";

const features = [
  {
    icon: LinkSimple,
    title: "Linked via Plaid",
    description:
      "Connect your US bank account securely. Credentials never touch our servers, only a tokenised link.",
  },
  {
    icon: Bank,
    title: "Local bank payout",
    description:
      "Funds land directly in the recipient's local bank account over each country's domestic payment rails.",
  },
  {
    icon: Receipt,
    title: "Transparent quote",
    description:
      "Exact exchange rate and fees shown before you confirm. No mark-ups hidden in the rate.",
  },
  {
    icon: Lightning,
    title: "Fast settlement",
    description:
      "Most transfers settle to the recipient within minutes, 24x7x365.",
  },
];

export function PaymentSection() {
  return (
    <section className="relative py-20 md:py-28 surface-soft overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="display-mixed text-[clamp(1.6rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground">
              Bank to bank, no middle layer.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Link a US checking account once through Plaid, add a verified
              recipient, and send USD that lands as local currency in their bank
              account.
            </p>
            <div className="mt-8">
              <Button variant="brand" size="lg" asChild>
                <a href="https://app.dattaremit.com/sign-up">
                  Get started
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right feature list: split into 2x2 on sm+ */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((feature, i) => (
                <GlowCard key={feature.title} className="h-full">
                  <div className="group h-full p-6 sm:p-7">
                    <div className="mb-6">
                      <feature.icon
                        className="icon-float size-10 text-brand"
                        style={{ animationDelay: `${i * 0.4}s` }}
                        weight="duotone"
                      />
                    </div>
                    <h3 className="text-[17px] font-semibold tracking-tight mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
