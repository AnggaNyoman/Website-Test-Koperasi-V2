import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import StatsCounter from "@/components/home/StatsCounter";
import TrustComplianceSection from "@/components/home/TrustComplianceSection";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import MadataMobileSection from "@/components/home/MadataMobileSection";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CTASection from "@/components/home/CTASection";
import { SITE_CONFIG } from "@/lib/constants";
// ============================================
// HOME PAGE METADATA
// ============================================
export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
};

// ============================================
// HOME PAGE
// ============================================
export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Trust & Regulatory Compliance Strip */}
      <TrustComplianceSection />

      {/* Animated Statistics */}
      <StatsCounter />

{/* Services Highlight */}
      <ServicesHighlight />

{/* Madata Mobile */}
      <MadataMobileSection />

{/* Testimonials */}
      <TestimonialsSlider />

      {/* CTA */}
      <CTASection />
    </>
  );
}
