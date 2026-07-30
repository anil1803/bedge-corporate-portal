import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { WhyChooseUs } from "@/components/why-choose-us";

export const metadata: Metadata = {
  title: "About",
  description: "About B EDGE BUSINESS CONSULTANTS LLP"
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-bedge-blue">About Us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-bedge-ink sm:text-5xl">
            B EDGE BUSINESS CONSULTANTS LLP
          </h1>
        </div>
      </section>
      <AboutSection />
      <WhyChooseUs />
    </>
  );
}
