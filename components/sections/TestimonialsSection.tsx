import { Quote } from "lucide-react";

const testimonials = [
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
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[color-mix(in_oklch,var(--mint)_10%,transparent)] to-transparent pointer-events-none"
      />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <h2 className="display-mixed text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-foreground">
            Delightful to use, every time.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative rounded-3xl border border-border bg-card p-7 sm:p-8 transition-colors duration-200 hover:border-foreground/20"
            >
              <Quote
                className="size-8 text-[var(--brand)] mb-6"
                aria-hidden
              />
              <blockquote className="text-[17px] md:text-lg leading-relaxed text-foreground font-medium">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/70 flex items-center gap-3">
                <span className="size-10 rounded-full bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand-deep)]/10 border border-[var(--brand)]/30 text-[var(--brand-deep)] font-semibold text-sm tracking-tight inline-flex items-center justify-center">
                  {testimonial.avatar}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold tracking-tight">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
