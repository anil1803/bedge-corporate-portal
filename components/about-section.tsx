"use client";

import Image from "next/image";
import { aboutParagraphs } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Zap } from "lucide-react";

const coreValues = [
  { icon: Shield, title: "Integrity", description: "We maintain the highest ethical standards in all our dealings." },
  { icon: Users, title: "Client Focus", description: "Your success is our priority. We work tirelessly for your goals." },
  { icon: Zap, title: "Innovation", description: "We bring creative solutions to complex business challenges." },
  { icon: Heart, title: "Excellence", description: "We deliver quality services that exceed expectations." }
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-24 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionBlock type="fade">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Us
            </motion.div>
            <h2 className="mt-6 text-4xl font-bold text-bedge-ink sm:text-5xl dark:text-white">
              Your Trusted <span className="text-gradient">Business Partner</span>
            </h2>
          </div>
        </MotionBlock>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <MotionBlock delay={0.1} type="slide" direction="left">
            <motion.div
              className="relative min-h-[400px] overflow-hidden rounded-2xl border border-bedge-blue/10 bg-white shadow-premium-xl dark:bg-slate-800/50 dark:border-bedge-blue/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/brochure/brochure-services-about.jpeg"
                alt="Brand strategy visual from B EDGE brochure"
                fill
                className="object-cover object-left-bottom"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bedge-blue/30 to-transparent" />
            </motion.div>
          </MotionBlock>

          {/* Content Side */}
          <MotionBlock delay={0.2} type="slide" direction="right" className="flex flex-col justify-center">
            <div className="space-y-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              {aboutParagraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <motion.div
                className="rounded-2xl border border-bedge-blue/10 bg-white p-6 shadow-premium-lg dark:bg-slate-800/50 dark:border-bedge-blue/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-bedge-blue to-bedge-aqua text-white shadow-lg">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-bedge-ink dark:text-white">Our Mission</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To provide innovative, value-driven solutions with integrity and expertise, helping businesses achieve compliance and unlock growth potential.
                </p>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-bedge-blue/10 bg-white p-6 shadow-premium-lg dark:bg-slate-800/50 dark:border-bedge-blue/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-bedge-aqua to-bedge-blue text-white shadow-lg">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-bedge-ink dark:text-white">Our Vision</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To be the most trusted business consulting partner, recognized for excellence, innovation, and client success across Madhya Pradesh.
                </p>
              </motion.div>
            </div>
          </MotionBlock>
        </div>

        {/* Core Values */}
        <MotionBlock delay={0.3} type="fade">
          <div className="mt-20">
            <h3 className="text-center text-3xl font-bold text-bedge-ink dark:text-white">Core Values</h3>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="group rounded-2xl border border-bedge-blue/10 bg-white p-6 text-center shadow-premium-lg transition-all duration-300 hover:shadow-premium-xl hover:border-bedge-blue/30 dark:bg-slate-800/50 dark:border-bedge-blue/20 dark:hover:border-bedge-blue/40"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <motion.div
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-bedge-blue to-bedge-aqua text-white shadow-glow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <h4 className="mt-4 text-lg font-semibold text-bedge-ink dark:text-white group-hover:text-bedge-blue transition-colors">
                      {value.title}
                    </h4>
                    <p className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-300">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}
