import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { AboutHeader } from "@/components/page-headers";

export const metadata: Metadata = {
  title: "About",
  description: "About B EDGE BUSINESS CONSULTANTS LLP"
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutSection />
      <WhyChooseUs />
    </>
  );
}
