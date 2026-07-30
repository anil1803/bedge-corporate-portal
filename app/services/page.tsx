import type { Metadata } from "next";
import { ServiceCategories } from "@/components/service-categories";
import { serviceCategories } from "@/lib/brochure-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Registration Services, MCA Compliances, Legal Services, Finance, Insurance, and Other Services"
};

export default function ServicesPage() {
  const serviceCount = serviceCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-bedge-blue">
            Our Services
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-bedge-ink sm:text-5xl">
            {serviceCount} brochure-listed services across 6 categories.
          </h1>
        </div>
      </section>
      <ServiceCategories />
    </>
  );
}
