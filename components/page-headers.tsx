"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, Briefcase } from "lucide-react";

export function AboutHeader() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles className="h-4 w-4" />
          <span className="uppercase tracking-wider">About Us</span>
        </motion.div>
        <motion.h1
          className="mt-6 max-w-4xl text-5xl font-bold text-bedge-ink sm:text-6xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          B EDGE <span className="text-gradient">BUSINESS CONSULTANTS LLP</span>
        </motion.h1>
      </div>
    </section>
  );
}

export function ContactHeader() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Mail className="h-4 w-4" />
          <span className="uppercase tracking-wider">Contact Us</span>
        </motion.div>
        <motion.h1
          className="mt-6 max-w-4xl text-5xl font-bold text-bedge-ink sm:text-6xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let&apos;s Start a <span className="text-gradient">Conversation</span>
        </motion.h1>
      </div>
    </section>
  );
}

export function ServicesHeader({ serviceCount }: { serviceCount: number }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Briefcase className="h-4 w-4" />
          <span className="uppercase tracking-wider">Our Services</span>
        </motion.div>
        <motion.h1
          className="mt-6 max-w-4xl text-5xl font-bold text-bedge-ink sm:text-6xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-gradient">{serviceCount}+</span> Comprehensive Business Solutions
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          From registration to compliance, we handle all your business needs with expertise and precision.
        </motion.p>
      </div>
    </section>
  );
}
