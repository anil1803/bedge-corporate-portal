import type { Metadata } from "next";
import { ServiceCategories } from "@/components/service-categories";

export const metadata: Metadata = {
  title: "Services",
  description: "Registration Services, MCA Compliances, Legal Services, Finance, Insurance, and Other Services"
};

export default function ServicesPage() {
  return (
    <>
      <ServiceCategories />
    </>
  );
}
