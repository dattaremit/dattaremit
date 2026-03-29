import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Shield, Zap } from "lucide-react";

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
                icon={<CreditCard className="size-8" />}
                title="Direct Transfer"
                description="From your US bank account"
              />
              <FeatureCard
                icon={<Zap className="size-8" />}
                title="Instant"
                description="Money arrives in seconds"
              />
              <FeatureCard
                icon={<Shield className="size-8" />}
                title="Secure"
                description="Bank-level encryption"
              />
              <FeatureCard
                icon={<DollarCircle className="size-8" />}
                title="No Fees"
                description="Zero hidden charges"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Seamless payments,
              <br />
              <span className="text-primary">directly from your US Bank Account</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Connect your bank account once and send money anytime. No cards, no hassle.
            </p>

            <Button size="xl" className="group" asChild>
              <a href="#contact">
                Send Money
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
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  );
}

function DollarCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
}
