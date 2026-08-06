"use client";

import { Mail, Send } from "lucide-react";
import { MotionBlock } from "@/components/motion";
import { motion } from "framer-motion";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-bedge-ink py-24">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#c8952b]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionBlock type="fade">
          <div className="text-center">
            <motion.div
              className="mx-auto flex h-14 w-14 items-center justify-center border border-[#c8952b]/50 text-[#c8952b]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Mail className="h-6 w-6" />
            </motion.div>
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#c8952b]">Newsletter</p>
            <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Subscribe to our newsletter for the latest business insights, regulatory updates, and expert tips.
            </p>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.2} type="slide" direction="up">
          <motion.form
            onSubmit={handleSubmit}
            className="mt-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="h-14 flex-1 border border-white/20 bg-white px-6 text-bedge-ink outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#c8952b] focus:ring-2 focus:ring-[#c8952b]/25"
              />
              <button
                type="submit"
                className="h-14 bg-[#c8952b] px-8 font-extrabold uppercase tracking-wide text-bedge-ink shadow-lg transition-all duration-300 hover:bg-white active:scale-95"
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Subscribe <Send className="h-4 w-4" />
                  </span>
                )}
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-white/70">
              No spam, unsubscribe anytime. Read our{" "}
              <a href="#" className="underline hover:text-white">
                Privacy Policy
              </a>
            </p>
          </motion.form>
        </MotionBlock>
      </div>
    </section>
  );
}
