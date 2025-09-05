import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import OutcomesSection from "@/components/sections/outcomes-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OutcomesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
