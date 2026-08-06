"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  FileText,
  Globe2,
  Handshake,
  PhoneCall,
  ShieldCheck,
  Stamp,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";

export function Hero() {
  const services = [
    { icon: Building2, title: "Business Registrations", desc: "Private Ltd, LLP, OPC, Partnership, MSME" },
    { icon: Calculator, title: "Taxation & Compliance", desc: "GST, Income Tax, TDS, ROC filings" },
    { icon: FileText, title: "Accounting & Bookkeeping", desc: "Accounts management, MIS & reporting" },
    { icon: ShieldCheck, title: "Legal & Business Advisory", desc: "Contracts, agreements, notices & more" },
    { icon: Stamp, title: "Trademark Registration", desc: "Brand protection made simple" },
    { icon: Globe2, title: "IEC & FSSAI Registration", desc: "Import export code, FSSAI & more" }
  ];

  const stats = [
    { icon: ShieldCheck, value: "500+", label: "Trusted Clients", prefix: "Trusted by" },
    { icon: Users, value: "35+", label: "Years Experience", prefix: "Professional" },
    { icon: BadgeCheck, value: "100%", label: "Compliance Assurance", prefix: "Focused on" },
    { icon: Handshake, value: "End to End", label: "Business Solutions", prefix: "Complete" }
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-[70%_center] bg-no-repeat lg:bg-center"
        style={{ backgroundImage: "url('/brochure/hero-consulting-bg.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 dark:from-slate-950 dark:via-slate-950/86 dark:to-slate-950/20" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200 dark:bg-white/10" />

      <div className="relative mx-auto max-w-[1500px] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid min-h-[620px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
          <MotionBlock delay={0.1} type="slide" direction="left" className="relative z-10 pb-8 lg:pb-20">
            <div className="max-w-2xl">
              <div className="mb-6 h-1 w-16 bg-[#c8952b]" />
              <h1 className="text-4xl font-extrabold leading-tight text-bedge-ink sm:text-5xl lg:text-6xl dark:text-white">
                Your Trusted Partner for{" "}
                <span className="text-[#c8952b]">Business, Financial & Legal</span>{" "}
                Solutions
              </h1>
              <div className="mt-6 h-px w-14 bg-[#c8952b]" />
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg dark:text-slate-300">
                From Company Incorporation to GST, Income Tax, Accounting,
                Compliance, Trademark Registration and Business Advisory - we
                simplify your business journey under <strong>one roof.</strong>
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 bg-bedge-ink px-7 text-sm font-bold uppercase tracking-wide text-white hover:bg-bedge-blue dark:bg-bedge-blue">
                  <Link href="/contact">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Get Free Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 border-bedge-ink px-7 text-sm font-bold uppercase tracking-wide text-bedge-ink hover:bg-bedge-ink hover:text-white dark:border-white dark:text-white">
                  <Link href="/services">
                    Our Services <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </MotionBlock>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-2 max-w-[1500px] px-4 sm:px-6 lg:-mt-16 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-[#c8952b] bg-bedge-ink shadow-premium-xl dark:bg-slate-900">
          <div className="grid divide-y divide-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="flex min-h-32 gap-4 p-5 text-white lg:flex-col xl:flex-row"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.06, duration: 0.5 }}
                >
                  <Icon className="h-10 w-10 shrink-0 text-[#c8952b]" />
                  <div>
                    <h2 className="text-sm font-extrabold uppercase leading-5">{service.title}</h2>
                    <p className="mt-2 text-sm leading-5 text-white/80">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="flex items-center gap-5 border-slate-200 lg:border-r lg:last:border-r-0"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.08, duration: 0.45 }}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-bedge-ink text-white shadow-premium dark:bg-bedge-blue">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.prefix}</p>
                  <p className="text-2xl font-extrabold leading-7 text-bedge-ink dark:text-white">{stat.value}</p>
                  <p className="text-sm leading-5 text-slate-700 dark:text-slate-300">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
