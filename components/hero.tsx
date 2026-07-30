"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";

export function Hero() {
  const floatingCards = [
    { icon: TrendingUp, label: "Business Growth", delay: 0.2, position: "top-right" },
    { icon: ShieldCheck, label: "Compliance", delay: 0.3, position: "bottom-left" },
    { icon: Users, label: "Expert Support", delay: 0.4, position: "bottom-right" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-bedge-blue/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-bedge-aqua/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Premium Gradient Top Bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-premium" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        {/* Left Content */}
        <MotionBlock type="slide" direction="up">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4" />
            <span className="uppercase tracking-wider">{company.name}</span>
          </motion.div>

          <motion.h1
            className="mt-8 max-w-4xl text-5xl font-bold leading-tight text-bedge-ink sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-gradient">{company.tagline}</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {company.successLine}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="btn-premium h-14 px-8 text-base shadow-premium-lg"
            >
              <Link href="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base border-bedge-blue/30 hover:bg-bedge-blue/5"
            >
              <Link href="/contact">
                Contact Us <PhoneCall className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { value: "500+", label: "Clients" },
              { value: "35+", label: "Years Expertise" },
              { value: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </MotionBlock>

        {/* Right Content with Floating Cards */}
        <MotionBlock delay={0.1} type="slide" direction="right" className="relative">
          <div className="relative mx-auto aspect-square max-w-[500px]">
            {/* Main Image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-white/20 bg-white shadow-premium-xl dark:bg-slate-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/brochure/brochure-cover-contact.jpeg"
                alt="B EDGE Business Consultants LLP brochure cover"
                fill
                priority
                className="object-cover object-right"
                sizes="(min-width: 1024px) 500px, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bedge-blue/20 to-transparent" />
            </motion.div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => {
              const Icon = card.icon;
              const positions = {
                "top-right": "top-8 -right-4",
                "bottom-left": "-bottom-4 -left-4",
                "bottom-right": "bottom-8 -right-8"
              };

              return (
                <motion.div
                  key={card.label}
                  className={`absolute ${positions[card.position as keyof typeof positions]} glass-strong rounded-xl border border-white/30 p-4 shadow-premium-lg dark:border-white/10`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: card.delay, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bedge-blue/10 text-bedge-blue dark:bg-bedge-blue/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-bedge-ink dark:text-white">{card.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </MotionBlock>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
    </section>
  );
}
