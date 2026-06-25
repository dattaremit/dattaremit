import {
  IdentificationCard,
  Bank,
  UsersThree,
  PaperPlaneTilt,
} from "@phosphor-icons/react/ssr";
import { GlowCard } from "@/components/ui/glow-card";

const steps = [
  {
    icon: IdentificationCard,
    title: "Create and verify",
    description:
      "Sign up with your email and complete identity verification through our regulated partner Cybrid. Majority of the time approved within minutes.",
  },
  {
    icon: Bank,
    title: "Link your US bank",
    description:
      "Connect a US checking account securely through Plaid. We never see or store your bank credentials. Only a tokenised link.",
  },
  {
    icon: UsersThree,
    title: "Add a recipient",
    description:
      "Enter the recipient's name, local bank account details, and contact. Recipients complete the identity verification required in their country.",
  },
  {
    icon: PaperPlaneTilt,
    title: "Send and track",
    description:
      "Confirm amount, rate, and fees on the review screen. Authorise with email step-up (web) or biometrics (mobile). Track in Activity.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-28 surface-soft overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <h2 className="display-mixed text-[clamp(1.6rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground">
            Four steps, one evening at most.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            A simple, regulated path from your US bank account to a local bank
            account across our supported countries, with verification at every
            step.
          </p>
        </div>

        {/* Step grid with asymmetric vertical rhythm on lg+ */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {steps.map((step, i) => (
            <GlowCard key={step.title} className="h-full">
              <div className="group flex h-full flex-col p-6 sm:p-7">
                <div className="mb-6">
                  <step.icon
                    className="icon-float size-10 text-brand"
                    style={{ animationDelay: `${i * 0.4}s` }}
                    weight="duotone"
                  />
                </div>

                <h3 className="text-xl font-semibold tracking-tight mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>      </div>
    </section>
  );
}
