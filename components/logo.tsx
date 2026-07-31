import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/brochure-data";

export function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label={company.name}>
      <Image
        src="/brochure/logo.jpeg"
        alt="B-EDGE Business Consultants Logo"
        width={280}
        height={80}
        priority
        className="h-16 w-auto object-contain"
      />
    </Link>
  );
}
