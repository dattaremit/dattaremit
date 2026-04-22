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
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="eyebrow mb-5">
            <span className="tabular">07</span>
            <span className="h-px w-6 bg-foreground/30" />
            Customer stories
          </div>
          <h2 className="display-mixed text-[clamp(2rem,5vw,3.75rem)] text-foreground">
            <span className="font-semibold">Delightful</span>{" "}
            <span className="font-light italic text-muted-foreground">
              to use,
            </span>{" "}
            <span className="font-semibold">every time.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <figure
              key={testimonial.name}
              className={`relative rounded-3xl border border-border bg-card p-7 sm:p-8 transition-all duration-300 hover:border-foreground/20 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-24px_rgba(20,16,10,0.25)] ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
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
