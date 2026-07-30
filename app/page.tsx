import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ServiceCategories } from "@/components/service-categories";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProcessTimeline } from "@/components/process-timeline";
import { FAQSection } from "@/components/faq-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceCategories preview />
      <ProcessTimeline />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <ContactSection compact />
    </>
  );
}
