import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BenefitsSection, FinalCtaSection, HeroSection, NoticesSection, PlanFinderSection, RegistrationStepsSection, ServicesSection, TestimonialsSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PlanFinderSection />
        <ServicesSection />
        <BenefitsSection />
        <RegistrationStepsSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <NoticesSection />
      </main>
      <SiteFooter />
    </>
  );
}
