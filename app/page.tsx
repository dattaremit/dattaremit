import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CurrencyConverterSection } from "@/components/sections/CurrencyConverterSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PaymentSection } from "@/components/sections/PaymentSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CurrencyConverterSection />
        <HowItWorksSection />
        <ComparisonSection />
        <PaymentSection />
        <TrustSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
