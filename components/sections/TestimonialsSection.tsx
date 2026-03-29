import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Swaraj Kashyap",
    quote: "DattaRemit is great. I get the best rates everytime.",
    avatar: "SK",
  },
  {
    name: "Swati Maini",
    quote: "DattaRemit has the most seamless experience. Super simple and super fast.",
    avatar: "SM",
  },
  {
    name: "Mahima Sharma",
    quote: "I was recommended DattaRemit by a friend. I now use it every month to send money to my parents.",
    avatar: "MS",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.02)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Delightful to use
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of happy customers who trust DattaRemit for their money transfers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  quote,
  avatar,
}: {
  name: string;
  quote: string;
  avatar: string;
}) {
  return (
    <div className="bg-card rounded-3xl border shadow-lg p-8 relative">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Quote className="size-6 text-primary" />
      </div>

      <p className="text-lg mb-6 pt-4">&ldquo;{quote}&rdquo;</p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
          {avatar}
        </div>
        <div className="font-medium">{name}</div>
      </div>
    </div>
  );
}
