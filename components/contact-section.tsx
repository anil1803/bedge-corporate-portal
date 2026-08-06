"use client";

import Link from "next/link";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, contactItems } from "@/lib/brochure-data";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-900" : "relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-900"}>
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200 dark:bg-white/10" />

      <div className="relative mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <MotionBlock type="slide" direction="left">
          <motion.div
            className="h-1 w-16 bg-[#c8952b]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
          <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#c8952b]">Contact Us</p>
          <h2 className="mt-4 text-4xl font-extrabold text-bedge-ink sm:text-5xl dark:text-white">
            Let&apos;s Start a <span className="text-[#c8952b]">Conversation</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Have questions? We&apos;re here to help. Reach out to our expert team for personalized guidance.
          </p>

          <div className="mt-10 space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="group flex gap-4 border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#c8952b]/60 hover:shadow-premium-lg dark:border-white/10 dark:bg-slate-950"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center bg-bedge-ink text-[#c8952b] shadow-sm dark:bg-bedge-blue dark:text-white"
                    whileHover={{ scale: 1.06 }}
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

            <motion.div
              className="flex gap-4 border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="flex h-14 w-14 shrink-0 items-center justify-center bg-bedge-ink text-[#c8952b] shadow-sm dark:bg-bedge-blue dark:text-white"
                whileHover={{ scale: 1.06 }}
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

          <motion.div
            className="mt-10 border-l-4 border-[#c8952b] bg-white p-8 shadow-sm dark:bg-slate-950"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="serif-accent text-2xl italic text-bedge-ink dark:text-white">
              &quot;{company.consultationLine}&quot;
            </p>
          </motion.div>
        </MotionBlock>

        <MotionBlock delay={0.1} type="slide" direction="right">
          <motion.div
            className="border border-slate-200 bg-white p-8 shadow-premium-lg dark:border-white/10 dark:bg-slate-950"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold text-bedge-ink dark:text-white">Send us a Message</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

            <form className="mt-8 grid gap-6" aria-label="Contact form">
              <div className="grid gap-3">
                <label htmlFor="name" className="text-sm font-semibold text-bedge-ink dark:text-white">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="h-12 border border-slate-300 bg-white px-4 outline-none transition-all duration-300 focus:border-[#c8952b] focus:ring-2 focus:ring-[#c8952b]/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
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
                    className="h-12 border border-slate-300 bg-white px-4 outline-none transition-all duration-300 focus:border-[#c8952b] focus:ring-2 focus:ring-[#c8952b]/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
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
                    className="h-12 border border-slate-300 bg-white px-4 outline-none transition-all duration-300 focus:border-[#c8952b] focus:ring-2 focus:ring-[#c8952b]/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
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
                  className="resize-none border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#c8952b] focus:ring-2 focus:ring-[#c8952b]/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                  placeholder="Tell us about your business needs..."
                />
              </div>
              <Button
                type="submit"
                className="h-14 w-full bg-bedge-ink text-base font-extrabold uppercase tracking-wide text-white shadow-premium-lg hover:bg-[#c8952b] hover:text-bedge-ink"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <motion.div
              className="mt-8 flex min-h-48 items-center justify-center border border-slate-200 bg-slate-50 text-center dark:border-white/10 dark:bg-slate-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col items-center gap-3">
                <MapPin className="h-12 w-12 text-[#c8952b]" />
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Interactive Map
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {company.address}
                </p>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="flex items-center gap-2 font-semibold text-bedge-ink transition-colors hover:text-[#c8952b] dark:text-white"
              >
                <Phone className="h-4 w-4" />
                {company.phones[0]}
              </Link>
              <Link
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 font-semibold text-bedge-ink transition-colors hover:text-[#c8952b] dark:text-white"
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
