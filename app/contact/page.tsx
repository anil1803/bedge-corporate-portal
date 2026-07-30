import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { company } from "@/lib/brochure-data";
import { ContactHeader } from "@/components/page-headers";

export const metadata: Metadata = {
  title: "Contact",
  description: `${company.address}. ${company.email}`
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactSection />
    </>
  );
}
