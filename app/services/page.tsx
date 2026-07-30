import type { Metadata } from "next";
import { ServiceCategories } from "@/components/service-categories";
import { serviceCategories } from "@/lib/brochure-data";
import { ServicesHeader } from "@/components/page-headers";

export const metadata: Metadata = {
  title: "Services",
  description: "Registration Services, MCA Compliances, Legal Services, Finance, Insurance, and Other Services"
};

export default function ServicesPage() {
  const serviceCount = serviceCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <>
      <ServicesHeader serviceCount={serviceCount} />
      <ServiceCategories />
    </>
  );
}
