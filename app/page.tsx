import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyKavelo from "@/components/sections/WhyKavelo";
import ProcessSnapshot from "@/components/sections/ProcessSnapshot";
import SocialProof from "@/components/sections/SocialProof";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyKavelo />
      <ProcessSnapshot />
      <SocialProof />
      <CTABanner />
    </>
  );
}
