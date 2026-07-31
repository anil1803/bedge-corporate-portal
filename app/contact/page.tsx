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
      <ContactSection />
    </>
  );
}
