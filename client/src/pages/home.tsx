import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProgramsSection from "@/components/programs-section";
import TrainersSection from "@/components/trainers-section";
import SuccessStoriesSection from "@/components/success-stories-section";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('bg-charcoal');
          nav.classList.remove('bg-charcoal/95');
        } else {
          nav.classList.add('bg-charcoal/95');
          nav.classList.remove('bg-charcoal');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Navigation />
      <HeroSection />
      <ProgramsSection />
      <TrainersSection />
      <SuccessStoriesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
