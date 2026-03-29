import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-primary/5 via-background to-primary/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Money without borders </span>
              <span className="text-primary">For the borderless</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10">
              Global banking and payments that is low-cost, instant and secure.
            </p>

            <Button size="xl" className="group" asChild>
              <a href="#contact">
                Open an Account
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl" />
            <Image
              src="/hero.png"
              alt="DattaRemit App"
              width={750}
              height={750}
              className="relative z-10 w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
