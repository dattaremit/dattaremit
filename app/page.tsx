import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SupportedCountriesSection } from "@/components/sections/SupportedCountriesSection";
import { VisaPartnerSection } from "@/components/sections/VisaPartnerSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PaymentSection } from "@/components/sections/PaymentSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { EncryptionSection } from "@/components/sections/EncryptionSection";
import { CustodySection } from "@/components/sections/CustodySection";
import { VerificationSection } from "@/components/sections/VerificationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SupportedCountriesSection />
        <VisaPartnerSection />
        <HowItWorksSection />
        <ComparisonSection />
        <PaymentSection />
        <PartnersSection />
        <EncryptionSection />
        <CustodySection />
        <VerificationSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
