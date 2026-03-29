import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CurrencyConverterSection } from "@/components/sections/CurrencyConverterSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PaymentSection } from "@/components/sections/PaymentSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CurrencyConverterSection />
        <ComparisonSection />
        <PaymentSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
