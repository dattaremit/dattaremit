"use client";

import LogoLoop from "@/components/LogoLoop";

const partnerLogos = [
  { src: "/plaid.svg", alt: "Plaid" },
  { src: "/persona.svg", alt: "Persona" },
  { src: "/aws.svg", alt: "AWS" },
  { src: "/cybrid.svg", alt: "Cybrid" },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col gap-10 md:gap-14">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="display-mixed text-[clamp(1.6rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground">
              Together, We Deliver{" "}
              <span className="font-semibold bg-gradient-to-r from-brand-deep via-brand to-mint bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Partnering with industry leaders to ensure seamless and secure
              transfers.
            </p>
          </div>

          <div className="min-w-0">
            <LogoLoop
              logos={partnerLogos}
              speed={80}
              direction="left"
              logoHeight={40}
              gap={64}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Trusted partners"
              className="overflow-hidden dark:[&_img]:brightness-0 dark:[&_img]:invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
