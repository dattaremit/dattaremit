import Image from "next/image";

export function EncryptionSection() {
  return (
    <section
      id="encryption"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[80%] h-[40%] rounded-[100%] blur-3xl opacity-70 bg-[radial-gradient(ellipse_at_center,var(--brand)_0%,var(--mint)_55%,transparent_80%)]"
              />
              <Image
                src="/encription.png"
                alt="End-to-end encryption"
                width={1200}
                height={900}
                className="relative w-full h-auto"
                priority={false}
              />
            </div>
          </div>

          {/* Right copy */}
          <div className="lg:col-span-6">
            <h2 className="display-mixed text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-foreground">
              End-to-end{" "}
              <span className="font-semibold bg-gradient-to-r from-brand-deep via-brand to-mint bg-clip-text text-transparent">
                encryption
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Personal data is AES-256 encrypted, at rest and in transit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
