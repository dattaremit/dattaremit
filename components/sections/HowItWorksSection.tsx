import { UserCheck, Landmark, Users, Send } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";

const steps = [
  {
    icon: UserCheck,
    // Distinct gradient + matching colored shadow per step so the badges read
    // as a colorful, glossy 3D set rather than four identical chips.
    gradient: "from-indigo-500 to-violet-600",
    shadow: "shadow-indigo-500/40",
    title: "Create and verify",
    description:
      "Sign up with your email and complete identity verification through our regulated partner Cybrid. Majority of the time approved within minutes.",
  },
  {
    icon: Landmark,
    gradient: "from-sky-500 to-blue-600",
    shadow: "shadow-sky-500/40",
    title: "Link your US bank",
    description:
      "Connect a US checking account securely through Plaid. We never see or store your bank credentials. Only a tokenised link.",
  },
  {
    icon: Users,
    gradient: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/40",
    title: "Add a recipient",
    description:
      "Enter the recipient's name, local bank account details, and contact. Recipients complete the identity verification required in their country.",
  },
  {
    icon: Send,
    gradient: "from-orange-500 to-rose-600",
    shadow: "shadow-orange-500/40",
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
          {steps.map((step) => (
            <GlowCard key={step.title} className="h-full">
              <div className="group flex h-full flex-col p-6 sm:p-7">
                <div className="mb-8">
                  <span
                    className={`relative inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg ${step.shadow} ring-1 ring-white/25 transition-transform duration-300 group-hover:-translate-y-0.5`}
                  >
                    {/* Glossy top highlight gives the badge a 3D, lit-from-above feel. */}
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/35 to-transparent" />
                    <step.icon className="relative size-5" strokeWidth={2.25} />
                  </span>
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
