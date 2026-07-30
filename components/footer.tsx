import Link from "next/link";
import { company, serviceCategories } from "@/lib/brochure-data";
import { Logo } from "@/components/logo";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-bedge-blue/10 bg-white dark:border-bedge-blue/20 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        {/* Brand Section */}
        <div className="space-y-6">
          <Logo />
          <p className="script-accent text-2xl text-bedge-blue dark:text-bedge-aqua">
            &quot;{company.successLine}&quot;
          </p>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            Your trusted partner for all business registration, compliance, and consulting needs across Madhya Pradesh.
          </p>
          {/* Social Links */}
          <div className="flex gap-3">
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-bedge-blue/20 text-bedge-blue transition-all duration-300 hover:bg-bedge-blue hover:text-white dark:border-bedge-blue/30 dark:text-bedge-aqua dark:hover:bg-bedge-aqua dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-bedge-blue/20 text-bedge-blue transition-all duration-300 hover:bg-bedge-blue hover:text-white dark:border-bedge-blue/30 dark:text-bedge-aqua dark:hover:bg-bedge-aqua dark:hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-bedge-blue/20 text-bedge-blue transition-all duration-300 hover:bg-bedge-blue hover:text-white dark:border-bedge-blue/30 dark:text-bedge-aqua dark:hover:bg-bedge-aqua dark:hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-bedge-ink dark:text-white">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <Link
              href="/"
              className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-bedge-ink dark:text-white">Services</h3>
          <div className="mt-4 grid gap-3 text-sm">
            {serviceCategories.slice(0, 6).map((category) => (
              <Link
                key={category.title}
                href="/services"
                className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-bedge-ink dark:text-white">Contact Info</h3>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-bedge-blue dark:text-bedge-aqua" />
              <p className="text-slate-600 dark:text-slate-400">{company.address}</p>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-bedge-blue dark:text-bedge-aqua" />
              <Link
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
              >
                {company.phones[0]}
              </Link>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-bedge-blue dark:text-bedge-aqua" />
              <Link
                href={`mailto:${company.email}`}
                className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
              >
                {company.email}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-bedge-blue/10 bg-slate-50 py-6 dark:border-bedge-blue/20 dark:bg-slate-900">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-600 transition-colors duration-300 hover:text-bedge-blue dark:text-slate-400 dark:hover:text-bedge-aqua"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
