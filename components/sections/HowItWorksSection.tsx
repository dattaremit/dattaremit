import { UserCheck, Landmark, Users, Send } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Create and verify your account",
    description:
      "Sign up with your email and complete identity verification (KYC) through our regulated partner Zynk Labs. Approval is typically same-day.",
  },
  {
    icon: Landmark,
    title: "Link your US bank account",
    description:
      "Connect a US checking account securely through Plaid. DattaRemit never sees or stores your bank credentials — only a tokenised link.",
  },
  {
    icon: Users,
    title: "Add a verified recipient",
    description:
      "Enter the recipient's name, Indian bank account, IFSC, and contact details. Your recipient completes lightweight Aadhaar and PAN verification.",
  },
  {
    icon: Send,
    title: "Send and track",
    description:
      "Confirm the transfer amount, exchange rate, and fees on the review screen. Authorise with email step-up (web) or biometrics (mobile). Track status in Activity.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How DattaRemit works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, regulated path from your US bank account to any Indian
            bank account — with verification at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border bg-card p-6 shadow-sm"
            >
              <div className="absolute -top-3 left-6 inline-flex items-center justify-center h-7 px-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                Step {index + 1}
              </div>
              <div className="text-primary mb-4 mt-2">
                <step.icon className="size-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground max-w-2xl mx-auto">
          Transfer range: USD 1 – USD 10,000 per transaction. A weekly
          aggregate limit also applies and is visible in the app. All fees and
          the exact exchange rate are disclosed before you confirm.
        </div>
      </div>
    </section>
  );
}
