import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowLeft, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Coming soon",
  description:
    "The DattaRemit mobile app is on the way to iOS and Android. Request early access and we'll let you know the moment it's live.",
  openGraph: {
    title: "Coming soon | DattaRemit",
    description:
      "The DattaRemit mobile app is on the way to iOS and Android. Request early access and we'll let you know the moment it's live.",
    url: "https://dattaremit.com/coming-soon",
  },
  alternates: {
    canonical: "https://dattaremit.com/coming-soon",
  },
};

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[90svh] overflow-hidden brand-mesh flex items-center">
          <div className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-20 md:pb-28 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 rounded-full bg-[var(--brand-deep)] animate-ping opacity-60" />
                  <span className="relative rounded-full size-1.5 bg-[var(--brand-deep)]" />
                </span>
                In the works
              </span>

              <h1 className="mt-6 display-mixed text-[clamp(2.5rem,7vw,5rem)] text-foreground">
                <span className="font-semibold">Mobile app,</span>
                <br />
                <span className="font-light italic text-muted-foreground">
                  coming soon.
                </span>
              </h1>

              <p className="mt-6 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                We&apos;re polishing the last details before DattaRemit lands on
                the App Store and Google Play. Sign up for early access and
                you&apos;ll hear from us the moment it goes live.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="xl" variant="brand" asChild>
                  <Link href="/#contact">
                    Request early access
                    <ArrowUpRight className="size-5" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/">
                    <ArrowLeft className="size-4" />
                    Back to home
                  </Link>
                </Button>
              </div>


              <p className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Bell className="size-3.5 text-[var(--brand-deep)]" />
                No spam. One email when the app is live.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

