"use client";

import { Quote } from "lucide-react";
import LogoLoop from "@/components/LogoLoop";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Swaraj Kashyap",
    role: "Sends to parents monthly",
    quote: "DattaRemit is great. I get the best rates everytime.",
    avatar: "SK",
  },
  {
    name: "Swati Maini",
    role: "Uses for family support",
    quote:
      "DattaRemit has the most seamless experience. Super simple and super fast.",
    avatar: "SM",
  },
  {
    name: "Mahima Sharma",
    role: "Recommended by a friend",
    quote:
      "I was recommended DattaRemit by a friend. I now use it every month to send money to my parents.",
    avatar: "MS",
  },
  {
    name: "Aditya Rao",
    role: "Engineer in Seattle",
    quote:
      "Transfer landed in my mom's account before I finished my coffee. Wild.",
    avatar: "AR",
  },
  {
    name: "Priya Iyer",
    role: "Grad student in Boston",
    quote:
      "Saved me about $20 in fees compared to the service I used before. Switching was a no-brainer.",
    avatar: "PI",
  },
  {
    name: "Rohan Mehta",
    role: "Sends rent home",
    quote:
      "The rate is exactly what they quote. No surprise mark-ups at the end.",
    avatar: "RM",
  },
  {
    name: "Neha Bhatt",
    role: "Healthcare worker",
    quote:
      "Onboarding took five minutes and I was sending money the same evening.",
    avatar: "NB",
  },
  {
    name: "Karan Suri",
    role: "Founder, NYC",
    quote:
      "Cleanest UX in the remittance space. Feels like a fintech, not a money transfer app.",
    avatar: "KS",
  },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4);

function TestimonialCard({ name, role, quote, avatar }: Testimonial) {
  return (
    <figure className="relative w-[320px] sm:w-[360px] shrink-0 rounded-3xl border border-border bg-card p-6 sm:p-7 transition-colors duration-200 hover:border-foreground/20">
      <Quote className="size-7 text-[var(--brand)] mb-4" aria-hidden />
      <blockquote className="text-[15px] md:text-base leading-relaxed text-foreground font-medium">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 pt-5 border-t border-border/70 flex items-center gap-3">
        <span className="size-9 rounded-full bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand-deep)]/10 border border-[var(--brand)]/30 text-[var(--brand-deep)] font-semibold text-xs tracking-tight inline-flex items-center justify-center">
          {avatar}
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight">{name}</span>
          <span className="text-xs text-muted-foreground">{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="relative z-10">
        <div className="space-y-5 md:space-y-6">
          <LogoLoop
            logos={row1}
            speed={45}
            direction="left"
            logoHeight={220}
            gap={20}
            pauseOnHover
            fadeOut
            fadeOutColor="var(--background)"
            className="overflow-hidden"
            ariaLabel="Customer testimonials, row 1"
            renderItem={(item: Testimonial) => <TestimonialCard {...item} />}
          />
          <LogoLoop
            logos={row2}
            speed={45}
            direction="right"
            logoHeight={220}
            gap={20}
            pauseOnHover
            fadeOut
            fadeOutColor="var(--background)"
            className="overflow-hidden"
            ariaLabel="Customer testimonials, row 2"
            renderItem={(item: Testimonial) => <TestimonialCard {...item} />}
          />
        </div>
      </div>
    </section>
  );
}
