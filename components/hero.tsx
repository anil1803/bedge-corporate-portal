"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, TrendingUp, ShieldCheck, Users, CheckCircle2, Building2, FileText, Scale, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";

export function Hero() {
  const services = [
    { icon: Building2, title: "Company Registration", desc: "Pvt Ltd, LLP, Partnership" },
    { icon: FileText, title: "GST & Tax Compliance", desc: "Registration & Filing" },
    { icon: Scale, title: "Legal Services", desc: "Agreements & Compliance" },
    { icon: DollarSign, title: "Business Loans", desc: "MSME & Mudra Loans" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 dark:from-slate-950 dark:via-blue-950/20 dark:to-cyan-950/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 h-72 w-72 rounded-full bg-bedge-blue/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-bedge-aqua/5 blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Premium Gradient Top Bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-premium" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content - Service Cards */}
          <MotionBlock delay={0.1} type="slide" direction="left" className="order-2 lg:order-1">
            <div className="space-y-4">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4" />
                <span className="uppercase tracking-wider">Trusted by 500+ Businesses</span>
              </motion.div>

              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="glass-strong rounded-2xl border border-white/30 p-6 shadow-premium-lg dark:border-white/10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-premium text-white shadow-premium">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-bedge-ink dark:text-white">{service.title}</h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-bedge-blue shrink-0" />
                    </div>
                  </motion.div>
                );
              })}

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="btn-premium h-14 px-8 text-base shadow-premium-lg"
                >
                  <Link href="/services">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-base border-bedge-blue/30 hover:bg-bedge-blue/5"
                >
                  <Link href="/contact">
                    Get Free Consultation <PhoneCall className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <motion.div
                className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-slate-800"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { value: "500+", label: "Happy Clients" },
                  { value: "35+", label: "Years Experience" },
                  { value: "98%", label: "Success Rate" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </MotionBlock>

          {/* Right Content - Person Image */}
          <MotionBlock type="slide" direction="right" className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Person Image */}
              <motion.div
                className="relative mx-auto max-w-sm overflow-hidden rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/brochure/person.png"
                  alt="B-EDGE Business Consultants"
                  width={400}
                  height={400}
                  className="w-full object-cover object-center rounded-2xl"
                  priority
                />
              </motion.div>

              {/* Tagline below image */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.h2
                  className="text-3xl font-bold leading-tight text-bedge-ink sm:text-4xl dark:text-white curved-text"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className="text-gradient">{company.tagline}</span>
                </motion.h2>
              </motion.div>
            </div>
          </MotionBlock>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
    </section>
  );
}
