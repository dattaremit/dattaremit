"use client";
import Image from "next/image";

export function VisaPartnerSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-12 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mx-auto max-w-5xl fade-up" style={{ animationDelay: "200ms" }}>
          
          {/* Outer container for the animated border */}
          <div className="relative rounded-[2rem] p-[6px] overflow-hidden group shadow-2xl hover:shadow-brand/20 transition-shadow duration-500">
            
            {/* Spinning conic gradient for the border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square">
              <div className="absolute inset-0 animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--color-brand)_15%,var(--color-mint)_35%,transparent_50%,transparent_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Inner Card Content */}
            <div className="relative h-full w-full rounded-[calc(2rem-6px)] bg-card overflow-hidden">
              
              {/* Internal subtle glow moving on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand/10 to-transparent group-hover:animate-shimmer pointer-events-none" />
              
              <div className="px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                
                <div className="flex-1 text-center md:text-left space-y-5">

                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Global scale meets local speed.
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
                    DattaRemit and Visa have joined forces to ensure your money reaches its destination with unparalleled speed, security, and global reliability. 
                  </p>
                </div>

                <div className="flex-shrink-0 relative group/logo">
                  {/* Backdrop glowing pulse behind logo */}
                  <div className="absolute inset-0 bg-brand/20 blur-2xl rounded-full animate-pulse group-hover/logo:bg-brand/40 transition-colors duration-500" />
                  
                  <div className="relative flex items-center justify-center p-8 md:p-10 rounded-3xl bg-background/80 border border-border/60 shadow-xl backdrop-blur-md transform group-hover/logo:scale-105 transition-transform duration-500">
                    <Image 
                      src="/visa.png" 
                      alt="Visa Logo" 
                      width={220} 
                      height={80} 
                      className="h-14 md:h-20 w-auto object-contain drop-shadow-md" 
                      priority
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
