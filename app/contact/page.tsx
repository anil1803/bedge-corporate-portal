import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { company } from "@/lib/brochure-data";

export const metadata: Metadata = {
  title: "Contact",
  description: `${company.address}. ${company.email}`
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-bedge-blue">Contact Us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-bedge-ink sm:text-5xl">
            Get in Touch with Experts of B EDGE BUSINESS CONSULTANTS LLP
          </h1>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
