import Link from "next/link";
import { company, serviceCategories } from "@/lib/brochure-data";
import { Logo } from "@/components/logo";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-[#c8952b] bg-bedge-ink text-white">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-6">
          <div className="inline-block bg-white p-3">
            <Logo />
          </div>
          <p className="script-accent text-2xl text-[#c8952b]">
            &quot;{company.successLine}&quot;
          </p>
          <p className="text-sm leading-6 text-slate-300">
            Your trusted partner for all business registration, compliance, and consulting needs across Madhya Pradesh.
          </p>
          <div className="flex gap-3">
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center border border-[#c8952b]/40 text-[#c8952b] transition-all duration-300 hover:bg-[#c8952b] hover:text-bedge-ink"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center border border-[#c8952b]/40 text-[#c8952b] transition-all duration-300 hover:bg-[#c8952b] hover:text-bedge-ink"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center border border-[#c8952b]/40 text-[#c8952b] transition-all duration-300 hover:bg-[#c8952b] hover:text-bedge-ink"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-white">Quick Links</h3>
          <div className="mt-2 h-px w-10 bg-[#c8952b]" />
          <div className="mt-4 grid gap-3 text-sm">
            <Link
              href="/"
              className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-white">Services</h3>
          <div className="mt-2 h-px w-10 bg-[#c8952b]" />
          <div className="mt-4 grid gap-3 text-sm">
            {serviceCategories.slice(0, 6).map((category) => (
              <Link
                key={category.title}
                href="/services"
                className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-white">Contact Info</h3>
          <div className="mt-2 h-px w-10 bg-[#c8952b]" />
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#c8952b]" />
              <p className="text-slate-300">{company.address}</p>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#c8952b]" />
              <Link
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
              >
                {company.phones[0]}
              </Link>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#c8952b]" />
              <Link
                href={`mailto:${company.email}`}
                className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
              >
                {company.email}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/15 py-6">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 sm:flex-row">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-300 transition-colors duration-300 hover:text-[#c8952b]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
