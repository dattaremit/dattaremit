import { UserCheck, Landmark, Users, Send } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Create and verify",
    description:
      "Sign up with your email and complete identity verification through our regulated partner Cybrid. Majority of the time approved within minutes.",
  },
  {
    icon: Landmark,
    title: "Link your US bank",
    description:
      "Connect a US checking account securely through Plaid. We never see or store your bank credentials. Only a tokenised link.",
  },
  {
    icon: Users,
    title: "Add a recipient",
    description:
      "Enter the recipient's name, Indian bank account, IFSC, and contact. Recipients complete a KYC Aadhaar and PAN verification.",
  },
  {
    icon: Send,
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
        <div className="max-w-4xl mb-14 md:mb-20">
          <h2 className="display-mixed text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-foreground">
            Four steps, one evening at most.
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A simple, regulated path from your US bank account to any Indian
            bank account, with verification at every step.
          </p>
        </div>

        {/* Step grid with asymmetric vertical rhythm on lg+ */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-6 sm:p-7 transition-colors duration-200 hover:border-foreground/20"
            >
              <div className="mb-8">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand)]/10 text-[var(--brand-deep)]">
                  <step.icon className="size-[18px]" />
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>      </div>
    </section>
  );
}
