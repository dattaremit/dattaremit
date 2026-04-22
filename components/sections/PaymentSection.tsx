import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Banknote, Receipt, Clock } from "lucide-react";

export function PaymentSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <FeatureCard
                icon={<Building2 className="size-8" />}
                title="Linked via Plaid"
                description="Connect your US bank account securely — credentials never touch our servers."
              />
              <FeatureCard
                icon={<Banknote className="size-8" />}
                title="UPI & IMPS payout"
                description="Funds land in the recipient's Indian bank account over UPI or IMPS rails."
              />
              <FeatureCard
                icon={<Receipt className="size-8" />}
                title="Transparent quote"
                description="Exact exchange rate and fees shown before you confirm. No mark-ups hidden in the rate."
              />
              <FeatureCard
                icon={<Clock className="size-8" />}
                title="Fast settlement"
                description="Most transfers settle to the recipient within minutes, subject to banking hours."
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Funded from your bank,
              <br />
              <span className="text-primary">
                delivered to theirs
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-4">
              Link a US checking account once through Plaid, add a verified
              recipient, and send USD that lands as INR in their Indian bank
              account.
            </p>

            <p className="text-sm text-muted-foreground mb-8">
              Powered by our regulated payments partner, Zynk Labs. Transfer
              range: USD 1 – USD 10,000 per transaction, with a weekly
              aggregate limit disclosed in the app.
            </p>

            <Button size="xl" className="group" asChild>
              <a href="#contact">
                Get started
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card rounded-2xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </div>
    </div>
  );
}
