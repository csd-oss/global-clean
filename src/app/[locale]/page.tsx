import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CalculatorSection } from '@/components/sections/CalculatorSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <CalculatorSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
