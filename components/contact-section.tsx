"use client";

import Link from "next/link";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, contactItems } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "bg-gradient-to-b from-white via-slate-50/50 to-white py-16 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950" : "bg-gradient-to-b from-white via-slate-50/50 to-white py-24 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950"}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        {/* Contact Info Side */}
        <MotionBlock type="slide" direction="left">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-bedge-blue/20 bg-bedge-blue/5 px-4 py-2 text-sm font-semibold text-bedge-blue dark:border-bedge-blue/30 dark:bg-bedge-blue/10"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.div>
          <h2 className="mt-6 text-4xl font-bold text-bedge-ink sm:text-5xl dark:text-white">
            Let&apos;s Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Have questions? We&apos;re here to help. Reach out to our expert team for personalized guidance.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="group flex gap-4 rounded-2xl border border-bedge-blue/10 bg-white p-6 shadow-premium-lg transition-all duration-300 hover:shadow-premium-xl hover:border-bedge-blue/30 dark:bg-slate-800/50 dark:border-bedge-blue/20 dark:hover:border-bedge-blue/40"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-bedge-blue to-bedge-aqua text-white shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold text-bedge-ink dark:text-white">{item.label}</h3>
                    <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Working Hours */}
            <motion.div
              className="flex gap-4 rounded-2xl border border-bedge-blue/10 bg-white p-6 shadow-premium-lg dark:bg-slate-800/50 dark:border-bedge-blue/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 8 }}
            >
              <motion.div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-bedge-aqua to-bedge-blue text-white shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="h-6 w-6" />
              </motion.div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-bedge-ink dark:text-white">Working Hours</h3>
                <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            className="mt-10 rounded-2xl border border-bedge-blue/10 bg-gradient-to-br from-bedge-blue/5 to-bedge-aqua/5 p-8 dark:border-bedge-blue/20 dark:from-bedge-blue/10 dark:to-bedge-aqua/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="serif-accent text-2xl italic text-bedge-blue dark:text-bedge-aqua">
              &quot;{company.consultationLine}&quot;
            </p>
          </motion.div>
        </MotionBlock>

        {/* Form Side */}
        <MotionBlock delay={0.1} type="slide" direction="right">
          <motion.div
            className="rounded-2xl border border-bedge-blue/10 bg-white p-8 shadow-premium-xl dark:bg-slate-800/50 dark:border-bedge-blue/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-bedge-ink dark:text-white">Send us a Message</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

            <form className="mt-8 grid gap-6" aria-label="Contact form">
              <div className="grid gap-3">
                <label htmlFor="name" className="text-sm font-semibold text-bedge-ink dark:text-white">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="h-12 rounded-xl border border-bedge-blue/20 bg-white px-4 outline-none transition-all duration-300 focus:border-bedge-blue focus:ring-2 focus:ring-bedge-blue/20 dark:border-bedge-blue/30 dark:bg-slate-700/50 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="grid gap-3">
                  <label htmlFor="phone" className="text-sm font-semibold text-bedge-ink dark:text-white">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="h-12 rounded-xl border border-bedge-blue/20 bg-white px-4 outline-none transition-all duration-300 focus:border-bedge-blue focus:ring-2 focus:ring-bedge-blue/20 dark:border-bedge-blue/30 dark:bg-slate-700/50 dark:text-white"
                    placeholder="+91 99999 99999"
                  />
                </div>
                <div className="grid gap-3">
                  <label htmlFor="email" className="text-sm font-semibold text-bedge-ink dark:text-white">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="h-12 rounded-xl border border-bedge-blue/20 bg-white px-4 outline-none transition-all duration-300 focus:border-bedge-blue focus:ring-2 focus:ring-bedge-blue/20 dark:border-bedge-blue/30 dark:bg-slate-700/50 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <label htmlFor="message" className="text-sm font-semibold text-bedge-ink dark:text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="rounded-xl border border-bedge-blue/20 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-bedge-blue focus:ring-2 focus:ring-bedge-blue/20 dark:border-bedge-blue/30 dark:bg-slate-700/50 dark:text-white resize-none"
                  placeholder="Tell us about your business needs..."
                />
              </div>
              <Button
                type="submit"
                className="btn-premium h-14 w-full bg-gradient-premium text-base shadow-premium-lg hover:opacity-90"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>

            {/* Map Placeholder */}
            <motion.div
              className="mt-8 flex min-h-48 items-center justify-center rounded-2xl border border-bedge-blue/10 bg-gradient-to-br from-slate-50 to-slate-100 text-center dark:border-bedge-blue/20 dark:from-slate-700/30 dark:to-slate-800/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col items-center gap-3">
                <MapPin className="h-12 w-12 text-bedge-blue/40 dark:text-bedge-aqua/40" />
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Interactive Map
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {company.address}
                </p>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="flex items-center gap-2 font-semibold text-bedge-blue hover:text-bedge-deep dark:text-bedge-aqua dark:hover:text-bedge-blue transition-colors"
              >
                <Phone className="h-4 w-4" />
                {company.phones[0]}
              </Link>
              <Link
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 font-semibold text-bedge-blue hover:text-bedge-deep dark:text-bedge-aqua dark:hover:text-bedge-blue transition-colors"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </Link>
            </div>
          </motion.div>
        </MotionBlock>
      </div>
    </section>
  );
}
